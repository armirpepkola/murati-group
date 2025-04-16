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
        image="/images/contact/contact-hero.jpg"
      />
      <ContactSection />
      <CTA
        image="/images/contact/contact-cta.jpg"
        quote='Every great build starts with a conversation'
        title="Let's plan something great."
        subtitle="Let's Talk"
        buttonText="Get in touch"
        link="tel:+447700900900"
      />
    </main>
  );
}