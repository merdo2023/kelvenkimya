import { getTranslations } from 'next-intl/server'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Container } from '../common/Container'
import { HeroVisualColumn } from './HeroVisualColumn'
import { routes } from '@/data/routes'
import type { StatItem } from '@/types/locale'
import type { AppLocale } from '@/i18n/routing'

type HeroSectionProps = {
  locale: AppLocale
  stats: StatItem[]
  trustIndicators: string[]
}

const primaryButtonClass =
  'inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold transition-all duration-200 gradient-accent text-white shadow-lg shadow-cyan/25 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2'

const outlineButtonClass =
  'inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold transition-all duration-200 border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2'

export async function HeroSection({ locale, stats, trustIndicators }: HeroSectionProps) {
  const t = await getTranslations({ locale, namespace: 'home.hero' })

  return (
    <section className="relative min-h-[92vh] overflow-hidden gradient-hero pb-32 pt-28 sm:pb-40 sm:pt-32 lg:pb-44">
      <div className="absolute inset-0 mesh-pattern opacity-20" aria-hidden="true" />
      <div className="absolute -right-32 top-10 h-[28rem] w-[28rem] rounded-full bg-cyan/15 blur-3xl" aria-hidden="true" />
      <div className="absolute -left-32 bottom-32 h-80 w-80 rounded-full bg-green/10 blur-3xl" aria-hidden="true" />

      <Container className="relative flex min-h-[calc(92vh-10rem)] flex-col justify-center py-12 lg:py-16">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div>
            <span className="hero-secondary-enter mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-cyan backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-green shadow-[0_0_8px_rgba(56,161,105,0.8)]" />
              {t('badge')}
            </span>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              {t('title')}
            </h1>

            <p className="hero-secondary-enter mt-6 max-w-xl text-lg leading-relaxed text-white/85">
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

            <ul className="hero-secondary-enter mt-10 flex flex-nowrap items-center gap-2 overflow-x-auto pb-2 sm:gap-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {trustIndicators.map((indicator) => (
                <li
                  key={indicator}
                  className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/20 bg-navy/30 px-3 py-2 text-xs font-medium text-white shadow-lg shadow-black/10 backdrop-blur-md sm:gap-2 sm:px-3.5 sm:py-2.5 sm:text-sm"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-green" />
                  {indicator}
                </li>
              ))}
            </ul>
          </div>

          <HeroVisualColumn stats={stats} />
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-light-bg to-transparent" aria-hidden="true" />
    </section>
  )
}
