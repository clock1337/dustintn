// Simple file-based storage for addon download counts and email subscribers.
//
// LOCAL DEV: writes to data/addon-stats.json in the project root (gitignored).
// PRODUCTION (Vercel): the filesystem is read-only EXCEPT for /tmp, so writes
//   will land in /tmp/addon-stats.json and persist only for the lifetime of the
//   serverless instance. Counts will reset when a new instance spins up.
//
// TO MAKE PRODUCTION COUNTS PERSIST:
//   Swap this implementation for Vercel KV, Upstash Redis, or Vercel Postgres.
//   The interface (`getStats`, `incrementDownload`, `addSubscriber`) stays the
//   same — only the read/write internals change.

import fs from "node:fs/promises";
import path from "node:path";

interface AddonStats {
  downloads: Record<string, number>;
  subscribers: Record<string, string[]>;
}

const EMPTY_STATS: AddonStats = {
  downloads: {},
  subscribers: {},
};

function getDataFilePath(): string {
  // On Vercel (read-only fs), only /tmp is writable
  if (process.env.VERCEL) {
    return path.join("/tmp", "addon-stats.json");
  }
  return path.join(process.cwd(), "data", "addon-stats.json");
}

async function readStats(): Promise<AddonStats> {
  const filePath = getDataFilePath();
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    const parsed = JSON.parse(raw) as Partial<AddonStats>;
    return {
      downloads: parsed.downloads ?? {},
      subscribers: parsed.subscribers ?? {},
    };
  } catch {
    return { ...EMPTY_STATS };
  }
}

async function writeStats(stats: AddonStats): Promise<void> {
  const filePath = getDataFilePath();
  try {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(stats, null, 2), "utf-8");
  } catch (err) {
    // Swallow write errors silently — read-only fs in production
    // is a known limitation. Counts will be approximate.
    console.error("[addon-stats] write failed:", err);
  }
}

export async function getDownloadCount(slug: string): Promise<number> {
  const stats = await readStats();
  return stats.downloads[slug] ?? 0;
}

export async function getAllDownloadCounts(): Promise<Record<string, number>> {
  const stats = await readStats();
  return stats.downloads;
}

export async function incrementDownloadCount(slug: string): Promise<number> {
  const stats = await readStats();
  const next = (stats.downloads[slug] ?? 0) + 1;
  stats.downloads[slug] = next;
  await writeStats(stats);
  return next;
}

export async function addSubscriber(slug: string, email: string): Promise<void> {
  const stats = await readStats();
  const list = stats.subscribers[slug] ?? [];
  const normalized = email.trim().toLowerCase();
  if (!list.includes(normalized)) {
    list.push(normalized);
    stats.subscribers[slug] = list;
    await writeStats(stats);
  }
}

export async function getSubscribers(slug: string): Promise<string[]> {
  const stats = await readStats();
  return stats.subscribers[slug] ?? [];
}
