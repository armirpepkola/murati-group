"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

const services = [
  {
    id: "extensions",
    title: "Extensions & Renovations",
    summary:
      "We expand your space with strength and precision, blending aesthetics and structure to meet your lifestyle.",
    points: [
      "Kitchen & bathroom refits",
      "Full-house renovations",
      "Structural planning & builds",
      "Modern upgrades & finishes",
    ],
    background: "/images/services/extension.jpg",
  },
  {
    id: "lofts",
    title: "Loft Conversions",
    summary:
      "Unlock potential overhead — transform your loft into a high-functioning, beautiful space.",
    points: [
      "Dormer & mansard builds",
      "Staircase integration",
      "Full insulation & compliance",
    ],
    background: "/images/services/conversion.jpg",
  },
  {
    id: "interior",
    title: "Interior Design",
    summary:
      "Form meets function. We design interiors that feel lived in, tailored, and timeless.",
    points: [
      "Concept to completion design",
      "Lighting & layout optimization",
      "Material & fixture selection",
    ],
    background: "/images/services/interior.jpg",
  },
  {
    id: "exterior",
    title: "Exterior Design & Landscaping",
    summary:
      "First impressions matter. We sculpt outdoor spaces that are both practical and powerful.",
    points: [
      "Facade treatments",
      "Driveways, paths & fencing",
      "Planting schemes & lighting",
    ],
    background: "/images/services/exterior.jpg",
  },
  {
    id: "stone",
    title: "Stone Works",
    summary:
      "Stone is forever. Our masons bring decades of craftsmanship to your surfaces and structures.",
    points: [
      "Walls, patios & tiling",
      "Stone restoration",
      "Cladding & bespoke features",
    ],
    background: "/images/services/stone.jpg",
  },
];

export default function Services() {
  return (
    <section className="bg-[#f4f4f4] py-20 sm:py-24 px-4 sm:px-6 lg:px-16 overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-20 sm:mb-28"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <div className="w-16 h-1 bg-[#e25858] mb-4" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4a5261] leading-tight">
              Built Around Your Vision
            </h2>
          </div>
          <p className="max-w-xl text-gray-600 text-base sm:text-lg md:text-right">
            We don’t offer services — we build solutions. Explore the areas where
            Murati Group brings quality and expertise to every square metre.
          </p>
        </div>
      </motion.div>

      {/* Services Content */}
      <div className="max-w-7xl mx-auto space-y-24 sm:space-y-36">
        {services.map((service, index) => (
          <motion.article
            key={service.id}
            className={clsx(
              "flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16",
              index % 2 !== 0 && "md:flex-row-reverse"
            )}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Text */}
            <div className="flex-1 w-full">
              <h3 className="text-[#e25858] font-semibold text-xs sm:text-sm uppercase tracking-wider mt-6 md:mt-0 mb-1 sm:mb-2">
                {service.title}
              </h3>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a5261] mb-3 sm:mb-4 leading-snug">
                {service.summary}
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Image */}
            {service.background && (
              <div className="w-full md:w-1/2 h-64 sm:h-[22rem] md:h-[26rem] relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={service.background}
                  alt={service.title}
                  fill
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/5" />
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}