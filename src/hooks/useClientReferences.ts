'use client'

import { useMessages } from 'next-intl'
import { normalizeReferences } from '@/lib/references'
import type { ReferenceItem } from '@/types/locale'

export function useClientReferences(): ReferenceItem[] {
  const messages = useMessages()
  const block = (messages as { home?: { clientReferences?: Parameters<typeof normalizeReferences>[0] } })
    .home?.clientReferences

  return normalizeReferences(block)
}
