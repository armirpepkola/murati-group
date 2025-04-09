import { Metadata } from 'next';
import ProjectsGallery from '@/components/projects/ProjectsGallery';
import CTA from '@/components/home/CTA';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Explore the latest construction projects delivered by Murati Group across London.',
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-col">
      <PageHero
        title="See some of our best works"
        subtitle="Projects"
        image="/images/hero.jpg"
      />
      <ProjectsGallery />
      <CTA />
    </main>
  );
}
