import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | DustinTN",
  description:
    "Learn how DustinTN collects, uses, and protects your personal information. Our privacy policy covers data collection, analytics, cookies, and your rights.",
  openGraph: {
    title: "Privacy Policy | DustinTN",
    description: "Learn how DustinTN collects, uses, and protects your personal information.",
    url: "https://dustintn.com/privacy-policy",
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'DustinTN - Web Development & Digital Services' }],
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
