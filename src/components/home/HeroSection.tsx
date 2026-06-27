import { getTranslations } from 'next-intl/server'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Container } from '../common/Container'
import { HeroBackgroundMedia } from './HeroBackgroundMedia'
import { routes } from '@/data/routes'
import type { HeroMedia } from '@/types/locale'
import type { AppLocale } from '@/i18n/routing'

type HeroSectionProps = {
  locale: AppLocale
  trustIndicators: string[]
  media?: HeroMedia
}

const primaryButtonClass =
  'inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-bold transition-all duration-200 gradient-accent text-white shadow-xl shadow-cyan/30 hover:brightness-110 hover:shadow-cyan/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy'

const outlineButtonClass =
  'inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-black/15 backdrop-blur-md transition-all duration-200 hover:border-white/55 hover:bg-white/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy'

export async function HeroSection({ locale, trustIndicators, media }: HeroSectionProps) {
  const t = await getTranslations({ locale, namespace: 'home.hero' })

  return (
    <section className="relative overflow-hidden bg-[#071525]">
      <HeroBackgroundMedia media={media} />
      <div className="absolute inset-0 mesh-pattern opacity-[0.04]" aria-hidden="true" />

      <Container className="relative flex min-h-[min(78vh,820px)] flex-col justify-center px-4 py-28 sm:min-h-[min(75vh,760px)] sm:py-32 lg:min-h-[min(72vh,720px)]">
        <div className="max-w-3xl">
          <span className="hero-secondary-enter mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm font-semibold text-cyan backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-green shadow-[0_0_8px_rgba(56,161,105,0.9)]" />
            {t('badge')}
          </span>

          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            {t('title')}
          </h1>

          <p className="hero-secondary-enter mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
            {t('subtitle')}
          </p>

          <div className="hero-secondary-enter mt-9 flex flex-wrap gap-4">
            <Link href={routes.products} className={primaryButtonClass}>
              {t('primaryCta')}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href={routes.contact} className={outlineButtonClass}>
              {t('secondaryCta')}
            </Link>
          </div>

          <ul className="hero-secondary-enter mt-10 flex flex-wrap items-center gap-2 sm:gap-3">
            {trustIndicators.map((indicator) => (
              <li
                key={indicator}
                className="inline-flex max-w-full shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/22 bg-black/28 px-3 py-1.5 text-xs font-medium text-white/95 backdrop-blur-sm sm:px-3.5 sm:py-2 sm:text-sm"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-green" />
                {indicator}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
