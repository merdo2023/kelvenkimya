import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Link } from '@/i18n/navigation'
import { cleaningBasePath } from '@/data/cleaningServices'
import { routes } from '@/data/routes'

export function CleaningMobilization({ locale, compact = false }: { locale: string; compact?: boolean }) {
  const tr = locale === 'tr'

  if (compact) return <section className="bg-[#eef5f8] py-8"><Container>
    <div className="rounded-2xl border border-cyan/20 bg-white p-5 sm:p-6">
      <h2 className="text-xl font-bold text-navy">{tr ? 'HRSG Projelerinde Uluslararası Mobilizasyon' : 'International Mobilization for HRSG Projects'}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">{tr ? 'HRSG kimyasal temizliği projelerinde, kendi sirkülasyon pompalarımız ve uygulama ekipmanlarımızla Türkiye’de ve uluslararası sahalarda mobilizasyon sağlıyoruz. Ekipman sevkiyatı ve saha kurulumu, proje takvimi ve ülkenin lojistik gerekliliklerine göre planlanıyor.' : 'For HRSG chemical cleaning projects, we mobilize our own circulation pumps and application equipment to sites in Türkiye and internationally. Equipment shipment and site setup are planned around the project schedule and local logistics requirements.'}</p>
      <Link href={`${cleaningBasePath}#mobilizasyon`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">{tr ? 'Ekipman ve Mobilizasyon Yaklaşımımız' : 'Our Equipment and Mobilization Approach'}<ArrowRight className="h-4 w-4" /></Link>
    </div>
  </Container></section>

  const points = tr ? ['Projeye uygun pompa ve ekipman seçimi', 'Yurt içi ve yurt dışı ekipman sevkiyatı', 'Saha kurulumu ve uygulama organizasyonu'] : ['Project-specific pump and equipment selection', 'Domestic and international equipment shipment', 'Site setup and field execution planning']

  return <section id="mobilizasyon" className="scroll-mt-32 bg-white py-10 sm:py-14"><Container>
    <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-10">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-cyan">{tr ? 'Kendi Ekipmanlarımızla Saha Uygulaması' : 'Field Execution with Our Own Equipment'}</p>
        <h2 className="mt-3 text-2xl font-bold leading-tight text-navy sm:text-3xl">{tr ? 'Türkiye’de ve Uluslararası Projelerde Saha Mobilizasyonu' : 'Field Mobilization in Türkiye and for International Projects'}</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{tr ? 'Kendi kimyasal temizlik ekipmanlarımız, sirkülasyon pompalarımız ve teknik ekibimizle Türkiye’de ve yurt dışındaki projelerde saha uygulaması gerçekleştiriyoruz. Projenin ihtiyaçlarına göre ekipman seçimini, sevkiyatı ve saha kurulumunu planlıyor; pompalarımızı ve uygulama ekipmanlarımızı çalışmanın yapılacağı ülkeye mobilize edebiliyoruz.' : 'We carry out field work in Türkiye and abroad with our own chemical cleaning equipment, circulation pumps and technical team. We plan equipment selection, shipment and site setup to meet project needs and can mobilize our pumps and application equipment to the country where the work will be performed.'}</p>
        <ul className="mt-5 space-y-3">{points.map(point => <li key={point} className="flex gap-2 text-sm text-navy/80"><Check className="h-4 w-4 shrink-0 text-cyan" />{point}</li>)}</ul>
        <p className="mt-5 text-xs leading-relaxed text-muted">{tr ? 'Mobilizasyon kapsamı ve takvimi, ülkenin giriş koşulları, lojistik ve saha gerekliliklerine göre belirleniyor.' : 'Mobilization scope and schedule depend on country entry conditions, logistics and site requirements.'}</p>
        <Link href={routes.contact} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">{tr ? 'Projeniz İçin Mobilizasyonu Planlayalım' : 'Plan Mobilization for Your Project'}<ArrowRight className="h-4 w-4" /></Link>
      </div>
      <figure className="overflow-hidden rounded-2xl border border-navy/10">
        <div className="relative aspect-[4/3] bg-[#eef5f8]"><Image src="/images/services/hrsg-circulation-equipment.jpg" alt={tr ? 'Kelven Kimya sirkülasyon pompaları ve kimyasal temizlik saha ekipmanları' : 'Kelven Kimya circulation pumps and chemical cleaning field equipment'} fill sizes="(min-width: 1280px) 550px, (min-width: 1024px) 50vw, 100vw" className="object-contain" /></div>
        <figcaption className="p-3 text-xs text-muted">{tr ? 'Saha arşivimizden · Sirkülasyon pompaları ve uygulama ekipmanları' : 'From our field archive · Circulation pumps and application equipment'}</figcaption>
      </figure>
    </div>
  </Container></section>
}
