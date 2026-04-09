import { ImageResponse } from "next/og";
import { dustinOgCard, OG_SIZE } from "@/lib/og-card";

export const runtime = "nodejs";
export const alt = "DustinTN Services — Web, Brand, SEO, AI";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    dustinOgCard({
      label: "SERVICES",
      title: "Everything you need, from one person.",
      description:
        "Web development, brand identity, logo design, SEO, social media, GEO, and AI SEO — all hand-built, all in-house.",
    }),
    { ...size }
  );
}
