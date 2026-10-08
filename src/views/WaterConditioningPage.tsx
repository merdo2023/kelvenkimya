import Image from 'next/image'
import { findProductPage, productPagePath } from '@/data/productPages'
import { ArrowRight, Check } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { ContactCTA } from '@/components/home/ContactCTA'
import { Link } from '@/i18n/navigation'
import { getProductCategories } from '@/data/localeCatalog'
import { conditioningBasePath, conditioningContent, conditioningServices, type ConditioningService } from '@/data/waterConditioningServices'
import type { AppLocale } from '@/i18n/routing'
import { routes } from '@/data/routes'

export async function WaterConditioningPage({ locale, service }: { locale: string; service: ConditioningService }) {
  const tr = locale === 'tr'
  const content = conditioningContent(service, locale)
  const categories = await getProductCategories(locale as AppLocale)
  const category = categories.find(item => item.id === service.categoryId)
  const products = service.productNames
    ? service.productNames.flatMap(name => category?.products.filter(product => product.name.startsWith(name)) ?? [])
    : category?.products ?? []
  const other = conditioningServices.find(item => item.slug !== service.slug)!
  return <>
    <section className="bg-navy pb-12 pt-28 sm:pt-32"><Container>
      <nav aria-label={tr ? 'Sayfa yolu' : 'Breadcrumb'} className="mb-7 flex flex-wrap gap-2 text-xs text-white/70"><Link href={routes.home}>{tr ? 'Ana Sayfa' : 'Home'}</Link><span>/</span><Link href={`${routes.services}#su-sartlandirma-kimyasallari`}>{tr ? 'Su Şartlandırma Kimyasalları' : 'Water Treatment Chemicals'}</Link><span>/</span><span className="text-white">{content.title}</span></nav>
      <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div><p className="text-xs font-bold uppercase tracking-widest text-cyan">{tr ? 'Ürün Tedariki ve Teknik Destek' : 'Product Supply and Technical Support'}</p><h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">{content.title}</h1><p className="mt-4 leading-relaxed text-white/75">{content.summary}</p><Link href={routes.contact} className="mt-6 inline-flex items-center gap-2 rounded-xl gradient-accent px-5 py-3 font-semibold text-white">{tr ? 'Sisteminize Uygun Ürünü Belirleyelim' : 'Find the Right Product for Your System'}<ArrowRight className="h-4 w-4" /></Link></div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl"><Image src={service.image} alt={content.title} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" priority /></div>
      </div>
    </Container></section>
    <section className="bg-[#eef5f8] py-12"><Container><div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
      <div><h2 className="text-2xl font-bold text-navy">{tr ? 'Sisteminize Uygun Şartlandırma Programı' : 'A Treatment Program for Your System'}</h2><p className="mt-4 leading-relaxed text-muted">{content.description}</p><div className="mt-6 grid gap-4 sm:grid-cols-2">{content.goals.map(([title, text]) => <article key={title} className="rounded-xl border border-navy/10 bg-white p-5"><h3 className="font-bold text-navy">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{text}</p></article>)}</div></div>
      <aside className="self-start rounded-2xl border border-navy/10 bg-white p-6"><h2 className="text-xl font-bold text-navy">{tr ? 'Ürün Seçimi İçin Hangi Bilgiler Gerekli?' : 'What Information Helps Product Selection?'}</h2><ul className="mt-5 space-y-3">{content.inputs.map(item => <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted"><Check className="mt-1 h-4 w-4 shrink-0 text-cyan" />{item}</li>)}</ul><p className="mt-5 text-xs leading-relaxed text-muted">{tr ? 'Ürün ve kullanım koşulları, su analizleri ve sistem gerekliliklerine göre belirlenir.' : 'Products and use conditions depend on water analyses and system requirements.'}</p><Link href={routes.contact} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-blue">{tr ? 'Teknik Destek Alın' : 'Get Technical Support'}<ArrowRight className="h-4 w-4" /></Link></aside>
    </div></Container></section>
    <section className="py-12"><Container><h2 className="text-2xl font-bold text-navy">{tr ? 'İlgili Kimyasal Ürünlerimiz' : 'Related Chemical Products'}</h2><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{products.map(product => <article key={product.name} className="rounded-xl border border-navy/10 bg-white p-5">{product.image && <div className="relative mb-4 aspect-[4/3]"><Image src={product.image} alt={product.name} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" className="object-contain" /></div>}<h3 className="font-bold text-navy">{product.name}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{product.description}</p><Link href={findProductPage(product.name) ? productPagePath(findProductPage(product.name)!) : `${routes.products}#${service.categoryId}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">{tr ? 'Ürünü İncele' : 'Explore Product'}<ArrowRight className="h-4 w-4" /></Link></article>)}</div><Link href={`${routes.products}#${service.categoryId}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-blue">{tr ? 'Ürün Kataloğunu İnceleyin' : 'Explore the Product Catalogue'}<ArrowRight className="h-4 w-4" /></Link>
      <div className="mt-10 rounded-xl bg-[#eef5f8] p-5"><Link href={`${conditioningBasePath}/${other.slug}`} className="inline-flex items-center gap-2 font-semibold text-brand-blue">{conditioningContent(other, locale).title}<ArrowRight className="h-4 w-4 shrink-0" /></Link></div>
    </Container></section>
    <ContactCTA
      title={tr ? 'Su şartlandırma programınızı birlikte belirleyelim.' : 'Let’s plan your water treatment program together.'}
      subtitle={tr ? 'Sistem bilgilerinizi ve mevcut su analizlerinizi paylaşın. İhtiyacınıza uygun kimyasal ürün seçimi, aylık su analizleri, sonuç paylaşımı ve dozaj takibi için birlikte çalışalım.' : 'Share your system information and available water analyses. Let’s work together on suitable chemical selection, monthly water analyses, results sharing and dosing follow-up.'}
      primaryCta={tr ? 'Su Şartlandırma İçin Teklif Alın' : 'Request a Water Treatment Proposal'}
    />
  </>
}
