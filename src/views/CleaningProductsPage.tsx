import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { ContactCTA } from '@/components/home/ContactCTA'
import { Link } from '@/i18n/navigation'
import { getProductCategories } from '@/data/localeCatalog'
import type { AppLocale } from '@/i18n/routing'
import { routes } from '@/data/routes'
import { cleaningBasePath } from '@/data/cleaningServices'
import { getLocalePath } from '@/i18n/routing'
import { siteUrl } from '@/lib/site'

export const cleaningProductsPath = '/hizmetlerimiz/endustriyel-kimyasal-temizlik-urunleri'

export async function CleaningProductsPage({ locale }: { locale: string }) {
  const tr = locale === 'tr'
  const categories = await getProductCategories(locale as AppLocale)
  const products = categories.find(category => category.id === 'kimyasal_temizlik_urunleri')?.products ?? []
  const cleaningProducts = products.filter(product => /Ferlin (123|124|128|130)$/.test(product.name) || product.name === 'Alkalen NP-100')
  const productApplications: Record<string, string> = tr ? {
    'NP-100': 'Asidik temizlik yapılan kazan, eşanjör, kondenser, tank ve boru devrelerinde; malzemeye ve onaylı prosedüre uygun temizlik sonrası nötralizasyon ve pasivasyon işlemleri.',
    '123': 'Demir, çelik ve döküm malzeme içeren buhar kazanları, tanklar ve boru hatlarının kireç ve mineral birikintisi temizliğinde değerlendirilir.',
    '124': 'Bakır ve bakır alaşımlı boru veya yüzeyler içeren kondenser ve eşanjörlerin kireç ve mineral birikintisi temizliğinde kullanılır.',
    '128': 'Paslanmaz malzemeden üretilmiş eşanjörler, tanklar ve proses boru hatlarının kireç ve mineral birikintisi temizliğinde değerlendirilir.',
    '130': 'Alüminyum ve alüminyum alaşımlı yüzey veya parçalar içeren ekipmanların kireç ve mineral birikintisi temizliğinde değerlendirilir.',
  } : {
    'NP-100': 'Post-cleaning neutralisation and passivation in acid-cleaned boilers, heat exchangers, condensers, tanks and pipe circuits, according to materials and the approved procedure.',
    '123': 'Assessed for scale and mineral deposit removal in steam boilers, tanks and pipelines containing iron, steel or cast iron.',
    '124': 'Used for scale and mineral deposit removal in condensers and heat exchangers containing copper or copper alloy tubes or surfaces.',
    '128': 'Assessed for scale and mineral deposit removal in stainless steel heat exchangers, tanks and process pipelines.',
    '130': 'Assessed for scale and mineral deposit removal in equipment containing aluminium or aluminium alloy surfaces or components.',
  }
  const title = tr ? 'Endüstriyel Kimyasal Temizlik Ürünleri' : 'Industrial Chemical Cleaning Products'
  const applications = tr ? ['Buhar kazanları', 'Eşanjör ve kondenserler', 'Soğutma sistemi ekipmanları', 'Tank ve boru hatları'] : ['Steam boilers', 'Heat exchangers and condensers', 'Cooling system equipment', 'Tanks and pipelines']
  const selection = tr ? ['Ekipmanın malzemesi ve sistemdeki farklı metal türleri', 'Kireç, mineral birikintisi ve mevcut yüzey durumu', 'Devre hacmi, bağlantılar ve uygulama yöntemi', 'Üretici gereklilikleri ve planlanan bakım süresi'] : ['Equipment materials and different metals in the system', 'Scale, mineral deposits and existing surface condition', 'Circuit volume, connections and application method', 'Manufacturer requirements and planned maintenance period']
  const questions = tr ? [
    ['Kelvenoks Ferlin ürünleri ne için kullanılır?', 'Ferlin 123, 124, 128 ve 130; endüstriyel sistemlerde kireç ve mineral birikintilerinin kimyasal temizliğine yönelik ürünlerdir. Ürün seçimi ekipman malzemesine ve birikinti özelliklerine göre yapılır.'],
    ['Hangi Ferlin ürününü seçmeliyim?', 'Ferlin 123 demir, çelik ve döküm; Ferlin 124 bakır ve bakır alaşımları; Ferlin 128 paslanmaz; Ferlin 130 alüminyum ve alüminyum alaşımlı sistemler için değerlendirilir. Birden fazla metal içeren devrelerde tüm malzemeler birlikte incelenmelidir.'],
    ['Kimyasal ürün tedariki ile saha temizliği aynı hizmet mi?', 'Ürün tedarikinde, temizliği kendi ekibiyle yapan işletmelere ve yüklenicilere kimyasal seçim desteği sunuyoruz. Kelven Kimya ekibiyle saha uygulaması isteyen tesisler için ayrıca endüstriyel kimyasal temizlik hizmetimiz bulunuyor.'],
    ['Kullanım miktarı ve uygulama süresi nasıl belirlenir?', 'Sistem hacmi, birikinti yapısı, malzeme özellikleri ve uygulama prosedürü birlikte değerlendirilir. Kullanım koşulları her uygulama için teknik değerlendirme sonucunda belirlenir.'],
  ] : [
    ['What are Kelvenoks Ferlin products used for?', 'Ferlin 123, 124, 128 and 130 are chemicals for scale and mineral deposit removal in industrial systems. Selection depends on equipment materials and deposit characteristics.'],
    ['Which Ferlin product should I select?', 'Ferlin 123 is assessed for iron, steel and cast iron; Ferlin 124 for copper and copper alloys; Ferlin 128 for stainless steel; and Ferlin 130 for aluminium and aluminium alloys. All materials in mixed-metal circuits should be reviewed together.'],
    ['Are chemical supply and field cleaning the same service?', 'For product supply, we help facilities and contractors select chemicals for cleaning by their own teams. Facilities requiring on-site work by Kelven Kimya can use our separate industrial chemical cleaning service.'],
    ['How are quantity and application time determined?', 'System volume, deposits, material properties and the application procedure are reviewed together. Use conditions are determined through a technical assessment for each application.'],
  ]
  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: tr ? 'Ana Sayfa' : 'Home', item: `${siteUrl}${getLocalePath(locale, routes.home)}` },
    { '@type': 'ListItem', position: 2, name: tr ? 'Hizmetlerimiz' : 'Our Services', item: `${siteUrl}${getLocalePath(locale, routes.services)}` },
    { '@type': 'ListItem', position: 3, name: title, item: `${siteUrl}${getLocalePath(locale, cleaningProductsPath)}` },
  ] }
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, '\\u003c') }} />
    <section className="relative overflow-hidden bg-navy pb-12 pt-28 sm:pt-32">
      <Container>
        <nav aria-label={tr ? 'Sayfa yolu' : 'Breadcrumb'} className="mb-8 flex flex-wrap gap-2 text-xs text-white/70"><Link href={routes.home}>{tr ? 'Ana Sayfa' : 'Home'}</Link><span>/</span><Link href={routes.services}>{tr ? 'Hizmetlerimiz' : 'Our Services'}</Link><span>/</span><span className="text-white">{title}</span></nav>
        <div className="max-w-4xl">
          <div><p className="text-xs font-bold uppercase tracking-widest text-cyan">{tr ? 'Kelvenoks Ferlin Serisi' : 'Kelvenoks Ferlin Series'}</p><h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h1><p className="mt-5 max-w-xl leading-relaxed text-white/75">{tr ? 'Kireç ve mineral birikintilerinin temizliğinde, ekipman malzemesine uygun kimyasal seçimi. Kelvenoks Ferlin serisiyle ürün tedariki ve uygulamanıza yönelik teknik destek sunuyoruz.' : 'Material-specific chemical selection for scale and mineral deposit removal. We supply Kelvenoks Ferlin products with technical support for your application.'}</p><div className="mt-7 flex flex-wrap gap-3"><a href="#ferlin-serisi" className="inline-flex items-center gap-2 rounded-xl gradient-accent px-5 py-3 font-semibold text-white">{tr ? 'Ferlin Serisini İnceleyin' : 'Explore the Ferlin Series'}<ArrowRight className="h-4 w-4" /></a><Link href={routes.contact} className="rounded-xl border border-white/25 px-5 py-3 font-semibold text-white">{tr ? 'Teknik Destek Alın' : 'Get Technical Support'}</Link></div></div>
        </div>
      </Container>
    </section>
    <section id="ferlin-serisi" className="scroll-mt-28 bg-[#eef5f8] py-12 sm:py-16"><Container>
      <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-widest text-cyan">{tr ? 'Malzemeye Göre Ürün Seçimi' : 'Selection by Material'}</p><h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">{tr ? 'Ferlin Serisi ve Tamamlayıcı Temizlik Ürünleri' : 'Ferlin Series and Complementary Cleaning Products'}</h2><p className="mt-4 leading-relaxed text-muted">{tr ? 'Demir, çelik, bakır, paslanmaz ve alüminyum sistemlerin kimyasal temizlik ihtiyaçları farklıdır. Ferlin serisindeki ürünleri, temizlenecek ekipmanın malzemesi ve birikinti özelliklerine göre değerlendiriyoruz.' : 'Steel, copper, stainless steel and aluminium systems have different chemical cleaning requirements. We assess Ferlin products according to equipment materials and deposit characteristics.'}</p></div>
      <div className="mt-7 grid gap-5 lg:grid-cols-2">{cleaningProducts.map(product => <article id={product.name === 'Alkalen NP-100' ? 'alkalen-np-100' : `ferlin-${product.name.split(' ').at(-1)}`} key={product.name} className="grid scroll-mt-28 grid-cols-[88px_minmax(0,1fr)] items-start gap-4 rounded-2xl border border-navy/10 bg-white p-5 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-5 sm:p-6">
        <div className="relative aspect-square rounded-xl bg-[#f8fafb]"><Image src={product.image!} alt={`${product.name} – ${product.tags?.join(', ') ?? ''}`} fill sizes="(min-width: 640px) 120px, 88px" className="object-contain p-2" /></div>
        <div className="min-w-0"><h3 className="text-lg font-bold leading-snug text-navy">{product.name}</h3><p className="mt-2 text-xs font-medium leading-relaxed text-brand-blue">{product.tags?.join(' · ') ?? (tr ? 'Nötralizasyon · Pasivasyon' : 'Neutralisation · Passivation')}</p><p className="mt-3 text-sm leading-relaxed text-muted">{product.description}</p></div>
        <div className="col-span-2 border-t border-navy/10 pt-4"><h4 className="text-xs font-semibold text-navy/70">{tr ? 'Kullanım alanları' : 'Applications'}</h4><p className="mt-1.5 text-sm leading-relaxed text-muted">{productApplications[product.name.split(' ').at(-1)!]}</p><Link href={routes.contact} className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-brand-blue">{tr ? 'Ürün Bilgisi ve Teklif' : 'Product Information and Quote'}<ArrowRight className="h-3.5 w-3.5" /></Link></div>
      </article>)}</div>
      <p className="mt-5 max-w-3xl text-xs leading-relaxed text-muted">{tr ? 'Ürün seçimi ve kullanım koşulları, sistemdeki tüm malzemeler ve birikinti özellikleri birlikte değerlendirilerek belirlenir. Teknik ekibimiz bu süreçte destek sağlar.' : 'Product selection and use conditions are assessed using all system materials and deposit characteristics, with support from our technical team.'}</p>
    </Container></section>
    <section className="py-12 sm:py-16"><Container><div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
      <div><h2 className="text-2xl font-bold text-navy">{tr ? 'Uygulamanıza Uygun Kimyasal ve Teknik Destek' : 'Chemicals and Technical Support for Your Application'}</h2><p className="mt-4 leading-relaxed text-muted">{tr ? 'Kimyasal temizliği kendi ekibiyle gerçekleştiren işletmelere ve saha yüklenicilerine ürün tedariki sağlıyoruz. Sistem bilgilerini birlikte değerlendirerek ürün seçimini, kullanım koşullarını ve temizlik sonrası işlemleri uygulama gerekliliklerine göre ele alıyoruz.' : 'We supply chemicals to facilities and contractors carrying out cleaning with their own teams. We review system information together to assess product selection, use conditions and post-cleaning steps according to application requirements.'}</p><ul className="mt-5 flex flex-wrap gap-2">{applications.map(item => <li key={item} className="rounded-full border border-cyan/20 px-3 py-2 text-sm text-brand-blue">{item}</li>)}</ul><div className="mt-7 rounded-xl bg-[#eef5f8] p-5"><h3 className="font-bold text-navy">{tr ? 'Temizlik Sonrası İşlemler' : 'Post-Cleaning Steps'}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{tr ? 'Durulama, nötralizasyon ve pasivasyon ihtiyaçları sistem malzemesine ve uygulama prosedürüne göre belirlenir. Alkalen NP-100 gibi tamamlayıcı ürünlerin seçimini bu kapsamda değerlendiriyoruz.' : 'Rinsing, neutralisation and passivation requirements depend on system materials and the application procedure. Complementary products such as Alkalen NP-100 are assessed within this scope.'}</p></div><Link href={cleaningBasePath} className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-blue">{tr ? 'Saha Uygulaması İçin Kimyasal Temizlik Hizmetimiz' : 'Our Chemical Cleaning Field Service'}<ArrowRight className="h-4 w-4" /></Link></div>
      <aside className="self-start rounded-2xl border border-navy/10 bg-[#eef5f8] p-6 sm:p-8"><h2 className="text-xl font-bold text-navy">{tr ? 'Doğru Ürün İçin Hangi Bilgiler Gerekli?' : 'What Information Helps Product Selection?'}</h2><ul className="mt-5 space-y-4">{selection.map(item => <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted"><Check className="mt-1 h-4 w-4 shrink-0 text-cyan" />{item}</li>)}</ul><Link href={`${routes.products}#kimyasal_temizlik_urunleri`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">{tr ? 'Tüm Temizlik ve Bakım Ürünleri' : 'All Cleaning and Maintenance Products'}<ArrowRight className="h-4 w-4" /></Link></aside>
    </div></Container></section>
    <section className="bg-[#eef5f8] py-12"><Container><h2 className="text-2xl font-bold text-navy">{tr ? 'Kimyasal Temizlik Ürünleri Hakkında Sık Sorulan Sorular' : 'Frequently Asked Questions About Chemical Cleaning Products'}</h2><div className="mt-6 space-y-3">{questions.map(([question, answer]) => <details key={question} className="rounded-xl border border-navy/10 bg-white p-5"><summary className="cursor-pointer font-semibold text-navy">{question}</summary><p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{answer}</p></details>)}</div><nav aria-label={tr ? 'İlgili temizlik hizmetleri' : 'Related cleaning services'} className="mt-7 flex flex-wrap gap-4">{[
      ['buhar-kazani-kimyasal-temizligi', tr ? 'Buhar Kazanı Kimyasal Temizliği' : 'Steam Boiler Chemical Cleaning'],
      ['esanjor-kondenser-kimyasal-temizligi', tr ? 'Eşanjör ve Kondenser Kimyasal Temizliği' : 'Heat Exchanger and Condenser Chemical Cleaning'],
      ['tank-boru-hatti-kimyasal-temizligi', tr ? 'Tank ve Boru Hattı Kimyasal Temizliği' : 'Tank and Pipeline Chemical Cleaning'],
    ].map(([slug, label]) => <Link key={slug} href={`${cleaningBasePath}/${slug}`} className="text-sm font-semibold text-brand-blue hover:underline">{label}</Link>)}</nav></Container></section>
    <ContactCTA title={tr ? 'Ekipmanınıza uygun temizlik ürününü birlikte seçelim.' : 'Let’s select the right cleaning product for your equipment.'} subtitle={tr ? 'Malzeme bilgilerini, birikinti fotoğraflarını ve uygulama ihtiyacınızı paylaşın. Kelvenoks Ferlin serisi ve tamamlayıcı ürünler için teknik destek ve teklif sunalım.' : 'Share material details, deposit photos and application requirements. Get technical support and a quote for the Kelvenoks Ferlin series and complementary products.'} primaryCta={tr ? 'Ürün Teklifi Alın' : 'Request a Product Quote'} />
  </>
}
