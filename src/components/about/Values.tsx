'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const values = [
  {
    title: "Integrity First",
    description: "We lead with honesty and transparency — no shortcuts, no surprises.",
  },
  {
    title: "Precision & Craftsmanship",
    description: "Every detail matters. From foundation to finish, we build with care.",
  },
  {
    title: "Future-Focused",
    description: "We innovate with purpose — building smarter, cleaner, and longer-lasting.",
  },
];

export default function Values() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Image (Hidden on mobile & tablet) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="hidden md:block"
        >
          <div className="relative w-full h-[500px] overflow-hidden [clip-path:polygon(0_0,100%_10%,100%_100%,0_90%)] shadow-xl">
            <Image
              src="/images/hero.jpg"
              alt="Cut angle image"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right: Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4a5261] mb-10 sm:mb-12">
            Built On These Principles
          </h2>

          <div className="relative border-l-4 border-[#e25858] pl-5 sm:pl-6 space-y-12 sm:space-y-14">
            {values.map(({ title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-3 sm:gap-4"
              >
                <CheckCircle className="text-[#e25858] min-w-[20px] sm:min-w-[24px] mt-1" size={24} />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#4a5261]">{title}</h3>
                  <p className="text-gray-700 mt-1 text-sm sm:text-base leading-relaxed">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}