'use client';

import Image from 'next/image';
import { Button } from '../Button';

const AboutPreview = () => {
  return (
    <section className="bg-white px-4 py-32 sm:px-6 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE – Text */}
        <div>
          <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-condensed font-bold uppercase leading-tight text-[#4a5261]">
            <span className="block whitespace-nowrap">Built on Trust.</span>
            <span className="block font-normal whitespace-nowrap">Powered by Experience.</span>
          </h2>

          <p className="mb-6 text-base sm:text-lg text-gray-700">
            We’re a London-based construction company with a legacy of quality craftsmanship and reliable service.
            From residential builds to commercial developments, we bring passion and precision to every project.
          </p>

          <Button href="/projects" variant="primary">
            ABOUT MURATI
          </Button>
        </div>

        {/* RIGHT SIDE – Image Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-5">
          {/* Left tall image */}
          <div className="relative row-span-2 h-[300px] sm:h-[400px] lg:h-auto overflow-hidden rounded">
            <Image
              src="/images/home/about-stonework.jpg"
              alt="Our team in action on site"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right top image */}
          <div className="relative h-[140px] sm:h-[180px] overflow-hidden rounded">
            <Image
              src="/images/home/about-extension.jpg"
              alt="Experienced builders"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>

          {/* Right bottom image */}
          <div className="relative h-[140px] sm:h-[180px] overflow-hidden rounded">
            <Image
              src="/images/home/about-renovation.jpg"
              alt="Construction site"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;