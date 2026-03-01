import { ArrowRight, CheckCircle2, Target, Heart, Zap, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import ProudlyServing from "@/components/ProudlyServing";
import ResourceSnippets from "@/components/ResourceSnippets";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every project is designed with your business goals in mind. I measure success by the impact I create for your business."
  },
  {
    icon: Heart,
    title: "Client-Focused",
    description: "Your success is my priority. I build lasting relationships through transparent communication and dedicated support."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "I stay ahead of industry trends to deliver modern solutions that give your business a competitive edge."
  },
  {
    icon: Award,
    title: "Quality",
    description: "I never cut corners. Every line of code and every design element meets my high standards of excellence."
  }
];

const timeline = [
  { year: "2004", title: "Founded", description: "Started helping businesses build their online presence in Southern California." },
  { year: "2006", title: "First E-Commerce Build", description: "Built my first online store — saw how a good checkout experience could change a small business overnight." },
  { year: "2008", title: "Went Mobile-First", description: "Started designing for mobile screens before it was mainstream, after noticing how many customers were browsing on phones." },
  { year: "2010", title: "Growth", description: "Expanded services to include SEO, branding, and digital marketing strategies." },
  { year: "2012", title: "Social Media Marketing", description: "Helped clients tap into Facebook and Instagram for the first time, turning followers into real-world customers." },
  { year: "2013", title: "Content Strategy", description: "Started building blog-driven SEO campaigns, learning that great content was the best long-term marketing investment." },
  { year: "2015", title: "Innovation", description: "Adopted modern web technologies and responsive design as industry standards evolved." },
  { year: "2017", title: "JavaScript Frameworks", description: "Made the leap to React and component-driven development, building faster and more interactive experiences." },
  { year: "2019", title: "Performance Obsessed", description: "Got serious about Core Web Vitals before Google did, optimizing load times and UX across every project." },
  { year: "2020", title: "Adaptation", description: "Helped businesses pivot to digital-first strategies during challenging times." },
  { year: "2021", title: "New Chapter", description: "Relocated to Nashville, Tennessee and launched CBC SoCal Group's website, bringing two decades of west-coast digital experience to new markets." },
  { year: "2022", title: "Nashville Roots", description: "Built The Southern Collective's website, establishing a strong foothold in the Nashville business community." },
  { year: "2025", title: "Expanding Impact", description: "Launched the Champions Adaptive Fitness website, continuing to help purpose-driven businesses grow online." },
  { year: "2026", title: "Today", description: "Building websites and digital strategies for businesses across Nashville, Hendersonville, Gallatin, and beyond." }
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "98%", label: "Client Retention" }
];

