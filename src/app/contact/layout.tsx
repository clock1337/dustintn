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
    title: "Contact Us - Web Development Nashville",
    description: "Ready to start your project? Contact us for a free consultation. Serving Nashville and Middle Tennessee.",
    url: 'https://dustintn.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
