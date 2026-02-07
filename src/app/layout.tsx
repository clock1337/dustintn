import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: '--font-figtree'
});

export const metadata: Metadata = {
  title: "DustinTN - Web Development & Digital Services | Middle Tennessee",
  description: "Professional web development, SEO, consulting, and content creation services in Middle Tennessee. Over 20 years of experience building websites for medical practices, small businesses, and more.",
  metadataBase: new URL('https://dustintn.com'),
  openGraph: {
    title: "DustinTN - Web Development & Digital Services",
    description: "Professional web development, SEO, consulting, and content creation services in Middle Tennessee. 20+ years of experience.",
    url: 'https://dustintn.com',
    siteName: 'DustinTN',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DustinTN - Web Development & Digital Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "DustinTN - Web Development & Digital Services",
    description: "Professional web development, SEO, consulting, and content creation services in Middle Tennessee.",
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
