'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { useTranslation } from '@/hooks/useTranslation'
import type { AppLocale } from '@/i18n/routing'

export function LanguageSwitcher() {
  const locale = useLocale() as AppLocale
  const pathname = usePathname()
  const router = useRouter()
  const { t } = useTranslation()

  const setLanguage = (lang: AppLocale) => {
    if (locale !== lang) {
      router.replace(pathname, { locale: lang })
    }
  }

  const languages: AppLocale[] = ['tr', 'en']

  return (
    <div
      className="flex items-center gap-0.5 rounded-xl border border-border/80 bg-white/80 p-1 shadow-sm backdrop-blur-sm"
      role="group"
      aria-label={t('language.groupLabel')}
    >
      {languages.map((lang) => {
        const isActive = locale === lang
        return (
          <button
            key={lang}
            type="button"
            onClick={() => setLanguage(lang)}
            aria-pressed={isActive}
            aria-label={t(`language.switchTo${lang === 'tr' ? 'Tr' : 'En'}`)}
            className={`min-w-[2.25rem] cursor-pointer rounded-lg px-2.5 py-1.5 text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 sm:text-sm ${
              isActive
                ? 'gradient-accent text-white shadow-sm'
                : 'text-muted hover:text-navy'
            }`}
          >
            {t(`language.${lang}`)}
          </button>
        )
      })}
    </div>
  )
}
