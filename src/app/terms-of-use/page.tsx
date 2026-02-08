'use client';

import { useState, useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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

const sections = [
  {
    heading: "1. Acceptance of Terms",
    content: "By accessing and using the DustinTN website (dustintn.com), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website. We reserve the right to modify these terms at any time, and your continued use of the site following any changes constitutes acceptance of those changes."
  },
  {
    heading: "2. Use of Website",
    content: "You may use this website for lawful purposes only. You agree not to use the site in any way that could damage, disable, or impair the website or interfere with any other party's use of the site. You may not attempt to gain unauthorized access to any part of the website, other accounts, computer systems, or networks connected to the website."
  },
  {
    heading: "3. Intellectual Property",
    content: "All content on this website, including but not limited to text, graphics, logos, images, designs, and software, is the property of DustinTN and is protected by United States and international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on this site without our express written permission."
  },
  {
    heading: "4. Services and Pricing",
    content: "Information about our services and pricing provided on this website is for general informational purposes only. All services are subject to availability and may be modified or discontinued at any time. Specific pricing, timelines, and deliverables will be outlined in individual project agreements between DustinTN and the client."
  },
  {
    heading: "5. Client Projects and Portfolio",
    content: "Project examples and case studies displayed in our portfolio are presented with client permission. Results described in case studies are specific to those particular projects and do not guarantee similar results for other clients. Each project is unique and outcomes depend on various factors."
  },
  {
    heading: "6. Third-Party Links",
    content: "Our website may contain links to third-party websites or services that are not owned or controlled by DustinTN. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. We encourage you to review the terms and privacy policies of any third-party sites you visit."
  },
  {
    heading: "7. Limitation of Liability",
    content: "DustinTN provides this website and its contents on an \"as is\" basis. We make no warranties, expressed or implied, regarding the accuracy, completeness, or reliability of any information on this site. In no event shall DustinTN be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of this website."
  },
  {
    heading: "8. Indemnification",
    content: "You agree to indemnify and hold harmless DustinTN, its owners, employees, and affiliates from any claims, damages, losses, or expenses arising from your use of this website or your violation of these Terms of Use."
  },
  {
    heading: "9. Governing Law",
    content: "These Terms of Use shall be governed by and construed in accordance with the laws of the State of Tennessee, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the courts located in Middle Tennessee."
  },
  {
    heading: "10. Contact Information",
    content: "If you have any questions about these Terms of Use, please contact us at hello@dustintn.com or call (615) 788-2453."
  },
];

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />

      <main>
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-dark-gray"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-full text-white/80 hover:text-white hover:bg-accent transition-all duration-300 border border-white/10 hover:border-accent mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Home</span>
            </Link>

            <AnimatedSection className="max-w-3xl">
              <h1 className="text-headline mb-6">Terms of Use</h1>
              <p className="text-white/50 text-lg">
                Last updated: February 2026
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              {sections.map((section, index) => (
                <AnimatedSection key={index} className="mb-12 last:mb-0">
                  <h2 className="text-xl font-semibold mb-4">{section.heading}</h2>
                  <p className="text-white/60 leading-relaxed">{section.content}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
