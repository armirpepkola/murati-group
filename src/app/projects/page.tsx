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
        title="See some of our best works"
        subtitle="Projects"
        image="/images/hero.jpg"
      />
      <ProjectsGallery />
      <CTA
        image="/images/hero.jpg"
        quote='Murati Group'
        title="Need to reach us?"
        subtitle="Let's Talk"
        buttonText="Get in touch"
        link="/contact"
      />
    </main>
  );
}
