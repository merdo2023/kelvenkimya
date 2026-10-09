import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { blogDrafts } from '@/data/blogDrafts'
export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params
  const post = blogDrafts.find(p => p.slug === slug)
  if (locale !== 'tr' || !post) return { title: 'Yazı bulunamadı', robots: { index: false, follow: false } }
  return {
    title: post.title + ' | Kelven Kimya', description: post.summary,
    robots: { index: false, follow: false },
    openGraph: { type: 'article', title: post.title, description: post.summary, images: [{ url: post.image, alt: post.imageAlt }] },
    twitter: { card: 'summary_large_image', title: post.title, description: post.summary, images: [post.image] },
  }
}
export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const post = blogDrafts.find(p => p.slug === slug)
  if (locale !== 'tr' || !post) notFound()
  setRequestLocale(locale)
  return <article className="bg-white px-6 py-12 sm:py-16 text-slate-900"><div className="mx-auto max-w-3xl">
    <Link href="/blog-onizleme" className="font-semibold text-teal-700">← Bloga dön</Link>
    <p className="mt-8 text-sm font-semibold text-teal-700">{post.category}</p>
    <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">{post.title}</h1>
    <p className="mt-6 text-lg leading-relaxed text-slate-600">{post.summary}</p>
    <figure className="mt-8"><div className="relative aspect-[16/9] overflow-hidden rounded-xl"><Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 768px) 100vw, 768px" priority className="object-cover" /></div><figcaption className="mt-3 text-sm text-slate-600">{post.imageAlt}</figcaption></figure>
    {post.sections.map(([heading, text], i) => <section id={`bolum-${i}`} key={heading} className="my-10 scroll-mt-28"><h2 className="text-2xl font-bold">{heading}</h2><p className="mt-4 text-lg leading-8 text-slate-700">{text}</p></section>)}
    <details className="mt-10 border-t border-slate-200 pt-6"><summary className="cursor-pointer font-semibold">Teknik değerlendirme için hazırlık listesi</summary><ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">{post.checklist.map(item => <li key={item}>{item}</li>)}</ul></details>
    <section className="mt-10"><h2 className="text-xl font-bold">Sık Sorulan Sorular</h2><div className="mt-3 space-y-2">{post.faq.map(([question, answer]) => <details key={question} className="border-b border-slate-200 py-4"><summary className="cursor-pointer font-semibold">{question}</summary><p className="mt-4 leading-7 text-slate-700">{answer}</p></details>)}</div></section>
    <div className="mt-12 border-t border-slate-200 pt-8"><h2 className="text-xl font-bold">Daha fazla bilgi</h2><div className="mt-4 flex flex-col items-start gap-3"><Link href={post.service} className="font-semibold text-teal-700 underline">{post.serviceLabel}</Link><Link href="/projelerimiz" className="font-semibold text-teal-700 underline">Projelerimizi inceleyin</Link><Link href="/iletisim" className="font-semibold text-teal-700 underline">Teknik değerlendirme talep edin</Link></div></div>
    <p className="mt-10 text-xs text-slate-500">İçerik yayın öncesi teknik inceleme aşamasındadır.</p>
  </div></article>
}