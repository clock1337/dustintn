import type { MetadataRoute } from "next";

// Paths intentionally hidden from all crawlers (search + AI). Kept here so the
// disallow stays in sync across every user-agent rule below.
const HIDDEN_PATHS = ["/portfolio/getting-learnt/"];

const ALLOWED_USER_AGENTS = [
  "*",
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "PerplexityBot",
  "Applebot-Extended",
  "anthropic-ai",
  "ClaudeBot",
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: ALLOWED_USER_AGENTS.map((userAgent) => ({
      userAgent,
      allow: "/",
      disallow: HIDDEN_PATHS,
    })),
    sitemap: "https://dustintn.com/sitemap.xml",
  };
}
