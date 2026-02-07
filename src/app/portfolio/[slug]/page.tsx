'use client';

import { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowLeft, ArrowUpRight, ExternalLink, Calendar, User, Briefcase, Globe, CheckCircle2, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navigation from "@/components/Navigation";
import ScrollingScreenshot from "@/components/ScrollingScreenshot";
import ProudlyServing from "@/components/ProudlyServing";
import Footer from "@/components/Footer";

// Custom hook for scroll-triggered animations
function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

// Animated section wrapper
function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

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
    date: "2024",
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
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&h=600&fit=crop"
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
    date: "2024",
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
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=600&fit=crop"
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
    date: "2024",
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
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&h=600&fit=crop"
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
    date: "2024",
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
      "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1514218953589-2d7d37efd2dc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?w=800&h=600&fit=crop"
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
    date: "2024",
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
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
    ]
  }
};

type ProjectSlug = keyof typeof projects;

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects[slug as ProjectSlug];

  // Get adjacent projects for navigation
  const projectSlugs = Object.keys(projects);
  const currentIndex = projectSlugs.indexOf(slug);
  const prevProject = currentIndex > 0 ? projects[projectSlugs[currentIndex - 1] as ProjectSlug] : null;
  const nextProject = currentIndex < projectSlugs.length - 1 ? projects[projectSlugs[currentIndex + 1] as ProjectSlug] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4">Project Not Found</h1>
          <Link href="/portfolio" className="btn-pill btn-pill-primary">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
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
                <span className="text-accent text-sm font-medium uppercase tracking-wider mb-4 block">
                  {project.category}
                </span>
                <h1 className="text-headline">{project.title}</h1>
                <p className="text-xl text-white/50 max-w-2xl">{project.tagline}</p>
              </div>
              <div className="flex-shrink-0 lg:self-center">
                <div className="px-8 py-6 bg-white rounded-2xl shadow-xl">
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

              <AnimatedSection delay={400}>
                <div className="flex items-start gap-4">
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

        <ProudlyServing />
        <Footer />
      </main>
    </div>
  );
}
