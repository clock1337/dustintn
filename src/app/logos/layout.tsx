import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logo Portfolio | Custom Logo Design Work | DustinTN",
  description: "Explore custom logos and brand marks we've designed for businesses across industries. See the story behind each logo and how it brings a brand to life.",
  keywords: [
    "logo design portfolio Nashville",
    "custom logo examples",
    "brand mark design Tennessee",
    "logo designer Hendersonville",
    "business logo design Gallatin",
  ],
  openGraph: {
    title: "Logo Portfolio | Custom Logo Design Work | DustinTN",
    description: "Explore custom logos and brand marks we've designed for businesses across industries. See the story behind each logo and how it brings a brand to life.",
    url: "https://dustintn.com/logos",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "DustinTN - Web Development & Digital Services" }],
  },
  alternates: {
    canonical: "/logos",
  },
};

export default function LogosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
