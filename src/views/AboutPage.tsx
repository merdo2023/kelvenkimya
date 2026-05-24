'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { PageHero } from '@/components/common/PageHero'
import { AboutHeroStats } from '@/components/about/AboutHeroStats'
import { AboutStorySection } from '@/components/about/AboutStorySection'
import { AboutExpertiseSection } from '@/components/about/AboutExpertiseSection'
import { AboutMissionVisionSection } from '@/components/about/AboutMissionVisionSection'
import { AboutValuesSection } from '@/components/about/AboutValuesSection'
import { AboutTeamSection } from '@/components/about/AboutTeamSection'
import { AboutPageCTA } from '@/components/about/AboutPageCTA'

export function AboutPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero title={t('about.title')} subtitle={t('about.subtitle')}>
        <AboutHeroStats />
      </PageHero>

      <AboutStorySection />
      <AboutExpertiseSection />
      <AboutMissionVisionSection />
      <AboutValuesSection />
      <AboutTeamSection />
      <AboutPageCTA />
    </>
  )
}
