// Shared Open Graph card layout for all DustinTN pages.
// Returns the JSX tree consumed by `new ImageResponse(...)`. Keeps individual
// opengraph-image.tsx files small and consistent across the site.
//
// Satori (the engine behind next/og) requires:
// - Every <div> with multiple children to have explicit `display: "flex"`
// - System fonts (we use Georgia) — special characters need extra font setup
// - No CSS classes (Tailwind not supported here), only inline styles

export const OG_SIZE = { width: 1200, height: 630 } as const;

interface OgCardOptions {
  label: string; // small uppercase label, e.g. "SERVICE", "CASE STUDY"
  title: string; // main headline
  description?: string; // 1-2 line subhead
  accent?: string; // accent color (default DustinTN orange)
  meta?: string; // small meta line under description (e.g. "Article · 8 min read")
}

const ACCENT = "#FF6B00";
const ACCENT_HOVER = "#FF8533";
const BG_DEEP = "#0A0A0A";
const BG_MID = "#161616";
const TEXT_BRIGHT = "#FFFFFF";
const TEXT_DIM = "rgba(255, 255, 255, 0.55)";

export function dustinOgCard({
  label,
  title,
  description,
  accent = ACCENT,
  meta,
}: OgCardOptions) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: `linear-gradient(135deg, ${BG_DEEP} 0%, ${BG_MID} 100%)`,
        padding: "70px 80px",
        color: TEXT_BRIGHT,
        fontFamily: "Georgia, serif",
        position: "relative",
      }}
    >
      {/* Top: brand + label */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 7,
              background: accent,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 700,
              color: TEXT_BRIGHT,
              letterSpacing: "-0.01em",
            }}
          >
            DustinTN
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 14,
            letterSpacing: "0.25em",
            color: accent,
            textTransform: "uppercase",
            padding: "8px 18px",
            border: `1px solid ${accent}`,
            borderRadius: 999,
            background: `${accent}15`,
          }}
        >
          {label}
        </div>
      </div>

      {/* Center: title + description */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: title.length > 40 ? 70 : title.length > 25 ? 84 : 96,
            fontWeight: 700,
            lineHeight: 1.05,
            color: TEXT_BRIGHT,
            letterSpacing: "-0.025em",
            maxWidth: 1040,
          }}
        >
          {title}
        </div>
        {description && (
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: TEXT_DIM,
              marginTop: 24,
              lineHeight: 1.4,
              maxWidth: 1000,
            }}
          >
            {description}
          </div>
        )}
        {meta && (
          <div
            style={{
              display: "flex",
              fontSize: 16,
              letterSpacing: "0.15em",
              color: accent,
              textTransform: "uppercase",
              marginTop: 24,
              opacity: 0.9,
            }}
          >
            {meta}
          </div>
        )}
      </div>

      {/* Bottom: domain + accent line */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          borderTop: `2px solid ${accent}`,
          paddingTop: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: TEXT_BRIGHT,
            fontWeight: 600,
            letterSpacing: "0.02em",
          }}
        >
          dustintn.com
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 16,
            color: TEXT_DIM,
            letterSpacing: "0.05em",
          }}
        >
          Nashville · Hendersonville · Gallatin
        </div>
      </div>
    </div>
  );
}

// Export accent color so route files can theme images per category
export const OG_ACCENT = ACCENT;
export const OG_ACCENT_HOVER = ACCENT_HOVER;
