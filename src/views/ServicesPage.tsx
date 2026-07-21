import { ServicesPageHero } from '@/components/services/ServicesPageHero'
import { ServicesIntroSection } from '@/components/services/ServicesIntroSection'
import { ServicesOfferingsSection } from '@/components/services/ServicesOfferingsSection'
import { ServicesWhySection } from '@/components/services/ServicesWhySection'
import { ServicesProcessSection } from '@/components/services/ServicesProcessSection'
import { ServicesCoverageSection } from '@/components/services/ServicesCoverageSection'
import { ServicesPageCTA } from '@/components/services/ServicesPageCTA'

type ServicesPageProps = {
  locale: string
}

export function ServicesPage({ locale: _locale }: ServicesPageProps) {
  return (
    <div className="services-showcase">
      <ServicesPageHero />
      <ServicesIntroSection />
      <ServicesOfferingsSection />
      <ServicesWhySection />
      <ServicesProcessSection />
      <ServicesCoverageSection />
      <ServicesPageCTA />
    </div>
  )
}
