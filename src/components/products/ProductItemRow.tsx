'use client'

import { motion } from 'framer-motion'
import type { cardAccentColors } from '@/data/accentColors'
import type { ProductItem } from '@/types/locale'

type Accent = (typeof cardAccentColors)[number]

interface ProductItemRowProps {
  product: ProductItem
  index: number
  accent: Accent
}

export function ProductItemRow({ product, index, accent }: ProductItemRowProps) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, delay: 0.15 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group/item relative overflow-hidden rounded-2xl border border-border/50 bg-light-bg/50 p-4 transition-all duration-300 hover:border-border hover:bg-white hover:shadow-[0_8px_24px_-8px_rgba(11,31,51,0.1)] sm:p-5"
    >
      <div
        className={`absolute bottom-3 left-0 top-3 w-[2px] rounded-r-full bg-gradient-to-b ${accent.gradient} opacity-60 transition-opacity duration-300 group-hover/item:opacity-100`}
        aria-hidden="true"
      />
      <div className="pl-3">
        <p className="font-semibold text-navy transition-colors duration-300 group-hover/item:text-brand-blue">
          {product.name}
        </p>
        {product.description && (
          <p className="mt-1.5 text-sm leading-relaxed text-muted">{product.description}</p>
        )}
      </div>
    </motion.li>
  )
}
