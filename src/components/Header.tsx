'use client';

import Link from 'next/link';
import NavLink from '@/components/NavLink';

export default function Header() {
  return (
    <section className='bg-gray-50 dark:bg-gray-900 py-4 text-center'>
      <div className='container mx-auto px-6'>
        <Link href='/'>
          <h1 className='text-4xl font-bold cursor-pointer'>JOE YOUNG</h1>
        </Link>
        <p className='mt-2 text-xl text-gray-600 dark:text-gray-300 font-serif'>
          Game Designer
        </p>
        <nav className='mt-8 flex justify-center space-x-8'>
          <NavLink href='/'>Portfolio</NavLink>
          <NavLink href='/about'>About</NavLink>
          <NavLink href='/blog'>Blog</NavLink>
        </nav>
      </div>
    </section>
  );
}
