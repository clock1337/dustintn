import { ArrowRight, CheckCircle2, Video, Phone, Clock, Globe, Search, Wrench, Share2, Calendar, HelpCircle, MessageSquare, Shield, Users, BrainCircuit, Palette } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import ProudlyServing from "@/components/ProudlyServing";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ConsultationForm from "@/components/ConsultationForm";

const coverTopics = [
  { icon: Globe, title: "Getting Online", description: "Planning your website and digital presence from scratch" },
  { icon: Search, title: "SEO & Search", description: "Getting found on Google by the customers looking for you" },
  { icon: Wrench, title: "Maintenance", description: "Keeping your existing website secure, fast, and up to date" },
  { icon: Share2, title: "Social Media", description: "Building a strategy that connects you with your community" },
  { icon: Calendar, title: "Monthly Retainer", description: "Ongoing webmaster services so you can focus on your business" },
  { icon: BrainCircuit, title: "AI & GEO Search", description: "Getting cited by ChatGPT, Perplexity, and AI search engines" },
  { icon: HelpCircle, title: "General Guidance", description: "Any digital question — no topic is too basic or too niche" },
  { icon: Palette, title: "Brand & Identity", description: "Logos, visual identity, and making your brand stand out online" },
];

const steps = [
  {
    number: "01",
    title: "Fill out the form",
    description: "Tell us a bit about your business and what you need help with. Takes about 2 minutes.",
  },
  {
    number: "02",
    title: "We reach out",
    description: "We'll email or call you within 24 hours to schedule a time that works for your schedule.",
  },
  {
    number: "03",
    title: "We talk it through",
    description: "30 minutes on Google Meet or phone. We listen, ask questions, and give you honest direction.",
  },
];

