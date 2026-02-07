import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Web Development Agency Nashville | 20+ Years Experience",
  description: "Learn about DustinTN, a web development and digital marketing agency serving Nashville, Hendersonville, Gallatin, and Middle Tennessee since 2004. Discover our story, values, and commitment to your success.",
  keywords: [
    "web development agency Nashville",
    "about DustinTN",
    "web designer Middle Tennessee",
    "digital marketing Hendersonville",
    "website developer Gallatin",
  ],
  openGraph: {
    title: "About Us - Web Development Agency Nashville",
    description: "20+ years helping businesses in Nashville and Middle Tennessee succeed online. Learn about our story and values.",
    url: 'https://dustintn.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
