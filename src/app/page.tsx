import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const projects = [
    {
      title: 'Turn-based Roguelite',
      description: 'Department of Malicious Vagueness',
      image: '/projects/project-1/thumbnails/project1thumbnail.png',
      link: '/projects/project-1',
    },
    {
      title: 'Project Title 2',
      description: 'A short description of the second project.',
      image: '/globe.svg',
      link: '#',
    },
    {
      title: 'Project Title 3',
      description: 'A short description of the third project.',
      image: '/window.svg',
      link: '#',
    },
  ];

  return (
    <>
      <section id='projects' className='py-16'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {projects.map((project) => (
              <Link href={project.link} key={project.title}>
                <div className='text-center group cursor-pointer'>
                  <div className='relative h-48 w-full mb-4 overflow-hidden rounded-lg'>
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout='fill'
                      objectFit='contain'
                      className='group-hover:scale-105 transition-transform duration-300'
                    />
                  </div>
                  <h3 className='text-xl font-semibold mb-1'>
                    {project.title}
                  </h3>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
