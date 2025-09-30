import type { Metadata } from 'next';
import Link from 'next/link';
import NavLink from '@/components/NavLink';
import PhotoCarousel from '@/components/PhotoCarousel';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <section className='py-5'>
      <div className='container mx-auto px-6'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <PhotoCarousel
            photos={[
              '/about/me (1).jpg',
              '/about/me (2).jpg',
              '/about/me (3).jpg',
              '/about/me (4).jpg',
              '/about/me (5).jpg',
            ]}
            alt='Joe Young'
            className='w-full max-w-sm h-80 mx-auto'
          />
          <div className='text-center md:text-left'>
            <p className='mb-8'>
              I am an intention-driven Encounter Designer enthusiastic about
              crafting compelling challenges that effectively teach game
              mechanics and inspire players to experiment with systems,
              ultimately allowing them to display their mastery. My primary
              experience comes from designing a <b>turn-based roguelite</b>,
              where I created, playtested, and balanced all enemy compositions
              and boss encounters. For that project, I used <b>Unity</b>,{' '}
              <b>C#</b>, <b>Figma</b>, and Google Sheets. I thrive in
              collaborative environments alongside other passionate creatives
              who welcome feedback and actively seek opportunities for shared
              learning.
            </p>
            <div className='flex justify-center gap-4'>
              <Link
                href='/resume'
                className='inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300'
              >
                View Resume
              </Link>
              <Link
                href='/'
                className='inline-block bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300'
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>

        <div className='space-y-16 mt-16'>
          <div className='bg-gray-50 dark:bg-gray-900 p-8 rounded-lg'>
            <h2 className='text-3xl font-bold mb-4 text-center'>
              Experience & Education
            </h2>
            <div className='text-center'>
              <p className='text-gray-600 dark:text-gray-400 mb-4'>
                <b>Institution:</b> University of Washington <br />
                <b>Degree/Program:</b> Game Design <br />
                <b>Status:</b> Completed 2025 <br />
              </p>
              <div className='border-t border-gray-200 dark:border-gray-700 my-6' />
              <h3 className='text-2xl font-semibold mb-2'>
                Capstone Project: Turn-Based Roguelite Video Game{' '}
              </h3>
              <p className='text-gray-600 dark:text-gray-400 mb-4'>
                <b>Title:</b> Department of Malicious Vagueness <br />
                <b>The Goal:</b> Deliver a playable Minimum Viable Product (MVP)
                with a focus on system integrity and calibrated difficulty curve{' '}
                <br />
                <b>Your Specific Role:</b> Served as Encounter Designer,
                focusing on designing and implementing enemies and the boss
                encounter
                <br />
                <b>The Result/Impact:</b> Designed and implemented an enemy
                roster whose unique mechanics and behaviors reinforced core
                narrative themes and advanced player skill progression. This
                culminated in a multi-phase boss encounter that successfully
                tested the player&apos;s mastery of all game systems.
              </p>
              <Link
                href='/projects/project-1'
                className='text-blue-500 hover:underline'
              >
                View Project Details
              </Link>
            </div>
          </div>
          <div className='bg-gray-50 dark:bg-gray-900 p-8 rounded-lg'>
            <h2 className='text-3xl font-bold mb-4 text-center'>
              Design Skills
            </h2>
            <div className='grid md:grid-cols-3 gap-8 text-center'>
              <div>
                <h3 className='text-xl font-semibold mb-2'>
                  Encounter & Combat Design
                </h3>
                <ul className='text-sm list-disc list-inside inline-block text-left'>
                  <li>Enemy Design</li>
                  <li>Boss Design</li>
                  <li>Balancing</li>
                  <li>Mechanics Design</li>
                </ul>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2'>
                  Core Design Thinking
                </h3>
                <ul className='text-sm list-disc list-inside inline-block text-left'>
                  <li>Systems Design</li>
                  <li>Prototyping</li>
                  <li>Player Flow / Experience</li>
                </ul>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2'>
                  Environmental Context
                </h3>
                {/*add link to boss design area*/}
                <ul className='text-sm list-disc list-inside inline-block text-left'>
                  <li>Level Design (2D)</li>
                  <li>Narrative Design</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='bg-gray-50 dark:bg-gray-900 p-8 rounded-lg'>
            <h2 className='text-3xl font-bold mb-4 text-center'>
              Technical Skills
            </h2>
            <div className='grid md:grid-cols-3 gap-8 text-center'>
              <div>
                <h3 className='text-xl font-semibold mb-2'>
                  Game Engine & Prototyping
                </h3>
                <ul className='text-sm list-disc list-inside inline-block text-left'>
                  <li>Unity</li>
                  <li>Visual Scripting</li>
                  <li>Figma</li>
                </ul>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2'>Programming</h3>
                <ul className='text-sm list-disc list-inside inline-block text-left'>
                  <li>C#</li>
                  <li>JavaScript(TypeScript)</li>
                  <li>OOP</li>
                  <li>Data Structures</li>
                  <li>Design Patterns</li>
                  <li>Debugging</li>
                </ul>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2'>
                  Development Workflow
                </h3>
                <ul className='text-sm list-disc list-inside inline-block text-left'>
                  <li>Jira</li>
                  <li>Git</li>
                  <li>Agile/Scrum</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
