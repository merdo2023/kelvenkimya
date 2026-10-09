import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { getBlogPosts } from '@/data/blogPosts'
import { buildContentMetadata } from '@/lib/metadata'
import { getLocalePath } from '@/i18n/routing'
import { siteUrl } from '@/lib/site'
export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params
  const post = getBlogPosts(locale).find(p => p.slug === slug)
  if (!post) return { title: 'Yazı bulunamadı', robots: { index: false, follow: false } }
  return { ...buildContentMetadata(locale, post.title, post.summary, '/blog/' + post.slug), openGraph: { type: 'article', title: post.title, description: post.summary, url: siteUrl + getLocalePath(locale, '/blog/' + post.slug), images: [{ url: post.image, alt: post.imageAlt }] } }
}
export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const post = getBlogPosts(locale).find(p => p.slug === slug)
  if (!post) notFound()
  setRequestLocale(locale)
  const english = locale === 'en'
  const schema = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title, description: post.summary, inLanguage: locale, image: siteUrl + post.image, mainEntityOfPage: siteUrl + getLocalePath(locale, '/blog/' + post.slug), publisher: { '@type': 'Organization', name: 'Kelven Kimya', url: siteUrl } }
  return <article className="bg-white px-6 py-12 sm:py-16 text-slate-900"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\u003c') }} /><div className="mx-auto max-w-3xl">
    <Link href="/blog" className="font-semibold text-teal-700">{english ? '← Back to blog' : '← Bloga dön'}</Link>
    <p className="mt-8 text-sm font-semibold text-teal-700">{post.category}</p>
    <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">{post.title}</h1>
    <p className="mt-6 text-lg leading-relaxed text-slate-600">{post.summary}</p>
    <figure className="mt-8"><div className="relative aspect-[16/9] overflow-hidden rounded-xl"><Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 768px) 100vw, 768px" priority className="object-cover" /></div><figcaption className="mt-3 text-sm text-slate-600">{post.imageAlt}</figcaption></figure>
    {post.sections.map(([heading, text], i) => <section id={`bolum-${i}`} key={heading} className="my-10 scroll-mt-28"><h2 className="text-2xl font-bold">{heading}</h2><p className="mt-4 text-lg leading-8 text-slate-700">{text}</p></section>)}
    <details className="mt-10 border-t border-slate-200 pt-6"><summary className="cursor-pointer font-semibold">{english ? 'Technical assessment checklist' : 'Teknik değerlendirme için hazırlık listesi'}</summary><ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">{post.checklist.map(item => <li key={item}>{item}</li>)}</ul></details>
    <section className="mt-10"><h2 className="text-xl font-bold">{english ? 'Frequently Asked Questions' : 'Sık Sorulan Sorular'}</h2><div className="mt-3 space-y-2">{post.faq.map(([question, answer]) => <details key={question} className="border-b border-slate-200 py-4"><summary className="cursor-pointer font-semibold">{question}</summary><p className="mt-4 leading-7 text-slate-700">{answer}</p></details>)}</div></section>
    {post.slug === 'induksiyon-ocagi-sogutma-devresi-kimyasal-temizligi' && <section className="mt-10 border-t border-slate-200 pt-6"><h2 className="text-xl font-bold">{english ? 'Related Product and Technical Sources' : 'İlgili Ürün ve Teknik Kaynaklar'}</h2><ul className="mt-4 space-y-3 text-sm leading-6"><li><Link href="/urunlerimiz/kelvenoks-ferlin-124" className="text-teal-700 underline">Kelvenoks Ferlin 124</Link></li><li><a href="https://inductothermgroup.com/products/cooling-and-water-systems/" className="text-teal-700 underline">Inductotherm — Cooling and Water Systems</a></li><li><a href="https://www.induction-furnace.com/company-news/what-should-we-do-if-the-induction-coil-in-the-electric-furnace-is-blocked/" className="text-teal-700 underline">Judian — Induction Coil Blockage</a></li></ul></section>}
    <div className="mt-12 border-t border-slate-200 pt-8"><h2 className="text-xl font-bold">{english ? 'Further Information' : 'Daha fazla bilgi'}</h2><div className="mt-4 flex flex-col items-start gap-3"><Link href={post.service} className="font-semibold text-teal-700 underline">{post.serviceLabel}</Link><Link href="/projelerimiz" className="font-semibold text-teal-700 underline">{english ? 'Explore our projects' : 'Projelerimizi inceleyin'}</Link><Link href="/iletisim" className="font-semibold text-teal-700 underline">{english ? 'Request a technical assessment' : 'Teknik değerlendirme talep edin'}</Link></div></div>
  </div></article>
}