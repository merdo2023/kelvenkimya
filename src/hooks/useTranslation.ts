'use client'

import { useLocale, useMessages } from 'next-intl'
import { createTranslator } from 'next-intl'
import type { AppLocale } from '@/i18n/routing'

export function useTranslation() {
  const locale = useLocale() as AppLocale
  const messages = useMessages()
  const t = createTranslator({ locale, messages })

  return {
    t,
    i18n: {
      language: locale,
      resolvedLanguage: locale,
    },
  }
}
