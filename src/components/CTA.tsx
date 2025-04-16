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
        <>
            {/* === Desktop CTA === */}
            <section className="relative w-full h-[600px] bg-white overflow-hidden hidden lg:block">
                <div className="flex w-full h-full">
                    {/* LEFT COLUMN - Image */}
                    <div className="relative w-3/4 h-full">
                        <Image
                            src={image}
                            alt={`${quote} background image`}
                            fill
                            priority
                            className="object-cover"
                            sizes="75vw"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="relative z-10 h-full flex items-center justify-start pl-40 text-white">
                            <h2 className="text-4xl font-bold uppercase pr-37">{quote}</h2>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - Floating card */}
                    <div className="relative w-1/4 h-full flex items-center justify-start">
                        <div className="absolute left-[-120px] z-20 flex min-h-[400px] w-[460px] flex-col justify-center bg-white py-20 px-14 shadow-xl">
                            <p className="mb-3 text-sm font-semibold uppercase text-gray-500">
                                {subtitle}
                            </p>
                            <h3 className="mb-5 text-3xl font-bold leading-snug text-[#4a5261]">
                                {title}
                            </h3>
                            <div>
                                <Button href={link} variant="primary">{buttonText}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* === Mobile/Tablet CTA === */}
            <section className="relative block lg:hidden w-full h-[500px] sm:h-[550px] md:h-[600px] bg-white overflow-hidden">
                {/* Background Image */}
                <Image
                    src={image}
                    alt="CTA background"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/40" />

                {/* White Card Centered */}
                <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
                    <div className="bg-white text-center px-6 py-10 rounded-2xl shadow-xl max-w-md w-full">
                        <p className="mb-3 text-sm font-semibold uppercase text-gray-500">
                            {subtitle}
                        </p>
                        <h3 className="mb-5 text-2xl sm:text-3xl font-bold leading-snug text-[#4a5261]">
                            {title}
                        </h3>
                        <Button href={link} variant="primary">
                            {buttonText}
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}