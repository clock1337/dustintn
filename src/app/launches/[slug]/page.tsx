import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Calendar,
  Clock,
  Quote as QuoteIcon,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ProudlyServing from "@/components/ProudlyServing";
import { launches, getLaunchBySlug } from "@/data/launches";
import type { Block } from "@/data/launches";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return launches.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const launch = getLaunchBySlug(slug);
  if (!launch) return { title: "Launch not found" };

  const url = `https://dustintn.com/launches/${launch.slug}`;
  const ogImage = `https://dustintn.com${launch.coverImage}`;

  return {
    title: `${launch.title} | DustinTN Launches`,
    description: launch.excerpt,
    alternates: { canonical: `/launches/${launch.slug}` },
    keywords: launch.tags,
    authors: [{ name: "Dustin Smith", url: "https://dustintn.com" }],
    openGraph: {
      title: launch.title,
      description: launch.excerpt,
      url,
      type: "article",
      publishedTime: launch.publishDate,
      authors: ["Dustin Smith"],
      tags: launch.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: launch.coverImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: launch.title,
      description: launch.excerpt,
      images: [ogImage],
    },
  };
}

const dateFmt = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="text-3xl lg:text-4xl font-semibold mt-16 mb-6 text-white scroll-mt-32"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="text-xl lg:text-2xl font-semibold mt-10 mb-4 text-white/90">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="text-lg text-white/70 leading-relaxed mb-6">
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul key={i} className="space-y-3 mb-8 list-none pl-0">
          {block.items.map((item, j) => (
            <li
              key={j}
              className="flex gap-4 text-lg text-white/70 leading-relaxed pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-accent before:font-semibold"
            >
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <figure key={i} className="my-12 p-8 lg:p-10 rounded-2xl border border-accent/20 bg-accent/5">
          <QuoteIcon className="w-8 h-8 text-accent mb-4" />
          <blockquote className="text-2xl lg:text-3xl font-light leading-snug text-white italic">
            &ldquo;{block.text}&rdquo;
          </blockquote>
          {block.attribution && (
            <figcaption className="mt-4 text-sm text-white/50 uppercase tracking-widest">
              — {block.attribution}
            </figcaption>
          )}
        </figure>
      );
    case "image":
      return (
        <figure key={i} className="my-12">
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-black">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover object-top"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-sm text-white/40 italic text-center">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
  }
}

export default async function LaunchDetail({ params }: PageProps) {
  const { slug } = await params;
  const launch = getLaunchBySlug(slug);
  if (!launch) notFound();

  // Adjacent articles for previous / next nav
  const sorted = [...launches].sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));
  const idx = sorted.findIndex((l) => l.slug === launch.slug);
  const newer = idx > 0 ? sorted[idx - 1] : null;
  const older = idx < sorted.length - 1 ? sorted[idx + 1] : null;

  const url = `https://dustintn.com/launches/${launch.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: launch.title,
    description: launch.excerpt,
    image: `https://dustintn.com${launch.coverImage}`,
    datePublished: launch.publishDate,
    dateModified: launch.publishDate,
    author: {
      "@type": "Person",
      name: "Dustin Smith",
      url: "https://dustintn.com",
    },
    publisher: {
      "@type": "Person",
      name: "Dustin Smith",
      url: "https://dustintn.com",
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: launch.tags.join(", "),
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navigation currentPage="launches" />

      <main>
        {/* Hero */}
        <article>
          <header className="pt-32 pb-12 relative overflow-hidden">
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]" />
            <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-4xl">
              <Link
                href="/launches"
                className="inline-flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-full text-white/80 hover:text-white hover:bg-accent transition-all duration-300 border border-white/10 hover:border-accent mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">All launches</span>
              </Link>

              <AnimatedSection>
                <div className="flex flex-wrap items-center gap-4 text-sm text-white/40 mb-6">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <time dateTime={launch.publishDate}>
                      {dateFmt.format(new Date(launch.publishDate))}
                    </time>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {launch.readMinutes} min read
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.05] mb-6">
                  {launch.title}
                </h1>
                <p className="text-xl lg:text-2xl text-white/60 leading-relaxed mb-8">
                  {launch.dek}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {launch.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-[11px] uppercase tracking-wider rounded-full bg-white/5 text-white/60 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={launch.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-pill-primary group"
                  >
                    Visit {launch.liveLabel}
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <Link
                    href={`/portfolio/${launch.portfolioSlug}`}
                    className="btn-pill border border-white/20 text-white hover:bg-white/10 transition-all"
                  >
                    See full case study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </header>

          {/* Cover image */}
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl mb-16">
            <AnimatedSection delay={100}>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black">
                <Image
                  src={launch.coverImage}
                  alt={launch.coverImageAlt}
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1024px"
                  className="object-cover object-top"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Body */}
          <div className="container mx-auto px-6 lg:px-12 pb-20">
            <AnimatedSection className="max-w-3xl mx-auto">
              <div className="prose-launches">{launch.body.map(renderBlock)}</div>
            </AnimatedSection>
          </div>

          {/* Footer CTAs */}
          <section className="py-16 bg-dark-gray border-y border-white/5">
            <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
              <AnimatedSection className="text-center">
                <h2 className="text-3xl font-semibold mb-6">Want the rest of the story?</h2>
                <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
                  The portfolio case study has the full project breakdown — meta, services, tech
                  stack, gallery, results.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href={`/portfolio/${launch.portfolioSlug}`}
                    className="btn-pill btn-pill-primary group"
                  >
                    See the case study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href={launch.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill border border-white/20 text-white hover:bg-white/10 transition-all"
                  >
                    Visit the live site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Adjacent articles */}
          {(newer || older) && (
            <nav className="py-16 bg-black">
              <div className="container mx-auto px-6 lg:px-12">
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {older ? (
                    <Link
                      href={`/launches/${older.slug}`}
                      className="group p-6 rounded-2xl border border-white/10 hover:border-accent/50 bg-dark-gray transition-all"
                    >
                      <div className="text-xs text-white/40 uppercase tracking-widest mb-2">
                        ← Older launch
                      </div>
                      <div className="text-lg font-semibold group-hover:text-accent transition-colors">
                        {older.shortTitle}
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}
                  {newer ? (
                    <Link
                      href={`/launches/${newer.slug}`}
                      className="group p-6 rounded-2xl border border-white/10 hover:border-accent/50 bg-dark-gray transition-all md:text-right"
                    >
                      <div className="text-xs text-white/40 uppercase tracking-widest mb-2">
                        Newer launch →
                      </div>
                      <div className="text-lg font-semibold group-hover:text-accent transition-colors">
                        {newer.shortTitle}
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </nav>
          )}
        </article>

        <ProudlyServing />
        <Footer />
      </main>
    </div>
  );
}
