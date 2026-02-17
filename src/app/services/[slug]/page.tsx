'use client';

import { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowLeft, Code2, Palette, MessageSquare, Zap, Users, Share2, CheckCircle2, Facebook, Instagram, Star, Globe, BrainCircuit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navigation from "@/components/Navigation";
import ProudlyServing from "@/components/ProudlyServing";
import ResourceSnippets from "@/components/ResourceSnippets";
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

const services = {
  "web-development": {
    slug: "web-development",
    icon: Code2,
    title: "Web Development",
    tagline: "Custom Websites Built for Performance",
    description: "We create custom websites and web applications using modern technologies that deliver exceptional performance, security, and user experience. From simple landing pages to complex web applications, we build solutions that grow with your business.",
    heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&h=900&fit=crop",
    features: [
      "Custom website design and development",
      "Responsive mobile-first approach",
      "E-commerce solutions",
      "Content management systems (CMS)",
      "Web application development",
      "API integrations",
      "Performance optimization",
      "Security best practices"
    ],
    process: [
      { step: "01", title: "Discovery", description: "We learn about your business, goals, and target audience to create a strategic foundation." },
      { step: "02", title: "Design", description: "Creating wireframes and visual designs that align with your brand and user expectations." },
      { step: "03", title: "Development", description: "Building your website with clean, efficient code using modern frameworks and best practices." },
      { step: "04", title: "Launch & Support", description: "Deploying your site and providing ongoing maintenance and support." }
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Vercel", "AWS"],
    benefits: [
      { title: "Fast Load Times", description: "Optimized performance for better user experience and SEO rankings" },
      { title: "Mobile Responsive", description: "Perfect display on all devices from phones to desktops" },
      { title: "SEO Optimized", description: "Built with search engine visibility in mind from day one" },
      { title: "Scalable", description: "Architecture that grows with your business needs" }
    ]
  },
  "brand-identity": {
    slug: "brand-identity",
    icon: Palette,
    title: "Brand Identity",
    tagline: "Visual Identities That Resonate",
    description: "We create distinctive brand identities that capture your essence and connect with your audience. From logo design to complete brand systems, we help you stand out in a crowded marketplace with cohesive, memorable visual identities.",
    heroImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600&h=900&fit=crop",
    features: [
      "Logo design and variations",
      "Color palette development",
      "Typography selection",
      "Brand guidelines documentation",
      "Business card and stationery design",
      "Social media brand assets",
      "Marketing collateral design",
      "Brand voice and messaging"
    ],
    process: [
      { step: "01", title: "Research", description: "Understanding your industry, competitors, and target audience to inform design decisions." },
      { step: "02", title: "Concept", description: "Developing multiple creative directions that align with your brand values and goals." },
      { step: "03", title: "Refinement", description: "Iterating on the chosen direction to perfect every detail of your brand identity." },
      { step: "04", title: "Delivery", description: "Providing comprehensive brand guidelines and all necessary file formats." }
    ],
    technologies: ["Adobe Creative Suite", "Figma", "Brand Strategy", "Color Theory", "Typography"],
    benefits: [
      { title: "Recognition", description: "Stand out from competitors with a unique visual identity" },
      { title: "Consistency", description: "Maintain brand coherence across all touchpoints" },
      { title: "Trust", description: "Professional branding builds credibility with customers" },
      { title: "Value", description: "Strong brands command premium pricing" }
    ]
  },
  "seo-content": {
    slug: "seo-content",
    icon: MessageSquare,
    title: "SEO & Content",
    tagline: "Get Found Online",
    description: "We help your business get discovered through strategic search engine optimization and compelling content. Our data-driven approach ensures your website ranks for the keywords that matter most — in traditional search results, AI-powered answers, and everywhere in between. We also offer specialized generative engine optimization (GEO) and AI SEO services to help you stay ahead as search evolves.",
    heroImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1600&h=900&fit=crop",
    features: [
      "Keyword research and strategy",
      "On-page SEO optimization",
      "Technical SEO audits",
      "Content strategy development",
      "Blog and article writing",
      "Local SEO optimization",
      "Generative engine optimization (GEO)",
      "AI-powered content optimization",
      "Google Business Profile management",
      "Performance tracking and reporting"
    ],
    process: [
      { step: "01", title: "Audit", description: "Comprehensive analysis of your current SEO performance and opportunities." },
      { step: "02", title: "Strategy", description: "Developing a customized SEO roadmap based on your goals and competition." },
      { step: "03", title: "Implementation", description: "Executing on-page, technical, and content optimizations." },
      { step: "04", title: "Monitor", description: "Tracking rankings, traffic, and conversions with regular reporting." }
    ],
    technologies: ["Google Analytics", "Search Console", "SEMrush", "Ahrefs", "Screaming Frog", "Schema Markup", "GEO Tools", "AI Content Tools"],
    benefits: [
      { title: "Visibility", description: "Appear in search results when customers are looking for you" },
      { title: "Traffic", description: "Drive qualified organic traffic to your website" },
      { title: "Authority", description: "Build trust through valuable content and strong rankings" },
      { title: "ROI", description: "Long-term results that compound over time" }
    ],
    faqs: [
      {
        question: "What is the difference between traditional SEO and GEO?",
        answer: "Traditional SEO focuses on ranking in search engine results pages (SERPs) like Google and Bing. Generative engine optimization (GEO) focuses on getting your business cited and recommended in AI-powered answers from tools like ChatGPT, Perplexity, and Google AI Overviews. We offer both as part of a comprehensive search strategy. Learn more about our GEO services."
      },
      {
        question: "How does AI change SEO strategy?",
        answer: "AI is transforming SEO in two major ways. First, AI-powered search engines are changing how people find information, which is where GEO comes in. Second, AI tools are making SEO workflows faster and more effective — from keyword research to content optimization. Our AI SEO services leverage both of these shifts to give your business a competitive edge."
      },
      {
        question: "How long does it take to see SEO results?",
        answer: "Most businesses start seeing measurable improvements in rankings and traffic within 3 to 6 months of consistent SEO work. Some quick wins — like optimizing your Google Business Profile or fixing technical issues — can show results sooner. SEO is a long-term investment that compounds over time."
      },
      {
        question: "Do I need local SEO if I serve a specific area?",
        answer: "Absolutely. Local SEO is critical for businesses that serve specific geographic areas. It helps you appear in Google's local map pack, Google Business Profile results, and location-based searches. For businesses in Nashville, Hendersonville, Gallatin, and Middle Tennessee, local SEO is one of the highest-ROI marketing investments you can make."
      },
      {
        question: "Can you help with content creation as well as SEO?",
        answer: "Yes. Our SEO & Content service covers both strategy and execution. We handle keyword research, content planning, article writing, on-page optimization, and performance tracking. Great SEO and great content go hand in hand — you cannot have one without the other."
      }
    ]
  },
  "web-consulting": {
    slug: "web-consulting",
    icon: Users,
    title: "Web Consulting",
    tagline: "Expert Guidance for Digital Success",
    description: "Navigate the complex world of web technology with confidence. Our consulting services help you make informed decisions about your digital strategy, technology stack, and online presence to achieve your business objectives.",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop",
    features: [
      "Website strategy and planning",
      "Technology stack recommendations",
      "Platform selection guidance",
      "Digital transformation roadmaps",
      "Vendor evaluation and selection",
      "Project scoping and estimation",
      "Performance and security audits",
      "Team training and workshops"
    ],
    process: [
      { step: "01", title: "Assessment", description: "Understanding your current situation, challenges, and business objectives." },
      { step: "02", title: "Analysis", description: "Evaluating options and identifying the best solutions for your needs." },
      { step: "03", title: "Recommendations", description: "Presenting a clear roadmap with prioritized action items." },
      { step: "04", title: "Support", description: "Ongoing guidance through implementation and beyond." }
    ],
    technologies: ["Strategic Planning", "Technical Architecture", "Project Management", "Agile Methodology"],
    benefits: [
      { title: "Clarity", description: "Clear direction on technology decisions and priorities" },
      { title: "Efficiency", description: "Avoid costly mistakes and wasted resources" },
      { title: "Expertise", description: "Access 20+ years of web development experience" },
      { title: "Confidence", description: "Make informed decisions backed by expert analysis" }
    ]
  },
  "social-media": {
    slug: "social-media",
    icon: Share2,
    title: "Social Media",
    tagline: "Engage Your Audience Everywhere",
    description: "Build a powerful social presence across Facebook, Instagram, Yelp, Google, and more. We help you connect with your audience, manage your online reputation, and turn followers into customers through strategic social media management.",
    heroImage: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1600&h=900&fit=crop",
    features: [
      "Social media strategy development",
      "Facebook page setup and management",
      "Instagram content and engagement",
      "Yelp business profile optimization",
      "Google Business Profile management",
      "Review monitoring and response",
      "Content calendar creation",
      "Social media advertising"
    ],
    process: [
      { step: "01", title: "Audit", description: "Reviewing your current social presence and identifying opportunities." },
      { step: "02", title: "Strategy", description: "Creating a customized social media plan aligned with your goals." },
      { step: "03", title: "Execute", description: "Managing your profiles with consistent, engaging content." },
      { step: "04", title: "Optimize", description: "Analyzing results and refining strategy for better performance." }
    ],
    technologies: ["Meta Business Suite", "Hootsuite", "Canva", "Google Business", "Yelp for Business"],
    platforms: [
      { name: "Facebook", icon: Facebook, description: "Build community and reach local customers" },
      { name: "Instagram", icon: Instagram, description: "Showcase your work with visual storytelling" },
      { name: "Yelp", icon: Star, description: "Manage reviews and attract new customers" },
      { name: "Google", icon: Star, description: "Improve local search visibility" }
    ],
    benefits: [
      { title: "Reach", description: "Connect with customers where they spend their time" },
      { title: "Engagement", description: "Build relationships through meaningful interactions" },
      { title: "Reputation", description: "Monitor and respond to reviews across platforms" },
      { title: "Growth", description: "Turn social followers into paying customers" }
    ]
  },
  "digital-strategy": {
    slug: "digital-strategy",
    icon: Zap,
    title: "Digital Strategy",
    tagline: "Roadmaps for Digital Growth",
    description: "Align your digital presence with your business goals through comprehensive strategy development. We help you create a cohesive digital ecosystem that drives growth, improves efficiency, and delivers measurable results.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop",
    features: [
      "Digital ecosystem planning",
      "Customer journey mapping",
      "Competitive analysis",
      "Technology roadmapping",
      "Marketing strategy alignment",
      "Analytics and KPI framework",
      "Digital transformation planning",
      "Growth strategy development"
    ],
    process: [
      { step: "01", title: "Discovery", description: "Deep dive into your business, market, and digital landscape." },
      { step: "02", title: "Analysis", description: "Identifying gaps, opportunities, and competitive advantages." },
      { step: "03", title: "Strategy", description: "Developing a comprehensive digital roadmap with clear priorities." },
      { step: "04", title: "Execution", description: "Supporting implementation with ongoing strategic guidance." }
    ],
    technologies: ["Business Analysis", "Market Research", "Analytics", "Strategic Planning", "ROI Modeling"],
    benefits: [
      { title: "Alignment", description: "Digital initiatives that support business objectives" },
      { title: "Focus", description: "Clear priorities based on impact and feasibility" },
      { title: "Integration", description: "Cohesive digital ecosystem across all channels" },
      { title: "Results", description: "Measurable outcomes tied to business goals" }
    ]
  },
  "geo-optimization": {
    slug: "geo-optimization",
    icon: Globe,
    title: "Generative Engine Optimization",
    tagline: "Get Cited by AI Search Engines",
    description: "AI-powered search engines like ChatGPT, Perplexity, Google AI Overviews, and Bing Copilot are changing how people find businesses. Generative engine optimization (GEO) ensures your brand is cited, recommended, and visible in these AI-generated answers — not just traditional search results. GEO works alongside traditional SEO and AI SEO to create a comprehensive search presence that covers every way your customers discover you.",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&h=900&fit=crop",
    features: [
      "AI search engine citation optimization",
      "Structured data and entity markup",
      "Authority and credibility signals",
      "AI-friendly content formatting",
      "Brand mention monitoring across AI platforms",
      "Knowledge graph optimization",
      "Conversational query targeting",
      "AI overview and featured snippet strategy"
    ],
    process: [
      { step: "01", title: "AI Audit", description: "Analyze how your brand currently appears across AI-powered search engines and identify gaps." },
      { step: "02", title: "Strategy", description: "Develop a GEO roadmap targeting the AI platforms your customers use most." },
      { step: "03", title: "Optimize", description: "Implement structured data, authority signals, and content formatting for AI citation." },
      { step: "04", title: "Monitor", description: "Track your AI search visibility and refine strategy based on performance." }
    ],
    technologies: ["Schema.org", "JSON-LD", "Knowledge Graph", "ChatGPT", "Perplexity", "Google AI Overviews", "Bing Copilot", "Entity SEO"],
    benefits: [
      { title: "AI Visibility", description: "Get cited and recommended in AI-generated search answers" },
      { title: "Future-Proof", description: "Stay ahead as search shifts toward AI-powered discovery" },
      { title: "Authority", description: "Build the credibility signals AI engines prioritize" },
      { title: "Reach", description: "Appear in the new places your customers are looking" }
    ],
    faqs: [
      {
        question: "What is generative engine optimization (GEO)?",
        answer: "GEO is the practice of optimizing your online presence so that AI-powered search engines — like ChatGPT, Perplexity, Google AI Overviews, and Bing Copilot — cite, reference, and recommend your business in their generated answers. It is an evolution of traditional SEO tailored for the AI search era."
      },
      {
        question: "How is GEO different from traditional SEO?",
        answer: "Traditional SEO focuses on ranking in search engine results pages. GEO focuses on being cited in AI-generated answers, which may not link to a traditional search result at all. GEO emphasizes structured data, entity authority, and content formats that AI engines can easily parse and reference. Both work together — our SEO & Content service covers the full spectrum."
      },
      {
        question: "Which AI search engines does GEO target?",
        answer: "We optimize for all major AI-powered search platforms including ChatGPT (with browsing), Perplexity AI, Google AI Overviews (formerly SGE), Bing Copilot, and other emerging AI search tools. The landscape is evolving quickly, and we stay on top of new platforms as they gain traction."
      },
      {
        question: "Do I still need traditional SEO if I do GEO?",
        answer: "Yes. Traditional SEO and GEO are complementary, not replacements for each other. Strong traditional SEO actually helps your GEO performance because AI engines often pull from well-ranked, authoritative sources. We recommend a combined approach through our SEO & Content and GEO services."
      },
      {
        question: "How do you measure GEO results?",
        answer: "We track brand mentions and citations across AI search platforms, monitor your visibility in AI-generated answers for target queries, and measure referral traffic from AI sources. We also track traditional metrics like organic traffic and rankings since GEO and SEO reinforce each other."
      },
      {
        question: "How does GEO relate to AI SEO?",
        answer: "GEO is about optimizing your content so AI search engines cite you. AI SEO is about using AI tools to make your overall SEO strategy more effective. They are two sides of the same coin — GEO targets AI as the audience, while AI SEO uses AI as a tool. Our AI SEO service covers the tools and automation side."
      }
    ]
  },
  "ai-seo": {
    slug: "ai-seo",
    icon: BrainCircuit,
    title: "AI SEO",
    tagline: "Supercharge SEO with Artificial Intelligence",
    description: "Artificial intelligence is transforming how we approach search engine optimization. Our AI SEO services use cutting-edge AI tools to accelerate keyword research, optimize content at scale, predict ranking opportunities, and automate technical audits — delivering faster results with greater precision. Combined with our traditional SEO & Content and GEO services, AI SEO gives your business every advantage in modern search.",
    heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&h=900&fit=crop",
    features: [
      "AI-driven keyword research and clustering",
      "AI content optimization and scoring",
      "Predictive ranking analytics",
      "Automated technical SEO audits",
      "AI-powered competitor analysis",
      "Natural language processing for content",
      "Automated internal linking optimization",
      "AI performance forecasting"
    ],
    process: [
      { step: "01", title: "Assess", description: "Evaluate your current SEO performance and identify high-impact opportunities with AI analysis." },
      { step: "02", title: "Deploy", description: "Implement AI-powered tools and workflows tailored to your SEO goals." },
      { step: "03", title: "Optimize", description: "Use AI insights to optimize content, fix technical issues, and target winning keywords." },
      { step: "04", title: "Scale", description: "Continuously improve with AI-driven performance monitoring and predictive analytics." }
    ],
    technologies: ["AI Content Tools", "NLP Analysis", "Predictive Analytics", "Machine Learning", "SEMrush AI", "SurferSEO", "Clearscope", "Python"],
    benefits: [
      { title: "Speed", description: "Complete SEO tasks in hours that used to take weeks" },
      { title: "Precision", description: "Data-driven decisions powered by machine learning" },
      { title: "Scale", description: "Optimize hundreds of pages with consistent quality" },
      { title: "Edge", description: "Stay ahead of competitors still using manual methods" }
    ],
    faqs: [
      {
        question: "What is AI SEO?",
        answer: "AI SEO is the use of artificial intelligence tools and techniques to enhance search engine optimization. This includes AI-powered keyword research, content optimization scoring, predictive analytics for ranking opportunities, automated technical audits, and more. It makes traditional SEO faster, more precise, and scalable."
      },
      {
        question: "How is AI SEO different from GEO?",
        answer: "AI SEO uses AI as a tool to improve your SEO performance — think of it as smarter workflows and automation. GEO (generative engine optimization) is about optimizing your content so AI search engines cite and reference you. AI SEO improves how you do SEO, while GEO targets a new type of search platform. We offer both through our GEO and AI SEO services."
      },
      {
        question: "Will AI replace human SEO expertise?",
        answer: "No. AI is a powerful accelerator, but it still requires human expertise to guide strategy, interpret data, and make nuanced decisions. We use AI to handle repetitive tasks and surface insights faster, while our team provides the strategic thinking and creative judgment that AI cannot replicate."
      },
      {
        question: "What AI tools do you use for SEO?",
        answer: "We use a combination of industry-leading AI-powered SEO tools including SurferSEO for content optimization, Clearscope for content intelligence, SEMrush AI features, custom NLP analysis scripts, and predictive analytics models. We continuously evaluate and adopt new tools as the technology evolves."
      },
      {
        question: "Can AI SEO help with content creation?",
        answer: "Yes. AI tools help us research topics faster, identify content gaps, optimize existing content for better rankings, and ensure content meets search intent. We always combine AI efficiency with human creativity and editorial judgment — our SEO & Content service handles the full content lifecycle."
      },
      {
        question: "How does AI SEO fit with your other SEO services?",
        answer: "AI SEO enhances everything we do across our SEO & Content and GEO services. It is the technology layer that makes our keyword research sharper, our content optimization more precise, our technical audits more thorough, and our reporting more predictive. Think of it as the engine under the hood of our entire search strategy."
      }
    ]
  }
};

type ServiceSlug = keyof typeof services;

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = services[slug as ServiceSlug];

  // Get adjacent services for navigation
  const serviceSlugs = Object.keys(services);
  const currentIndex = serviceSlugs.indexOf(slug);
  const prevService = currentIndex > 0 ? services[serviceSlugs[currentIndex - 1] as ServiceSlug] : null;
  const nextService = currentIndex < serviceSlugs.length - 1 ? services[serviceSlugs[currentIndex + 1] as ServiceSlug] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4">Service Not Found</h1>
          <Link href="/#services" className="btn-pill btn-pill-primary">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-dark-gray"></div>
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            {/* Back link */}
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-full text-white/80 hover:text-white hover:bg-accent transition-all duration-300 border border-white/10 hover:border-accent mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">All Services</span>
            </Link>

            <AnimatedSection className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="lg:flex-1">
                <h1 className="text-headline">{service.title}</h1>
                <p className="text-2xl text-white/60 max-w-2xl font-light">{service.tagline}</p>
              </div>
              <div className="flex-shrink-0 lg:self-center flex items-center gap-4">
                <span className="text-accent text-sm font-medium uppercase tracking-wider">Service</span>
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-xl shadow-accent/20">
                  <ServiceIcon className="w-8 h-8 text-white" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Hero Split Section */}
        <section className="pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <AnimatedSection delay={100}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </AnimatedSection>

              {/* Right - Key Highlights */}
              <AnimatedSection delay={200}>
                <div className="bg-dark-gray rounded-2xl p-8 lg:p-10 border border-white/5">
                  <h3 className="text-lg font-semibold mb-6 text-white/80">What You Get</h3>
                  <div className="grid gap-4">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-black/30 rounded-xl">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-accent" />
                        </div>
                        <span className="text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/40">Technologies we use</span>
                      <div className="flex gap-2">
                        {service.technologies.slice(0, 3).map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-white/5 rounded-full text-white/60 text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <span className="section-label mb-6 block">Overview</span>
                <h2 className="text-headline mb-8">What We Offer</h2>
                <p className="text-white/60 text-lg leading-relaxed">{service.description}</p>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="grid grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="p-6 bg-black/50 rounded-xl border border-white/5">
                      <h3 className="text-lg font-semibold mb-2 text-accent">{benefit.title}</h3>
                      <p className="text-white/50 text-sm">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-16">
              <span className="section-label mb-6 inline-flex justify-center">What's Included</span>
              <h2 className="text-headline">Service Features</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.features.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 50}>
                  <div className="flex items-start gap-3 p-5 bg-dark-gray rounded-xl border border-white/5 h-full">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-16">
              <span className="section-label mb-6 inline-flex justify-center">How We Work</span>
              <h2 className="text-headline">Our Process</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="relative">
                    <div className="text-6xl font-bold text-accent/10 mb-4">{step.step}</div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                    {index < service.process.length - 1 && (
                      <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-[2px] bg-gradient-to-r from-accent/20 to-transparent"></div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media Platforms (only for social-media service) */}
        {'platforms' in service && (
          <section className="py-20 bg-black">
            <div className="container mx-auto px-6 lg:px-12">
              <AnimatedSection className="text-center mb-16">
                <span className="section-label mb-6 inline-flex justify-center">Platforms</span>
                <h2 className="text-headline">Where We Help You Shine</h2>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.platforms?.map((platform, index) => (
                  <AnimatedSection key={index} delay={index * 100}>
                    <div className="p-8 bg-dark-gray rounded-2xl border border-white/5 text-center group hover:border-accent/30 transition-colors">
                      <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                        <platform.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{platform.name}</h3>
                      <p className="text-white/50 text-sm">{platform.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Technologies */}
        <section className="py-20 bg-black border-t border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-12">
              <span className="section-label mb-6 inline-flex justify-center">Tools & Technologies</span>
              <h2 className="text-headline">What We Use</h2>
            </AnimatedSection>

            <AnimatedSection delay={100} className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-dark-gray rounded-full text-white/80 border border-white/10 hover:border-accent/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </AnimatedSection>
          </div>
        </section>

        {/* FAQs */}
        {'faqs' in service && service.faqs && (
          <section className="py-20 bg-dark-gray">
            <div className="container mx-auto px-6 lg:px-12">
              <AnimatedSection className="text-center mb-16">
                <span className="section-label mb-6 inline-flex justify-center">Common Questions</span>
                <h2 className="text-headline">Frequently Asked Questions</h2>
              </AnimatedSection>

              <div className="max-w-3xl mx-auto grid gap-6">
                {service.faqs.map((faq, index) => (
                  <AnimatedSection key={index} delay={index * 75}>
                    <div className="bg-black/50 rounded-2xl p-8 border border-white/5">
                      <h3 className="text-lg font-semibold mb-3 text-white">{faq.question}</h3>
                      <p className="text-white/50 leading-relaxed">{faq.answer}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center max-w-2xl mx-auto">
              <h2 className="text-headline mb-6">Ready to Get Started?</h2>
              <p className="text-white/50 text-lg mb-10">
                Let's discuss how our {service.title.toLowerCase()} services can help your business grow.
              </p>
              <Link href="/#contact" className="btn-pill btn-pill-primary group">
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Service Navigation */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 lg:p-12">
              <div className="flex justify-between items-center">
                {prevService ? (
                  <Link
                    href={`/services/${prevService.slug}`}
                    className="group flex items-center gap-4 flex-1"
                  >
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-accent transition-all duration-300 border border-white/10 group-hover:border-accent">
                      <ArrowLeft className="w-5 h-5" />
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Previous Service</div>
                      <div className="font-semibold text-lg group-hover:text-accent transition-colors">{prevService.title}</div>
                    </div>
                  </Link>
                ) : (
                  <div className="flex-1"></div>
                )}

                <Link
                  href="/services"
                  className="hidden md:flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/80 hover:text-white hover:bg-accent transition-all duration-300 border border-white/10 hover:border-accent mx-8"
                >
                  <span className="text-sm font-medium">All Services</span>
                </Link>

                {nextService ? (
                  <Link
                    href={`/services/${nextService.slug}`}
                    className="group flex items-center gap-4 text-right flex-1 justify-end"
                  >
                    <div className="hidden sm:block">
                      <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Next Service</div>
                      <div className="font-semibold text-lg group-hover:text-accent transition-colors">{nextService.title}</div>
                    </div>
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-accent transition-all duration-300 border border-white/10 group-hover:border-accent">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </Link>
                ) : (
                  <div className="flex-1"></div>
                )}
              </div>
            </div>
          </div>
        </section>

        <ResourceSnippets serviceSlug={slug} />

        <ProudlyServing />
        <Footer />
      </main>
    </div>
  );
}
