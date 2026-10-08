import type { AppLocale } from '@/i18n/routing'

export const cleaningBasePath = '/hizmetlerimiz/endustriyel-kimyasal-temizlik'

type ServiceContent = {
  title: string
  summary: string
  description: string
  applications: string[]
  scope: string[]
  preparation: string[]
  reference: string
}

export type CleaningService = {
  slug: string
  image: string
  tr: ServiceContent
  en: ServiceContent
}

export const cleaningServices: CleaningService[] = [
  {
    slug: 'on-temizlik-flushing', image: '/images/services/flushing-pipe-interior.jpg',
    tr: {
      title: 'Flushing ve Kimyasal Ön Temizlik',
      summary: 'Devreye alma öncesi boru hatları ve proses sistemlerinde su ile flushing ve ihtiyaca uygun kimyasal ön temizlik hizmetleri.',
      description: 'Yeni kurulan boru hatları ve proses sistemlerinde imalat, montaj ve depolama kaynaklı kalıntıların giderilmesi için devreye alma öncesi temizlik hizmetleri sunuyoruz. Su ile flushing (hat yıkama), sistem içindeki gevşek parçacıkların ve kalıntıların akışla uzaklaştırılmasına yöneliktir. Yağ, pas ve oksit gibi kirlenmeler için ihtiyaç duyulduğunda, malzeme yapısına uygun kimyasal ön temizlik aşamaları planlıyoruz. Bu işlemleri devre sınırları, kirlenme türü ve proje kabul kriterlerine göre birlikte veya ayrı uyguluyor; kendi ekipmanlarımız ve sirkülasyon pompalarımızla onaylı prosedür doğrultusunda çalışıyoruz.',
      applications: ['Proses boru hatları', 'Devreye alma öncesi sistemler', 'Tank bağlantı devreleri', 'Enerji ve endüstriyel tesisler'],
      scope: ['P&ID, devre sınırları ve malzeme bilgilerinin değerlendirilmesi.', 'Devre hacmi ve debi ihtiyacına uygun pompa, geçici bağlantı ve ekipman planlaması.', 'Onaylı prosedüre göre su ile flushing ve gerekli kimyasal ön temizlik aşamaları.', 'Uygulama takibi, durulama ve proje kabul kriterlerine göre son kontroller.'],
      preparation: ['P&ID ve hat malzemeleri', 'Devre hacmi ve bağlantı bilgileri', 'Saha suyu ve geçici bağlantı imkanları', 'Kabul kriterleri ve devreye alma takvimi'],
      reference: 'Boru hattı ve proses sistemi uygulamalarımızın kapsamını proje kayıtlarımızda inceleyebilirsiniz. Ahal projesinde paslanmaz spool boruları ve belirlenen proses sistemlerinde kimyasal temizlik çalışmaları gerçekleştirilmiştir.',
    },
    en: {
      title: 'Flushing & Chemical Pre-cleaning',
      summary: 'Pre-commissioning water flushing and chemical pre-cleaning tailored to piping and process-system requirements.',
      description: 'We provide pre-commissioning cleaning for newly installed piping and process systems to remove residues associated with fabrication, installation and storage. Water flushing uses flow to carry loose particles and residues out of the system. Where required, material-compatible chemical pre-cleaning stages address contamination such as oil, rust and oxides. These operations are performed together or separately according to circuit boundaries, contamination and project acceptance criteria, using our own equipment and circulation pumps under the approved procedure.',
      applications: ['Process piping', 'Pre-commissioning systems', 'Tank connection circuits', 'Energy and industrial facilities'],
      scope: ['Review P&IDs, circuit boundaries and materials.', 'Plan pumps, temporary connections and equipment for volume and flow requirements.', 'Perform water flushing and required chemical pre-cleaning under the approved procedure.', 'Monitor execution, rinse and check against project acceptance criteria.'],
      preparation: ['P&IDs and piping materials', 'Circuit volumes and connections', 'Site water and temporary connection availability', 'Acceptance criteria and commissioning schedule'],
      reference: 'Explore our project records for piping and process-system applications. Chemical cleaning was performed on stainless spool piping and designated process systems at the Ahal project.',
    },
  },
  {
    slug: 'hrsg-kimyasal-temizligi', image: '/images/services/hrsg-plant.jpg',
    tr: {
      title: 'HRSG Kimyasal Temizliği',
      summary: 'Atık ısı kazanlarında devreye alma öncesi ve bakım dönemi temizliği. Sistem malzemesi, birikinti ve üretici prosedürüne uygun, projeye özel saha uygulamaları.',
      description: 'HRSG sistemlerinde devreye alma öncesi imalat ve montaj kalıntıları, işletme döneminde ise birikinti ve oksit tabakaları farklı temizlik ihtiyaçları oluşturur. Kelven Kimya olarak temizlik sınırlarını, sistem metalurjisini ve müşteri/EPC/OEM prosedürlerini değerlendirerek projeye özel saha uygulaması planlıyoruz.',
      applications: ['Kombine çevrim santralleri', 'Atık ısı kazanları', 'Devreye alma öncesi temizlik', 'Bakım dönemi uygulamaları'],
      scope: ['P&ID üzerinden temizlenecek devrelerin ve geçici bağlantıların belirlenmesi.', 'Prosedür gerektirdiğinde alkali yıkama, kimyasal sirkülasyon ve flushing aşamalarının uygulanması.', 'Uygulama parametrelerinin saha kontrolleri ve kimyasal analizlerle takibi.', 'Onaylı prosedüre uygun durulama, nötralizasyon ve pasivasyon işlemleri.'],
      preparation: ['HRSG üreticisi, ünite ve devre bilgileri', 'P&ID ve ekipman malzeme bilgileri', 'Devre hacmi ve bağlantı noktaları', 'Devreye alma veya bakım takvimi', 'Varsa birikinti analizleri ve önceki temizlik kayıtları', 'Üretici temizlik prosedürü ve proje kabul kriterleri'],
      reference: 'Proje kayıtlarımızda Aksa Enerji Antalya santralinin 5 ve 6 numaralı ünitelerindeki HRSG kimyasal temizliği ile Mersin Soda, Nuh Enerji ve BİS Enerji çalışmalarımız yer alıyor.',
    },
    en: {
      title: 'HRSG Chemical Cleaning', summary: 'Pre-commissioning and maintenance chemical cleaning of heat recovery steam generators at power plants.',
      description: 'Manufacturing and construction residues before commissioning and deposits during operation require different cleaning approaches. We assess cleaning boundaries, system metallurgy and customer, EPC or OEM procedures to plan project-specific field work.',
      applications: ['Combined cycle plants', 'Heat recovery steam generators', 'Pre-commissioning', 'Maintenance cleaning'],
      scope: ['Identify cleaning circuits and temporary connections using P&IDs.', 'Carry out alkaline washing, chemical circulation and flushing where required by the procedure.', 'Track application parameters through field checks and chemical analysis.', 'Perform rinsing, neutralization and passivation according to the approved procedure.'],
      preparation: ['HRSG manufacturer, unit and circuit details', 'P&IDs and equipment materials', 'Circuit volume and connection points', 'Commissioning or maintenance schedule', 'Available deposit analyses and previous cleaning records', 'Manufacturer cleaning procedure and project acceptance criteria'],
      reference: 'Our project records include HRSG cleaning in units 5 and 6 at Aksa Energy Antalya and work at Mersin Soda, Nuh Energy and BİS Energy.',
    },
  },
  {
    slug: 'buhar-kazani-kimyasal-temizligi', image: '/images/services/steam-boiler.jpg',
    tr: {
      title: 'Buhar Kazanı Kimyasal Temizliği', summary: 'Buhar ve atık ısı kazanlarının su tarafındaki kireç, mineral birikintisi ve oksit tabakalarına yönelik temizlik.',
      description: 'Kazanların ısı transfer yüzeylerinde oluşan birikintiler için kazan tipi, malzeme yapısı ve işletme geçmişi birlikte değerlendirilmelidir. Su borulu ve skoç tipi buhar kazanlarında, sistemin ihtiyaçlarına uygun kimyasal ürün ve sirkülasyon planıyla temizlik hizmeti sunuyoruz.',
      applications: ['Su borulu kazanlar', 'Skoç tipi kazanlar', 'Atık ısı kazanları', 'Endüstriyel buhar sistemleri'],
      scope: ['Kazan yapısı ve birikinti türüne göre temizlik yönteminin seçimi.', 'Geçici bağlantıların ve sirkülasyon ekipmanlarının hazırlanması.', 'Prosedüre uygun kimyasal temizlik ve uygulama koşullarının takibi.', 'Temizlik sonrası durulama, gerekli nötralizasyon ve pasivasyon.'],
      preparation: ['Kazan tipi ve üretici bilgileri', 'Malzeme, hacim ve bakım geçmişi', 'Birikinti örneği veya mevcut analizler', 'Planlanan duruş süresi'],
      reference: 'Proje kayıtlarımızda Otosan tesisindeki 6 buhar kazanı, Goodyear ve Lassa su borulu kazanları ile Mary tesisinin buhar ve atık ısı kazanları bulunuyor.',
    },
    en: {
      title: 'Steam Boiler Chemical Cleaning', summary: 'Cleaning scale, mineral deposits and oxide layers on the water side of steam and waste heat boilers.',
      description: 'Boiler type, materials and operating history are assessed together when selecting a method for removing deposits. We provide chemical cleaning for water-tube and shell-type steam boilers using products and circulation arrangements suited to the system.',
      applications: ['Water-tube boilers', 'Shell-type boilers', 'Waste heat boilers', 'Industrial steam systems'],
      scope: ['Select a method according to boiler construction and deposit type.', 'Prepare temporary connections and circulation equipment.', 'Carry out chemical cleaning and monitor conditions according to the procedure.', 'Rinse and perform required neutralization and passivation after cleaning.'],
      preparation: ['Boiler type and manufacturer', 'Materials, volume and maintenance history', 'Deposit sample or available analyses', 'Planned shutdown duration'],
      reference: 'Our records include six steam boilers at Otosan, water-tube boilers at Goodyear and Lassa, and steam and waste heat boilers at the Mary facility.',
    },
  },
  {
    slug: 'sogutma-kulesi-kimyasal-temizligi', image: '/images/services/water-conditioning.png',
    tr: {
      title: 'Soğutma Kulesi Kimyasal Temizliği', summary: 'Soğutma kuleleri ve bağlı devrelerde ekipman yapısına uygun kireç ve birikinti temizliği.',
      description: 'Soğutma kulesi temizliğinde açık devre, kapalı devre veya evaporatif ekipman yapısı dikkate alınır. Temizlenecek yüzeyleri ve devre sınırlarını belirleyerek metal, kaplama ve diğer malzemelerle uyumlu bir uygulama planlıyoruz. Kimyasal temizlik ile işletme sırasında kullanılan su şartlandırma programını ayrı ihtiyaçlar olarak değerlendiriyoruz.',
      applications: ['Soğutma kuleleri', 'Evaporatif kondenserler', 'Bağlı soğutma devreleri', 'Fabrika yardımcı işletmeleri'],
      scope: ['Kule tipi, malzeme yapısı ve birikintilerin değerlendirilmesi.', 'Temizlik kapsamındaki ekipman ve devrelerin belirlenmesi.', 'Malzemeye uygun kimyasal ürünle kontrollü uygulama.', 'Durulama ve uygulama sonrası kontroller; ihtiyaç halinde ayrı su şartlandırma desteği.'],
      preparation: ['Kule tipi ve ekipman modeli', 'Temizlenecek yüzeylerin malzeme bilgisi', 'Fotoğraflar ve soğutma suyu analizleri', 'Devre hacmi ve duruş koşulları'],
      reference: 'Beypiliç ve Erpiliç soğutma kuleleri ile Apikoğlu kondenser temizliği, ilgili saha çalışmalarımıza örneklerdir.',
    },
    en: {
      title: 'Cooling Tower Chemical Cleaning', summary: 'Scale and deposit removal in cooling towers and associated circuits, selected for equipment construction.',
      description: 'Cleaning is planned according to open-circuit, closed-circuit or evaporative equipment construction. We define surfaces and circuit boundaries and select an approach compatible with metals, coatings and other materials. Cleaning and ongoing water treatment are assessed as separate requirements.',
      applications: ['Cooling towers', 'Evaporative condensers', 'Associated cooling circuits', 'Factory utilities'],
      scope: ['Assess tower type, materials and deposits.', 'Define equipment and circuits within the cleaning scope.', 'Apply material-compatible chemicals under controlled conditions.', 'Rinse and inspect after cleaning; provide separate water treatment support where needed.'],
      preparation: ['Tower type and model', 'Materials of surfaces to be cleaned', 'Photographs and cooling water analyses', 'Circuit volume and shutdown conditions'],
      reference: 'Relevant examples include cooling towers at Beypiliç and Erpiliç and condenser cleaning at Apikoğlu.',
    },
  },
  {
    slug: 'esanjor-kondenser-kimyasal-temizligi', image: '/images/services/chemical-cleaning-products.png',
    tr: {
      title: 'Eşanjör ve Kondenser Kimyasal Temizliği', summary: 'Plakalı ve borulu eşanjörler, kondenserler ve chiller ekipmanlarında birikintilere yönelik temizlik.',
      description: 'Isı transfer ekipmanlarında temizlik yöntemi yalnızca birikintiye değil; plaka veya boru malzemesine, conta ve bağlantı yapısına da bağlıdır. Eşanjör ve kondenserlerde uygun devre sınırları ve sirkülasyon bağlantıları üzerinden kimyasal temizlik planlıyor, üretici gerekliliklerini dikkate alıyoruz.',
      applications: ['Plakalı eşanjörler', 'Borulu eşanjörler', 'Kondenserler', 'Chiller üniteleri'],
      scope: ['Ekipman ve birikinti özelliklerine göre ürün seçimi.', 'Malzeme ve conta uyumunun, üretici koşullarıyla birlikte değerlendirilmesi.', 'Uygun devrede kontrollü kimyasal sirkülasyon ve süreç takibi.', 'Temizlik sonrası durulama ve proje kapsamına uygun kontroller.'],
      preparation: ['Eşanjör/kondenser tipi ve modeli', 'Plaka veya boru ve conta malzemeleri', 'Birikinti fotoğrafları ve işletme bilgileri', 'Mevcut bağlantılar ve planlanan bakım süresi'],
      reference: 'S.S. Ağaköy evaporatif kondenseri, Apikoğlu kondenseri ve Ramada İstanbul City chiller kondenserleri proje kayıtlarımızda yer alıyor.',
    },
    en: {
      title: 'Heat Exchanger & Condenser Chemical Cleaning', summary: 'Deposit removal in plate and tubular heat exchangers, condensers and chiller equipment.',
      description: 'Cleaning methods depend on plate or tube materials, gasket construction and connection arrangements as well as deposit types. We plan cleaning through suitable circuit boundaries and circulation connections while considering manufacturer requirements.',
      applications: ['Plate heat exchangers', 'Tubular heat exchangers', 'Condensers', 'Chiller units'],
      scope: ['Select products for equipment and deposit characteristics.', 'Assess material and gasket compatibility alongside manufacturer conditions.', 'Perform controlled chemical circulation and process monitoring.', 'Rinse and perform checks defined by the project scope.'],
      preparation: ['Equipment type and model', 'Plate/tube and gasket materials', 'Deposit photographs and operating information', 'Available connections and maintenance window'],
      reference: 'Our records include the S.S. Ağaköy evaporative condenser, the Apikoğlu condenser and chiller condensers at Ramada Istanbul City.',
    },
  },
  {
    slug: 'tank-boru-hatti-kimyasal-temizligi', image: '/images/services/ahal-chemical-cleaning.jpeg',
    tr: {
      title: 'Tank ve Boru Hattı Kimyasal Temizliği', summary: 'Proses boru hatları, spool grupları ve tanklarda ön temizlik, flushing ve kimyasal temizlik uygulamaları.',
      description: 'Devreye alma öncesi tank ve boru hattı temizliğinde imalat, montaj ve depolama kaynaklı kalıntılar; bakım çalışmalarında ise işletme birikintileri değerlendirilir. Karbon çelik ve paslanmaz sistemlerde temizlenecek devreyi, malzeme uyumunu ve kabul koşullarını projeye özel belirliyoruz. Flushing ile kimyasal temizlik aşamalarını ihtiyaca göre birlikte veya ayrı planlıyoruz.',
      applications: ['Proses boru hatları', 'Paslanmaz spool grupları', 'Depolama tankları', 'Devreye alma öncesi flushing'],
      scope: ['P&ID, malzeme listesi ve devre sınırlarının incelenmesi.', 'Devre hacmi, debi ihtiyacı ve basınç kayıplarına uygun ekipman planı.', 'Onaylı prosedüre göre flushing, alkali veya asidik temizlik aşamaları.', 'Durulama ve gerekli pasivasyon; proje kabul koşullarına göre son kontroller.'],
      preparation: ['P&ID ve devre sınırları', 'Tank/hat hacmi, çap ve malzeme bilgileri', 'Geçici bağlantı ve saha imkanları', 'Prosedür, kabul kriterleri ve takvim'],
      reference: 'Ahal GTG-INT projesindeki paslanmaz spool boruları, depolama tankları ve belirlenen proses sistemlerinde asidik ve alkali temizlik çalışmaları gerçekleştirilmiştir.',
    },
    en: {
      title: 'Tank & Pipeline Chemical Cleaning', summary: 'Pre-cleaning, flushing and chemical cleaning of process piping, spool groups and tanks.',
      description: 'Construction and storage residues before commissioning and operational deposits during maintenance require different approaches. We define circuit boundaries, material compatibility and acceptance conditions for carbon steel and stainless systems. Flushing and chemical cleaning stages are planned together or separately as required.',
      applications: ['Process piping', 'Stainless spool groups', 'Storage tanks', 'Pre-commissioning flushing'],
      scope: ['Review P&IDs, material lists and circuit boundaries.', 'Plan equipment for circuit volume, flow requirements and pressure losses.', 'Perform flushing, alkaline or acidic cleaning according to the approved procedure.', 'Rinse, apply required passivation and check against project acceptance criteria.'],
      preparation: ['P&IDs and circuit boundaries', 'Volume, diameter and material information', 'Temporary connections and site utilities', 'Procedure, acceptance criteria and schedule'],
      reference: 'Acidic and alkaline cleaning was carried out on stainless spool piping, storage tanks and designated process systems at the Ahal GTG-INT project.',
    },
  },
]

export function cleaningContent(service: CleaningService, locale: string) {
  return service[locale === 'en' ? 'en' : 'tr']
}

export function cleaningMenu(locale: AppLocale) {
  return cleaningServices.map(service => ({ href: `${cleaningBasePath}/${service.slug}`, label: cleaningContent(service, locale).title }))
}
