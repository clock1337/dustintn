import { ImageResponse } from "next/og";
import { getAddonBySlug, ascensionAddons } from "@/data/ascension-addons";

export const runtime = "nodejs";
export const alt = "Project Ascension Addon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return ascensionAddons.map((addon) => ({ slug: addon.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const addon = getAddonBySlug(slug);

  if (!addon) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#080b0f",
            display: "flex",
          }}
        />
      ),
      { ...size }
    );
  }

  const isBlood = addon.themeColor === "blood";

  const colors = isBlood
    ? {
        bg: "linear-gradient(180deg, #1a0606 0%, #0a0806 100%)",
        title: "#c0392b",
        accent: "#c9a84c",
        accentLight: "#e8d08a",
        textDim: "#9a8a78",
        text: "#d4c9b8",
        borderRgba: "rgba(192, 57, 43, 0.4)",
      }
    : {
        bg: "linear-gradient(180deg, #0a0e14 0%, #080b0f 100%)",
        title: "#f0d070",
        accent: "#c8962a",
        accentLight: "#f0c060",
        textDim: "#8a8070",
        text: "#d8cfc0",
        borderRgba: "rgba(200, 150, 42, 0.4)",
      };

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: colors.bg,
          padding: "60px 80px",
          color: colors.text,
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Top: eyebrow */}
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
              fontSize: 18,
              letterSpacing: "0.25em",
              color: colors.accent,
              textTransform: "uppercase",
              opacity: 0.9,
            }}
          >
            Project Ascension &middot; {addon.class} Addon
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: "0.15em",
              color: colors.textDim,
              textTransform: "uppercase",
            }}
          >
            v{addon.version}
            {addon.codename ? ` · ${addon.codename}` : ""}
          </div>
        </div>

        {/* Center: title + tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: isBlood ? 140 : 150,
              fontWeight: 900,
              lineHeight: 0.9,
              color: colors.title,
              letterSpacing: isBlood ? "0.04em" : "-0.01em",
              textTransform: isBlood ? "uppercase" : "none",
            }}
          >
            {addon.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontStyle: "italic",
              color: colors.text,
              opacity: 0.85,
              marginTop: 24,
              maxWidth: 1000,
              lineHeight: 1.3,
            }}
          >
            &ldquo;{addon.tagline}&rdquo;
          </div>
        </div>

        {/* Bottom: badges + brand */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: `1px solid ${colors.borderRgba}`,
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                fontSize: 14,
                letterSpacing: "0.1em",
                padding: "8px 16px",
                border: `1px solid ${colors.accent}`,
                color: colors.accentLight,
                background: "rgba(200, 150, 42, 0.1)",
                textTransform: "uppercase",
              }}
            >
              FREE
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 14,
                letterSpacing: "0.1em",
                padding: "8px 16px",
                border: `1px solid ${colors.borderRgba}`,
                color: colors.textDim,
                textTransform: "uppercase",
              }}
            >
              {addon.realm}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 14,
                letterSpacing: "0.1em",
                padding: "8px 16px",
                border: `1px solid ${colors.borderRgba}`,
                color: colors.textDim,
                textTransform: "uppercase",
              }}
            >
              WoW 3.3.5a
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 22,
                color: colors.accent,
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              The PenFifteen Club
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 14,
                color: colors.textDim,
                marginTop: 4,
              }}
            >
              dustintn.com/project-ascension
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
