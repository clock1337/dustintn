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
    heading: "1. Information We Collect",
    content: "We collect information that you voluntarily provide to us through our website forms, including your name, email address, phone number, company name, and any messages you submit through our contact or consultation forms. We also automatically collect certain technical information when you visit our website, including your IP address, browser type, device type, pages visited, and time spent on each page."
  },
  {
    heading: "2. How We Use Your Information",
    content: "We use the information we collect to respond to your inquiries and service requests, provide and improve our web development and digital marketing services, send you relevant communications about our services if you have opted in, analyze website usage to improve user experience, and comply with legal obligations.",
    list: [
      "Respond to your inquiries and consultation requests",
      "Provide quotes and proposals for our services",
      "Communicate about project updates and deliverables",
      "Improve our website performance and user experience",
      "Send occasional updates about our services (with your consent)",
    ]
  },
  {
    heading: "3. Analytics and Cookies",
    content: "We use Vercel Analytics to understand how visitors interact with our website. This service collects anonymous usage data such as page views, visit duration, and general geographic location. This data helps us improve our website and services. We do not use this data to personally identify individual visitors. Our analytics are privacy-focused and do not use cookies for tracking purposes."
  },
  {
    heading: "4. Information Sharing",
    content: "We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances: with service providers who assist us in operating our website and delivering services (such as hosting providers), when required by law or to respond to legal process, or to protect our rights, property, or safety."
  },
  {
    heading: "5. Data Security",
    content: "We take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Our website uses HTTPS encryption to protect data transmitted between your browser and our servers. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security of your data."
  },
  {
    heading: "6. Third-Party Services",
    content: "Our website may contain links to third-party websites or integrate with third-party services such as Google Fonts, Unsplash images, and social media platforms. These third parties have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of third-party services."
  },
  {
    heading: "7. Your Rights",
    content: "You have the right to request access to the personal information we hold about you, request correction of any inaccurate information, request deletion of your personal information, opt out of any marketing communications, and withdraw consent for data processing at any time. To exercise any of these rights, please contact us using the information provided below."
  },
  {
    heading: "8. Children's Privacy",
    content: "Our website and services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us and we will promptly delete the information."
  },
  {
    heading: "9. Changes to This Policy",
    content: "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will post the updated policy on this page with a revised \"Last updated\" date. We encourage you to review this policy periodically to stay informed about how we protect your information."
  },
  {
    heading: "10. Contact Us",
    content: "If you have any questions about this Privacy Policy or our data practices, please contact us at hello@dustintn.com or call (615) 788-2453. You can also reach us through our contact page at dustintn.com/contact."
  },
];

export default function PrivacyPolicyPage() {
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
              <h1 className="text-headline mb-6">Privacy Policy</h1>
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
                  <p className="text-white/60 leading-relaxed mb-4">{section.content}</p>
                  {'list' in section && section.list && (
                    <ul className="space-y-2">
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

        <Footer />
      </main>
    </div>
  );
}
