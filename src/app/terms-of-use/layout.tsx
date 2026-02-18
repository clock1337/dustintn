import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | DustinTN",
  description:
    "Read the terms of use for the DustinTN website. Information about intellectual property, liability, and governing law for our web development services.",
  openGraph: {
    title: "Terms of Use | DustinTN",
    description: "Read the terms of use for the DustinTN website.",
    url: "https://dustintn.com/terms-of-use",
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'DustinTN - Web Development & Digital Services' }],
  },
  alternates: {
    canonical: "/terms-of-use",
  },
};

export default function TermsOfUseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
