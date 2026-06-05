import { Award, Building2, Globe, Headphones, type LucideIcon } from 'lucide-react'

const statIcons: Record<string, LucideIcon> = {
  award: Award,
  building: Building2,
  globe: Globe,
  headphones: Headphones,
}

export function getStatIcon(icon: string): LucideIcon {
  return statIcons[icon] ?? Award
}
