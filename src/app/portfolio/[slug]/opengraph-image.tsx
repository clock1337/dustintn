import { ImageResponse } from "next/og";
import { dustinOgCard, OG_SIZE } from "@/lib/og-card";
import { portfolioOgMeta } from "@/data/og-meta";

export const runtime = "nodejs";
export const alt = "DustinTN Case Study";
export const size = OG_SIZE;
export const contentType = "image/png";

export async function generateStaticParams() {
  return Object.keys(portfolioOgMeta).map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = portfolioOgMeta[slug];

  if (!meta) {
    return new ImageResponse(
      dustinOgCard({ label: "CASE STUDY", title: "DustinTN Portfolio" }),
      { ...size }
    );
  }

  return new ImageResponse(
    dustinOgCard({
      label: `CASE STUDY · ${meta.category.toUpperCase()}`,
      title: meta.title,
      description: meta.description,
    }),
    { ...size }
  );
}
