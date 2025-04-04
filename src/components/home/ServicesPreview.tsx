'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Wrench, Expand, Home } from 'lucide-react';

const services = [
  {
    title: 'Renovations',
    desc: 'We handle complete residential and commercial transformations with precision.',
    features: ['Kitchen & Bath', 'Flooring', 'Painting'],
    icon: Wrench,
  },
  {
    title: 'Extensions',
    desc: 'Expand your home with beautifully integrated extensions and add-ons.',
    features: ['Side Return', 'Wrap Around', 'Rear Extensions'],
    icon: Expand,
  },
  {
    title: 'Loft Conversions',
    desc: 'Maximize unused space and increase property value with stylish lofts.',
    features: ['Dormer', 'Hip-to-Gable', 'Mansard'],
    icon: Home,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ServicesPreview = () => {
  return (
    <section
      className="relative py-32 px-8 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-md z-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-[#4a5261] mb-4 uppercase">Our Services</h2>
        <p className="text-lg text-[#4a5261] max-w-2xl mx-auto">
          We bring your vision to life with innovative, tailored solutions.
        </p>
      </div>

      <motion.div
        className="relative z-10 grid md:grid-cols-3 gap-10 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={cardVariants}
            className="group relative p-8 bg-white/30 backdrop-blur-xl text-[#4a5261] rounded-3xl shadow-2xl overflow-hidden hover:shadow-[#e25858]/50 transition-all duration-300"
          >
            <s.icon className="w-10 h-10 text-[#e25858] mb-6" />
            <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
            <p className="text-sm mb-4">{s.desc}</p>
            <ul className="text-sm list-disc list-inside space-y-1 mb-6">
              {s.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <Link
            href="/services"
            className="inline-block mt-auto bg-[#e25858] text-white uppercase text-xs px-5 py-2 rounded shadow hover:bg-[#cf4a4a] transition cursor-pointer"
            >
                Learn More
            </Link>

          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesPreview;
