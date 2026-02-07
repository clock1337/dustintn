'use client';

import { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowUpRight, Code2, Palette, MessageSquare, Zap, Users, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";

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

const services = [
  {
    slug: "web-development",
    icon: Code2,
    title: "Web Development",
    tagline: "Custom Websites Built for Performance",
    description: "Custom websites and web applications built with modern technologies for optimal performance, security, and user experience.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    features: ["Custom Design", "Responsive", "Fast Loading", "SEO Ready"]
  },
  {
    slug: "brand-identity",
    icon: Palette,
    title: "Brand Identity",
    tagline: "Visual Identities That Resonate",
    description: "Distinctive visual identities that capture your essence and resonate with your audience, from logos to complete brand systems.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    features: ["Logo Design", "Brand Guidelines", "Color Systems", "Typography"]
  },
  {
    slug: "seo-content",
    icon: MessageSquare,
    title: "SEO & Content",
    tagline: "Get Found Online",
    description: "Strategic optimization and compelling content that helps your business get discovered and rank higher in search results.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop",
    features: ["Keyword Research", "On-Page SEO", "Content Strategy", "Analytics"]
  },
  {
    slug: "web-consulting",
    icon: Users,
    title: "Web Consulting",
    tagline: "Expert Guidance for Digital Success",
    description: "Navigate the complex world of web technology with confidence through expert consulting and strategic guidance.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    features: ["Strategy", "Tech Selection", "Audits", "Training"]
  },
  {
    slug: "social-media",
    icon: Share2,
    title: "Social Media",
    tagline: "Engage Your Audience Everywhere",
    description: "Build a powerful social presence across Facebook, Instagram, Yelp, and more to connect with your audience.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=600&fit=crop",
    features: ["Facebook", "Instagram", "Yelp", "Google Business"]
  },
  {
    slug: "digital-strategy",
    icon: Zap,
    title: "Digital Strategy",
    tagline: "Roadmaps for Digital Growth",
    description: "Comprehensive digital roadmaps that align technology choices with your business growth objectives.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    features: ["Planning", "Analysis", "Roadmaps", "KPIs"]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-dark-gray"></div>
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[150px]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="max-w-3xl">
              <span className="section-label mb-6 block">What We Do</span>
              <h1 className="text-headline">
                Services That <span className="text-accent">Deliver</span> Results
              </h1>
              <p className="text-xl text-white/50 leading-relaxed">
                Comprehensive digital solutions tailored to your business needs. From web development to social media management,
                we bring 20+ years of expertise to every project.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedSection key={service.slug} delay={index * 100}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block bg-black rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-500 h-full"
                  >
                    {/* Image */}
                    <div className="aspect-[16/10] relative overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                      {/* Icon overlay */}
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-accent text-sm mb-4">{service.tagline}</p>
                      <p className="text-white/50 text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Feature tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/60"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-accent group-hover:gap-3 transition-all">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-16">
              <span className="section-label mb-6 inline-flex justify-center">Why Choose Us</span>
              <h2 className="text-headline">The DustinTN Difference</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "20+", label: "Years Experience", description: "Two decades of web development expertise" },
                { number: "200+", label: "Projects Delivered", description: "Successful launches across industries" },
                { number: "98%", label: "Client Retention", description: "Long-term partnerships built on trust" },
                { number: "24hr", label: "Response Time", description: "Quick communication, every time" }
              ].map((stat, index) => (
                <AnimatedSection key={index} delay={index * 100} className="text-center">
                  <div className="text-5xl font-semibold text-accent mb-2">{stat.number}</div>
                  <div className="font-medium mb-2">{stat.label}</div>
                  <p className="text-white/40 text-sm">{stat.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-16">
              <span className="section-label mb-6 inline-flex justify-center">Our Approach</span>
              <h2 className="text-headline">How We Work</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "Understanding your goals, audience, and requirements" },
                { step: "02", title: "Strategy", description: "Creating a roadmap tailored to your needs" },
                { step: "03", title: "Execute", description: "Building and implementing with precision" },
                { step: "04", title: "Support", description: "Ongoing maintenance and optimization" }
              ].map((item, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="relative">
                    <div className="text-7xl font-bold text-accent/10 mb-4">{item.step}</div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-white/50 text-sm">{item.description}</p>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-10 right-0 w-1/2 h-[2px] bg-gradient-to-r from-accent/30 to-transparent"></div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.1),transparent_70%)]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <span className="section-label mb-6 inline-flex justify-center">Ready to Start?</span>
              <h2 className="text-headline mb-8">
                Let's Build Something <span className="text-accent">Great</span>
              </h2>
              <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
                Have a project in mind? We'd love to hear about it. Get in touch and let's discuss how we can help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/#contact" className="btn-pill btn-pill-primary group">
                  Start a Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/portfolio" className="btn-pill btn-pill-outline group">
                  View Our Work
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
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
                  <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
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
