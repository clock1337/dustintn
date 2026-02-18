import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free 30-Minute Consultation Call | DustinTN",
  description:
    "Book a free 30-minute exploratory call to discuss your website, SEO, social media, or digital strategy. No obligation, no pressure — just expert guidance.",
  keywords: [
    "free web consultation Nashville",
    "free website consultation",
    "free SEO consultation Middle Tennessee",
    "digital strategy consultation",
    "free business consultation Hendersonville",
  ],
  openGraph: {
    title: "Free 30-Minute Consultation Call | DustinTN",
    description:
      "Book a free exploratory call to discuss your website, SEO, or digital strategy. 20+ years of experience, zero obligation.",
    url: "https://dustintn.com/free-consultation",
    type: "website",
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'DustinTN - Web Development & Digital Services' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free 30-Minute Consultation Call | DustinTN",
    description:
      "Book a free exploratory call to discuss your website, SEO, or digital strategy. No obligation.",
  },
  alternates: {
    canonical: "/free-consultation",
  },
};

export default function FreeConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
