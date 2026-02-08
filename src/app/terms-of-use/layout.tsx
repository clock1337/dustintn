import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | DustinTN",
  description:
    "Read the terms of use for the DustinTN website. Information about intellectual property, liability, and governing law for our web development services.",
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
