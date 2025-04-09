'use client';

import Image from 'next/image';
import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Button } from '../Button';

type Project = {
  title: string;
  description: string;
  slug: string;
};

const featuredProjects: Project[] = [
  {
    title: 'Skyline Tower Renovation',
    description: 'A 20-story transformation in central London with a focus on sustainability and modern design.',
    slug: 'skyline-tower',
  },
  {
    title: 'Greenbridge Residential Estate',
    description: 'Luxury eco-living across 50 units in West London, merging green tech and architectural beauty.',
    slug: 'greenbridge-estate',
  },
  {
    title: 'Riverside Commercial Complex',
    description: 'A riverside development combining office space with urban retail, blending design with functionality.',
    slug: 'riverside-complex',
  },
];

export default function ProjectPreview() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="px-6 md:px-16 py-32 bg-[#f9f9f9]">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center">
        {/* LEFT COLUMN */}
        <div>
          <p className="text-[#e25858] uppercase text-sm font-bold tracking-wide mb-2">Projects</p>
          <h2 className="text-4xl md:text-4xl font-bold text-[#4a5261] mb-4 uppercase">
            Building Landmarks, <br className="hidden md:block" />
            One Structure at a Time
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            We don’t just build — we transform. These are a few of our signature works across London that raised the bar.
          </p>

          <Button href="/services" variant="secondary">view all projects</Button>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {featuredProjects.map((project, idx) => (
                <motion.div
                  key={project.slug}
                  className="min-w-full md:min-w-[85%] pr-6 mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 + idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden group">
                    <div className="relative w-full h-64 md:h-96">
                      <Image
                        src="/images/hero.jpg"
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="text-2xl font-semibold text-[#4a5261]">{project.title}</h3>
                      <p className="text-gray-600 text-sm">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <div className="flex gap-6">
            <button
              onClick={scrollPrev}
              className="text-[#4a5261] font-bold text-lg hover:opacity-70 transition"
              aria-label="Previous"
            >
              ← Prev
            </button>
            <button
              onClick={scrollNext}
              className="text-[#4a5261] font-bold text-lg hover:opacity-70 transition"
              aria-label="Next"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
