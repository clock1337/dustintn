'use client';

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";

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

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@dustintn.com",
    link: "mailto:hello@dustintn.com",
    description: "We'll respond within 24 hours"
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "(615) 555-1234",
    link: "tel:+16155551234",
    description: "Mon-Fri, 9am-5pm CST"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Middle Tennessee",
    link: null,
    description: "Serving Nashville & surrounding areas"
  }
];

const faqs = [
  {
    question: "How long does a typical website project take?",
    answer: "Most website projects take 4-8 weeks depending on complexity. We'll provide a detailed timeline during our initial consultation based on your specific needs."
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes! We offer various maintenance packages to keep your site secure, updated, and performing optimally. We're here for you long after launch."
  },
  {
    question: "What areas do you serve?",
    answer: "We primarily serve businesses in Nashville, Hendersonville, Gallatin, Goodlettsville, and throughout Middle Tennessee. We also work with clients nationwide."
  },
  {
    question: "How much does a website cost?",
    answer: "Every project is unique. We provide custom quotes based on your specific requirements. Contact us for a free consultation and estimate."
  }
];

const services = [
  "New Website Design",
  "Website Redesign",
  "E-commerce Development",
  "SEO Services",
  "Brand Identity",
  "Digital Marketing",
  "Website Maintenance",
  "Other"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
              <span className="section-label mb-6 block">Contact Us</span>
              <h1 className="text-headline mb-8">
                Let's Start a <span className="text-accent">Conversation</span>
              </h1>
              <p className="text-xl text-white/50 leading-relaxed">
                Ready to take your business to the next level? We'd love to hear from you.
                Get in touch and let's discuss how we can help you achieve your digital goals.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="p-8 bg-dark-gray rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 h-full">
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                      <info.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="text-xl text-accent hover:underline block mb-2">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-xl text-white mb-2">{info.value}</p>
                    )}
                    <p className="text-white/40 text-sm">{info.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <AnimatedSection>
                <div className="bg-black rounded-2xl p-8 lg:p-10 border border-white/5">
                  <h2 className="text-2xl font-semibold mb-2">Send Us a Message</h2>
                  <p className="text-white/50 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-accent" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">Message Sent!</h3>
                      <p className="text-white/50 mb-8">Thank you for reaching out. We'll be in touch soon.</p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' });
                        }}
                        className="btn-pill btn-pill-outline"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="w-full px-4 py-3 bg-dark-gray border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 bg-dark-gray border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(615) 555-1234"
                            className="w-full px-4 py-3 bg-dark-gray border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Company</label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company"
                            className="w-full px-4 py-3 bg-dark-gray border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Service Interested In</label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-dark-gray border border-white/10 rounded-xl text-white focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-dark-gray">Select a service</option>
                            {services.map((service, index) => (
                              <option key={index} value={service} className="bg-dark-gray">{service}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Budget Range</label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-dark-gray border border-white/10 rounded-xl text-white focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-dark-gray">Select budget</option>
                            <option value="under-5k" className="bg-dark-gray">Under $5,000</option>
                            <option value="5k-10k" className="bg-dark-gray">$5,000 - $10,000</option>
                            <option value="10k-25k" className="bg-dark-gray">$10,000 - $25,000</option>
                            <option value="25k-plus" className="bg-dark-gray">$25,000+</option>
                            <option value="not-sure" className="bg-dark-gray">Not Sure</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Message *</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us about your project..."
                          className="w-full px-4 py-3 bg-dark-gray border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-pill btn-pill-primary w-full justify-center group"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>

              {/* Info Side */}
              <div>
                <AnimatedSection delay={200}>
                  <div className="bg-black rounded-2xl p-8 lg:p-10 border border-white/5 mb-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Business Hours</h3>
                        <p className="text-white/50 text-sm">When we're available</p>
                      </div>
                    </div>
                    <div className="space-y-3 text-white/70">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="text-white">9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="text-white">By Appointment</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="text-white/40">Closed</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={300}>
                  <div className="bg-accent/10 rounded-2xl p-8 lg:p-10 border border-accent/20">
                    <MessageSquare className="w-10 h-10 text-accent mb-6" />
                    <h3 className="text-xl font-semibold mb-4">Free Consultation</h3>
                    <p className="text-white/60 mb-6">
                      Not sure where to start? Schedule a free 30-minute consultation call.
                      We'll discuss your goals and provide recommendations tailored to your business.
                    </p>
                    <a href="mailto:hello@dustintn.com?subject=Free Consultation Request" className="btn-pill btn-pill-primary">
                      Schedule a Call
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-16">
              <span className="section-label mb-6 inline-flex justify-center">FAQ</span>
              <h2 className="text-headline">
                Common <span className="text-accent">Questions</span>
              </h2>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <AnimatedSection key={index} delay={index * 100}>
                    <div className="bg-dark-gray rounded-2xl p-8 border border-white/5">
                      <h3 className="text-lg font-semibold mb-4">{faq.question}</h3>
                      <p className="text-white/50 leading-relaxed">{faq.answer}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center">
              <h2 className="text-2xl font-semibold mb-8">
                Proudly Serving <span className="text-accent">Middle Tennessee</span>
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {['Nashville', 'Hendersonville', 'Gallatin', 'Goodlettsville', 'Mount Juliet', 'Lebanon', 'Franklin', 'Murfreesboro', 'Smyrna', 'La Vergne'].map((city, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 bg-black rounded-full text-white/70 border border-white/10"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
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
                <h4 className="font-semibold mb-6">Get in Touch</h4>
                <ul className="space-y-4 text-sm text-white/40">
                  <li><a href="mailto:hello@dustintn.com" className="hover:text-accent transition-colors">hello@dustintn.com</a></li>
                  <li><a href="tel:+16155551234" className="hover:text-accent transition-colors">(615) 555-1234</a></li>
                  <li>Middle Tennessee</li>
                </ul>
              </div>
            </div>

            <div className="divider mb-8"></div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/30 text-sm">&copy; {new Date().getFullYear()} DustinTN. All rights reserved.</p>
              <p className="text-white/30 text-sm">Crafted with care in Middle Tennessee</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
