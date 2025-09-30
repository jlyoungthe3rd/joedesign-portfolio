// Reusable structured data helper components
// These are server components that inject JSON-LD <script> tags
import { siteConfig } from '@/config/siteConfig';

interface PersonProps {
  detailed?: boolean;
  includeSkills?: boolean;
  skills?: string[];
  page?: string; // e.g. '/', '/about'
}

export function PersonJSONLD({ detailed = false, includeSkills = false, skills = [], page = '' }: PersonProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author,
    url: `${siteConfig.siteUrl}${page}`,
    sameAs: [siteConfig.socials.linkedin, siteConfig.socials.github],
  };
  if (detailed) {
    data.jobTitle = 'Game Designer';
  }
  if (includeSkills && skills.length) {
    data.knowsAbout = skills;
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface CreativeWorkProps {
  title: string;
  description: string;
  image: string; // path starting with /
  slug: string; // without leading slash? we'll normalize
}

export function CreativeWorkJSONLD({ title, description, image, slug }: CreativeWorkProps) {
  const normalizedSlug = slug.startsWith('/') ? slug.slice(1) : slug;
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    author: { '@type': 'Person', name: siteConfig.author },
    description,
    image: `${siteConfig.siteUrl}${image}`,
    url: `${siteConfig.siteUrl}/${normalizedSlug}`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface WebPageJSONLDProps {
  name: string;
  path: string; // e.g. '/resume'
  type?: 'WebPage' | 'CollectionPage' | 'AboutPage';
}

export function WebPageJSONLD({ name, path, type = 'WebPage' }: WebPageJSONLDProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    url: `${siteConfig.siteUrl}${path}`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
