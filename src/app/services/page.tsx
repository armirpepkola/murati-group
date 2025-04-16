import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import Services from '../../components/services/Services';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Check out what services we can provide for you.',
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-col">
      <PageHero
        title="What we do for you"
        subtitle="Services"
        image="/images/services/services-hero.jpg"
      />
      <Services />
      <CTA
        image="/images/services/services-cta.jpg"
        quote='Whatever you need, we’ve built it — or we’re ready to.'
        title="Have a project in mind?"
        subtitle="Let's Talk"
        buttonText="Get in touch"
        link="/contact"
      />
    </main>
  );
}
