"use client";

import Link from "next/link";
import Image from "next/image";

const AboutPreview = () => {
  return (
    <section className="py-32 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE – Text */}
        <div>
          <h2 className="text-2xl md:text-4xl font-condensed font-bold text-[#4a5261] leading-tight uppercase mb-4">
            <span className="block whitespace-nowrap">Built on Trust.</span>
            <span className="block font-normal whitespace-nowrap">Powered by Experience.</span>
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            We’re a London-based construction company with a legacy of quality craftsmanship and reliable service.
            From residential builds to commercial developments, we bring passion and precision to every project.
          </p>
          <Link
            href="/about"
            className="inline-block bg-[#e25858] text-white uppercase tracking-wide font-semibold px-4.5 py-2 hover:bg-[#4a5261] transition-colors"
          >
            About Murati
          </Link>
        </div>

        {/* RIGHT SIDE – Image Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
          {/* Left tall image (spans 2 rows) */}
          <div className="relative row-span-2">
            <Image
              src="/images/hero.jpg"
              alt="About Murati"
              fill
              className="object-cover rounded"
            />
          </div>

          {/* Right side: 2 stacked squares */}
          <div className="relative h-full min-h-[150px]">
            <Image
              src="/images/hero.jpg"
              alt="Construction Team"
              fill
              className="object-cover rounded"
            />
          </div>
          <div className="relative h-full min-h-[150px]">
            <Image
              src="/images/hero.jpg"
              alt="Project Site"
              fill
              className="object-cover rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
