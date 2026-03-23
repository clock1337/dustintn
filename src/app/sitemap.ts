import type { MetadataRoute } from "next";
import { resources, categoryPages } from "@/data/resources";

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
  ].map((slug) => ({
    url: `${baseUrl}/portfolio/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const logoPages: MetadataRoute.Sitemap = [
    "mountain-peak-brewing",
    "bright-path-therapy",
    "cedar-ridge-homes",
    "velocity-fitness",
    "riverstone-financial",
    "wild-sage-kitchen",
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

  return [...staticPages, ...servicePages, ...portfolioPages, ...logoPages, ...resourceCategoryPages, ...resourcePages];
}
