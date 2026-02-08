'use client';

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
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
        <section className="py-32 bg-dark-gray relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.1),transparent_70%)]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <span className="section-label mb-6 inline-flex justify-center">Need Expert Help?</span>
              <h2 className="text-headline mb-8">
                Let's Put These Ideas Into <span className="text-accent">Action</span>
              </h2>
              <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
                Reading about it is a great start. When you're ready for expert help implementing these strategies,
                we're here for you.
              </p>
              <Link href="/contact" className="btn-pill btn-pill-primary group">
                Let's Talk
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
