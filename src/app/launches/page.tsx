import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, Newspaper } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ProudlyServing from "@/components/ProudlyServing";
import { launches } from "@/data/launches";

const TITLE = "Launches — Build Stories from DustinTN | Web Development Case Studies";
const DESCRIPTION =
  "Long-form launch stories from recent DustinTN builds. How each project came together, the craft decisions behind it, and what it taught me. Linked to the live sites and full case studies.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/launches" },
  keywords: [
    "DustinTN launches",
    "Dustin Smith case studies",
    "web development launch stories",
    "Nashville web developer portfolio",
    "Next.js case study",
    "custom CMS case study",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://dustintn.com/launches",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "DustinTN — Launches" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const dateFmt = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

export default function LaunchesIndex() {
  const sorted = [...launches].sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "DustinTN Launches",
    description: DESCRIPTION,
    url: "https://dustintn.com/launches",
    publisher: {
      "@type": "Person",
      name: "Dustin Smith",
      url: "https://dustintn.com",
    },
    blogPost: sorted.map((l) => ({
      "@type": "BlogPosting",
      headline: l.title,
      url: `https://dustintn.com/launches/${l.slug}`,
      datePublished: l.publishDate,
      description: l.excerpt,
      image: `https://dustintn.com${l.coverImage}`,
    })),
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <Navigation currentPage="launches" />

      <main>
        {/* Hero */}
        <section className="pt-40 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-dark-gray" />
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]" />

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="max-w-4xl">
              <span className="section-label mb-6 inline-flex items-center gap-2">
                <Newspaper className="w-4 h-4" />
                Launches
              </span>
              <h1 className="text-headline">
                Build stories from <span className="text-accent">recent launches</span>.
              </h1>
              <p className="text-xl text-white/50 leading-relaxed mt-6 max-w-3xl">
                Every launch here is a real shipped project. The article goes deeper than the portfolio
                case study — the why, the craft decisions, the trade-offs, what I&apos;d do differently.
                Read the story, then click through to the live site or the full case study.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Article cards */}
        <section className="py-20 bg-dark-gray border-y border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-8">
              {sorted.map((l, i) => (
                <AnimatedSection key={l.slug} delay={i * 100}>
                  <Link
                    href={`/launches/${l.slug}`}
                    className="group block h-full rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 bg-black/50 transition-all duration-300"
                  >
                    <div className="relative aspect-[16/10] bg-black overflow-hidden">
                      <Image
                        src={l.coverImage}
                        alt={l.coverImageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-7">
                      <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" />
                          {dateFmt.format(new Date(l.publishDate))}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-3 h-3" />
                          {l.readMinutes} min read
                        </span>
                      </div>
                      <h2 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors leading-tight">
                        {l.title}
                      </h2>
                      <p className="text-white/60 leading-relaxed mb-5">{l.dek}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {l.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-full bg-white/5 text-white/60 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
                        Read the launch
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <ProudlyServing />
        <Footer />
      </main>
    </div>
  );
}
