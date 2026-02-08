'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import {
  resources,
  getResourcesForService,
  getRelatedResources,
  type Resource,
} from '@/data/resources';

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

function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

interface ResourceSnippetsProps {
  serviceSlug?: string;
  category?: string;
  excludeSlug?: string;
  limit?: number;
  heading?: string;
  subheading?: string;
}

export default function ResourceSnippets({
  serviceSlug,
  category,
  excludeSlug,
  limit = 3,
  heading = 'Free Resources',
  subheading = 'Helpful guides and tips to grow your business online',
}: ResourceSnippetsProps) {
  let filtered: Resource[];

  if (serviceSlug) {
    filtered = getResourcesForService(serviceSlug);
    if (excludeSlug) {
      filtered = filtered.filter((r) => r.slug !== excludeSlug);
    }
    filtered = filtered.slice(0, limit);
  } else if (excludeSlug) {
    filtered = getRelatedResources(excludeSlug, category, limit);
  } else if (category && category !== 'All') {
    filtered = resources
      .filter((r) => r.category === category)
      .slice(0, limit);
  } else {
    filtered = resources.slice(0, limit);
  }

  if (filtered.length === 0) {
    filtered = resources
      .filter((r) => r.slug !== excludeSlug)
      .slice(0, limit);
  }

  return (
    <section className="py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection className="text-center mb-16">
          <span className="section-label mb-6 inline-flex justify-center">
            {heading}
          </span>
          <h2 className="text-headline">
            {subheading.split(' ').length > 3 ? (
              <>
                {subheading.split(' ').slice(0, -2).join(' ')}{' '}
                <span className="text-accent">
                  {subheading.split(' ').slice(-2).join(' ')}
                </span>
              </>
            ) : (
              subheading
            )}
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((resource, index) => (
            <AnimatedSection key={resource.slug} delay={index * 100}>
              <Link
                href={`/resources/${resource.slug}`}
                className="group block bg-dark-gray rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-500 h-full overflow-hidden"
              >
                <div className="p-6 lg:p-8 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-accent/10 rounded-full text-xs text-accent font-medium">
                      {resource.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-white/40">
                      <Clock className="w-3 h-3" />
                      {resource.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors leading-tight">
                    {resource.title}
                  </h3>

                  <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                    {resource.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-accent group-hover:gap-3 transition-all">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400} className="text-center mt-12">
          <Link
            href="/resources"
            className="btn-pill btn-pill-outline group"
          >
            View All Resources
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
