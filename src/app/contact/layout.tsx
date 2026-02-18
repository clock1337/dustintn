import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Your Free Quote | Nashville Web Design Consultation",
  description: "Ready to grow your business online? Contact DustinTN for a free consultation. We serve Nashville, Hendersonville, Gallatin, and all of Middle Tennessee.",
  keywords: [
    "contact web developer Nashville",
    "website quote Middle Tennessee",
    "web design consultation Hendersonville",
    "digital marketing contact Gallatin",
    "hire web developer Tennessee",
  ],
  openGraph: {
    title: "Get Your Free Quote | Nashville Web Design Consultation",
    description: "Ready to grow your business online? Contact DustinTN for a free consultation. We serve Nashville, Hendersonville, Gallatin, and all of Middle Tennessee.",
    url: 'https://dustintn.com/contact',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'DustinTN - Web Development & Digital Services' }],
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
