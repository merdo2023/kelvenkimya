import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Container } from '@/components/common/Container'
import { ContactCTA } from '@/components/home/ContactCTA'
import { getServices } from '@/data/localeCatalog'
import { routes } from '@/data/routes'
import type { AppLocale } from '@/i18n/routing'
import { cleaningBasePath, cleaningMenu } from '@/data/cleaningServices'

export async function ServicesPage({ locale }: { locale: string }) {
  const tr = locale === 'tr'
  const services = await getServices(locale as AppLocale)
  return <>
    <section className="bg-navy pb-8 pt-24 text-center sm:pt-28"><Container>
      <h1 className="text-3xl font-bold text-white sm:text-4xl">{tr ? 'Hizmetlerimiz' : 'Our Services'}</h1>
      <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-white/75">{tr ? 'Endüstriyel kimyasal temizlikten ürün tedariğine, su hazırlama sistemlerinden analiz ve teknik takibe kadar tesisinizin ihtiyaçlarına özel çözümler sunuyoruz.' : 'Solutions tailored to your facility, from industrial chemical cleaning and product supply to water preparation systems, analysis and technical monitoring.'}</p>
      <nav aria-label={tr ? 'Hizmetler' : 'Services'} className="mt-7 flex flex-wrap justify-center gap-2">{services.map(service => <a key={service.id} href={`#${service.id}`} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15">{service.title}</a>)}</nav>
    </Container></section>
    <section className="bg-[#eef5f8] py-8 sm:pb-16"><Container><div className="space-y-8">
      {services.map((service, index) => <article id={service.id} key={service.id} className="scroll-mt-28 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm"><div className="grid items-start lg:grid-cols-[0.7fr_1.3fr]">
        <div className="p-5 pb-0 sm:p-6 lg:sticky lg:top-28">
          {index === 0 ? <>
            <div className="grid grid-cols-2 gap-3">
              {[
                { src: '/images/services/ronesans-field-application.jpg', alt: tr ? 'Endüstriyel tesis sahasında çalışan Kelven Kimya ekip üyesi' : 'Kelven Kimya team member working at an industrial facility' },
                { src: '/images/services/ronesans-pipework.jpg', alt: tr ? 'Endüstriyel tesis sahasındaki boru grupları' : 'Pipework at an industrial facility' },
              ].map(photo => <div key={photo.src} className="relative aspect-[9/16] overflow-hidden rounded-xl bg-[#eef5f8]"><Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 17vw, 45vw" className="object-contain" priority /></div>)}
            </div>
            <p className="mt-3 text-xs font-medium text-muted">{tr ? 'Gerçek saha arşivimizden · Uygulama ekibimiz ve tesis boru grupları' : 'From our field archive · Our team and facility pipework'}</p>
          </> : <>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#eef5f8]">
              {service.image && <Image src={service.image} alt={service.imageAlt ?? service.title} fill sizes="(min-width: 1024px) 35vw, 90vw" className="object-contain" />}
            </div>
            <p className="mt-3 text-xs font-medium text-muted">{service.imageCaption ?? service.category}</p>
          </>}
        </div>
        <div className="p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan">{service.category}</p>
          <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">{service.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{service.description}</p>
          {index === 0 && <div className="mt-5 flex flex-wrap gap-3">
            <Link href={cleaningBasePath} className="inline-flex items-center gap-2 rounded-xl gradient-accent px-4 py-3 text-sm font-semibold text-white">{tr ? 'Kimyasal Temizlik Hizmetimizi İnceleyin' : 'Explore Our Chemical Cleaning Service'}<ArrowRight className="h-4 w-4 shrink-0" /></Link>
            <Link href={`${cleaningBasePath}#mobilizasyon`} className="inline-flex items-center gap-2 rounded-xl border border-cyan/20 px-4 py-3 text-sm font-semibold text-brand-blue hover:bg-cyan/5">{tr ? 'Ekipman ve Mobilizasyonumuz' : 'Our Equipment and Mobilization'}<ArrowRight className="h-4 w-4 shrink-0" /></Link>
          </div>}
          <h3 className="mt-6 text-xs font-bold uppercase tracking-widest text-navy/55">{tr ? 'Uygulama Alanları' : 'Applications'}</h3>
          <ul className="mt-2 flex flex-wrap gap-2">{service.tags?.map(tag => <li key={tag} className="rounded-full border border-cyan/20 bg-cyan/5 px-3 py-1 text-xs font-semibold text-brand-blue">{tag}</li>)}</ul>
          {index === 0 && <nav aria-label={tr ? 'Kimyasal temizlik detay sayfaları' : 'Chemical cleaning detail pages'} className="mt-5 grid gap-2 sm:grid-cols-2">{cleaningMenu(locale as AppLocale).map(item => <Link key={item.href} href={item.href} className="flex items-center justify-between gap-2 rounded-lg border border-cyan/20 bg-cyan/5 px-3 py-2.5 text-sm font-semibold text-brand-blue hover:bg-cyan/10">{item.label}<ArrowRight className="h-4 w-4 shrink-0" /></Link>)}</nav>}
          <h3 className="mt-6 text-xs font-bold uppercase tracking-widest text-navy/55">{tr ? 'Hizmet Kapsamımız' : 'Our Scope'}</h3>
          <ul className="mt-3 space-y-3">{service.bullets?.map(bullet => <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-muted"><Check className="mt-1 h-4 w-4 shrink-0 text-cyan" />{bullet}</li>)}</ul>
          <p className="mt-6 border-t border-navy/10 pt-4 text-sm font-semibold text-navy/75">{service.resultLabel}</p>
          <div className="mt-5 flex flex-wrap gap-4"><Link href={routes.contact} className="inline-flex items-center gap-2 rounded-xl gradient-accent px-5 py-3 text-sm font-semibold text-white">{tr ? 'İhtiyacınızı Değerlendirelim' : 'Discuss Your Requirements'}<ArrowRight className="h-4 w-4" /></Link>
          {service.id === 'kimyasal-temizlik-kimyasallari' && <Link href={routes.products} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">{tr ? 'Ürünleri İncele' : 'Explore Products'}<ArrowRight className="h-4 w-4" /></Link>}</div>
        </div>
      </div></article>)}
    </div></Container></section>
    <ContactCTA />
  </>
}
