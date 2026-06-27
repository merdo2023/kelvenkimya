'use client'

import Image from 'next/image'
import { Check, ChevronDown } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocaleArray } from '@/hooks/useLocaleArray'
import { Container } from '../common/Container'

const ABOUT_IMAGE_PATH = '/images/aboutpic.png'

export function AboutPageHero() {
  const { t } = useTranslation()
  const trustItems = useLocaleArray<string>('home.aboutPreview.trustItems')

  return (
    <section className="relative overflow-hidden gradient-hero pb-12 pt-24 sm:pb-14 sm:pt-28 lg:pb-16">
      <div className="absolute inset-0 mesh-pattern opacity-25" aria-hidden="true" />
      <div className="absolute inset-0 blueprint-lines opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-cyan/12 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-green/10 blur-3xl" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-0 top-1/3 h-px w-32 bg-gradient-to-r from-cyan/50 to-transparent sm:w-48"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6 xl:col-span-7">
            <span className="animate-fade-up about-stagger-1 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_rgba(0,166,214,0.8)]" aria-hidden="true" />
              {t('about.hero.eyebrow')}
            </span>

            <h1 className="animate-fade-up about-stagger-2 mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
              {t('about.hero.title')}
            </h1>

            <p className="animate-fade-up about-stagger-3 mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
              {t('about.hero.description')}
            </p>

            {trustItems.length > 0 && (
              <ul className="mt-6 space-y-3 sm:mt-7">
                {trustItems.map((item, index) => (
                  <li
                    key={item}
                    className={`animate-fade-up ${['about-stagger-3', 'about-stagger-4', 'about-stagger-5'][index] ?? 'about-stagger-5'} flex items-start gap-3 text-sm text-white/88`}
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-cyan/20 bg-cyan/15 text-cyan">
                      <Check className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="hero-visual-enter lg:col-span-6 xl:col-span-5">
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-cyan/25 via-transparent to-green/20 opacity-70 blur-xl"
                aria-hidden="true"
              />
              <div className="about-hero-glow relative overflow-hidden rounded-2xl border border-white/20 sm:rounded-3xl">
                <div className="relative aspect-[16/10] sm:aspect-[5/4] lg:aspect-[4/3] lg:min-h-[22rem]">
                  <Image
                    src={ABOUT_IMAGE_PATH}
                    alt={t('about.hero.imageAlt')}
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-navy/50 via-navy/10 to-transparent"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/60 to-transparent"
                    aria-hidden="true"
                  />
                </div>
                <div className="about-accent-line-top absolute inset-x-6 top-0 sm:inset-x-8" aria-hidden="true" />
              </div>
              <div
                className="cta-ring-slow pointer-events-none absolute -right-3 -top-3 h-20 w-20 rounded-full border border-cyan/20 sm:h-24 sm:w-24"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center lg:mt-8" aria-hidden="true">
          <span className="animate-fade-up about-stagger-5 flex flex-col items-center gap-1 text-white/40">
            <ChevronDown className="h-4 w-4 motion-safe:animate-bounce" />
          </span>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-light-bg to-transparent" aria-hidden="true" />
    </section>
  )
}
