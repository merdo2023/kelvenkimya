import { defineRouting } from 'next-intl/routing'

export const pathnames: Record<string, { tr: string; en: string }> = {
  '/': { tr: '/', en: '/' },
  '/urunlerimiz': { tr: '/urunlerimiz', en: '/products' },
  '/hizmetlerimiz': { tr: '/hizmetlerimiz', en: '/services' },
  '/projelerimiz': { tr: '/projelerimiz', en: '/projects' },
  '/hakkimizda': { tr: '/hakkimizda', en: '/about' },
  '/iletisim': { tr: '/iletisim', en: '/contact' },
}

export const routing = defineRouting({
  locales: ['tr', 'en'],
  defaultLocale: 'tr',
  localePrefix: 'as-needed',
  localeDetection: false,
  pathnames,
})

export type AppLocale = (typeof routing.locales)[number]

/** Public URL path for a locale (default locale has no prefix). */
export function getLocalePath(locale: string, path = ''): string {
  const normalized = path.startsWith('/') ? path : path ? `/${path}` : ''

  const suffixIndex = normalized.search(/[?#]/)
  const base = suffixIndex === -1 ? normalized : normalized.slice(0, suffixIndex)
  const suffix = suffixIndex === -1 ? '' : normalized.slice(suffixIndex)
  const localized = (pathnames[base || '/']?.[locale as AppLocale] ?? base) + suffix

  if (locale === routing.defaultLocale) {
    return localized || '/'
  }

  return `/${locale}${localized === "/" ? "" : localized}`
}
