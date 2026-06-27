'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ArrowUpRight, X } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { routes } from '@/data/routes'
import { parseProductDetailContent } from '@/lib/productDetail'
import type { ProductItem } from '@/types/locale'

interface ProductDetailModalProps {
  isOpen: boolean
  product: ProductItem
  imagePath?: string | null
  onClose: () => void
}

export function ProductDetailModal({
  isOpen,
  product,
  imagePath,
  onClose,
}: ProductDetailModalProps) {
  const { t } = useTranslation()
  const closeRef = useRef<HTMLButtonElement>(null)
  const parsed = parseProductDetailContent(product)

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={t('products.detailTitle')}
    >
      <button
        type="button"
        className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
        onClick={onClose}
        aria-label={t('products.closeDetail')}
      />

      <div className="relative z-10 flex max-h-[94vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-2xl border border-border/40 bg-white shadow-2xl sm:rounded-2xl">
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-border/35 px-4 py-3.5 sm:px-6 sm:py-4">
          <div className="min-w-0 pr-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan">
              {t('products.detailTitle')}
            </p>
            <h2 className="mt-1 break-words text-lg font-bold leading-snug text-navy sm:text-xl">{product.name}</h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/50 bg-light-bg text-navy transition-colors hover:border-cyan/30 hover:bg-cyan/5 hover:text-cyan"
            aria-label={t('products.closeDetail')}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="grid gap-0 lg:grid-cols-[minmax(220px,280px)_1fr]">
            {imagePath ? (
              <div className="border-b border-border/30 bg-gradient-to-br from-[#f4f8fb] via-white to-light-bg/80 p-5 sm:p-6 lg:border-b-0 lg:border-r">
                <div className="relative mx-auto aspect-square w-full max-w-[240px] lg:max-w-none">
                  <Image
                    src={imagePath}
                    alt={product.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 240px, 280px"
                  />
                </div>
              </div>
            ) : null}

            <div className="space-y-5 p-5 sm:p-6">
              {parsed.description ? (
                <section>
                  <p className="text-sm leading-relaxed text-navy/85 sm:text-[0.9375rem] sm:leading-[1.7]">
                    {parsed.description}
                  </p>
                </section>
              ) : null}

              {parsed.features.length > 0 ? (
                <section>
                  <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-navy/55">
                    {t('products.featuresLabel')}
                  </h3>
                  <ul className="mt-2.5 space-y-2">
                    {parsed.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-cyan before:content-['']"
                      >
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {parsed.usageNote ? (
                <section className="rounded-xl border border-border/35 bg-light-bg/50 p-4">
                  <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-navy/55">
                    {t('products.usageNoteLabel')}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{parsed.usageNote}</p>
                </section>
              ) : null}

              {parsed.tags.length > 0 ? (
                <section>
                  <div className="flex flex-wrap gap-1.5">
                    {parsed.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-brand-blue/12 bg-brand-blue/[0.05] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-blue"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </section>
              ) : null}

              <div className="border-t border-border/30 pt-4">
                <Link
                  href={routes.contact}
                  onClick={onClose}
                  className="group/cta inline-flex items-center gap-1.5 rounded-lg border border-brand-blue/15 bg-brand-blue/[0.06] px-4 py-2.5 text-sm font-semibold text-brand-blue transition-colors hover:border-cyan/25 hover:bg-cyan/[0.08] hover:text-cyan"
                >
                  {t('products.cta')}
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
