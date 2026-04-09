import { ImageResponse } from "next/og";
import { dustinOgCard, OG_SIZE } from "@/lib/og-card";
import { servicesOgMeta } from "@/data/og-meta";

export const runtime = "nodejs";
export const alt = "DustinTN Service";
export const size = OG_SIZE;
export const contentType = "image/png";

export async function generateStaticParams() {
  return Object.keys(servicesOgMeta).map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = servicesOgMeta[slug];

  if (!meta) {
    return new ImageResponse(
      dustinOgCard({ label: "SERVICE", title: "DustinTN Services" }),
      { ...size }
    );
  }

  return new ImageResponse(
    dustinOgCard({
      label: "SERVICE",
      title: meta.title,
      description: meta.description,
    }),
    { ...size }
  );
}
