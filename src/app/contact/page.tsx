import { Metadata } from "next";
import ContactSection from "@/components/contact/ContactSection";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Contact Us | Murati Group",
  description: "Let’s build something amazing. Get in touch with Murati Group – London’s trusted construction partner.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#4a5261]">
      <PageHero
        title="How can we help?"
        subtitle="Let's Talk"
        image="/images/hero.jpg"
      />
      <ContactSection />
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