export type Project = {
    id: string;
    title: string;
    description: string;
    images: string[];
    location: string;
    year: number;
  };
  
  export const projects: Project[] = [
    {
      id: '1',
      title: 'Modern Residential Complex',
      description: 'A sleek, modern design with sustainable materials.',
      images: [
        '/images/projects/project1/hero.jpg',
        '/images/projects/project1/hero.jpg',
      ],
      location: 'London, UK',
      year: 2024,
    },
    {
      id: '2',
      title: 'Urban Office Tower',
      description: 'High-rise office building with smart tech integration.',
      images: [
        '/images/projects/project2/hero.jpg',
        '/images/projects/project2/hero.jpg',
      ],
      location: 'Canary Wharf, London',
      year: 2023,
    },
  ];
  