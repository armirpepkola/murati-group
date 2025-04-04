'use client'

import Image from 'next/image'

export default function CTA() {
  return (
    <section className="relative w-full h-[600px] bg-white overflow-hidden">
      <div className="flex w-full h-full">
        {/* LEFT COLUMN - 3/4 with background */}
        <div className="relative w-3/4 h-full">
          <Image
            src="/images/hero.jpg"
            alt="construction site"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 h-full flex items-center justify-start text-white pl-40">
            <h2 className="text-4xl font-bold uppercase">Murati Group</h2>
          </div>
        </div>

        {/* RIGHT COLUMN - 1/4 */}
        <div className="relative w-1/4 h-full flex items-center justify-start">
          {/* CTA Card that overlays left column */}
            <div className="absolute left-[-120px] bg-white shadow-xl w-[460px] min-h-[400px] py-20 px-14 z-20 flex flex-col justify-center">
                <p className="text-sm font-semibold uppercase text-gray-500 mb-3">
                    Let’s Talk
                </p>
                <h3 className="text-3xl font-bold text-[#4a5261] mb-5 leading-snug">
                    Need to reach us?
                </h3>
                <button className="self-start bg-[#e25858] hover:bg-[#cc4646] text-white font-bold uppercase px-4 py-2 text-sm tracking-wide cursor-pointer transition-transform duration-200 hover:scale-105">
                  Get in touch
                </button>
            </div>
        </div>
      </div>
    </section>
  )
}
