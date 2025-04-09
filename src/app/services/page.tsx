import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Check out what services we can provide for you.',
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-col">
      <PageHero
        title="What we can do for you"
        subtitle="Services"
        image="/images/hero.jpg"
      />
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
