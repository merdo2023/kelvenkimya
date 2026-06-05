import 'server-only'

import type { AppLocale } from '@/i18n/routing'
import type { ProductCategory, ServiceItem } from '@/types/locale'
import { mapProjects, type ProjectMessage } from './projeler'

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
  return messages.products.categories
}

export async function getServices(locale: AppLocale): Promise<ServiceItem[]> {
  const messages = await loadLocaleMessages(locale)
  return messages.home.services.items
}

export async function getProjects(locale: AppLocale) {
  const messages = await loadLocaleMessages(locale)
  return mapProjects(messages.projects.items)
}
