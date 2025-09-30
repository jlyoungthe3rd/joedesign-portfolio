import type { Metadata } from 'next';
import { siteConfig } from '@/config/siteConfig';
import { WebPageJSONLD } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Resume',
  alternates: { canonical: '/resume' },
};

export default function ResumePage() {
  const documentId = '1SiDWXDImuUIDYJ1Tioxffezi2Ukk3H4XAcaqTafZgp0';
  const embedUrl = `https://docs.google.com/document/d/${documentId}/preview`;
  const downloadUrl = `https://docs.google.com/document/d/${documentId}/export?format=pdf`;
  const viewUrl = `https://docs.google.com/document/d/${documentId}/edit?usp=sharing`;

  return (
    <section className='py-8'>
      <div className='container mx-auto px-6'>
        <div className='w-full max-w-4xl mx-auto'>
          <div className='relative w-full' style={{ paddingBottom: '129.41%' }}>
            <iframe
              src={embedUrl}
              className='absolute top-0 left-0 w-full h-full border-2 border-gray-300 dark:border-gray-600 rounded-lg shadow-lg'
              title='Joe Young Resume'
              allowFullScreen
            />
            <a
              href={downloadUrl}
              download='Joe_Young_Resume.pdf'
              className='absolute top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300 z-10'
              title='Download Resume PDF'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              </svg>
            </a>
          </div>
        </div>

        <div className='text-center mt-6 text-sm text-gray-600 dark:text-gray-400'>
          <p>
            If the document doesn&apos;t load properly, you can{' '}
            <a
              href={viewUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline'
            >
              view it directly in Google Docs
            </a>
          </p>
        </div>
      </div>
      <WebPageJSONLD name={`Resume - ${siteConfig.author}`} path='/resume' />
    </section>
  );
}
