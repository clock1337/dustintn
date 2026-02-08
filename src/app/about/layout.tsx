import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | 20+ Years Building Websites in Middle Tennessee",
  description: "Meet the team behind DustinTN. Since 2004, we've helped Nashville and Middle Tennessee businesses succeed online. Learn about our story and values.",
  keywords: [
    "web development agency Nashville",
    "about DustinTN",
    "web designer Middle Tennessee",
    "digital marketing Hendersonville",
    "website developer Gallatin",
  ],
  openGraph: {
    title: "Our Story | 20+ Years Building Websites in Middle Tennessee",
    description: "Meet the team behind DustinTN. Since 2004, we've helped Nashville and Middle Tennessee businesses succeed online. Learn about our story and values.",
    url: 'https://dustintn.com/about',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
