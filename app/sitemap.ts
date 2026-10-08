import type { MetadataRoute } from 'next'
import { getLocalePath, routing } from '@/i18n/routing'
import { siteLastModified, siteUrl } from '@/lib/site'
import { cleaningBasePath, cleaningServices } from '@/data/cleaningServices'
import { conditioningBasePath, conditioningServices } from '@/data/waterConditioningServices'
import { cleaningProductsPath } from '@/views/CleaningProductsPage'
import { productPages, productPagePath } from '@/data/productPages'

const paths = ['', '/urunlerimiz', '/hizmetlerimiz', '/hakkimizda', '/projelerimiz', '/iletisim', cleaningBasePath, cleaningProductsPath, ...cleaningServices.map(service => `${cleaningBasePath}/${service.slug}`), ...conditioningServices.map(service => `${conditioningBasePath}/${service.slug}`)]

function buildLanguageAlternates(path: string): Record<string, string> {
  const alternates: Record<string, string> = {}

  for (const locale of routing.locales) {
    alternates[locale] = `${siteUrl}${getLocalePath(locale, path)}`
  }

  alternates['x-default'] = `${siteUrl}${getLocalePath(routing.defaultLocale, path)}`

  return alternates
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [...paths, ...productPages.map(productPagePath)].map((path) => ({
    url: `${siteUrl}${getLocalePath(routing.defaultLocale, path)}`,
    lastModified: path === '/projelerimiz' ? new Date('2026-10-09') : path.startsWith('/urunlerimiz/') ? new Date('2026-10-08') : siteLastModified,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
    alternates: {
      languages: buildLanguageAlternates(path),
    },
  }))
}
