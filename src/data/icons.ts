import { Award, Beaker, Building2, FlaskConical, Globe, Headphones, Microscope, Settings, SprayCan, type LucideIcon } from 'lucide-react'

const statIcons: Record<string, LucideIcon> = {
  award: Award,
  building: Building2,
  globe: Globe,
  headphones: Headphones,
}

const serviceIcons: Record<string, LucideIcon> = {
  'endustriyel-kimyasal-temizlik': SprayCan,
  'su-yumusatma-uniteleri-revizyonu': Settings,
  'su-sartlandirma-kimyasallari': FlaskConical,
  'kimyasal-temizlik-kimyasallari': Beaker,
  'laboratuvar-analiz-hizmetleri': Microscope,
}

export function getStatIcon(icon: string): LucideIcon {
  return statIcons[icon] ?? Award
}

export function getServiceIcon(serviceId: string): LucideIcon {
  return serviceIcons[serviceId] ?? FlaskConical
}
