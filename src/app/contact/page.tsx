import { ArrowRight, Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import ProudlyServing from "@/components/ProudlyServing";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ContactPageForm from "@/components/ContactPageForm";

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
    value: "(615) 788-2453",
    link: "tel:+16157882453",
    description: "Mon-Fri, 9am-5pm CST"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Nashville, TN",
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
    answer: "I'm based in Nashville and primarily serve Nashville, Hendersonville, Gallatin, and surrounding areas. I've also built websites for businesses in California, North Carolina, Texas, and beyond — so the call is open to anyone."
  },
  {
    question: "How much does a website cost?",
    answer: "Every project is unique. We provide custom quotes based on your specific requirements. Contact us for a free consultation and estimate."
  }
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

export default function ContactPage() {
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
                  <p className="text-white/50 mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                  <ContactPageForm />
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
                    <Link href="/free-consultation" className="btn-pill btn-pill-primary">
                      Schedule a Call
                      <ArrowRight className="w-4 h-4" />
                    </Link>
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

        <ProudlyServing />
        <Footer />
      </main>
    </div>
  );
}
