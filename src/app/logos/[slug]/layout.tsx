import type { Metadata } from "next";

const logoMeta: Record<string, { title: string; description: string }> = {
  "mountain-peak-brewing": {
    title: "Mountain Peak Brewing Logo Design | DustinTN",
    description: "See the story behind the Mountain Peak Brewing logo. A custom brand mark designed to capture craft brewing heritage and Pacific Northwest inspiration.",
  },
  "bright-path-therapy": {
    title: "Bright Path Therapy Logo Design | DustinTN",
    description: "Discover the Bright Path Therapy logo story. A calming, professional mark designed to build trust and communicate compassionate healthcare.",
  },
  "cedar-ridge-homes": {
    title: "Cedar Ridge Homes Logo Design | DustinTN",
    description: "Explore the Cedar Ridge Homes logo design. A sophisticated mark that conveys quality craftsmanship and luxury real estate.",
  },
  "velocity-fitness": {
    title: "Velocity Fitness Logo Design | DustinTN",
    description: "See how the Velocity Fitness logo captures energy and movement. A dynamic brand mark designed for a modern fitness studio.",
  },
  "riverstone-financial": {
    title: "Riverstone Financial Logo Design | DustinTN",
    description: "Explore the Riverstone Financial logo story. A mark designed to communicate stability, trust, and financial expertise.",
  },
  "wild-sage-kitchen": {
    title: "Wild Sage Kitchen Logo Design | DustinTN",
    description: "Discover the Wild Sage Kitchen logo design. A warm, organic mark that captures farm-to-table dining and culinary artistry.",
  },
  "maple-sky-dreamtree-studio": {
    title: "Maple Sky Dreamtree Studio Logo Design | DustinTN",
    description: "See how we turned a Post-It sketch into a professional logo for fine artist Mike Filippello. A whimsical, gold-toned brand mark for Maple Sky Dreamtree Studio.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = logoMeta[slug];

  if (!meta) {
    return { title: "Logo Not Found | DustinTN" };
  }

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://dustintn.com/logos/${slug}`,
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "DustinTN - Web Development & Digital Services" }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    alternates: {
      canonical: `/logos/${slug}`,
    },
  };
}

export default function LogoDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