export default function AboutPage() {
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
              <span className="section-label mb-6 block">About Me</span>
              <h1 className="text-headline mb-8">
                Building Digital <span className="text-accent">Success</span> Stories Since 2004
              </h1>
              <p className="text-xl text-white/50 leading-relaxed">
                I&apos;m a web developer and digital marketer based in Nashville, Tennessee, serving
                Hendersonville, Gallatin, and the surrounding areas. For over two decades, I&apos;ve been helping local businesses
                thrive in the digital world.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
                    alt="Web development workspace"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                  My <span className="text-accent">Story</span>
                </h2>
                <p className="text-white/60 leading-relaxed mb-6">
                  I started building websites in 2004 in Southern California with a simple goal: help local businesses
                  get online and grow. What began as a passion project quickly turned into a career when I saw firsthand
                  how a strong digital presence could transform a small business. In 2021, I brought that experience to
                  Nashville, Tennessee.
                </p>
                <p className="text-white/60 leading-relaxed mb-6">
                  Since then, I&apos;ve built the online presence for Pinnacle Wellness in Hendersonville, designed
                  the brand and website for Southern Collective Spirit Co. in Nashville, launched the Champions
                  Adaptive Fitness coaching platform, and helped Fine Assets Personal Training triple their online
                  bookings. I&apos;ve also worked with Coldwell Banker Commercial on their Southeast regional site
                  and built Jobe Gutter Services from the ground up.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Every project is different, but the approach is the same: understand the business first, then
                  build something that actually works for it. No templates, no filler pages, no tech for the sake
                  of tech. Just clean, fast websites and honest digital strategy.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black border-y border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} delay={index * 100} className="text-center">
                  <div className="text-4xl lg:text-5xl font-semibold text-accent mb-2">{stat.value}</div>
                  <div className="text-white/40 text-sm uppercase tracking-wider">{stat.label}</div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* What I Bring to the Table */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-16">
              <span className="section-label mb-6 inline-flex justify-center">Credentials</span>
              <h2 className="text-headline">
                What I Bring to the <span className="text-accent">Table</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection delay={100}>
                <div className="p-8 bg-black rounded-2xl border border-white/5 h-full">
                  <h3 className="text-xl font-semibold mb-4 text-accent">Technical Stack</h3>
                  <ul className="space-y-2 text-white/50 text-sm">
                    <li>Next.js & React</li>
                    <li>TypeScript & Tailwind CSS</li>
                    <li>Node.js & PostgreSQL</li>
                    <li>Vercel & AWS</li>
                    <li>Schema.org & JSON-LD</li>
                    <li>SEO & GEO Optimization</li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="p-8 bg-black rounded-2xl border border-white/5 h-full">
                  <h3 className="text-xl font-semibold mb-4 text-accent">Industries Served</h3>
                  <ul className="space-y-2 text-white/50 text-sm">
                    <li>Healthcare — Pinnacle Wellness</li>
                    <li>Fitness — Fine Assets, Champions Adaptive</li>
                    <li>Hospitality — Southern Collective Spirit Co.</li>
                    <li>Real Estate — Coldwell Banker Commercial</li>
                    <li>Home Services — Jobe Gutter Services</li>
                    <li>Creative — Maple Sky Dreamtree Studio</li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="p-8 bg-black rounded-2xl border border-white/5 h-full">
                  <h3 className="text-xl font-semibold mb-4 text-accent">By the Numbers</h3>
                  <ul className="space-y-2 text-white/50 text-sm">
                    <li>20+ years building for the web</li>
                    <li>200+ projects delivered</li>
                    <li>98% client retention rate</li>
                    <li>3x online bookings for Fine Assets</li>
                    <li>50% new patients via web for Pinnacle</li>
                    <li>85% bookings online for Southern Collective</li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-16">
              <span className="section-label mb-6 inline-flex justify-center">What Drives Me</span>
              <h2 className="text-headline">
                My <span className="text-accent">Values</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="p-8 bg-dark-gray rounded-2xl border border-white/5 h-full">
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                      <value.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-white/50 leading-relaxed">{value.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-16">
              <span className="section-label mb-6 inline-flex justify-center">My Journey</span>
              <h2 className="text-headline">
                20+ Years of <span className="text-accent">Growth</span>
              </h2>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="flex gap-8 mb-12 last:mb-0">
                    <div className="flex-shrink-0 w-24">
                      <div className="text-2xl font-semibold text-accent">{item.year}</div>
                    </div>
                    <div className="flex-1 pb-12 border-l border-white/10 pl-8 relative">
                      <div className="absolute left-0 top-2 w-3 h-3 bg-accent rounded-full -translate-x-1/2"></div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-white/50">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Me */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <span className="section-label mb-6 block">Why Work With Me</span>
                <h2 className="text-3xl lg:text-4xl font-semibold mb-8">
                  A Partner Who <span className="text-accent">Understands</span> Your Business
                </h2>
                <div className="space-y-6">
                  {[
                    "Local expertise with deep roots in Nashville",
                    "Direct communication — you work with me, not a middleman",
                    "Transparent pricing with no hidden fees",
                    "Ongoing support long after your project launches",
                    "Modern technology that keeps you ahead of competitors",
                    "Proven track record with businesses like yours"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="aspect-square rounded-2xl overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=800&fit=crop"
                    alt="Solo workspace with laptop and coffee"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-dark-gray relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.1),transparent_70%)]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <span className="section-label mb-6 inline-flex justify-center">Ready to Start?</span>
              <h2 className="text-headline mb-8">
                Let&apos;s Build Something <span className="text-accent">Great</span> Together
              </h2>
              <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
                Whether you need a new website, want to improve your online presence, or just have questions,
                I&apos;m here to help.
              </p>
              <Link href="/contact" className="btn-pill btn-pill-primary group">
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        <ResourceSnippets category="Digital Strategy" />

        <ProudlyServing />
        <Footer />
      </main>
    </div>
  );
}
