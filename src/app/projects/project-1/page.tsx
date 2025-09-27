import Image from 'next/image';
import Link from 'next/link';
import NavLink from '@/components/NavLink';

export default function Project1Page() {
  return (
    <div className='flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white'>
      <header className='sticky top-0 z-50 w-full bg-gray-100 dark:bg-gray-800'>
        <div className='container mx-auto px-6 py-4'>
          <nav className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <div className='w-10 h-10 bg-gray-400 rounded-full' />
              <Link href='/' className='text-xl font-bold'>
                Joe Young
              </Link>
            </div>
            <div className='flex items-center space-x-8'>
              <NavLink href='/projects'>Projects</NavLink>
              <NavLink href='/about'>About</NavLink>
            </div>
          </nav>
        </div>
      </header>

      <main className='flex-grow container mx-auto px-6 py-16'>
        <div className='text-center mb-12'>
          <h1 className='text-5xl font-bold'>Game Title</h1>
          <p className='text-xl text-gray-600 dark:text-gray-400 mt-2'>
            Engine: Unity | Role: Encounter Designer, Programming
          </p>
        </div>

        <div className='mb-12'>
          <div className='aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 rounded-lg'>
            {/* Placeholder for video */}
          </div>
        </div>

        <div className='mb-12'>
          <h2 className='text-3xl font-bold mb-4'>Game Description</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
            massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
            sapien fringilla, mattis ligula consectetur, ultrices mauris.
            Vestibulum auctor ornare leo, non imperdiet augue. Curabitur
            pellentesque nibh, at maximus ante fermentum sit amet.
            Pellentesque commodo lacus at sodales pulvinar. Quisque elit
            diam, condimentum ut diam vel, euismod laoreet erat.
          </p>
        </div>

        <div className='mb-12'>
          <h2 className='text-3xl font-bold mb-4'>Responsibilities</h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-2xl font-semibold mb-2'>Enemy Design</h3>
              <ul className='list-disc list-inside'>
                <li>Developed Enemy Design Framework</li>
                <li>Difficulty Pacing and Introduction</li>
                <li>Combat Flow</li>
                <li>Resource and Tension Management</li>
                <li>Implemented Visual Tells</li>
                <li>Narrative Design</li>
              </ul>
            </div>
            <div>
              <h3 className='text-2xl font-semibold mb-2'>Boss Design</h3>
              <ul className='list-disc list-inside'>
                <li>Non-Linear State Design</li>
                <li>Encounter Progression</li>
                <li>Art Direction & Communication</li>
                <li>Narrative Climax</li>
                <li>Combat Balancing</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className='text-3xl font-bold mb-4'>Screenshots</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <div className='bg-gray-200 dark:bg-gray-700 h-40 rounded-lg' />
            <div className='bg-gray-200 dark:bg-gray-700 h-40 rounded-lg' />
            <div className='bg-gray-200 dark:bg-gray-700 h-40 rounded-lg' />
            <div className='bg-gray-200 dark:bg-gray-700 h-40 rounded-lg' />
          </div>
        </div>
      </main>

      <footer className='bg-gray-100 dark:bg-gray-900 py-8 mt-16'>
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
