import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section id='projects' className='py-16'>
        <div className='container mx-auto px-6'>
          <div className='flex justify-center'>
            <div className='max-w-md w-full'>
              <Link href='/projects/project-1'>
                <div className='text-center group cursor-pointer'>
                  <div className='relative h-64 w-full mb-6 overflow-hidden rounded-lg shadow-lg'>
                    <Image
                      src='/projects/project-1/thumbnails/project1thumbnail.png'
                      alt='Turn-based Roguelite'
                      fill
                      style={{ objectFit: 'contain' }}
                      className='group-hover:scale-105 transition-transform duration-300'
                    />
                  </div>
                  <h3 className='text-2xl font-bold mb-2'>
                    Turn-based Roguelite
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400 mb-4'>
                    Department of Malicious Vagueness
                  </p>
                  <div className='inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300'>
                    View Project Details
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
