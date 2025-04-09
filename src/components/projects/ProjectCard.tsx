import Image from 'next/image';
import { FC } from 'react';

type Props = {
  title: string;
  description: string;
  images: string[];
  location: string;
  year: number;
  onClick: () => void;
};

const ProjectCard: FC<Props> = ({ title, description, images, location, year, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer group rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-2xl transition duration-300"
    >
      <div className="relative h-56 w-full">
        <Image
          src={images[0]}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#4a5261]">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{location} • {year}</p>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
