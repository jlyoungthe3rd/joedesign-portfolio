import Link from 'next/link';
import NavLink from '@/components/NavLink';

export default function AboutPage() {
  return (
    <section className='py-20'>
      <div className='container mx-auto px-6'>
        <div className='flex justify-center mb-12'>
          <div className='w-full max-w-md h-96 bg-gray-200 dark:bg-gray-700 rounded-lg' />
        </div>
        <div className='max-w-2xl mx-auto text-center mb-16'>
          <p className='text-lg'>
            [Your about me text will go here. Tell everyone a little bit about
            yourself, your skills, and your passions.]
          </p>
        </div>

        <div className='space-y-16'>
          <div className='bg-gray-50 dark:bg-gray-900 p-8 rounded-lg'>
            <h2 className='text-3xl font-bold mb-4 text-center'>
              Experience & Education
            </h2>
            <div className='text-center'>
              <p className='text-gray-600 dark:text-gray-400 mb-4'>
                [Your experience and education details here.]
              </p>
              <div className='border-t border-gray-200 dark:border-gray-700 my-6' />
              <h3 className='text-2xl font-semibold mb-2'>
                Project 1 Subsection
              </h3>
              <p className='text-gray-600 dark:text-gray-400 mb-4'>
                [Placeholder text for the Project 1 subsection.]
              </p>
              <Link
                href='/projects/project-1'
                className='text-blue-500 hover:underline'
              >
                View Project 1
              </Link>
            </div>
          </div>
          <div className='bg-gray-50 dark:bg-gray-900 p-8 rounded-lg'>
            <h2 className='text-3xl font-bold mb-4 text-center'>
              Design Skills
            </h2>
            <p className='text-gray-600 dark:text-gray-400 text-center'>
              [List your design skills here.]
            </p>
          </div>
          <div className='bg-gray-50 dark:bg-gray-900 p-8 rounded-lg'>
            <h2 className='text-3xl font-bold mb-4 text-center'>
              Technical Skills
            </h2>
            <p className='text-gray-600 dark:text-gray-400 text-center'>
              [List your technical skills here.]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
