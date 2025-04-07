import { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import CTA from "@/components/home/CTA";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | Murati Group",
  description: "Let’s build something amazing. Get in touch with Murati Group – London’s trusted construction partner.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#4a5261]">
      <ContactHero />
      <ContactSection />
      <CTA />
    </main>
  );
}