'use client';

import { useState, useEffect } from "react";
import { ChevronDown, ArrowRight, ArrowUpRight, Menu, X, Code2, Search, BrainCircuit, Share2, Zap, Palette, PenTool, BookOpen, Compass, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { resources, getCategorySlug, getNewestResourceByCategory } from "@/data/resources";

const portfolioCategories = [
  {
    title: "Medical & Chiropractic",
    description: "Healthcare websites that build trust",
    href: "/portfolio/pinnacle-health-choice",
    icon: "+"
  },
  {
    title: "Fitness & Training",
    description: "Fitness platforms that inspire",
    href: "/portfolio/fine-assets",
    icon: "+"
  },
  {
    title: "Home Services",
    description: "Service business websites",
    href: "/portfolio/jobe-gutter-services",
    icon: "+"
  },
  {
    title: "Fine Art & Creative",
    description: "Artist websites & branding",
    href: "/portfolio/maple-sky-dreamtree-studio",
    icon: "+"
  },
  {
    title: "Logo Portfolio",
    description: "Brand marks & logo design",
    href: "/logos",
    icon: "+"
  }
];

const serviceItems = [
  { title: "Web Development", href: "/services/web-development", description: "Custom websites & apps", icon: Code2 },
  { title: "Brand Identity", href: "/services/brand-identity", description: "Logos & visual identity", icon: Palette },
  { title: "Logo Design", href: "/services/logo-design", description: "Custom logos & marks", icon: PenTool },
  { title: "SEO & Content", href: "/services/seo-content", description: "Search optimization", icon: Search },
  { title: "Web Consulting", href: "/services/web-consulting", description: "Expert guidance", icon: Compass },
  { title: "Social Media", href: "/services/social-media", description: "Facebook, Instagram, Yelp", icon: Share2 },
  { title: "GEO", href: "/services/geo-optimization", description: "AI search optimization", icon: Globe },
  { title: "AI SEO", href: "/services/ai-seo", description: "AI-powered SEO", icon: BrainCircuit }
];

// Resource category metadata for dropdown
const resourceCategoryItems = [
  { title: "Web Development", description: "Maintenance, platforms & launches", icon: Code2, category: "Web Development" },
  { title: "SEO & Search", description: "Rankings, local SEO & Google Business", icon: Search, category: "SEO & Search" },
  { title: "AI SEO & GEO", description: "AI search, ChatGPT & Perplexity", icon: BrainCircuit, category: "AI SEO & GEO" },
  { title: "Social Media", description: "Strategy, content & engagement", icon: Share2, category: "Social Media" },
  { title: "Digital Strategy", description: "Trends, planning & growth", icon: Zap, category: "Digital Strategy" },
].map(item => {
  const newest = getNewestResourceByCategory(item.category);
  return {
    ...item,
    slug: getCategorySlug(item.category),
    count: resources.filter(r => r.category === item.category).length,
    newestArticle: newest ? { title: newest.title, slug: newest.slug, date: newest.publishDate } : null,
  };
});

interface NavigationProps {
  currentPage?: 'home' | 'portfolio' | 'project' | 'resources';
}

export default function Navigation({ currentPage = 'home' }: NavigationProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const closeMobile = () => {
    setIsMobileOpen(false);
    setMobileAccordion(null);
  };

  const toggleMobileAccordion = (section: string) => {
    setMobileAccordion(prev => prev === section ? null : section);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="relative z-50 group"
            >
              <Image
                src="/logo.png"
                alt="DustinTN"
                width={120}
                height={63}
                className="transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 border border-white/10">
              {/* Home */}
              <Link
                href="/"
                className={`nav-link-new ${currentPage === 'home' ? 'nav-link-active' : ''}`}
              >
                Home
              </Link>

              {/* About */}
              <Link
                href="/about"
                className="nav-link-new"
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="/services" className={`nav-link-new flex items-center gap-1 ${activeDropdown === 'services' ? 'text-accent' : ''}`}>
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180 text-accent' : ''}`} />
                </Link>

                {/* Services Dropdown Menu */}
                <div className={`absolute top-full left-0 pt-4 transition-all duration-300 ${
                  activeDropdown === 'services'
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}>
                  <div className="bg-dark-gray/95 backdrop-blur-xl rounded-2xl border border-white/10 p-4 min-w-[480px] shadow-2xl shadow-black/50">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/10">
                      <span className="text-xs font-medium text-white/40 uppercase tracking-wider">Our Services</span>
                      <Link
                        href="/services"
                        className="text-xs text-accent hover:text-accent-hover transition-colors flex items-center gap-1"
                      >
                        View All
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    {/* Service Items */}
                    <div className="grid grid-cols-2 gap-1">
                      {serviceItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="flex items-start gap-3 p-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 flex-shrink-0 mt-0.5">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-sm font-medium group-hover:text-accent transition-colors block">{item.title}</span>
                            <span className="text-xs text-white/40 mt-0.5 block">{item.description}</span>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Footer CTA */}
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <Link
                        href="/contact"
                        className="flex items-center justify-center gap-2 w-full py-2.5 bg-accent/10 hover:bg-accent text-accent hover:text-white rounded-xl text-sm font-medium transition-all duration-300"
                      >
                        Get a Quote
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Portfolio Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('portfolio')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/portfolio"
                  className={`nav-link-new flex items-center gap-1 ${currentPage === 'portfolio' || currentPage === 'project' ? 'nav-link-active' : ''} ${activeDropdown === 'portfolio' ? 'text-accent' : ''}`}
                >
                  Portfolio
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'portfolio' ? 'rotate-180 text-accent' : ''}`} />
                </Link>

                {/* Portfolio Dropdown Menu */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                  activeDropdown === 'portfolio'
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}>
                  <div className="bg-dark-gray/95 backdrop-blur-xl rounded-2xl border border-white/10 p-4 min-w-[320px] shadow-2xl shadow-black/50">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                      <span className="text-xs font-medium text-white/40 uppercase tracking-wider">Categories</span>
                      <Link
                        href="/portfolio"
                        className="text-xs text-accent hover:text-accent-hover transition-colors flex items-center gap-1"
                      >
                        View All
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    {/* Category Items */}
                    <div className="space-y-1">
                      {portfolioCategories.map((category, index) => (
                        <Link
                          key={index}
                          href={category.href}
                          className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 flex-shrink-0">
                            <span className="text-lg font-light">{category.icon}</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-white group-hover:text-accent transition-colors">
                              {category.title}
                            </div>
                            <div className="text-xs text-white/40 mt-0.5">
                              {category.description}
                            </div>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all duration-200 mt-1" />
                        </Link>
                      ))}
                    </div>

                    {/* Footer CTA */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <Link
                        href="/contact"
                        className="flex items-center justify-center gap-2 w-full py-2.5 bg-accent/10 hover:bg-accent text-accent hover:text-white rounded-xl text-sm font-medium transition-all duration-300"
                      >
                        Start Your Project
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/resources"
                  className={`nav-link-new flex items-center gap-1 ${currentPage === 'resources' ? 'nav-link-active' : ''} ${activeDropdown === 'resources' ? 'text-accent' : ''}`}
                >
                  Resources
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'resources' ? 'rotate-180 text-accent' : ''}`} />
                </Link>

                {/* Resources Dropdown Menu */}
                <div className={`absolute top-full right-0 pt-4 transition-all duration-300 ${
                  activeDropdown === 'resources'
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}>
                  <div className="bg-dark-gray/95 backdrop-blur-xl rounded-2xl border border-white/10 p-4 min-w-[320px] shadow-2xl shadow-black/50">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                      <span className="text-xs font-medium text-white/40 uppercase tracking-wider">Free Resources</span>
                      <Link
                        href="/resources"
                        className="text-xs text-accent hover:text-accent-hover transition-colors flex items-center gap-1"
                      >
                        View All
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    {/* Category Items */}
                    <div className="space-y-1">
                      {resourceCategoryItems.map((item) => (
                        <div key={item.category}>
                          <Link
                            href={`/resources/${item.slug}`}
                            className="flex items-start gap-4 p-3 pb-1 rounded-xl hover:bg-white/5 transition-all duration-200 group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 flex-shrink-0">
                              <item.icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-white group-hover:text-accent transition-colors">
                                {item.title}
                              </div>
                              <div className="text-xs text-white/40 mt-0.5">
                                {item.description}
                              </div>
                            </div>
                            <span className="text-xs text-white/30 mt-1">{item.count}</span>
                          </Link>
                          {item.newestArticle && (
                            <Link
                              href={`/resources/${item.newestArticle.slug}`}
                              className="flex items-center gap-2 ml-[3.5rem] px-3 pb-3 pt-1 group/article"
                            >
                              <span className="text-[11px] text-white/30 group-hover/article:text-accent transition-colors truncate flex-1">
                                {item.newestArticle.title}
                              </span>
                              <span className="text-[10px] text-white/20 flex-shrink-0">
                                {item.newestArticle.date}
                              </span>
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Footer CTA */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <Link
                        href="/free-consultation"
                        className="flex items-center justify-center gap-2 w-full py-2.5 bg-accent/10 hover:bg-accent text-accent hover:text-white rounded-xl text-sm font-medium transition-all duration-300"
                      >
                        Free 30-Min Consultation
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <Link
                href="/contact"
                className="nav-link-new"
              >
                Contact
              </Link>
            </div>

            {/* Desktop CTA Button */}
            <Link
              href="/free-consultation"
              className="hidden md:inline-flex btn-pill btn-pill-primary text-xs group overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center gap-2">
                Free Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden relative z-50 w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="relative w-5 h-5">
                <Menu className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${isMobileOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
                <X className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${isMobileOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={closeMobile}
        />

        {/* Menu Panel */}
        <div
          className={`absolute inset-x-0 top-0 bg-black border-b border-white/10 transition-all duration-500 ease-out ${
            isMobileOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {/* Spacer for nav bar height */}
          <div className="h-20" />

          <div className="px-6 pb-8 pt-4 max-h-[calc(100dvh-5rem)] overflow-y-auto">
            <div className="space-y-1">
              {/* Home */}
              <Link
                href="/"
                onClick={closeMobile}
                className={`flex items-center justify-between px-4 py-4 rounded-xl text-lg font-medium transition-colors ${
                  currentPage === 'home' ? 'text-accent bg-accent/10' : 'text-white hover:bg-white/5'
                }`}
              >
                Home
              </Link>

              {/* About */}
              <Link
                href="/about"
                onClick={closeMobile}
                className="flex items-center justify-between px-4 py-4 rounded-xl text-lg font-medium text-white hover:bg-white/5 transition-colors"
              >
                About
              </Link>

              {/* Services Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileAccordion('services')}
                  className="flex items-center justify-between w-full px-4 py-4 rounded-xl text-lg font-medium text-white hover:bg-white/5 transition-colors"
                >
                  Services
                  <ChevronDown className={`w-5 h-5 text-white/40 transition-transform duration-300 ${mobileAccordion === 'services' ? 'rotate-180 text-accent' : ''}`} />
                </button>

                <div className={`overflow-hidden transition-all duration-300 ease-out ${
                  mobileAccordion === 'services' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pl-4 pr-2 pb-2 space-y-1">
                    <Link
                      href="/services"
                      onClick={closeMobile}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-accent text-sm font-medium hover:bg-accent/10 transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                      View All Services
                    </Link>
                    {serviceItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={closeMobile}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-sm font-medium text-white/80 block">{item.title}</span>
                          <span className="text-xs text-white/40">{item.description}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Portfolio Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileAccordion('portfolio')}
                  className={`flex items-center justify-between w-full px-4 py-4 rounded-xl text-lg font-medium transition-colors ${
                    currentPage === 'portfolio' || currentPage === 'project' ? 'text-accent bg-accent/10' : 'text-white hover:bg-white/5'
                  }`}
                >
                  Portfolio
                  <ChevronDown className={`w-5 h-5 text-white/40 transition-transform duration-300 ${mobileAccordion === 'portfolio' ? 'rotate-180 text-accent' : ''}`} />
                </button>

                <div className={`overflow-hidden transition-all duration-300 ease-out ${
                  mobileAccordion === 'portfolio' ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pl-4 pr-2 pb-2 space-y-1">
                    <Link
                      href="/portfolio"
                      onClick={closeMobile}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-accent text-sm font-medium hover:bg-accent/10 transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                      View All Projects
                    </Link>
                    {portfolioCategories.map((category, index) => (
                      <Link
                        key={index}
                        href={category.href}
                        onClick={closeMobile}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                          <span className="text-sm font-light">{category.icon}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-white/80 block">{category.title}</span>
                          <span className="text-xs text-white/40">{category.description}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Resources Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileAccordion('resources')}
                  className={`flex items-center justify-between w-full px-4 py-4 rounded-xl text-lg font-medium transition-colors ${
                    currentPage === 'resources' ? 'text-accent bg-accent/10' : 'text-white hover:bg-white/5'
                  }`}
                >
                  Resources
                  <ChevronDown className={`w-5 h-5 text-white/40 transition-transform duration-300 ${mobileAccordion === 'resources' ? 'rotate-180 text-accent' : ''}`} />
                </button>

                <div className={`overflow-hidden transition-all duration-300 ease-out ${
                  mobileAccordion === 'resources' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pl-4 pr-2 pb-2 space-y-1">
                    <Link
                      href="/resources"
                      onClick={closeMobile}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-accent text-sm font-medium hover:bg-accent/10 transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                      View All Resources
                    </Link>
                    {resourceCategoryItems.map((item) => (
                      <div key={item.category}>
                        <Link
                          href={`/resources/${item.slug}`}
                          onClick={closeMobile}
                          className="flex items-center gap-3 px-4 py-3 pb-1 rounded-xl hover:bg-white/5 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-white/80 block">{item.title}</span>
                            <span className="text-xs text-white/40">{item.description}</span>
                          </div>
                        </Link>
                        {item.newestArticle && (
                          <Link
                            href={`/resources/${item.newestArticle.slug}`}
                            onClick={closeMobile}
                            className="flex items-center gap-2 ml-[3.25rem] px-4 pb-2 pt-1"
                          >
                            <span className="text-[11px] text-white/30 truncate flex-1">
                              {item.newestArticle.title}
                            </span>
                            <span className="text-[10px] text-white/20 flex-shrink-0">
                              {item.newestArticle.date}
                            </span>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact */}
              <Link
                href="/contact"
                onClick={closeMobile}
                className="flex items-center justify-between px-4 py-4 rounded-xl text-lg font-medium text-white hover:bg-white/5 transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Mobile CTA */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <Link
                href="/free-consultation"
                onClick={closeMobile}
                className="btn-pill btn-pill-primary w-full justify-center group"
              >
                Free 30-Min Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
