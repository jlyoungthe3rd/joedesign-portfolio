'use client';

import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-gray-100 dark:bg-gray-900 py-2'>
      <div className='container mx-auto px-6 text-center'>
        <div className='flex justify-center space-x-6'>
          <Link
            href='https://linkedin.com/in/your-profile'
            className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
            aria-label='LinkedIn'
          >
            <FaLinkedin size='1.5em' />
          </Link>
          <Link
            href='https://github.com/your-username'
            className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
            aria-label='GitHub'
          >
            <FaGithub size='1.5em' />
          </Link>
          <Link
            href='mailto:your-email@example.com'
            className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
            aria-label='Email'
          >
            <FaEnvelope size='1.5em' />
          </Link>
        </div>
      </div>
    </footer>
  );
}