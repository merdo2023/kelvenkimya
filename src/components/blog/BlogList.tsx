import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { PageHero } from '@/components/common/PageHero'
import { Container } from '@/components/common/Container'
import { getBlogPosts } from '@/data/blogPosts'

export function BlogList({ locale }: { locale: string }) {
  const posts = getBlogPosts(locale)
  const english = locale === 'en'
  const groups = [
    { id: 'kimyasal-temizlik', title: english ? 'Chemical Cleaning' : 'Kimyasal Temizlik', description: english ? 'Equipment preparation, cleaning methods and field experience.' : 'Ekipman hazırlığı, temizlik yöntemleri ve saha deneyimleri.', items: posts.filter(p => p.category !== (english ? 'Water Treatment' : 'Su Şartlandırma')) },
    { id: 'su-sartlandirma', title: english ? 'Water Treatment' : 'Su Şartlandırma', description: english ? 'Water analysis, protective programmes and operating monitoring.' : 'Su analizi, koruyucu kimyasal programlar ve işletme takibi.', items: posts.filter(p => p.category === (english ? 'Water Treatment' : 'Su Şartlandırma') && p.slug !== 'temizlik-su-sartlandirma-farki') },
  ]
  return <div className="bg-light-bg text-slate-900">
    <PageHero title="Blog" subtitle={english ? "Technical insights and field experience in industrial chemical cleaning and water treatment." : "Endüstriyel kimyasal temizlik ve su şartlandırma hakkında bilgiler ve saha deneyimleri."} />
    <Container className="pb-16 pt-6 sm:pb-24">
      <nav aria-label={english ? 'Blog topics' : 'Blog konuları'} className="mb-10 flex flex-wrap gap-6 border-b border-slate-200 pb-5">{groups.map(g => <a key={g.id} href={`#${g.id}`} className="font-semibold text-teal-700 underline underline-offset-4">{g.title}</a>)}</nav>
      {groups.map(group => <section key={group.id} id={group.id} className="mb-16 scroll-mt-28"><h2 className="text-3xl font-bold">{group.title}</h2><p className="mb-8 mt-3 text-slate-600">{group.description}</p>
      <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
        {group.items.map((post, index) => <article key={post.slug}>
          <Link href={`/blog/${post.slug}`} className="group block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-teal-600">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-slate-100">
              <Image src={post.image} alt={post.imageAlt} fill priority={index < 2} sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-teal-700">{post.category}</p>
            <h3 className="mt-2 max-w-xl text-xl font-bold leading-snug sm:text-2xl group-hover:text-teal-700">{post.title}</h3>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">{post.summary}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-teal-700">{english ? "Read more" : "Devamını oku"} <span aria-hidden="true">→</span></span>
          </Link>
        </article>)}
      </div></section>)}
    </Container>
  </div>
}