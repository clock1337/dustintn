import { ImageResponse } from "next/og";
import { dustinOgCard, OG_SIZE } from "@/lib/og-card";

export const runtime = "nodejs";
export const alt = "Free 30-minute consultation with DustinTN";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    dustinOgCard({
      label: "FREE 30-MIN CALL",
      title: "Book a free consultation.",
      description:
        "30 minutes, zero pressure. Walk away with a clearer plan for your website, brand, or marketing — whether we work together or not.",
    }),
    { ...size }
  );
}
