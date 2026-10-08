export const conditioningBasePath = '/hizmetlerimiz/su-sartlandirma-kimyasallari'

type Content = { title: string; summary: string; description: string; goals: [string, string][]; inputs: string[] }
export type ConditioningService = { slug: string; categoryId: string; image: string; productNames?: string[]; tr: Content; en: Content }

export const conditioningServices: ConditioningService[] = [
  {
    slug: 'kazan-suyu-sartlandirma-kimyasallari', categoryId: 'kazan_suyu_kimyasallari', image: '/images/services/steam-boiler.jpg',
    tr: {
      title: 'Kazan Suyu Şartlandırma Kimyasalları',
      summary: 'Buhar kazanları, besi suyu ve kondens devreleri için su analizlerine ve işletme koşullarına uygun kimyasal ürün seçimi ve teknik destek.',
      description: 'Buhar kazanı sistemlerinde su kalitesi, işletme koşulları ve ekipman yapısına uygun kazan suyu şartlandırma kimyasalları sunuyoruz. Kireç ve birikinti oluşumunun kontrolü ile korozyona karşı koruma için tesisin ihtiyaçlarını değerlendiriyor; ürün seçimi, dozaj takibi ve su analizleriyle şartlandırma programını destekliyoruz. Kazan, besi suyu ve kondens devrelerinin ihtiyaçlarını birlikte ele alıyoruz. Her ay su analizleri yapıyor, sonuçları değerlendirerek işletmenizle paylaşıyoruz. Analiz bulgularına göre kimyasal program ve dozaj takibine teknik destek sağlıyoruz.',
      goals: [['Kireç ve birikinti kontrolü', 'Suyun özelliklerine ve kazan koşullarına uygun kimyasal programla birikinti oluşumunun kontrolü hedeflenir.'], ['Korozyona karşı koruma', 'Kazan, besi suyu ve kondens devrelerinde korozyon kontrolüne yönelik ürün seçimi yapılır.'], ['Oksijen tutucu ürünler', 'Sistemin ihtiyacına göre çözünmüş oksijen kontrolüne yönelik ürünler değerlendirilir.'], ['Aylık analiz ve sonuç paylaşımı', 'Her ay su analizleri yapıyor, sonuçları işletmenizle paylaşıyor ve bulgulara göre kimyasal program ile dozaj takibini destekliyoruz.']],
      inputs: ['Kazan tipi ve işletme basıncı', 'Besi suyu, kazan suyu ve kondens analizleri', 'Mevcut kimyasal program ve dozaj bilgileri', 'Su tüketimi ve işletme koşulları'],
    },
    en: {
      title: 'Boiler Water Treatment Chemicals', summary: 'Chemical selection and technical support for steam boilers, feedwater and condensate circuits based on water analyses and operating conditions.',
      description: 'We supply boiler water treatment chemicals suited to water quality, operating conditions and equipment materials. We assess facility requirements for deposit and corrosion control and support the treatment program through product selection, dosing follow-up and water analyses. We consider boiler, feedwater and condensate circuit requirements together. We carry out monthly water analyses, evaluate the results and share them with your facility. We provide technical support for the chemical program and dosing follow-up based on the findings.',
      goals: [['Scale and deposit control', 'Select a treatment program suited to water quality and boiler conditions to help control deposit formation.'], ['Corrosion protection', 'Select products for corrosion control in boiler, feedwater and condensate circuits.'], ['Oxygen scavengers', 'Assess products for dissolved oxygen control according to system requirements.'], ['Monthly analyses and results sharing', 'We carry out monthly water analyses, share the results with your facility and support the chemical program and dosing follow-up based on the findings.']],
      inputs: ['Boiler type and operating pressure', 'Feedwater, boiler water and condensate analyses', 'Existing chemical program and dosing information', 'Water consumption and operating conditions'],
    },
  },
  {
    slug: 'sogutma-kulesi-suyu-sartlandirma-kimyasallari', categoryId: 'sogutma_suyu_kimyasallari', image: '/images/services/water-conditioning.png',
    productNames: ['ORG211', 'ORG311', 'ORG400', 'ORG411', 'ABACIDE'],
    tr: {
      title: 'Soğutma Kulesi Suyu Şartlandırma Kimyasalları', summary: 'Soğutma kulelerinde kireç, korozyon ve biyolojik oluşumların kontrolü için su analizlerine uygun kimyasal ürün seçimi ve teknik destek.',
      description: 'Soğutma kulelerinde su kalitesi ve işletme koşullarına uygun soğutma suyu şartlandırma programları için kimyasal ürünler sunuyoruz. Kireçlenme, korozyon ve biyolojik oluşumların kontrolüne yönelik ürün seçimini destekliyor; sistemin malzeme yapısı, mevcut su analizleri ve kullanım koşullarını birlikte değerlendiriyoruz. Ürün tedariki, dozaj takibi ve analiz desteğiyle tesisinizin şartlandırma ihtiyaçlarına uygun çalışıyoruz. Her ay soğutma suyu analizleri yapıyor, sonuçları değerlendirerek işletmenizle paylaşıyoruz. Analiz bulgularına göre kimyasal program ve dozaj takibine teknik destek sağlıyoruz.',
      goals: [['Kireç ve çökelti kontrolü', 'Su analizleri ve işletme koşullarına uygun kireç önleyici ve dispersant ürünler değerlendirilir.'], ['Korozyon kontrolü', 'Sistem malzemesi ve su özelliklerine göre korozyon kontrolüne yönelik kimyasal program desteklenir.'], ['Biyolojik oluşumların kontrolü', 'Tesisin ihtiyacına uygun biyosit ve biyodispersant ürünler değerlendirilir.'], ['Aylık analiz ve sonuç paylaşımı', 'Her ay soğutma suyu analizleri yapıyor, sonuçları işletmenizle paylaşıyor ve bulgulara göre kimyasal program ile dozaj takibini destekliyoruz.']],
      inputs: ['Soğutma kulesi tipi ve devre hacmi', 'Besleme suyu ve dolaşım suyu analizleri', 'Mevcut kimyasallar ve dozaj bilgileri', 'Sistem malzemeleri ve işletme koşulları'],
    },
    en: {
      title: 'Cooling Tower Water Treatment Chemicals', summary: 'Chemical selection and technical support based on water analyses for scale, corrosion and biological growth control in cooling towers.',
      description: 'We supply chemicals for cooling tower water treatment programs suited to water quality and operating conditions. We support product selection for scale, corrosion and biological growth control, considering system materials, available water analyses and use conditions together. Product supply, dosing follow-up and analysis support are tailored to facility needs. We carry out monthly cooling water analyses, evaluate the results and share them with your facility. We provide technical support for the chemical program and dosing follow-up based on the findings.',
      goals: [['Scale and deposition control', 'Assess scale inhibitors and dispersants suited to water analyses and operating conditions.'], ['Corrosion control', 'Support a chemical program based on system materials and water properties.'], ['Biological growth control', 'Assess biocide and biodispersant products according to facility requirements.'], ['Monthly analyses and results sharing', 'We carry out monthly cooling water analyses, share the results with your facility and support the chemical program and dosing follow-up based on the findings.']],
      inputs: ['Cooling tower type and circuit volume', 'Make-up and circulating water analyses', 'Existing chemicals and dosing information', 'System materials and operating conditions'],
    },
  },
]

export function conditioningContent(service: ConditioningService, locale: string) { return locale === 'tr' ? service.tr : service.en }
