import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AddonDownloadButton from "@/components/ascension/AddonDownloadButton";
import AddonEmailSignup from "@/components/ascension/AddonEmailSignup";
import { ascensionAddons, getAddonBySlug } from "@/data/ascension-addons";
import { getDownloadCount } from "@/lib/addon-stats";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ascensionAddons.map((addon) => ({ slug: addon.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const addon = getAddonBySlug(slug);
  if (!addon) return { title: "Addon not found" };

  const title = `${addon.name} v${addon.version} — Project Ascension Addon | DustinTN`;
  const description = `${addon.shortDescription} Free download for Project Ascension on ${addon.realm}. Built by The PenFifteen Club™.`;

  return {
    title,
    description,
    keywords: [
      addon.name,
      "Project Ascension addon",
      "WoW 3.3.5 addon",
      addon.class.toLowerCase() + " addon",
      "PenFifteen Club",
      "Bronzebeard",
      "free WoW addon",
    ],
    alternates: { canonical: `/project-ascension/addons/${addon.slug}` },
    openGraph: {
      title,
      description,
      url: `https://dustintn.com/project-ascension/addons/${addon.slug}`,
      type: "article",
    },
  };
}

export default async function AddonDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const addon = getAddonBySlug(slug);
  if (!addon) notFound();

  const downloadCount = await getDownloadCount(addon.slug);
  const themeClass = addon.themeColor === "blood" ? "theme-blood" : addon.themeColor === "teal" ? "theme-teal" : "";

  // JSON-LD SoftwareApplication schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: addon.name,
    description: addon.shortDescription,
    applicationCategory: "GameApplication",
    applicationSubCategory: "Game Addon",
    operatingSystem: "Windows, macOS",
    softwareVersion: addon.version,
    datePublished: addon.releaseDate,
    author: {
      "@type": "Organization",
      name: "The PenFifteen Club",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    downloadUrl: `https://dustintn.com/downloads/ascension/${addon.fileName}`,
    fileSize: addon.fileSize,
    aggregateRating: undefined,
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <div className={`pa-root ${themeClass}`} style={{ paddingTop: 80, position: "relative" }}>
          {/* HERO */}
          <header className="pa-hero">
            <div className="pa-eyebrow">
              Project Ascension · {addon.gameVersion} · {addon.realm} · {addon.class} Addon
            </div>
            <h1 className="pa-title">{addon.name}</h1>
            <div className="pa-subtitle">
              v{addon.version}
              {addon.codename ? ` · Codename: ${addon.codename}` : ""}
            </div>
            <p className="pa-tagline">&ldquo;{addon.tagline}&rdquo;</p>
            <div className="pa-badge-row">
              {addon.badges.map((badge, i) => (
                <span key={i} className={i < 2 ? "pa-badge pa-badge-hi" : "pa-badge"}>
                  {i < 2 ? "✓ " : ""}
                  {badge}
                </span>
              ))}
            </div>
            <div style={{ marginTop: 36 }}>
              <AddonDownloadButton
                slug={addon.slug}
                fileName={addon.fileName}
                initialCount={downloadCount}
                label={`Download v${addon.version}`}
                comingSoon={addon.comingSoon}
              />
            </div>
          </header>

          <div className="pa-container">
            {/* INFO STRIP */}
            <div className="pa-section" style={{ marginTop: 40, marginBottom: 40 }}>
              <div className="pa-ig">
                <div className="pa-ic">
                  <div className="pa-ic-lbl">Game Version</div>
                  <div className="pa-ic-val">{addon.gameVersion}</div>
                </div>
                <div className="pa-ic">
                  <div className="pa-ic-lbl">Server</div>
                  <div className="pa-ic-val">{addon.server}</div>
                </div>
                <div className="pa-ic">
                  <div className="pa-ic-lbl">Realm</div>
                  <div className="pa-ic-val">{addon.realm}</div>
                </div>
                <div className="pa-ic">
                  <div className="pa-ic-lbl">Author</div>
                  <div className="pa-ic-val">Longshaft</div>
                </div>
                <div className="pa-ic">
                  <div className="pa-ic-lbl">Class</div>
                  <div className="pa-ic-val">{addon.class}</div>
                </div>
                <div className="pa-ic">
                  <div className="pa-ic-lbl">Latest Build</div>
                  <div className="pa-ic-val">
                    {addon.version}
                    {addon.codename ? ` // ${addon.codename}` : ""}
                  </div>
                </div>
              </div>
            </div>

            {/* ABOUT */}
            <section className="pa-section">
              <div className="pa-section-header">
                <h2>About</h2>
              </div>
              <div className="pa-desc">
                {addon.longDescription.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>

            {/* SCREENSHOTS */}
            {addon.screenshots && addon.screenshots.length > 0 && (
              <section className="pa-section">
                <div className="pa-section-header">
                  <h2>Screenshots</h2>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: 12,
                  }}
                >
                  {addon.screenshots.map((shot, i) => (
                    <div
                      key={i}
                      style={{
                        border: "1px solid var(--pa-border)",
                        background: "#0a0c10",
                        position: "relative",
                        aspectRatio: "16 / 10",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: "cover", opacity: 0.9 }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: "10px 14px",
                          background:
                            "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 100%)",
                          fontFamily: "var(--font-tech-mono), monospace",
                          fontSize: 11,
                          letterSpacing: "0.08em",
                          color: "var(--pa-gold)",
                          textTransform: "uppercase",
                        }}
                      >
                        {shot.caption}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FEATURES */}
            <section className="pa-section">
              <div className="pa-section-header">
                <h2>Features</h2>
              </div>
              <div className="pa-features">
                {addon.features.map((f, i) => (
                  <div key={i} className="pa-fc">
                    <span className="pa-fi">{f.icon}</span>
                    <h3>{f.title}</h3>
                    <p>{f.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="pa-divider" />

            {/* SLASH COMMANDS */}
            <section className="pa-section">
              <div className="pa-section-header">
                <h2>Slash Commands</h2>
              </div>
              <table className="pa-cmd-table">
                <tbody>
                  {addon.slashCommands.map((cmd, i) => (
                    <tr key={i}>
                      <td>{cmd.command}</td>
                      <td>{cmd.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* INSTALLATION */}
            <section className="pa-section">
              <div className="pa-section-header">
                <h2>Installation</h2>
              </div>
              <div className="pa-desc">
                <p>
                  <strong>1.</strong> Download <span className="pa-code">{addon.fileName}</span>{" "}
                  from this page.
                </p>
                <p>
                  <strong>2.</strong> Extract — you&apos;ll get a{" "}
                  <span className="pa-code">{addon.name}/</span> folder with the addon files.
                </p>
                <p>
                  <strong>3.</strong> Drop the entire <span className="pa-code">{addon.name}/</span>{" "}
                  folder into your AddOns directory:
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-tech-mono), monospace",
                    fontSize: 14,
                    color: "var(--pa-cyan)",
                    padding: "12px 16px",
                    background: "rgba(0,0,0,0.3)",
                    border: "1px solid rgba(68, 170, 204, 0.2)",
                    margin: "12px 0",
                  }}
                >
                  Ascension/Resources/Client/Interface/AddOns/
                </p>
                <p>
                  <strong>4.</strong> Launch Ascension and log in. The {addon.name} header prints
                  in chat confirming it loaded.
                </p>
                <p>
                  <strong>5.</strong> Right-click the HUD or type{" "}
                  <span className="pa-code">{addon.slashCommands[0]?.command}</span> to configure.
                </p>
              </div>
              <div className="pa-callout pa-callout-tip">
                <span>💡</span>
                <span>
                  Upgrading from an older version? Your settings carry over automatically. New
                  config keys default gracefully — no need to delete SavedVariables.
                </span>
              </div>
            </section>

            {/* DOWNLOAD + EMAIL SIGNUP */}
            <section className="pa-section">
              <div className="pa-section-header">
                <h2>Download &amp; Stay Updated</h2>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 24,
                  alignItems: "center",
                }}
              >
                <div
                  className="pa-desc"
                  style={{
                    textAlign: "center",
                    padding: "36px 28px",
                    borderLeft: "3px solid var(--pa-gold)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-cinzel), serif",
                      color: "var(--pa-gold-lt)",
                      fontSize: 14,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 16,
                    }}
                  >
                    Latest version
                  </p>
                  <AddonDownloadButton
                    slug={addon.slug}
                    fileName={addon.fileName}
                    initialCount={downloadCount}
                    label={`v${addon.version} (${addon.fileSize})`}
                  />
                </div>
                <AddonEmailSignup slug={addon.slug} addonName={addon.name} />
              </div>
            </section>

            {/* CHANGELOG */}
            <section className="pa-section">
              <div className="pa-section-header">
                <h2>Changelog</h2>
              </div>
              <div className="pa-changelog">
                {addon.changelog.map((entry, i) => (
                  <div key={i} className="pa-cli">
                    <div className="pa-clv">
                      v{entry.version}
                      {entry.codename && <span>{entry.codename}</span>}
                    </div>
                    <div className="pa-cln">{entry.changes}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* AUTHOR */}
            <section className="pa-section">
              <div className="pa-section-header">
                <h2>Author</h2>
              </div>
              <div className="pa-author">
                <div className="pa-author-avatar">{addon.themeColor === "blood" ? "☩" : "🏹"}</div>
                <div className="pa-author-info">
                  <h3>Longshaft</h3>
                  <p>
                    Hunter · Project Ascension · Bronzebeard Realm
                    <br />
                    Founder, <em>The PenFifteen Club™</em> · <em>Longshaft&apos;s Emporium</em>
                  </p>
                </div>
              </div>
            </section>

            {/* BACK LINK */}
            <section className="pa-section" style={{ textAlign: "center" }}>
              <Link
                href="/project-ascension/addons"
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
                ← Back to all addons
              </Link>
            </section>
          </div>

          {/* PA Footer */}
          <footer className="pa-footer">
            <span className="pa-footer-mark">✦ The PenFifteen Club™ ✦</span>
            <p>
              {addon.name} v{addon.version}
              {addon.codename ? ` // ${addon.codename}` : ""} · Project Ascension · {addon.realm} ·{" "}
              {addon.gameVersion}
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
