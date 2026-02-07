import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development & Digital Marketing Services | Nashville Tennessee",
  description: "Professional web development, SEO, brand identity, social media, and digital strategy services in Nashville, Hendersonville, Gallatin, Goodlettsville, and Middle Tennessee. Get expert solutions tailored to your business.",
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
