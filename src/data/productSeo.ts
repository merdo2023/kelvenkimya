import type { ProductPage } from './productPages'

const englishNames: Record<string, string> = {
  'polyquest-k-serisi': 'Polyquest K Series',
  'monoetilen-glikol': 'Monoethylene Glycol',
  'monopropilen-glikol': 'Monopropylene Glycol',
  'katyonik-iyon-degisim-recinesi': 'Cation Exchange Resin',
}

export function getProductName(product: ProductPage, locale: string) {
  return locale === 'tr' ? product.name : englishNames[product.slug] ?? product.name
}

// Short summaries of the existing purpose text; page content remains unchanged.
const purposes: Record<string, [string, string]> = {
  'kelvenoks-ferlin-123': ['Demir/Çelik Kireç Temizliği', 'Iron & Steel Descaler'],
  'kelvenoks-ferlin-124': ['Bakır ve Kondenser Temizliği', 'Copper & Condenser Cleaning'],
  'kelvenoks-ferlin-128': ['Paslanmaz Kireç Temizliği', 'Stainless Steel Descaler'],
  'kelvenoks-ferlin-130': ['Alüminyum Temizliği', 'Aluminium Cleaning'],
  'kelvenoks-ferlin-101': ['Yağ ve Pas Sökücü', 'Oil & Rust Remover'],
  'kelvenoks-ferlin-150': ['Beton Zayıflatıcı', 'Concrete Weakening'],
  'alkalen-np-100': ['Nötralizasyon ve Pasivasyon', 'Neutralisation & Passivation'],
  'alkelen-np150': ['Yağ ve Gres Temizliği', 'Oil & Grease Cleaning'],
  'polyquestamin': ['Kazan Suyu Şartlandırma', 'Boiler Water Treatment'],
  'polyox-432': ['Kondens Korozyon Kontrolü', 'Condensate Corrosion Control'],
  'polyquest-k-serisi': ['Kazan Suyu Kimyasalları', 'Boiler Water Chemicals'],
  'carbohydrazide': ['Kazan Suyu Korozyon Kontrolü', 'Boiler Corrosion Control'],
  'org-211': ['Soğutma Suyu Kireç Kontrolü', 'Cooling Water Scale Control'],
  'org-311': ['Kireç ve Korozyon Kontrolü', 'Scale & Corrosion Control'],
  'org-400': ['Soğutma Suyu Antiskalantı', 'Cooling Water Antiscalant'],
  'org-411': ['Soğutma Kulesi Biyodispersantı', 'Cooling Tower Biodispersant'],
  'abacid-microbiosid': ['Soğutma Suyu Biyositi', 'Cooling Water Biocide'],
  'monoetilen-glikol': ['Soğutma Sistemi Antifrizi', 'Cooling System Antifreeze'],
  'monopropilen-glikol': ['Soğutma Sistemi Antifrizi', 'Cooling System Antifreeze'],
  'katyonik-iyon-degisim-recinesi': ['Su Yumuşatma', 'Water Softening'],
}

export function getProductSeoTitle(product: ProductPage, locale: string) {
  const content = locale === 'tr' ? product.tr : product.en
  const purpose = purposes[product.slug]?.[locale === 'tr' ? 0 : 1] ?? content.purpose
  return getProductName(product, locale) + ' – ' + purpose
}
