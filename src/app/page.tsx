import type { Metadata } from 'next';
import { PersonJSONLD } from '@/components/StructuredData';
import { siteConfig } from '@/config/siteConfig';
import Project1Content from './projects/project-1/Project1Content';

export const metadata: Metadata = {
  title: `Project: ${siteConfig.project.project1.title}`,
  description: siteConfig.project.project1.description,
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <section id='projects' className='py-16'>
        <div className='container mx-auto px-6'>
          <Project1Content />
        </div>
      </section>
      <PersonJSONLD detailed page='' />
    </>
  );
}
