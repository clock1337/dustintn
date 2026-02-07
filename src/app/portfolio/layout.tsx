import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Portfolio & Case Studies | Nashville Tennessee",
  description: "Explore our web development portfolio featuring custom websites for businesses across Nashville, Hendersonville, Gallatin, and Middle Tennessee. See real results from our healthcare, fitness, hospitality, and real estate clients.",
  keywords: [
    "web development portfolio Nashville",
    "website examples Middle Tennessee",
    "custom websites Hendersonville",
    "business websites Gallatin",
    "web design projects Tennessee",
  ],
  openGraph: {
    title: "Portfolio - DustinTN Web Development Projects",
    description: "Custom websites and digital solutions for businesses across Nashville and Middle Tennessee. View our latest work.",
    url: 'https://dustintn.com/portfolio',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
