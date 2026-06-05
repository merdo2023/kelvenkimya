import { getTranslations } from 'next-intl/server'
import { siteUrl } from '@/lib/site'

type OrganizationJsonLdProps = {
  locale: string
}

export async function OrganizationJsonLd({ locale }: OrganizationJsonLdProps) {
  const t = await getTranslations({ locale, namespace: 'contact.info' })
  const company = await getTranslations({ locale, namespace: 'common' })

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: company('companyName'),
        url: `${siteUrl}/${locale}`,
        logo: `${siteUrl}/kelvenkimya.png`,
        email: t('email'),
        telephone: t('phone'),
        address: {
          '@type': 'PostalAddress',
          streetAddress: t('address'),
          addressLocality: 'Eyüpsultan',
          addressRegion: 'İstanbul',
          addressCountry: 'TR',
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#localbusiness`,
        name: company('companyName'),
        url: `${siteUrl}/${locale}`,
        image: `${siteUrl}/og-image.jpg`,
        telephone: t('phone'),
        email: t('email'),
        address: {
          '@type': 'PostalAddress',
          streetAddress: t('address'),
          addressLocality: 'Eyüpsultan',
          addressRegion: 'İstanbul',
          addressCountry: 'TR',
        },
        parentOrganization: {
          '@id': `${siteUrl}/#organization`,
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
