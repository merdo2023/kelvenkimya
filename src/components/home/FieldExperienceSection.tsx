import Image from 'next/image'
import { ArrowRight, MapPin } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Container } from '../common/Container'
import { routes } from '@/data/routes'
import type { AppLocale } from '@/i18n/routing'
import type { ProjectItem } from '@/types/locale'

const featuredProjects = [
  { id: 'gtg-int-projesi-0', image: '/images/projects/ahal.jpeg', tr: 'GTG-INT · Ahal', en: 'GTG-INT · Ahal', trScope: ['Paslanmaz Boru Hatları', 'Tanklar', 'Asidik ve Alkali Temizlik'], enScope: ['Stainless Piping', 'Tanks', 'Acidic & Alkaline Cleaning'] },
  { id: 'mary-amonyak-sanayi-tesisi-1', image: '/images/projects/mary.jpeg', tr: 'Mary Amonyak Sanayi Tesisi', en: 'Mary Ammonia Plant', trScope: ['Atık Isı Kazanları', 'Buhar Kazanları', 'Kimyasal Temizlik'], enScope: ['Waste Heat Boilers', 'Steam Boilers', 'Chemical Cleaning'] },
  { id: 'aksa-enerji-uretim-a-s-5', image: '/images/projects/aksa.jpeg', tr: 'Aksa Enerji · Antalya', en: 'Aksa Energy · Antalya', trScope: ['HRSG', 'Ünite 5 ve 6', 'Kimyasal Temizlik'], enScope: ['HRSG', 'Units 5 & 6', 'Chemical Cleaning'] },
]

export function FieldExperienceSection({ projects, locale }: { projects: ProjectItem[]; locale: AppLocale }) {
  const tr = locale === 'tr'
  return (
    <section id="saha-deneyimimiz" className="relative overflow-hidden bg-[#071525] py-14 sm:py-16 lg:py-20 scroll-mt-28">
      <div className="pointer-events-none absolute inset-0 industrial-grid opacity-10" aria-hidden="true" />
      <Container className="relative">
        <div className="mx-auto mb-9 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan">{tr ? 'Türkiye ve Türkmenistan’dan saha çalışmaları' : 'Field work in Turkey and Turkmenistan'}</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{tr ? 'Endüstriyel Kimyasal Temizlikte Saha Deneyimimiz' : 'Our Field Experience in Industrial Chemical Cleaning'}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">{tr ? 'Enerji ve proses tesislerinde boru hatlarından tanklara, buhar kazanlarından HRSG sistemlerine uzanan kimyasal temizlik çalışmalarımızdan örnekler.' : 'Examples of our chemical cleaning work in energy and process facilities, covering piping, tanks, steam boilers and HRSG systems.'}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredProjects.map(feature => {
            const project = projects.find(item => item.id === feature.id)
            if (!project) return null
            const title = tr ? feature.tr : feature.en
            return (
              <article key={feature.id} className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05]">
                <div className="relative aspect-[16/10]">
                  <Image src={feature.image} alt={tr ? `${title} kimyasal temizlik çalışmasından saha görüntüsü` : `Field photograph from chemical cleaning work at ${title}`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071525]/70 to-transparent" aria-hidden="true" />
                  <p className="absolute bottom-4 left-5 flex items-center gap-1.5 text-xs font-semibold text-white"><MapPin className="h-3.5 w-3.5" aria-hidden="true" />{project.location}</p>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <ul className="my-4 flex flex-wrap gap-1.5">{(tr ? feature.trScope : feature.enScope).map(scope => <li key={scope} className="rounded-full border border-cyan/20 bg-cyan/10 px-2.5 py-1 text-[10px] font-semibold text-cyan">{scope}</li>)}</ul>
                  <p className="text-sm leading-relaxed text-white/70">{feature.id === 'aksa-enerji-uretim-a-s-5' ? (tr ? 'Proje dokümanında 820 MW kapasiteli olarak belirtilen Aksa Enerji Antalya santralinin 5 ve 6 numaralı ünitelerindeki HRSG sistemlerinde kimyasal temizlik uygulamaları gerçekleştirilmiştir.' : 'Chemical cleaning was carried out on HRSG systems in units 5 and 6 of the Aksa Energy Antalya power plant, listed in the project documentation as having a capacity of 820 MW.') : project.description}</p>
                </div>
              </article>
            )
          })}
        </div>
        <div className="mt-8 text-center"><Link href={routes.projects} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-green px-6 py-3 text-sm font-bold text-white shadow-md">{tr ? 'Projelerimizi İnceleyin' : 'Explore Our Projects'}<ArrowRight className="h-4 w-4" /></Link></div>
      </Container>
    </section>
  )
}
