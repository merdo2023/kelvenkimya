'use client'

import { HeroSection } from '@/components/home/HeroSection'
import { StatsSection } from '@/components/home/StatsSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { ProductPreviewSection } from '@/components/home/ProductPreviewSection'
import { AboutPreviewSection } from '@/components/home/AboutPreviewSection'
import { ClientReferencesSection } from '@/components/home/ClientReferencesSection'
import { ContactCTA } from '@/components/home/ContactCTA'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProductPreviewSection />
      <AboutPreviewSection />
      <ClientReferencesSection />
      <ContactCTA />
    </>
  )
}
