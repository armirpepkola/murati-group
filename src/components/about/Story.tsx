'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Story() {
  return (
    <section className="bg-white py-32 sm:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4a5261] mb-6 leading-tight">
            Building More Than Structures
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-7 sm:leading-8">
            At Murati Group, we don’t just pour concrete and raise walls — we build lasting partnerships, elevate communities,
            and shape spaces people are proud to live and work in. Every project is driven by precision, pride, and a deep
            respect for the craft.
          </p>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-700 leading-7 sm:leading-8">
            Rooted in London, we combine traditional values with cutting-edge techniques. Whether it's a modern commercial build
            or a classic residential restoration, our commitment stays the same: <span className="text-[#e25858] font-semibold">excellence without compromise</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/hero.jpg"
              alt="Construction site"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}