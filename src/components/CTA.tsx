'use client';

import Image from 'next/image';
import { Button } from './Button';

interface CTAProps {
    image: string;
    quote: string;
    title: string;
    subtitle: string;
    buttonText: string;
    link: string;
}

export default function CTA({
    image,
    quote,
    title,
    subtitle,
    buttonText,
    link,
}: CTAProps) {
    return (
        <section className="relative w-full h-[600px] bg-white overflow-hidden">
            <div className="flex w-full h-full">
                {/* LEFT COLUMN - 3/4 with background */}
                <div className="relative w-3/4 h-full">
                    <Image
                        src={image}
                        alt={`${quote} background image`}
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="relative z-10 h-full flex items-center justify-start pl-40 text-white">
                        <h2 className="text-4xl font-bold uppercase">{quote}</h2>
                    </div>
                </div>

                {/* RIGHT COLUMN - 1/4 */}
                <div className="relative w-1/4 h-full flex items-center justify-start">
                    <div className="absolute left-[-120px] z-20 flex min-h-[400px] w-[460px] flex-col justify-center bg-white py-20 px-14 shadow-xl">
                        <p className="mb-3 text-sm font-semibold uppercase text-gray-500">
                            {subtitle}
                        </p>
                        <h3 className="mb-5 text-3xl font-bold leading-snug text-[#4a5261]">
                            {title}
                        </h3>
                        <div>
                            <Button href="/projects" variant="primary">{buttonText}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}