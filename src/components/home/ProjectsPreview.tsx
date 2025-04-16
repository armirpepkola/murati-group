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
  image: string;
};

const featuredProjects: Project[] = [
  {
    title: 'Skyline Tower Renovation',
    description: 'A 20-story transformation in central London with a focus on sustainability and modern design.',
    slug: 'skyline-tower',
    image: '/images/sample1.jpg',
  },
  {
    title: 'Greenbridge Residential Estate',
    description: 'Luxury eco-living across 50 units in West London, merging green tech and architectural beauty.',
    slug: 'greenbridge-estate',
    image: '/images/sample2.jpg',
  },
  {
    title: 'Riverside Commercial Complex',
    description: 'A riverside development combining office space with urban retail, blending design with functionality.',
    slug: 'riverside-complex',
    image: '/images/sample3.jpg',
  },
];

export default function ProjectPreview() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-16 py-32 bg-[#f9f9f9] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-center max-w-7xl mx-auto">
        {/* LEFT COLUMN */}
        <div>
          <p className="text-[#e25858] uppercase text-sm font-bold tracking-wide mb-2">Projects</p>
          <h2 className="text-xl sm:text-4xl font-bold text-[#4a5261] mb-4 uppercase">
            Building Homes,<br className="hidden md:block" />
            One Family at a Time
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            We don’t just build — we transform. These are a few of our signature works across London that raised the bar.
          </p>

          <Button href="/services" variant="secondary">
            view all projects
          </Button>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6">
          <div className="overflow-hidden pr-4 lg:pr-24" ref={emblaRef}>
            <div className="flex -ml-4 sm:-ml-0 mb-2 mx-2">
              {featuredProjects.map((project, idx) => (
                <motion.div
                  key={project.slug}
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 + idx * 0.1 }}
                  className="min-w-0 w-[92%] md:w-[90%] lg:w-[95%] flex-shrink-0 pl-4 sm:pl-0 pr-4 ml-3"
                >
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden group">
                    <div className="relative w-full h-56 sm:h-64 md:h-96">
                      <Image
                        src={project.image}
                        priority
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 40vw"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#4a5261]">{project.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <div className="flex gap-6 justify-start sm:justify-end">
            <button
              onClick={scrollPrev}
              className="text-[#4a5261] font-bold text-base hover:opacity-70 transition"
              aria-label="Previous"
            >
              ← Prev
            </button>
            <button
              onClick={scrollNext}
              className="text-[#4a5261] font-bold text-base hover:opacity-70 transition"
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