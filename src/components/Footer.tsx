'use client';

import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-gray-100 dark:bg-gray-900 py-2'>
      <div className='container mx-auto px-6 text-center'>
        <div className='flex justify-center space-x-6'>
          <Link
            href='https://www.linkedin.com/in/joelewisyoung/'
            className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
            aria-label='LinkedIn'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin size='1.5em' />
          </Link>
          <Link
            href='https://github.com/jlyoungthe3rd'
            className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
            aria-label='GitHub'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub size='1.5em' />
          </Link>
          <Link
            href='mailto:jlyoungthe3rd@gmail.com'
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