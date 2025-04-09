import { Metadata } from 'next';
import Story from '@/components/about/Story';
import Team from '@/components/about/Team';
import Values from '@/components/about/Values';
import AboutTestimonials from '@/components/about/AboutTestimonials';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Discover the story, values, and people behind Murati Group — London’s trusted construction company.',
};

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <PageHero
        title="Who we are"
        subtitle="About"
        image="/images/hero.jpg"
      />
      <Story />
      <Team />
      <Values />
      <AboutTestimonials />
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
