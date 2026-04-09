import { ImageResponse } from "next/og";
import { dustinOgCard, OG_SIZE } from "@/lib/og-card";

export const runtime = "nodejs";
export const alt = "DustinTN Logo Portfolio";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    dustinOgCard({
      label: "LOGO PORTFOLIO",
      title: "Brand marks designed to last.",
      description:
        "Logos and brand systems built around real businesses, real customers, and the long game. No templates, no AI slop, no clipart.",
    }),
    { ...size }
  );
}
