import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomAddonRequestForm from "@/components/ascension/CustomAddonRequestForm";
import { ascensionAddons } from "@/data/ascension-addons";
import { getAllDownloadCounts } from "@/lib/addon-stats";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Project Ascension Addons & Custom Requests | DustinTN",
  description:
    "Free World of Warcraft addons for Project Ascension (3.3.5a) — built by The PenFifteen Club™. DeathMark healer tracker, QuiverKeeper hunter HUD, and custom addon requests welcome.",
  keywords: [
    "Project Ascension addons",
    "WoW 3.3.5 addons",
    "free WoW addons",
    "custom WoW addon developer",
    "Bronzebeard addons",
    "PenFifteen Club",
    "DeathMark addon",
    "QuiverKeeper addon",
  ],
  alternates: { canonical: "/project-ascension" },
  openGraph: {
    title: "Project Ascension Addons & Custom Requests | DustinTN",
    description:
      "Free addons for Project Ascension built by The PenFifteen Club™. Custom addon requests welcome.",
    url: "https://dustintn.com/project-ascension",
    type: "website",
  },
};

export default async function ProjectAscensionHubPage() {
  const counts = await getAllDownloadCounts();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <main>
        <div className="pa-root" style={{ paddingTop: 80, position: "relative" }}>
          {/* HERO */}
          <header className="pa-hero">
            <div className="pa-eyebrow">
              The PenFifteen Club™ · Project Ascension · WoW 3.3.5a
            </div>
            <h1 className="pa-title">Project Ascension Addons</h1>
            <div className="pa-subtitle">Free Downloads · Custom Requests Welcome</div>
            <p className="pa-tagline">
              Hand-built addons for Project Ascension by Longshaft of The PenFifteen Club™.
              Free, open source, and battle-tested on Bronzebeard.
            </p>
            <div className="pa-badge-row">
              <span className="pa-badge pa-badge-hi">✓ Free</span>
              <span className="pa-badge pa-badge-hi">✓ Open Source</span>
              <span className="pa-badge">WoW 3.3.5a</span>
              <span className="pa-badge">Bronzebeard · Arena 52</span>
              <span className="pa-badge">{ascensionAddons.length} Addons Available</span>
            </div>
          </header>

          <div className="pa-container">
            {/* INTRO */}
            <section className="pa-section">
              <div className="pa-section-header">
                <h2>Why These Exist</h2>
              </div>
              <div className="pa-desc">
                <p>
                  Project Ascension is a private World of Warcraft 3.3.5a server with a
                  classless system, custom mechanics, and an API that breaks most off-the-shelf
                  addons from retail or other private servers. Standard combat log parsers fail.
                  Standard nameplate addons crash. Standard aura trackers go silent.
                </p>
                <p>
                  These addons are written from the ground up for Ascension&apos;s specific
                  environment — including <span className="pa-code">SPELL_AURA_HEAL</span>,
                  title-case classTokens, and <span className="pa-code">C_NamePlate</span> instead
                  of the missing <span className="pa-code">_G[&quot;NamePlate1&quot;]</span>.
                  They&apos;re built by people who actually play on Bronzebeard, for people who
                  actually play on Bronzebeard.
                </p>
                <p>
                  Everything here is <strong>free forever</strong>. If you want something custom
                  built, scroll down and tell us what you need.
                </p>
              </div>
            </section>

            {/* ADDON CARDS */}
            <section className="pa-section">
              <div className="pa-section-header">
                <h2>Available Addons</h2>
              </div>
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
                      <h3
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
                      </h3>
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

            <div className="pa-divider" />

            {/* CUSTOM REQUEST FORM */}
            <section className="pa-section" id="custom-request">
              <div className="pa-section-header">
                <h2>Custom Addon Requests</h2>
              </div>
              <div
                style={{
                  fontSize: 17,
                  color: "var(--pa-text-dim)",
                  marginBottom: 32,
                  lineHeight: 1.7,
                  maxWidth: 720,
                }}
              >
                <p>
                  Got an idea for an addon you wish existed? A quality-of-life tweak nobody&apos;s
                  built yet? A combat log parser, a tracker, an alert, an automation — anything
                  that makes Ascension more playable, fill out the form below.
                </p>
                <p style={{ marginTop: 12 }}>
                  Currently free. Future custom builds may carry a small fee depending on
                  complexity, but everything in this section is offered as a labor of love by
                  The PenFifteen Club™.
                </p>
              </div>
              <CustomAddonRequestForm />
            </section>

            {/* UPDATES FEED LINK */}
            <section className="pa-section" style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "var(--font-tech-mono), monospace",
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  color: "var(--pa-text-dim)",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Stay current
              </p>
              <p style={{ fontSize: 16, color: "var(--pa-text-dim)", marginBottom: 16 }}>
                Subscribe via{" "}
                <Link
                  href="/project-ascension/updates.xml"
                  style={{ color: "var(--pa-gold)", borderBottom: "1px solid var(--pa-gold)" }}
                >
                  RSS feed
                </Link>{" "}
                or signup for email notifications on each addon&apos;s page.
              </p>
            </section>
          </div>

          <footer className="pa-footer">
            <span className="pa-footer-mark">✦ The PenFifteen Club™ ✦</span>
            <p>
              Project Ascension · WoW 3.3.5a · Bronzebeard &amp; Arena 52
              <br />
              Hand-built addons by Longshaft
            </p>
            <p style={{ marginTop: 6, opacity: 0.5 }}>
              Not affiliated with Blizzard Entertainment or Project Ascension officially.
            </p>
          </footer>
        </div>
      </main>
      <Footer />
    </div>
  );
}
