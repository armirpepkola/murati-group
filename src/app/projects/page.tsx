import { Metadata } from 'next';
import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectsGallery from '@/components/projects/ProjectsGallery';
import CTA from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Explore the latest construction projects delivered by Murati Group across London.',
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-col">
      <ProjectsHero />
      <ProjectsGallery />
      <CTA />
    </main>
  );
}
