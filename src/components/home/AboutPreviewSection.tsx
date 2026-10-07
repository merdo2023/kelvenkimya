'use client'

import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useTranslation } from '@/hooks/useTranslation'
import { ArrowRight, Check } from 'lucide-react'
import { Container } from '../common/Container'
import { useLocaleArray } from '@/hooks/useLocaleArray'
import { routes } from '@/data/routes'

const ABOUT_IMAGE_PATH = '/images/sections/kelven-field-experience.jpg'

function AboutPreviewVisual({ alt }: { alt: string }) {
  return (
    <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-2xl border border-border/30 bg-gradient-to-br from-[#eef6fa] to-white shadow-[0_4px_20px_-10px_rgba(11,31,51,0.12)]">
      <Image
        src={ABOUT_IMAGE_PATH}
        alt={alt}
        fill
        className="object-contain object-center"
        sizes="(max-width: 1024px) 100vw, 40vw"
      />
    </div>
  )
}

export function AboutPreviewSection() {
  const { t } = useTranslation()
  const trustItems = useLocaleArray<string>('home.aboutPreview.trustItems')
  const imageAlt = t('home.aboutPreview.imageAlt')

  return (
    <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
      <div className="section-muted absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 blueprint-lines opacity-[0.015]" aria-hidden="true" />

      <Container className="relative">
        <div className="relative animate-fade-up overflow-hidden rounded-3xl border border-border/35 bg-white shadow-[0_8px_40px_-16px_rgba(11,31,51,0.1)]">
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent"
            aria-hidden="true"
          />

          <div className="relative grid items-stretch gap-6 lg:grid-cols-12 lg:gap-0">
            <div className="p-7 sm:p-9 lg:col-span-7 lg:p-10 lg:pr-8">
              <div className="relative max-w-xl pl-5 sm:pl-6">
                <div
                  className="absolute left-0 top-0.5 h-[calc(100%-0.25rem)] w-px bg-gradient-to-b from-cyan/70 via-cyan/20 to-transparent"
                  aria-hidden="true"
                />

                <span className="inline-flex items-center rounded-full border border-cyan/15 bg-cyan/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan">
                  {t('home.aboutPreview.eyebrow')}
                </span>

                <h2 className="mt-5 text-[1.625rem] font-bold leading-[1.25] tracking-tight text-navy sm:text-[1.875rem] lg:text-[2rem]">
                  {t('home.aboutPreview.title')}
                </h2>

                <p className="mt-4 text-[0.9375rem] leading-[1.7] text-muted sm:text-base">
                  {t('home.aboutPreview.description')}
                </p>

                {trustItems.length > 0 && (
                  <ul className="mt-6 space-y-3 border-t border-border/30 pt-6">
                    {trustItems.map((item, index) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[0.9375rem] leading-snug text-navy/80 animate-fade-up"
                        style={{ animationDelay: `${80 + index * 60}ms` }}
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan/[0.08] text-cyan">
                          <Check className="h-3 w-3" strokeWidth={2.5} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  href={routes.about}
                  className="group/cta mt-8 inline-flex items-center gap-2.5 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_-4px_rgba(11,31,51,0.35)] transition-all duration-300 hover:bg-brand-blue hover:shadow-[0_6px_20px_-6px_rgba(30,64,175,0.35)]"
                >
                  {t('home.aboutPreview.cta')}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>

            <div className="px-7 pb-7 sm:px-9 sm:pb-9 lg:col-span-5 lg:flex lg:items-center lg:p-8 lg:pl-0 lg:pt-8">
              <AboutPreviewVisual alt={imageAlt} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
