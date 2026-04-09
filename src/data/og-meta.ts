// Lightweight metadata used by opengraph-image.tsx files for each route.
// Kept separate from page-level data to avoid pulling icons / heavy imports
// into the OG image generation pipeline.

interface OgMeta {
  title: string;
  description: string;
}

export const servicesOgMeta: Record<string, OgMeta> = {
  "web-development": {
    title: "Web Development",
    description: "I Build Websites That Work as Hard as You Do",
  },
  "brand-identity": {
    title: "Brand Identity",
    description: "Your Brand Should Feel Like You, Not a Template",
  },
  "logo-design": {
    title: "Logo Design",
    description: "A Mark That Sticks — Not Just Another Icon",
  },
  "seo-content": {
    title: "SEO & Content",
    description: "Show Up Where Your Customers Are Looking",
  },
  "web-consulting": {
    title: "Web Consulting",
    description: "Straight Answers From Someone Who's Built It All",
  },
  "social-media": {
    title: "Social Media",
    description: "Posts That Drive Action, Not Just Likes",
  },
  "digital-strategy": {
    title: "Digital Strategy",
    description: "A Plan That Connects the Dots",
  },
  "geo-optimization": {
    title: "GEO — AI Search Optimization",
    description: "Be the Answer When AI Does the Searching",
  },
  "ai-seo": {
    title: "AI SEO",
    description: "Smarter SEO, Not Harder SEO",
  },
};

interface PortfolioOgMeta extends OgMeta {
  category: string;
}

export const portfolioOgMeta: Record<string, PortfolioOgMeta> = {
  "fine-assets": {
    title: "Fine Assets Personal Training",
    description: "Transform Your Body with Personalized Training",
    category: "Web Development",
  },
  "champions-adaptive-fitness": {
    title: "Champions Adaptive Fitness",
    description: "Unleash Your Inner Champion",
    category: "Web Development",
  },
  "pinnacle-health-choice": {
    title: "Pinnacle Wellness",
    description: "You Deserve to be Healthy",
    category: "Healthcare",
  },
  "southern-collective-spirit-co": {
    title: "Southern Collective Spirit Company",
    description: "Whiskey Is Our Passion",
    category: "Hospitality",
  },
  "coldwell-banker-commercial": {
    title: "Coldwell Banker Commercial SC",
    description: "Your Partner in Commercial Real Estate",
    category: "Real Estate",
  },
  "maple-sky-dreamtree-studio": {
    title: "Maple Sky Dreamtree Studio",
    description: "Discover The Art Of True Emotion",
    category: "Branding",
  },
  "jobe-gutter-services": {
    title: "Jobe Gutter Services",
    description: "Rain Happens. We Make Sure It Goes Where It's Supposed To.",
    category: "Home Services",
  },
};

interface LogoOgMeta extends OgMeta {
  industry: string;
}

export const logosOgMeta: Record<string, LogoOgMeta> = {
  "maple-sky-dreamtree-studio": {
    title: "Maple Sky Dreamtree Studio",
    description: "Where imagination takes root",
    industry: "Fine Art",
  },
};
