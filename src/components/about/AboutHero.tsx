'use client';

import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative h-screen md:h-screen w-full bg-[#4a5261] text-white overflow-hidden -mt-25 pb-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Construction site"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="section h-full flex items-end relative z-10 pb-16 md:pb-24">
        <div>
          <p className="text-sm md:text-base uppercase font-semibold tracking-wider text-white/80 mb-2">
            About
          </p>
          <h1 className="text-4xl md:text-6xl font-condensed font-bold uppercase leading-tight">
            What we stand for
          </h1>
        </div>
      </div>
    </section>
  );
}
