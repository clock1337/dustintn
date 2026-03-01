import { ArrowRight, ArrowLeft, Clock, Calendar, Tag, Video, Phone, CheckCircle2, Globe, Search, Wrench, Share2, HelpCircle, Code2, BrainCircuit, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import ResourceSnippets from "@/components/ResourceSnippets";
import ProudlyServing from "@/components/ProudlyServing";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import CopyLinkButton from "@/components/CopyLinkButton";
import { resources, getResourceBySlug, getCategoryPageBySlug } from "@/data/resources";

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Web Development": Code2,
  "SEO & Search": Search,
  "AI SEO & GEO": BrainCircuit,
  "Social Media": Share2,
  "Digital Strategy": Zap,
};

export function generateStaticParams() {
  const articleSlugs = resources.map((r) => ({ slug: r.slug }));
  const categorySlugs = [
    { slug: 'web-development' },
    { slug: 'seo-search' },
    { slug: 'ai-seo-geo' },
    { slug: 'social-media' },
    { slug: 'digital-strategy' },
  ];
  return [...articleSlugs, ...categorySlugs];
}

function CategoryLandingPage({ slug }: { slug: string }) {
  const categoryPage = getCategoryPageBySlug(slug)!;
  const categoryResources = resources.filter(r => r.category === categoryPage.name);
  const IconComponent = categoryIcons[categoryPage.name] || Globe;

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation currentPage="resources" />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-dark-gray"></div>
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            {/* Back link */}
            <Link
              href="/resources"
              className="inline-flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-full text-white/80 hover:text-white hover:bg-accent transition-all duration-300 border border-white/10 hover:border-accent mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">All Resources</span>
            </Link>

            <AnimatedSection>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                  <IconComponent className="w-7 h-7 text-accent" />
                </div>
                <span className="px-4 py-1.5 bg-accent/10 rounded-full text-sm text-accent font-medium">
                  {categoryPage.name}
                </span>
              </div>

              <h1 className="text-headline mb-10">{categoryPage.headline}</h1>

              <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14">
                {/* Left — Description */}
                <div>
                  {categoryPage.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-lg text-white/50 leading-relaxed mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Right — What You'll Learn */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 lg:p-8">
                  <h2 className="text-lg font-semibold mb-5">
                    What You&apos;ll <span className="text-accent">Learn</span>
                  </h2>
                  <div className="space-y-3">
                    {categoryPage.whatYoullLearn.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-semibold">
                {categoryPage.name} <span className="text-accent">Guides</span>
              </h2>
              <p className="text-white/50 mt-2">{categoryResources.length} {categoryResources.length === 1 ? 'guide' : 'guides'} available</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryResources.map((resource, index) => (
                <AnimatedSection key={resource.slug} delay={index * 100}>
                  <Link
                    href={`/resources/${resource.slug}`}
                    className="group block bg-dark-gray rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-500 h-full overflow-hidden"
                  >
                    <div className="aspect-[5/2] relative overflow-hidden">
                      <Image
                        src={resource.image}
                        alt={resource.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-gray via-dark-gray/20 to-transparent"></div>
                    </div>

                    <div className="p-6 lg:p-8 flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex items-center gap-1 text-xs text-white/40">
                          <Clock className="w-3 h-3" />
                          {resource.readTime}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-white/40">
                          <Calendar className="w-3 h-3" />
                          {resource.publishDate}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors leading-tight">
                        {resource.title}
                      </h3>

                      <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                        {resource.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-accent group-hover:gap-3 transition-all">
                        <span className="text-sm font-medium">Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-dark-gray relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.1),transparent_70%)]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <span className="section-label mb-6 inline-flex justify-center">Need Expert Help?</span>
              <h2 className="text-headline mb-8">
                Let&apos;s Put These Ideas Into <span className="text-accent">Action</span>
              </h2>
              <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
                Reading about it is a great start. When you&apos;re ready for expert help implementing these strategies,
                I&apos;m here for you.
              </p>
              <Link href="/contact" className="btn-pill btn-pill-primary group">
                Let&apos;s Talk
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        <ProudlyServing />
        <Footer />
      </main>
    </div>
  );
}

function ArticlePage({ slug }: { slug: string }) {
  const resource = getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  // Get adjacent resources for navigation
  const currentIndex = resources.findIndex(r => r.slug === slug);
  const prevResource = currentIndex > 0 ? resources[currentIndex - 1] : null;
  const nextResource = currentIndex < resources.length - 1 ? resources[currentIndex + 1] : null;

  const articleUrl = `https://dustintn.com/resources/${slug}`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: resource.title,
    description: resource.excerpt,
    url: articleUrl,
    image: resource.image,
    datePublished: resource.publishDate,
    author: {
      '@type': 'Person',
      name: 'Dustin Smith',
      jobTitle: 'Web Developer & Digital Marketing Specialist',
      knowsAbout: ['Web Development', 'SEO', 'Digital Marketing', 'Brand Identity', 'Next.js', 'React'],
      worksFor: {
        '@type': 'ProfessionalService',
        name: 'DustinTN',
        url: 'https://dustintn.com',
      },
    },
    publisher: {
      '@type': 'ProfessionalService',
      name: 'DustinTN',
      url: 'https://dustintn.com',
      logo: 'https://dustintn.com/og-image.png',
    },
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navigation currentPage="resources" />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-dark-gray"></div>
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            {/* Back link */}
            <Link
              href="/resources"
              className="inline-flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-full text-white/80 hover:text-white hover:bg-accent transition-all duration-300 border border-white/10 hover:border-accent mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">All Resources</span>
            </Link>

            <AnimatedSection className="max-w-4xl">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-4 py-1.5 bg-accent/10 rounded-full text-sm text-accent font-medium">
                  {resource.category}
                </span>
                <span className="flex items-center gap-2 text-sm text-white/40">
                  <Clock className="w-4 h-4" />
                  {resource.readTime}
                </span>
                <span className="flex items-center gap-2 text-sm text-white/40">
                  <Calendar className="w-4 h-4" />
                  {resource.publishDate}
                </span>
              </div>

              <h1 className="text-headline mb-6">{resource.title}</h1>
              <p className="text-xl text-white/50 leading-relaxed max-w-3xl mb-8">
                {resource.excerpt}
              </p>

              {/* Author Byline */}
              <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-semibold text-lg">DS</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Dustin Smith</div>
                  <div className="text-sm text-white/50">Web Developer & Digital Marketing Specialist &middot; 20+ years experience</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Article Overview: Image + Summary */}
        <section className="pb-8 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1fr] gap-8 items-start">
              {/* Article Image */}
              <AnimatedSection>
                <div className="aspect-[16/10] relative overflow-hidden rounded-2xl">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
                </div>
              </AnimatedSection>

              {/* In This Article */}
              <AnimatedSection delay={150}>
                <div className="bg-dark-gray rounded-2xl p-6 lg:p-8 border border-white/5 h-full">
                  <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-5">In This Article</h2>
                  <nav className="space-y-3">
                    {resource.sections.map((section, idx) => (
                      <a
                        key={idx}
                        href={`#${slugify(section.heading)}`}
                        className="flex items-start gap-3 group cursor-pointer"
                      >
                        <span className="text-xs font-semibold text-accent/60 mt-0.5 w-5 flex-shrink-0">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm text-white/60 leading-snug group-hover:text-white transition-colors">
                          {section.heading}
                        </span>
                      </a>
                    ))}
                  </nav>

                  {/* Quick Stats */}
                  <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-xs text-white/40">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      {resource.readTime}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/40">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      {resource.publishDate}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Article Content + Sidebar */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_340px] lg:items-start gap-12 lg:gap-16">
              {/* Main Article Content */}
              <div>
                {resource.sections.map((section, index) => (
                  <AnimatedSection key={index} className="mb-16 last:mb-0">
                    <h2
                      id={slugify(section.heading)}
                      className="text-2xl lg:text-3xl font-semibold mb-6 scroll-mt-28"
                    >
                      {section.heading}
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-6">
                      {section.content}
                    </p>
                    {section.list && (
                      <ul className="space-y-3">
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

                {/* Tags + Share */}
                <div className="mt-16 pt-8 border-t border-white/5">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <Tag className="w-4 h-4 text-white/40" />
                      {resource.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-black/50 rounded-full text-sm text-white/60 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Share buttons */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/40 mr-1">Share</span>
                      <CopyLinkButton url={articleUrl} />
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(resource.title)}&url=${encodeURIComponent(articleUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/30 rounded-lg flex items-center justify-center text-white/50 hover:text-accent transition-all"
                        title="Share on X"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                      </a>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/30 rounded-lg flex items-center justify-center text-white/50 hover:text-accent transition-all"
                        title="Share on Facebook"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/30 rounded-lg flex items-center justify-center text-white/50 hover:text-accent transition-all"
                        title="Share on LinkedIn"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar — Free Consultation + CTA */}
              <aside className="lg:sticky lg:top-28 space-y-6">
                <div>
                  <div className="bg-black rounded-2xl border border-white/5 overflow-hidden">
                    {/* Sidebar Image */}
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
                        alt="Free business consultation"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                      {/* Overlay badges */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex flex-wrap gap-1.5">
                          <span className="flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full text-[11px] text-white/80 border border-white/10">
                            <Video className="w-3 h-3 text-accent" />
                            Google Meet
                          </span>
                          <span className="flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full text-[11px] text-white/80 border border-white/10">
                            <Phone className="w-3 h-3 text-accent" />
                            Phone
                          </span>
                          <span className="flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full text-[11px] text-white/80 border border-white/10">
                            <Clock className="w-3 h-3 text-accent" />
                            30 Min
                          </span>
                        </div>
                      </div>

                      {/* FREE badge */}
                      <div className="absolute -top-0 -right-0 bg-accent rounded-bl-2xl px-4 py-2 shadow-lg shadow-accent/20">
                        <span className="text-sm font-bold">FREE</span>
                      </div>
                    </div>

                    {/* Sidebar Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2">
                        Free 30-Minute <span className="text-accent">Exploratory Call</span>
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed mb-5">
                        Not sure where to start? Let&apos;s talk — no obligation, no pressure.
                      </p>

                      <div className="space-y-2.5 mb-5">
                        {[
                          { icon: Globe, text: "Online presence planning" },
                          { icon: Search, text: "SEO & getting found" },
                          { icon: Wrench, text: "Maintenance & updates" },
                          { icon: Share2, text: "Social media strategy" },
                          { icon: HelpCircle, text: "Any digital questions" },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2.5">
                            <div className="w-6 h-6 bg-accent/10 rounded-md flex items-center justify-center flex-shrink-0">
                              <item.icon className="w-3 h-3 text-accent" />
                            </div>
                            <span className="text-white/60 text-xs">{item.text}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-5 text-[11px] text-white/40">
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-accent" />
                          No obligation
                        </span>
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-accent" />
                          20+ years exp
                        </span>
                      </div>

                      <Link href="/free-consultation" className="btn-pill btn-pill-primary w-full justify-center text-sm group">
                        Book My Free Call
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Article CTA */}
                <div>
                  <div className="bg-black rounded-2xl border border-white/5 p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-accent/5 rounded-full blur-[80px]"></div>
                    <div className="relative z-10">
                      <h3 className="text-lg font-semibold mb-2">
                        {resource.cta.heading}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed mb-5">
                        {resource.cta.description}
                      </p>
                      <Link
                        href={resource.cta.buttonHref}
                        className="btn-pill btn-pill-primary w-full justify-center text-sm group"
                      >
                        {resource.cta.buttonText}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <ResourceSnippets
          excludeSlug={slug}
          category={resource.category}
          heading="Related Resources"
          subheading="Continue reading and learning"
        />

        {/* Article Navigation */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 lg:p-12">
              <div className="flex justify-between items-center">
                {prevResource ? (
                  <Link
                    href={`/resources/${prevResource.slug}`}
                    className="group flex items-center gap-4 flex-1"
                  >
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-accent transition-all duration-300 border border-white/10 group-hover:border-accent">
                      <ArrowLeft className="w-5 h-5" />
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Previous Article</div>
                      <div className="font-semibold text-lg group-hover:text-accent transition-colors line-clamp-1">{prevResource.title}</div>
                    </div>
                  </Link>
                ) : (
                  <div className="flex-1"></div>
                )}

                <Link
                  href="/resources"
                  className="hidden md:flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/80 hover:text-white hover:bg-accent transition-all duration-300 border border-white/10 hover:border-accent mx-8"
                >
                  <span className="text-sm font-medium">All Resources</span>
                </Link>

                {nextResource ? (
                  <Link
                    href={`/resources/${nextResource.slug}`}
                    className="group flex items-center gap-4 text-right flex-1 justify-end"
                  >
                    <div className="hidden sm:block">
                      <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Next Article</div>
                      <div className="font-semibold text-lg group-hover:text-accent transition-colors line-clamp-1">{nextResource.title}</div>
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

        <ProudlyServing />
        <Footer />
      </main>
    </div>
  );
}

export default async function ResourceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Check if this is a category page
  const categoryPage = getCategoryPageBySlug(slug);
  if (categoryPage) {
    return <CategoryLandingPage slug={slug} />;
  }

  return <ArticlePage slug={slug} />;
}
