import { ImageResponse } from "next/og";
import { dustinOgCard, OG_SIZE } from "@/lib/og-card";

export const runtime = "nodejs";
export const alt = "DustinTN — Nashville Web Development & Digital Marketing";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    dustinOgCard({
      label: "WEB · BRAND · SEO · AI",
      title: "Websites that work as hard as you do.",
      description:
        "Hand-coded websites, brand identity, SEO, and AI-powered marketing for businesses in Nashville and beyond. 20+ years of experience.",
    }),
    { ...size }
  );
}
