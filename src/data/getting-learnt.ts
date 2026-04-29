// Getting Learnt — Dustin's self-directed learning chapters.
// Each entry is a chapter (a contest, a side quest, a new service, an internal tool)
// that documents what was built, why, and what was learnt building it.

export type EntryStatus = "live" | "in-progress" | "coming-soon";
export type EntryType = "contest" | "side-quest" | "service" | "tool";

export interface CodejamSubmission {
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  concept: string;
  flow: string;
  // Captured PNG of the submission's initial visible state (1280x800 @2x).
  // See scripts/capture-codejam-screenshots.js to regenerate.
  screenshot: string;
  // Direct URL to the bare submission (no shell). Shown as an "advanced" link
  // for people who want to inspect a single entry — note that without the
  // showcase shell sending postMessage events, most submissions render blank.
  bareSubmissionUrl: string;
}

export interface Learning {
  title: string;
  detail: string;
}

export interface GettingLearntEntry {
  slug: string;
  title: string;
  tagline: string;
  type: EntryType;
  status: EntryStatus;
  date: string; // YYYY-MM
  shortDescription: string;
  intro: string[]; // paragraphs above the demos / showcase
  externalUrl?: string; // live site / contest page / repo
  externalLabel?: string;
  // For chapters with multiple submissions hosted in a single showcase shell,
  // this is the URL to embed (the shell handles dropdown switching, video
  // playback, and the postMessage handshake the submissions expect).
  showcaseUrl?: string;
  // Per-entry accent (HSL "h s% l%") — drives a CSS var on the detail page.
  themeAccent: string;
  themeAccentSoft: string; // 10–15% alpha background
  tech: string[];
  learnings: Learning[];
  // Codejam-style entries can ship a multi-submission showcase.
  submissions?: CodejamSubmission[];
  // Closing reflection paragraph (the "and that's what I got learnt" beat).
  reflection: string;
}

