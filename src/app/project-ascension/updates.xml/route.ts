import { ascensionAddons } from "@/data/ascension-addons";

const SITE_URL = "https://dustintn.com";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  // Build feed entries from each addon's changelog (newest first across all addons)
  const items = ascensionAddons
    .flatMap((addon) =>
      addon.changelog.map((entry) => ({
        addon,
        entry,
      }))
    )
    .sort((a, b) => (a.entry.date < b.entry.date ? 1 : -1));

  const xmlItems = items
    .map(({ addon, entry }) => {
      const title = `${addon.name} v${entry.version}${entry.codename ? ` — ${entry.codename}` : ""}`;
      const link = `${SITE_URL}/project-ascension/addons/${addon.slug}`;
      const guid = `${link}#v${entry.version}`;
      const pubDate = new Date(entry.date).toUTCString();
      const description = entry.changes;
      return `    <item>
      <title>${escapeXml(title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="false">${escapeXml(guid)}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(description)}</description>
      <category>${escapeXml(addon.name)}</category>
    </item>`;
    })
    .join("\n");

  const lastBuildDate = items[0]
    ? new Date(items[0].entry.date).toUTCString()
    : new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Project Ascension Addon Updates · The PenFifteen Club™</title>
    <link>${SITE_URL}/project-ascension</link>
    <atom:link href="${SITE_URL}/project-ascension/updates.xml" rel="self" type="application/rss+xml" />
    <description>New versions and changelogs for Project Ascension addons built by The PenFifteen Club™.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
${xmlItems}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=600, s-maxage=600",
    },
  });
}
