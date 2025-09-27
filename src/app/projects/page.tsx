import Image from 'next/image';
import Link from 'next/link';
import NavLink from '@/components/NavLink';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Project Title 1',
      description: 'A detailed description of the first project. It covers the scope, the technology used, and the outcome.',
      image: '/file.svg',
      link: '#',
    },
    {
      title: 'Project Title 2',
      description: 'A detailed description of the second project. It covers the scope, the technology used, and the outcome.',
      image: '/globe.svg',
      link: '#',
    },
    {
      title: 'Project Title 3',
      description: 'A detailed description of the third project. It covers the scope, the technology used, and the outcome.',
      image: '/window.svg',
      link: '#',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white'>
      <header className='sticky top-0 z-50 w-full bg-gray-100 dark:bg-gray-800'>
        <div className='container mx-auto px-6 py-4'>
          <nav className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <div className='w-10 h-10 bg-gray-400 rounded-full' />
              <Link href="/" className='text-xl font-bold'>Joe Young</Link>
            </div>
            <div className='flex items-center space-x-8'>
              <NavLink href='/projects'>Projects</NavLink>
              <NavLink href='/about'>About</NavLink>
            </div>
          </nav>
        </div>
      </header>

      <main className='flex-grow'>
        <section className='bg-gray-50 dark:bg-gray-900 py-20 text-center'>
          <div className='container mx-auto px-6'>
            <h1 className='text-6xl font-bold'>Projects</h1>
          </div>
        </section>
        <div className='container mx-auto px-6 py-16'>
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
                  <h2 className='text-3xl font-semibold mb-4'>
                    {project.title}
                  </h2>
                  <p className='text-gray-600 dark:text-gray-400'>
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className='bg-gray-100 dark:bg-gray-900 py-8'>
        <div className='container mx-auto px-6 text-center'>
          <div className='flex justify-center space-x-6'>
            <Link
              href='https://linkedin.com/in/your-profile'
              className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
            >
              LinkedIn
            </Link>
            <Link
              href='https://github.com/your-username'
              className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
            >
              GitHub
            </Link>
            <Link
              href='mailto:your-email@example.com'
              className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
            >
              Email
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
