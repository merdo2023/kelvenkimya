'use client'

import { motion } from 'framer-motion'
import { highlightText } from '@/lib/highlightText'
import type { cardAccentColors } from '@/data/accentColors'
import type { ProductItem } from '@/types/locale'

type Accent = (typeof cardAccentColors)[number]

interface ProductItemRowProps {
  product: ProductItem
  index: number
  accent: Accent
  searchQuery?: string
}

export function ProductItemRow({ product, index, accent, searchQuery = '' }: ProductItemRowProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.2), ease: [0.22, 1, 0.36, 1] }}
      className="group/item relative rounded-xl border border-border/40 bg-light-bg/40 p-4 transition-all duration-200 hover:border-border/70 hover:bg-white hover:shadow-sm"
    >
      <div
        className={`absolute bottom-3 left-0 top-3 w-[2px] rounded-r-full bg-gradient-to-b ${accent.gradient} opacity-50 transition-opacity duration-300 group-hover/item:opacity-100`}
        aria-hidden="true"
      />
      <div className="pl-3">
        <p className="font-semibold leading-snug text-navy">
          {highlightText(product.name, searchQuery)}
        </p>
        {product.description && (
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {highlightText(product.description, searchQuery)}
          </p>
        )}
      </div>
    </motion.li>
  )
}
