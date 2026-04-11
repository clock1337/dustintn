// Single source of truth for Project Ascension addons
// Update this file when releasing new versions — it drives:
// - Addon detail pages
// - Hub page listings
// - RSS feed
// - Sitemap
// - JSON-LD SoftwareApplication schema

export interface AddonChangelogEntry {
  version: string;
  codename?: string;
  date: string; // ISO date
  changes: string;
}

export interface Addon {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string[];
  version: string;
  codename?: string;
  releaseDate: string; // ISO
  fileName: string; // file in /public/downloads/ascension/
  fileSize: string; // human-readable
  class: string;
  category: string;
  themeColor: "gold" | "blood" | "teal";
  comingSoon?: boolean; // true = show "Coming Soon" instead of download button
  badges: string[];
  features: { icon: string; title: string; description: string }[];
  slashCommands: { command: string; description: string }[];
  changelog: AddonChangelogEntry[];
  screenshots?: { src: string; alt: string; caption: string }[];
  realm: string;
  gameVersion: string;
  server: string;
}

export const ascensionAddons: Addon[] = [
  {
    slug: "quiverkeeper",
    name: "QuiverKeeper",
    comingSoon: true,
    tagline: "Never run dry mid-fight. Your ammo count and your pet's hunger, always in sight.",
    shortDescription:
      "Always-visible ammo counter and pet food tracker for hunters on Project Ascension.",
    longDescription: [
      "QuiverKeeper was born from a frustratingly familiar moment — charging into Arathi Basin, guns blazing, only to hear that dreaded dry click of an empty quiver. No arrows. Again.",
      "This addon puts a clean, always-visible HUD on your screen showing exactly how many shots you have left. It colors green when you're stocked, yellow when you should restock soon, and a pulsing red when you're critically low. No more excuses before a BG.",
      "The second panel tracks pet food. If you're running a Raptor, a Wolf, or any hunter pet, QuiverKeeper scans your bags for food your specific pet actually eats — and warns you before you head into a dungeon with a grumpy, underfed companion. It highlights food items in your bags with a glowing border so you don't vendor them by accident, and even injects a \"Your Raptor eats this!\" warning into item tooltips.",
      "Built specifically for Project Ascension on the Bronzebeard realm by Longshaft of The PenFifteen Club™. Classless. Shameless. Always prepared.",
    ],
    version: "1.9.0",
    codename: "ArathiBasin",
    releaseDate: "2026-04-09",
    fileName: "QuiverKeeper_v1.9.0.zip",
    fileSize: "11 KB",
    class: "Hunter",
    category: "UI / HUD",
    themeColor: "gold",
    badges: ["Free", "Open Source", "WoW 3.3.5", "Project Ascension", "Bronzebeard", "Hunter", "UI / HUD"],
    realm: "Bronzebeard",
    gameVersion: "WoW 3.3.5a",
    server: "Project Ascension",
    features: [
      { icon: "🏹", title: "Ammo Counter HUD", description: "Always-visible shot count. Formats large numbers with commas. Shows ammo type name. Polls every 0.5s." },
      { icon: "🐾", title: "Pet Food Tracker", description: "Scans all bags for food your active pet accepts. Auto-detects pet family. Counts every qualifying item." },
      { icon: "🎨", title: "Color-Coded Warnings", description: "Green when stocked, yellow when low, red when critical, pulsing flash at zero." },
      { icon: "🧲", title: "Magnetic Snap System", description: "Drag the pet HUD near any side of the ammo HUD — top, bottom, left, or right — and they lock together and move as one." },
      { icon: "↔️", title: "Live Resize", description: "Drag the corner grip on either HUD to resize it live. Fonts scale proportionally. Slider in options too." },
      { icon: "✨", title: "Bag Highlighting", description: "Food your pet eats gets a teal/green glowing border in your bag slots. Never vendor it by accident again." },
      { icon: "💬", title: "Tooltip Injection", description: "Hover food in your bags and see \"Your Raptor eats this! (Keep it — don't vendor!)\" added to the tooltip." },
      { icon: "🗺️", title: "Vendor Finder", description: "/qk vendors prints ammo vendors (arrows or bullets) and pet food vendors for your current pet family, with locations." },
      { icon: "⚙️", title: "Full Options Panel", description: "Right-click either HUD. Set thresholds, toggle features, resize, lock HUDs, view snap status, reset positions." },
      { icon: "🔔", title: "Zone-In Warnings", description: "Chat alert when entering a BG or new zone with low ammo or low pet food. Know before the first pull." },
      { icon: "🐛", title: "Built-In Debug", description: "/qk debug — full diagnostic: ammo count, pet family, food detection, bag scan, config dump." },
      { icon: "💾", title: "Persistent Settings", description: "Everything saves between sessions. Upgrades from older versions auto-fill new keys — no SavedVariables wipe needed." },
    ],
    slashCommands: [
      { command: "/qk", description: "Open or close the options panel" },
      { command: "/qk vendors", description: "Print ammo + pet food vendors for your current pet" },
      { command: "/qk debug", description: "Full diagnostic — bag scan, config dump, pet detection results" },
      { command: "/qk lock", description: "Toggle HUD lock to prevent accidental dragging" },
      { command: "/qk snap", description: "Toggle magnetic snap between the two HUDs" },
      { command: "/qk pet", description: "Toggle the pet food HUD on/off" },
      { command: "/qk reset", description: "Reset ammo HUD to default screen position" },
    ],
    changelog: [
      { version: "1.9.0", codename: "ArathiBasin", date: "2026-04-09", changes: "Snap coordinate math fixed. GetCenter() returns UIParent-space coords directly — removed incorrect scale division that teleported the pet HUD. Snap distance 120u. NO PET display cleaned up." },
      { version: "1.8.0", codename: "WailingCaverns", date: "2026-04-08", changes: "EditBox backgrounds. Threshold input fields now have a dark fill. Drag detach uses correct coordinate space." },
      { version: "1.7.0", codename: "Ratchet", date: "2026-04-07", changes: "Snap checkbox removed. Fully automatic by proximity — drag close to snap, drag far to detach. Options shows current snap side." },
      { version: "1.6.0", codename: "Crossroads", date: "2026-04-06", changes: "Right-click fixed. opt forward-declared. White resize squares replaced with subtle L-shaped corner grips with hover tooltip." },
      { version: "1.5.0", codename: "Barrens", date: "2026-04-05", changes: "Real resize. Dropped SetScale() — directly resizes frame and scales fonts. Corner grip drag. PenFifteen Club credit block in options." },
      { version: "1.4.0", codename: "Olivia", date: "2026-04-04", changes: "4-side snap. Top, bottom, left, right snapping. petMagSide config key. Old config upgrade path fixed." },
      { version: "1.2.0", codename: "Longshaft", date: "2026-04-03", changes: "Rebranded to QuiverKeeper. Codename system. DeathMark-style login header. Tooltip hook switched to hooksecurefunc." },
      { version: "1.0.0", date: "2026-04-01", changes: "Initial release. Ammo counter HUD, pet food tracker, options panel, vendor finder, bag highlighting, tooltip injection, zone-in warnings, debug command." },
    ],
    screenshots: [
      { src: "/downloads/ascension/screenshots/quiverkeeper-options.jpg", alt: "QuiverKeeper options panel", caption: "Options panel · right-click either HUD to open" },
      { src: "/downloads/ascension/screenshots/quiverkeeper-arathi.jpg", alt: "QuiverKeeper in Arathi Basin", caption: "Arathi Basin · SHARP 419 · RAPTOR FOOD 33" },
      { src: "/downloads/ascension/screenshots/quiverkeeper-snapped.png", alt: "Snapped HUDs", caption: "Snapped HUDs · green = stocked · yellow = restock" },
      { src: "/downloads/ascension/screenshots/quiverkeeper-tooltip.jpg", alt: "Pet food tooltip", caption: "Tooltip · your pet eats this! · bag highlighting" },
      { src: "/downloads/ascension/screenshots/quiverkeeper-combat.jpg", alt: "Mid-combat HUD display", caption: "Mid-combat · no pet in BG · clean NO PET display" },
      { src: "/downloads/ascension/screenshots/quiverkeeper-full-options.jpg", alt: "Full options panel", caption: "Full options panel with PenFifteen Club credit" },
    ],
  },
  {
    slug: "deathmark",
    name: "DeathMark",
    comingSoon: true,
    tagline: "Your healer has been marked for death.",
    shortDescription:
      "PvP healer detection HUD that scans the BG roster and combat log to identify enemy healers from the first second.",
    longDescription: [
      "DeathMark is a PvP healer detection addon for Project Ascension — the private World of Warcraft 3.3.5a server. Built specifically for Ascension's non-standard combat log format and API quirks, it scans the Battleground roster and combat log to identify enemy healers the moment they enter the fight, then tracks them in a persistent on-screen HUD with live health bars, mana bars, range estimates, and active healing alerts.",
      "Stop getting surprised by the Shaman totem-dropping behind a pillar. Stop chasing the warrior while the Priest is ressing their entire team at 80% mana. DeathMark puts every enemy healer on your screen, sorted by priority, from the first second of the BG.",
      "Standard WoW addon combat log parsers break on Ascension — the subevent names, argument positions, and API availability all differ from retail and other private servers. DeathMark is written from the ground up for Ascension's 3.3.5a environment, including SPELL_AURA_HEAL, title-case classTokens from GetBattlefieldScore, and C_NamePlate instead of the missing _G[\"NamePlate1\"].",
      "Built and maintained by The PenFifteen Club™ — a hunter-only Horde guild on Bronzebeard with too much time and too many opinions about healers.",
    ],
    version: "1.55",
    releaseDate: "2026-04-09",
    fileName: "DeathMark_v1.55.zip",
    fileSize: "27 KB",
    class: "Any (PvP)",
    category: "Combat / PvP",
    themeColor: "blood",
    badges: ["Free", "Open Source", "WoW 3.3.5", "Project Ascension", "Bronzebeard", "Arena 52", "PvP", "HUD"],
    realm: "Bronzebeard · Arena 52",
    gameVersion: "WoW 3.3.5a",
    server: "Project Ascension",
    features: [
      { icon: "☩", title: "Healer Detection", description: "Scans BG roster + combat log to identify enemy healers from spell casts, healing events, and class info." },
      { icon: "❤️", title: "Live Health Bars", description: "Real-time health bar per detected healer. Updates from combat log + nameplate data." },
      { icon: "💠", title: "Mana Bars", description: "Track mana on every enemy healer so you know who's about to dump and who's empty." },
      { icon: "📏", title: "Range Estimates", description: "Approximate distance per healer using nameplate data and last-known position." },
      { icon: "✨", title: "Healing Alerts", description: "Flash and pulse when a healer is actively casting a heal. See the Holy Light incoming before it lands." },
      { icon: "🎯", title: "Closest-First Sort", description: "Healers sorted by proximity so the biggest immediate threat is always at the top." },
      { icon: "🖱️", title: "Click-Targeting", description: "Click any row in the HUD to target that healer instantly. No more tab-target lottery." },
      { icon: "🧱", title: "Draggable HUD", description: "Position the panel anywhere on your screen. Settings persist between sessions." },
      { icon: "⚙️", title: "Options Menu", description: "Right-click the title bar for the full options panel. Toggle features, set sort mode, adjust scale." },
      { icon: "🔧", title: "Ascension-Tuned", description: "Combat log parser written for Ascension's exact API quirks. Doesn't break when other addons break." },
      { icon: "🩸", title: "Cross-Realm", description: "Works on Bronzebeard (class-based) and Arena 52 (classless) — auto-detects which realm you're on." },
      { icon: "💀", title: "PenFifteen Approved", description: "Battle-tested by the only hunter-only guild on Ascension that's tired of healers." },
    ],
    slashCommands: [
      { command: "/deathmark", description: "Open or close the options panel" },
      { command: "/dm", description: "Short alias for /deathmark" },
      { command: "/dm reset", description: "Reset HUD position to screen center" },
      { command: "/dm sort", description: "Cycle sort mode: closest / health / class" },
      { command: "/dm lock", description: "Lock the HUD to prevent dragging" },
      { command: "/dm debug", description: "Print combat log + healer detection diagnostics" },
    ],
    changelog: [
      { version: "1.55", date: "2026-04-09", changes: "Range estimate refinement. Closer healers update faster. Heal-cast alert flash improved." },
      { version: "1.50", date: "2026-04-07", changes: "Click-to-target on HUD rows. Sort mode cycles via /dm sort. Bronzebeard / Arena 52 auto-detection." },
      { version: "1.40", date: "2026-04-05", changes: "Mana bar added per healer. Combat log parser handles SPELL_AURA_HEAL on Ascension." },
      { version: "1.30", date: "2026-04-03", changes: "Live health bars from nameplate data + combat log fallback." },
      { version: "1.20", date: "2026-04-01", changes: "GetBattlefieldScore-based roster scan. Title-case classToken handling for Ascension." },
      { version: "1.00", date: "2026-03-28", changes: "Initial release. Healer detection, draggable HUD, options menu." },
    ],
  },
  {
    slug: "heropulse",
    name: "HeroPulse",
    comingSoon: true,
    tagline: "Think The Sims — your character has needs, a life, a routine.",
    shortDescription:
      "Persistent household manager that watches professions, gear, gold, and alts — surfacing exactly what needs attention when you log in.",
    longDescription: [
      "HeroPulse is a persistent household manager for your Ascension characters. It watches your professions, gear, gold, and alts — and surfaces exactly what needs attention, right when you log in.",
      "No configuration. No slash commands required. Install it, log in, and the panel opens itself in the bottom-right corner. Everything is event-driven — zero FPS impact.",
      "Five tabs cover everything: PULSE (prioritized alert feed), ASK (16 pre-built questions answered using your live data), GEAR (all 19 equipment slots with craftable upgrades and BoE cross-character scanning), NAV (profession catch-up routes and Horde zone progression), and GOLD (live session income tracking with sparkline history and source breakdowns).",
      "Up to 5 characters tracked as a household. Cross-character supply gaps, BoE hand-me-downs, rested XP alerts, and a \"While You Were Gone\" recap every time you log in. Passive AH price cache scans while you browse — so gold tips in PULSE show real current prices, not estimates.",
      "Built for Project Ascension on Bronzebeard by Longshaft of The PenFifteen Club™. Ascension reports every character as Druid — HeroPulse reads your talent tree names and maps them to your actual build archetype.",
    ],
    version: "1.0.0",
    releaseDate: "2026-04-11",
    fileName: "HeroPulse-v1.0.0.zip",
    fileSize: "TBD",
    class: "Any",
    category: "Character Management",
    themeColor: "teal",
    badges: ["v1.0.0", "WoW 3.3.5a", "Bronzebeard · Horde", "Free"],
    realm: "Bronzebeard · Horde",
    gameVersion: "WoW 3.3.5a",
    server: "Project Ascension",
    features: [
      { icon: "⚡", title: "PULSE Alert Feed", description: "Three priority levels — P1 act now (red), P2 do soon (yellow), P3 good to know (blue). Sorted by urgency. Footer dot changes color so you know the state at a glance." },
      { icon: "💬", title: "ASK Advice Engine", description: "Click a question and get a real answer using your live data — level, professions, AH prices, roster state, zone, and session stats. 16 questions across 4 categories." },
      { icon: "⚔", title: "Gear Slot Audit", description: "Reads all 19 equipment slots. Flags empty slots and gear below expected item level. Color-coded StatusBar for average iLvl vs expected." },
      { icon: "🔨", title: "Craftable Upgrades", description: "Cross-references your profession skills against craftable gear. Only shows items you can make right now that beat what you're wearing." },
      { icon: "📦", title: "BoE Cross-Char Scanner", description: "Scans bags for equippable green+ items. Reads roster alts' saved inventories and flags items your current character could use." },
      { icon: "🧙", title: "5-Char Roster Household", description: "Up to 5 characters tracked automatically. Cross-profession supply gaps, rested XP status, notable loots, and \"While You Were Gone\" recap on login." },
      { icon: "💰", title: "AH Price Cache", description: "Passive background scan while you browse. Rolling median from last 20 observations. 48-hour cache. 30+ tracked items." },
      { icon: "📈", title: "GOLD Income Dashboard", description: "Live session stats, sparkline history across last 10 sessions, gold source StatusBars — Loot vs Vendor vs AH sales." },
      { icon: "🗺", title: "NAV Profession Routes", description: "Progress bars for every profession with best catch-up zone for your current skill rank. 21 Horde zones with dungeon callouts." },
      { icon: "🔍", title: "Class Detection", description: "Ascension reports every character as Druid. HeroPulse reads your talent tree names and maps them to your actual build archetype." },
      { icon: "⚙", title: "Settings Panel", description: "Toggle auto-show, greeting overlay, life skill nudges, roster mat alerts. Reset position, clear roster, clear AH cache." },
      { icon: "🛡", title: "Zero FPS Impact", description: "Everything is event-driven. No OnUpdate scripts. No per-frame work. StatusBars set once per event. Tested on low-spec hardware." },
    ],
    slashCommands: [
      { command: "/hp", description: "Toggle panel open / closed" },
      { command: "/hpsettings", description: "Open the settings overlay (or click the gear icon)" },
      { command: "/hpgold", description: "Jump directly to the GOLD income tab" },
      { command: "/hpgear", description: "Jump to GEAR tab and print slot summary to chat" },
      { command: "/hpnav", description: "Jump to NAV tab" },
      { command: "/hpask <topic>", description: "Ask a question — topics: sell, gold, ah, prof, level, need, next, todo, stats, ready, life, pair, craft, balance, alt, stock" },
      { command: "/hpah", description: "Print AH price cache summary to chat" },
      { command: "/hpclear", description: "Clear AH price cache — forces fresh scan on next AH visit" },
      { command: "/hproster", description: "Print full roster summary to chat" },
      { command: "/hpignore", description: "Toggle current character active / inactive in the roster" },
      { command: "/hpversion", description: "Print full version history to chat" },
      { command: "/hpdebug", description: "Toggle verbose debug logging" },
    ],
    changelog: [
      { version: "1.0.0", date: "2026-04-11", changes: "Release — Integration & Hardening. Schema migration guard — safe upgrade from any earlier version. Version history in settings overlay. Per-key settings defaults. Gold source totals in journal entries. Tab font tuned for 5-tab layout." },
      { version: "0.9.0", date: "2026-04-10", changes: "GOLD tab. Fifth tab — SESSION (live counters), HISTORY (sparkline from last 10 sessions), SOURCES (StatusBar breakdown). Gold source classification via combat state. AH sale detection via mailbox scan." },
      { version: "0.8.0", date: "2026-04-09", changes: "Auto-Show & Settings. Panel opens on login by default. Separate minimize and close buttons. Settings overlay with 5 toggles and 3 action buttons. Ascension class detection via talent tab heuristics." },
      { version: "0.7.0", date: "2026-04-08", changes: "GEAR tab. SLOTS reads all 19 equipment slots with iLvl vs expected, color-coded StatusBar. CRAFT shows craftable upgrades. BOE scans bags for equippables and cross-references roster alts." },
      { version: "0.6.0", date: "2026-04-07", changes: "ASK tab. 16 clickable questions across 4 categories. Context-aware answers using live level, professions, AH cache, roster state, zone, and session data." },
      { version: "0.5.0", date: "2026-04-06", changes: "AH Price Cache. Passive background scan on AUCTION_ITEM_LIST_UPDATE. Rolling median per item. 48-hour TTL. 30+ tracked items." },
      { version: "0.4.0", date: "2026-04-05", changes: "NAV tab. ROUTES shows profession progress bars with catch-up zones. ZONES lists 21 Horde zones with dungeon callouts. TIPS gives travel shortcuts by level range." },
      { version: "0.3.0", date: "2026-04-04", changes: "Roster System. Up to 5 characters tracked as a household. Cross-character mat supply detection. \"While You Were Gone\" recap on login." },
      { version: "0.2.0", date: "2026-04-03", changes: "PULSE Dashboard. Alert engine with P1/P2/P3 priority levels. Session journal. Login recap greeting. Logoff summary with gold delta." },
      { version: "0.1.0", date: "2026-04-01", changes: "Initial skeleton. Panel with draggable frame, header, snapshot bar, 4-tab bar, footer with alert dot, SavedVariables setup." },
    ],
  },
];

export function getAddonBySlug(slug: string): Addon | undefined {
  return ascensionAddons.find((addon) => addon.slug === slug);
}

export function getAllAddonSlugs(): string[] {
  return ascensionAddons.map((addon) => addon.slug);
}
