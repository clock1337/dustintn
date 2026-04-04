'use client';

import { useState, useEffect, useRef } from 'react';

function useScrollAnimation(threshold = 0.1) {
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
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible, hasMounted };
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible, hasMounted } = useScrollAnimation(0.1);

  // Before hydration: render fully visible for SSR/crawlers
  // After hydration: apply scroll animations
  const showContent = !hasMounted || isVisible;

  return (
    <div
      ref={ref}
      className={`${hasMounted ? 'transition-all duration-1000 ease-out' : ''} ${className}`}
      style={{
        opacity: showContent ? 1 : 0,
        transform: showContent ? 'translateY(0)' : 'translateY(60px)',
        transitionDelay: hasMounted ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
}

export function StaggeredContainer({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, isVisible, hasMounted } = useScrollAnimation(0.1);

  const showContent = !hasMounted || isVisible;

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={hasMounted ? 'transition-all duration-700 ease-out' : ''}
              style={{
                opacity: showContent ? 1 : 0,
                transform: showContent ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: hasMounted ? `${index * 100}ms` : undefined,
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
