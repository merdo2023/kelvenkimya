import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { cleaningBasePath, cleaningContent, cleaningServices } from '@/data/cleaningServices'

export function CleaningServiceCards({ locale, excludeSlug }: { locale: string; excludeSlug?: string }) {
  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{cleaningServices.filter(service => service.slug !== excludeSlug).map(service => {
    const content = cleaningContent(service, locale)
    return <Link key={service.slug} href={`${cleaningBasePath}/${service.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-cyan/30 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-cyan">
      <div className="relative aspect-[16/9]"><Image src={service.image} alt={content.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" aria-hidden="true" /></div>
      <div className="flex flex-1 flex-col p-5"><h3 className="text-xl font-bold text-navy">{content.title}</h3><p className="my-3 text-sm leading-relaxed text-navy/65">{content.summary}</p><span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">{locale === 'tr' ? 'Hizmeti İncele' : 'Explore Service'}<ArrowRight className="h-4 w-4" /></span></div>
    </Link>
  })}</div>
}
