import type { MetadataRoute } from "next";
import { resources } from "@/data/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dustintn.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: "2026-02-17",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: "2026-02-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: "2026-02-17",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: "2026-02-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: "2026-02-17",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/logos`,
      lastModified: "2026-02-19",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: "2026-01-15",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/free-consultation`,
      lastModified: "2026-02-17",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms-of-use`,
      lastModified: "2025-12-01",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: "2025-12-01",
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
    lastModified: "2026-02-17",
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
    lastModified: "2026-02-01",
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
    lastModified: "2026-02-19",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const resourcePages: MetadataRoute.Sitemap = resources.map((resource) => ({
    url: `${baseUrl}/resources/${resource.slug}`,
    lastModified: "2026-02-17",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...portfolioPages, ...logoPages, ...resourcePages];
}
