import { Metadata } from 'next';
import CTA from '@/components/home/CTA';
import PageHero from '@/components/PageHero';

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
      <CTA />
    </main>
  );
}
