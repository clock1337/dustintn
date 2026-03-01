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
    heroImage: "/logos/maple-sky-dreamtree-studio.png",
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
              <div className="aspect-[16/9] rounded-2xl overflow-hidden relative bg-dark-gray flex items-center justify-center">
                <Image
                  src={logo.heroImage}
                  alt={logo.title}
                  fill
                  className="object-contain p-12"
                  priority
                />
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
