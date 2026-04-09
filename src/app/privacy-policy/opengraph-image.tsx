import { ImageResponse } from "next/og";
import { dustinOgCard, OG_SIZE } from "@/lib/og-card";

export const runtime = "nodejs";
export const alt = "DustinTN Privacy Policy";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    dustinOgCard({
      label: "PRIVACY POLICY",
      title: "How we handle your data.",
      description:
        "Our privacy policy in plain English. What we collect, why we collect it, and what we never do with it.",
    }),
    { ...size }
  );
}
