'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 bg-dark-gray border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <Link href="/" className="text-2xl font-semibold tracking-tight mb-6 block">
              DustinTN<span className="text-accent">.</span>
            </Link>
            <p className="text-white/40 leading-relaxed mb-6">
              Building digital solutions for businesses across Nashville, Hendersonville, Gallatin, and Middle Tennessee since 2004.
            </p>
            <div className="flex gap-3">
              {['Tw', 'Li', 'Ig', 'Dr'].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-dark rounded-lg flex items-center justify-center text-white/40 hover:bg-accent hover:text-white transition-all duration-300"
                >
                  <span className="text-xs font-medium">{social}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-accent transition-colors">Work</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><Link href="/services/web-development" className="hover:text-accent transition-colors">Web Development</Link></li>
              <li><Link href="/services/brand-identity" className="hover:text-accent transition-colors">Brand Identity</Link></li>
              <li><Link href="/services/social-media" className="hover:text-accent transition-colors">Social Media</Link></li>
              <li><Link href="/services/web-consulting" className="hover:text-accent transition-colors">Consulting</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-semibold mb-6">Ready to start?</h4>
            <p className="text-white/40 text-sm mb-6">Get in touch and let's discuss your next project.</p>
            <Link href="/contact" className="btn-pill btn-pill-primary text-xs">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="divider mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">© {new Date().getFullYear()} DustinTN. All rights reserved.</p>
          <p className="text-white/30 text-sm">Crafted with care in Middle Tennessee</p>
        </div>
      </div>
    </footer>
  );
}