const faqs = [
  {
    question: "Is this really free? What's the catch?",
    answer: "Genuinely free, no strings attached. We believe in building relationships first. If you need help after the call, great — we'll share options. If not, you still walk away with actionable advice.",
  },
  {
    question: "What should I prepare before the call?",
    answer: "Nothing fancy. Just have a sense of what you want to accomplish online — whether that's a new website, better search visibility, or just a general direction. We'll guide the conversation from there.",
  },
  {
    question: "How long until I hear back after submitting the form?",
    answer: "We typically respond within 24 hours on business days. We'll reach out via your preferred contact method to find a time that works.",
  },
  {
    question: "Can I book a call if I already have a website?",
    answer: "Absolutely. Many calls are with business owners who already have a site but want help improving it — whether that's SEO, speed, design updates, or ongoing maintenance.",
  },
  {
    question: "Do you only work with businesses in Tennessee?",
    answer: "I'm based in Nashville and primarily serve Nashville, Hendersonville, Gallatin, and surrounding areas — but I've built websites for businesses in California, North Carolina, Texas, and beyond. The call is open to anyone.",
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function FreeConsultationPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-dark-gray"></div>
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[150px]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <AnimatedSection>
                <span className="section-label mb-6 block">100% Free, Zero Obligation</span>
                <h1 className="text-headline mb-6">
                  Free 30-Minute <span className="text-accent">Exploratory Call</span>
                </h1>
                <p className="text-xl text-white/50 leading-relaxed mb-8">
                  Not sure where to start with your online presence? Let&apos;s talk it through together.
                  A friendly, no-pressure conversation about your business and where digital can take it.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                    <Video className="w-4 h-4 text-accent" />
                    <span className="text-sm text-white/70">Google Meet</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                    <Phone className="w-4 h-4 text-accent" />
                    <span className="text-sm text-white/70">Phone Call</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="text-sm text-white/70">30 Minutes</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 text-sm text-white/40">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    No sales pitch
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    No obligation
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    Real advice you can use
                  </span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="relative">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                      alt="Friendly business consultation on a video call"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -left-4 bg-accent rounded-2xl px-6 py-4 shadow-xl shadow-accent/20">
                    <div className="text-2xl font-semibold">20+</div>
                    <div className="text-sm text-white/80">Years Experience</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-16">
              <span className="section-label mb-6 inline-flex justify-center">Simple Process</span>
              <h2 className="text-headline">
                How It <span className="text-accent">Works</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <AnimatedSection key={index} delay={index * 150}>
                  <div className="relative text-center">
                    {/* Connector line */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-accent/30 to-transparent"></div>
                    )}
                    <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-accent/20">
                      <span className="text-2xl font-semibold text-accent">{step.number}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* What We Can Cover */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-12">
              <span className="section-label mb-6 inline-flex justify-center">Topics We Cover</span>
              <h2 className="text-headline mb-6">
                Whatever&apos;s on Your <span className="text-accent">Mind</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
                Every business is different. Whether you&apos;re starting from zero or looking to level up
                what you already have, I&apos;ll tailor the conversation to where you are right now.
                No question is too basic — if it matters to your business, it matters to me.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {coverTopics.map((topic, index) => (
                <AnimatedSection key={index} delay={index * 75}>
                  <div className="p-5 bg-dark-gray rounded-2xl border border-white/5 hover:border-accent/20 transition-all duration-300 group h-full">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <topic.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-semibold mb-1 text-sm">{topic.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed">{topic.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="book" className="py-24 bg-dark-gray relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[200px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[150px]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left — Context + image */}
              <AnimatedSection>
                <span className="section-label mb-6 block">Book Your Call</span>
                <h2 className="text-headline mb-6">
                  Ready to <span className="text-accent">Get Started?</span>
                </h2>
                <p className="text-white/50 text-lg leading-relaxed mb-8">
                  Fill out the form and we&apos;ll reach out within 24 hours to find a time that works.
                  The more you share, the more value we can pack into our 30 minutes together.
                </p>

                <div className="aspect-[16/10] relative overflow-hidden rounded-2xl mb-8">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                    alt="Collaborative business meeting discussion"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/80 via-transparent to-transparent"></div>
                </div>

                {/* Trust signals */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-black/50 rounded-xl border border-white/5">
                    <Shield className="w-6 h-6 text-accent mx-auto mb-2" />
                    <div className="text-xs text-white/50">No Obligation</div>
                  </div>
                  <div className="text-center p-4 bg-black/50 rounded-xl border border-white/5">
                    <Users className="w-6 h-6 text-accent mx-auto mb-2" />
                    <div className="text-xs text-white/50">All Businesses Welcome</div>
                  </div>
                  <div className="text-center p-4 bg-black/50 rounded-xl border border-white/5">
                    <MessageSquare className="w-6 h-6 text-accent mx-auto mb-2" />
                    <div className="text-xs text-white/50">Honest Advice</div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Right — Form */}
              <AnimatedSection delay={200}>
                <div className="bg-black rounded-2xl p-8 lg:p-10 border border-white/5 sticky top-28">
                  <h3 className="text-xl font-semibold mb-2">Book Your Free Call</h3>
                  <p className="text-white/50 text-sm mb-8">Takes about 2 minutes. We&apos;ll handle the rest.</p>
                  <ConsultationForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-16">
              <span className="section-label mb-6 inline-flex justify-center">Questions?</span>
              <h2 className="text-headline">
                Frequently <span className="text-accent">Asked</span>
              </h2>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto space-y-6">
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
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-dark-gray relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.1),transparent_70%)]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <h2 className="text-headline mb-6">
                The Worst That Can Happen? You Get <span className="text-accent">Free Advice.</span>
              </h2>
              <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
                30 minutes. Zero cost. Real, honest guidance for your business.
                No matter where you are in your digital journey.
              </p>
              <a href="#book" className="btn-pill btn-pill-primary group">
                Book My Free Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </AnimatedSection>
          </div>
        </section>

        <ProudlyServing />
        <Footer />
      </main>
    </div>
  );
}
