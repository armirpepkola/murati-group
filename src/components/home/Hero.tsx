'use client';

import Image from 'next/image';
import { Button } from '../Button';

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-[#4a5261] text-white overflow-hidden -mt-25">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Construction workers on site"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Darker Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="section h-full flex flex-col relative z-10">
        <div className="mt-auto mb-16 md:mb-24 lg:mb-32 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-condensed font-bold leading-tight mb-8">
            <span className="text-white uppercase">Superior results.</span>{' '}
            <span className="font-normal text-white uppercase block md:inline">Great experience for everyone.</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/projects" variant="primary">see our work</Button>
            <Button href="/services" variant="secondary">our services</Button>
          </div>
        </div>
      </div>
    </section>
  );
}