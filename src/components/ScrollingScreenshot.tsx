'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface ScrollingScreenshotProps {
  src: string;
  alt: string;
  href?: string;
  className?: string;
}

export default function ScrollingScreenshot({ src, alt, href, className = '' }: ScrollingScreenshotProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Check if className contains an aspect ratio override
  const hasAspectOverride = className.includes('aspect-');
  const baseClasses = hasAspectOverride ? '' : 'aspect-[4/3]';

  const content = (
    <div
      className={`${baseClasses} rounded-2xl overflow-hidden relative group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Screenshot container - holds tall image that scrolls on hover */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="relative w-full transition-transform ease-in-out"
          style={{
            height: '300%',
            transform: isHovered ? 'translateY(-66.666%)' : 'translateY(0)',
            transitionDuration: '3s',
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center z-10">
        <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
          <ArrowUpRight className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs text-white/80">
          Scrolling preview...
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}
