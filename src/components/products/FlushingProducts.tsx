import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Link } from '@/i18n/navigation'
import { cleaningBasePath } from '@/data/cleaningServices'

export function FlushingProducts({ tr, service = false }: { tr: boolean; service?: boolean }) {
  if (!service) return <section id="flushing-urunleri" className="scroll-mt-28 bg-[#eef5f8] pt-5 pb-2"><Container>
    <div className="flex flex-col gap-3 rounded-xl border border-cyan/15 bg-white/60 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div><h2 className="text-sm font-semibold text-navy">{tr ? 'Flushing ve Ön Temizlik Ürünleri' : 'Flushing and Pre-Cleaning Products'}</h2><p className="mt-1 text-xs leading-relaxed text-muted">{tr ? 'Kirlenme türüne ve sistem malzemesine uygun ürün seçimi.' : 'Product selection suited to contamination and system materials.'}</p></div>
      <Link href={`${cleaningBasePath}/on-temizlik-flushing#flushing-urunleri`} className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-brand-blue">{tr ? 'Ürünleri İncele' : 'Explore Products'}<ArrowRight className="h-3.5 w-3.5" /></Link>
    </div>
  </Container></section>
  const groups = [
    { title: 'Alkelen NP150', purpose: tr ? 'Yağ, gres ve proses kalıntılarının temizliği' : 'Cleaning oil, grease and process residues', slugs: ['alkelen-np150'] },
    { title: 'Kelvenoks Ferlin 123 / 124 / 128 / 130', purpose: tr ? 'Malzemeye uygun kireç ve mineral birikintisi temizliği' : 'Material-specific scale and mineral deposit cleaning', slugs: ['kelvenoks-ferlin-123', 'kelvenoks-ferlin-124', 'kelvenoks-ferlin-128', 'kelvenoks-ferlin-130'] },
    { title: 'Alkalen NP-100', purpose: tr ? 'Asidik temizlik sonrası nötralizasyon ve pasivasyon' : 'Neutralisation and passivation after acidic cleaning', slugs: ['alkalen-np-100'] },
  ]
  return <section id="flushing-urunleri" className="scroll-mt-28 bg-[#eef5f8] py-8 sm:py-10"><Container><div className="rounded-2xl border border-navy/10 bg-white p-6 sm:p-8">
    <h2 className="text-xl font-bold text-navy">{tr ? 'Flushing ve Kimyasal Ön Temizlik İçin Kelvenoks Ürünleri' : 'Kelvenoks Products for Flushing and Chemical Pre-Cleaning'}</h2>
    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{tr ? 'Su ile flushing, gevşek parçacıkların akışla uzaklaştırılmasına yöneliktir. Yağ, kireç veya diğer birikintiler için ihtiyaç duyulan kimyasal temizlik aşamaları, kirlenme türüne ve devredeki malzemelere göre ayrıca planlanır.' : 'Water flushing removes loose particles through flow. Chemical cleaning stages for oil, scale or other deposits are planned separately according to contamination and circuit materials.'}</p>
    <div className="mt-5 grid gap-4 lg:grid-cols-3">{groups.map(group => <div key={group.title} className="rounded-xl bg-[#f5f9fb] p-4"><h3 className="text-sm font-bold text-navy">{group.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{group.purpose}</p><div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">{group.slugs.map(slug => <Link key={slug} href={`/urunlerimiz/${slug}`} className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue">{group.slugs.length > 1 ? slug.slice(-3) : tr ? 'Ürünü İncele' : 'Explore Product'}<ArrowRight className="h-3 w-3" /></Link>)}</div></div>)}</div>
    {!service && <Link href={`${cleaningBasePath}/on-temizlik-flushing`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">{tr ? 'Flushing ve Kimyasal Ön Temizlik Hizmetini İnceleyin' : 'Explore Flushing and Chemical Pre-Cleaning Services'}<ArrowRight className="h-4 w-4" /></Link>}
  </div></Container></section>
}
