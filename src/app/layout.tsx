import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const figtree = Figtree({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: '--font-figtree'
});

export const metadata: Metadata = {
  title: {
    default: "Nashville Web Development & Digital Marketing | DustinTN",
    template: "%s"
  },
  description: "Expert web development, SEO, and digital marketing for Nashville businesses and clients nationwide. 20+ years building websites that drive results.",
  keywords: [
    "web development Nashville",
    "web design Nashville Tennessee",
    "SEO services Hendersonville",
    "website developer Gallatin",
    "digital marketing Goodlettsville",
    "small business websites Nashville",
    "custom web development Tennessee",
    "local SEO Nashville Tennessee",
    "brand identity Nashville",
    "web consulting Hendersonville",
    "ecommerce websites Gallatin",
    "responsive web design Tennessee"
  ],
  authors: [{ name: "DustinTN", url: "https://dustintn.com" }],
  creator: "DustinTN",
  publisher: "DustinTN",
  metadataBase: new URL('https://dustintn.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Nashville Web Development & Digital Marketing | DustinTN",
    description: "Expert web development, SEO, and digital marketing for Nashville businesses and clients nationwide. 20+ years building websites that drive results.",
    url: 'https://dustintn.com',
    siteName: 'DustinTN',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DustinTN - Web Development & Digital Services in Nashville, Tennessee',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nashville Web Development & Digital Marketing | DustinTN",
    description: "Expert web development, SEO, and digital marketing for Nashville businesses and clients nationwide. 20+ years of experience.",
    images: ['/og-image.png'],
    creator: '@dustintn',
  },
  verification: {
    google: 'add-your-google-verification-code',
  },
  category: 'technology',
};

// JSON-LD Structured Data for Local Business
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'DustinTN',
  description: 'Expert web development, SEO, and digital marketing services in Nashville, Tennessee.',
  url: 'https://dustintn.com',
  logo: 'https://dustintn.com/og-image.png',
  image: 'https://dustintn.com/og-image.png',
  telephone: '+1-615-788-2453',
  email: 'hello@dustintn.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nashville',
    addressRegion: 'TN',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Nashville', addressRegion: 'TN' },
    { '@type': 'City', name: 'Hendersonville', addressRegion: 'TN' },
    { '@type': 'City', name: 'Gallatin', addressRegion: 'TN' },
    { '@type': 'City', name: 'Goodlettsville', addressRegion: 'TN' },
    { '@type': 'State', name: 'Tennessee' },
  ],
  serviceType: [
    'Web Development',
    'Web Design',
    'SEO Services',
    'Digital Marketing',
    'Brand Identity',
    'Social Media Marketing',
  ],
  priceRange: '$$',
  foundingDate: '2004',
  sameAs: [
    'https://twitter.com/dustintn',
    'https://linkedin.com/company/dustintn',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2M1B396P3Y"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-2M1B396P3Y');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${figtree.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
