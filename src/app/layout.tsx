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
