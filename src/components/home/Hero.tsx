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
          sizes="100vw"
        />
        {/* Darker Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="section h-full flex flex-col relative z-10 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="mt-auto mb-16 md:mb-24 lg:mb-32 max-w-full sm:max-w-xl md:max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-condensed font-bold leading-tight mb-6 sm:mb-8">
            <span className="text-white uppercase block">Superior results.</span>
            <span className="font-normal text-white uppercase block md:inline">
              Great experience for everyone.
            </span>
          </h1>

          <div className="flex flex-row flex-wrap gap-4 w-full">
            <Button href="/projects" variant="primary" className="w-fit">
              see our work
            </Button>
            <Button href="/services" variant="secondary" className="w-fit">
              our services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}