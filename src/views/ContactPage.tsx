'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import { ContactHeroHighlights } from '@/components/contact/ContactHeroHighlights'
import { ContactInfoSection } from '@/components/contact/ContactInfoSection'
import { ContactMapPanel } from '@/components/contact/ContactMapPanel'
import { ContactForm } from '@/components/contact/ContactForm'

export function ContactPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero title={t('contact.title')} subtitle={t('contact.subtitle')}>
        <ContactHeroHighlights />
      </PageHero>

      <ContactInfoSection />

      <section className="relative overflow-hidden pb-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <ContactMapPanel />
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
