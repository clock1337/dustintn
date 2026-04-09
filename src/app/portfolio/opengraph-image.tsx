import { ImageResponse } from "next/og";
import { dustinOgCard, OG_SIZE } from "@/lib/og-card";

export const runtime = "nodejs";
export const alt = "DustinTN Portfolio — Selected Work";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    dustinOgCard({
      label: "PORTFOLIO",
      title: "Selected work from the last few years.",
      description:
        "Healthcare, fitness, hospitality, real estate, fine art, home services. Different industries, same commitment to clean code and lasting results.",
    }),
    { ...size }
  );
}
