import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/home/HeroSection'
import { getProductCategories, getServices } from '@/data/localeCatalog'
import type { AppLocale } from '@/i18n/routing'
import type { StatItem } from '@/types/locale'

const StatsSection = dynamic(() =>
  import('@/components/home/StatsSection').then((module) => ({
    default: module.StatsSection,
  })),
)

const ServicesSection = dynamic(() =>
  import('@/components/home/ServicesSection').then((module) => ({
    default: module.ServicesSection,
  })),
)

const ProductPreviewSection = dynamic(() =>
  import('@/components/home/ProductPreviewSection').then((module) => ({
    default: module.ProductPreviewSection,
  })),
)

const AboutPreviewSection = dynamic(() =>
  import('@/components/home/AboutPreviewSection').then((module) => ({
    default: module.AboutPreviewSection,
  })),
)

const ClientReferencesSection = dynamic(() =>
  import('@/components/home/ClientReferencesSection').then((module) => ({
    default: module.ClientReferencesSection,
  })),
)

const ContactCTA = dynamic(() =>
  import('@/components/home/ContactCTA').then((module) => ({
    default: module.ContactCTA,
  })),
)

type HomePageProps = {
  locale: AppLocale
}

type HomeMessages = {
  home: {
    hero: { trustIndicators: string[] }
    stats: StatItem[]
  }
}

async function getHomeContent(locale: AppLocale) {
  const messages =
    locale === 'tr'
      ? ((await import('../../messages/tr.json')).default as HomeMessages)
      : ((await import('../../messages/en.json')).default as HomeMessages)

  return {
    trustIndicators: messages.home.hero.trustIndicators,
    stats: messages.home.stats,
  }
}

export async function HomePage({ locale }: HomePageProps) {
  const [services, categories, homeContent] = await Promise.all([
    getServices(locale),
    getProductCategories(locale),
    getHomeContent(locale),
  ])

  return (
    <>
      <HeroSection
        locale={locale}
        stats={homeContent.stats}
        trustIndicators={homeContent.trustIndicators}
      />
      <StatsSection />
      <ServicesSection services={services} />
      <ProductPreviewSection categories={categories} />
      <AboutPreviewSection />
      <ClientReferencesSection />
      <ContactCTA />
    </>
  )
}