export const gettingLearntEntries: GettingLearntEntry[] = [
  {
    slug: "codejam-2026",
    title: "CodeJam 2026 — Kitboga's Unskippable Ad Contest",
    tagline: "Five anti-pattern ads built for the world's most patient scammer.",
    type: "contest",
    status: "live",
    date: "2026-04",
    shortDescription:
      "Five interactive 'unskippable ads' built in vanilla HTML/CSS/JS for Kitboga's CodeJam 2026 — a contest to design the most maddening, impossible-to-dismiss web ads in the scam-bait genre.",
    intro: [
      "Kitboga runs a community of scam-baiters who waste real scammers' time so the scammers can't waste real victims'. CodeJam 2026 asked builders to design the most aggravating, impossible-to-skip web ads — the kind of dark-pattern UX scammers themselves would weaponize.",
      "I wanted to enter for a specific reason: every day I help clients build the cleanest, calmest, fastest UX I can. To get good at that, I figured the fastest way to internalize the rules was to deliberately break every one of them. So I built five entries — each a different flavor of intentionally hostile design — and then took the lessons back into the work I do for actual clients.",
      "Below is the live, playable showcase of all five. Click play, try to dismiss the overlay, and pay attention to how each one fails on purpose.",
    ],
    externalUrl: "https://codejam26-showcase.vercel.app/",
    externalLabel: "Open the standalone showcase",
    showcaseUrl: "https://codejam26-showcase.vercel.app/",
    themeAccent: "248 90% 66%", // electric indigo — matches showcase chrome
    themeAccentSoft: "248 90% 66%",
    tech: [
      "Vanilla HTML5",
      "CSS Custom Properties",
      "Vanilla JavaScript",
      "postMessage API",
      "Vercel static hosting",
      "iframe orchestration",
    ],
    submissions: [
      {
        slug: "cookie-consent",
        title: "Cookie Consent from Hell",
        tagline: "GDPR theatre that never resolves.",
        tags: ["Overlay", "Dark Pattern", "Loop Trap"],
        concept:
          "A GDPR-style privacy banner that never resolves. Clean corporate polish on the outside; absurd, unhinged labels on the inside.",
        flow:
          'A "We value your privacy" popup with 12 absurd toggles ("Allow vibes-based targeting", "Sync browsing history with your refrigerator"). Every action — Accept All, Reject Non-Essential, Manage Preferences — feeds into a "One more thing…" loop with fresh toggles. After 3 escalating loops, a 250-clause scrollable Data Agreement appears (you must scroll to the end to unlock the checkbox), then identity verification: type a name that subtly shifts characters as you type.',
        screenshot: "/screenshots/getting-learnt/cookie-consent.png",
        bareSubmissionUrl: "https://codejam26-showcase.vercel.app/cookie-consent/submission.html",
      },
      {
        slug: "windows-update",
        title: "Windows Media Codec Required",
        tagline: "An OS-mimicry overlay that finishes installing nothing.",
        tags: ["OS Mimicry", "Fake Wizard", "Pixel-Accurate"],
        concept:
          "A pixel-accurate Windows 11 codec install nag that never finishes. Looks like the operating system itself, not a webpage.",
        flow:
          'Video pauses behind a flawless Win 11 dialog: "This video requires Windows Media Codec to play." Click Install Now → wizard launches with the legit Win 11 banner, EULA scroll, install location picker, "Ready to Install" review, then a fake install progress bar that climbs all the way to "Installation complete." The catch escalates from there.',
        screenshot: "/screenshots/getting-learnt/windows-update.png",
        bareSubmissionUrl: "https://codejam26-showcase.vercel.app/windows-update/submission.html",
      },
      {
        slug: "refund-portal",
        title: "RefundCentral Refund Portal",
        tagline: "An official-looking settlement that never settles.",
        tags: ["Gov Mimicry", "Multi-Step Trap", "Fake CAPTCHA"],
        concept:
          "An official-looking consumer refund portal that traps the user in an endless settlement claim flow.",
        flow:
          '.gov-style landing: "You may be owed a refund." Click CLAIM → enter your refund amount (rejected unless it matches the "on file" amount, which is hinted on the landing) → human-verification CAPTCHA that rejects the first 4 attempts no matter what you select → fake "disbursement processing fee" payment form → endless cascade of fake bank-handshake statuses ("Connecting to processor…", "Verifying card on file…") that loops forever.',
        screenshot: "/screenshots/getting-learnt/refund-portal.png",
        bareSubmissionUrl: "https://codejam26-showcase.vercel.app/refund-portal/submission.html",
      },
      {
        slug: "loading-bar-liar",
        title: "Loading Bar Liar",
        tagline: "Verifying your connection… forever.",
        tags: ["Progress Bar", "Chatbot Trap", "Tier-2 Escalation"],
        concept:
          "A fake connection-verification overlay plus an unhinged AI chat assistant that escalates the longer you stay.",
        flow:
          'Cloudflare-style "Verifying your connection…" page. Bar climbs to 73%, stalls at 83%, jumps to 100% with a green check, then immediately errors and resets. Second attempt stalls at 67% — Max 🤖 pops in the corner with absurd troubleshooting questions ("Is your router within 3 feet of a window?", "Rate your WiFi\'s personality 1–10"). Eventually escalates to Tier 2: a 6-digit code that rotates every 4 seconds. Enter it correctly → bar restarts at 0% with a 2:00 countdown that loops at 1:45.',
        screenshot: "/screenshots/getting-learnt/loading-bar-liar.png",
        bareSubmissionUrl: "https://codejam26-showcase.vercel.app/loading-bar-liar/submission.html",
      },
      {
        slug: "prize-combo",
        title: "Prize Combo — \"You've Won a Prize!\"",
        tagline: "Insurance ad gets hijacked. Game show takes over.",
        tags: ["Combo", "Video Hijack", "Game Show", "Survey Trap"],
        concept:
          "A combination video + interface entry. A boring insurance commercial gets 'hacked' mid-roll by a flashy fake prize notification, and the interface picks up where the video leaves off.",
        flow:
          'Video plays as a normal Pinnacle Life Insurance ad that glitches mid-roll and is hijacked by a game-show prize banner. When the video ends, the interface takes over: name + email form → slot machine that always lands "$999 — so close!" → 4-question quiz about the ad (wrong answer rewinds the video and forces a rewatch) → fake $2.99 shipping fee form that always errors → 47-question survey ending in "Please allow 6–8 business years for delivery."',
        screenshot: "/screenshots/getting-learnt/prize-combo.png",
        bareSubmissionUrl: "https://codejam26-showcase.vercel.app/prize-combo/submission.html",
      },
    ],
    learnings: [
      {
        title: "Anti-pattern UX is the fastest way to internalize good UX",
        detail:
          "Building five interfaces designed to actively hurt the user forces you to name every micro-decision a good interface gets right — affordance clarity, exit visibility, consent reversibility, error transparency. I now flag those things in client reviews faster.",
      },
      {
        title: "Pixel-perfect OS mimicry without a framework",
        detail:
          "The Windows 11 codec dialog had to look like the operating system, not a webpage. That meant nailing the exact title-bar height, system-font stack, button geometry, and motion curves of native Win 11. Plain HTML/CSS — no React, no Tailwind. Sharpened my CSS-from-scratch fundamentals.",
      },
      {
        title: "postMessage as a host/guest contract",
        detail:
          "Each submission runs in an iframe inside Kitboga's player shell. The shell sends play / pause / seekTo and the submission emits success / fail. Implementing both sides of that protocol — and keeping it framework-free — gave me a much cleaner mental model for embeddable widgets.",
      },
      {
        title: "Working in someone else's brand world",
        detail:
          "These ads have to feel native to Kitboga's prank ecosystem — the tone, the rhythm of escalation, the specific flavor of absurd. Building five entries in that voice was a lesson in adapting craft to an existing creative IP without diluting it.",
      },
      {
        title: "Time-boxed contest constraints sharpen taste",
        detail:
          "A narrow theme + a deadline is a forcing function for cutting scope to the actual idea. I shipped five ideas instead of two perfect ones, and the variance taught me more than polish would have.",
      },
    ],
    reflection:
      "The point of CodeJam wasn't to win — it was to spend a weekend with the rules of UX deliberately inverted. Every dark pattern I built makes me sharper at spotting and refusing them in client work. Recruiters: this is what I do on weekends when no one's paying me.",
  },
];

export function getEntryBySlug(slug: string): GettingLearntEntry | undefined {
  return gettingLearntEntries.find((e) => e.slug === slug);
}
