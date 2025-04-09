'use client';

import { useState } from 'react';
import { projects } from '@/lib/data/projects';
import ProjectCard from './ProjectCard';
import ProjectAlbumModal from './ProjectAlbumModal';

export default function ProjectsGallery() {
  const [activeImages, setActiveImages] = useState<string[] | null>(null);

  return (
    <section className="px-4 sm:px-6 lg:px-16 py-20 sm:py-28 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#4a5261] mb-10 sm:mb-12 uppercase">
        Our Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            images={project.images}
            location={project.location}
            year={project.year}
            onClick={() => setActiveImages(project.images)}
          />
        ))}
      </div>

      {activeImages && (
        <ProjectAlbumModal
          images={activeImages}
          onClose={() => setActiveImages(null)}
        />
      )}
    </section>
  );
}