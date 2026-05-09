import type { MetadataRoute } from "next";
import { resources, categoryPages } from "@/data/resources";
import { ascensionAddons } from "@/data/ascension-addons";

// Note: Getting Learnt HUB (/portfolio/getting-learnt) is included below so
// Google indexes the experiments-lab landing page. Chapter detail pages
// (/portfolio/getting-learnt/<slug>) are intentionally excluded — they're
// noindex/nofollow and disallowed in robots.ts so they stay portable to a
// future standalone product/brand.

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dustintn.com";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/logos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/free-consultation`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms-of-use`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = [
    "web-development",
    "brand-identity",
    "logo-design",
    "seo-content",
    "web-consulting",
    "social-media",
    "digital-strategy",
    "geo-optimization",
    "ai-seo",
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const portfolioPages: MetadataRoute.Sitemap = [
    "fine-assets",
    "champions-adaptive-fitness",
    "pinnacle-health-choice",
    "southern-collective-spirit-co",
    "coldwell-banker-commercial",
    "maple-sky-dreamtree-studio",
    "jobe-gutter-services",
    "walking-street-pictures",
    "native-pastures",
  ].map((slug) => ({
    url: `${baseUrl}/portfolio/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const logoPages: MetadataRoute.Sitemap = [
    "maple-sky-dreamtree-studio",
  ].map((slug) => ({
    url: `${baseUrl}/logos/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const resourceCategoryPages: MetadataRoute.Sitemap = Object.keys(categoryPages).map((slug) => ({
    url: `${baseUrl}/resources/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const resourcePages: MetadataRoute.Sitemap = resources.map((resource) => ({
    url: `${baseUrl}/resources/${resource.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Project Ascension addon section
  const ascensionStatic: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/project-ascension`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/project-ascension/addons`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const ascensionAddonPages: MetadataRoute.Sitemap = ascensionAddons.map((addon) => ({
    url: `${baseUrl}/project-ascension/addons/${addon.slug}`,
    lastModified: new Date(addon.releaseDate),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Getting Learnt — hub only (chapter pages stay out, see note above).
  const gettingLearntHub: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/portfolio/getting-learnt`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  return [
    ...staticPages,
    ...servicePages,
    ...portfolioPages,
    ...logoPages,
    ...resourceCategoryPages,
    ...resourcePages,
    ...ascensionStatic,
    ...ascensionAddonPages,
    ...gettingLearntHub,
  ];
}
