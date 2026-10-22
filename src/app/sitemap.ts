import { MetadataRoute } from 'next';
import { PRODUCTS, CATEGORIES } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tgsmart.in';
  const currentDate = '2026-10-20T00:00:00.000Z';

  // Core static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-use`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/products/${cat.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // Individual product pages
  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.category}/${product.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages, ...productPages];
}
