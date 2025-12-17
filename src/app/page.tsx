import Link from 'next/link';
import type { Metadata } from 'next';
import { PersonJSONLD } from '@/components/StructuredData';
import PhotoCarousel from '@/components/PhotoCarousel';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <section id='projects' className='py-16'>
        <div className='container mx-auto px-6'>
          <div className='flex justify-center'>
            <div className='max-w-4xl w-full'>
              <Link href='/projects/project-1'>
                <div className='text-center group cursor-pointer'>
                  <div className='mb-6 relative'>
                    <PhotoCarousel
                      photos={[
                        '/projects/project-1/thumbnails/project1thumbnail.png',
                        '/projects/project-1/Steam image.png',
                        '/projects/project-1/boss/bossphase3.png',
                      ]}
                      alt='Turn-based Roguelite - Department of Malicious Vagueness'
                      className='w-full h-96 mx-auto transition-transform duration-300 group-hover:scale-105'
                    />
                  </div>
                  <h3 className='text-2xl font-bold mb-2'>
                    Turn-based Roguelite Video Game
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400 mb-4'>
                    Department of Malicious Vagueness
                  </p>
                  <span className='inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300'>
                    View Project Details
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <PersonJSONLD detailed page='' />
    </>
  );
}
