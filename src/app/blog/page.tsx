import type { Metadata } from 'next';
import Link from 'next/link';
import NavLink from '@/components/NavLink';

export const metadata: Metadata = {
  title: 'Blog',
};

export default function BlogPage() {
  return (
    <section className='py-20'>
      <div className='container mx-auto px-6 text-center'>
        <h2 className='text-4xl font-bold mb-4'>Blog</h2>
        <p className='text-lg'>Coming soon...</p>
      </div>
    </section>
  );
}
