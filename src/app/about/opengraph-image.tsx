import { ImageResponse } from "next/og";
import { dustinOgCard, OG_SIZE } from "@/lib/og-card";

export const runtime = "nodejs";
export const alt = "About DustinTN — 20+ years building websites";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    dustinOgCard({
      label: "ABOUT",
      title: "About DustinTN",
      description:
        "Two decades of hand-coding websites, branding businesses, and shipping work that actually performs. Based in Nashville, working with clients nationwide.",
    }),
    { ...size }
  );
}
