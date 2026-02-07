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

  useEffect(() => {
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

  return (
    <section className="py-20 bg-dark-gray border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className="text-center transition-all duration-1000 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
          }}
        >
          <h2 className="text-2xl font-semibold mb-8">
            Proudly Serving <span className="text-accent">Middle Tennessee</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city, index) => (
              <span
                key={index}
                className="px-5 py-2.5 bg-black rounded-full text-white/70 border border-white/10 hover:border-accent/50 hover:text-white transition-all duration-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${index * 50}ms`,
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
