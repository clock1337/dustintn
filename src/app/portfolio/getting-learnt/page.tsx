import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, ArrowUpRight, Trophy, Swords, Sparkles, GraduationCap, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ProudlyServing from "@/components/ProudlyServing";
import { gettingLearntEntries } from "@/data/getting-learnt";

const TITLE = "Getting Learnt — Side Quests, Contests & R&D | DustinTN";
const DESCRIPTION =
  "How I level up between client work — coding contests, custom WoW addons, internal tools, and side quests. A living record of what I'm currently teaching myself and what it produced.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // Hub IS indexable — gives Google the "Dustin's experiments lab" landing page.
  // Chapter detail pages under this hub are individually noindexed (see
  // [slug]/page.tsx) and disallowed in robots.ts so they stay portable to a
  // future standalone product/brand.
  alternates: { canonical: "/portfolio/getting-learnt" },
  keywords: [
    "Dustin Smith portfolio",
    "DustinTN side projects",
    "developer learning journey",
    "self-taught developer",
    "Nashville web developer",
    "side quests",
    "experiments hub",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://dustintn.com/portfolio/getting-learnt",
    type: "website",
  },
};

const wowAddons = [
  {
    name: "DeathMark",
    role: "PvP healer detection HUD",
    learnt: "Lua, custom combat-log parsing for a non-standard server, persistent on-screen HUDs in WoW's frame system.",
    href: "/project-ascension/addons/deathmark",
    accent: "from-red-600 to-red-900",
  },
  {
    name: "QuiverKeeper",
    role: "Hunter ammo & pet food tracker",
    learnt: "Bag scanning, tooltip injection via hooksecurefunc, snap-to-edge frame UX, multi-panel HUD coordination.",
    href: "/project-ascension/addons/quiverkeeper",
    accent: "from-teal-500 to-cyan-700",
  },
  {
    name: "HeroPulse",
    role: "Character life manager + ASK advice engine",
    learnt: "Live data context engines, AH price caching, profession state, building a question→answer system on top of game APIs.",
    href: "/project-ascension/addons/heropulse",
    accent: "from-amber-500 to-orange-700",
  },
];

const futureQuests = [
  {
    label: "Champions Whitelabel Backend",
    blurb: "Turning Kyle's booking + staff portal into a multi-tenant platform other adaptive studios can run.",
    eta: "Coming soon",
  },
  {
    label: "Next service offering",
    blurb: "When I add a new service to DustinTN, I write the journey here first — what I built, what broke, what I'd charge for it.",
    eta: "TBD",
  },
];

