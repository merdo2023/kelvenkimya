import {
  Award,
  Building2,
  Globe,
  Headphones,
  Flame,
  Wind,
  Sparkles,
  Microscope,
  Filter,
  Droplets,
  Beaker,
  Layers,
  type LucideIcon,
} from 'lucide-react'

export const statIcons: Record<string, LucideIcon> = {
  award: Award,
  building: Building2,
  globe: Globe,
  headphones: Headphones,
}

export const serviceIcons: Record<string, LucideIcon> = {
  boiler: Flame,
  cooling: Wind,
  cleaning: Sparkles,
  analysis: Microscope,
  filtration: Filter,
}

export const categoryIcons: Record<string, LucideIcon> = {
  kelvenoks: Beaker,
  boiler: Flame,
  cooling: Droplets,
  filtration: Layers,
}

export function getStatIcon(icon: string): LucideIcon {
  return statIcons[icon] ?? Award
}

export function getServiceIcon(id: string): LucideIcon {
  return serviceIcons[id] ?? Droplets
}

export function getCategoryIcon(id: string): LucideIcon {
  return categoryIcons[id] ?? Beaker
}
