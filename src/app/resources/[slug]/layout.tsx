import type { Metadata } from "next";
import { getResourceBySlug } from "@/data/resources";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    return { title: "Resource Not Found | DustinTN" };
  }

  return {
    title: resource.metaTitle,
    description: resource.metaDescription,
    keywords: resource.tags,
    openGraph: {
      title: resource.metaTitle,
      description: resource.metaDescription,
      url: `https://dustintn.com/resources/${resource.slug}`,
      type: "article",
      publishedTime: resource.publishDate,
      images: [
        {
          url: resource.image,
          width: 1200,
          height: 630,
          alt: resource.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resource.metaTitle,
      description: resource.metaDescription,
      images: [resource.image],
    },
    alternates: {
      canonical: `/resources/${resource.slug}`,
    },
  };
}

export default function ResourceDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
