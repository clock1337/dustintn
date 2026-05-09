'use client';

import { useState } from 'react';
import { ArrowRight, ExternalLink, MapPin } from 'lucide-react';
import Link from 'next/link';
import ScrollingScreenshot from '@/components/ScrollingScreenshot';
import AnimatedSection from '@/components/AnimatedSection';

interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  client: string;
  location: string;
  services: string[];
  website: string;
}

const categories = [
  'All',
  'Web Development',
  'Healthcare',
  'Hospitality',
  'Real Estate',
  'Branding',
  'Home Services',
  'Film & Entertainment',
  'Concept & Parody',
];

export default function PortfolioFilter({
  projects,
}: {
  projects: Project[];
}) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Filter Section */}
      <section className="py-8 bg-black border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-accent text-white'
                    : 'bg-dark-gray text-white/60 hover:text-white hover:bg-dark-gray/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-24">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 100}>
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Link href={`/portfolio/${project.slug}`} className="block">
                      <ScrollingScreenshot
                        src={project.image}
                        alt={project.title}
                      />
                    </Link>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <span className="text-accent text-sm font-medium uppercase tracking-wider mb-4 block">
                      {project.category}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="hover:text-accent transition-colors"
                      >
                        {project.title}
                      </Link>
                    </h2>
                    <p className="text-white/50 text-lg leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Meta */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-4">
                        <span className="text-white/40 text-sm w-24">
                          Client
                        </span>
                        <span className="text-white/80">{project.client}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-white/40 text-sm w-24">
                          Location
                        </span>
                        <span className="text-white/80 flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-accent" />
                          {project.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-white/40 text-sm w-24">
                          Services
                        </span>
                        <span className="text-white/80">
                          {project.services.join(', ')}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-white/40 text-sm w-24">
                          Website
                        </span>
                        <a
                          href={`https://${project.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline flex items-center gap-2"
                        >
                          {project.website}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="btn-pill btn-pill-outline group inline-flex"
                    >
                      View Project
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
