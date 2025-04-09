"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      await new Promise((res) => setTimeout(res, 1000));
      if (!name || !email || !message) throw new Error("Missing fields");

      toast.success("Message sent successfully!");
      e.currentTarget.reset();
    } catch (error) {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f9f9f9] to-[#ececec] px-6 py-24 sm:px-16">
      <Toaster position="top-center" />
      {/* Background SVG noise */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "url('/images/noise.svg')" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-6xl mx-auto grid md:grid-cols-[1fr_auto_1fr] gap-12 z-10"
      >
        {/* INFO COLUMN */}
        <div className="pl-6 border-l-4 border-[#e25858] space-y-8">
          <div>
            <h2 className="text-lg uppercase text-[#e25858] font-bold tracking-wide">Let’s Talk</h2>
            <p className="text-3xl font-bold text-[#4a5261] mt-2">Get in Touch</p>
            <p className="text-[#4a5261] mt-4 leading-relaxed">
              We’re not just builders — we’re partners. Drop us a message and we’ll help turn your idea into a solid plan.
            </p>
          </div>

          <div className="space-y-4 text-[#4a5261] text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#e25858] mt-1" />
              <div>
                <p className="font-semibold">Head Office</p>
                <p>123 Builder’s Lane, London, UK</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-[#e25858]" />
              <a href="mailto:info@muratigroup.co.uk" className="hover:underline">info@muratigroup.co.uk</a>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-[#e25858]" />
              <a href="tel:+442012345678" className="hover:underline">+44 20 1234 5678</a>
            </div>

            <div className="pt-2">
              <p className="font-semibold">Working Hours</p>
              <p>Mon – Fri: 8:00am – 6:00pm</p>
              <p>Sat: 9:00am – 2:00pm</p>
            </div>
          </div>
        </div>

        {/* DIVIDER ICON */}
        <div className="hidden md:flex items-center justify-center">
          <div className="w-px h-80 bg-gray-300 relative">
            <div className="absolute -left-3 -top-3 bg-white p-2 rounded-full shadow">
              <Mail className="text-[#e25858]" />
            </div>
          </div>
        </div>

        {/* FORM COLUMN */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl border border-gray-200 p-8 shadow-md space-y-6 transition-shadow hover:shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <FloatingInput label="Name" name="name" type="text" />
          <FloatingInput label="Email" name="email" type="email" />
          <FloatingTextarea label="Message" name="message" />

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full bg-[#e25858] text-white py-3 font-bold uppercase rounded hover:bg-red-600 transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </motion.div>

      {/* TRUST QUOTE */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-12 text-center text-sm text-[#4a5261] italic z-10 relative"
      >
        “Professional, reliable, and efficient — wouldn’t trust anyone else.”
      </motion.p>
    </section>
  );
}

// FLOATING INPUT COMPONENT
function FloatingInput({ label, name, type }: { label: string; name: string; type: string }) {
  return (
    <div className="relative">
      <input
        name={name}
        type={type}
        required
        placeholder=" "
        className="peer w-full p-3 pt-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#e25858]"
      />
      <label
        htmlFor={name}
        className="absolute left-3 top-2 text-sm text-[#4a5261] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#e25858]"
      >
        {label}
      </label>
    </div>
  );
}

// FLOATING TEXTAREA COMPONENT
function FloatingTextarea({ label, name }: { label: string; name: string }) {
  return (
    <div className="relative">
      <textarea
        name={name}
        placeholder=" "
        required
        rows={5}
        className="peer w-full p-3 pt-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#e25858]"
      />
      <label
        htmlFor={name}
        className="absolute left-3 top-2 text-sm text-[#4a5261] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#e25858]"
      >
        {label}
      </label>
    </div>
  );
}
