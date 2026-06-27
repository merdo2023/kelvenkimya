import { ContactPageHero } from '@/components/contact/ContactPageHero'
import { ContactHeroHighlights } from '@/components/contact/ContactHeroHighlights'
import { ContactInfoSection } from '@/components/contact/ContactInfoSection'
import { getTranslations } from 'next-intl/server'

type ContactPageProps = {
  locale: string
}

export async function ContactPage({ locale }: ContactPageProps) {
  const t = await getTranslations({ locale, namespace: 'contact' })

  return (
    <>
      <ContactPageHero title={t('title')} subtitle={t('subtitle')}>
        <ContactHeroHighlights />
      </ContactPageHero>

      <ContactInfoSection />
    </>
  )
}
