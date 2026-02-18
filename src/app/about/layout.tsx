import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Story | 20+ Years Building Websites in Nashville, TN",
  description: "Meet the developer behind DustinTN. Since 2004, I've helped Nashville businesses and clients nationwide succeed online. Learn about my story and values.",
  keywords: [
    "web development agency Nashville",
    "about DustinTN",
    "web designer Nashville Tennessee",
    "digital marketing Hendersonville",
    "website developer Gallatin",
  ],
  openGraph: {
    title: "My Story | 20+ Years Building Websites in Nashville, TN",
    description: "Meet the developer behind DustinTN. Since 2004, I've helped Nashville businesses and clients nationwide succeed online. Learn about my story and values.",
    url: 'https://dustintn.com/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'DustinTN - Web Development & Digital Services' }],
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
