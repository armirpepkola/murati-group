import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import AboutPreview from '@/components/home/AboutPreview';
import ServicesPreview from '@/components/home/ServicesPreview';
import ProjectsPreview from '@/components/home/ProjectsPreview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Murati Group | Construction Company in London',
  description: 'Reliable, efficient construction services across London. Residential, commercial, and bespoke projects delivered with excellence.',
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <ProjectsPreview />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </main>
  );
}
