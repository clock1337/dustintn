'use client';

import { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowUpRight, ExternalLink, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import ScrollingScreenshot from "@/components/ScrollingScreenshot";

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

const projects = [
  {
    id: 1,
    slug: "fine-assets",
    title: "Fine Assets Personal Training",
    category: "Web Development",
    description: "A comprehensive fitness coaching platform featuring personalized training solutions, online coaching capabilities, and client transformation showcases for a certified trainer with 20+ years of experience.",
    image: "/screenshots/fine-assets.png",
    client: "Lynn Mckinnie Belt",
    location: "Lake Norman, NC",
    services: ["Web Design", "Development", "SEO"],
    website: "fineassets.net"
  },
  {
    id: 2,
    slug: "champions-adaptive-fitness",
    title: "Champions Adaptive Fitness",
    category: "Web Development",
    description: "A welcoming digital presence for Temecula's premier adaptive fitness studio, specializing in inclusive programming for youth and adults with intellectual and developmental disabilities.",
    image: "/screenshots/champions-adaptive-fitness.png",
    client: "Champions Adaptive Fitness",
    location: "Temecula, CA",
    services: ["Web Design", "Branding", "Development"],
    website: "championsadaptivefitness.com"
  },
  {
    id: 3,
    slug: "pinnacle-health-choice",
    title: "Pinnacle Wellness",
    category: "Healthcare",
    description: "A professional healthcare website for an established chiropractic clinic in San Antonio, featuring online appointment booking, service information, and patient resources.",
    image: "/screenshots/pinnacle-health-choice.png",
    client: "Pinnacle Wellness",
    location: "San Antonio, TX",
    services: ["Web Design", "Development", "Content"],
    website: "pinnaclehealthchoice.com"
  },
  {
    id: 4,
    slug: "southern-collective-spirit-co",
    title: "Southern Collective Spirit Company",
    category: "Hospitality",
    description: "An immersive website for a Nashville distillery offering curated barrel selections, custom whiskey blends, and unique tasting experiences that celebrate the artistry of spirits.",
    image: "/screenshots/southern-collective-spirit-co.png",
    client: "Southern Collective Spirit Co.",
    location: "Nashville, TN",
    services: ["Web Design", "Development", "E-commerce"],
    website: "southerncollectivespiritco.com"
  }
];

const categories = ["All", "Web Development", "Healthcare", "Hospitality", "Branding"];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation currentPage="portfolio" />

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-dark-gray"></div>
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="max-w-3xl">
              <span className="section-label mb-6 block">Portfolio</span>
              <h1 className="text-headline">
                Explore My <span className="text-accent">Latest</span> Work
              </h1>
              <p className="text-xl text-white/50 leading-relaxed">
                Discover the craftsmanship behind each design. From fitness platforms to healthcare portals,
                each project represents our commitment to creating impactful digital experiences.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-black border-y border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-accent text-white'
                      : 'bg-dark-gray text-white/60 hover:text-white hover:bg-dark-gray/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="space-y-24">
              {filteredProjects.map((project, index) => (
                <AnimatedSection key={project.id} delay={index * 100}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <Link href={`/portfolio/${project.slug}`} className="block">
                        <ScrollingScreenshot
                          src={project.image}
                          alt={project.title}
                        />
                      </Link>
                    </div>

                    {/* Content */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <span className="text-accent text-sm font-medium uppercase tracking-wider mb-4 block">
                        {project.category}
                      </span>
                      <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                        <Link href={`/portfolio/${project.slug}`} className="hover:text-accent transition-colors">
                          {project.title}
                        </Link>
                      </h2>
                      <p className="text-white/50 text-lg leading-relaxed mb-8">
                        {project.description}
                      </p>

                      {/* Meta */}
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-4">
                          <span className="text-white/40 text-sm w-24">Client</span>
                          <span className="text-white/80">{project.client}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-white/40 text-sm w-24">Location</span>
                          <span className="text-white/80 flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-accent" />
                            {project.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-white/40 text-sm w-24">Services</span>
                          <span className="text-white/80">{project.services.join(", ")}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-white/40 text-sm w-24">Website</span>
                          <a
                            href={`https://${project.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline flex items-center gap-2"
                          >
                            {project.website}
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="btn-pill btn-pill-outline group inline-flex"
                      >
                        View Project
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-dark-gray relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.1),transparent_70%)]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <span className="section-label mb-6 inline-flex justify-center">Have a Project?</span>
              <h2 className="text-headline mb-8">
                Let's work <span className="text-accent">together</span>
              </h2>
              <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
                Ready to start your next project? Get in touch and let's create something great.
              </p>
              <Link href="/#contact" className="btn-pill btn-pill-primary group">
                Start a Conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 bg-dark-gray border-t border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-12 gap-12 mb-16">
              <div className="md:col-span-4">
                <Link href="/" className="text-2xl font-semibold tracking-tight mb-6 block">
                  DustinTN<span className="text-accent">.</span>
                </Link>
                <p className="text-white/40 leading-relaxed mb-6">
                  Building digital solutions for businesses across Middle Tennessee since 2004.
                </p>
                <div className="flex gap-3">
                  {['Tw', 'Li', 'Ig', 'Dr'].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 bg-dark rounded-lg flex items-center justify-center text-white/40 hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      <span className="text-xs font-medium">{social}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <h4 className="font-semibold mb-6">Navigation</h4>
                <ul className="space-y-4 text-sm text-white/40">
                  <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                  <li><Link href="/#about" className="hover:text-accent transition-colors">About</Link></li>
                  <li><Link href="/#services" className="hover:text-accent transition-colors">Services</Link></li>
                  <li><Link href="/portfolio" className="hover:text-accent transition-colors">Work</Link></li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <h4 className="font-semibold mb-6">Services</h4>
                <ul className="space-y-4 text-sm text-white/40">
                  <li><Link href="/services/web-development" className="hover:text-accent transition-colors">Web Development</Link></li>
                  <li><Link href="/services/brand-identity" className="hover:text-accent transition-colors">Brand Identity</Link></li>
                  <li><Link href="/services/social-media" className="hover:text-accent transition-colors">Social Media</Link></li>
                  <li><Link href="/services/web-consulting" className="hover:text-accent transition-colors">Consulting</Link></li>
                </ul>
              </div>

              <div className="md:col-span-4">
                <h4 className="font-semibold mb-6">Ready to start?</h4>
                <p className="text-white/40 text-sm mb-6">Get in touch and let's discuss your next project.</p>
                <Link href="/#contact" className="btn-pill btn-pill-primary text-xs">
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="divider mb-8"></div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/30 text-sm">© {new Date().getFullYear()} DustinTN. All rights reserved.</p>
              <p className="text-white/30 text-sm">Crafted with care in Middle Tennessee</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
