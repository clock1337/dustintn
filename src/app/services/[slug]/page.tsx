'use client';

import { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowLeft, Code2, Palette, MessageSquare, Zap, Users, Share2, CheckCircle2, Facebook, Instagram, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navigation from "@/components/Navigation";
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

const services = {
  "web-development": {
    slug: "web-development",
    icon: Code2,
    title: "Web Development",
    tagline: "Custom Websites Built for Performance",
    description: "We create custom websites and web applications using modern technologies that deliver exceptional performance, security, and user experience. From simple landing pages to complex web applications, we build solutions that grow with your business.",
    heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&h=900&fit=crop",
    features: [
      "Custom website design and development",
      "Responsive mobile-first approach",
      "E-commerce solutions",
      "Content management systems (CMS)",
      "Web application development",
      "API integrations",
      "Performance optimization",
      "Security best practices"
    ],
    process: [
      { step: "01", title: "Discovery", description: "We learn about your business, goals, and target audience to create a strategic foundation." },
      { step: "02", title: "Design", description: "Creating wireframes and visual designs that align with your brand and user expectations." },
      { step: "03", title: "Development", description: "Building your website with clean, efficient code using modern frameworks and best practices." },
      { step: "04", title: "Launch & Support", description: "Deploying your site and providing ongoing maintenance and support." }
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Vercel", "AWS"],
    benefits: [
      { title: "Fast Load Times", description: "Optimized performance for better user experience and SEO rankings" },
      { title: "Mobile Responsive", description: "Perfect display on all devices from phones to desktops" },
      { title: "SEO Optimized", description: "Built with search engine visibility in mind from day one" },
      { title: "Scalable", description: "Architecture that grows with your business needs" }
    ]
  },
  "brand-identity": {
    slug: "brand-identity",
    icon: Palette,
    title: "Brand Identity",
    tagline: "Visual Identities That Resonate",
    description: "We create distinctive brand identities that capture your essence and connect with your audience. From logo design to complete brand systems, we help you stand out in a crowded marketplace with cohesive, memorable visual identities.",
    heroImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600&h=900&fit=crop",
    features: [
      "Logo design and variations",
      "Color palette development",
      "Typography selection",
      "Brand guidelines documentation",
      "Business card and stationery design",
      "Social media brand assets",
      "Marketing collateral design",
      "Brand voice and messaging"
    ],
    process: [
      { step: "01", title: "Research", description: "Understanding your industry, competitors, and target audience to inform design decisions." },
      { step: "02", title: "Concept", description: "Developing multiple creative directions that align with your brand values and goals." },
      { step: "03", title: "Refinement", description: "Iterating on the chosen direction to perfect every detail of your brand identity." },
      { step: "04", title: "Delivery", description: "Providing comprehensive brand guidelines and all necessary file formats." }
    ],
    technologies: ["Adobe Creative Suite", "Figma", "Brand Strategy", "Color Theory", "Typography"],
    benefits: [
      { title: "Recognition", description: "Stand out from competitors with a unique visual identity" },
      { title: "Consistency", description: "Maintain brand coherence across all touchpoints" },
      { title: "Trust", description: "Professional branding builds credibility with customers" },
      { title: "Value", description: "Strong brands command premium pricing" }
    ]
  },
  "seo-content": {
    slug: "seo-content",
    icon: MessageSquare,
    title: "SEO & Content",
    tagline: "Get Found Online",
    description: "We help your business get discovered through strategic search engine optimization and compelling content. Our data-driven approach ensures your website ranks for the keywords that matter most to your business.",
    heroImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1600&h=900&fit=crop",
    features: [
      "Keyword research and strategy",
      "On-page SEO optimization",
      "Technical SEO audits",
      "Content strategy development",
      "Blog and article writing",
      "Local SEO optimization",
      "Google Business Profile management",
      "Performance tracking and reporting"
    ],
    process: [
      { step: "01", title: "Audit", description: "Comprehensive analysis of your current SEO performance and opportunities." },
      { step: "02", title: "Strategy", description: "Developing a customized SEO roadmap based on your goals and competition." },
      { step: "03", title: "Implementation", description: "Executing on-page, technical, and content optimizations." },
      { step: "04", title: "Monitor", description: "Tracking rankings, traffic, and conversions with regular reporting." }
    ],
    technologies: ["Google Analytics", "Search Console", "SEMrush", "Ahrefs", "Screaming Frog", "Schema Markup"],
    benefits: [
      { title: "Visibility", description: "Appear in search results when customers are looking for you" },
      { title: "Traffic", description: "Drive qualified organic traffic to your website" },
      { title: "Authority", description: "Build trust through valuable content and strong rankings" },
      { title: "ROI", description: "Long-term results that compound over time" }
    ]
  },
  "web-consulting": {
    slug: "web-consulting",
    icon: Users,
    title: "Web Consulting",
    tagline: "Expert Guidance for Digital Success",
    description: "Navigate the complex world of web technology with confidence. Our consulting services help you make informed decisions about your digital strategy, technology stack, and online presence to achieve your business objectives.",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop",
    features: [
      "Website strategy and planning",
      "Technology stack recommendations",
      "Platform selection guidance",
      "Digital transformation roadmaps",
      "Vendor evaluation and selection",
      "Project scoping and estimation",
      "Performance and security audits",
      "Team training and workshops"
    ],
    process: [
      { step: "01", title: "Assessment", description: "Understanding your current situation, challenges, and business objectives." },
      { step: "02", title: "Analysis", description: "Evaluating options and identifying the best solutions for your needs." },
      { step: "03", title: "Recommendations", description: "Presenting a clear roadmap with prioritized action items." },
      { step: "04", title: "Support", description: "Ongoing guidance through implementation and beyond." }
    ],
    technologies: ["Strategic Planning", "Technical Architecture", "Project Management", "Agile Methodology"],
    benefits: [
      { title: "Clarity", description: "Clear direction on technology decisions and priorities" },
      { title: "Efficiency", description: "Avoid costly mistakes and wasted resources" },
      { title: "Expertise", description: "Access 20+ years of web development experience" },
      { title: "Confidence", description: "Make informed decisions backed by expert analysis" }
    ]
  },
  "social-media": {
    slug: "social-media",
    icon: Share2,
    title: "Social Media",
    tagline: "Engage Your Audience Everywhere",
    description: "Build a powerful social presence across Facebook, Instagram, Yelp, Google, and more. We help you connect with your audience, manage your online reputation, and turn followers into customers through strategic social media management.",
    heroImage: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1600&h=900&fit=crop",
    features: [
      "Social media strategy development",
      "Facebook page setup and management",
      "Instagram content and engagement",
      "Yelp business profile optimization",
      "Google Business Profile management",
      "Review monitoring and response",
      "Content calendar creation",
      "Social media advertising"
    ],
    process: [
      { step: "01", title: "Audit", description: "Reviewing your current social presence and identifying opportunities." },
      { step: "02", title: "Strategy", description: "Creating a customized social media plan aligned with your goals." },
      { step: "03", title: "Execute", description: "Managing your profiles with consistent, engaging content." },
      { step: "04", title: "Optimize", description: "Analyzing results and refining strategy for better performance." }
    ],
    technologies: ["Meta Business Suite", "Hootsuite", "Canva", "Google Business", "Yelp for Business"],
    platforms: [
      { name: "Facebook", icon: Facebook, description: "Build community and reach local customers" },
      { name: "Instagram", icon: Instagram, description: "Showcase your work with visual storytelling" },
      { name: "Yelp", icon: Star, description: "Manage reviews and attract new customers" },
      { name: "Google", icon: Star, description: "Improve local search visibility" }
    ],
    benefits: [
      { title: "Reach", description: "Connect with customers where they spend their time" },
      { title: "Engagement", description: "Build relationships through meaningful interactions" },
      { title: "Reputation", description: "Monitor and respond to reviews across platforms" },
      { title: "Growth", description: "Turn social followers into paying customers" }
    ]
  },
  "digital-strategy": {
    slug: "digital-strategy",
    icon: Zap,
    title: "Digital Strategy",
    tagline: "Roadmaps for Digital Growth",
    description: "Align your digital presence with your business goals through comprehensive strategy development. We help you create a cohesive digital ecosystem that drives growth, improves efficiency, and delivers measurable results.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop",
    features: [
      "Digital ecosystem planning",
      "Customer journey mapping",
      "Competitive analysis",
      "Technology roadmapping",
      "Marketing strategy alignment",
      "Analytics and KPI framework",
      "Digital transformation planning",
      "Growth strategy development"
    ],
    process: [
      { step: "01", title: "Discovery", description: "Deep dive into your business, market, and digital landscape." },
      { step: "02", title: "Analysis", description: "Identifying gaps, opportunities, and competitive advantages." },
      { step: "03", title: "Strategy", description: "Developing a comprehensive digital roadmap with clear priorities." },
      { step: "04", title: "Execution", description: "Supporting implementation with ongoing strategic guidance." }
    ],
    technologies: ["Business Analysis", "Market Research", "Analytics", "Strategic Planning", "ROI Modeling"],
    benefits: [
      { title: "Alignment", description: "Digital initiatives that support business objectives" },
      { title: "Focus", description: "Clear priorities based on impact and feasibility" },
      { title: "Integration", description: "Cohesive digital ecosystem across all channels" },
      { title: "Results", description: "Measurable outcomes tied to business goals" }
    ]
  }
};

type ServiceSlug = keyof typeof services;

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = services[slug as ServiceSlug];

  // Get adjacent services for navigation
  const serviceSlugs = Object.keys(services);
  const currentIndex = serviceSlugs.indexOf(slug);
  const prevService = currentIndex > 0 ? services[serviceSlugs[currentIndex - 1] as ServiceSlug] : null;
  const nextService = currentIndex < serviceSlugs.length - 1 ? services[serviceSlugs[currentIndex + 1] as ServiceSlug] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4">Service Not Found</h1>
          <Link href="/#services" className="btn-pill btn-pill-primary">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-dark-gray"></div>
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            {/* Back link */}
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-full text-white/80 hover:text-white hover:bg-accent transition-all duration-300 border border-white/10 hover:border-accent mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">All Services</span>
            </Link>

            <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <h1 className="text-headline">{service.title}</h1>
                <p className="text-2xl text-white/60 max-w-2xl font-light">{service.tagline}</p>
              </div>
              <div className="flex-shrink-0 flex items-center gap-4">
                <span className="text-accent text-sm font-medium uppercase tracking-wider">Service</span>
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                  <ServiceIcon className="w-8 h-8 text-white" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Hero Split Section */}
        <section className="pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <AnimatedSection delay={100}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </AnimatedSection>

              {/* Right - Key Highlights */}
              <AnimatedSection delay={200}>
                <div className="bg-dark-gray rounded-2xl p-8 lg:p-10 border border-white/5">
                  <h3 className="text-lg font-semibold mb-6 text-white/80">What You Get</h3>
                  <div className="grid gap-4">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-black/30 rounded-xl">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-accent" />
                        </div>
                        <span className="text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/40">Technologies we use</span>
                      <div className="flex gap-2">
                        {service.technologies.slice(0, 3).map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-white/5 rounded-full text-white/60 text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <span className="section-label mb-6 block">Overview</span>
                <h2 className="text-headline mb-8">What We Offer</h2>
                <p className="text-white/60 text-lg leading-relaxed">{service.description}</p>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="grid grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="p-6 bg-black/50 rounded-xl border border-white/5">
                      <h3 className="text-lg font-semibold mb-2 text-accent">{benefit.title}</h3>
                      <p className="text-white/50 text-sm">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-16">
              <span className="section-label mb-6 inline-flex justify-center">What's Included</span>
              <h2 className="text-headline">Service Features</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.features.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 50}>
                  <div className="flex items-start gap-3 p-5 bg-dark-gray rounded-xl border border-white/5 h-full">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-16">
              <span className="section-label mb-6 inline-flex justify-center">How We Work</span>
              <h2 className="text-headline">Our Process</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="relative">
                    <div className="text-6xl font-bold text-accent/10 mb-4">{step.step}</div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                    {index < service.process.length - 1 && (
                      <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-[2px] bg-gradient-to-r from-accent/20 to-transparent"></div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media Platforms (only for social-media service) */}
        {'platforms' in service && (
          <section className="py-20 bg-black">
            <div className="container mx-auto px-6 lg:px-12">
              <AnimatedSection className="text-center mb-16">
                <span className="section-label mb-6 inline-flex justify-center">Platforms</span>
                <h2 className="text-headline">Where We Help You Shine</h2>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.platforms?.map((platform, index) => (
                  <AnimatedSection key={index} delay={index * 100}>
                    <div className="p-8 bg-dark-gray rounded-2xl border border-white/5 text-center group hover:border-accent/30 transition-colors">
                      <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                        <platform.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{platform.name}</h3>
                      <p className="text-white/50 text-sm">{platform.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Technologies */}
        <section className="py-20 bg-black border-t border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-12">
              <span className="section-label mb-6 inline-flex justify-center">Tools & Technologies</span>
              <h2 className="text-headline">What We Use</h2>
            </AnimatedSection>

            <AnimatedSection delay={100} className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-dark-gray rounded-full text-white/80 border border-white/10 hover:border-accent/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center max-w-2xl mx-auto">
              <h2 className="text-headline mb-6">Ready to Get Started?</h2>
              <p className="text-white/50 text-lg mb-10">
                Let's discuss how our {service.title.toLowerCase()} services can help your business grow.
              </p>
              <Link href="/#contact" className="btn-pill btn-pill-primary group">
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Service Navigation */}
        <section className="py-16 bg-black border-t border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex justify-between items-center">
              {prevService ? (
                <Link
                  href={`/services/${prevService.slug}`}
                  className="group flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-dark-gray rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                  </div>
                  <div className="hidden sm:block">
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Previous</div>
                    <div className="font-medium group-hover:text-accent transition-colors">{prevService.title}</div>
                  </div>
                </Link>
              ) : (
                <div></div>
              )}

              <Link
                href="/#services"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                All Services
              </Link>

              {nextService ? (
                <Link
                  href={`/services/${nextService.slug}`}
                  className="group flex items-center gap-4 text-right"
                >
                  <div className="hidden sm:block">
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Next</div>
                    <div className="font-medium group-hover:text-accent transition-colors">{nextService.title}</div>
                  </div>
                  <div className="w-12 h-12 bg-dark-gray rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </section>

        <ProudlyServing />
        <Footer />
      </main>
    </div>
  );
}
