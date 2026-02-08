import type { Metadata } from "next";

const projectMeta: Record<string, { title: string; description: string }> = {
  "fine-assets": {
    title: "Fine Assets Personal Training Website | DustinTN",
    description: "See how we built a modern fitness coaching website for Fine Assets Personal Training. Custom design, online booking, and client transformation gallery.",
  },
  "champions-adaptive-fitness": {
    title: "Champions Adaptive Fitness Website | DustinTN",
    description: "Discover how we designed an accessible, inclusive website for Champions Adaptive Fitness in Temecula. WCAG-compliant design with program showcases.",
  },
  "pinnacle-health-choice": {
    title: "Pinnacle Wellness Chiropractic Website | DustinTN",
    description: "See how we built a professional healthcare website for Pinnacle Wellness in San Antonio. Online scheduling, service pages, and patient resources.",
  },
  "southern-collective-spirit-co": {
    title: "Southern Collective Spirit Co. Website | DustinTN",
    description: "Explore the immersive distillery website we built for Southern Collective Spirit Company in Nashville. E-commerce, tasting bookings, and barrel selections.",
  },
  "coldwell-banker-commercial": {
    title: "Coldwell Banker Commercial SC Website | DustinTN",
    description: "See the commercial real estate platform we built for Coldwell Banker Commercial SC. Property search, listings, agent profiles, and lead generation.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = projectMeta[slug];

  if (!meta) {
    return { title: "Project Not Found | DustinTN" };
  }

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://dustintn.com/portfolio/${slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    alternates: {
      canonical: `/portfolio/${slug}`,
    },
  };
}

export default function PortfolioDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
