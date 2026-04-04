'use client';

import { useRef, useState, useEffect } from 'react';

const cities = [
  'Nashville',
  'Hendersonville',
  'Gallatin',
  'Goodlettsville',
  'Mount Juliet',
  'Lebanon',
  'Franklin',
  'Murfreesboro',
  'Smyrna',
  'La Vergne'
];

export default function ProudlyServing() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const showContent = !hasMounted || isVisible;

  return (
    <section className="py-20 bg-dark-gray border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`text-center ${hasMounted ? 'transition-all duration-1000 ease-out' : ''}`}
          style={{
            opacity: showContent ? 1 : 0,
            transform: showContent ? 'translateY(0)' : 'translateY(60px)',
          }}
        >
          <h2 className="text-2xl font-semibold mb-8">
            Proudly Serving <span className="text-accent">Nashville & Beyond</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city, index) => (
              <span
                key={index}
                className={`px-5 py-2.5 bg-black rounded-full text-white/70 border border-white/10 hover:border-accent/50 hover:text-white ${hasMounted ? 'transition-all duration-300' : ''}`}
                style={{
                  opacity: showContent ? 1 : 0,
                  transform: showContent ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: hasMounted ? `${index * 50}ms` : undefined,
                }}
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
