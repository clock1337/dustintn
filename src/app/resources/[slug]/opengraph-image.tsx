import { ImageResponse } from "next/og";
import { dustinOgCard, OG_SIZE } from "@/lib/og-card";
import { resources } from "@/data/resources";

export const runtime = "nodejs";
export const alt = "DustinTN Article";
export const size = OG_SIZE;
export const contentType = "image/png";

export async function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = resources.find((r) => r.slug === slug);

  if (!article) {
    return new ImageResponse(
      dustinOgCard({ label: "ARTICLE", title: "DustinTN Resources" }),
      { ...size }
    );
  }

  return new ImageResponse(
    dustinOgCard({
      label: `ARTICLE · ${article.category.toUpperCase()}`,
      title: article.title,
      description: article.excerpt,
      meta: `${article.readTime} · Published ${article.publishDate}`,
    }),
    { ...size }
  );
}
