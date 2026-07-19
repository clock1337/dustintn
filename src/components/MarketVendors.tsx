import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

/**
 * Offer aimed squarely at farmers-market makers and food trucks.
 *
 * These sellers are not a smaller version of the usual client — they are a
 * different buyer. They almost never have a website, they sell out of a tent
 * or a truck, and the single question their customers ask is "where are you
 * this weekend". So the pitch leads with a free site rather than a quote, and
 * the paid tiers are deliberately small and countable. A vendor can picture
 * two changes a month. They cannot picture "ongoing retainer".
 */

const TIERS = [
  {
    price: "Free",
    label: "The site itself",
    detail:
      "A real one-page site at yourname.dustintn.com — what you make, where to find you, how to order. No trial, no card, no invoice later.",
    highlight: true,
  },
  {
    price: "$100",
    label: "Make it yours",
    detail:
      "Your colours, your photos, your words — and I walk you through buying your own web address and connect it up. You buy it, so it's in your name.",
  },
  {
    price: "$10/mo",
    label: "Keep it current",
    detail:
      "Two changes a month. A price, a new product, a swapped photo — each counts as one. New sections and redesigns are the $100 job.",
  },
];

const INCLUDED = [
  "Where to find you this week",
  "Your full menu and prices",
  "Photos of what you actually sell",
  "How to order, with your own phone and email",
  "Works properly on a phone",
  "Findable on Google for your town",
];

export default function MarketVendors() {
  return (
    <section className="bg-[#1A1A1A] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-[#FF6B00] uppercase">
            For farmers market makers &amp; food trucks
          </p>
          <h2 className="max-w-3xl text-3xl leading-tight font-semibold text-white lg:text-5xl">
            You sell out every Saturday and nobody can find you on a Tuesday.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Bakers, soap makers, welders, donut trucks. You&apos;ve got the
            product and the regulars — what you haven&apos;t got is somewhere to
            send everyone else. So the site is free. Not a trial, not a
            discounted first month. Free, and yours to use however you like.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TIERS.map((t) => (
              <div
                key={t.label}
                className={`rounded-2xl border p-7 ${
                  t.highlight
                    ? "border-[#FF6B00] bg-[#252525]"
                    : "border-white/10 bg-[#252525]/60"
                }`}
              >
                <p
                  className={`text-4xl font-semibold ${
                    t.highlight ? "text-[#FF6B00]" : "text-white"
                  }`}
                >
                  {t.price}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  {t.label}
                </p>
                <p className="mt-3 leading-relaxed text-gray-400">{t.detail}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <h3 className="mb-5 text-xl font-semibold text-white">
                What the free one actually includes
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-[#FF6B00]"
                      aria-hidden
                    />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#252525]/60 p-7">
              <h3 className="text-xl font-semibold text-white">
                Why free, honestly
              </h3>
              <p className="mt-3 leading-relaxed text-gray-400">
                Most of these take me an afternoon, and a market stall
                can&apos;t justify agency money — so charging for it would just
                mean it never gets built. If it does well and you want more,
                you know where I am. If you never speak to me again, you still
                keep the site.
              </p>
              <p className="mt-4 leading-relaxed text-gray-400">
                Want it taken down? Say so and it&apos;s gone the same day, at
                no cost.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-[#FF6B00] transition-colors hover:text-[#FF8533]"
              >
                Tell me what you make
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
