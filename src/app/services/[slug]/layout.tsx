import type { Metadata } from "next";

const serviceMeta: Record<string, { title: string; description: string; tagline: string }> = {
  "web-development": {
    title: "Custom Web Development Services | DustinTN",
    description: "Get a custom website built for performance and growth. Modern web development using Next.js, React, and Tailwind CSS for Nashville businesses and clients nationwide.",
    tagline: "Custom Websites Built for Performance",
  },
  "brand-identity": {
    title: "Brand Identity & Logo Design Services | DustinTN",
    description: "Build a distinctive brand identity that resonates with your audience. Logo design, color systems, typography, and complete brand guidelines for your business.",
    tagline: "Visual Identities That Resonate",
  },
  "logo-design": {
    title: "Custom Logo Design Services | DustinTN",
    description: "Get a custom logo that captures your brand's essence. Professional logo design with multiple concepts, unlimited revisions, and full ownership for Nashville businesses and beyond.",
    tagline: "Custom Logos That Tell Your Story",
  },
  "seo-content": {
    title: "SEO & Content Marketing Services | DustinTN",
    description: "Improve your search rankings with data-driven SEO and content strategy. Keyword research, on-page optimization, and local SEO for Nashville businesses.",
    tagline: "Get Found Online",
  },
  "web-consulting": {
    title: "Web Consulting & Digital Strategy | DustinTN",
    description: "Navigate web technology decisions with expert consulting. 20+ years of experience guiding Nashville businesses through digital strategy, audits, and planning.",
    tagline: "Expert Guidance for Digital Success",
  },
  "social-media": {
    title: "Social Media Management Services | DustinTN",
    description: "Build a powerful social presence on Facebook, Instagram, Yelp, and Google. Strategic social media management and reputation monitoring for local businesses.",
    tagline: "Engage Your Audience Everywhere",
  },
  "digital-strategy": {
    title: "Digital Strategy & Growth Roadmaps | DustinTN",
    description: "Align your digital presence with business goals. Comprehensive digital strategy, competitive analysis, and growth roadmaps for Nashville area businesses.",
    tagline: "Roadmaps for Digital Growth",
  },
  "geo-optimization": {
    title: "Generative Engine Optimization (GEO) Services | DustinTN",
    description: "Get your business cited by AI search engines like ChatGPT, Perplexity, and Google AI Overviews. Expert GEO services for Nashville businesses and clients nationwide.",
    tagline: "Get Cited by AI Search Engines",
  },
  "ai-seo": {
    title: "AI SEO Services — AI-Powered Search Optimization | DustinTN",
    description: "Supercharge your SEO with artificial intelligence. AI-driven keyword research, content optimization, predictive analytics, and automated audits for faster results.",
    tagline: "Supercharge SEO with Artificial Intelligence",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = serviceMeta[slug];

  if (!meta) {
    return { title: "Service Not Found | DustinTN" };
  }

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://dustintn.com/services/${slug}`,
      type: "website",
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'DustinTN - Web Development & Digital Services' }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export default function ServiceDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
