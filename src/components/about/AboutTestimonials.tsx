'use client';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Murati Group transformed our vision into reality — ahead of schedule and beyond expectations.",
    name: "Emily R.",
  },
  {
    quote: "Reliable, professional, and absolutely top-tier craftsmanship.",
    name: "James M.",
  },
  {
    quote: "From the first call to final handover, the team was exceptional.",
    name: "Aisha K.",
  },
  {
    quote: "We’ve worked with big names before, but none matched Murati’s integrity and attention to detail.",
    name: "Tom L.",
  },
];

export default function AboutTestimonials() {
  return (
    <section className="bg-[#4a5261] py-20 sm:py-28 px-4 sm:px-6 overflow-hidden mb-20 sm:mb-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-white text-3xl sm:text-4xl font-bold mb-10 sm:mb-12"
      >
        What Our Clients Say
      </motion.h2>

      <div className="relative">
        <div className="flex gap-6 sm:gap-8 animate-slide-loop">
          {[...testimonials, ...testimonials].map(({ quote, name }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white text-[#4a5261] w-[85vw] sm:w-[70vw] md:w-[400px] px-5 sm:px-6 py-6 sm:py-8 rounded-xl shadow-lg relative whitespace-normal shrink-0"
            >
              <Quote className="absolute top-4 left-4 text-[#e25858]" size={24} />
              <p className="italic text-base sm:text-lg leading-relaxed mt-6">“{quote}”</p>
              <p className="mt-4 font-semibold text-[#e25858] text-right text-sm sm:text-base">— {name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-slide-loop {
          animation: scroll-loop 40s linear infinite;
        }

        @keyframes scroll-loop {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}