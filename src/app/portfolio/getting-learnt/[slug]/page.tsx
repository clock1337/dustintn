import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Calendar,
  Trophy,
  Lightbulb,
  Wrench,
  Quote,
  Sparkles,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ProudlyServing from "@/components/ProudlyServing";
import CodejamDemo from "@/components/getting-learnt/CodejamDemo";
import { gettingLearntEntries, getEntryBySlug } from "@/data/getting-learnt";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return gettingLearntEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);
  if (!entry) return { title: "Chapter not found" };

  const title = `${entry.title} — Getting Learnt | DustinTN`;
  const description = entry.shortDescription;

  return {
    title,
    description,
    robots: { index: false, follow: false },
    alternates: { canonical: `/portfolio/getting-learnt/${entry.slug}` },
    openGraph: {
      title,
      description,
      url: `https://dustintn.com/portfolio/getting-learnt/${entry.slug}`,
      type: "article",
    },
  };
}

export default async function GettingLearntDetail({ params }: PageProps) {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);
  if (!entry) notFound();

  const accentStyle = {
    // Per-entry accent overlays the global --accent without touching it elsewhere.
    ["--gl-accent" as string]: `hsl(${entry.themeAccent})`,
    ["--gl-accent-soft" as string]: `hsl(${entry.themeAccentSoft} / 0.12)`,
    ["--gl-accent-border" as string]: `hsl(${entry.themeAccent} / 0.35)`,
  } as React.CSSProperties;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: entry.title,
    description: entry.shortDescription,
    url: `https://dustintn.com/portfolio/getting-learnt/${entry.slug}`,
    dateCreated: entry.date,
    inLanguage: "en-US",
    creator: {
      "@type": "Person",
      name: "Dustin Smith",
      url: "https://dustintn.com",
    },
    keywords: entry.tech.join(", "),
    ...(entry.submissions && {
      hasPart: entry.submissions.map((sub) => ({
        "@type": "WebApplication",
        name: sub.title,
        description: sub.concept,
        url: sub.iframeUrl,
        applicationCategory: "InteractiveDemo",
      })),
    }),
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden" style={accentStyle}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation currentPage="portfolio" />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div
            className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full blur-[200px] opacity-40"
            style={{ background: "var(--gl-accent-soft)" }}
          />
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <Link
              href="/portfolio/getting-learnt"
              className="inline-flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-full text-white/80 hover:text-white transition-all duration-300 border border-white/10 mb-8"
              style={{ borderColor: "var(--gl-accent-border)" }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Getting Learnt</span>
            </Link>

            <AnimatedSection>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider border"
                  style={{
                    background: "var(--gl-accent-soft)",
                    color: "var(--gl-accent)",
                    borderColor: "var(--gl-accent-border)",
                  }}
                >
                  {entry.type === "contest" ? (
                    <span className="inline-flex items-center gap-1.5">
                      <Trophy className="w-3 h-3" />
                      Contest Entry
                    </span>
                  ) : (
                    entry.type
                  )}
                </span>
                <span className="text-xs text-white/40 inline-flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  {entry.date}
                </span>
                <span className="text-xs text-white/40 capitalize">· {entry.status.replace("-", " ")}</span>
              </div>

              <h1 className="text-headline">{entry.title}</h1>
              <p className="text-xl text-white/60 leading-relaxed mt-6 max-w-3xl">{entry.tagline}</p>

              {entry.externalUrl && (
                <a
                  href={entry.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
                  style={{
                    background: "var(--gl-accent)",
                    color: "white",
                  }}
                >
                  {entry.externalLabel ?? "Open the live project"}
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </AnimatedSection>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-dark-gray border-y border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="max-w-3xl">
              <span className="section-label mb-6 block">The Setup</span>
              <div className="space-y-5 text-lg text-white/70 leading-relaxed">
                {entry.intro.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Submissions / Demos */}
        {entry.submissions && entry.submissions.length > 0 && (
          <section className="py-20 bg-black">
            <div className="container mx-auto px-6 lg:px-12">
              <AnimatedSection className="mb-12 max-w-3xl">
                <span className="section-label mb-6 block">The Submissions</span>
                <h2 className="text-headline">
                  {entry.submissions.length} entries, all <span style={{ color: "var(--gl-accent)" }}>playable</span> below.
                </h2>
                <p className="text-white/50 text-lg leading-relaxed mt-6">
                  Each demo is the actual submission running live in an iframe — desktop Chrome / Edge gives the best experience.
                  Try to dismiss the overlay. (You won&apos;t.)
                </p>
              </AnimatedSection>

              <div className="space-y-20">
                {entry.submissions.map((sub, i) => (
                  <AnimatedSection key={sub.slug} delay={i * 50}>
                    <div className="grid lg:grid-cols-12 gap-8">
                      {/* Write-up column */}
                      <div className="lg:col-span-4">
                        <div className="sticky top-28">
                          <div className="text-xs text-white/40 font-mono mb-3">
                            #{(i + 1).toString().padStart(2, "0")} / {entry.submissions!.length.toString().padStart(2, "0")}
                          </div>
                          <h3 className="text-2xl font-semibold mb-3">{sub.title}</h3>
                          <p
                            className="text-base font-medium mb-5 italic"
                            style={{ color: "var(--gl-accent)" }}
                          >
                            {sub.tagline}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-5">
                            {sub.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 text-[11px] uppercase tracking-wider rounded-full bg-white/5 text-white/60 border border-white/10"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <p className="text-white/60 text-sm leading-relaxed mb-4">
                            <span className="text-white/40 uppercase text-[10px] tracking-widest font-medium block mb-2">
                              Concept
                            </span>
                            {sub.concept}
                          </p>
                          <p className="text-white/50 text-sm leading-relaxed">
                            <span className="text-white/40 uppercase text-[10px] tracking-widest font-medium block mb-2">
                              Flow
                            </span>
                            {sub.flow}
                          </p>
                        </div>
                      </div>

                      {/* Demo iframe column */}
                      <div className="lg:col-span-8">
                        <div style={{ borderColor: "var(--gl-accent-border)" }}>
                          <CodejamDemo
                            iframeUrl={sub.iframeUrl}
                            title={sub.title}
                            slug={sub.slug}
                            startEvent={sub.startEvent}
                            openInNewTabUrl={`/portfolio/getting-learnt/${entry.slug}/play/${sub.slug}`}
                          />
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Tech Stack */}
        <section className="py-20 bg-dark-gray border-y border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-12">
              <span className="section-label mb-6 inline-flex items-center justify-center gap-2">
                <Wrench className="w-4 h-4" />
                Tech Stack
              </span>
              <h2 className="text-headline">What it&apos;s built on</h2>
            </AnimatedSection>
            <AnimatedSection delay={100} className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {entry.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2.5 rounded-full text-sm font-medium border bg-black/50"
                  style={{ borderColor: "var(--gl-accent-border)", color: "var(--gl-accent)" }}
                >
                  {tech}
                </span>
              ))}
            </AnimatedSection>
          </div>
        </section>

        {/* Learnings */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="mb-14 max-w-3xl">
              <span className="section-label mb-6 inline-flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                What I Got Learnt
              </span>
              <h2 className="text-headline">
                The actual <span style={{ color: "var(--gl-accent)" }}>takeaways</span>.
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mt-6">
                The point of writing this down is to make sure the lessons survive the project.
                Here&apos;s what came out the other side.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6">
              {entry.learnings.map((learning, i) => (
                <AnimatedSection key={i} delay={i * 75}>
                  <div
                    className="h-full p-7 rounded-2xl border bg-dark-gray hover:bg-dark-gray/80 transition-colors"
                    style={{ borderColor: "var(--gl-accent-border)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 text-sm font-semibold font-mono"
                      style={{
                        background: "var(--gl-accent-soft)",
                        color: "var(--gl-accent)",
                      }}
                    >
                      {(i + 1).toString().padStart(2, "0")}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{learning.title}</h3>
                    <p className="text-white/60 leading-relaxed text-sm">{learning.detail}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="py-20 bg-dark-gray border-y border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <Quote className="w-10 h-10 mx-auto mb-6" style={{ color: "var(--gl-accent)" }} />
              <p className="text-2xl lg:text-3xl font-light leading-relaxed text-white/90 italic">
                &ldquo;{entry.reflection}&rdquo;
              </p>
              <p className="text-white/40 mt-8 text-sm uppercase tracking-widest">— Dustin · {entry.date}</p>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <Sparkles className="w-8 h-8 mx-auto mb-6" style={{ color: "var(--gl-accent)" }} />
              <h2 className="text-headline mb-6">
                More chapters in the <span style={{ color: "var(--gl-accent)" }}>Getting Learnt</span> log.
              </h2>
              <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
                See the rest of the side quests, contest entries, and addons that make up the curiosity half of the practice.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/portfolio/getting-learnt"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all hover:opacity-90"
                  style={{ background: "var(--gl-accent)", color: "white" }}
                >
                  All chapters
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="btn-pill border border-white/20 text-white hover:bg-white/10 transition-all"
                >
                  Client portfolio
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <ProudlyServing />
        <Footer />
      </main>
    </div>
  );
}
