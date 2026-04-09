import { ImageResponse } from "next/og";
import { dustinOgCard, OG_SIZE } from "@/lib/og-card";
import { logosOgMeta } from "@/data/og-meta";

export const runtime = "nodejs";
export const alt = "DustinTN Logo Design";
export const size = OG_SIZE;
export const contentType = "image/png";

export async function generateStaticParams() {
  return Object.keys(logosOgMeta).map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = logosOgMeta[slug];

  if (!meta) {
    return new ImageResponse(
      dustinOgCard({ label: "LOGO DESIGN", title: "DustinTN Logo Portfolio" }),
      { ...size }
    );
  }

  return new ImageResponse(
    dustinOgCard({
      label: `LOGO DESIGN · ${meta.industry.toUpperCase()}`,
      title: meta.title,
      description: meta.description,
    }),
    { ...size }
  );
}
