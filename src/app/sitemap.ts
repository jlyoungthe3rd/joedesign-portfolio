import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  const lastModified = new Date();
  return [
    { url: `${base}/`, lastModified },
    { url: `${base}/about`, lastModified },
    { url: `${base}/resume`, lastModified },
    { url: `${base}/projects/project-1`, lastModified },
    { url: `${base}/blog`, lastModified },
  ];
}
