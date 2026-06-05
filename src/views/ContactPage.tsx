import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import { ContactHeroHighlights } from '@/components/contact/ContactHeroHighlights'
import { ContactInfoSection } from '@/components/contact/ContactInfoSection'
import { ContactMapPanel } from '@/components/contact/ContactMapPanel'
import { ContactForm } from '@/components/contact/ContactForm'
import { getTranslations } from 'next-intl/server'

type ContactPageProps = {
  locale: string
}

export async function ContactPage({ locale }: ContactPageProps) {
  const t = await getTranslations({ locale, namespace: 'contact' })

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')}>
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
