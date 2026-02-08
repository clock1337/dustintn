'use client';

import { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navigation from "@/components/Navigation";
import ResourceSnippets from "@/components/ResourceSnippets";
import ProudlyServing from "@/components/ProudlyServing";
import Footer from "@/components/Footer";
import { resources, getResourceBySlug } from "@/data/resources";

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

export default function ResourceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const resource = getResourceBySlug(slug);

  // Get adjacent resources for navigation
  const currentIndex = resources.findIndex(r => r.slug === slug);
  const prevResource = currentIndex > 0 ? resources[currentIndex - 1] : null;
  const nextResource = currentIndex < resources.length - 1 ? resources[currentIndex + 1] : null;

  if (!resource) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4">Resource Not Found</h1>
          <Link href="/resources" className="btn-pill btn-pill-primary">
            View All Resources
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation currentPage="resources" />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-dark-gray"></div>
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            {/* Back link */}
            <Link
              href="/resources"
              className="inline-flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-full text-white/80 hover:text-white hover:bg-accent transition-all duration-300 border border-white/10 hover:border-accent mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">All Resources</span>
            </Link>

            <AnimatedSection className="max-w-4xl">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-4 py-1.5 bg-accent/10 rounded-full text-sm text-accent font-medium">
                  {resource.category}
                </span>
                <span className="flex items-center gap-2 text-sm text-white/40">
                  <Clock className="w-4 h-4" />
                  {resource.readTime}
                </span>
                <span className="flex items-center gap-2 text-sm text-white/40">
                  <Calendar className="w-4 h-4" />
                  {resource.publishDate}
                </span>
              </div>

              <h1 className="text-headline mb-6">{resource.title}</h1>
              <p className="text-xl text-white/50 leading-relaxed max-w-3xl">
                {resource.excerpt}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              {resource.sections.map((section, index) => (
                <AnimatedSection key={index} className="mb-16 last:mb-0">
                  <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
                    {section.heading}
                  </h2>
                  <p className="text-white/60 text-lg leading-relaxed mb-6">
                    {section.content}
                  </p>
                  {section.list && (
                    <ul className="space-y-3">
                      {section.list.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0"></div>
                          <span className="text-white/60 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Tags */}
        <section className="py-8 bg-dark-gray border-t border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto flex flex-wrap items-center gap-3">
              <Tag className="w-4 h-4 text-white/40" />
              {resource.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-black/50 rounded-full text-sm text-white/60 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Block */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="max-w-4xl mx-auto">
              <div className="bg-dark-gray rounded-2xl p-8 lg:p-12 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px]"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
                    {resource.cta.heading}
                  </h2>
                  <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-2xl">
                    {resource.cta.description}
                  </p>
                  <Link
                    href={resource.cta.buttonHref}
                    className="btn-pill btn-pill-primary group"
                  >
                    {resource.cta.buttonText}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Related Resources */}
        <ResourceSnippets
          excludeSlug={slug}
          category={resource.category}
          heading="Related Resources"
          subheading="Continue reading and learning"
        />

        {/* Article Navigation */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 lg:p-12">
              <div className="flex justify-between items-center">
                {prevResource ? (
                  <Link
                    href={`/resources/${prevResource.slug}`}
                    className="group flex items-center gap-4 flex-1"
                  >
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-accent transition-all duration-300 border border-white/10 group-hover:border-accent">
                      <ArrowLeft className="w-5 h-5" />
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Previous Article</div>
                      <div className="font-semibold text-lg group-hover:text-accent transition-colors line-clamp-1">{prevResource.title}</div>
                    </div>
                  </Link>
                ) : (
                  <div className="flex-1"></div>
                )}

                <Link
                  href="/resources"
                  className="hidden md:flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/80 hover:text-white hover:bg-accent transition-all duration-300 border border-white/10 hover:border-accent mx-8"
                >
                  <span className="text-sm font-medium">All Resources</span>
                </Link>

                {nextResource ? (
                  <Link
                    href={`/resources/${nextResource.slug}`}
                    className="group flex items-center gap-4 text-right flex-1 justify-end"
                  >
                    <div className="hidden sm:block">
                      <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Next Article</div>
                      <div className="font-semibold text-lg group-hover:text-accent transition-colors line-clamp-1">{nextResource.title}</div>
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
