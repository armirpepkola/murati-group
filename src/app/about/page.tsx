import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import Story from '@/components/about/Story';
import Team from '@/components/about/Team';
import Values from '@/components/about/Values';
import AboutTestimonials from '@/components/about/AboutTestimonials';
import CTA from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Discover the story, values, and people behind Murati Group — London’s trusted construction company.',
};

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <AboutHero />
      <Story />
      <Team />
      <Values />
      <AboutTestimonials />
      <CTA />
    </main>
  );
}
