import { PageHero } from '@/components/common/PageHero'
import { AboutHeroStats } from '@/components/about/AboutHeroStats'
import { AboutStorySection } from '@/components/about/AboutStorySection'
import { AboutExpertiseSection } from '@/components/about/AboutExpertiseSection'
import { AboutMissionVisionSection } from '@/components/about/AboutMissionVisionSection'
import { AboutValuesSection } from '@/components/about/AboutValuesSection'
import { AboutTeamSection } from '@/components/about/AboutTeamSection'
import { AboutPageCTA } from '@/components/about/AboutPageCTA'
import { getTranslations } from 'next-intl/server'

type AboutPageProps = {
  locale: string
}

export async function AboutPage({ locale }: AboutPageProps) {
  const t = await getTranslations({ locale, namespace: 'about' })

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')}>
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
