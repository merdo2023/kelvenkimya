import 'server-only'

import type { AppLocale } from '@/i18n/routing'
import type { ProductCategory, ServiceItem } from '@/types/locale'
import { sortProductCategories } from './productPreview'
import { mapProjects, type ProjectMessage } from './projeler'
import { findProductPage } from './productPages'

type LocaleMessages = {
  products: { categories: ProductCategory[] }
  home: { services: { items: ServiceItem[] } }
  projects: { items: ProjectMessage[] }
}

async function loadLocaleMessages(locale: AppLocale): Promise<LocaleMessages> {
  const messages =
    locale === 'tr'
      ? ((await import('../../messages/tr.json')).default as LocaleMessages)
      : ((await import('../../messages/en.json')).default as LocaleMessages)

  return messages
}

export async function getProductCategories(locale: AppLocale): Promise<ProductCategory[]> {
  const messages = await loadLocaleMessages(locale)
  return sortProductCategories(messages.products.categories).map(category => ({
    ...category,
    products: category.products.filter(product => category.id !== 'sogutma_suyu_kimyasallari' || product.name !== 'SILIFOAM 101').sort((a, b) => {
      if (category.id !== 'sogutma_suyu_kimyasallari') return 0
      const order = ['ORG311', 'ORG211', 'ORG400', 'ORG411', 'ABACIDE - Yosun Önleyici', 'ABACIDE - Algaecide', 'Monoetilen Glikol', 'Monoethylene Glycol', 'Monopropilen Glikol 250kg', 'Monopropylene Glycol 250kg']
      return order.indexOf(a.name) - order.indexOf(b.name)
    }).map(product => {
      const page = findProductPage(product.name)
      return page ? { ...product, description: (locale === 'tr' ? page.tr : page.en).description } : product
    }),
  }))
}

export async function getServices(locale: AppLocale): Promise<ServiceItem[]> {
  const messages = await loadLocaleMessages(locale)
  const order = [
    'endustriyel-kimyasal-temizlik',
    'su-sartlandirma-kimyasallari',
    'kimyasal-temizlik-kimyasallari',
    'su-yumusatma-uniteleri-revizyonu',
    'laboratuvar-analiz-hizmetleri',
  ]
  return [...messages.home.services.items].sort((a, b) => {
    const rank = (id: string) => order.includes(id) ? order.indexOf(id) : order.length
    return rank(a.id) - rank(b.id)
  })
}

export async function getProjects(locale: AppLocale) {
  const messages = await loadLocaleMessages(locale)
  return mapProjects(messages.projects.items)
}
