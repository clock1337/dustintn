import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import ProudlyServing from "@/components/ProudlyServing";
import ResourceSnippets from "@/components/ResourceSnippets";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import PortfolioFilter from "@/components/PortfolioFilter";

const projects = [
  {
    id: 1,
    slug: "fine-assets",
    title: "Fine Assets Personal Training",
    category: "Web Development",
    description: "A comprehensive fitness coaching platform featuring personalized training solutions, online coaching capabilities, and client transformation showcases for a certified trainer with 20+ years of experience.",
    image: "/screenshots/fine-assets.png",
    client: "Lynn Mckinnie Belt",
    location: "Lake Norman, NC",
    services: ["Web Design", "Development", "SEO"],
    website: "fineassets.net"
  },
  {
    id: 2,
    slug: "champions-adaptive-fitness",
    title: "Champions Adaptive Fitness",
    category: "Web Development",
    description: "A welcoming digital presence for Temecula's premier adaptive fitness studio, specializing in inclusive programming for youth and adults with intellectual and developmental disabilities.",
    image: "/screenshots/champions-adaptive-fitness.png",
    client: "Champions Adaptive Fitness",
    location: "Temecula, CA",
    services: ["Web Design", "Branding", "Development"],
    website: "championsadaptivefitness.com"
  },
  {
    id: 3,
    slug: "pinnacle-health-choice",
    title: "Pinnacle Wellness",
    category: "Healthcare",
    description: "A professional healthcare website for an established chiropractic clinic in San Antonio, featuring online appointment booking, service information, and patient resources.",
    image: "/screenshots/pinnacle-health-choice.png",
    client: "Pinnacle Wellness",
    location: "San Antonio, TX",
    services: ["Web Design", "Development", "Content"],
    website: "pinnaclehealthchoice.com"
  },
  {
    id: 4,
    slug: "southern-collective-spirit-co",
    title: "Southern Collective Spirit Company",
    category: "Hospitality",
    description: "An immersive website for a Nashville distillery offering curated barrel selections, custom whiskey blends, and unique tasting experiences that celebrate the artistry of spirits.",
    image: "/screenshots/southern-collective-spirit-co.png",
    client: "Southern Collective Spirit Co.",
    location: "Nashville, TN",
    services: ["Web Design", "Development", "E-commerce"],
    website: "southerncollectivespiritco.com"
  },
  {
    id: 5,
    slug: "coldwell-banker-commercial",
    title: "Coldwell Banker Commercial SC",
    category: "Real Estate",
    description: "A professional commercial real estate website for Southern California's premier brokerage team, featuring property listings, market insights, and comprehensive services for investors and business owners.",
    image: "/screenshots/coldwell-banker-commercial.png",
    client: "Coldwell Banker Commercial",
    location: "Southern California",
    services: ["Web Design", "Development", "SEO"],
    website: "cbcsocalgroup.com"
  },
  {
    id: 6,
    slug: "maple-sky-dreamtree-studio",
    title: "Maple Sky Dreamtree Studio",
    category: "Branding",
    description: "A complete brand identity and website for a fine artist with 30+ years of experience. We turned a Post-It logo sketch into a professional mark and built a modern hub for his paintings, illustrations, children's books, and multi-platform shop.",
    image: "/screenshots/maple-sky-dreamtree-studio.png",
    client: "Mike Filippello",
    location: "Nashville, TN",
    services: ["Logo Design", "Web Design", "Branding"],
    website: "msdt-seven.vercel.app"
  },
  {
    id: 7,
    slug: "jobe-gutter-services",
    title: "Jobe Gutter Services",
    category: "Home Services",
    description: "A professional website for a Southeast Texas gutter company with 15+ years of experience and over 1,000 installations. Featuring service showcases, project galleries, customer testimonials, and multi-city service area coverage.",
    image: "/screenshots/jobe-gutter-services.png",
    client: "Jobe Gutter Services LLC",
    location: "Angleton, TX",
    services: ["Web Design", "Development", "SEO"],
    website: "jobegutterservices.com"
  },
  {
    id: 8,
    slug: "walking-street-pictures",
    title: "Walking Street Pictures",
    category: "Film & Entertainment",
    description: "An editorial, magazine-style website for an independent cinema studio in Angeles City, Philippines. Showcases original web series and casting calls, and ships with a custom web editor backend the studio uses to publish productions, news, and audition posts without touching code.",
    image: "/screenshots/walking-street-pictures.png",
    client: "Walking Street Pictures",
    location: "Angeles City, Philippines",
    services: ["Web Design", "Development", "Custom CMS"],
    website: "walkingstreetpictures.com"
  }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation currentPage="portfolio" />

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-dark-gray"></div>
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="max-w-3xl">
              <span className="section-label mb-6 block">Portfolio</span>
              <h1 className="text-headline">
                Explore My <span className="text-accent">Latest</span> Work
              </h1>
              <p className="text-xl text-white/50 leading-relaxed">
                Discover the craftsmanship behind each design. From fitness platforms to healthcare portals,
                each project represents our commitment to creating impactful digital experiences.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* comingSoon entries (if added in the future) are accessible via
            direct URL but hidden from the public portfolio listing. */}
        <PortfolioFilter projects={projects.filter((p) => !("comingSoon" in p && p.comingSoon))} />

        {/* CTA Section */}
        <section className="py-32 bg-dark-gray relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.1),transparent_70%)]"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <span className="section-label mb-6 inline-flex justify-center">Have a Project?</span>
              <h2 className="text-headline mb-8">
                Let's work <span className="text-accent">together</span>
              </h2>
              <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
                Ready to start your next project? Get in touch and let's create something great.
              </p>
              <Link href="/#contact" className="btn-pill btn-pill-primary group">
                Start a Conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        <ResourceSnippets category="Web Development" />

        <ProudlyServing />
        <Footer />
      </main>
    </div>
  );
}
