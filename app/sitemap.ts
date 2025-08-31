import type { MetadataRoute } from 'next';
import { PRODUCTS } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/produtos`, lastModified: new Date() },
    ...PRODUCTS.map(p => ({ url: `${base}/produto/${p.slug}`, lastModified: new Date() })),
  ];
}
