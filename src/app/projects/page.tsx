import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Project Title 1',
      description:
        'A detailed description of the first project. It covers the scope, the technology used, and the outcome.',
      image: '/file.svg',
      link: '/projects/project-1',
    },
    {
      title: 'Project Title 2',
      description:
        'A detailed description of the second project. It covers the scope, the technology used, and the outcome.',
      image: '/globe.svg',
      link: '#',
    },
    {
      title: 'Project Title 3',
      description:
        'A detailed description of the third project. It covers the scope, the technology used, and the outcome.',
      image: '/window.svg',
      link: '#',
    },
  ];

  return (
    <div className='container mx-auto px-6 py-12'>
      <div className='space-y-12'>
        {projects.map((project) => (
          <div
            key={project.title}
            className='flex flex-col md:flex-row items-center gap-8'
          >
            <div className='w-full md:w-1/3'>
              <Link href={project.link}>
                <div className='relative h-60 w-full overflow-hidden rounded-lg cursor-pointer'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout='fill'
                    objectFit='contain'
                    className='hover:scale-105 transition-transform duration-300'
                  />
                </div>
              </Link>
            </div>
            <div className='w-full md:w-2/3'>
              <Link href={project.link}>
                <h2 className='text-3xl font-semibold mb-4 cursor-pointer hover:underline'>
                  {project.title}
                </h2>
              </Link>
              <p className='text-gray-600 dark:text-gray-400'>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
