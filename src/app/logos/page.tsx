'use client';

import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

const logos = [
  {
    slug: "mountain-peak-brewing",
    title: "Mountain Peak Brewing",
    industry: "Food & Beverage",
    image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&h=800&fit=crop",
    colors: [
      { name: "Forest", hex: "#2D5016" },
      { name: "Amber", hex: "#D4A017" },
      { name: "Cream", hex: "#F5F0E1" },
    ],
  },
  {
    slug: "bright-path-therapy",
    title: "Bright Path Therapy",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1635405074683-96d6921a2a68?w=800&h=800&fit=crop",
    colors: [
      { name: "Teal", hex: "#0891B2" },
      { name: "Lavender", hex: "#A78BFA" },
      { name: "Soft White", hex: "#F8FAFC" },
    ],
  },
  {
    slug: "cedar-ridge-homes",
    title: "Cedar Ridge Homes",
    industry: "Real Estate",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop",
    colors: [
      { name: "Charcoal", hex: "#1C1917" },
      { name: "Gold", hex: "#CA8A04" },
      { name: "Warm Gray", hex: "#D6D3D1" },
    ],
  },
  {
    slug: "velocity-fitness",
    title: "Velocity Fitness",
    industry: "Health & Fitness",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=800&fit=crop",
    colors: [
      { name: "Electric Red", hex: "#DC2626" },
      { name: "Midnight", hex: "#0F172A" },
      { name: "White", hex: "#FFFFFF" },
    ],
  },
  {
    slug: "riverstone-financial",
    title: "Riverstone Financial",
    industry: "Financial Services",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=800&fit=crop",
    colors: [
      { name: "Navy", hex: "#1E3A5F" },
      { name: "Silver", hex: "#94A3B8" },
      { name: "Ice", hex: "#F1F5F9" },
    ],
  },
  {
    slug: "wild-sage-kitchen",
    title: "Wild Sage Kitchen",
    industry: "Restaurant",
    image: "https://images.unsplash.com/photo-1636955816868-fcb881e57954?w=800&h=800&fit=crop",
    colors: [
      { name: "Sage", hex: "#6B8E5A" },
      { name: "Terracotta", hex: "#C2410C" },
      { name: "Linen", hex: "#FAF5EF" },
    ],
  },
];

export default function LogosPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-dark-gray"></div>
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="max-w-3xl">
              <span className="section-label mb-6 block">Logo Portfolio</span>
              <h1 className="text-headline">
                Logos That <span className="text-accent">Tell</span> a Story
              </h1>
              <p className="text-xl text-white/50 leading-relaxed">
                Every great brand starts with a great mark. Explore the logos we&apos;ve designed and the stories behind them.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Logo Grid */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {logos.map((logo, index) => (
                <AnimatedSection key={logo.slug} delay={index * 100}>
                  <Link
                    href={`/logos/${logo.slug}`}
                    className="group block bg-black rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-500 h-full"
                  >
                    {/* Image */}
                    <div className="aspect-square relative overflow-hidden bg-white/5">
                      <Image
                        src={logo.image}
                        alt={logo.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Industry tag */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/10">
                          {logo.industry}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">
                        {logo.title}
                      </h3>

                      {/* Color swatches */}
                      <div className="flex items-center gap-3 mb-6">
                        {logo.colors.map((color, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div
                              className="w-5 h-5 rounded-full border border-white/20"
                              style={{ backgroundColor: color.hex }}
                            />
                            <span className="text-xs text-white/40">{color.hex}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-accent group-hover:gap-3 transition-all">
                        <span className="text-sm font-medium">View Story</span>
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
              <span className="section-label mb-6 inline-flex justify-center">Need a Logo?</span>
              <h2 className="text-headline mb-8">
                Let&apos;s Create Your <span className="text-accent">Mark</span>
              </h2>
              <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
                Ready for a logo that captures your brand&apos;s story? Let&apos;s talk about what makes your business unique.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/services/logo-design" className="btn-pill btn-pill-primary group">
                  Logo Design Service
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="btn-pill btn-pill-outline group">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <ProudlyServing />
        <Footer />
      </main>
    </div>
  );
}
