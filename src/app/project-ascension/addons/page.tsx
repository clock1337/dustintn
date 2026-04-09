import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ascensionAddons } from "@/data/ascension-addons";
import { getAllDownloadCounts } from "@/lib/addon-stats";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "All Project Ascension Addons | DustinTN",
  description:
    "Browse every Project Ascension addon built by The PenFifteen Club™ — DeathMark healer tracker, QuiverKeeper hunter HUD, and more. All free, all open source.",
  alternates: { canonical: "/project-ascension/addons" },
  openGraph: {
    title: "All Project Ascension Addons | DustinTN",
    description: "Free addons for Project Ascension built by The PenFifteen Club™.",
    url: "https://dustintn.com/project-ascension/addons",
    type: "website",
  },
};

export default async function AddonsGridPage() {
  const counts = await getAllDownloadCounts();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <main>
        <div className="pa-root" style={{ paddingTop: 80, position: "relative" }}>
          <header className="pa-hero">
            <div className="pa-eyebrow">The PenFifteen Club™ · Addon Library</div>
            <h1 className="pa-title">All Addons</h1>
            <div className="pa-subtitle">{ascensionAddons.length} addons · all free · all open source</div>
            <p className="pa-tagline">
              Every addon we&apos;ve built for Project Ascension. Pick one to read the full
              details, screenshots, and changelog.
            </p>
          </header>

          <div className="pa-container">
            <section className="pa-section">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: 24,
                }}
              >
                {ascensionAddons.map((addon) => {
                  const count = counts[addon.slug] ?? 0;
                  const isBlood = addon.themeColor === "blood";
                  return (
                    <Link
                      key={addon.slug}
                      href={`/project-ascension/addons/${addon.slug}`}
                      className="pa-addon-card"
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-tech-mono), monospace",
                          fontSize: 10,
                          letterSpacing: "0.2em",
                          color: isBlood ? "#c0392b" : "var(--pa-gold)",
                          textTransform: "uppercase",
                          marginBottom: 8,
                          opacity: 0.85,
                        }}
                      >
                        {addon.class} · {addon.category}
                      </div>
                      <h2
                        style={{
                          fontFamily: "var(--font-cinzel), serif",
                          fontSize: 32,
                          fontWeight: 900,
                          color: isBlood ? "#c0392b" : "var(--pa-gold-lt)",
                          marginBottom: 8,
                          letterSpacing: isBlood ? "0.06em" : "0",
                          textTransform: isBlood ? "uppercase" : "none",
                        }}
                      >
                        {addon.name}
                      </h2>
                      <p
                        style={{
                          fontFamily: "var(--font-tech-mono), monospace",
                          fontSize: 11,
                          color: "var(--pa-text-dim)",
                          letterSpacing: "0.1em",
                          marginBottom: 16,
                        }}
                      >
                        v{addon.version}
                        {addon.codename ? ` · ${addon.codename}` : ""}
                      </p>
                      <p
                        style={{
                          fontStyle: "italic",
                          fontSize: 16,
                          color: "var(--pa-text)",
                          marginBottom: 20,
                          lineHeight: 1.6,
                        }}
                      >
                        &ldquo;{addon.tagline}&rdquo;
                      </p>
                      <p
                        style={{
                          fontSize: 14,
                          color: "var(--pa-text-dim)",
                          marginBottom: 24,
                          lineHeight: 1.6,
                        }}
                      >
                        {addon.shortDescription}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          paddingTop: 16,
                          borderTop: "1px solid var(--pa-border)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-tech-mono), monospace",
                            fontSize: 11,
                            color: "var(--pa-text-dim)",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                          }}
                        >
                          {count.toLocaleString()} {count === 1 ? "download" : "downloads"}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-cinzel), serif",
                            fontSize: 12,
                            color: "var(--pa-gold)",
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                          }}
                        >
                          View Details →
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>

            <section className="pa-section" style={{ textAlign: "center" }}>
              <Link
                href="/project-ascension"
                style={{
                  fontFamily: "var(--font-tech-mono), monospace",
                  fontSize: 12,
                  letterSpacing: "0.15em",
                  color: "var(--pa-gold)",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--pa-border)",
                  paddingBottom: 4,
                }}
              >
                ← Back to Project Ascension hub
              </Link>
            </section>
          </div>

          <footer className="pa-footer">
            <span className="pa-footer-mark">✦ The PenFifteen Club™ ✦</span>
            <p>Project Ascension · WoW 3.3.5a · Bronzebeard &amp; Arena 52</p>
          </footer>
        </div>
      </main>
      <Footer />
    </div>
  );
}
