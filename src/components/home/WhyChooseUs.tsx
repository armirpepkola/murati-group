import React from "react";
import { FaTools, FaAward, FaCheckCircle, FaProjectDiagram } from "react-icons/fa";

const highlights = [
  {
    icon: <FaTools className="text-3xl text-[#e25858]" />,
    title: "25+ Years Experience",
    description: "Delivering excellence in construction since 1999.",
  },
  {
    icon: <FaAward className="text-3xl text-[#e25858]" />,
    title: "Certified & Insured",
    description: "Fully accredited with top UK construction bodies.",
  },
  {
    icon: <FaProjectDiagram className="text-3xl text-[#e25858]" />,
    title: "100+ Projects Completed",
    description: "Commercial, residential, and custom builds.",
  },
  {
    icon: <FaCheckCircle className="text-3xl text-[#e25858]" />,
    title: "Trusted & Recommended",
    description: "Excellent reputation backed by client reviews.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f9f9f9] py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#4a5261] mb-12">Why Choose Us</h2>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {highlights.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[#4a5261]">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
