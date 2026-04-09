import Link from "next/link";
import { Swords, ArrowRight } from "lucide-react";

// Side-quest callout used at the bottom of /services and /resources pages
// to surface the Project Ascension addon section without dominating the page.
export default function AscensionCallout() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(200,150,42,0.06),transparent_60%)]" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[auto,1fr,auto] gap-8 items-center bg-dark-gray border border-white/10 rounded-2xl p-8 lg:p-10">
            <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
              <Swords className="w-8 h-8" />
            </div>
            <div>
              <div className="text-xs font-medium text-accent uppercase tracking-wider mb-2">
                Side Quest
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Project Ascension WoW Addons
              </h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-2xl">
                Free, hand-built addons for Project Ascension (WoW 3.3.5a) by The PenFifteen Club™.
                DeathMark healer tracker, QuiverKeeper hunter HUD, and custom addon requests welcome.
              </p>
            </div>
            <Link
              href="/project-ascension"
              className="btn-pill btn-pill-outline group whitespace-nowrap"
            >
              Explore Addons
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
