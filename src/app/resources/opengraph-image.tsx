import { ImageResponse } from "next/og";
import { dustinOgCard, OG_SIZE } from "@/lib/og-card";
import { resources } from "@/data/resources";

export const runtime = "nodejs";
export const alt = "DustinTN Free Resources — Guides, Tips, and Strategy";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    dustinOgCard({
      label: "RESOURCES",
      title: "Free guides for businesses that want to win online.",
      description: `${resources.length}+ in-depth articles on web development, SEO, AI search, social media, and digital strategy. Free forever.`,
    }),
    { ...size }
  );
}
