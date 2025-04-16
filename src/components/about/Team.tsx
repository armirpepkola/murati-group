'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  { name: "John Carter", role: "Project Manager", img: "/images/about/team-sample.jpg" },
  { name: "Sarah Khan", role: "Architect", img: "/images/about/team-sample.jpg" },
  { name: "Liam Patel", role: "Site Supervisor", img: "/images/about/team-sample.jpg" },
  { name: "Nina Costa", role: "Civil Engineer", img: "/images/about/team-sample.jpg" },
];

export default function Team() {
  return (
    <section className="bg-[#f5f5f5] py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-[#4a5261] mb-10 sm:mb-12"
        >
          The People Who Make It Happen
        </motion.h2>

        <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {team.map(({ name, role, img }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                <Image
                  src={img}
                  alt={name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg sm:text-xl font-semibold text-[#4a5261]">{name}</h3>
                <p className="text-[#e25858] font-medium text-sm sm:text-base">{role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}