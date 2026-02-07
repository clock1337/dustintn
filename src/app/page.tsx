'use client';

import { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowUpRight, Code2, Palette, MessageSquare, Zap, Mail, Phone, MapPin, Play, Users, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

// Staggered children animation
function StaggeredContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children) ? children.map((child, index) => (
        <div
          key={index}
          className="transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transitionDelay: `${index * 100}ms`
          }}
        >
          {child}
        </div>
      )) : children}
    </div>
  );
}

const services = [
  {
    slug: "web-development",
    icon: Code2,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
  },
  {
    slug: "brand-identity",
    icon: Palette,
    title: "Brand Identity",
    description: "Distinctive visual identities that capture your essence and resonate with your audience.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop"
  },
  {
    slug: "seo-content",
    icon: MessageSquare,
    title: "SEO & Content",
    description: "Strategic optimization and content that helps your business get found online.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop"
  },
  {
    slug: "web-consulting",
    icon: Users,
    title: "Web Consulting",
    description: "Expert guidance on website strategy, technology decisions, and digital transformation for your business.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
  },
  {
    slug: "social-media",
    icon: Share2,
    title: "Social Media",
    description: "Strategic social presence on Facebook, Instagram, Yelp, and more to engage your audience and grow your brand.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&h=400&fit=crop"
  },
  {
    slug: "digital-strategy",
    icon: Zap,
    title: "Digital Strategy",
    description: "Comprehensive digital roadmaps that align technology choices with your business growth objectives.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
  }
];

const portfolio = [
  { id: 1, slug: "fine-assets", title: "Fine Assets Personal Training", category: "Web Development", image: "/screenshots/fine-assets.png" },
  { id: 2, slug: "champions-adaptive-fitness", title: "Champions Adaptive Fitness", category: "Web Development", image: "/screenshots/champions-adaptive-fitness.png" },
  { id: 3, slug: "pinnacle-health-choice", title: "Pinnacle Wellness", category: "Healthcare", image: "/screenshots/pinnacle-health-choice.png" },
  { id: 4, slug: "southern-collective-spirit-co", title: "Southern Collective Spirit Co.", category: "Hospitality", image: "/screenshots/southern-collective-spirit-co.png" },
  { id: 5, slug: "coldwell-banker-commercial", title: "Coldwell Banker Commercial SC", category: "Real Estate", image: "/screenshots/coldwell-banker-commercial.png" },
];

const stats = [
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 50, suffix: "+", label: "Happy Clients" },
];

const testimonials = [
  {
    quote: "Working with DustinTN transformed our online presence. Their attention to detail and understanding of our needs exceeded expectations.",
    author: "Sarah Mitchell",
    role: "CEO, HealthFirst Clinic",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    quote: "Professional, responsive, and incredibly talented. They delivered a website that perfectly represents our brand.",
    author: "Michael Chen",
    role: "Owner, Chen's Kitchen",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  },
  {
    quote: "The best investment we made for our business. Our new site has significantly increased our client inquiries.",
    author: "Jennifer Adams",
    role: "Partner, Adams Law Group",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  }
];

