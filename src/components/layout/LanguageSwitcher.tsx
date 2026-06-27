'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { useTranslation } from '@/hooks/useTranslation'
import type { AppLocale } from '@/i18n/routing'

type LanguageSwitcherProps = {
  tone?: 'light' | 'dark'
  compact?: boolean
}

export function LanguageSwitcher({ tone = 'dark', compact = false }: LanguageSwitcherProps) {
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
  const isLight = tone === 'light'

  return (
    <div
      className={`inline-flex items-center rounded-full p-0.5 ${
        isLight ? 'nav-lang-track-dark' : 'nav-lang-track-light'
      } ${compact ? 'shrink-0' : ''}`}
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
            className={`relative min-w-[2.125rem] cursor-pointer rounded-full px-2.5 py-1.5 text-[11px] font-bold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 motion-reduce:transition-none sm:min-w-[2.375rem] sm:px-3 sm:text-xs ${
              isActive
                ? 'gradient-accent text-white shadow-[0_2px_10px_-4px_rgba(0,166,214,0.55)]'
                : isLight
                  ? 'text-white/70 hover:text-white'
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
