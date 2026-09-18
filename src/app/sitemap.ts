import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://novaemlak.com.tr';

  return [
    {
      url: baseUrl,
      lastModified: '2026-09-01',
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/portfoy`,
      lastModified: '2026-09-01',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}
