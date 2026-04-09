import { ImageResponse } from "next/og";
import { dustinOgCard, OG_SIZE } from "@/lib/og-card";

export const runtime = "nodejs";
export const alt = "DustinTN Terms of Use";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    dustinOgCard({
      label: "TERMS OF USE",
      title: "Terms of use.",
      description:
        "Ground rules for using dustintn.com. Short, fair, and written in English instead of legalese.",
    }),
    { ...size }
  );
}
