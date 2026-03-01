import { ArrowRight, ArrowLeft, Calendar, User, MapPin, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import ProudlyServing from "@/components/ProudlyServing";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const logos: Record<string, {
  slug: string;
  title: string;
  industry: string;
  tagline: string;
  client: string;
  year: string;
  location: string;
  services: string[];
  brief: string;
  challenge: string;
  solution: string;
  heroImage: string;
  colorPalette: { name: string; hex: string; usage: string }[];
}> = {
  "mountain-peak-brewing": {
    slug: "mountain-peak-brewing",
    title: "Mountain Peak Brewing",
    industry: "Food & Beverage",
    tagline: "Crafted at the summit of flavor",
    client: "Mountain Peak Brewing Co.",
    year: "2025",
    location: "Asheville, NC",
    services: ["Logo Design", "Brand Mark", "Typography", "Color System"],
    brief: "Mountain Peak Brewing needed a brand identity that reflected their craft brewing philosophy and connection to the Appalachian mountains. They wanted something that felt rugged yet refined — equally at home on a tap handle and an Instagram post.",
    challenge: "The craft beer market is saturated with mountain-themed breweries. The challenge was creating a mark that honored the mountain inspiration without blending into a sea of generic peak silhouettes and outdoorsy cliches.",
    solution: "We designed an abstract peak mark that doubles as a stylized letter M, giving the logo a unique structure that works as both a symbol and a monogram. The hand-drawn quality of the linework adds craft authenticity, while a bold amber and forest color palette ties back to brewing traditions and mountain landscapes.",
    heroImage: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=1600&h=900&fit=crop",
    colorPalette: [
      { name: "Forest", hex: "#2D5016", usage: "Primary brand color, backgrounds, packaging" },
      { name: "Amber", hex: "#D4A017", usage: "Accent color, tap handles, highlights" },
      { name: "Cream", hex: "#F5F0E1", usage: "Light backgrounds, labels, web" },
      { name: "Bark", hex: "#3E2723", usage: "Typography, dark accents" },
    ],
  },
  "bright-path-therapy": {
    slug: "bright-path-therapy",
    title: "Bright Path Therapy",
    industry: "Healthcare",
    tagline: "Guiding your journey to wellness",
    client: "Bright Path Therapy Group",
    year: "2025",
    location: "Nashville, TN",
    services: ["Logo Design", "Brand Mark", "Color Palette", "Stationery"],
    brief: "Bright Path Therapy is a counseling and mental health practice that wanted a logo conveying warmth, trust, and forward progress. The brand needed to feel approachable for new patients while maintaining the professionalism expected in healthcare.",
    challenge: "Healthcare logos often lean too clinical or too casual. The challenge was finding a visual language that felt warm and human without sacrificing the authority and trust that patients need from a therapy practice.",
    solution: "We created a gently curving path mark that suggests forward movement and growth. The overlapping forms create a subtle sense of togetherness — reflecting the therapeutic relationship. A teal and lavender palette evokes calm and clarity, while rounded typography reinforces approachability.",
    heroImage: "https://images.unsplash.com/photo-1635405074683-96d6921a2a68?w=1600&h=900&fit=crop",
    colorPalette: [
      { name: "Teal", hex: "#0891B2", usage: "Primary brand color, trust and calm" },
      { name: "Lavender", hex: "#A78BFA", usage: "Accent color, warmth and creativity" },
      { name: "Soft White", hex: "#F8FAFC", usage: "Backgrounds, clean space" },
      { name: "Slate", hex: "#475569", usage: "Body text, secondary elements" },
    ],
  },
  "cedar-ridge-homes": {
    slug: "cedar-ridge-homes",
    title: "Cedar Ridge Homes",
    industry: "Real Estate",
    tagline: "Where craftsmanship meets home",
    client: "Cedar Ridge Homes LLC",
    year: "2024",
    location: "Franklin, TN",
    services: ["Logo Design", "Brand Identity", "Business Cards", "Signage"],
    brief: "Cedar Ridge Homes is a luxury custom home builder that needed a logo reflecting craftsmanship, attention to detail, and the premium quality of their work. The mark needed to work on everything from yard signs to embossed stationery.",
    challenge: "Luxury real estate branding tends to be generic — think gold serif fonts and house silhouettes. Cedar Ridge wanted something that felt elevated and distinctive, but also grounded in the craftsmanship and natural materials that define their homes.",
    solution: "We designed a geometric roofline mark that abstracts the form of a home into a clean, architectural shape. The negative space within the mark subtly references wood grain, connecting to the cedar in the company name. A charcoal and gold palette feels premium without being ostentatious, and the mark embosses beautifully on stationery.",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&h=900&fit=crop",
    colorPalette: [
      { name: "Charcoal", hex: "#1C1917", usage: "Primary color, sophistication" },
      { name: "Gold", hex: "#CA8A04", usage: "Accent, premium quality signals" },
      { name: "Warm Gray", hex: "#D6D3D1", usage: "Backgrounds, subtle textures" },
      { name: "White", hex: "#FFFFFF", usage: "Reversed logo, clean applications" },
    ],
  },
  "velocity-fitness": {
    slug: "velocity-fitness",
    title: "Velocity Fitness",
    industry: "Health & Fitness",
    tagline: "Move faster. Get stronger.",
    client: "Velocity Fitness Studio",
    year: "2025",
    location: "Hendersonville, TN",
    services: ["Logo Design", "Brand Mark", "Apparel Graphics", "Social Assets"],
    brief: "Velocity Fitness is a high-intensity training studio that needed a logo as energetic as their workouts. The brand needed to work on gym signage, apparel, and social media — and it needed to look bold at every size.",
    challenge: "Fitness logos often rely on aggressive typography or overused icons like barbells and lightning bolts. Velocity wanted something dynamic that communicated speed and power without falling into fitness branding cliches.",
    solution: "We created a forward-leaning V mark with sharp angles that convey speed and momentum. The mark is constructed from two intersecting planes that create depth and movement. A striking red and black palette drives urgency and energy, and the bold geometry works beautifully on everything from gym walls to compression shirts.",
    heroImage: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1600&h=900&fit=crop",
    colorPalette: [
      { name: "Electric Red", hex: "#DC2626", usage: "Primary accent, energy and urgency" },
      { name: "Midnight", hex: "#0F172A", usage: "Primary dark, backgrounds, apparel" },
      { name: "White", hex: "#FFFFFF", usage: "Reversed logo, contrast" },
      { name: "Steel", hex: "#64748B", usage: "Supporting text, secondary elements" },
    ],
  },
  "riverstone-financial": {
    slug: "riverstone-financial",
    title: "Riverstone Financial",
    industry: "Financial Services",
    tagline: "Steady growth. Solid ground.",
    client: "Riverstone Financial Advisors",
    year: "2024",
    location: "Gallatin, TN",
    services: ["Logo Design", "Brand Identity", "Stationery Suite", "Guidelines"],
    brief: "Riverstone Financial is a wealth management firm that needed a logo communicating stability, trustworthiness, and long-term thinking. The mark needed to resonate with high-net-worth clients while feeling modern rather than stuffy.",
    challenge: "Financial services branding is crowded with shields, columns, and overly conservative serif logos. Riverstone wanted to stand apart with a mark that felt trustworthy and established but also contemporary and approachable.",
    solution: "We designed a river stone icon — smooth, polished, and layered — that symbolizes stability built over time. The stacked stone forms create a subtle sense of growth and accumulation. A navy and silver palette conveys trust and professionalism, while clean sans-serif typography keeps the overall impression modern.",
    heroImage: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1600&h=900&fit=crop",
    colorPalette: [
      { name: "Navy", hex: "#1E3A5F", usage: "Primary brand color, authority and trust" },
      { name: "Silver", hex: "#94A3B8", usage: "Accent, sophistication" },
      { name: "Ice", hex: "#F1F5F9", usage: "Backgrounds, clean space" },
      { name: "Deep Slate", hex: "#334155", usage: "Body text, secondary elements" },
    ],
  },
  "wild-sage-kitchen": {
    slug: "wild-sage-kitchen",
    title: "Wild Sage Kitchen",
    industry: "Restaurant",
    tagline: "Farm roots. Bold flavors.",
    client: "Wild Sage Kitchen & Bar",
    year: "2025",
    location: "East Nashville, TN",
    services: ["Logo Design", "Brand Mark", "Menu Design", "Signage"],
    brief: "Wild Sage Kitchen is a farm-to-table restaurant that needed a logo capturing the intersection of rustic sourcing and refined dining. The brand needed to feel organic and handcrafted while working across menus, signage, and merchandise.",
    challenge: "Farm-to-table restaurant branding can easily look too rustic or too minimalist. Wild Sage needed a mark that communicated both the earthiness of their ingredients and the creativity of their chefs — without looking like every other farm-themed restaurant.",
    solution: "We illustrated a wild sage sprig as the central mark, rendered with just enough detail to feel botanical but stylized enough to work as a clean logo at small sizes. A sage green and terracotta palette reflects the natural palette of their ingredients. Hand-lettered wordmark styling adds warmth and artisanal character.",
    heroImage: "https://images.unsplash.com/photo-1636955816868-fcb881e57954?w=1600&h=900&fit=crop",
    colorPalette: [
      { name: "Sage", hex: "#6B8E5A", usage: "Primary brand color, natural and fresh" },
      { name: "Terracotta", hex: "#C2410C", usage: "Accent, warmth and earthiness" },
      { name: "Linen", hex: "#FAF5EF", usage: "Backgrounds, menus, clean space" },
      { name: "Espresso", hex: "#3C2415", usage: "Typography, dark accents" },
    ],
  },
  "maple-sky-dreamtree-studio": {
    slug: "maple-sky-dreamtree-studio",
    title: "Maple Sky Dreamtree Studio",
    industry: "Fine Art",
    tagline: "Where imagination takes root",
    client: "Mike Filippello",
    year: "2026",
    location: "Nashville, TN",
    services: ["Logo Design", "Brand Mark", "Brand Coaching", "Website"],
    brief: "Mike Filippello is a painter, illustrator, and children's book author with over 30 years of creative work. He had no professional branding — just a hand-drawn logo idea sketched on a Post-It note and artwork scattered across the internet. He needed a mark that captured the whimsy and emotion of his art while feeling polished enough for a professional creative brand.",
    challenge: "Turning a rough Post-It sketch into a professional logo that honored the artist's original vision while working across web, print, and merchandise. The mark needed to feel handcrafted and imaginative — reflecting Mike's whimsical painting style — without looking unfinished or amateur.",
    solution: "We interviewed Mike to understand the story behind his sketch and what each element meant to him. Then we refined his hand-drawn concept into a clean, versatile brand mark that preserves the organic, dreamlike quality of the original idea. The final logo features a stylized tree form that references the 'Dreamtree' in his studio name, rendered in gold against dark backgrounds to feel both artistic and premium. The gold and black palette carries through to his entire website and brand presence.",
    heroImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&h=900&fit=crop",
    colorPalette: [
      { name: "MSDT Gold", hex: "#C8A96E", usage: "Primary brand accent, logo, headings" },
      { name: "Deep Black", hex: "#0A0A0A", usage: "Primary background, dark surfaces" },
      { name: "Cream", hex: "#F5F0E1", usage: "Light text, cards, contrast elements" },
      { name: "Warm Gray", hex: "#8A8A8A", usage: "Body text, secondary elements" },
    ],
  },
};

type LogoSlug = keyof typeof logos;

export function generateStaticParams() {
  return Object.keys(logos).map((slug) => ({ slug }));
}

export default async function LogoDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const logo = logos[slug as LogoSlug];

  if (!logo) {
    notFound();
  }

  // Get adjacent logos for navigation
  const logoSlugs = Object.keys(logos);
  const currentIndex = logoSlugs.indexOf(slug);
  const prevLogo = currentIndex > 0 ? logos[logoSlugs[currentIndex - 1] as LogoSlug] : null;
  const nextLogo = currentIndex < logoSlugs.length - 1 ? logos[logoSlugs[currentIndex + 1] as LogoSlug] : null;

  const logoJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `${logo.title} Logo Design`,
    description: logo.brief,
    url: `https://dustintn.com/logos/${slug}`,
    dateCreated: logo.year,
    creator: {
      '@type': 'ProfessionalService',
      name: 'DustinTN',
      url: 'https://dustintn.com',
    },
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(logoJsonLd) }}
      />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-dark-gray"></div>
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            {/* Back link */}
            <Link
              href="/logos"
              className="inline-flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-full text-white/80 hover:text-white hover:bg-accent transition-all duration-300 border border-white/10 hover:border-accent mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">All Logos</span>
            </Link>

            <AnimatedSection>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium">
                  {logo.industry}
                </span>
              </div>
              <h1 className="text-headline mb-4">{logo.title}</h1>
              <p className="text-2xl text-white/60 max-w-2xl font-light">{logo.tagline}</p>
            </AnimatedSection>
          </div>
        </section>

        {/* Hero Image */}
        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection>
              <div className="aspect-[16/9] rounded-2xl overflow-hidden relative">
                <Image
                  src={logo.heroImage}
                  alt={logo.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Meta Bar */}
        <section className="py-12 bg-dark-gray border-y border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedSection delay={0}>
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Client</div>
                    <div className="font-medium">{logo.client}</div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Location</div>
                    <div className="font-medium">{logo.location}</div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Year</div>
                    <div className="font-medium">{logo.year}</div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={300}>
                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Services</div>
                    <div className="font-medium">{logo.services.join(", ")}</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* The Story */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="mb-16">
              <span className="section-label mb-6 block">The Story</span>
              <h2 className="text-headline mb-8">
                The <span className="text-accent">Brief</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-3xl">
                {logo.brief}
              </p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-12">
              <AnimatedSection delay={100}>
                <div className="p-8 bg-dark-gray rounded-2xl border border-white/5 h-full">
                  <h3 className="text-xl font-semibold mb-4 text-accent">The Challenge</h3>
                  <p className="text-white/50 leading-relaxed">{logo.challenge}</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="p-8 bg-dark-gray rounded-2xl border border-white/5 h-full">
                  <h3 className="text-xl font-semibold mb-4 text-accent">The Solution</h3>
                  <p className="text-white/50 leading-relaxed">{logo.solution}</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-16">
              <span className="section-label mb-6 inline-flex justify-center">Brand Colors</span>
              <h2 className="text-headline">Color Palette</h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {logo.colorPalette.map((color, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="bg-black/50 rounded-2xl overflow-hidden border border-white/5">
                    <div
                      className="h-32 w-full"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{color.name}</h3>
                        <span className="text-sm text-white/50 font-mono">{color.hex}</span>
                      </div>
                      <p className="text-white/40 text-sm">{color.usage}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center max-w-2xl mx-auto">
              <h2 className="text-headline mb-6">Need a Logo?</h2>
              <p className="text-white/50 text-lg mb-10">
                Let&apos;s design a mark that captures your brand&apos;s story and stands the test of time.
              </p>
              <Link href="/services/logo-design" className="btn-pill btn-pill-primary group">
                Logo Design Service
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Logo Navigation */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 lg:p-12">
              <div className="flex justify-between items-center">
                {prevLogo ? (
                  <Link
                    href={`/logos/${prevLogo.slug}`}
                    className="group flex items-center gap-4 flex-1"
                  >
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-accent transition-all duration-300 border border-white/10 group-hover:border-accent">
                      <ArrowLeft className="w-5 h-5" />
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Previous</div>
                      <div className="font-semibold text-lg group-hover:text-accent transition-colors">{prevLogo.title}</div>
                    </div>
                  </Link>
                ) : (
                  <div className="flex-1"></div>
                )}

                <Link
                  href="/logos"
                  className="hidden md:flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/80 hover:text-white hover:bg-accent transition-all duration-300 border border-white/10 hover:border-accent mx-8"
                >
                  <span className="text-sm font-medium">All Logos</span>
                </Link>

                {nextLogo ? (
                  <Link
                    href={`/logos/${nextLogo.slug}`}
                    className="group flex items-center gap-4 text-right flex-1 justify-end"
                  >
                    <div className="hidden sm:block">
                      <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Next</div>
                      <div className="font-semibold text-lg group-hover:text-accent transition-colors">{nextLogo.title}</div>
                    </div>
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-accent transition-all duration-300 border border-white/10 group-hover:border-accent">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </Link>
                ) : (
                  <div className="flex-1"></div>
                )}
              </div>
            </div>
          </div>
        </section>

        <ProudlyServing />
        <Footer />
      </main>
    </div>
  );
}
