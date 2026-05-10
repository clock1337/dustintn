// /launches — long-form build narratives for shipped projects.
// Each launch is a SEO-indexed article tied to a portfolio entry.
// Cross-linked: portfolio detail page links into the article, article links
// back to portfolio detail + the live site.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "list"; items: string[] };

export interface Launch {
  slug: string;
  // Slug of the matching /portfolio/[slug] entry — used for cross-linking.
  portfolioSlug: string;
  title: string;
  // Short SEO-friendly title used for nav/cards (under 60 chars).
  shortTitle: string;
  // Subtitle / dek under the headline.
  dek: string;
  // ISO date.
  publishDate: string;
  readMinutes: number;
  // Comma-separated tags for SEO + filtering later.
  tags: string[];
  coverImage: string;
  coverImageAlt: string;
  // Used on the index card and as the OpenGraph description.
  excerpt: string;
  liveUrl: string;
  liveLabel: string;
  body: Block[];
}

export const launches: Launch[] = [
  {
    slug: "walking-street-pictures",
    portfolioSlug: "walking-street-pictures",
    title: "Building a Cinema Magazine With a CMS Hidden Inside It",
    shortTitle: "Walking Street Pictures: Magazine + CMS",
    dek: "How an indie film studio in the Philippines got a website that reads like a printed film journal — and a backend their team can run without filing a ticket.",
    publishDate: "2026-05-09",
    readMinutes: 6,
    tags: ["Case Study", "Next.js", "Custom CMS", "Editorial Design", "Film & Entertainment"],
    coverImage: "/screenshots/walking-street-pictures.png",
    coverImageAlt: "Walking Street Pictures homepage — magazine-style hero with serif 'Issue №01' framing and Walking Street arch logo",
    excerpt:
      "An independent cinema studio in Angeles City, Philippines needed two things at once: a website that felt like a printed film magazine, and a backend their non-developer team could actually use. Here's how the pairing got built — and why a single Next.js codebase with a private editor route turned out to be the right shape for both halves.",
    liveUrl: "https://walkingstreetpictures.com",
    liveLabel: "walkingstreetpictures.com",
    body: [
      {
        type: "p",
        text: "Walking Street Pictures is an independent cinema studio in Angeles City, Philippines. They make original web series, short-form art-house films, and anthology projects rooted in the city's late-night urban storytelling — work that takes its name from the Walking Street neighborhood the studio is built around. The brief, when they came to me, was deceptively simple: build us a website. The hard version of the brief, the one we landed on after the first call, was build us a website that reads like a printed film magazine and that we can actually run ourselves.",
      },
      {
        type: "p",
        text: "Those two requirements pull in opposite directions. Magazine-style sites tend to be hand-tuned, opinionated, and brittle. CMS-driven sites tend to be generic, template-shaped, and visually safe. The interesting work was figuring out how to be both at once — without giving up the editorial restraint that makes the magazine half work.",
      },

      { type: "h2", text: "The setup: two audiences, one codebase" },
      {
        type: "p",
        text: "There are really two audiences on a film studio's website. The public — actors looking for casting calls, press writing about the productions, fans following Bar Girl or School of Hard Knocks — wants to feel something when they land. They want serif headlines, paper textures, the sense that they've opened an issue of a magazine that takes itself seriously. The studio team — directors, producers, the casting coordinator — wants to publish a new audition call at 11pm without bothering anyone, and have it live by 11:01.",
      },
      {
        type: "p",
        text: "The temptation is to solve this with two separate products: a marketing site you build by hand, and a Wordpress install nobody loves. We didn't. We built one Next.js codebase with two faces — a public, statically-generated magazine, and a private, server-rendered admin panel that talks to the same content layer. Same database, same image pipeline, same deploy.",
      },

      { type: "h2", text: "The magazine half: editorial restraint" },
      {
        type: "p",
        text: "The visual language is intentionally analog. The hero treats every visit like opening a new issue, complete with archival numbering ('Issue №01') and a status indicator that says AUDITION OPEN in the same gold accent the rest of the brand uses. The Walking Street arch — the studio's logo mark — sits white on a paper-textured warm-brown background, with the silhouette of a figure walking through it.",
      },
      {
        type: "image",
        src: "/screenshots/walking-street-pictures.png",
        alt: "Walking Street Pictures homepage — full magazine layout with hero, navigation, and Bar Girl web series promotion",
        caption: "The public site, top-of-page. Magazine numbering, serif headlines, paper texture, gold audition-status indicator.",
      },
      {
        type: "p",
        text: "The navigation rail (Productions · Casting · News · About · Press · Contact) sits in a magazine-style top bar with one high-contrast CTA: Open Casting Calls. Production pages are image-heavy, layered with serif headlines and tactile backgrounds. Cookie consent ships compliant with site-analytics opt-out, because even an art-house cinema site has to pass GDPR review.",
      },
      {
        type: "p",
        text: "The hard part of the editorial half wasn't the typography or the palette. It was the restraint — knowing what not to put on the page. A gradient. A scroll-jacking animation. A 'Subscribe to our newsletter' modal that pops up after 8 seconds. Every default a modern marketing site reaches for would have ruined the magazine illusion. So we left them out.",
      },

      { type: "h2", text: "The CMS half: the publish button is the product" },
      {
        type: "p",
        text: "The studio team are filmmakers, not engineers. The brief for the editor side was: if making a new audition call takes more than four clicks, we've failed. Real publishing teams know this — the gap between 'I have a thought' and 'the world can read it' is the thing you optimize for, harder than anything else.",
      },
      {
        type: "p",
        text: "What we built is a private admin route on the same Next.js app, behind auth, with a clean WYSIWYG editor for productions, news posts, and casting calls. Image upload is one drag. Drafts are autosaved. Publishing is one button. Flipping a casting call from open to closed is a toggle in a list, not a code change. The studio's casting coordinator can sit in a coffee shop in Angeles City and update the site between auditions.",
      },
      {
        type: "h3",
        text: "Why custom, not Sanity or Contentful",
      },
      {
        type: "p",
        text: "A reasonable critique here: why not Sanity, Contentful, Strapi? They're great. We considered them. The reason we built our own is that the studio's content shapes are unusual — a production has a cast list with character notes, a casting call has an open/closed status, a news post can be promoted to the hero. Off-the-shelf CMSs let you model this, but the editor experience for a non-engineer was always one layer of indirection too deep. By co-locating the editor with the site, we got to design the admin panel like a product, not a settings page.",
      },

      { type: "h2", text: "The architecture, in one paragraph" },
      {
        type: "p",
        text: "Single Next.js codebase. Public routes statically generated for speed and SEO; admin routes server-rendered behind auth. Image optimization via Next.js Image (so the studio can drop a 4MB still from a shoot and the site still loads under a second). Deployed to Vercel for global edge delivery. No multi-repo split, no headless-vs-frontend boundary to maintain, no 'wait, that's in the CMS' confusion when something needs changing.",
      },

      { type: "h2", text: "The takeaway" },
      {
        type: "p",
        text: "Magazines and CMSs aren't opposing forces. They're the same shape with different audiences. The editorial restraint that makes the public side feel premium is the same discipline that makes the editor feel calm to use. Two faces, one codebase, one thing to maintain. The studio publishes their own work now. That's the whole point.",
      },
      {
        type: "quote",
        text: "Two faces, one Next.js codebase. Zero developer tickets to publish.",
      },
    ],
  },

  // Native Pastures launch article drafted but held — portfolio entry stands
  // alone for now, no /launches counterpart. Add back when ready by restoring
  // the entry below from git history (see data/launches.ts in commit 468c4a6+).
  /* HELD: native-pastures launch — see commit history to restore.
  {
    slug: "native-pastures",
    portfolioSlug: "native-pastures",
    title: "How to Build a Parody That Doesn't Wink",
    shortTitle: "Native Pastures: Parody by Polish",
    dek: "Native Pastures sells Premium Ancestral Dirt™ with the same earnest sincerity as a $90 supplement. Here's why the joke only lands when the craft is real.",
    publishDate: "2026-05-09",
    readMinutes: 5,
    tags: ["Case Study", "Brand Concept", "Parody", "Wellness Branding", "Editorial Design"],
    coverImage: "/screenshots/native-pastures.png",
    coverImageAlt: "Native Pastures hero — serif headline 'You came from the earth.' beside a jar of The Original Premium Ancestral Dirt",
    excerpt:
      "An internal Creative Lab piece: a deadpan parody of premium-wellness branding that sells literal dirt with the same straight-faced craft as the brands it's making fun of. The only way the joke works is if the build is real.",
    liveUrl: "https://native-pastures.vercel.app",
    liveLabel: "native-pastures.vercel.app",
    body: [
      {
        type: "p",
        text: "Native Pastures sells Premium Ancestral Dirt™. The hero says you came from the earth, we just bottled it. There is a customer rating block. There is a trust-badge row that reads Ethically Sourced · Spiritually Adjacent · 100% Real. There is an FAQ that, if you scroll far enough, asks the question every visitor is silently asking by then: Is this a real product?",
      },
      {
        type: "p",
        text: "It is not a real product. Native Pastures is a parody — an internal Creative Lab piece I built to push craft on a thing I'd never have an excuse to build for a paying client. The premise is simple: take the premium-wellness category — the brands that turn ordinary things into $90 ritual objects with serif typography and tasteful product photography — and run it past its own logical conclusion. If the wellness industry's ultimate move is selling you something ancestral, what's the most ancestral product imaginable? Dirt. Sell them dirt.",
      },

      { type: "h2", text: "The principle: parody only works without the wink" },
      {
        type: "p",
        text: "Parody fails the moment it announces itself. Every time a satirical site uses comic sans, or puts a cartoon hand pointing at the joke, or writes copy that's clearly trying to be funny — it stops being funny. The viewer is told what to think and lets out the air. The joke that lasts is the one you have to slowly realize is a joke.",
      },
      {
        type: "p",
        text: "So the brief I wrote myself for Native Pastures was: build the satire with the same craft the actual brands use. No winking. No comic typeface. No 'haha get it'. The cream-and-coffee palette has to be as earnest as the wellness category's. The product photography has to be the kind of editorial still-life that real wellness brands pay $5,000 for. The headline has to land with the same straight face as a real ashwagandha launch.",
      },

      { type: "h2", text: "The craft, item by item" },
      {
        type: "image",
        src: "/screenshots/native-pastures.png",
        alt: "Native Pastures homepage — earthy palette, serif headline, jar of Premium Ancestral Dirt with rating",
        caption: "The hero. The jar. The serif. The badges. Every craft choice that would sell ashwagandha is the same choice that sells the joke.",
      },
      {
        type: "p",
        text: "The hero is one serif headline ('You came from the earth.') and a one-liner subhead ('We just bottled it.'). The product shot is a single jar — The Original — on a clean cream background. There is a five-star rating with a number-of-reviews count. There is a Buy button that uses the same earthy primary color as the brand. None of this is parody-shaped. It's all wellness-shaped.",
      },
      {
        type: "p",
        text: "Below the fold: the trust-badge row. Three badges. Ethically Sourced. Spiritually Adjacent. 100% Real. That middle one is the moment. Not a punchline — a tonal hairline crack. The reader's brain registers it without their conscious mind catching up. By the time they reach the FAQ that asks Is this a real product?, they're already in on the joke without anyone telling them.",
      },

      { type: "h3", text: "The FAQ as the meta moment" },
      {
        type: "p",
        text: "The FAQ is where the bit gets to breathe a little. Most parody sites go too hard here — they treat it like a stand-up set. Native Pastures plays it straight. Is this certified organic? sits next to Is this a real product? sits next to What does it taste like? sits next to Why is the Starter Kit $49 for a 4-bundle? Each is answered with the same deadpan brand voice. The reader does the work of being amused. That is the whole craft of it.",
      },

      { type: "h2", text: "Why I built it" },
      {
        type: "p",
        text: "Three reasons. One: I wanted to push restraint. Most of my client work is for service businesses where the brief is clarity, not voice. Native Pastures was an exercise in voice through restraint — saying nothing extra, letting the format do the comedy. Two: I wanted a concept piece for the portfolio that wasn't a real client. Service businesses are great, but a Creative Lab piece tells recruiters and prospects that I think about brand and editorial, not just web stack. Three: it was fun. That's allowed.",
      },

      { type: "h2", text: "What it taught me, that I'm using on real client work now" },
      {
        type: "list",
        items: [
          "Trust the reader more. Most copy I write for clients over-explains. Native Pastures over-explains nothing and is more memorable for it. I'm cutting subheads from a Pinnacle Wellness page rewrite right now because of this.",
          "The hairline crack is a reusable move. Three perfectly serious bullets, then one slightly off bullet — that rhythm works in real brand copy too, when you want a brand to feel human instead of corporate.",
          "Parody is a useful constraint even when you're not making one. Asking 'how would I parody this brief?' surfaces the genre conventions you'd never otherwise notice — and lets you choose which to keep.",
        ],
      },

      { type: "h2", text: "The takeaway" },
      {
        type: "p",
        text: "The point of Native Pastures isn't the joke. It's the proof that craft and concept aren't separate disciplines. A parody that's built carelessly stops being funny inside two scrolls. A parody built with the same restraint as the real thing keeps landing — every visit, every share, every screenshot someone pastes in their group chat. The craft is the joke.",
      },
      {
        type: "quote",
        text: "Built a wellness brand that sells dirt. The point was to build the satire with the same craft as the brands it's making fun of.",
      },
    ],
  },
  */
];

export function getLaunchBySlug(slug: string): Launch | undefined {
  return launches.find((l) => l.slug === slug);
}

export function getLaunchByPortfolioSlug(portfolioSlug: string): Launch | undefined {
  return launches.find((l) => l.portfolioSlug === portfolioSlug);
}
