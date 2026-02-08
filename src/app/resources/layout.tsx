import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Resources | DustinTN - Web Development & Digital Marketing Tips",
  description:
    "Free guides, checklists, and action plans for website maintenance, SEO, social media, and digital strategy. Practical tips for small businesses in Nashville and Middle Tennessee.",
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
    title: "Free Resources | DustinTN",
    description:
      "Free guides, checklists, and action plans to help your business grow online. Practical tips from 20+ years of web development experience.",
    url: "https://dustintn.com/resources",
    type: "website",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
