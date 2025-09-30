import type { Metadata } from 'next';
import Project1Content from './Project1Content';
import { siteConfig } from '@/config/siteConfig';
import { CreativeWorkJSONLD } from '@/components/StructuredData';

// export const metadata: Metadata = {
//   title: 'Project: DMV',
// };

export const metadata: Metadata = {
  title: 'Project: Department of Malicious Vagueness',
  description:
    'Encounter & boss design case study for a turn-based roguelite (Unity).',
  alternates: { canonical: '/projects/project-1' },
  openGraph: {
    title: 'Department of Malicious Vagueness – Encounter Design Case Study',
    description:
      'Enemy framework, pacing systems, resource & tension management, multi-phase boss.',
    type: 'article',
    url: `${siteConfig.siteUrl}/projects/project-1`,
    images: [`${siteConfig.siteUrl}${siteConfig.project.project1.thumbnail}`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Department of Malicious Vagueness – Encounter Design Case Study',
    description:
      'Enemy framework, pacing systems, resource & tension management, multi-phase boss.',
    images: [`${siteConfig.siteUrl}${siteConfig.project.project1.thumbnail}`],
  },
};

export default function Project1Page() {
  return (
    <div className='container mx-auto px-6 py-16'>
      {/* JSON-LD structured data (server-rendered for SEO) */}
      <CreativeWorkJSONLD
        title={siteConfig.project.project1.title}
        description={siteConfig.project.project1.description}
        image={siteConfig.project.project1.thumbnail}
        slug={siteConfig.project.project1.slug}
      />
      <Project1Content />
    </div>
  );
}
