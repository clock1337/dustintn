import { ArrowRight, ArrowLeft, ExternalLink, Calendar, User, Briefcase, Globe, CheckCircle2, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import ScrollingScreenshot from "@/components/ScrollingScreenshot";
import ProudlyServing from "@/components/ProudlyServing";
import ResourceSnippets from "@/components/ResourceSnippets";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

// Project data
const projects = {
  "fine-assets": {
    id: 1,
    slug: "fine-assets",
    title: "Fine Assets Personal Training",
    category: "Web Development",
    tagline: "Transform Your Body with Personalized Training",
    description: "Fine Assets Personal Training is a comprehensive fitness coaching platform led by Lynn Mckinnie Belt, a certified trainer with over 20 years of experience. The website showcases personalized training solutions, client transformations, and accessible online coaching options.",
    heroImage: "/screenshots/fine-assets.png",
    logo: "/logos/fine-assets-logo.png",
    client: "Lynn Mckinnie Belt",
    date: "2026",
    services: ["Web Design", "Development", "SEO Optimization"],
    website: "fineassets.net",
    location: "Lake Norman, NC",
    challenge: "Lynn needed a professional online presence that would showcase her extensive experience, highlight client success stories, and enable remote coaching capabilities to reach clients beyond her local area.",
    solution: "We created a dynamic, modern website that emphasizes transformation stories, provides clear service descriptions, and integrates online booking and consultation scheduling. The design reflects the energy and professionalism of her training approach.",
    features: [
      "Responsive design optimized for all devices",
      "Client transformation gallery with before/after showcases",
      "Online coaching portal integration",
      "Appointment scheduling system",
      "NPC competition prep program showcase",
      "Testimonials and success stories section"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Sanity CMS", "Vercel"],
    results: [
      { metric: "40%", label: "Increase in Inquiries" },
      { metric: "3x", label: "Online Bookings" },
      { metric: "60%", label: "Mobile Traffic" }
    ],
    gallery: [
      "/screenshots/fine-assets-gallery-1.png",
      "/screenshots/fine-assets-gallery-2.png",
      "/screenshots/fine-assets-gallery-3.png"
    ]
  },
  "champions-adaptive-fitness": {
    id: 2,
    slug: "champions-adaptive-fitness",
    title: "Champions Adaptive Fitness",
    category: "Web Development",
    tagline: "Unleash Your Inner Champion",
    description: "Champions Adaptive Fitness is Temecula's premier private fitness studio specializing in inclusive programming for youth and adults with intellectual and developmental disabilities. The website needed to communicate warmth, professionalism, and the unique value of their adaptive fitness approach.",
    heroImage: "/screenshots/champions-adaptive-fitness.png",
    logo: "/logos/champions-adaptive-fitness-logo.png",
    client: "Champions Adaptive Fitness",
    date: "2026",
    services: ["Web Design", "Brand Identity", "Development"],
    website: "championsadaptivefitness.com",
    location: "Temecula, CA",
    challenge: "Champions needed a website that would effectively communicate their specialized services to families seeking adaptive fitness programs, while maintaining an inspiring and welcoming tone that reflects their inclusive mission.",
    solution: "We designed a warm, accessible website that clearly explains their adaptive programs, highlights their certified trainers' expertise in trauma-informed care, and makes it easy for families to understand the benefits and schedule consultations.",
    features: [
      "Accessible design following WCAG guidelines",
      "Program descriptions with visual aids",
      "Trainer profiles and certifications",
      "Virtual tour integration",
      "Family testimonials section",
      "Easy contact and scheduling forms"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Contentful", "Netlify"],
    results: [
      { metric: "55%", label: "More Enrollments" },
      { metric: "2x", label: "Page Engagement" },
      { metric: "45%", label: "Reduced Bounce Rate" }
    ],
    gallery: [
      "/screenshots/champions-gallery-1.png",
      "/screenshots/champions-gallery-2.png",
      "/screenshots/champions-gallery-3.png"
    ]
  },
  "pinnacle-health-choice": {
    id: 3,
    slug: "pinnacle-health-choice",
    title: "Pinnacle Wellness",
    category: "Healthcare",
    tagline: "You Deserve to be Healthy",
    description: "Pinnacle Wellness is an established chiropractic clinic in San Antonio, Texas with over 35 years of experience. The practice needed a modern website that would attract new patients, explain their comprehensive services, and facilitate online appointment booking.",
    heroImage: "/screenshots/pinnacle-health-choice.png",
    logo: "/logos/pinnacle-health-choice.png",
    client: "Pinnacle Wellness",
    date: "2026",
    services: ["Web Design", "Development", "Content Strategy"],
    website: "pinnaclehealthchoice.com",
    location: "San Antonio, TX",
    challenge: "The clinic's previous website was outdated and didn't reflect their expertise or range of services. They needed a professional site that would build trust with potential patients and streamline the appointment booking process.",
    solution: "We created a clean, professional healthcare website with clear service descriptions, patient testimonials, and an integrated appointment booking system. The design emphasizes trust, expertise, and the clinic's commitment to patient wellness.",
    features: [
      "Online appointment scheduling integration",
      "Service pages with detailed treatment information",
      "Patient testimonials and reviews",
      "New patient forms and resources",
      "Insurance information section",
      "Blog for wellness education content"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Strapi CMS", "Vercel"],
    results: [
      { metric: "70%", label: "Online Appointments" },
      { metric: "4.9", label: "Google Rating" },
      { metric: "50%", label: "New Patient Increase" }
    ],
    gallery: [
      "/screenshots/pinnacle-gallery-1.png",
      "/screenshots/pinnacle-gallery-2.png",
      "/screenshots/pinnacle-gallery-3.png"
    ]
  },
  "southern-collective-spirit-co": {
    id: 4,
    slug: "southern-collective-spirit-co",
    title: "Southern Collective Spirit Company",
    category: "Hospitality",
    tagline: "Whiskey Is Our Passion",
    description: "Southern Collective Spirit Company is a Nashville-based distillery offering a unique, experiential approach to whiskey. The website showcases their curated barrel selections, custom blends with personalized labeling, and immersive tasting experiences that celebrate the artistry of spirits.",
    heroImage: "/screenshots/southern-collective-spirit-co.png",
    logo: "/logos/southern-collective-spirit-co.png",
    client: "Southern Collective Spirit Co.",
    date: "2026",
    services: ["Web Design", "Development", "E-commerce"],
    website: "southerncollectivespiritco.com",
    location: "Nashville, TN",
    challenge: "The distillery needed a website that would capture the premium, artisanal nature of their whiskey experience while enabling customers to book tastings, explore barrel selections, and purchase products online.",
    solution: "We crafted an immersive digital experience that reflects the warmth and craftsmanship of their distillery. The site features rich imagery, an intuitive booking system, and e-commerce functionality that makes it easy for customers to explore and purchase their curated selections.",
    features: [
      "Online booking for tastings and tours",
      "E-commerce shop with product catalog",
      "Virtual tour integration",
      "Custom barrel selection showcase",
      "Event booking functionality",
      "Mobile-optimized experience"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Shopify", "Vercel"],
    results: [
      { metric: "85%", label: "Online Bookings" },
      { metric: "3x", label: "E-commerce Sales" },
      { metric: "45%", label: "Return Visitors" }
    ],
    gallery: [
      "/screenshots/southern-gallery-1.png",
      "/screenshots/southern-gallery-2.png",
      "/screenshots/southern-gallery-3.png"
    ]
  },
  "coldwell-banker-commercial": {
    id: 5,
    slug: "coldwell-banker-commercial",
    title: "Coldwell Banker Commercial SC",
    category: "Real Estate",
    tagline: "Your Partner in Commercial Real Estate",
    description: "Coldwell Banker Commercial SC is Southern California's premier commercial real estate brokerage, specializing in investment properties, retail spaces, and business sales. The website serves as a comprehensive platform for property listings, market insights, and client services.",
    heroImage: "/screenshots/coldwell-banker-commercial.png",
    logo: "/logos/coldwell-banker-commercial.png",
    client: "Coldwell Banker Commercial",
    date: "2026",
    services: ["Web Design", "Development", "SEO Optimization"],
    website: "cbcsocalgroup.com",
    location: "Southern California",
    challenge: "The brokerage needed a professional website that would showcase their extensive property listings, establish credibility in the competitive commercial real estate market, and generate qualified leads from investors and business owners.",
    solution: "We developed a sophisticated real estate platform with advanced property search functionality, detailed listing pages, and lead capture systems. The design emphasizes professionalism and trust while making it easy for clients to explore available properties and connect with agents.",
    features: [
      "Advanced property search and filtering",
      "Detailed property listing pages",
      "Agent profiles and contact forms",
      "Market insights and resources",
      "Mobile-responsive design",
      "Lead generation optimization"
    ],
    technologies: ["Next.js", "Tailwind CSS", "IDX Integration", "Vercel"],
    results: [
      { metric: "65%", label: "More Inquiries" },
      { metric: "2x", label: "Property Views" },
      { metric: "40%", label: "Lead Conversion" }
    ],
    gallery: [
      "/screenshots/coldwell-gallery-1.png",
      "/screenshots/coldwell-gallery-2.png",
      "/screenshots/coldwell-gallery-3.png"
    ]
  },
  "maple-sky-dreamtree-studio": {
    id: 6,
    slug: "maple-sky-dreamtree-studio",
    title: "Maple Sky Dreamtree Studio",
    category: "Branding",
    tagline: "Discover The Art Of True Emotion",
    description: "Maple Sky Dreamtree Studio is the creative home of Mike Filippello, a painter, illustrator, and children's book author with over 30 years of experience. Mike had artwork scattered across the internet with no central hub to showcase his work. We built him a complete digital presence from the ground up — starting with turning his Post-It sketch into a professional logo, then creating a modern website that brings together his paintings, illustrations, children's books, and art prints in one place.",
    heroImage: "/screenshots/maple-sky-dreamtree-studio.png",
    logo: "/logos/maple-sky-dreamtree-studio.png",
    client: "Mike Filippello",
    date: "2026",
    services: ["Logo Design", "Web Design", "Development", "Brand Coaching"],
    website: "msdt-seven.vercel.app",
    location: "Nashville, TN",
    challenge: "Mike had been creating art for over 30 years but had no real online presence — just a basic WordPress.org site and artwork scattered across Etsy, Fine Art America, Amazon, and other platforms. He didn't know how to bring it all together into a cohesive brand or showcase his paintings, illustrations, and published children's books in one place.",
    solution: "We started from scratch — interviewing Mike to understand his story and artistic vision, then coaching him through the entire brand-building process. We turned his hand-drawn Post-It logo sketch into a polished professional mark, then designed and built a modern website that serves as his creative hub. The site showcases his art gallery, published books, and links to every platform where his work is available for purchase.",
    features: [
      "Custom logo designed from a hand-drawn Post-It sketch",
      "Art gallery with categorized portfolio",
      "Children's book showcase section",
      "Multi-platform shop directory (Etsy, Amazon, Fine Art America)",
      "Press and recognition highlights",
      "Instagram feed integration",
      "Commission inquiry contact form"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    results: [
      { metric: "1", label: "Unified Brand Identity" },
      { metric: "6+", label: "Sales Platforms Linked" },
      { metric: "150+", label: "Artworks Showcased" }
    ],
    gallery: [
      "/screenshots/msdt-gallery-1.png",
      "/screenshots/msdt-gallery-2.png",
      "/screenshots/msdt-gallery-3.png"
    ]
  },
  "native-pastures": {
    id: 9,
    slug: "native-pastures",
    title: "Native Pastures",
    category: "Concept & Parody",
    tagline: "You came from the earth. We just bottled it.",
    description: "Native Pastures is a deadpan parody of the premium-wellness category — the brands that turn ordinary things into $90 ritual objects with serif typography and tasteful product photography. The premium product? Dirt. Literal Premium Ancestral Dirt™, sold with the same straight-faced sincerity as ashwagandha tinctures and grounding mats. The site is a craft exercise: build the satire as carefully as the brands it's making fun of, so the joke lands without ever winking at the camera.",
    heroImage: "/screenshots/native-pastures.png",
    logo: "/logos/native-pastures.png",
    client: "Internal — DustinTN Creative Lab",
    date: "2026",
    services: ["Brand Concept", "Web Design", "Editorial Copy", "Development"],
    website: "native-pastures.vercel.app",
    location: "Internet",
    challenge: "Parody only works when it's indistinguishable from the thing it parodies until the moment you realize you're being trolled. That meant building a wellness brand that genuinely feels premium — earthy palette, editorial product photography, real-feeling certifications ('Ethically Sourced', 'Spiritually Adjacent', '100% Real'), customer ratings, an actual FAQ. Then loading that polished package with the absurd payload: that you're paying for a jar of dirt. The challenge was tonal restraint — every winking line of copy or unserious design choice would let the viewer off the hook before the joke landed.",
    solution: "We built it like a real wellness launch. Hero with serif headline ('You came from the earth.') and a clean product shot of 'The Original.' A row of trust badges. A 'Just bottled it' brand line. A long-scroll product story, customer ratings, and an FAQ that includes the question every visitor is silently asking — 'Is this a real product?' — answered with the same deadpan polish as 'Is this certified organic?'. Earthy cream/coffee-bean palette, generous whitespace, and product photography treated like editorial spreads. Every craft choice that would sell ashwagandha is the same choice that sells the joke.",
    features: [
      "Editorial product page treatment for 'Premium Ancestral Dirt™'",
      "Trust-badge row: 'Ethically Sourced · Spiritually Adjacent · 100% Real'",
      "Customer rating + review summary block",
      "Deadpan FAQ section with 'Is this a real product?' as a real question",
      "'Starter Kit $49 for a 4-bundle' pricing tier with the right amount of unexplained math",
      "Earthy cream-and-coffee palette + serif display type",
      "Footer that maintains the bit all the way through copyright",
      "Sub-second page load, A+ Lighthouse — the satire ships fast",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    results: [
      { metric: "1", label: "Joke. No Winking." },
      { metric: "100%", label: "Real-Feeling Brand" },
      { metric: "100", label: "Lighthouse Score" }
    ],
    gallery: [
      "/screenshots/native-pastures.png",
      "/screenshots/native-pastures.png",
      "/screenshots/native-pastures.png"
    ],
    // Native Pastures logo is a small earthy sun-over-mountain icon on a cream
    // background — render the card on cream so the logo blends with the brand.
    logoBg: "#f1ebd8",
  },
  "walking-street-pictures": {
    id: 8,
    slug: "walking-street-pictures",
    title: "Walking Street Pictures",
    category: "Film & Entertainment",
    tagline: "Stories the city whispers at night.",
    description: "Walking Street Pictures is an independent cinema studio based in Angeles City, Philippines, producing original web series, short-form art-house films, and anthology projects rooted in the city's late-night urban storytelling. The brand needed a website that read like a film magazine — editorial, intimate, and deliberately antithetical to glossy commercial polish — while still functioning as a real production hub for casting calls, news, and press. We paired the public-facing magazine with a custom web editor backend so the studio team can publish new productions, news posts, and audition calls themselves without ever touching code.",
    heroImage: "/screenshots/walking-street-pictures.png",
    logo: "/logos/walking-street-pictures.png",
    client: "Walking Street Pictures",
    date: "2026",
    services: ["Web Design", "Development", "Custom CMS", "Editorial Layout"],
    website: "walkingstreetpictures.com",
    location: "Angeles City, Philippines",
    challenge: "An indie film studio doesn't fit into a Squarespace template. The brand needed to feel like a printed cinema journal — magazine-style hierarchy, cinematic typography, archival numbering ('Issue №01'), and a deliberately gritty aesthetic that mirrors the Walking Street neighborhood the studio takes its name from. At the same time, the site had to do real production work: surface active casting calls, host news posts, link to press, and route audition submissions. And the studio team — directors and producers, not developers — needed to be able to update everything themselves: spin up a new production page, post news, flip an audition status from open to closed, all without filing a ticket or learning Markdown.",
    solution: "We built an editorial Next.js site paired with a custom web editor backend. The public-facing magazine reads like a printed issue — serif headlines, paper-textured backgrounds, gold accent treatments, an audition-open status indicator, and a logo-mark of the iconic Walking Street arch. The studio side is a private admin panel where the team can author new productions, news posts, casting calls, and press features in a clean WYSIWYG editor with image upload, drafts, and one-click publish. Static-generated for the public site, server-rendered for the editor, all on a single Next.js codebase deployed to walkingstreetpictures.com.",
    features: [
      "Magazine-style editorial layout with 'Issue №01' framing",
      "Custom web editor backend — productions, news, and casting calls all self-managed",
      "WYSIWYG content editor with image upload and draft/publish workflow",
      "Production showcases for original web series (Bar Girl, School of Hard Knocks)",
      "Audition-open status indicator + Open Casting Calls CTA",
      "News and press sections with cinematic article treatment",
      "Custom Walking Street arch logo treatment in the hero",
      "Paper-textured backgrounds with gold accent typography",
      "Cookie consent compliant (GDPR-ready) with site-analytics opt-out",
      "Static-generated public site for speed; server-rendered admin panel",
    ],
    technologies: ["Next.js", "React", "Custom CMS", "Vercel", "Image Optimization"],
    results: [
      { metric: "100%", label: "Self-Managed Content" },
      { metric: "0", label: "Developer Tickets to Publish" },
      { metric: "100", label: "Lighthouse Score" }
    ],
    gallery: [
      "/screenshots/walking-street-pictures.png",
      "/screenshots/walking-street-pictures.png",
      "/screenshots/walking-street-pictures.png"
    ],
    // Brand-supplied logo is white-on-black with the black baked in — render
    // the card on black so the logo sits cleanly without a clashing edge.
    logoBg: "#000000",
  },
  "jobe-gutter-services": {
    id: 7,
    slug: "jobe-gutter-services",
    title: "Jobe Gutter Services",
    category: "Home Services",
    tagline: "Rain Happens. We Make Sure It Goes Where It's Supposed To.",
    description: "Jobe Gutter Services LLC is a trusted gutter company serving Southeast Texas with over 15 years of experience and more than 1,000 installations. The website needed to establish their professional reputation, showcase their range of gutter services, and make it easy for homeowners across multiple cities to request free estimates.",
    heroImage: "/screenshots/jobe-gutter-services.png",
    logo: "/logos/jobe-gutter-services.png",
    client: "Jobe Gutter Services LLC",
    date: "2026",
    services: ["Web Design", "Development", "SEO Optimization"],
    website: "jobegutterservices.com",
    location: "Angleton, TX",
    challenge: "Jobe Gutter Services needed a professional online presence to match their strong local reputation. They serve 8+ cities across Southeast Texas and needed a site that would rank well in local searches, showcase their completed projects, and convert visitors into estimate requests.",
    solution: "We built a modern, SEO-optimized website with dedicated service pages, a project photo gallery, customer testimonials, and localized landing content for each service area. The design emphasizes trust signals like their 5-star rating, 15+ years of experience, and full insurance coverage.",
    features: [
      "Service area pages for 8+ Southeast Texas cities",
      "Project photo gallery with completed installations",
      "Customer testimonial showcase",
      "Free estimate request forms",
      "Blog with gutter maintenance tips and guides",
      "FAQ section addressing common gutter concerns"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    results: [
      { metric: "8+", label: "Cities Served" },
      { metric: "5.0", label: "Star Rating" },
      { metric: "1,000+", label: "Installations" }
    ],
    gallery: [
      "/screenshots/jobe-gallery-services.png",
      "/screenshots/jobe-gallery-about.png",
      "/screenshots/jobe-gallery-contact.png"
    ]
  }
};

type ProjectSlug = keyof typeof projects;

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as ProjectSlug];

  // Get adjacent projects for navigation
  const projectSlugs = Object.keys(projects);
  const currentIndex = projectSlugs.indexOf(slug);
  const prevProject = currentIndex > 0 ? projects[projectSlugs[currentIndex - 1] as ProjectSlug] : null;
  const nextProject = currentIndex < projectSlugs.length - 1 ? projects[projectSlugs[currentIndex + 1] as ProjectSlug] : null;

  if (!project) {
    notFound();
  }

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: `https://dustintn.com/portfolio/${slug}`,
    image: `https://dustintn.com${project.heroImage}`,
    dateCreated: project.date,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <Navigation currentPage="project" />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Back link */}
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-full text-white/80 hover:text-white hover:bg-accent transition-all duration-300 border border-white/10 hover:border-accent mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Portfolio</span>
            </Link>

            <AnimatedSection className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="lg:flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-accent text-sm font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  {Boolean((project as { comingSoon?: boolean }).comingSoon) && (
                    <span className="text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-accent/15 text-accent border border-accent/30">
                      Coming Soon
                    </span>
                  )}
                </div>
                <h1 className="text-headline">{project.title}</h1>
                <p className="text-xl text-white/50 max-w-2xl">{project.tagline}</p>
              </div>
              <div className="flex-shrink-0 lg:self-center self-center">
                <div
                  className="px-8 py-6 rounded-2xl shadow-xl"
                  style={{ backgroundColor: (project as { logoBg?: string }).logoBg ?? "white" }}
                >
                  <Image
                    src={project.logo}
                    alt={`${project.title} logo`}
                    width={200}
                    height={80}
                    className="object-contain max-h-16"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Hero Image */}
        <section className="pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection delay={100}>
              <ScrollingScreenshot
                src={project.heroImage}
                alt={project.title}
                className="aspect-[16/9]"
              />
            </AnimatedSection>
          </div>
        </section>

        {/* Project Meta */}
        <section className="py-16 bg-dark-gray border-y border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <AnimatedSection delay={0}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Client</div>
                    <div className="font-medium">{project.client}</div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Location</div>
                    <div className="font-medium">{project.location}</div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Year</div>
                    <div className="font-medium">{project.date}</div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Services</div>
                    <div className="font-medium">{project.services.slice(0, 2).join(", ")}</div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400} className="col-span-2 md:col-span-1">
                <div className="flex items-start gap-4 justify-center md:justify-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Website</div>
                    <a
                      href={`https://${project.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-accent hover:underline flex items-center gap-1"
                    >
                      Visit Site
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Project Description */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16">
              <AnimatedSection>
                <span className="section-label mb-6 block">Overview</span>
                <h2 className="text-headline mb-8">About the Project</h2>
                <p className="text-white/50 text-lg leading-relaxed">{project.description}</p>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-accent">The Challenge</h3>
                    <p className="text-white/50 leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-accent">Our Solution</h3>
                    <p className="text-white/50 leading-relaxed">{project.solution}</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-16">
              <span className="section-label mb-6 inline-flex justify-center">Features</span>
              <h2 className="text-headline">Key Features</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="flex items-start gap-4 p-6 bg-black/50 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-white/80">{feature}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="mb-16">
              <span className="section-label mb-6 block">Gallery</span>
              <h2 className="text-headline">Project Gallery</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden img-zoom">
                    <Image
                      src={image}
                      alt={`${project.title} gallery ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 bg-dark-gray border-y border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-16">
              <span className="section-label mb-6 inline-flex justify-center">Impact</span>
              <h2 className="text-headline">Project Results</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {project.results.map((result, index) => (
                <AnimatedSection key={index} delay={index * 100} className="text-center">
                  <div className="text-5xl lg:text-6xl font-semibold text-accent mb-2">
                    {result.metric}
                  </div>
                  <div className="text-white/50 uppercase tracking-wider text-sm">{result.label}</div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-12">
              <span className="section-label mb-6 inline-flex justify-center">Tech Stack</span>
              <h2 className="text-headline">Technologies Used</h2>
            </AnimatedSection>

            <AnimatedSection delay={100} className="flex flex-wrap justify-center gap-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-dark-gray rounded-full text-white/80 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </AnimatedSection>
          </div>
        </section>

        {/* Visit Website CTA */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center">
              <h2 className="text-2xl font-semibold mb-6">See it Live</h2>
              <a
                href={`https://${project.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-primary group"
              >
                Visit {project.website}
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* Project Navigation */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 lg:p-12">
              <div className="flex justify-between items-center">
                {prevProject ? (
                  <Link
                    href={`/portfolio/${prevProject.slug}`}
                    className="group flex items-center gap-4 flex-1"
                  >
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-accent transition-all duration-300 border border-white/10 group-hover:border-accent">
                      <ArrowLeft className="w-5 h-5" />
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Previous Project</div>
                      <div className="font-semibold text-lg group-hover:text-accent transition-colors">{prevProject.title}</div>
                    </div>
                  </Link>
                ) : (
                  <div className="flex-1"></div>
                )}

                <Link
                  href="/portfolio"
                  className="hidden md:flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/80 hover:text-white hover:bg-accent transition-all duration-300 border border-white/10 hover:border-accent mx-8"
                >
                  <span className="text-sm font-medium">All Projects</span>
                </Link>

                {nextProject ? (
                  <Link
                    href={`/portfolio/${nextProject.slug}`}
                    className="group flex items-center gap-4 text-right flex-1 justify-end"
                  >
                    <div className="hidden sm:block">
                      <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Next Project</div>
                      <div className="font-semibold text-lg group-hover:text-accent transition-colors">{nextProject.title}</div>
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

        <ResourceSnippets
          category={
            project.category === "Web Development" ? "Web Development" :
            project.category === "Healthcare" ? "SEO & Search" :
            "Digital Strategy"
          }
        />

        <ProudlyServing />
        <Footer />
      </main>
    </div>
  );
}
