import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Do | Web Design, SEO & Digital Marketing Services",
  description: "Custom websites, SEO, and social media marketing for Nashville and Middle Tennessee businesses. Full-service digital solutions from 20+ years of expertise.",
  keywords: [
    "web development services Nashville",
    "SEO services Middle Tennessee",
    "digital marketing Hendersonville",
    "brand identity Gallatin",
    "social media marketing Goodlettsville",
    "web consulting Tennessee",
    "small business web services Nashville",
  ],
  openGraph: {
    title: "What We Do | Web Design, SEO & Digital Marketing Services",
    description: "Custom websites, SEO, and social media marketing for Nashville and Middle Tennessee businesses. Full-service digital solutions from 20+ years of expertise.",
    url: 'https://dustintn.com/services',
  },
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
