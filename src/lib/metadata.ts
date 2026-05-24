import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

type PageMetaKeys = {
  title: string
  description?: string
}

async function translateKey(locale: string, fullKey: string): Promise<string> {
  const [namespace, ...rest] = fullKey.split('.')
  const t = await getTranslations({ locale, namespace })
  return t(rest.join('.'))
}

export async function buildPageMetadata(
  locale: string,
  keys: PageMetaKeys,
): Promise<Metadata> {
  const title = await translateKey(locale, keys.title)
  const company = await translateKey(locale, 'common.companyName')
  const description = keys.description
    ? await translateKey(locale, keys.description)
    : await translateKey(locale, 'common.tagline')

  return {
    title: `${title} | ${company}`,
    description,
    alternates: {
      languages: {
        tr: '/tr',
        en: '/en',
      },
    },
  }
}