export default function GettingLearntIndex() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Getting Learnt — Dustin's Learning Journey",
    description: DESCRIPTION,
    url: "https://dustintn.com/portfolio/getting-learnt",
    isPartOf: {
      "@type": "WebSite",
      name: "DustinTN",
      url: "https://dustintn.com",
    },
    hasPart: [
      ...wowAddons.map((a) => ({
        "@type": "SoftwareApplication",
        name: a.name,
        url: `https://dustintn.com${a.href}`,
        description: a.role,
      })),
      ...gettingLearntEntries.map((e) => ({
        "@type": "CreativeWork",
        name: e.title,
        url: `https://dustintn.com/portfolio/getting-learnt/${e.slug}`,
        description: e.shortDescription,
        dateCreated: e.date,
      })),
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <Navigation currentPage="portfolio" />

      <main>
        {/* Hero */}
        <section className="pt-40 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-dark-gray" />
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]" />

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-full text-white/80 hover:text-white hover:bg-accent transition-all duration-300 border border-white/10 hover:border-accent mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Portfolio</span>
            </Link>

            <AnimatedSection className="max-w-4xl">
              <span className="section-label mb-6 inline-flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Getting Learnt
              </span>
              <h1 className="text-headline">
                Side quests, contests, and the stuff I build to <span className="text-accent">get learnt</span> on something new.
              </h1>
              <p className="text-xl text-white/50 leading-relaxed mt-6 max-w-3xl">
                Client work pays the bills. This is the other half of the practice — the contests, custom addons, internal tools,
                and weekend experiments where I push craft beyond what the brief asks for. Every chapter below is something I
                wasn&apos;t qualified for when I started, and was a little less unqualified for when I finished.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Pillar 1: WoW Addons */}
        <section className="py-20 bg-dark-gray border-y border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="mb-12 max-w-3xl">
              <span className="section-label mb-6 inline-flex items-center gap-2">
                <Swords className="w-4 h-4" />
                Chapter · Game Dev
              </span>
              <h2 className="text-headline">
                WoW addons for <span className="text-accent">Project Ascension</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mt-6">
                Project Ascension is a Wrath-era (3.3.5a) private World of Warcraft server with non-standard combat-log internals.
                Off-the-shelf retail addons don&apos;t work. I learnt Lua and the WoW addon API to build my own — three live, free,
                community-distributed addons under <em>The PenFifteen Club™</em>.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6">
              {wowAddons.map((addon, i) => (
                <AnimatedSection key={addon.name} delay={i * 100}>
                  <Link
                    href={addon.href}
                    className="group block h-full p-6 bg-black/50 rounded-2xl border border-white/10 hover:border-accent/50 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${addon.accent} mb-5 flex items-center justify-center`}>
                      <Swords className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">{addon.name}</h3>
                    <p className="text-white/50 text-sm mb-4">{addon.role}</p>
                    <p className="text-white/40 text-xs leading-relaxed mb-5">
                      <span className="text-accent/70 font-medium">Got learnt: </span>
                      {addon.learnt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
                      Open addon page
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Pillar 2: Contests / Side Quests */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="mb-12 max-w-3xl">
              <span className="section-label mb-6 inline-flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Chapter · Contests &amp; Side Quests
              </span>
              <h2 className="text-headline">
                Things I built because the <span className="text-accent">deadline</span> said so.
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mt-6">
                Contests, R&amp;D for upcoming services, and prototypes I write up so future-me remembers what I learnt.
                Each entry is a chapter — click in for the full case study with playable demos.
              </p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-6">
              {gettingLearntEntries.map((entry, i) => (
                <AnimatedSection key={entry.slug} delay={i * 100}>
                  <Link
                    href={`/portfolio/getting-learnt/${entry.slug}`}
                    className="group block h-full p-8 bg-dark-gray rounded-2xl border border-white/10 hover:border-accent/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <span className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
                        {entry.type === "contest" ? "Contest" : entry.type}
                      </span>
                      <span className="text-xs text-white/40 inline-flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {entry.date}
                      </span>
                      {entry.submissions && (
                        <span className="text-xs text-white/40">
                          · {entry.submissions.length} submissions
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">
                      {entry.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed mb-6">{entry.tagline}</p>
                    <p className="text-white/40 text-sm leading-relaxed mb-6">{entry.shortDescription}</p>
                    <span className="inline-flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
                      Read the chapter
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </AnimatedSection>
              ))}

              {/* Future quest placeholders */}
              {futureQuests.map((quest, i) => (
                <AnimatedSection key={quest.label} delay={(gettingLearntEntries.length + i) * 100}>
                  <div className="block h-full p-8 bg-dark-gray/50 rounded-2xl border border-dashed border-white/10">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-white/5 text-white/40 border border-white/10">
                        {quest.eta}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-white/70">
                      <Sparkles className="w-5 h-5 inline-block mr-2 text-accent/60" />
                      {quest.label}
                    </h3>
                    <p className="text-white/40 leading-relaxed">{quest.blurb}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-dark-gray relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.1),transparent_70%)]" />

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <span className="section-label mb-6 inline-flex justify-center">Hire The Curiosity</span>
              <h2 className="text-headline mb-8">
                The same energy goes into <span className="text-accent">your project</span>.
              </h2>
              <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
                If you&apos;re a recruiter or founder reading this — the contests are how I stay sharp. The client work below is where it ships.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/portfolio" className="btn-pill btn-pill-primary group">
                  See client work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="btn-pill border border-white/20 text-white hover:bg-white/10 transition-all"
                >
                  Start a conversation
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <ProudlyServing />
        <Footer />
      </main>
    </div>
  );
}
