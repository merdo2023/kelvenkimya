import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing, type AppLocale } from '@/i18n/routing'
import { ogImagePath, siteUrl } from '@/lib/site'

type PageMetaKeys = {
  title: string
  description: string
  path: string
}

async function translateKey(locale: string, fullKey: string): Promise<string> {
  const [namespace, ...rest] = fullKey.split('.')
  const t = await getTranslations({ locale, namespace })
  return t(rest.join('.'))
}

function buildLanguageAlternates(path: string): Record<string, string> {
  const alternates: Record<string, string> = {}

  for (const locale of routing.locales) {
    alternates[locale] = `/${locale}${path}`
  }

  alternates['x-default'] = `/${routing.defaultLocale}${path}`

  return alternates
}

export async function buildPageMetadata(
  locale: string,
  keys: PageMetaKeys,
): Promise<Metadata> {
  const title = await translateKey(locale, keys.title)
  const company = await translateKey(locale, 'common.companyName')
  const description = await translateKey(locale, keys.description)
  const canonicalPath = `/${locale}${keys.path}`
  const pageTitle = `${title} | ${company}`
  const openGraphLocale = locale === 'tr' ? 'tr_TR' : 'en_US'

  return {
    metadataBase: new URL(siteUrl),
    title: pageTitle,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: buildLanguageAlternates(keys.path),
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      locale: openGraphLocale,
      alternateLocale: routing.locales
        .filter((item) => item !== locale)
        .map((item) => (item === 'tr' ? 'tr_TR' : 'en_US')),
      url: canonicalPath,
      siteName: company,
      title: pageTitle,
      description,
      images: [
        {
          url: ogImagePath,
          width: 1200,
          height: 630,
          alt: company,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [ogImagePath],
    },
  }
}

export function localeToOgLocale(locale: AppLocale): string {
  return locale === 'tr' ? 'tr_TR' : 'en_US'
}
