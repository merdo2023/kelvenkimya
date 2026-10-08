'use client'

import { useMemo, useState } from 'react'
import { Link } from '@/i18n/navigation'
import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronRight, ExternalLink, FileText, Package, ZoomIn } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { AssetImage } from '@/components/common/AssetImage'
import { highlightText } from '@/lib/highlightText'
import { hasExpandableProductDetail, parseProductDetailContent } from '@/lib/productDetail'
import { resolveMediaPath } from '@/lib/media'
import { routes } from '@/data/routes'
import type { cardAccentColors } from '@/data/accentColors'
import type { ProductItem } from '@/types/locale'
import { ProductDetailModal } from './ProductDetailModal'
import { ProductImageLightbox } from './ProductImageLightbox'
import { findProductPage, productPagePath } from '@/data/productPages'

type Accent = (typeof cardAccentColors)[number]

const MAX_VISIBLE_TAGS = 3
const SHORT_TAG_MAX_LENGTH = 28

type ActiveModal = 'none' | 'lightbox' | 'detail'

interface ProductItemRowProps {
  product: ProductItem
  index: number
  accent: Accent
  searchQuery?: string
}

function getDisplayTags(product: ProductItem): { visible: string[]; hiddenCount: number } {
  const shortTags = (product.tags ?? []).filter((tag) => tag.length <= SHORT_TAG_MAX_LENGTH)
  const visible = shortTags.slice(0, MAX_VISIBLE_TAGS)
  const hiddenCount = Math.max(0, shortTags.length - visible.length)

  return { visible, hiddenCount }
}

export function ProductItemRow({ product, index, accent, searchQuery = '' }: ProductItemRowProps) {
  const { t } = useTranslation()
  const [activeModal, setActiveModal] = useState<ActiveModal>('none')
  const imagePath = resolveMediaPath(product.image)
  const sdsUrl = resolveMediaPath(product.sdsUrl)
  const technicalFormUrl = resolveMediaPath(product.technicalFormUrl)
  const { visible: visibleTags, hiddenCount } = useMemo(() => getDisplayTags(product), [product])

  const cardDescription = useMemo(() => {
    return parseProductDetailContent(product).description
  }, [product])

  const showViewDetails = useMemo(() => hasExpandableProductDetail(product), [product])
  const detailPage = findProductPage(product.name)
  const hasDocLinks = Boolean(sdsUrl || technicalFormUrl)
  const hasTags = visibleTags.length > 0 || hiddenCount > 0

  return (
    <>
      <motion.li
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.15), ease: [0.22, 1, 0.36, 1] }}
        id={product.name.toLowerCase().replace(/\s+/g, '-')}
        className="group/item h-full scroll-mt-36 rounded-xl border border-border/40 bg-[#fbfcfd] transition-colors duration-200 hover:border-cyan/20 hover:bg-white"
      >
        <div className={`flex h-full gap-3.5 p-3.5 sm:gap-4 sm:p-4 ${imagePath ? '' : 'items-start'}`}>
          {imagePath ? (
            <button
              type="button"
              onClick={() => setActiveModal('lightbox')}
              className="group/media relative h-[7.25rem] w-[7.25rem] shrink-0 cursor-zoom-in overflow-hidden rounded-lg border border-border/30 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_3px_rgba(11,31,51,0.05)] transition-all duration-200 hover:border-cyan/25 hover:shadow-[0_4px_14px_-6px_rgba(0,166,214,0.18)] sm:h-[7.75rem] sm:w-[7.75rem]"
              aria-label={`${t('products.zoomImage')}: ${product.name}`}
            >
              <div className="relative h-full w-full p-2">
                <AssetImage
                  src={imagePath}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-200 group-hover/media:scale-[1.04]"
                  sizes="(max-width: 640px) 116px, 124px"
                />
              </div>
              <span className="pointer-events-none absolute inset-0 bg-navy/0 transition-colors duration-200 group-hover/media:bg-navy/[0.02]" />
              <span className="pointer-events-none absolute bottom-1.5 right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/95 text-navy opacity-0 shadow-sm transition-opacity duration-200 group-hover/media:opacity-100">
                <ZoomIn className="h-3 w-3" aria-hidden="true" />
              </span>
            </button>
          ) : (
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${accent.num}`}
              aria-hidden="true"
            >
              <Package className="h-4 w-4 text-navy/45" strokeWidth={1.6} />
            </div>
          )}

          <div className="flex min-w-0 flex-1 flex-col">
            <h3 className="break-words text-[0.9375rem] font-semibold leading-snug text-navy">
              {highlightText(product.name, searchQuery)}
            </h3>

            {cardDescription ? (
              <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-muted">
                {highlightText(cardDescription, searchQuery)}
              </p>
            ) : null}

            {(hasTags || hasDocLinks) && (
              <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                {visibleTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-brand-blue/10 bg-brand-blue/[0.05] px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-blue"
                  >
                    {tag}
                  </span>
                ))}
                {hiddenCount > 0 ? (
                  <span className="rounded-md border border-border/45 bg-white px-1.5 py-0.5 text-[10px] font-medium text-muted">
                    +{hiddenCount}
                  </span>
                ) : null}
                {sdsUrl ? (
                  <a
                    href={sdsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-border/50 bg-white px-2 py-0.5 text-[10px] font-semibold text-brand-blue transition-colors hover:border-cyan/30 hover:text-cyan"
                  >
                    <FileText className="h-3 w-3" aria-hidden="true" />
                    {t('products.sdsLabel')}
                  </a>
                ) : null}
                {technicalFormUrl ? (
                  <a
                    href={technicalFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-border/50 bg-white px-2 py-0.5 text-[10px] font-semibold text-brand-blue transition-colors hover:border-cyan/30 hover:text-cyan"
                  >
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    {t('products.technicalFormLabel')}
                  </a>
                ) : null}
              </div>
            )}

            <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-3">
              {detailPage ? <Link href={productPagePath(detailPage)} className="inline-flex items-center gap-1 text-xs font-semibold text-navy/70 hover:text-cyan">{t('products.viewDetails')}<ChevronRight className="h-3.5 w-3.5" /></Link> : showViewDetails ? (
                <button
                  type="button"
                  onClick={() => setActiveModal('detail')}
                  className="group/details inline-flex items-center gap-0.5 text-xs font-semibold text-navy/70 transition-colors hover:text-cyan"
                >
                  {t('products.viewDetails')}
                  <ChevronRight
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover/details:translate-x-0.5"
                    aria-hidden="true"
                  />
                </button>
              ) : null}
              <Link
                href={routes.contact}
                className="group/cta inline-flex items-center gap-1 text-xs font-semibold text-brand-blue transition-colors hover:text-cyan"
              >
                {t('products.cta')}
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </motion.li>

      {imagePath ? (
        <ProductImageLightbox
          isOpen={activeModal === 'lightbox'}
          image={imagePath}
          alt={product.name}
          title={product.name}
          onClose={() => setActiveModal('none')}
        />
      ) : null}

      <ProductDetailModal
        isOpen={activeModal === 'detail'}
        product={product}
        imagePath={imagePath}
        onClose={() => setActiveModal('none')}
      />
    </>
  )
}
