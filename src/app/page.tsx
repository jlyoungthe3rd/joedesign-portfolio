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
      <header className='sticky top-0 z-50 w-full bg-gray-100 dark:bg-gray-800'>
        <div className='container mx-auto px-6 py-4'>
          <nav className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <div className='w-10 h-10 bg-gray-400 rounded-full' />
              <span className='text-xl font-bold'>Joe Young</span>
            </div>
            <div className='flex items-center space-x-8'>
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
            </div>
          </nav>
        </div>
      </header>

      <main className='flex-grow'>
        <section
          id='hero'
          className='bg-gray-50 dark:bg-gray-900 py-32 text-center'
        >
          <div className='container mx-auto px-6'>
            <h1 className='text-6xl font-bold'>Joe Young</h1>
            <p className='mt-4 text-2xl text-gray-600 dark:text-gray-300'>
              Building Logic Systems & Encounters That Reward Mastery
            </p>
            <div className='mt-8'>
              <Link
                href='#projects'
                className='bg-black text-white dark:bg-white dark:text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors'
              >
                Explore My Portfolio
              </Link>
            </div>
          </div>
        </section>

        <section id='projects' className='py-16'>
          <div className='container mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-12'>
              Featured Projects
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
              {projects.map((project) => (
                <Link href={project.link} key={project.title}>
                  <div className='text-center group cursor-pointer'>
                    <div className='relative h-60 w-full mb-4 overflow-hidden rounded-lg'>
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout='fill'
                        objectFit='contain'
                        className='group-hover:scale-105 transition-transform duration-300'
                      />
                    </div>
                    <h3 className='text-2xl font-semibold mb-2'>
                      {project.title}
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400'>
                      {project.description}
                    </p>
                  </div>
                </Link>
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
