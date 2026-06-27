import type { ProductItem } from '@/types/locale'

export type ParsedProductDetail = {
  description: string
  usageNote: string
  features: string[]
  tags: string[]
}

const USAGE_NOTE_PATTERN = /\n\n(?:(?:Kullanım Notu|Usage Note):\s*)([\s\S]+)$/i

export function parseProductDetailContent(product: ProductItem): ParsedProductDetail {
  const full = product.description?.trim() ?? ''
  let description = full
  let usageNote = ''

  const usageMatch = full.match(USAGE_NOTE_PATTERN)
  if (usageMatch) {
    description = full.slice(0, usageMatch.index).trim()
    usageNote = usageMatch[1].trim()
  }

  return {
    description,
    usageNote,
    features: product.usageAreas?.filter(Boolean) ?? [],
    tags: product.tags?.filter(Boolean) ?? [],
  }
}

export function hasExpandableProductDetail(product: ProductItem): boolean {
  const parsed = parseProductDetailContent(product)

  if (parsed.usageNote) return true
  if (parsed.features.length > 0) return true
  if (parsed.description.length > 140) return true

  const full = product.description?.trim() ?? ''
  if (full && full !== parsed.description) return true

  return false
}
