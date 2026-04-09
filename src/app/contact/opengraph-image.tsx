import { ImageResponse } from "next/og";
import { dustinOgCard, OG_SIZE } from "@/lib/og-card";

export const runtime = "nodejs";
export const alt = "Contact DustinTN";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    dustinOgCard({
      label: "CONTACT",
      title: "Let's build something great.",
      description:
        "Have a project in mind? Drop a line and we'll talk about what you need, when you need it, and how to get it done right.",
    }),
    { ...size }
  );
}
