import { getLocalePath } from '@/i18n/routing'
import { siteUrl } from '@/lib/site'

type Breadcrumb = { name: string; path: string }
type Props = { locale: string; title: string; description: string; path: string; breadcrumbs: Breadcrumb[] }

export function ServiceJsonLd({ locale, title, description, path, breadcrumbs }: Props) {
  const url = siteUrl + getLocalePath(locale, path)
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service', '@id': url + '#service', name: title,
        description, url, provider: { '@id': siteUrl + '/#organization' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem', position: index + 1, name: item.name,
          item: siteUrl + getLocalePath(locale, item.path),
        })),
      },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\u003c') }} />
}
