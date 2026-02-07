import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | 20+ Years Building Websites in Middle Tennessee",
  description: "Meet the team behind DustinTN. Since 2004, we've helped Nashville, Hendersonville, Gallatin, and Middle Tennessee businesses succeed online. Learn about our journey and values.",
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
