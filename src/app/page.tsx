import { ArrowRight, ArrowUpRight, Code2, Palette, MessageSquare, Zap, Mail, Phone, MapPin, Play, Users, Share2, Video, Clock, CheckCircle2, Globe, Search, Wrench, Calendar, HelpCircle, BrainCircuit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import ScrollingScreenshot from "@/components/ScrollingScreenshot";
import ProudlyServing from "@/components/ProudlyServing";
import ResourceSnippets from "@/components/ResourceSnippets";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    slug: "web-development",
    icon: Code2,
    title: "Web Development",
    description: "I build custom websites in Next.js and React — from fitness coaching platforms to healthcare portals. Each one is hand-coded for speed, not pieced together from templates.",
    image: "/screenshots/fine-assets.png"
  },
  {
    slug: "brand-identity",
    icon: Palette,
    title: "Brand Identity",
    description: "I've designed brand systems for hospitality companies, fitness studios, and healthcare practices. Your brand should feel like you — not a stock template with your name on it.",
    image: "/screenshots/southern-collective-spirit-co.png"
  },
  {
    slug: "seo-content",
    icon: MessageSquare,
    title: "SEO & Content",
    description: "I helped Pinnacle Wellness go from invisible to filling new patient slots through search. Real SEO is about showing up when your customers are looking — and I know how to make that happen.",
    image: "/screenshots/pinnacle-health-choice.png"
  },
  {
    slug: "web-consulting",
    icon: Users,
    title: "Web Consulting",
    description: "Not sure what your business actually needs online? I've spent 20 years answering that question for real estate firms, restaurants, and service businesses. Let's figure it out together.",
    image: "/screenshots/coldwell-banker-commercial.png"
  },
  {
    slug: "social-media",
    icon: Share2,
    title: "Social Media",
    description: "I manage social media for businesses that need real engagement, not vanity metrics. From Southern Collective's event promotion to fitness studio class signups — posts that actually drive action.",
    image: "/screenshots/champions-adaptive-fitness.png"
  },
  {
    slug: "digital-strategy",
    icon: Zap,
    title: "Digital Strategy",
    description: "I connect the dots between your website, SEO, content, and social media into one plan that actually makes sense. No buzzwords — just a clear path from where you are to where you want to be.",
    image: "/screenshots/jobe-gutter-services.png"
  }
];

const portfolio = [
  { id: 1, slug: "fine-assets", title: "Fine Assets Personal Training", category: "Web Development", image: "/screenshots/fine-assets.png" },
  { id: 2, slug: "champions-adaptive-fitness", title: "Champions Adaptive Fitness", category: "Web Development", image: "/screenshots/champions-adaptive-fitness.png" },
  { id: 3, slug: "pinnacle-health-choice", title: "Pinnacle Wellness", category: "Healthcare", image: "/screenshots/pinnacle-health-choice.png" },
  { id: 4, slug: "southern-collective-spirit-co", title: "Southern Collective Spirit Co.", category: "Hospitality", image: "/screenshots/southern-collective-spirit-co.png" },
  { id: 5, slug: "coldwell-banker-commercial", title: "Coldwell Banker Commercial SC", category: "Real Estate", image: "/screenshots/coldwell-banker-commercial.png" },
  { id: 7, slug: "jobe-gutter-services", title: "Jobe Gutter Services", category: "Home Services", image: "/screenshots/jobe-gutter-services.png" },
];

const stats = [
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 50, suffix: "+", label: "Happy Clients" },
];

const testimonials = [
  {
    quote: "Since launching the new site, our online bookings have tripled. Dustin built exactly what we needed — a fast, clean platform that converts visitors into paying clients.",
    author: "Fine Assets Personal Training",
    role: "Fitness & Coaching — Nashville, TN",
    image: "/logos/fine-assets-logo.png"
  },
  {
    quote: "We went from almost zero online visibility to filling half our new patient slots through the website. The whole process was straightforward and the results speak for themselves.",
    author: "Pinnacle Wellness",
    role: "Healthcare — Hendersonville, TN",
    image: "/logos/pinnacle-health-choice.png"
  },
  {
    quote: "85% of our bookings now come through the website. Dustin understood our brand from day one and built something that actually works for our business — not just looks pretty.",
    author: "Southern Collective Spirit Co.",
    role: "Hospitality — Nashville, TN",
    image: "/logos/southern-collective-spirit-co.png"
  }
];

const reviewJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://dustintn.com/#business',
  name: 'DustinTN',
  review: testimonials.map((t) => ({
    '@type': 'Review',
    reviewBody: t.quote,
    author: {
      '@type': 'Organization',
      name: t.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: 5,
      bestRating: 5,
    },
  })),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
      <Navigation currentPage="home" />

      <main>
        {/* Hero Section */}
        <section className="flex items-center pt-32 pb-20 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-dark-gray"></div>
          <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[200px] animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="overflow-hidden mb-8">
                  <span
                    className="section-label block animate-slideUp"
                    style={{ animationDelay: '0.2s' }}
                  >
                    Web Development & Digital Services
                  </span>
                </div>

                <div className="overflow-hidden">
                  <h1 className="text-display mb-8">
                    <span className="block animate-slideUp" style={{ animationDelay: '0.3s' }}>Designing a</span>
                    <span className="block animate-slideUp" style={{ animationDelay: '0.4s' }}><span className="text-accent">Better</span> Digital</span>
                    <span className="block animate-slideUp" style={{ animationDelay: '0.5s' }}>World Today</span>
                  </h1>
                </div>

                <p className="text-xl text-white/50 max-w-xl mb-12 leading-relaxed animate-fadeIn" style={{ animationDelay: '0.7s' }}>
                  I craft distinctive websites and digital experiences for businesses across Nashville, Hendersonville, Gallatin, and beyond. Two decades of turning ideas into memorable online presences.
                </p>

                <div className="flex flex-wrap gap-4 animate-fadeIn" style={{ animationDelay: '0.9s' }}>
                  <a href="#services" className="btn-pill btn-pill-primary group">
                    What We Do
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#work" className="btn-pill btn-pill-outline group">
                    <Play className="w-4 h-4" />
                    View Work
                  </a>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
                    alt="Modern web development workspace"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-2xl animate-float">
                  <div className="text-4xl font-semibold">20+</div>
                  <div className="text-sm text-white/80">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator - positioned on left side */}
          <div className="absolute bottom-12 left-12 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-accent/50 flex items-center justify-center">
              <div className="w-2 h-2 bg-accent rounded-full scroll-indicator"></div>
            </div>
            <span className="text-sm text-white/80 font-medium uppercase tracking-[0.15em]">
              Scroll
            </span>
          </div>
        </section>

        {/* Free Consultation Section */}
        <section id="free-call" className="py-32 bg-dark-gray relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[200px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[150px]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <span className="section-label mb-6 block">Free — No Strings Attached</span>
                <h2 className="text-headline mb-6">
                  Free 30-Minute <span className="text-accent">Exploratory Call</span>
                </h2>
                <p className="text-white/50 text-lg leading-relaxed mb-8">
                  Not sure where to start with your online presence? Book a free call and let&apos;s talk it through.
                  Whether you need a website, better search visibility, or ongoing support — we&apos;ll give you honest direction.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: Globe, text: "Getting online" },
                    { icon: Search, text: "SEO & search" },
                    { icon: Wrench, text: "Website maintenance" },
                    { icon: Share2, text: "Social media" },
                    { icon: Calendar, text: "Monthly retainer" },
                    { icon: BrainCircuit, text: "GEO & AI search" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-white/60 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mb-10 text-sm text-white/40">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    No obligation
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    No pressure
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    20+ years experience
                  </span>
                </div>

                <Link href="/free-consultation" className="btn-pill btn-pill-primary group">
                  Book My Free Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                      alt="Friendly business consultation on a video call"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/60 via-transparent to-black/20"></div>

                    {/* Overlay badges */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex flex-wrap gap-2">
                        <span className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/10">
                          <Video className="w-3 h-3 text-accent" />
                          Google Meet
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/10">
                          <Phone className="w-3 h-3 text-accent" />
                          Phone Call
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/10">
                          <Clock className="w-3 h-3 text-accent" />
                          30 Minutes
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -top-4 -right-4 bg-accent rounded-2xl px-5 py-3 shadow-xl shadow-accent/20">
                    <div className="text-lg font-semibold">FREE</div>
                  </div>

                  {/* 3-step process */}
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    {[
                      { num: "1", label: "Fill out a quick form" },
                      { num: "2", label: "We schedule a time" },
                      { num: "3", label: "We talk it through" },
                    ].map((step, idx) => (
                      <div key={idx} className="text-center p-3 bg-black/50 rounded-xl border border-white/5">
                        <div className="w-7 h-7 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-1.5">
                          <span className="text-xs font-semibold text-accent">{step.num}</span>
                        </div>
                        <span className="text-xs text-white/50 leading-snug block">{step.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.05),transparent_70%)]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} delay={index * 100} className="text-center lg:text-left">
                  <div className="text-5xl lg:text-6xl font-semibold mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-white/40 uppercase tracking-wider">{stat.label}</div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* GEO & AI SEO Section */}
        <section className="py-32 bg-dark-gray relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[150px]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="text-center mb-16">
              <span className="section-label mb-6 inline-flex justify-center">The Future of Search</span>
              <h2 className="text-headline mb-6">
                Get found by <span className="text-accent">AI-powered</span> search
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Search is evolving beyond traditional results. AI engines like ChatGPT, Perplexity, and Google AI Overviews are changing how people discover businesses. We help you show up everywhere.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {/* GEO Card */}
              <AnimatedSection delay={100}>
                <div className="group p-8 lg:p-10 bg-black rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Globe className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Generative Engine Optimization</h3>
                  <p className="text-white/50 leading-relaxed mb-6">
                    GEO ensures your business gets cited and recommended when people ask AI assistants for help. It&apos;s not about rankings — it&apos;s about being the answer.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Get cited by ChatGPT, Perplexity & Gemini",
                      "Appear in Google AI Overviews",
                      "Build authority AI engines trust",
                      "Turn AI conversations into customers",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white/60 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/services/geo-optimization" className="inline-flex items-center gap-2 text-accent font-medium text-sm group/link">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </AnimatedSection>

              {/* AI SEO Card */}
              <AnimatedSection delay={200}>
                <div className="group p-8 lg:p-10 bg-black rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <BrainCircuit className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">AI-Powered SEO</h3>
                  <p className="text-white/50 leading-relaxed mb-6">
                    Supercharge your search strategy with AI-driven keyword research, content optimization, and predictive analytics that outpace traditional methods.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "AI-powered keyword & content gap analysis",
                      "Predictive ranking insights",
                      "Automated content optimization",
                      "Smarter strategy, faster results",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white/60 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/services/ai-seo" className="inline-flex items-center gap-2 text-accent font-medium text-sm group/link">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 bg-black relative">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <span className="section-label mb-6 block">What We Do</span>
                <h2 className="text-headline mb-6">
                  Services that <span className="text-accent">deliver</span> results
                </h2>
                <p className="text-white/50 text-lg">
                  Comprehensive digital solutions tailored to your business needs. Every project receives our full attention and expertise.
                </p>
              </div>
              <Link href="/services" className="btn-pill btn-pill-outline group flex-shrink-0">
                View All Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <Link href={`/services/${service.slug}`} className="group block p-8 lg:p-10 bg-dark-gray rounded-2xl card-hover cursor-pointer border border-white/5 hover:border-accent/30 relative overflow-hidden h-full">
                    {/* Background image on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                        <service.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                      <p className="text-white/50 leading-relaxed">{service.description}</p>

                      <div className="mt-6 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm font-medium">Learn more</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="work" className="py-32 bg-dark-gray relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
              <div>
                <span className="section-label mb-6 block">Our Work</span>
                <h2 className="text-headline">
                  Selected <span className="text-accent">Projects</span>
                </h2>
              </div>
              <Link href="/portfolio" className="btn-pill btn-pill-outline group">
                View All Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolio.map((project, index) => (
                <AnimatedSection key={project.id} delay={index * 150}>
                  <Link href={`/portfolio/${project.slug}`} className="group block cursor-pointer">
                    <div className="mb-6">
                      <ScrollingScreenshot
                        src={project.image}
                        alt={project.title}
                      />
                    </div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                        <p className="text-white/40 text-sm">{project.category}</p>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,107,0,0.1),transparent_50%)]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="text-center mb-16">
              <span className="section-label mb-6 inline-flex justify-center">Testimonials</span>
              <h2 className="text-headline">
                What our <span className="text-accent">clients</span> say
              </h2>
            </AnimatedSection>

            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-dark-gray relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop"
              alt="Office background"
              fill
              className="object-cover opacity-10"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-gray via-dark-gray/95 to-dark-gray/90"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <span className="section-label mb-6 inline-flex justify-center">Have a Project?</span>
              <h2 className="text-headline mb-8">
                Let's work <span className="text-accent">together</span>
              </h2>
              <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
                Ready to start your next project? Get in touch and let's create something great.
              </p>
              <a href="#contact" className="btn-pill btn-pill-primary group">
                Start a Conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-black relative">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16">
              <AnimatedSection>
                <span className="section-label mb-6 block">Get in Touch</span>
                <h2 className="text-headline mb-8">
                  Let's start your <span className="text-accent">project</span>
                </h2>
                <p className="text-white/50 text-lg mb-12">
                  Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  <a href="mailto:hello@dustintn.com" className="flex items-center gap-4 text-white/60 hover:text-accent transition-colors group">
                    <div className="w-14 h-14 bg-dark-gray rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Email</div>
                      <span className="text-lg">hello@dustintn.com</span>
                    </div>
                  </a>
                  <a href="tel:+16155551234" className="flex items-center gap-4 text-white/60 hover:text-accent transition-colors group">
                    <div className="w-14 h-14 bg-dark-gray rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Phone</div>
                      <span className="text-lg">(615) 788-2453</span>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 text-white/60">
                    <div className="w-14 h-14 bg-dark-gray rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Location</div>
                      <span className="text-lg">Nashville, TN</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <ContactForm />
              </AnimatedSection>
            </div>
          </div>
        </section>

        <ResourceSnippets limit={3} />

        <ProudlyServing />
        <Footer />
      </main>
    </div>
  );
}
