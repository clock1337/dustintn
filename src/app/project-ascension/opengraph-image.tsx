import { ImageResponse } from "next/og";
import { ascensionAddons } from "@/data/ascension-addons";

export const runtime = "nodejs";
export const alt = "Project Ascension Addons by The PenFifteen Club";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(180deg, #0a0e14 0%, #080b0f 100%)",
          padding: "70px 80px",
          color: "#d8cfc0",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Top: eyebrow */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: "0.25em",
              color: "#c8962a",
              textTransform: "uppercase",
              opacity: 0.85,
            }}
          >
            The PenFifteen Club &middot; WoW 3.3.5a
          </div>
        </div>

        {/* Center: title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 0.95,
              color: "#f0d070",
              letterSpacing: "-0.01em",
            }}
          >
            Project Ascension
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 0.95,
              marginTop: 8,
              color: "#c8962a",
              letterSpacing: "-0.01em",
            }}
          >
            Addons
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontStyle: "italic",
              color: "#d8cfc0",
              opacity: 0.85,
              marginTop: 28,
              maxWidth: 900,
            }}
          >
            Hand-built free addons for Bronzebeard. Custom requests welcome.
          </div>
        </div>

        {/* Bottom: addon names + brand */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(200, 150, 42, 0.4)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 14,
                letterSpacing: "0.2em",
                color: "#8a8070",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              {ascensionAddons.length} Addons Available
            </div>
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              {ascensionAddons.map((addon) => (
                <div
                  key={addon.slug}
                  style={{
                    display: "flex",
                    fontSize: 28,
                    color: addon.themeColor === "blood" ? "#c0392b" : "#f0c060",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                  }}
                >
                  {addon.name}
                </div>
              ))}
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
                fontSize: 24,
                color: "#c8962a",
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              dustintn.com
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 14,
                color: "#8a8070",
                marginTop: 4,
              }}
            >
              /project-ascension
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
