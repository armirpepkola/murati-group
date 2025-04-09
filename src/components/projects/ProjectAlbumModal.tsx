'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

type Props = {
  images: string[];
  onClose: () => void;
};

export default function ProjectAlbumModal({ images, onClose }: Props) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);
  const goTo = (index: number) => setCurrent(index);

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: true,
  });

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center p-4">
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-red-400 transition"
      >
        <X size={32} />
      </button>

      {/* Image Viewer */}
      <div
        {...handlers}
        className="relative w-full max-w-4xl h-[80vh] flex items-center justify-center"
      >
        <Image
          src={images[current]}
          alt={`Project Image ${current + 1}`}
          fill
          className="object-contain rounded-xl"
        />

        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-400"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-400"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="mt-6 flex gap-2 overflow-x-auto max-w-full">
        {images.map((src, index) => (
          <div
            key={index}
            onClick={() => goTo(index)}
            className={`relative w-20 h-16 cursor-pointer rounded overflow-hidden border-2 ${
              index === current ? 'border-[#e25858]' : 'border-transparent'
            }`}
          >
            <Image src={src} alt={`Thumb ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
