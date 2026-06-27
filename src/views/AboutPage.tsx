import { AboutPageHero } from '@/components/about/AboutPageHero'
import { AboutStorySection } from '@/components/about/AboutStorySection'
import { AboutWhySection } from '@/components/about/AboutWhySection'
import { AboutProcessSection } from '@/components/about/AboutProcessSection'
import { AboutProofSection } from '@/components/about/AboutProofSection'
import { AboutExpertiseSection } from '@/components/about/AboutExpertiseSection'
import { AboutPageCTA } from '@/components/about/AboutPageCTA'

type AboutPageProps = {
  locale: string
}

export function AboutPage({ locale: _locale }: AboutPageProps) {
  return (
    <div className="about-showcase">
      <AboutPageHero />
      <AboutStorySection />
      <AboutWhySection />
      <AboutProcessSection />
      <AboutProofSection />
      <AboutExpertiseSection />
      <AboutPageCTA />
    </div>
  )
}
