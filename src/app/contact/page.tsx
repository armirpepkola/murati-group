import { Metadata } from "next";
import CTA from "@/components/home/CTA";
import ContactSection from "@/components/contact/ContactSection";
import PageHero from "@/components/PageHero";

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
      <CTA />
    </main>
  );
}