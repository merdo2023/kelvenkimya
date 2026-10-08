import Image from 'next/image'
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import { getProjects } from '@/data/localeCatalog'
import { getProjectStats } from '@/data/projeler'
import { featuredProjectIds, getProjectImage, getProjectGroup, projectGroups, sortProjects } from '@/data/projectGroups'
import { Container } from '@/components/common/Container'
import { Link } from '@/i18n/navigation'
import { getLocalePath, type AppLocale } from '@/i18n/routing'
import { siteUrl } from '@/lib/site'
import { ProjectsPageClient } from './ProjectsPageClient'
import { AhalProjectGallery } from '@/components/projects/AhalProjectGallery'
import { AksaProjectGallery } from '@/components/projects/AksaProjectGallery'

export async function ProjectsPage({ locale }: { locale: AppLocale }) {
  const projects = sortProjects(await getProjects(locale))
  const tr = locale === 'tr'
  const stats = getProjectStats(projects)
  const pageUrl = `${siteUrl}${getLocalePath(locale, '/projelerimiz')}`
  const title = tr ? 'Endüstriyel Kimyasal Temizlik Projelerimiz' : 'Our Industrial Chemical Cleaning Projects'
  const description = tr
    ? 'Türkiye ve Türkmenistan’da HRSG, buhar kazanı, tank, boru hattı ve soğutma sistemlerinde gerçekleştirdiğimiz saha çalışmalarını inceleyin.'
    : 'Explore our field work on HRSGs, steam boilers, tanks, pipelines and cooling systems in Türkiye and Turkmenistan.'
  const featured = featuredProjectIds.flatMap(id => {
    const project = projects.find(item => item.id === id)
    return project ? [project] : []
  })
  const orderedProjects = projectGroups.flatMap(group => projects.filter(project => getProjectGroup(project) === group.id))
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'CollectionPage', '@id': `${pageUrl}#webpage`, url: pageUrl, name: title, description, inLanguage: locale, mainEntity: { '@id': `${pageUrl}#project-list` } },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: tr ? 'Ana Sayfa' : 'Home', item: `${siteUrl}${getLocalePath(locale, '/')}` },
        { '@type': 'ListItem', position: 2, name: tr ? 'Projelerimiz' : 'Our Projects', item: pageUrl },
      ] },
      { '@type': 'ItemList', '@id': `${pageUrl}#project-list`, name: title, numberOfItems: projects.length, itemListElement: orderedProjects.map((project, index) => ({
        '@type': 'ListItem', position: index + 1, url: `${pageUrl}#${project.id}`, name: project.projectName,
      })) },
    ],
  }
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <section className="relative overflow-hidden bg-navy pb-10 pt-28 text-white sm:pb-12 sm:pt-32 lg:pt-36">
      <Container>
        <nav aria-label={tr ? 'Sayfa yolu' : 'Breadcrumb'} className="mb-8 flex items-center gap-2 text-xs text-white/60">
          <Link href="/" className="transition hover:text-white">{tr ? 'Ana Sayfa' : 'Home'}</Link><span aria-hidden="true">/</span><span aria-current="page" className="text-white">{tr ? 'Projelerimiz' : 'Our Projects'}</span>
        </nav>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.18em] text-cyan"><span className="h-px w-8 bg-cyan" aria-hidden="true" />{tr ? 'Öne çıkan projemiz · Ahal, Türkmenistan' : 'Featured project · Ahal, Turkmenistan'}</p>
            <h1 className="text-sm font-semibold text-white/65">{title}</h1>
            <h2 className="mt-3 max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.4rem]">{tr ? <>Türkmenistan<br /> Ahal <span className="text-cyan">GTG Projesi</span></> : <>Turkmenistan<br /> Ahal <span className="text-cyan">GTG Project</span></>}</h2>
            <p className="mt-4 text-lg font-semibold leading-7 text-white">{tr ? 'Dünya ölçeğinde bir projede saha deneyimimiz.' : 'Our field experience on a world-scale project.'}</p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">{tr ? 'Ahal GTG, 2019’da devreye alındığında Kawasaki tarafından dünyanın en büyük doğalgazdan benzin üretim tesisi olarak tanımlandı. Rönesans–Kawasaki konsorsiyumunun gerçekleştirdiği bu projede, kendi sirkülasyon pompalarımız ve ekipmanlarımızla kimyasal temizlik çalışmalarında yer aldık.' : 'When commissioned in 2019, Ahal GTG was described by Kawasaki as the world’s largest gas-to-gasoline plant. On this project, built by the Rönesans–Kawasaki consortium, we carried out chemical cleaning work using our own circulation pumps and equipment.'}</p>
            <dl className="mt-5 grid grid-cols-2 gap-4"><div><dt className="text-xs text-white/60">{tr ? 'Benzin üretim kapasitesi' : 'Gasoline production capacity'}</dt><dd className="mt-1 text-xl font-bold text-white">{tr ? '600.000' : '600,000'} <span className="text-xs font-normal text-white/70">{tr ? 'ton/yıl' : 'tonnes/year'}</span></dd></div><div><dt className="text-xs text-white/60">{tr ? 'Doğalgaz işleme kapasitesi' : 'Natural gas processing capacity'}</dt><dd className="mt-1 text-xl font-bold text-white">{tr ? '1,785' : '1.785'} <span className="text-xs font-normal text-white/70">{tr ? 'milyar m³/yıl' : 'billion m³/year'}</span></dd></div></dl>
            <p className="mt-3 text-[11px] text-white/50">{tr ? 'Değerler tesisin tasarım kapasitesidir.' : 'Figures refer to the plant’s design capacity.'} <a href="https://global.kawasaki.com/en/corp/newsroom/news/detail/?f=20190628_1858" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">Kawasaki</a> · <a href="https://www.guinnessworldrecords.com/world-records/577863-first-gas-to-gasoline-gtg-plant" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">{tr ? 'Guinness: ilk GTG tesisi' : 'Guinness: first GTG plant'}</a></p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#ahal-saha-galerisi" className="inline-flex items-center gap-3 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:bg-cyan/15 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan">{tr ? 'Ahal saha fotoğrafları' : 'Ahal field photographs'}<ArrowDown size={17} aria-hidden="true" /></a>
              <Link href="/iletisim" className="inline-flex items-center gap-2 px-1 py-3 text-sm font-semibold text-white/90 transition hover:text-cyan">{tr ? 'Projenizi konuşalım' : 'Discuss your project'}<ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
          </div>
          <figure className="relative">
            <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10">
              <Image src="/images/projects/ahal/circulation-pumps.jpg" alt={tr ? 'Ahal GTG tesisindeki Kelven Kimya sirkülasyon pompaları ve saha bağlantıları' : 'Kelven Kimya circulation pumps and site connections at the Ahal GTG plant'} fill priority sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent px-6 pb-5 pt-16"><p className="text-xs font-semibold uppercase tracking-wider text-white/75">Ahal · {tr ? 'Türkmenistan' : 'Turkmenistan'}</p><p className="mt-1 text-lg font-semibold">GTG-INT {tr ? 'Projesi' : 'Project'}</p></div>
            </div>
            <figcaption className="mt-3 text-xs text-white/55">{tr ? 'Ahal saha arşivimizden · Kendi pompalarımız ve ekipmanlarımız' : 'From our Ahal field archive · Our own pumps and equipment'}</figcaption>
          </figure>
        </div>
        <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/15 pt-6 sm:mt-12 sm:gap-8">
          {[
            [stats.total, tr ? 'Listelenen proje' : 'Listed projects'],
            [stats.turkeyCount, tr ? 'Türkiye’de proje' : 'Projects in Türkiye'],
            [stats.turkmenistanCount, tr ? 'Türkmenistan’da proje' : 'Projects in Turkmenistan'],
          ].map(([value, label]) => <div key={label} className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-3"><dt className="order-2 max-w-36 text-xs leading-5 text-white/65 sm:text-sm">{label}</dt><dd className="order-1 text-3xl font-bold tabular-nums sm:text-4xl">{value}</dd></div>)}
        </dl>
      </Container>
    </section>


    <section id="ahal-saha-galerisi" aria-labelledby="ahal-gallery-heading" className="scroll-mt-24 border-b border-navy/10 bg-[#f3f6f8] py-14 sm:py-20">
      <Container>
        <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          <div><p className="text-xs font-semibold uppercase tracking-[.16em] text-brand-blue">{tr ? 'Ahal GTG · Rönesans / Kawasaki projesi' : 'Ahal GTG · Rönesans / Kawasaki project'}</p><h2 id="ahal-gallery-heading" className="mt-3 text-2xl font-bold text-navy sm:text-3xl">{tr ? 'Kendi ekipmanlarımız. Gerçek saha çalışmaları.' : 'Our own equipment. Real field work.'}</h2></div>
          <div><p className="text-sm leading-7 text-muted">{tr ? '2016–2019 proje kayıtlarımızda paslanmaz spool boruları, depolama tankları ve belirlenen proses sistemlerinde asidik ve alkali kimyasal temizlik çalışmaları yer alıyor. Aşağıdaki fotoğraflar Ahal projesindeki pompalarımızı, ekibimizi ve uygulama düzenimizi gösteriyor.' : 'Our 2016–2019 project records cover acidic and alkaline chemical cleaning of stainless spool piping, storage tanks and designated process systems. These photographs show our pumps, team and application arrangements on the Ahal project.'}</p><a href="#gtg-int-projesi-0" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">{tr ? 'İş kapsamını ve saha videosunu inceleyin' : 'Explore the scope and field video'}<ArrowUpRight size={16} aria-hidden="true" /></a></div>
        </div>
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {(tr ? [
            ['Paslanmaz boru grupları', 'Spool boruları ve belirlenen proses sistemlerinde asidik ve alkali kimyasal temizlik.'],
            ['Tank iç yüzeyleri', 'Depolama, oksijen ve azot tankları için tanımlanmış iş kapsamına uygun temizlik çalışmaları.'],
            ['Yüzey kontrolü ve koruma', 'Temizlik sonrası yüzey incelemesi ve temizlenen parçaların yeniden kirlenmeye karşı korunması.'],
          ] : [
            ['Stainless piping groups', 'Acidic and alkaline chemical cleaning of spool piping and designated process systems.'],
            ['Tank internal surfaces', 'Cleaning of storage, oxygen and nitrogen tanks within the defined project scope.'],
            ['Surface checks and protection', 'Post-cleaning surface inspection and protection of cleaned components from recontamination.'],
          ]).map(([heading, text]) => <article key={heading} className="rounded-xl border border-navy/10 bg-white p-5"><h3 className="text-base font-bold text-navy">{heading}</h3><p className="mt-3 text-sm leading-6 text-muted">{text}</p></article>)}
        </div>
        <aside aria-labelledby="ahal-cleaning-note-heading" className="mb-8 rounded-xl border border-brand-blue/20 bg-white p-5 sm:p-6">
          <h3 id="ahal-cleaning-note-heading" className="text-base font-bold text-navy">{tr ? 'Teknik not — Temizlik ve yüzey kontrolü' : 'Note — Cleaning and surface inspection'}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{tr ? 'Oksijenle temas eden yüzeylerdeki yağ ve gres kalıntıları yangın ve patlama tehlikesi oluşturabileceğinden, bu boru ve tankların temizliğinde yağ kalıntılarına karşı sıfır tolerans kriteri uygulandı. Temizlik sonrasında yüzeyler, özel bir kontrol lambası kullanılarak karanlık ortamda incelendi.' : 'As oil and grease residues on surfaces in contact with oxygen can present a fire and explosion hazard, cleaning of these pipes and tanks followed a zero-tolerance criterion for oil residues. After cleaning, the surfaces were inspected in darkness using a dedicated inspection lamp.'}</p>
        </aside>
        <AhalProjectGallery locale={locale} />
      </Container>
    </section>

    <section aria-labelledby="featured-projects-heading" className="bg-white py-14 sm:py-20">
      <Container>
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><p className="text-xs font-semibold uppercase tracking-[.16em] text-brand-blue">{tr ? 'Seçilmiş saha çalışmaları' : 'Selected field work'}</p><h2 id="featured-projects-heading" className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl">{tr ? 'Enerji ve proses tesislerinden projeler' : 'Projects from energy and process facilities'}</h2></div>
          <p className="max-w-sm text-sm leading-6 text-muted">{tr ? 'Farklı sistemler, farklı saha koşulları. Her projede tanımlanmış bir uygulama kapsamı.' : 'Different systems and site conditions. A defined application scope for each project.'}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map(project => <article key={project.id} className="group flex flex-col overflow-hidden rounded-xl border border-navy/10 bg-white">
            <a href={project.id === 'aksa-enerji-uretim-a-s-5' ? '#aksa-saha-galerisi' : `#${project.id}`} className="relative block aspect-[16/11] overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue" aria-label={`${project.projectName} — ${tr ? 'proje kaydını inceleyin' : 'view project record'}`}>
              <Image src={getProjectImage(project)!} alt={tr ? `${project.projectName} saha arşivi` : `${project.projectName} field archive`} fill sizes="(min-width: 768px) 380px, 100vw" className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" />
              <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-md bg-navy/85 px-3 py-2 text-xs font-medium text-white"><MapPin size={13} aria-hidden="true" />{project.location}</span>
            </a>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-blue">{getProjectGroup(project) === 'process' ? (tr ? 'Tanklar ve boru hatları' : 'Tanks & pipelines') : (tr ? 'Kazan sistemleri' : 'Boiler systems')}</p>
              <h3 className="mt-3 text-xl font-bold text-navy">{project.projectName}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>
              <a href={project.id === 'aksa-enerji-uretim-a-s-5' ? '#aksa-saha-galerisi' : `#${project.id}`} className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-brand-blue transition hover:text-navy">{tr ? 'Proje kaydını inceleyin' : 'View project record'}<ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </article>)}
        </div>
      </Container>
    </section>

    <section id="aksa-saha-galerisi" aria-labelledby="aksa-gallery-heading" className="scroll-mt-24 border-t border-navy/10 bg-white py-14 sm:py-20">
      <Container>
        <div className="mb-8 grid items-start gap-7 lg:grid-cols-[.9fr_1.1fr] lg:gap-14">
          <div><p className="text-xs font-semibold uppercase tracking-[.16em] text-brand-blue">{tr ? 'Aksa Enerji · Antalya' : 'Aksa Energy · Antalya'}</p><h2 id="aksa-gallery-heading" className="mt-3 text-3xl font-bold tracking-tight text-navy">{tr ? 'Ünite 5 ve 6’da HRSG kimyasal temizliği' : 'HRSG chemical cleaning in units 5 and 6'}</h2><p className="mt-4 text-sm leading-7 text-muted">{tr ? 'Aksa Enerji Antalya kombine çevrim santralinin 5 ve 6 numaralı ünitelerindeki HRSG kimyasal temizlik çalışmalarından saha kayıtları. Kazan iç yüzeyleri, tambur ve boru düzeni ile uygulama aşamasını gösteren fotoğraflar 2011 tarihli proje arşivimizden.' : 'Field records from HRSG chemical cleaning in units 5 and 6 at the Aksa Energy Antalya combined-cycle power plant. These photographs from our 2011 project archive show internal surfaces, drum and pipe arrangements, and a treatment stage.'}</p><a href="#aksa-enerji-uretim-a-s-5" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">{tr ? 'Proje kaydını inceleyin' : 'View the project record'}<ArrowUpRight size={16} aria-hidden="true" /></a></div>
          <div className="rounded-xl bg-navy p-6 text-white sm:p-8"><p className="text-xs font-semibold uppercase tracking-wider text-cyan">{tr ? 'Tesis ölçeği' : 'Facility scale'}</p><p className="mt-3 text-5xl font-bold tracking-tight">820 <span className="text-xl font-semibold text-white/65">MW</span></p><p className="mt-3 text-sm leading-6 text-white/75">{tr ? 'Proje belgesinde belirtilen santral kapasitesi. Kimyasal temizlik referansının kapsamı Ünite 5 ve Ünite 6 HRSG sistemleridir.' : 'Power plant capacity stated in the project document. The chemical cleaning reference covers the HRSG systems in units 5 and 6.'}</p><Link href="/hizmetlerimiz/endustriyel-kimyasal-temizlik/hrsg-kimyasal-temizligi" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan">{tr ? 'HRSG temizlik hizmetimizi inceleyin' : 'Explore our HRSG cleaning service'}<ArrowUpRight size={16} aria-hidden="true" /></Link></div>
        </div>
        <AksaProjectGallery locale={locale} />
      </Container>
    </section>

    <ProjectsPageClient projects={projects} />
  </>
}