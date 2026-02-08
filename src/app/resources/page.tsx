'use client';

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Clock, CheckCircle2, Video, Phone, Globe, Search, Wrench, Share2, Calendar, HelpCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import ProudlyServing from "@/components/ProudlyServing";
import Footer from "@/components/Footer";
import { resources, resourceCategories } from "@/data/resources";

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

export default function ResourcesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredResources = activeFilter === "All"
    ? resources
    : resources.filter(r => r.category === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation currentPage="resources" />

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-dark-gray"></div>
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[150px]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="max-w-3xl">
              <span className="section-label mb-6 block">Free Resources</span>
              <h1 className="text-headline">
                Guides & Tips to <span className="text-accent">Grow</span> Your Business Online
              </h1>
              <p className="text-xl text-white/50 leading-relaxed">
                Practical, actionable resources on web development, SEO, social media, and digital strategy.
                Everything you need to build and grow your online presence.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Free Consultation Teaser */}
        <section className="py-24 bg-dark-gray relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[200px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[150px]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left — Image + visual process */}
              <AnimatedSection>
                <div className="relative">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                      alt="Friendly business consultation on a video call"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/70 via-transparent to-black/20"></div>

                    {/* Overlay content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex flex-wrap gap-2">
                        <span className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/10">
                          <Video className="w-3 h-3 text-accent" />
                          Google Meet
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/10">
                          <Phone className="w-3 h-3 text-accent" />
                          Phone Call
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/10">
                          <Clock className="w-3 h-3 text-accent" />
                          30 Minutes
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -top-4 -right-4 bg-accent rounded-2xl px-5 py-3 shadow-xl shadow-accent/20">
                    <div className="text-lg font-semibold">FREE</div>
                  </div>
                </div>

                {/* 3-step process */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {[
                    { num: "1", label: "Fill out a quick form" },
                    { num: "2", label: "We schedule a time" },
                    { num: "3", label: "We talk it through" },
                  ].map((step, idx) => (
                    <div key={idx} className="text-center p-4 bg-black/50 rounded-xl border border-white/5">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-sm font-semibold text-accent">{step.num}</span>
                      </div>
                      <span className="text-xs text-white/50 leading-snug block">{step.label}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Right — Value prop + CTA */}
              <AnimatedSection delay={200}>
                <span className="section-label mb-6 block">Free Consultation</span>
                <h2 className="text-3xl lg:text-4xl font-semibold mb-6 leading-tight">
                  Free 30-Minute <span className="text-accent">Exploratory Call</span>
                </h2>
                <p className="text-white/50 text-lg leading-relaxed mb-8">
                  Not sure where to start? Let&apos;s talk it through — no sales pitch, no obligation.
                  Just a friendly conversation about your business and where digital can take it.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    { icon: Globe, text: "Planning your online presence" },
                    { icon: Search, text: "Getting found on Google & search" },
                    { icon: Wrench, text: "Website maintenance & updates" },
                    { icon: Share2, text: "Social media strategy" },
                    { icon: Calendar, text: "Monthly webmaster retainer options" },
                    { icon: HelpCircle, text: "Any digital questions you have" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-white/70 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mb-8 text-sm text-white/40">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    No obligation
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    No pressure
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    20+ years experience
                  </span>
                </div>

                <Link href="/free-consultation" className="btn-pill btn-pill-primary group">
                  Book My Free Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-black border-y border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-wrap gap-3">
              {resourceCategories.map((category) => (
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

        {/* Resources Grid */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource, index) => (
                <AnimatedSection key={resource.slug} delay={index * 100}>
                  <Link
                    href={`/resources/${resource.slug}`}
                    className="group block bg-dark-gray rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-500 h-full overflow-hidden"
                  >
                    {/* Cover Image */}
                    <div className="aspect-[5/2] relative overflow-hidden">
                      <Image
                        src={resource.image}
                        alt={resource.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-gray via-dark-gray/20 to-transparent"></div>
                    </div>

                    <div className="p-6 lg:p-8 flex flex-col h-full">
                      {/* Meta */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-accent/10 rounded-full text-xs text-accent font-medium">
                          {resource.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-white/40">
                          <Clock className="w-3 h-3" />
                          {resource.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors leading-tight">
                        {resource.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                        {resource.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {resource.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-accent group-hover:gap-3 transition-all">
                        <span className="text-sm font-medium">Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
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
              <span className="section-label mb-6 inline-flex justify-center">Need Expert Help?</span>
              <h2 className="text-headline mb-8">
                Let&apos;s Put These Ideas Into <span className="text-accent">Action</span>
              </h2>
              <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
                Reading about it is a great start. When you&apos;re ready for expert help implementing these strategies,
                we&apos;re here for you.
              </p>
              <Link href="/contact" className="btn-pill btn-pill-primary group">
                Let&apos;s Talk
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        <ProudlyServing />
        <Footer />
      </main>
    </div>
  );
}
