'use client';

import Image from 'next/image';

interface PageHeroProps {
    title: string;
    subtitle: string;
    image: string;
}

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
    return (
        <section className="relative w-full min-h-[60vh] bg-[#4a5261] text-white overflow-hidden -mt-25">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={image}
                    alt={`${subtitle} page hero image`}
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content Wrapper */}
            <div className="section relative z-10 flex flex-col justify-end min-h-[60vh] pb-16 md:pb-24 px-4 sm:px-6">
                <div className="text-left max-w-[90%] sm:max-w-[80%]">
                    <p className="mb-2 text-xs sm:text-sm md:text-base uppercase font-semibold tracking-wider text-white/80">
                        {subtitle}
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-condensed font-bold uppercase leading-tight">
                        {title}
                    </h1>
                </div>
            </div>
        </section>
    );
}