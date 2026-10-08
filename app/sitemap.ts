import type { MetadataRoute } from 'next'
import { getLocalePath, routing } from '@/i18n/routing'
import { siteLastModified, siteUrl } from '@/lib/site'
import { cleaningBasePath, cleaningServices } from '@/data/cleaningServices'
import { conditioningBasePath, conditioningServices } from '@/data/waterConditioningServices'

const paths = ['', '/urunlerimiz', '/hizmetlerimiz', '/hakkimizda', '/projelerimiz', '/iletisim', cleaningBasePath, ...cleaningServices.map(service => `${cleaningBasePath}/${service.slug}`), ...conditioningServices.map(service => `${conditioningBasePath}/${service.slug}`)]

function buildLanguageAlternates(path: string): Record<string, string> {
  const alternates: Record<string, string> = {}

  for (const locale of routing.locales) {
    alternates[locale] = `${siteUrl}${getLocalePath(locale, path)}`
  }

  alternates['x-default'] = `${siteUrl}${getLocalePath(routing.defaultLocale, path)}`

  return alternates
}

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${siteUrl}${getLocalePath(routing.defaultLocale, path)}`,
    lastModified: siteLastModified,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
    alternates: {
      languages: buildLanguageAlternates(path),
    },
  }))
}
