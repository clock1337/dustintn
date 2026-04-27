import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import CodejamDemo from "@/components/getting-learnt/CodejamDemo";
import { gettingLearntEntries, getEntryBySlug } from "@/data/getting-learnt";

interface PageProps {
  params: Promise<{ slug: string; submission: string }>;
}

export function generateStaticParams() {
  const params: { slug: string; submission: string }[] = [];
  for (const entry of gettingLearntEntries) {
    if (!entry.submissions) continue;
    for (const sub of entry.submissions) {
      params.push({ slug: entry.slug, submission: sub.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, submission } = await params;
  const entry = getEntryBySlug(slug);
  const sub = entry?.submissions?.find((s) => s.slug === submission);
  if (!entry || !sub) return { title: "Demo not found", robots: { index: false, follow: false } };

  return {
    title: `${sub.title} — ${entry.title} | DustinTN`,
    description: sub.concept,
    robots: { index: false, follow: false },
    alternates: { canonical: `/portfolio/getting-learnt/${entry.slug}/play/${sub.slug}` },
  };
}

export default async function CodejamPlayPage({ params }: PageProps) {
  const { slug, submission } = await params;
  const entry = getEntryBySlug(slug);
  const sub = entry?.submissions?.find((s) => s.slug === submission);
  if (!entry || !sub) notFound();

  const accentStyle = {
    ["--gl-accent" as string]: `hsl(${entry.themeAccent})`,
    ["--gl-accent-soft" as string]: `hsl(${entry.themeAccentSoft} / 0.12)`,
    ["--gl-accent-border" as string]: `hsl(${entry.themeAccent} / 0.35)`,
  } as React.CSSProperties;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col" style={accentStyle}>
      {/* Slim DustinTN-branded top bar (no full nav — keeps focus on the demo) */}
      <header
        className="flex items-center justify-between px-5 py-3 border-b"
        style={{ borderColor: "var(--gl-accent-border)" }}
      >
        <div className="flex items-center gap-4">
          <Link
            href={`/portfolio/getting-learnt/${entry.slug}`}
            className="inline-flex items-center gap-2 text-xs text-white/70 hover:text-white"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to {entry.title}
          </Link>
          <span className="text-white/30 text-xs hidden sm:inline">·</span>
          <span className="text-xs text-white/50 font-mono hidden sm:inline">
            {sub.slug}/submission.html
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={sub.iframeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/50 hover:text-white inline-flex items-center gap-1"
          >
            Bare submission <ExternalLink className="w-3 h-3" />
          </a>
          <Link
            href="/"
            className="text-xs font-semibold tracking-wider uppercase"
            style={{ color: "var(--gl-accent)" }}
          >
            DustinTN
          </Link>
        </div>
      </header>

      {/* Submission title strip */}
      <div className="px-5 py-3 border-b border-white/5 bg-dark-gray">
        <div className="flex items-baseline justify-between gap-4">
          <h1 className="text-lg font-semibold">{sub.title}</h1>
          <p className="text-xs text-white/50 italic hidden md:block">{sub.tagline}</p>
        </div>
      </div>

      {/* Full-bleed demo */}
      <main className="flex-1 bg-black">
        <CodejamDemo
          iframeUrl={sub.iframeUrl}
          title={sub.title}
          slug={sub.slug}
          startEvent={sub.startEvent}
          openInNewTabUrl={sub.iframeUrl}
          showChrome={false}
          fullHeight
        />
      </main>

      {/* Tiny footer */}
      <footer
        className="px-5 py-3 border-t text-xs text-white/40 flex items-center justify-between"
        style={{ borderColor: "var(--gl-accent-border)" }}
      >
        <span>
          Built by{" "}
          <Link href="/" className="hover:text-white" style={{ color: "var(--gl-accent)" }}>
            Dustin Smith · DustinTN
          </Link>{" "}
          for {entry.title}
        </span>
        <span className="hidden sm:inline">Try to dismiss the overlay. (You won&apos;t.)</span>
      </footer>
    </div>
  );
}
