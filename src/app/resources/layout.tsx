import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Web & Marketing Resources | DustinTN",
  description:
    "Free guides and action plans for website maintenance, SEO, social media, and digital strategy. Practical tips for small businesses in Middle Tennessee.",
  keywords: [
    "website maintenance checklist",
    "small business SEO tips",
    "social media strategy guide",
    "digital marketing resources",
    "website launch plan",
    "Google Business Profile guide",
    "online presence tips",
    "Nashville web development resources",
  ],
  openGraph: {
    title: "Free Web & Marketing Resources | DustinTN",
    description:
      "Free guides and action plans for website maintenance, SEO, social media, and digital strategy. Practical tips for small businesses in Middle Tennessee.",
    url: "https://dustintn.com/resources",
    type: "website",
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'DustinTN - Web Development & Digital Services' }],
  },
  alternates: {
    canonical: "/resources",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
