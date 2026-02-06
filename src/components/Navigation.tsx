'use client';

import { useState } from "react";
import { ChevronDown, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const portfolioCategories = [
  {
    title: "Medical & Chiropractic",
    description: "Healthcare websites that build trust",
    href: "/portfolio/pinnacle-health-choice",
    icon: "+"
  },
  {
    title: "Personal Training",
    description: "Fitness platforms that inspire",
    href: "/portfolio/fine-assets",
    icon: "+"
  },
  {
    title: "Adaptive & Inclusive Fitness",
    description: "Accessible fitness experiences",
    href: "/portfolio/champions-adaptive-fitness",
    icon: "+"
  }
];

const serviceItems = [
  { title: "Web Development", href: "/services/web-development", description: "Custom websites & apps" },
  { title: "Brand Identity", href: "/services/brand-identity", description: "Logos & visual identity" },
  { title: "SEO & Content", href: "/services/seo-content", description: "Search optimization" },
  { title: "Web Consulting", href: "/services/web-consulting", description: "Expert guidance" },
  { title: "Social Media", href: "/services/social-media", description: "Facebook, Instagram, Yelp" },
  { title: "Digital Strategy", href: "/services/digital-strategy", description: "Growth roadmaps" }
];

interface NavigationProps {
  currentPage?: 'home' | 'portfolio' | 'project';
}

export default function Navigation({ currentPage = 'home' }: NavigationProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-semibold tracking-tight group"
          >
            <span className="inline-block transition-transform duration-300 group-hover:scale-105">
              DustinTN<span className="text-accent">.</span>
            </span>
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
            <a
              href="/#about"
              className="nav-link-new"
            >
              About
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`nav-link-new flex items-center gap-1 ${activeDropdown === 'services' ? 'text-accent' : ''}`}>
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180 text-accent' : ''}`} />
              </button>

              {/* Services Dropdown Menu */}
              <div className={`absolute top-full left-0 pt-4 transition-all duration-300 ${
                activeDropdown === 'services'
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}>
                <div className="bg-dark-gray/95 backdrop-blur-xl rounded-2xl border border-white/10 p-4 min-w-[320px] shadow-2xl shadow-black/50">
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
                        className="flex flex-col p-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 group"
                      >
                        <span className="text-sm font-medium group-hover:text-accent transition-colors">{item.title}</span>
                        <span className="text-xs text-white/40 mt-0.5">{item.description}</span>
                      </Link>
                    ))}
                  </div>

                  {/* Footer CTA */}
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <Link
                      href="/#contact"
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
                      href="/#contact"
                      className="flex items-center justify-center gap-2 w-full py-2.5 bg-accent/10 hover:bg-accent text-accent hover:text-white rounded-xl text-sm font-medium transition-all duration-300"
                    >
                      Start Your Project
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <a
              href="/#contact"
              className="nav-link-new"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <Link
            href="/#contact"
            className="btn-pill btn-pill-primary text-xs group overflow-hidden relative"
          >
            <span className="relative z-10 flex items-center gap-2">
              Let's Talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
