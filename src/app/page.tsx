import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const projects = [
    {
      title: 'Project Title 1',
      description: 'A short description of the first project.',
      image: '/file.svg',
      link: '#',
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
    <div className='flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white'>
      <header className='sticky top-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm'>
        <div className='container mx-auto px-6 py-4'>
          <nav className='flex items-center justify-end space-x-8'>
            <Link
              href='#projects'
              className='text-lg hover:text-gray-400 transition-colors'
            >
              Projects
            </Link>
            <Link
              href='#about'
              className='text-lg hover:text-gray-400 transition-colors'
            >
              About
            </Link>
          </nav>
        </div>
      </header>

      <main className='flex-grow'>
        <section id='hero' className='container mx-auto px-6 py-32 text-center'>
          <h1 className='text-6xl font-bold'>Joe Young</h1>
          <p className='mt-4 text-2xl text-gray-600 dark:text-gray-300'>
            Building Logic Systems & Encounters That Reward Mastery
          </p>
        </section>

        <section id='projects' className='py-20 bg-gray-50 dark:bg-gray-900'>
          <div className='container mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-12'>
              Featured Projects
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
              {projects.map((project) => (
                <div key={project.title} className='text-center'>
                  <h3 className='text-2xl font-semibold mb-4'>
                    {project.title}
                  </h3>
                  <div className='relative h-60 w-full mb-4'>
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                  <p className='text-gray-600 dark:text-gray-400'>
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id='about' className='py-32'>
          <div className='container mx-auto px-6 text-center'>
            <h2 className='text-4xl font-bold mb-4'>About Me</h2>
            <p className='max-w-2xl mx-auto text-lg'>
              [Your about me text will go here. Tell everyone a little bit about
              yourself, your skills, and your passions.]
            </p>
          </div>
        </section>
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
