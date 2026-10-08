import { getLocalePath } from '@/i18n/routing'
import { siteUrl } from '@/lib/site'
import { productPages, productPagePath } from '@/data/productPages'
import { getProductName } from '@/data/productSeo'

export function ProductCatalogJsonLd({ locale }: { locale: string }) {
  const tr = locale === 'tr'
  const url = siteUrl + getLocalePath(locale, '/urunlerimiz')
  const name = tr ? 'Endüstriyel Kimyasallar ve Su Şartlandırma Ürünleri' : 'Industrial Chemicals and Water Treatment Products'
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'CollectionPage', '@id': url + '#webpage', url, name, inLanguage: locale,
        isPartOf: { '@id': siteUrl + '/#website' }, mainEntity: { '@id': url + '#products' } },
      { '@type': 'ItemList', '@id': url + '#products', name, numberOfItems: productPages.length,
        itemListElement: productPages.map((product, index) => ({
          '@type': 'ListItem', position: index + 1, name: getProductName(product, locale),
          url: siteUrl + getLocalePath(locale, productPagePath(product)),
        })) },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: tr ? 'Ana Sayfa' : 'Home', item: siteUrl + getLocalePath(locale, '/') },
        { '@type': 'ListItem', position: 2, name: tr ? 'Ürünlerimiz' : 'Our Products', item: url },
      ] },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
}
