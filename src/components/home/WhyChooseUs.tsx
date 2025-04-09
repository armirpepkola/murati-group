'use client';

import React from 'react';
import { FaTools, FaAward, FaCheckCircle, FaProjectDiagram } from 'react-icons/fa';

const highlights = [
  {
    icon: <FaTools className="text-2xl sm:text-3xl text-[#e25858]" />,
    title: '25+ Years Experience',
    description: 'Delivering excellence in construction since 1999.',
  },
  {
    icon: <FaAward className="text-2xl sm:text-3xl text-[#e25858]" />,
    title: 'Certified & Insured',
    description: 'Fully accredited with top UK construction bodies.',
  },
  {
    icon: <FaProjectDiagram className="text-2xl sm:text-3xl text-[#e25858]" />,
    title: '100+ Projects Completed',
    description: 'Commercial, residential, and custom builds.',
  },
  {
    icon: <FaCheckCircle className="text-2xl sm:text-3xl text-[#e25858]" />,
    title: 'Trusted & Recommended',
    description: 'Excellent reputation backed by client reviews.',
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-32 px-4 sm:px-6 md:px-8 lg:px-16 overflow-hidden"
      style={{ backgroundImage: `url('/images/hero.jpg')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <h2 className="mb-12 text-2xl sm:text-3xl md:text-4xl font-condensed font-bold uppercase text-[#4a5261]">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {highlights.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4">
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold text-[#4a5261]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 