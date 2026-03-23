import { ArrowRight, ArrowLeft, Code2, Palette, PenTool, MessageSquare, Zap, Users, Share2, CheckCircle2, Facebook, Instagram, Star, Globe, BrainCircuit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import ProudlyServing from "@/components/ProudlyServing";
import ResourceSnippets from "@/components/ResourceSnippets";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const services = {
  "web-development": {
    slug: "web-development",
    icon: Code2,
    title: "Web Development",
    tagline: "I Build Websites That Work as Hard as You Do",
    description: "Every site I build is hand-coded in Next.js and React — from the Champions Adaptive Fitness coaching platform to the Pinnacle Wellness healthcare portal. No templates, no page builders. Just fast, secure websites built around how your business actually works.",
    overview: [
      "Most businesses in Nashville, Hendersonville, and Gallatin end up with a website that was built on a drag-and-drop platform and loaded with third-party plugins. It works for a while, then it slows down, breaks on mobile, or becomes impossible to update without breaking something else. I build the opposite: clean, hand-written code in Next.js and React that loads fast, ranks well in Google, and doesn't require constant babysitting. Every line of code is written with your specific business goals in mind — not pulled from a generic template library.",
      "When Fine Assets Personal Training needed a booking platform, I built it from scratch around their actual workflow — not the other way around. Their online bookings tripled within six months. When Pinnacle Wellness needed a healthcare portal that handled appointment scheduling, insurance information, and provider profiles, I built a system that now drives half their new patient appointments. These aren't template stories — they're real results from real Nashville-area businesses that needed websites built around how they actually operate.",
      "The technology behind every site I build is carefully chosen for long-term performance. Next.js provides server-side rendering and static site generation, which means your pages load in under two seconds and score above 90 on Google PageSpeed Insights. React handles the interactive components — contact forms, booking widgets, filtering systems — without slowing anything down. TypeScript catches bugs before they reach your customers. Tailwind CSS keeps the design pixel-perfect and consistent across every screen size from a phone to a 4K monitor. This isn't a tech stack I chose because it's trendy — it's what I use because it produces measurably faster, more reliable websites than WordPress, Wix, or Squarespace.",
      "Every project starts the same way: I learn how your business works, who your customers are, and what you need the website to do. Then I design and build a site around those requirements. I handle everything from initial design concepts and wireframing through development, testing, deployment, and ongoing maintenance. Most projects deploy on Vercel or AWS, depending on the complexity and traffic requirements. After launch, I provide ongoing support so the site keeps performing — security patches, performance monitoring, content updates, and technical improvements as your business evolves.",
      "Search engine optimization is built into every site from day one. I structure your pages with proper heading hierarchy, semantic HTML, schema markup, and optimized meta tags so Google can crawl and index your content efficiently. Image optimization, lazy loading, and code splitting ensure fast load times — a critical ranking factor. I also implement structured data (JSON-LD) so your business information appears correctly in search results, Google Business Profile, and AI-powered search engines like ChatGPT and Perplexity.",
      "Security is another area where custom development outperforms template platforms. WordPress sites are constant targets for brute-force attacks, plugin vulnerabilities, and SQL injection because they all share the same codebase. A custom Next.js site has a dramatically smaller attack surface — no admin login page for bots to hammer, no plugin ecosystem with unvetted code, and no shared database vulnerabilities. I implement HTTPS everywhere, secure headers, input sanitization, and environment-variable management to keep your site and your customers' data safe.",
      "If you're a business in the Nashville area that needs more than a WordPress template — whether that's an e-commerce storefront, a client portal, a membership platform, or just a fast, professional website that converts visitors into customers — that's exactly what I build. And because I handle the full stack from design to deployment to maintenance, you deal with one person who knows your project inside and out, not a rotating cast of agency staff."
    ],
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
    ],
    faqs: [
      {
        question: "How long does it take to build a custom website?",
        answer: "Most custom websites take four to eight weeks from kickoff to launch, depending on complexity. A straightforward business site with five to ten pages is typically closer to four weeks, while larger projects with custom features like booking systems, client portals, or e-commerce functionality can take six to eight weeks. Every project includes a clear timeline upfront so you know exactly what to expect."
      },
      {
        question: "Why choose custom development over WordPress or Squarespace?",
        answer: "Template platforms work fine for simple personal sites, but they come with significant trade-offs for businesses: slower load times, limited customization, plugin dependency, and security vulnerabilities. A custom site built in Next.js and React loads faster, ranks better in search engines, is more secure, and can be tailored precisely to how your business works. You also avoid the ongoing costs of premium plugins and the risk of updates breaking your site."
      },
      {
        question: "Do you provide hosting and maintenance after launch?",
        answer: "Yes. Every site I build includes deployment to a production hosting environment — typically Vercel or AWS — and I offer ongoing maintenance packages that cover security updates, performance monitoring, content changes, and technical support. Most clients choose a monthly retainer that gives them priority access for updates and a set number of content changes per month."
      },
      {
        question: "Can you redesign my existing website?",
        answer: "Absolutely. Many of my projects are redesigns of existing sites that have become outdated, slow, or difficult to manage. I will assess your current site, identify what is working and what is not, and build a modern replacement that preserves your existing content and SEO value while dramatically improving performance, design, and user experience."
      },
      {
        question: "What does a custom website cost?",
        answer: "Custom website projects typically start around $3,000 for a straightforward business site and scale based on complexity, custom features, and content volume. I provide detailed proposals with transparent pricing before any work begins. Every project is scoped based on your actual needs — I do not sell packages with features you will never use."
      }
    ]
  },
  "brand-identity": {
    slug: "brand-identity",
    icon: Palette,
    title: "Brand Identity",
    tagline: "Your Brand Should Feel Like You, Not a Template",
    description: "I've built brand systems for Southern Collective Spirit Co., Maple Sky Dreamtree Studio, and healthcare practices that needed to stand out in competitive markets. A strong brand isn't just a logo — it's what makes AI search engines and real humans recognize and trust your business. I design identities that work everywhere: on your website, in social feeds, and in AI-generated recommendations.",
    overview: [
      "Brand identity is the difference between a business that blends in and one that people remember. When Southern Collective Spirit Co. needed a visual identity that reflected their Nashville roots and premium spirits, I didn't start with a mood board — I started by understanding their customers, their competitors, and the story they wanted to tell. The result was a complete brand system that works across their website, bottle labels, social media, and event signage. Every touchpoint reinforces the same message, which is what turns a name into a brand.",
      "The same process applies whether you're a healthcare practice in Hendersonville, a fitness studio in Gallatin, or a restaurant in Nashville. I develop your color palette, typography, logo variations, and brand guidelines from scratch, based on who you are and who you're trying to reach. Every deliverable is designed to work consistently across print, digital, social media, and the growing world of AI-powered search where brand recognition directly affects visibility. I don't hand you a logo file and wish you luck — you get a complete system with rules and assets for every situation your brand will encounter.",
      "Color psychology plays a real role in how customers perceive your business. A healthcare practice needs colors that convey trust and calm — not the same palette that works for a high-energy fitness brand or a craft spirits company. I research your industry, your competitors, and your target demographics to select colors that support the emotional response you want to create. The same rigor applies to typography: the fonts on your website, business cards, and signage all need to work together and be readable at every size, from a billboard to a mobile screen.",
      "In the age of AI search, brand identity matters more than ever. AI engines like ChatGPT, Perplexity, and Google AI Overviews prioritize brands with clear, consistent identities when generating recommendations. A cohesive visual presence and structured brand information — things like consistent naming, clear service descriptions, and recognizable design elements — sends signals that both human customers and algorithms use when deciding who to trust. I build that clarity into every brand system I create, including structured data markup that helps AI engines understand and cite your brand accurately.",
      "Your brand guidelines document is not a formality — it's the playbook that keeps everything consistent as your business grows. It covers exactly how your logo should be used (and how it should never be used), your complete color specifications in hex, RGB, CMYK, and Pantone, your primary and secondary typefaces with sizing and spacing rules, your brand voice and messaging framework, and templates for common applications like social media posts, email headers, and presentation slides. This means anyone who touches your brand — whether it's a printer, a social media manager, or a web developer — produces work that looks and feels like your brand.",
      "A typical brand identity project takes four to six weeks and includes your logo with variations, a complete color palette, typography selection, brand guidelines documentation, social media assets, and business card design. I also include AI-ready brand positioning to ensure your identity performs well across both traditional and AI-powered search channels. If you already have elements of a brand you like, I can build around those — a full rebrand isn't always necessary when strategic refinements to your existing identity can produce the consistency and recognition you need."
    ],
    heroImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600&h=900&fit=crop",
    features: [
      "Logo design and variations",
      "Color palette development",
      "Typography selection",
      "Brand guidelines documentation",
      "Business card and stationery design",
      "Social media brand assets",
      "Marketing collateral design",
      "Brand voice and messaging",
      "AI-ready brand positioning",
      "Digital brand authority building"
    ],
    process: [
      { step: "01", title: "Research", description: "Understanding your industry, competitors, and target audience to inform design decisions." },
      { step: "02", title: "Concept", description: "Developing multiple creative directions that align with your brand values and goals." },
      { step: "03", title: "Refinement", description: "Iterating on the chosen direction to perfect every detail of your brand identity." },
      { step: "04", title: "Delivery", description: "Providing comprehensive brand guidelines and all necessary file formats." }
    ],
    technologies: ["Adobe Creative Suite", "Figma", "Brand Strategy", "Color Theory", "Typography", "AI Brand Tools"],
    benefits: [
      { title: "Recognition", description: "Stand out from competitors with a unique visual identity" },
      { title: "Consistency", description: "Maintain brand coherence across all touchpoints" },
      { title: "Trust", description: "Professional branding builds credibility with customers" },
      { title: "Value", description: "Strong brands command premium pricing" }
    ],
    faqs: [
      {
        question: "Why does brand identity matter for SEO and AI search?",
        answer: "Search engines and AI platforms prioritize brands they recognize as authoritative and trustworthy. A strong, consistent brand identity — with clear messaging, structured information, and a cohesive visual presence — sends signals that both Google and AI search engines use when deciding which businesses to surface and recommend. Investing in brand identity directly supports your SEO and GEO performance."
      },
      {
        question: "How does branding affect AI search visibility (GEO)?",
        answer: "AI search engines like ChatGPT and Perplexity rely on entity recognition to identify and recommend businesses. A well-defined brand with consistent naming, clear service descriptions, and strong authority signals is far more likely to be cited in AI-generated answers. Our branding process includes AI-ready brand positioning that ensures your identity translates effectively across AI platforms."
      },
      {
        question: "Do I need a brand refresh for AI SEO?",
        answer: "Not necessarily a complete rebrand, but your brand should be clearly defined and consistently represented online. If your messaging is vague, your visual identity is inconsistent, or your digital presence lacks authority signals, a strategic brand refresh can significantly improve your performance in both traditional and AI-powered search. We can assess where your brand stands and recommend targeted improvements."
      },
      {
        question: "What is included in a brand identity package?",
        answer: "Our brand identity packages typically include logo design with variations for different contexts, a complete color palette, typography selection, brand guidelines documentation, business card and stationery design, social media brand assets, and marketing collateral templates. We also include AI-ready brand positioning and digital brand authority recommendations to ensure your brand performs well across all channels."
      },
      {
        question: "How long does the branding process take?",
        answer: "A complete brand identity project typically takes four to six weeks from initial research to final delivery. This includes time for research, concept development, revision rounds, and comprehensive guideline documentation. Rush timelines are available for businesses with urgent needs. Every project includes at least two rounds of revisions to ensure the final result aligns perfectly with your vision."
      }
    ]
  },
  "logo-design": {
    slug: "logo-design",
    icon: PenTool,
    title: "Logo Design",
    tagline: "A Mark That Sticks — Not Just Another Icon",
    description: "I've designed logos for businesses across fitness, hospitality, real estate, and healthcare. Your logo is the first impression and the lasting memory. I design marks that hold up at any size, on any background, and in any context — from a browser tab to a storefront sign. Every logo starts with understanding what your business actually stands for.",
    overview: [
      "A logo isn't decoration — it's the single visual element that carries your entire brand. It shows up on your website favicon, your Google Business Profile, your social media accounts, your business cards, and eventually in the minds of your customers when they think of your industry. A well-designed mark earns recognition. A generic one gets forgotten. I approach logo design as a strategic exercise, not an artistic one — every curve, color, and proportion is chosen to communicate something specific about your business.",
      "When I designed the logo for Champions Adaptive Fitness, it needed to convey strength, inclusivity, and professionalism — all in a mark small enough to fit on a coaching jersey. For Maple Sky Dreamtree Studio, the challenge was different: capturing creativity and warmth in a way that felt handcrafted but polished. Each logo I design starts with a discovery session where I learn about your business, your audience, and your competitors. From there, I develop three to four distinct concept directions so you have real options to choose from — not slight variations on one idea, but genuinely different approaches to your visual identity.",
      "The discovery process is where the real design decisions are made. I research your industry to understand what your competitors' logos look like — because the goal is to stand out, not blend in. I analyze which visual styles resonate with your target demographic. I consider where your logo will appear most often: if you're primarily digital, the design needs to work at small sizes on screens; if you do trade shows or vehicle wraps, it needs to hold up at large scale. These practical considerations shape the design from the beginning, not as an afterthought.",
      "Every logo I deliver is built as a scalable vector — meaning it looks sharp whether it's 16 pixels wide in a browser tab or 16 feet wide on a banner. You receive your logo in every format you'll need: SVG and AI files for print, high-resolution PNGs with transparent backgrounds, JPEG versions for web, and favicon versions for your website. I also provide color, monochrome, and reversed versions so your logo works on any background. The full package includes a usage guide that specifies minimum sizes, clear space requirements, and color specifications so your logo stays consistent no matter who's using it.",
      "Typography is an often-overlooked part of logo design that can make or break a mark. The typeface in your logo — whether it's a custom lettering, a modified existing font, or a carefully selected typeface — needs to match the personality of your brand and remain legible at every size. I spend significant time on type selection and modification, because a beautifully designed icon paired with a generic font undermines the entire identity. The typography in your logo should feel as intentional and distinctive as the mark itself.",
      "A typical logo project takes two to three weeks from kickoff to final delivery, including two rounds of revisions to get every detail right. You own the final design outright — no licensing fees, no usage restrictions. If you already have a logo that needs modernizing, I can assess it and recommend the right level of refresh to bring it up to current standards without losing the equity you've built. Sometimes the smartest move is a subtle evolution rather than a complete redesign — I'll give you an honest recommendation based on what will serve your business best."
    ],
    heroImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1600&h=900&fit=crop",
    features: [
      "Custom logo design from scratch",
      "Multiple concept directions",
      "Logo variations (primary, icon, wordmark)",
      "Color and monochrome versions",
      "Vector files for any size",
      "Brand mark and icon design",
      "Typography pairing recommendations",
      "Usage guidelines documentation"
    ],
    process: [
      { step: "01", title: "Discovery", description: "We learn about your business, audience, competitors, and the story you want your logo to tell." },
      { step: "02", title: "Concepts", description: "We develop multiple creative directions based on research, each exploring a different angle of your brand." },
      { step: "03", title: "Refinement", description: "We refine your chosen concept through revision rounds, perfecting every curve, color, and detail." },
      { step: "04", title: "Delivery", description: "You receive production-ready files in every format you need, plus usage guidelines to keep your logo consistent." }
    ],
    technologies: ["Adobe Illustrator", "Figma", "Brand Strategy", "Typography", "Color Theory", "Vector Design"],
    benefits: [
      { title: "Memorable", description: "A distinctive mark that sticks in your audience's mind" },
      { title: "Versatile", description: "Works at any size, on any background, in any context" },
      { title: "Strategic", description: "Designed with your audience and industry in mind" },
      { title: "Timeless", description: "Built to last years, not just follow trends" }
    ],
    faqs: [
      {
        question: "How many logo concepts will I see?",
        answer: "We typically present three to four distinct concept directions in the first round. Each concept explores a different creative angle so you have meaningful options to choose from. After you select a direction, we refine it through two rounds of revisions to get every detail right."
      },
      {
        question: "What file formats will I receive?",
        answer: "You will receive your logo in all standard formats: vector files (SVG, AI, EPS) for print and scaling, high-resolution PNG files with transparent backgrounds, JPEG versions for web use, and a favicon version for your website. We also provide color, monochrome, and reversed (white) versions of each."
      },
      {
        question: "How long does the logo design process take?",
        answer: "A typical logo project takes two to three weeks from kickoff to final delivery. This includes the discovery phase, initial concept development, and two rounds of revisions. Rush timelines are available if you have a specific launch date in mind."
      },
      {
        question: "Can you redesign or refresh my existing logo?",
        answer: "Absolutely. We can modernize an existing logo while preserving the brand equity you have already built. Sometimes a subtle refresh is all it takes to bring a dated mark into the modern era without losing recognition. We will assess your current logo and recommend the right level of change."
      },
      {
        question: "Do I own the final logo design?",
        answer: "Yes. Once the project is complete and paid in full, you receive full ownership and usage rights to your logo. We provide all source files so you or any future designer can work with the logo. We do not charge licensing fees or retain usage restrictions."
      }
    ]
  },
  "seo-content": {
    slug: "seo-content",
    icon: MessageSquare,
    title: "SEO & Content",
    tagline: "Show Up Where Your Customers Are Looking",
    description: "I helped Pinnacle Wellness go from nearly invisible online to filling half their new patient appointments through search. Good SEO isn't about gaming an algorithm — it's about making sure the right people find you when they're ready to buy. I handle keyword strategy, content, technical SEO, and the newer AI search optimization (GEO) so you show up everywhere that matters.",
    overview: [
      "Search engine optimization is the foundation of being found online, and it's where most small businesses in Nashville, Hendersonville, and Gallatin are leaving the most money on the table. A beautiful website that nobody can find is just a digital brochure sitting in a drawer. I build SEO into the structure of your site from day one — from the technical markup and page speed to the keywords you target and the content that brings people in. This isn't a bolt-on service — it's woven into every page, every heading, and every piece of content from the beginning.",
      "When Pinnacle Wellness came to me, they had a professional-looking website but almost zero organic search traffic. Their competitors in the Hendersonville healthcare space were outranking them for every relevant search term. I ran a full SEO audit, rebuilt their on-page optimization, created a keyword-driven content strategy, and optimized their Google Business Profile. Within six months, they were filling half their new patient appointments through organic search. That's the kind of outcome I work toward — not just higher rankings, but actual business results that show up in your revenue.",
      "Keyword research is where every SEO strategy begins. I identify the specific search terms your potential customers are using — not just high-volume vanity keywords, but the long-tail phrases that indicate buying intent. For a Nashville plumber, ranking for 'plumber Nashville' matters, but so does ranking for 'emergency pipe repair Hendersonville' or 'water heater installation near me.' I map these keywords to specific pages on your site and create content that genuinely answers the questions behind those searches. Google rewards pages that satisfy user intent, so the content strategy is built around being genuinely useful — not just stuffing keywords.",
      "Technical SEO is the invisible foundation that determines whether Google can even find and properly index your pages. I audit and fix issues like slow page load times, broken internal links, missing meta tags, duplicate content, poor mobile usability, crawl errors, and improper redirect chains. I implement structured data markup (JSON-LD) so Google understands your business type, location, services, and reviews. I set up proper XML sitemaps, robots.txt configuration, and canonical tags to guide search engines through your site efficiently. Many businesses lose rankings to technical problems they don't even know exist — a thorough technical audit often produces some of the fastest wins.",
      "Local SEO is critical for businesses that serve specific geographic areas. I optimize your Google Business Profile with accurate categories, complete service descriptions, proper hours, photos, and Q&A content. I build local citations across directories like Yelp, Apple Maps, Bing Places, and industry-specific platforms to strengthen your NAP (name, address, phone) consistency. I also implement local schema markup on your website so search engines connect your site to your physical location and service area. For businesses in Nashville and the surrounding counties, local SEO is often the single highest-ROI marketing investment you can make.",
      "My SEO work covers the full spectrum: keyword research and strategy, on-page optimization, technical SEO audits and fixes, content planning and writing, local SEO for Google Maps and Business Profile, and performance tracking with regular reporting. I also offer generative engine optimization (GEO) and AI-powered SEO services for businesses that want to stay ahead as search evolves toward AI-generated answers from ChatGPT, Perplexity, and Google AI Overviews. These services complement each other — strong traditional SEO feeds your AI search visibility, and vice versa.",
      "SEO is a long-term investment that compounds over time. Most businesses start seeing measurable improvements in three to six months, with results growing stronger as authority builds. Some quick wins — like fixing technical issues or optimizing your Google Business Profile — can show impact much sooner. I provide monthly reporting that tracks your rankings, organic traffic, conversion rates, and the specific keywords driving visitors to your site. Whether you need a one-time audit or ongoing monthly SEO management, I'll give you a clear picture of where you stand and a realistic plan for getting where you want to be."
    ],
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
        answer: "Absolutely. Local SEO is critical for businesses that serve specific geographic areas. It helps you appear in Google's local map pack, Google Business Profile results, and location-based searches. For businesses in Nashville, Hendersonville, Gallatin, and surrounding areas, local SEO is one of the highest-ROI marketing investments you can make."
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
    tagline: "Straight Answers From Someone Who's Built It All",
    description: "After 20 years building websites for real estate firms, healthcare practices, restaurants, and service businesses, I've seen what works and what doesn't. If you're not sure what your business needs online — or you're worried you're paying for the wrong things — I'll give you an honest assessment and a clear plan forward. No jargon, no upsell.",
    overview: [
      "Most business owners in Nashville and the surrounding area know they need a better online presence, but they're not sure where to start — or whether the advice they're getting from agencies and vendors is actually sound. That's where consulting comes in. I sit down with you, look at what you have, and tell you what's working, what's not, and what you should prioritize with your budget. Sometimes that means you need a new website. Sometimes it means your current site just needs a few fixes and better SEO. I'll tell you the truth either way, even when it means recommending a less expensive option.",
      "When Coldwell Banker Commercial came to me, they had an outdated site on an expensive platform they'd outgrown. I evaluated their options, recommended a modern tech stack that would cut their hosting costs and improve load times, and laid out a migration plan that minimized downtime. For a fitness studio in Nashville, consulting meant something completely different — they needed guidance on which booking platform to integrate and how to structure their membership tiers online. The advice is always tailored to the business, because a cookie-cutter recommendation would defeat the entire purpose of consulting.",
      "One of the most common consulting scenarios I encounter is the 'agency audit.' A business is paying an agency $2,000 to $5,000 per month for SEO, social media, or website maintenance, and they have no idea whether they're getting real value. I review the agency's work, evaluate their reporting, and give you a straight answer about whether the spend is justified. In many cases, I find that businesses are paying for services they could handle in-house with a little training, or that the agency's SEO work is outdated and no longer effective. Having an independent expert review your vendors can save you thousands of dollars per year.",
      "My consulting covers website strategy and planning, technology stack recommendations, platform selection guidance, digital transformation roadmaps, vendor evaluation, project scoping, and performance and security audits. I also offer training sessions for teams that need to manage their own content or social media more effectively. Whether you need a one-hour strategy session or an ongoing advisory relationship, I work on your terms. Every consulting engagement starts with a clear scope and deliverable so you know exactly what you're getting.",
      "Technology selection is another area where consulting prevents costly mistakes. Should you use WordPress, Shopify, Squarespace, or a custom build? Do you need a CRM, and if so which one? Should you invest in email marketing or social media? What about AI tools for your business? These decisions have long-term implications for cost, flexibility, and scalability. I evaluate the options against your specific needs, budget, and technical capabilities — not based on which platform pays the highest referral commission. My recommendations are vendor-neutral and based purely on what's the best fit for your situation.",
      "The value of consulting is avoiding expensive mistakes. I've seen businesses spend tens of thousands of dollars on platforms they didn't need, plugins that slowed their site to a crawl, or marketing campaigns that targeted the wrong audience entirely. Twenty years of building for every kind of business — healthcare, fitness, hospitality, real estate, home services — means I've seen most of the pitfalls before. I'd rather help you skip them than rebuild after the fact. A two-hour consulting session that costs a few hundred dollars can easily save you five or ten times that amount by steering you away from a bad decision before you commit."
    ],
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
    ],
    faqs: [
      {
        question: "What does a web consulting engagement look like?",
        answer: "It depends on what you need. Some clients book a single two-hour strategy session to get clarity on a specific decision — like which platform to use or whether their current site needs a rebuild. Others work with me on an ongoing advisory basis where I provide regular guidance on technology decisions, vendor management, and digital strategy. Every engagement starts with a free 30-minute discovery call so I can understand your situation and recommend the right approach."
      },
      {
        question: "How is consulting different from hiring a developer?",
        answer: "Consulting gives you expert guidance without committing to a full development project. If you are not sure what your business needs, consulting helps you figure that out before you spend money building the wrong thing. I evaluate your current situation, identify the highest-impact opportunities, and give you a clear roadmap — whether you implement it yourself, hire another team, or work with me."
      },
      {
        question: "Can you help evaluate proposals from other agencies?",
        answer: "Yes, and this is one of the most valuable things I do for clients. I have seen hundreds of agency proposals over twenty years, and I can quickly identify when a vendor is recommending more than you need, using outdated technology, or quoting above market rate. I will give you an honest assessment so you can negotiate from a position of knowledge."
      },
      {
        question: "Do you offer ongoing advisory retainers?",
        answer: "Yes. Monthly advisory retainers give you regular access to expert guidance without the cost of a full-time hire. This typically includes scheduled strategy calls, priority email support, technology recommendations, and periodic reviews of your digital performance. It is ideal for businesses that need consistent strategic input as they grow their online presence."
      },
      {
        question: "What industries do you have experience consulting for?",
        answer: "Over twenty years I have consulted for businesses across healthcare, fitness, real estate, hospitality, home services, professional services, retail, and nonprofits. This cross-industry experience means I bring a broader perspective to every engagement — solutions that work in one industry often translate effectively to others with the right adaptation."
      }
    ]
  },
  "social-media": {
    slug: "social-media",
    icon: Share2,
    title: "Social Media",
    tagline: "Posts That Drive Action, Not Just Likes",
    description: "I manage social media for businesses that need real results — not vanity metrics. From promoting Southern Collective's tasting events to driving class signups for Champions Adaptive Fitness, I build content calendars that connect your social presence to actual business outcomes. Reviews, reputation management, and advertising are all part of the package.",
    overview: [
      "Social media management for small businesses is often done poorly — random posts when someone remembers, no connection to business goals, and no idea whether any of it is working. I take a different approach. Every social media strategy I build starts with one question: what do you want people to do after they see your content? For Southern Collective Spirit Co., the answer was event attendance and bottle reservations. For Champions Adaptive Fitness, it was class signups and community building. The content calendar, platforms, and posting schedule all flow from that answer — not from a generic content template.",
      "I manage your presence across Facebook, Instagram, Google Business Profile, and Yelp — creating consistent, branded content that speaks directly to your target audience in Nashville, Hendersonville, Gallatin, and beyond. This includes writing posts, designing graphics, scheduling content, responding to comments, and monitoring reviews. I also handle your Google Business Profile optimization, which is one of the single highest-impact things you can do for local search visibility. Your Google Business Profile is often the first thing potential customers see when they search for your business or your industry — it needs to be complete, accurate, and actively managed.",
      "Content creation is where most businesses struggle. You know you should be posting, but coming up with ideas, writing copy, and designing graphics on top of running your actual business is overwhelming. I handle the entire content pipeline: I develop a monthly content calendar based on your business goals and seasonal opportunities, write all the copy in your brand voice, design graphics that match your visual identity, and schedule everything in advance. You review and approve before anything goes live, but the heavy lifting is done for you. The result is a consistent, professional social presence without consuming your time.",
      "Online reputation management is a critical part of social media that most businesses overlook. I monitor your reviews across Google, Yelp, and Facebook, craft professional responses, and build strategies to encourage satisfied customers to leave reviews. For local businesses, a strong review profile is often the deciding factor between a potential customer choosing you or your competitor. A single unanswered negative review can cost you dozens of potential customers, while a thoughtful response to criticism can actually build trust. I respond to every review — positive and negative — in a professional tone that reflects your brand values.",
      "Google Business Profile management deserves special attention because it directly affects your visibility in local search results and Google Maps. I optimize your profile with the right categories, detailed service descriptions, regular photo uploads, Google Posts updates, Q&A management, and review responses. Businesses with active, optimized Google Business Profiles consistently outperform competitors who let their profiles sit untouched. For service-area businesses in Nashville and surrounding counties, your GBP is often more important than your website for generating phone calls and directions requests.",
      "I also run targeted social media advertising when organic reach isn't enough. Facebook and Instagram ads, properly targeted to your service area and customer demographics, can drive measurable results — from website visits and phone calls to in-store traffic and online bookings. I handle audience targeting, creative development, A/B testing, and budget optimization. Every ad campaign I run includes clear reporting so you know exactly what your spend is producing — cost per click, cost per lead, and return on ad spend. No black boxes, no guesswork, and no minimum contract commitments."
    ],
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
    ],
    faqs: [
      {
        question: "Which social media platforms should my business be on?",
        answer: "It depends on your industry and where your customers spend their time. For most local businesses in Nashville and the surrounding area, Facebook and Google Business Profile are essential. Instagram is important for visually-driven businesses like restaurants, fitness studios, and retailers. Yelp matters for service businesses where reviews drive decisions. I will assess your specific situation and recommend the platforms that will have the most impact — you do not need to be everywhere, just in the right places."
      },
      {
        question: "How often should I post on social media?",
        answer: "Consistency matters more than frequency. For most small businesses, three to five quality posts per week across your key platforms is more effective than daily posts with low-effort content. I build content calendars that maintain a steady, sustainable cadence — each post tied to a business goal like driving traffic, building community, or generating leads."
      },
      {
        question: "Do you handle responding to reviews?",
        answer: "Yes. Review management is a core part of my social media service. I monitor your reviews across Google, Yelp, and Facebook, draft professional responses to both positive and negative reviews, and build strategies to encourage happy customers to leave reviews. A strong review profile is one of the most powerful local SEO signals and a major factor in customer decision-making."
      },
      {
        question: "Can you run social media ads for my business?",
        answer: "Yes. I run targeted Facebook and Instagram advertising campaigns for clients who need more reach than organic posting alone can deliver. Every campaign includes audience targeting based on your service area and customer demographics, clear budget recommendations, and transparent reporting on results. You will know exactly what your ad spend is producing."
      },
      {
        question: "What is included in social media management?",
        answer: "A typical management package includes content strategy and calendar planning, post creation with graphics and copy, scheduling and publishing, community management and comment responses, review monitoring and response, monthly performance reporting, and Google Business Profile optimization. Packages are customized based on which platforms you need and how much content your business requires."
      }
    ]
  },
  "digital-strategy": {
    slug: "digital-strategy",
    icon: Zap,
    title: "Digital Strategy",
    tagline: "A Plan That Connects the Dots",
    description: "Most businesses have a website, some social media, maybe a few blog posts — but none of it is connected. I bring it all together into one strategy that makes sense: your website feeds your SEO, your content drives social, and everything points toward the same goal. I've built these roadmaps for Coldwell Banker Commercial, Fine Assets, and businesses across Nashville.",
    overview: [
      "Digital strategy is where the big picture comes together. Most small businesses in the Nashville area end up with a patchwork of digital tools — a website from one vendor, social media managed by an intern, SEO from a third party, and no clear picture of whether any of it is driving revenue. I build a cohesive digital strategy that connects every piece of your online presence into one plan with clear priorities and measurable goals. The goal isn't to do everything — it's to do the right things in the right order with a clear understanding of why.",
      "When I built the digital strategy for Fine Assets Personal Training, it wasn't just about a nice website. The website needed to drive booking conversions, the blog content needed to rank for fitness-related search terms in Nashville, the social media needed to showcase real client transformations, and all of it needed to feed into a consistent brand message. The result was a 3x increase in online bookings. That's what a real digital strategy produces — not just activity, but outcomes you can measure and tie directly to revenue.",
      "My approach starts with a deep dive into your business: who your customers are, how they find you, what your competitors are doing, and where the gaps are. I analyze your current website performance, search engine rankings, social media engagement, and online reputation to establish a baseline. From there, I map out a prioritized roadmap that covers your website, SEO, content marketing, social media, email, and paid advertising — depending on what actually makes sense for your industry and budget. A restaurant in Nashville has very different digital needs than a healthcare practice in Hendersonville or a home services company in Gallatin. The strategy should reflect that — not force every business into the same playbook.",
      "Customer journey mapping is a critical part of every digital strategy I develop. I trace the path from how a potential customer first becomes aware of your business — whether through Google search, social media, a referral, or an AI-generated recommendation — through every touchpoint until they become a paying customer. This reveals where you're losing people: maybe your website isn't converting visitors who arrive from Google, or maybe your social media content isn't reaching the right audience. Once we understand the journey, we can fix the leaks and strengthen the path to conversion at every stage.",
      "Budget allocation is where most businesses get strategy wrong. They either spread their budget too thin across too many channels or dump everything into one tactic without understanding whether it's the right fit. I help you prioritize based on impact and feasibility. For a new business, that might mean investing heavily in Google Business Profile optimization and local SEO before touching paid advertising. For an established business with a strong website, the best return might come from a content marketing strategy that builds organic search traffic over time. Every recommendation comes with a realistic timeline for results and a clear connection to business outcomes.",
      "I also factor in emerging channels like generative engine optimization (GEO) and AI search visibility, because the way people discover businesses is changing rapidly. A forward-looking digital strategy accounts for where search and discovery are headed, not just where they are today. Businesses that start optimizing for AI search now will have a significant head start as adoption grows. Whether you need a full strategic overhaul or just a clear-eyed assessment of what's working and what to prioritize next, I'll give you a roadmap built on twenty years of experience across every type of business — with specific action items, timelines, and success metrics so you know exactly what to do and when to do it."
    ],
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
    ],
    faqs: [
      {
        question: "What is a digital strategy and why do I need one?",
        answer: "A digital strategy is a clear, prioritized plan that connects all of your online activities — website, SEO, content, social media, email, and advertising — into a cohesive system that drives measurable business results. Without a strategy, most businesses end up with disconnected efforts that waste money and produce inconsistent results. A strategy ensures every dollar and hour you spend online is moving you toward a specific goal."
      },
      {
        question: "How is digital strategy different from just getting a website built?",
        answer: "A website is one piece of the puzzle. Digital strategy looks at the entire picture: how customers find you, what they experience when they arrive, how you convert visitors into leads, and how you keep them engaged over time. It includes your website, but also your SEO, content marketing, social media, reputation management, and paid advertising — all working together. Building a website without a strategy is like opening a store without a business plan."
      },
      {
        question: "How long does it take to develop a digital strategy?",
        answer: "A comprehensive digital strategy typically takes two to three weeks to develop, including the research, competitive analysis, and roadmap documentation. The deliverable is a prioritized action plan with specific recommendations, timelines, and budget guidance. Some clients then implement the strategy themselves, while others work with me on an ongoing basis to execute each phase."
      },
      {
        question: "What does the strategy deliverable include?",
        answer: "You receive a comprehensive document covering your current digital landscape assessment, competitive analysis, customer journey mapping, prioritized recommendations across all digital channels, specific action items with timelines, budget allocation guidance, KPI framework for measuring success, and a phased implementation roadmap. It is a practical playbook, not a theoretical document."
      },
      {
        question: "Can you help implement the strategy too?",
        answer: "Absolutely. Many clients hire me for both strategy and execution. I can handle website development, SEO, content creation, social media management, and ongoing optimization — all aligned to the strategic roadmap. This ensures consistency between the plan and the implementation, and you deal with one person instead of coordinating multiple vendors."
      }
    ]
  },
  "geo-optimization": {
    slug: "geo-optimization",
    icon: Globe,
    title: "Generative Engine Optimization",
    tagline: "Be the Answer When AI Does the Searching",
    description: "People are asking ChatGPT, Perplexity, and Google AI for recommendations instead of scrolling through search results. If your business isn't showing up in those AI-generated answers, you're invisible to a growing share of your market. I optimize your content, structured data, and authority signals so AI engines cite and recommend your business — the same approach I use for my own clients across healthcare, fitness, and hospitality.",
    overview: [
      "Generative engine optimization is the next evolution of search visibility. Right now, a growing number of people are skipping Google entirely — they're asking ChatGPT, Perplexity, or Google AI Overviews to recommend a web developer in Nashville, find the best fitness studio in Hendersonville, or suggest a healthcare provider in Gallatin. If your business isn't structured in a way that AI engines can parse, trust, and cite, you simply won't appear in those answers. GEO changes that by making your business visible, citable, and trustworthy to AI-powered search platforms.",
      "GEO is different from traditional SEO because AI search engines don't return a list of links — they generate a direct answer and cite sources. Getting cited requires a combination of structured data (Schema.org and JSON-LD markup), strong entity authority (consistent naming, clear service descriptions, credible backlinks), and content formatted in ways that AI models can easily understand and reference. I've implemented these strategies across my own client sites — from healthcare portals to hospitality businesses — and I use the same techniques to ensure they show up in AI-generated recommendations when potential customers ask questions in their industry.",
      "Entity authority is the foundation of GEO success. AI search engines need to identify your business as a distinct entity — not just a keyword match, but a recognized organization with a clear name, location, services, and reputation. I build this authority through consistent NAP (name, address, phone) data across the web, structured data markup on your website, Wikipedia and Wikidata presence where applicable, industry directory listings, and authoritative content that positions your business as a subject-matter expert. The more clearly AI engines can identify and trust your entity, the more likely they are to cite you in generated answers.",
      "The process starts with an AI search audit: I test how your brand currently appears when people ask AI platforms about your industry and service area. I run dozens of queries across ChatGPT, Perplexity, Google AI Overviews, and Bing Copilot to see whether your business is mentioned, how accurately it's described, and which competitors are being cited instead. For most local businesses, the answer is alarming — they don't appear at all, or worse, their competitors do. From there, I build a GEO roadmap that targets the specific AI platforms your customers use most.",
      "Content formatting for AI citation is a technical discipline that goes beyond good writing. AI models parse content differently than human readers — they prioritize clear definitions, structured lists, direct answers to common questions, and factual statements backed by specifics. I restructure your website content to include the types of information AI engines are most likely to quote: service descriptions with specific details, location-based content, FAQ-style answers, statistical claims with context, and comparison content that positions your business against alternatives. This doesn't mean writing for robots — it means writing clearly and specifically, which also happens to be better for human readers.",
      "GEO works best alongside strong traditional SEO — AI search engines often pull from well-ranked, authoritative sources, so the two strategies reinforce each other. I offer GEO as a standalone service or as part of a comprehensive search strategy that includes traditional SEO and AI-powered SEO tools. The businesses that invest in GEO now will have a significant head start as AI search adoption continues to grow. I monitor your AI search visibility on an ongoing basis and adjust the strategy as platforms evolve — because the AI search landscape is changing rapidly, and what works today may need refinement as these platforms update their algorithms and citation methods."
    ],
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
    tagline: "Smarter SEO, Not Harder SEO",
    description: "I use AI tools to do in hours what used to take weeks — keyword research, content gap analysis, technical audits, and ranking predictions. This isn't about replacing strategy with automation. It's about giving your SEO sharper data and faster execution. The same AI-powered approach helped me identify content opportunities for Pinnacle Wellness and Fine Assets that manual research would have missed.",
    overview: [
      "AI-powered SEO is about using artificial intelligence as a force multiplier for search engine optimization. The fundamentals of SEO haven't changed — you still need strong content, solid technical foundations, and real authority. What's changed is how fast and precisely we can execute. AI tools let me run keyword research across thousands of variations in minutes, identify content gaps your competitors are exploiting, audit hundreds of pages for technical issues simultaneously, and predict which ranking opportunities will deliver the most traffic. The result is SEO that moves faster, targets more precisely, and wastes less of your budget on low-impact activities.",
      "When I worked on the SEO strategy for Pinnacle Wellness, AI-powered analysis identified a cluster of long-tail healthcare keywords that manual research had completely missed. These were specific questions patients in Hendersonville were actually searching for — things traditional keyword tools ranked too low to surface. By creating targeted content around those queries, we captured traffic that was both highly relevant and low competition. The same approach helped Fine Assets identify untapped fitness content topics in the Nashville market. These aren't theoretical examples — they're proof that AI analysis surfaces opportunities that human research alone would miss.",
      "AI-powered keyword research goes far beyond typing a seed keyword into a tool and looking at the list. I use natural language processing to analyze the semantic relationships between keywords, identify topic clusters that should be covered together, and map search intent across entire categories. This produces a content strategy that covers your topic comprehensively — not just individual keywords, but the full ecosystem of questions and information that your potential customers are searching for. Google rewards topical authority, and AI analysis is the fastest way to identify every piece of content you need to establish it.",
      "My AI SEO workflow combines multiple specialized tools: SurferSEO for content optimization scoring, Clearscope for content intelligence and gap analysis, SEMrush AI features for competitive research, and custom natural language processing analysis for understanding search intent at scale. I also use predictive analytics to forecast which keywords and content investments will produce the best returns over the next six to twelve months, so your SEO budget goes where it will have the most impact. Content scoring is particularly valuable — it compares your pages against the top-ranking results for each target keyword and identifies exactly what's missing in terms of topics covered, word count, heading structure, and semantic relevance.",
      "Technical SEO audits powered by AI can analyze your entire site in minutes instead of days. I use automated crawling and analysis to identify broken links, redirect chains, duplicate content, missing meta tags, slow-loading pages, mobile usability issues, and hundreds of other technical factors that affect your rankings. The AI doesn't just find the problems — it prioritizes them by estimated impact, so we fix the issues that will move the needle first. For larger sites with hundreds of pages, this kind of automated analysis is the only practical way to maintain technical health.",
      "AI SEO doesn't replace human judgment — it sharpens it. I still make every strategic decision, interpret the data, and write or edit content with a human voice. The AI handles the grunt work: processing massive datasets, scoring content against ranking factors, identifying technical issues across hundreds of URLs, and generating insights that would take weeks to produce manually. Combined with traditional SEO fundamentals and GEO optimization, AI SEO gives your business every advantage in modern search. The businesses using AI-powered SEO workflows are consistently outpacing competitors who rely solely on manual processes — not because the strategy is different, but because the execution is faster, more thorough, and more data-driven."
    ],
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

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];

  if (!service) {
    notFound();
  }

  // Get adjacent services for navigation
  const serviceSlugs = Object.keys(services);
  const currentIndex = serviceSlugs.indexOf(slug);
  const prevService = currentIndex > 0 ? services[serviceSlugs[currentIndex - 1] as ServiceSlug] : null;
  const nextService = currentIndex < serviceSlugs.length - 1 ? services[serviceSlugs[currentIndex + 1] as ServiceSlug] : null;

  const ServiceIcon = service.icon;

  const faqJsonLd = 'faqs' in service && service.faqs ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq: { question: string; answer: string }) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: `https://dustintn.com/services/${slug}`,
    provider: {
      '@type': 'ProfessionalService',
      name: 'DustinTN',
      url: 'https://dustintn.com',
      telephone: '+1-615-788-2453',
      areaServed: [
        { '@type': 'City', name: 'Nashville', addressRegion: 'TN' },
        { '@type': 'City', name: 'Hendersonville', addressRegion: 'TN' },
        { '@type': 'City', name: 'Gallatin', addressRegion: 'TN' },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
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
        <section className="py-20">
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
            <div className="grid lg:grid-cols-2 gap-16 items-start">
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

        {/* In-Depth Overview */}
        {'overview' in service && (
          <section className="py-20 bg-black">
            <div className="container mx-auto px-6 lg:px-12">
              <AnimatedSection className="max-w-4xl mx-auto">
                <span className="section-label mb-6 block">In Depth</span>
                <h2 className="text-headline mb-10">
                  A Closer <span className="text-accent">Look</span>
                </h2>
                <div className="space-y-6">
                  {(service as { overview: string[] }).overview.map((paragraph: string, index: number) => (
                    <p key={index} className="text-white/50 text-lg leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Features */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-16">
              <span className="section-label mb-6 inline-flex justify-center">What&apos;s Included</span>
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
                Let&apos;s discuss how our {service.title.toLowerCase()} services can help your business grow.
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
