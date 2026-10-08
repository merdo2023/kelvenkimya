import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['tr', 'en'],
  defaultLocale: 'tr',
  localePrefix: 'as-needed',
  localeDetection: false,
})

export type AppLocale = (typeof routing.locales)[number]

/** Public URL path for a locale (default locale has no prefix). */
export function getLocalePath(locale: string, path = ''): string {
  const normalized = path.startsWith('/') ? path : path ? `/${path}` : ''

  if (locale === routing.defaultLocale) {
    return normalized || '/'
  }

  return `/${locale}${normalized}`
}
