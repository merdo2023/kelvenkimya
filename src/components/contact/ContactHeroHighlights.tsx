'use client'

import { motion } from 'framer-motion'
import { useLocaleArray } from '@/hooks/useLocaleArray'

export function ContactHeroHighlights() {
  const highlights = useLocaleArray<string>('contact.highlights')

  return (
    <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
      {highlights.map((highlight, index) => (
        <motion.span
          key={highlight}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm sm:px-3.5 sm:py-2 sm:text-sm"
        >
          <span className="h-1 w-1 rounded-full bg-cyan" aria-hidden="true" />
          {highlight}
        </motion.span>
      ))}
    </div>
  )
}
