import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kelvenkimya.com'

const paths = ['', '/products', '/about', '/projects', '/contact'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: path === '' ? 'weekly' : 'monthly',
      priority: path === '' ? 1 : 0.8,
    })),
  )
}
