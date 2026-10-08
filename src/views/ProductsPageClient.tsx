'use client'

import { useEffect, useMemo } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import { EmptyState } from '@/components/common/EmptyState'
import { ProductCategoryCard } from '@/components/products/ProductCategoryCard'
import { ProductsCategoryFilter } from '@/components/products/ProductsCategoryFilter'
import { ProductsHeroStats } from '@/components/products/ProductsHeroStats'
import { ProductsPageCTA } from '@/components/products/ProductsPageCTA'
import { ProductsToolbar } from '@/components/products/ProductsToolbar'
import { useProductFilter } from '@/hooks/useProductFilter'
import type { ProductCategory } from '@/types/locale'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { productPages, productPagePath } from '@/data/productPages'

type ProductsPageClientProps = {
  categories: ProductCategory[]
}

export function ProductsPageClient({ categories }: ProductsPageClientProps) {
  const { t, i18n } = useTranslation()
  const tr = i18n.language === 'tr'
  const featured = [
    { id: 'kimyasal_temizlik_urunleri', title: tr ? 'Kimyasal Temizlik Ürünleri' : 'Chemical Cleaning Products', description: tr ? 'Kelvenoks Ferlin serisi ve tamamlayıcı temizlik ürünleri.' : 'Kelvenoks Ferlin series and complementary cleaning products.', image: '/images/products/2/1.png', href: '/hizmetlerimiz/endustriyel-kimyasal-temizlik-urunleri' },
    { id: 'kazan_suyu_kimyasallari', title: tr ? 'Kazan Suyu Kimyasalları' : 'Boiler Water Chemicals', description: tr ? 'Kazan, besi suyu ve kondens devreleri için şartlandırma.' : 'Water treatment for boiler, feedwater and condensate circuits.', image: '/images/products/1/3.png', href: '/hizmetlerimiz/su-sartlandirma-kimyasallari/kazan-suyu-sartlandirma-kimyasallari' },
    { id: 'sogutma_suyu_kimyasallari', title: tr ? 'Soğutma Suyu Kimyasalları' : 'Cooling Water Chemicals', description: tr ? 'Kireç, korozyon ve biyolojik oluşumların kontrolü.' : 'Scale, corrosion and biological growth control.', image: '/images/products/4/4.png', href: '/hizmetlerimiz/su-sartlandirma-kimyasallari/sogutma-kulesi-suyu-sartlandirma-kimyasallari' },
  ]
  const productCount = categories.reduce((sum, category) => sum + category.products.length, 0)

  const {
    search,
    setSearch,
    categoryId,
    setCategoryId,
    filteredCategories,
    visibleProductCount,
    hasActiveFilters,
    clearFilters,
    query,
  } = useProductFilter(categories)

  useEffect(() => {
    const selectHashCategory = () => {
      const id = window.location.hash.slice(1)
      if (!categories.some(category => category.id === id)) return
      setSearch('')
      setCategoryId(id)
    }
    selectHashCategory()
    window.addEventListener('hashchange', selectHashCategory)
    return () => window.removeEventListener('hashchange', selectHashCategory)
  }, [categories, setSearch, setCategoryId])

  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (id && id === categoryId) document.getElementById(id)?.scrollIntoView()
  }, [categoryId, filteredCategories])

  const categoryIndexMap = useMemo(
    () => new Map(categories.map((category, index) => [category.id, index])),
    [categories],
  )

  return (
    <>
      <PageHero title={tr ? 'Endüstriyel Kimyasallar ve Su Şartlandırma Ürünleri' : 'Industrial Chemicals and Water Treatment Products'} subtitle={tr ? 'Kimyasal temizlik, kazan suyu ve soğutma suyu uygulamalarınız için ürün seçimi, tedarik ve teknik destek.' : 'Product selection, supply and technical support for chemical cleaning, boiler water and cooling water applications.'}>
        <ProductsHeroStats categoryCount={categories.length} productCount={productCount} />
      </PageHero>

      <section className="bg-[#eef5f8] pt-8 sm:pt-10"><Container>
        <h2 className="text-xl font-bold text-navy">{tr ? 'Öne Çıkan Ürün Gruplarımız' : 'Our Core Product Groups'}</h2>
        <div className="mt-5 grid gap-4 lg:grid-cols-3">{featured.map(item => <article key={item.id} className="rounded-2xl border border-navy/10 bg-white p-5">
          <div className="flex items-center gap-4"><div className="relative h-20 w-20 shrink-0 rounded-xl bg-[#f8fafb]"><Image src={item.image} alt={item.title} fill sizes="80px" className="object-contain p-2" /></div><div><h3 className="text-base font-bold text-navy">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p></div></div>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-navy/10 pt-4"><a href={`#${item.id}`} onClick={() => { setSearch(''); setCategoryId(item.id) }} className="text-xs font-semibold text-brand-blue">{tr ? 'Ürünleri Gör' : 'View Products'}</a><Link href={item.href} className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue">{tr ? 'Kullanım Alanları' : 'Applications'}<ArrowRight className="h-3.5 w-3.5" /></Link></div>
        </article>)}</div>
      </Container></section>

      <section className="relative overflow-hidden">
        <div className="section-muted absolute inset-0" aria-hidden="true" />
        <div className="pointer-events-none absolute left-0 top-1/4 h-80 w-80 rounded-full bg-cyan/5 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-green/5 blur-3xl" aria-hidden="true" />

        <Container className="relative py-12 lg:py-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
            <aside className="min-w-0 w-full lg:sticky lg:top-24 lg:w-64 lg:shrink-0">
              <div className="space-y-6 rounded-2xl border border-border/50 bg-white/80 p-5 shadow-sm backdrop-blur-sm sm:p-6">
                <ProductsToolbar
                  search={search}
                  onSearchChange={setSearch}
                  visibleProductCount={visibleProductCount}
                  totalProductCount={productCount}
                  hasActiveFilters={hasActiveFilters}
                  onClearFilters={clearFilters}
                />
                <ProductsCategoryFilter
                  categories={categories}
                  selectedCategoryId={categoryId}
                  onSelectCategory={setCategoryId}
                />
              </div>
            </aside>

            <main className="min-w-0 flex-1">
              {filteredCategories.length === 0 ? (
                <EmptyState
                  title={t('products.noResultsTitle')}
                  description={t('products.noResultsDescription')}
                />
              ) : (
                <div className="space-y-8">
                  {filteredCategories.map((category) => (
                    <ProductCategoryCard
                      key={category.id}
                      category={category}
                      accentIndex={categoryIndexMap.get(category.id) ?? 0}
                      searchQuery={query}
                    />
                  ))}
                </div>
              )}
            </main>
          </div>
        </Container>


        <Container className="relative pb-10"><h2 className="text-xl font-bold text-navy">{tr ? 'Ürün Bilgileri ve Kullanım Alanları' : 'Product Information and Applications'}</h2><p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{tr ? 'Ürünlerimizin kullanım alanlarını ve ürün seçimi bilgilerini ayrı sayfalarda inceleyebilirsiniz.' : 'Explore separate pages for product applications and selection information.'}</p><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{productPages.map(product => <Link key={product.slug} href={productPagePath(product)} className="rounded-xl border border-navy/10 bg-white p-4 transition hover:border-cyan/40"><h3 className="text-sm font-bold text-navy">{!tr && product.slug === 'katyonik-iyon-degisim-recinesi' ? 'Cation Exchange Resin' : product.name}</h3><p className="mt-2 text-xs leading-relaxed text-muted">{(tr ? product.tr : product.en).purpose}</p></Link>)}</div></Container>
        <ProductsPageCTA />
      </section>
    </>
  )
}
