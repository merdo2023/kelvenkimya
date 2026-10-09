import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { PageHero } from '@/components/common/PageHero'
import { Container } from '@/components/common/Container'
import { blogDrafts } from '@/data/blogDrafts'

export function BlogPreview() {
  return <div className="bg-light-bg text-slate-900">
    <PageHero title="Blog" subtitle="Endüstriyel kimyasal temizlik ve su şartlandırma hakkında bilgiler ve saha deneyimleri." />
    <Container className="pb-16 pt-6 sm:pb-24">
      <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
        {blogDrafts.map((post, index) => <article key={post.slug}>
          <Link href={`/blog-onizleme/${post.slug}`} className="group block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-teal-600">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-slate-100">
              <Image src={post.image} alt={post.imageAlt} fill priority={index < 2} sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-teal-700">{post.category}</p>
            <h2 className="mt-2 max-w-xl text-xl font-bold leading-snug sm:text-2xl group-hover:text-teal-700">{post.title}</h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">{post.summary}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-teal-700">Devamını oku <span aria-hidden="true">→</span></span>
          </Link>
        </article>)}
      </div>
      <p className="mt-16 border-t border-slate-200 pt-5 text-xs text-slate-500">Tasarım önizlemesi · İçerikler yayın öncesi teknik inceleme aşamasındadır.</p>
    </Container>
  </div>
}