// Counter animation component
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.5);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <span ref={ref}>
      {count}<span className="text-accent">{suffix}</span>
    </span>
  );
}

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation currentPage="home" />

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-dark-gray"></div>
          <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[200px] animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="overflow-hidden mb-8">
                  <span
                    className="section-label block animate-slideUp"
                    style={{ animationDelay: '0.2s' }}
                  >
                    Web Development & Digital Services
                  </span>
                </div>

                <div className="overflow-hidden">
                  <h1 className="text-display mb-8">
                    <span className="block animate-slideUp" style={{ animationDelay: '0.3s' }}>Designing a</span>
                    <span className="block animate-slideUp" style={{ animationDelay: '0.4s' }}><span className="text-accent">Better</span> Digital</span>
                    <span className="block animate-slideUp" style={{ animationDelay: '0.5s' }}>World Today</span>
                  </h1>
                </div>

                <p className="text-xl text-white/50 max-w-xl mb-12 leading-relaxed animate-fadeIn" style={{ animationDelay: '0.7s' }}>
                  We craft distinctive websites and digital experiences for businesses across Nashville, Hendersonville, Gallatin, and Middle Tennessee. Two decades of turning ideas into memorable online presences.
                </p>

                <div className="flex flex-wrap gap-4 animate-fadeIn" style={{ animationDelay: '0.9s' }}>
                  <a href="#services" className="btn-pill btn-pill-primary group">
                    What We Do
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#work" className="btn-pill btn-pill-outline group">
                    <Play className="w-4 h-4" />
                    View Work
                  </a>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=1000&fit=crop"
                    alt="Digital workspace"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-2xl animate-float">
                  <div className="text-4xl font-semibold">20+</div>
                  <div className="text-sm text-white/80">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator - positioned on left side */}
          <div className="absolute bottom-12 left-12 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-accent/50 flex items-center justify-center">
              <div className="w-2 h-2 bg-accent rounded-full scroll-indicator"></div>
            </div>
            <span className="text-sm text-white/80 font-medium uppercase tracking-[0.15em]">
              Scroll
            </span>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 bg-dark-gray relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <span className="section-label mb-6 block">About Us</span>
                <h2 className="text-headline mb-8">
                  Building digital solutions since <span className="text-accent">2004</span>
                </h2>
                <p className="text-white/50 text-lg leading-relaxed mb-6">
                  Proudly serving Nashville, Hendersonville, Gallatin, Goodlettsville, and all of Middle Tennessee, we've spent two decades helping local businesses establish and grow their online presence. From healthcare practices to restaurants, fitness studios to real estate, we bring dedication and expertise to every project.
                </p>
                <p className="text-white/50 leading-relaxed mb-10">
                  Our approach is simple: understand your goals, design with purpose, and build with precision. No corporate layers, no middlemen—just direct collaboration that delivers results.
                </p>
                <a href="#contact" className="btn-pill btn-pill-outline group">
                  Start a Project
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="relative">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden img-zoom">
                    <Image
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1000&fit=crop"
                      alt="Team collaboration"
                      fill
                      className="object-cover img-placeholder"
                    />
                  </div>
                  {/* Stats overlay */}
                  <div className="absolute -bottom-8 -left-8 bg-accent text-white p-8 rounded-2xl shadow-2xl shadow-accent/20">
                    <div className="text-5xl font-semibold">20+</div>
                    <div className="text-sm text-white/80 mt-1">Years of Experience</div>
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 border border-accent/30 rounded-full"></div>
                  <div className="absolute -top-8 -right-8 w-32 h-32 border border-accent/10 rounded-full"></div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.05),transparent_70%)]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} delay={index * 100} className="text-center lg:text-left">
                  <div className="text-5xl lg:text-6xl font-semibold mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-white/40 uppercase tracking-wider">{stat.label}</div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 bg-black relative">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <span className="section-label mb-6 block">What We Do</span>
                <h2 className="text-headline mb-6">
                  Services that <span className="text-accent">deliver</span> results
                </h2>
                <p className="text-white/50 text-lg">
                  Comprehensive digital solutions tailored to your business needs. Every project receives our full attention and expertise.
                </p>
              </div>
              <Link href="/services" className="btn-pill btn-pill-outline group flex-shrink-0">
                View All Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <Link href={`/services/${service.slug}`} className="group block p-8 lg:p-10 bg-dark-gray rounded-2xl card-hover cursor-pointer border border-white/5 hover:border-accent/30 relative overflow-hidden h-full">
                    {/* Background image on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                        <service.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                      <p className="text-white/50 leading-relaxed">{service.description}</p>

                      <div className="mt-6 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm font-medium">Learn more</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="work" className="py-32 bg-dark-gray relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
              <div>
                <span className="section-label mb-6 block">Our Work</span>
                <h2 className="text-headline">
                  Selected <span className="text-accent">Projects</span>
                </h2>
              </div>
              <Link href="/portfolio" className="btn-pill btn-pill-outline group">
                View All Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolio.map((project, index) => (
                <AnimatedSection key={project.id} delay={index * 150}>
                  <Link href={`/portfolio/${project.slug}`} className="group block cursor-pointer">
                    <div className="mb-6">
                      <ScrollingScreenshot
                        src={project.image}
                        alt={project.title}
                      />
                    </div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                        <p className="text-white/40 text-sm">{project.category}</p>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,107,0,0.1),transparent_50%)]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="text-center mb-16">
              <span className="section-label mb-6 inline-flex justify-center">Testimonials</span>
              <h2 className="text-headline">
                What our <span className="text-accent">clients</span> say
              </h2>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      index === activeTestimonial
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8 absolute inset-0'
                    }`}
                  >
                    <blockquote className="text-center">
                      <p className="text-2xl lg:text-3xl font-light leading-relaxed mb-8 text-white/80">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center justify-center gap-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            width={56}
                            height={56}
                            className="object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <div className="font-semibold">{testimonial.author}</div>
                          <div className="text-sm text-white/40">{testimonial.role}</div>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                ))}
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-12">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeTestimonial ? 'bg-accent w-8' : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-dark-gray relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop"
              alt="Office background"
              fill
              className="object-cover opacity-10"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-gray via-dark-gray/95 to-dark-gray/90"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <span className="section-label mb-6 inline-flex justify-center">Have a Project?</span>
              <h2 className="text-headline mb-8">
                Let's work <span className="text-accent">together</span>
              </h2>
              <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
                Ready to start your next project? Get in touch and let's create something great.
              </p>
              <a href="#contact" className="btn-pill btn-pill-primary group">
                Start a Conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-black relative">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16">
              <AnimatedSection>
                <span className="section-label mb-6 block">Get in Touch</span>
                <h2 className="text-headline mb-8">
                  Let's start your <span className="text-accent">project</span>
                </h2>
                <p className="text-white/50 text-lg mb-12">
                  Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  <a href="mailto:hello@dustintn.com" className="flex items-center gap-4 text-white/60 hover:text-accent transition-colors group">
                    <div className="w-14 h-14 bg-dark-gray rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Email</div>
                      <span className="text-lg">hello@dustintn.com</span>
                    </div>
                  </a>
                  <a href="tel:+16155551234" className="flex items-center gap-4 text-white/60 hover:text-accent transition-colors group">
                    <div className="w-14 h-14 bg-dark-gray rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Phone</div>
                      <span className="text-lg">(615) 555-1234</span>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 text-white/60">
                    <div className="w-14 h-14 bg-dark-gray rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Location</div>
                      <span className="text-lg">Middle Tennessee</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <form className="space-y-6 bg-dark-gray p-8 lg:p-10 rounded-2xl">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white placeholder:text-white/20 focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Email</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white placeholder:text-white/20 focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Subject</label>
                    <input
                      type="text"
                      placeholder="Project inquiry"
                      className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white placeholder:text-white/20 focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white placeholder:text-white/20 focus:border-accent focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-pill btn-pill-primary w-full justify-center mt-4 group">
                    Send Message
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <ProudlyServing />
        <Footer />
      </main>
    </div>
  );
}
