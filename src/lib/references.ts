import type { ReferenceItem } from '@/types/locale'

type LegacyReferencesBlock = {
  items?: ReferenceItem[]
  rowFirst?: string[]
  rowSecond?: string[]
}

function parseLegacyName(raw: string): ReferenceItem {
  const regionMatch = raw.match(/^(.+?)\s*\(([^)]+)\)\s*$/)
  if (regionMatch) {
    return {
      name: regionMatch[1].trim(),
      sector: regionMatch[2].trim(),
    }
  }
  return { name: raw.trim() }
}

/** Supports `items` objects or legacy `rowFirst` / `rowSecond` string arrays. */
export function normalizeReferences(block: LegacyReferencesBlock | undefined): ReferenceItem[] {
  if (!block) return []

  if (Array.isArray(block.items) && block.items.length > 0) {
    return block.items
      .filter((item) => item?.name?.trim() || item?.logoUrl?.trim())
      .map((item) => ({
        name: item.name?.trim() || '',
        logoUrl: item.logoUrl?.trim() || undefined,
        sector: item.sector?.trim() || undefined,
        featured: item.featured,
      }))
      .filter((item) => item.logoUrl)
  }

  const legacy = [...(block.rowFirst ?? []), ...(block.rowSecond ?? [])]
  return legacy.filter(Boolean).map(parseLegacyName)
}
