'use client';

import React from 'react';

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const gridTestimonials: Testimonial[] = [
  {
    name: 'James R.',
    role: 'Homeowner – London',
    quote: 'Murati Group delivered exceptional quality. The team was professional and exceeded our expectations!',
  },
  {
    name: 'Sarah M.',
    role: 'Architect – Kensington',
    quote: 'Working with Murati Group was seamless. Their attention to detail was outstanding.',
  },
  {
    name: 'Liam K.',
    role: 'Project Manager – Westminster',
    quote: 'They took care of everything. Highly recommend them for any project.',
  },
  {
    name: 'Nina P.',
    role: 'Interior Designer – Chelsea',
    quote: 'Reliable, creative, and a pleasure to work with from start to finish.',
  },
];

const featuredTestimonial: Testimonial = {
  name: 'Elena D.',
  role: 'Real Estate Developer – Mayfair',
  quote:
    '“Murati Group isn’t just a construction company – they’re visionaries. Our project was delivered flawlessly, ahead of schedule, and turned heads across the industry.”',
};

const Testimonials = () => {
  return (
    <section className="bg-white py-40 px-6">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-3xl uppercase font-bold text-[#4a5261]">What Our Clients Say</h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Right 1/3: Featured Testimonial */}
        <div className="bg-[#4a5261] text-white p-8 rounded-2xl shadow-lg flex flex-col justify-between">
          <div className="text-lg leading-relaxed italic mb-6">
            {featuredTestimonial.quote}
          </div>
          <div>
            <div className="font-bold text-[#e25858]">{featuredTestimonial.name}</div>
            <div className="text-sm text-gray-300">{featuredTestimonial.role}</div>
          </div>
        </div>

        {/* Left 2/3: Grid Testimonials */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {gridTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-200"
            >
              <p className="text-gray-700 italic mb-4">“{testimonial.quote}”</p>
              <div className="font-semibold text-[#e25858]">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
