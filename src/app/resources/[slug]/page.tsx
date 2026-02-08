'use client';

import { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowLeft, Clock, Calendar, Tag, Video, Phone, CheckCircle2, Globe, Search, Wrench, Share2, HelpCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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

        {/* Article Overview: Image + Summary */}
        <section className="pb-8 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1fr] gap-8 items-start">
              {/* Article Image */}
              <AnimatedSection>
                <div className="aspect-[16/10] relative overflow-hidden rounded-2xl">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
                </div>
              </AnimatedSection>

              {/* In This Article */}
              <AnimatedSection delay={150}>
                <div className="bg-dark-gray rounded-2xl p-6 lg:p-8 border border-white/5 h-full">
                  <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-5">In This Article</h2>
                  <nav className="space-y-3">
                    {resource.sections.map((section, idx) => (
                      <div key={idx} className="flex items-start gap-3 group">
                        <span className="text-xs font-semibold text-accent/60 mt-0.5 w-5 flex-shrink-0">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm text-white/60 leading-snug group-hover:text-white/80 transition-colors">
                          {section.heading}
                        </span>
                      </div>
                    ))}
                  </nav>

                  {/* Quick Stats */}
                  <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-xs text-white/40">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      {resource.readTime}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/40">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      {resource.publishDate}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Article Content + Sidebar */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
              {/* Main Article Content */}
              <div>
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

                {/* Tags */}
                <div className="mt-16 pt-8 border-t border-white/5">
                  <div className="flex flex-wrap items-center gap-3">
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
              </div>

              {/* Sidebar — Free Consultation */}
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <AnimatedSection delay={200}>
                  <div className="bg-black rounded-2xl border border-white/5 overflow-hidden">
                    {/* Sidebar Image */}
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
                        alt="Free business consultation"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                      {/* Overlay badges */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex flex-wrap gap-1.5">
                          <span className="flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full text-[11px] text-white/80 border border-white/10">
                            <Video className="w-3 h-3 text-accent" />
                            Google Meet
                          </span>
                          <span className="flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full text-[11px] text-white/80 border border-white/10">
                            <Phone className="w-3 h-3 text-accent" />
                            Phone
                          </span>
                          <span className="flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full text-[11px] text-white/80 border border-white/10">
                            <Clock className="w-3 h-3 text-accent" />
                            30 Min
                          </span>
                        </div>
                      </div>

                      {/* FREE badge */}
                      <div className="absolute -top-0 -right-0 bg-accent rounded-bl-2xl px-4 py-2 shadow-lg shadow-accent/20">
                        <span className="text-sm font-bold">FREE</span>
                      </div>
                    </div>

                    {/* Sidebar Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2">
                        Free 30-Minute <span className="text-accent">Exploratory Call</span>
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed mb-5">
                        Not sure where to start? Let&apos;s talk — no obligation, no pressure.
                      </p>

                      <div className="space-y-2.5 mb-5">
                        {[
                          { icon: Globe, text: "Online presence planning" },
                          { icon: Search, text: "SEO & getting found" },
                          { icon: Wrench, text: "Maintenance & updates" },
                          { icon: Share2, text: "Social media strategy" },
                          { icon: HelpCircle, text: "Any digital questions" },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2.5">
                            <div className="w-6 h-6 bg-accent/10 rounded-md flex items-center justify-center flex-shrink-0">
                              <item.icon className="w-3 h-3 text-accent" />
                            </div>
                            <span className="text-white/60 text-xs">{item.text}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-5 text-[11px] text-white/40">
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-accent" />
                          No obligation
                        </span>
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-accent" />
                          20+ years exp
                        </span>
                      </div>

                      <Link href="/free-consultation" className="btn-pill btn-pill-primary w-full justify-center text-sm group">
                        Book My Free Call
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              </aside>
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
