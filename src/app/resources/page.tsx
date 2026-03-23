import { ArrowRight, Clock, CheckCircle2, Video, Phone, Globe, Search, Wrench, Share2, Calendar, HelpCircle, Code2, BrainCircuit, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import ProudlyServing from "@/components/ProudlyServing";
import Footer from "@/components/Footer";
import { resources, getCategorySlug } from "@/data/resources";
import AnimatedSection from "@/components/AnimatedSection";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation currentPage="resources" />

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-dark-gray"></div>
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[150px]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="max-w-3xl">
              <span className="section-label mb-6 block">Free Resources</span>
              <h1 className="text-headline">
                Guides & Tips to <span className="text-accent">Grow</span> Your Business Online
              </h1>
              <p className="text-xl text-white/50 leading-relaxed">
                Practical, actionable resources on web development, SEO, social media, and digital strategy.
                Everything you need to build and grow your online presence.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Intro Prose */}
        <section className="py-20 bg-black border-t border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="max-w-4xl mx-auto">
              <span className="section-label mb-6 block">Why These Guides Exist</span>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-8 leading-tight">
                Honest Advice From <span className="text-accent">20 Years</span> in the Trenches
              </h2>
              <div className="space-y-6 text-white/50 text-lg leading-relaxed">
                <p>
                  After two decades of building websites, running SEO campaigns, and managing digital strategy for businesses across Nashville, Hendersonville, and Gallatin, I have heard the same questions hundreds of times. How do I get my website to show up on Google? Is social media actually worth the effort? What is AI search and should I care about it? These guides answer those questions with real, actionable advice — not the vague generalities you find on most marketing blogs.
                </p>
                <p>
                  Every resource below is written specifically for small business owners who need to make smart decisions about their online presence without a dedicated marketing team or a six-figure budget. I cover the fundamentals of web development, search engine optimization, social media strategy, and the emerging world of AI-powered search — all explained in plain language with step-by-step instructions you can implement today. Where relevant, I include real examples from projects I have worked on so you can see how these strategies play out for actual businesses.
                </p>
                <p>
                  These guides are completely free and always will be. My goal is to give you enough knowledge to make informed decisions — whether that means handling things yourself, hiring the right help, or working with me directly. If you read through a guide and want expert help putting those strategies into action, I offer a free 30-minute consultation where we can talk through your specific situation and figure out the best path forward.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* What You'll Find Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-12">
              <span className="section-label mb-6 inline-flex justify-center">What You&apos;ll Find</span>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
                Free guides for every stage of your <span className="text-accent">digital journey</span>
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Complete guides and action plans written for small business owners — no jargon, no fluff.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { icon: Code2, title: "Web Development", description: "Site launches, maintenance & platform guides", slug: getCategorySlug("Web Development"), count: resources.filter(r => r.category === "Web Development").length },
                { icon: Search, title: "SEO & Search", description: "Rankings, local SEO & Google Business", slug: getCategorySlug("SEO & Search"), count: resources.filter(r => r.category === "SEO & Search").length },
                { icon: BrainCircuit, title: "AI SEO & GEO", description: "AI search visibility & optimization", slug: getCategorySlug("AI SEO & GEO"), count: resources.filter(r => r.category === "AI SEO & GEO").length },
                { icon: Share2, title: "Social Media", description: "Strategy, content & engagement", slug: getCategorySlug("Social Media"), count: resources.filter(r => r.category === "Social Media").length },
                { icon: Zap, title: "Digital Strategy", description: "Trends, planning & growth roadmaps", slug: getCategorySlug("Digital Strategy"), count: resources.filter(r => r.category === "Digital Strategy").length },
              ].map((cat, idx) => (
                <AnimatedSection key={idx} delay={idx * 75}>
                  <Link
                    href={`/resources/${cat.slug}`}
                    className="block w-full text-left p-5 rounded-2xl border bg-dark-gray border-white/5 hover:border-accent/20 transition-all duration-300 group h-full"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                      <cat.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-sm font-semibold mb-1">{cat.title}</h3>
                    <p className="text-xs text-white/40 leading-relaxed mb-2">{cat.description}</p>
                    <span className="text-xs text-accent font-medium">{cat.count} {cat.count === 1 ? 'guide' : 'guides'}</span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <AnimatedSection key={resource.slug} delay={index * 100}>
                  <Link
                    href={`/resources/${resource.slug}`}
                    className="group block bg-dark-gray rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-500 h-full overflow-hidden"
                  >
                    {/* Cover Image */}
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
                      {/* Meta */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-accent/10 rounded-full text-xs text-accent font-medium">
                          {resource.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-white/40">
                          <Clock className="w-3 h-3" />
                          {resource.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors leading-tight">
                        {resource.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                        {resource.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {resource.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
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

        {/* Free Consultation Teaser */}
        <section className="py-24 bg-dark-gray relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[200px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[150px]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left — Image + visual process */}
              <AnimatedSection>
                <div className="relative">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                      alt="Friendly business consultation on a video call"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/70 via-transparent to-black/20"></div>

                    {/* Overlay content */}
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
                </div>

                {/* 3-step process */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {[
                    { num: "1", label: "Fill out a quick form" },
                    { num: "2", label: "We schedule a time" },
                    { num: "3", label: "We talk it through" },
                  ].map((step, idx) => (
                    <div key={idx} className="text-center p-4 bg-black/50 rounded-xl border border-white/5">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-sm font-semibold text-accent">{step.num}</span>
                      </div>
                      <span className="text-xs text-white/50 leading-snug block">{step.label}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Right — Value prop + CTA */}
              <AnimatedSection delay={200}>
                <span className="section-label mb-6 block">Free Consultation</span>
                <h2 className="text-3xl lg:text-4xl font-semibold mb-6 leading-tight">
                  Free 30-Minute <span className="text-accent">Exploratory Call</span>
                </h2>
                <p className="text-white/50 text-lg leading-relaxed mb-8">
                  Not sure where to start? Let&apos;s talk it through — no sales pitch, no obligation.
                  Just a friendly conversation about your business and where digital can take it.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    { icon: Globe, text: "Planning your online presence" },
                    { icon: Search, text: "Getting found on Google & search" },
                    { icon: Wrench, text: "Website maintenance & updates" },
                    { icon: Share2, text: "Social media strategy" },
                    { icon: Calendar, text: "Monthly webmaster retainer options" },
                    { icon: HelpCircle, text: "Any digital questions you have" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-white/70 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mb-8 text-sm text-white/40">
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-black relative overflow-hidden">
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
