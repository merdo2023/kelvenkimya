import type { ProjectItem } from '@/types/locale'

export const projectGroups = [
  { id: 'hrsg', tr: 'HRSG ve Atık Isı Kazanları', en: 'HRSG & Waste Heat Boilers', image: '/images/services/hrsg-plant.jpg', descriptionTr: 'Enerji ve kojenerasyon tesislerinde devreye alma öncesi ve bakım dönemi kimyasal temizlik uygulamaları.', descriptionEn: 'Pre-commissioning and maintenance chemical cleaning in power and cogeneration plants.' },
  { id: 'process', tr: 'Tank, Boru Hatları ve Proses Sistemleri', en: 'Tanks, Pipelines & Process Systems', image: '/images/services/ahal-chemical-cleaning.jpeg', descriptionTr: 'Tanklar, spool boruları ve tesis devrelerinde projeye özel saha uygulamaları.', descriptionEn: 'Project-specific field applications for tanks, spool piping and facility circuits.' },
  { id: 'boiler', tr: 'Buhar Kazanları', en: 'Steam Boilers', image: '/images/services/steam-boiler.jpg', descriptionTr: 'Üretim tesislerinde buhar kazanlarının su tarafına yönelik temizlik ve şartlandırma çalışmaları.', descriptionEn: 'Water-side cleaning and conditioning for steam boilers in industrial facilities.' },
  { id: 'cooling', tr: 'Soğutma Kuleleri ve Soğutma Devreleri', en: 'Cooling Towers & Cooling Circuits', image: '/images/services/water-conditioning.png', descriptionTr: 'Soğutma kuleleri ve tesis soğutma devrelerinde birikintilere yönelik temizlik uygulamaları.', descriptionEn: 'Deposit removal in cooling towers and industrial cooling circuits.' },
  { id: 'condenser', tr: 'Kondenser ve Eşanjörler', en: 'Condensers & Heat Exchangers', image: '/images/services/chemical-cleaning-products.png', descriptionTr: 'Evaporatif kondenserler ve chiller kondenser ünitelerinde kimyasal temizlik çalışmaları.', descriptionEn: 'Chemical cleaning of evaporative condensers and chiller condenser units.' },
  { id: 'water', tr: 'Su Hazırlama Sistemleri', en: 'Water Treatment Systems', image: '/images/services/water-treatment-unit.png', descriptionTr: 'Su hazırlama ünitelerinde aktif karbon dolumu ve reçine değişimi çalışmaları.', descriptionEn: 'Activated carbon loading and resin replacement in water treatment units.' },
  { id: 'thermal', tr: 'Isıtma ve Su Tesisatı Devreleri', en: 'Heating & Water Installation Circuits', image: '/images/services/flushing-pipe-interior.jpg', descriptionTr: 'Isı santrali ve su tesisatı devrelerinde endüstriyel kimyasal temizlik çalışmaları.', descriptionEn: 'Industrial chemical cleaning of heat plant and water installation circuits.' },
] as const

export const featuredProjectIds = ['mary-amonyak-sanayi-tesisi-1', 'aksa-enerji-uretim-a-s-5', 'mersin-soda-sanayi-a-s-4'] as const

const projectGroupIds: Record<string, string> = {
  'ss-agakoy-tarimsal-kalkinma-kooperatifi': 'condenser',
  'apikoglu-sogutma-kulesi-kondenser': 'condenser',
  'gtg-int-projesi-0': 'process',
  'mary-amonyak-sanayi-tesisi-1': 'hrsg',
  'mersin-soda-sanayi-a-s-2': 'hrsg',
  'nuh-enerji-elektrik-uretim-a-s-3': 'hrsg',
  'mersin-soda-sanayi-a-s-4': 'hrsg',
  'aksa-enerji-uretim-a-s-5': 'hrsg',
  'bis-enerji-elektrik-uretim-a-s-6': 'hrsg',
  'camis-elektrik-uretim': 'hrsg',
  'otosan-otomobil-sanayii': 'boiler',
  'goodyear-lastikleri': 'boiler',
  'camis-ambalaj-sisecam': 'boiler',
  'trakya-yag-sanayii': 'boiler',
  'lassa-lastik': 'boiler',
  'gungor-ciftligi': 'boiler',
  'petlas-lastik': 'cooling',
  'beypilic': 'cooling',
  'erpilic-bolu-kesimhanesi': 'cooling',
  'ramada-istanbul-city': 'condenser',
  'tup-merserize': 'water',
  'komando-tugay-komutanligi': 'thermal',
}

export function getProjectGroup(project: ProjectItem) {
  return projectGroupIds[project.id] ?? 'process'
}

export function getProjectImage(project: ProjectItem) {
  return project.thumbnailUrl || ({
    'aksa-enerji-uretim-a-s-5': '/images/projects/aksa/hrsg-internal-surface.jpeg',
    'gtg-int-projesi-0': '/images/projects/ahal/circulation-pumps.jpg',
    'mary-amonyak-sanayi-tesisi-1': '/images/projects/mary.jpeg',
    'mersin-soda-sanayi-a-s-4': '/images/projects/mersin-soda/facility-overview-2009.jpg',
  } as Record<string, string>)[project.id]
}

export function sortProjects(projects: ProjectItem[]) {
  const priority: readonly string[] = featuredProjectIds
  const rank = (project: ProjectItem) => {
    const index = priority.indexOf(project.id)
    return index === -1 ? priority.length : index
  }
  return [...projects].sort((a, b) => rank(a) - rank(b))
}