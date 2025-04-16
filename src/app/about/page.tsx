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
        image="/images/about/about-hero.jpg"
      />
      <Story />
      <Team />
      <Values />
      <AboutTestimonials />
      <CTA
        image="/images/about/about-cta.jpg"
        quote='Behind every build is a team that listens, plans, and delivers.'
        title="Want to work with us?"
        subtitle="Let's Talk"
        buttonText="Get in touch"
        link="/contact"
      />
    </main>
  );
}
