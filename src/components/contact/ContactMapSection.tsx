'use client'

import { useTranslation } from '@/hooks/useTranslation'

const MAP_EMBED_SRC =
  'https://www.google.com/maps?q=Defterdar%20Mah.%20Hac%C4%B1%20Bilgin%20Sokak%20No%3A35%20Ey%C3%BCpsultan%20%C4%B0stanbul&output=embed'

export function ContactMapSection() {
  const { t } = useTranslation()

  return (
    <div id="contact-location" className="mt-8 lg:mt-9">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-navy sm:text-xl">{t('contact.map.title')}</h2>
        <p className="mt-1.5 break-words text-sm leading-relaxed text-muted">
          {t('contact.map.subtitle')}
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-border/50 bg-white shadow-[0_4px_32px_-8px_rgba(11,31,51,0.08)]">
        <iframe
          title={t('contact.map.iframeTitle')}
          src={MAP_EMBED_SRC}
          className="h-[320px] w-full border-0 sm:h-[340px] md:h-[420px]"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}
