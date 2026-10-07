'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Play, ShieldCheck } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Container } from '../common/Container'
import { routes } from '@/data/routes'
import type { ProductCategory } from '@/types/locale'
import type { AppLocale } from '@/i18n/routing'

export function CleaningProductsSection({ categories, locale }: { categories: ProductCategory[]; locale: AppLocale }) {
  const [playing, setPlaying] = useState(false)
  const tr = locale === 'tr'
  const products = categories.find(category => category.id === 'kimyasal_temizlik_urunleri')?.products.slice(0, 4) ?? []
  const passivationProduct = categories.find(category => category.id === 'kimyasal_temizlik_urunleri')?.products.find(product => product.name === 'Alkalen NP-100')
  const copy = tr ? {
    eyebrow: 'ÜRÜNÜ UYGULAMADA GÖRÜN',
    title: 'Endüstriyel Kimyasal Temizlik Ürünleri',
    description: 'Buhar kazanları, eşanjörler, kondenserler, soğutma kuleleri, tanklar ve proses boru hatlarında kireç ve mineral birikintilerinin temizliği için Kelvenoks Ferlin serisini sunuyoruz. Demir, çelik, döküm, bakır, paslanmaz ve alüminyum sistemlerde malzeme yapısına uygun ürün seçimini destekliyoruz. Devreye alma öncesi ön temizlik ve flushing süreçlerinde kimyasal temizlik gereken aşamalar için sistem malzemesine ve uygulama ihtiyacına uygun ürünler sağlıyoruz. Uygulamaları kendi ekipleriyle gerçekleştiren işletmelere ve saha yüklenicilerine ürün tedariği ve teknik destek sunuyoruz.',
    video: '40 yıllık kireçli borunun Kelvenoks Ferlin ile temizliği',
    videoDescription: 'Yıllar içinde oluşan kireç ve mineral birikintilerine karşı gerçek bir uygulama. Borunun işlem öncesi görünümünü, kimyasal temizlik sürecini ve işlem sonrası iç yüzeyini videoda inceleyin.',
    play: 'Uygulama videosunu oynat',
    note: 'Gerçek uygulama görüntüsü. Sonuçlar ürün, birikinti ve uygulama koşullarına göre değişebilir.',
    card: 'MALZEMEYE UYGUN ÜRÜN SEÇİMİ',
    inspect: 'Ürünü incele',
    all: 'Tüm ürünleri incele',
    contact: 'Ürün seçimi için bize danışın',
  } : {
    eyebrow: 'SEE THE PRODUCT IN ACTION',
    title: 'Industrial Chemical Cleaning Products',
    description: 'We supply the Kelvenoks Ferlin series for removing scale and mineral deposits from steam boilers, heat exchangers, condensers, cooling towers, tanks and process pipelines. We support product selection based on the materials in iron, steel, cast, copper, stainless and aluminum systems. For stages of pre-commissioning cleaning and flushing that require chemical cleaning, we supply products selected for system materials and application requirements. We provide product supply and technical support to businesses and site contractors carrying out these applications with their own teams.',
    video: 'Cleaning a 40-year-old scale-encrusted pipe with Kelvenoks Ferlin',
    videoDescription: 'An actual application addressing scale and mineral deposits accumulated over time. See the pipe before treatment, the chemical cleaning process and the internal surface after treatment.',
    play: 'Play application video',
    note: 'Actual application footage. Results depend on the product, deposits and application conditions.',
    card: 'PRODUCT SELECTION BY MATERIAL',
    inspect: 'Explore product',
    all: 'Explore all products',
    contact: 'Ask us about product selection',
  }

  return (
    <section id="temizlik-urunleri" className="relative overflow-hidden bg-[#eef5f8] py-14 sm:py-16 lg:py-20 scroll-mt-28">
      <Container>
        <div className="mx-auto mb-9 max-w-4xl text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.18em] text-brand-blue">{copy.eyebrow}</p>
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">{copy.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-navy/70">{copy.description}</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[minmax(280px,0.8fr)_1.6fr] lg:gap-8">
          <div className="self-start overflow-hidden rounded-2xl bg-[#071525] shadow-lg">
            <div className="relative aspect-[4/3] bg-[#071525] lg:aspect-auto lg:h-[390px]">
              {playing ? (
                <video className="h-full w-full object-contain" controls autoPlay playsInline preload="none" poster="/images/products/cleaning-video-poster.jpg" aria-label={copy.video}>
                  <source src="/videos/kelvenoks-application.mp4" type="video/mp4" />
                  <a href="/videos/kelvenoks-application.mp4">{copy.video}</a>
                </video>
              ) : (
                <button type="button" onClick={() => setPlaying(true)} aria-label={copy.play} className="group relative flex h-full w-full items-center justify-center focus-visible:outline-4 focus-visible:outline-cyan focus-visible:outline-offset-[-4px]">
                  <Image src="/images/products/cleaning-video-poster.jpg" alt={tr ? 'Kimyasal temizlik uygulamasında sıvı içindeki boru' : 'Pipe immersed during a chemical cleaning demonstration'} fill sizes="(min-width: 1024px) 380px, 100vw" className="object-cover" />
                  <span className="absolute inset-0 bg-gradient-to-t from-[#071525]/80 via-[#071525]/20 to-transparent" />
                  <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white backdrop-blur-sm transition group-hover:scale-105 group-hover:bg-cyan"><Play className="ml-1 h-8 w-8" fill="currentColor" /></span>
                  <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-semibold text-white">01:01 · {tr ? 'Gerçek uygulama' : 'Actual application'}</span>
                </button>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-white">{copy.video}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{copy.videoDescription}</p>
              <p className="mt-4 border-t border-white/10 pt-3 text-xs leading-relaxed text-white/60">{copy.note}</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {products.map((product, index) => (
              <Link key={product.name} href={`${routes.products}#${product.name.toLowerCase().replace(/\s+/g, '-')}`} className="group flex flex-col rounded-2xl border border-navy/5 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-cyan/35 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-cyan">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <span className="pt-2 text-xs font-bold tracking-widest text-navy/30">0{index + 1}</span>
                  {product.image && <div className="relative h-24 w-32"><Image src={product.image} alt={product.name} fill sizes="128px" className="object-contain" /></div>}
                </div>
                <p className="text-[9px] font-bold tracking-wider text-brand-blue">{copy.card}</p>
                <h3 className="mt-2 text-xl font-bold text-navy">{product.name}</h3>
                {product.tags && <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={tr ? 'Uygun malzemeler' : 'Suitable materials'}>{product.tags.map(tag => <li key={tag} className="rounded-full border border-cyan/15 bg-cyan/5 px-2.5 py-1 text-xs font-semibold text-brand-blue">{tag}</li>)}</ul>}
                <p className="mb-5 mt-2 text-sm leading-relaxed text-navy/65">{product.description}</p>
                <span className="mt-auto flex items-center gap-2 text-sm font-semibold text-brand-blue">{copy.inspect}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
        </div>
        {passivationProduct && (
          <div className="mt-5 flex flex-col gap-5 rounded-2xl border border-green/20 bg-white p-5 sm:flex-row sm:items-center sm:p-6">
            <div className="flex items-center gap-4 sm:shrink-0">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green"><ShieldCheck className="h-6 w-6" aria-hidden="true" /></span>
              {passivationProduct.image && <div className="relative h-20 w-20"><Image src={passivationProduct.image} alt={passivationProduct.name} fill sizes="80px" className="object-contain" /></div>}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-green">{tr ? 'Temizlik sonrası tamamlayıcı çözüm' : 'A complementary solution after cleaning'}</p>
              <h3 className="mt-1 text-lg font-bold text-navy">Alkalen NP-100 <span className="font-normal text-navy/60">· {tr ? 'Nötralizasyon ve Pasivasyon' : 'Neutralization and Passivation'}</span></h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">{passivationProduct.description}</p>
            </div>
            <Link href={`${routes.products}#alkalen-np-100`} className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-brand-blue hover:underline">{copy.inspect}<ArrowRight className="h-4 w-4" /></Link>
          </div>
        )}
        <div className="mt-7 flex flex-wrap items-center gap-5">
          <Link href={routes.products} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-green px-6 py-3 text-sm font-bold text-white shadow-md">{copy.all}<ArrowRight className="h-4 w-4" /></Link>
          <Link href={routes.contact} className="text-sm font-semibold text-brand-blue hover:underline">{copy.contact}</Link>
        </div>
      </Container>
    </section>
  )
}
