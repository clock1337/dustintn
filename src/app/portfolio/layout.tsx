import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Web Design Projects & Success Stories",
  description: "Explore custom websites we've built for businesses across industries. From healthcare to real estate, see our portfolio of successful web projects.",
  keywords: [
    "web development portfolio Nashville",
    "website examples Middle Tennessee",
    "custom websites Hendersonville",
    "business websites Gallatin",
    "web design projects Tennessee",
  ],
  openGraph: {
    title: "Our Work | Web Design Projects & Success Stories",
    description: "Explore custom websites we've built for businesses across industries. From healthcare to real estate, see our portfolio of successful web projects.",
    url: 'https://dustintn.com/portfolio',
  },
  alternates: {
    canonical: '/portfolio',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
