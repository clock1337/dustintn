import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Web Design Projects & Success Stories",
  description: "See the custom websites we've built for Nashville and Middle Tennessee businesses. From healthcare to fitness to real estate, explore our portfolio of successful projects.",
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
