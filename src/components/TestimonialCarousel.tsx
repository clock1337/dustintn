'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export default function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${
              index === activeTestimonial
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8 absolute inset-0'
            }`}
          >
            <blockquote className="text-center">
              <p className="text-2xl lg:text-3xl font-light leading-relaxed mb-8 text-white/80">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/10 p-2 overflow-hidden flex items-center justify-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                <div className="text-left">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-white/40">{testimonial.role}</div>
                </div>
              </div>
            </blockquote>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-12">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTestimonial(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeTestimonial
                ? 'bg-accent w-8'
                : 'bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
