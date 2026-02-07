import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Do | Web Design, SEO & Digital Marketing Services",
  description: "From custom websites to SEO and social media marketing, we offer full-service digital solutions for Nashville, Hendersonville, Gallatin, and Middle Tennessee businesses.",
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
    title: "Services - DustinTN Web Development & Digital Marketing",
    description: "Comprehensive digital services for businesses in Nashville and Middle Tennessee. Web development, SEO, branding, and more.",
    url: 'https://dustintn.com/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
