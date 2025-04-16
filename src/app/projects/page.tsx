import { Metadata } from 'next';
import ProjectsGallery from '@/components/projects/ProjectsGallery';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Explore the latest construction projects delivered by Murati Group across London.',
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-col">
      <PageHero
        title="See our best works"
        subtitle="Projects"
        image="/images/projects/projects-hero.jpg"
      />
      <ProjectsGallery />
      <CTA
        image="/images/projects/projects-cta.jpg"
        quote='The best way to judge our work is to stand inside it'
        title="Inspired by our work?"
        subtitle="Let's Talk"
        buttonText="Get in touch"
        link="/contact"
      />
    </main>
  );
}
