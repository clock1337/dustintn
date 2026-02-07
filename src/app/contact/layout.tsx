import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Web Development Nashville | Free Consultation",
  description: "Get in touch with DustinTN for web development, SEO, and digital marketing services in Nashville, Hendersonville, Gallatin, and Middle Tennessee. Free consultation available.",
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
