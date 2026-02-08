import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | DustinTN",
  description:
    "Learn how DustinTN collects, uses, and protects your personal information. Our privacy policy covers data collection, analytics, cookies, and your rights.",
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
