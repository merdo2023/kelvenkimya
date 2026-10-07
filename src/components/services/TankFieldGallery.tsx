import Image from 'next/image'
import { Container } from '@/components/common/Container'

export function TankFieldGallery({ locale }: { locale: string }) {
  const tr = locale === 'tr'
  const photos = [
    ['tank-interior', tr ? 'Tank iç yüzeyi ve saha çalışma alanı' : 'Tank interior and field work area'],
    ['tank-field-team', tr ? 'Tank içerisinde uygulama ekibimiz' : 'Our application team inside the tank'],
    ['tank-pipe-groups', tr ? 'Proses boru grupları ve saha hazırlığı' : 'Process pipe groups and site preparation'],
    ['tank-spool-pipes', tr ? 'Sahadaki spool borular ve bağlantı parçaları' : 'Spool pipes and fittings at the site'],
  ]

  return <section className="bg-white py-10 sm:py-14"><Container>
    <h2 className="text-2xl font-bold text-navy">{tr ? 'Tank ve Boru Hattı Saha Uygulamalarımız' : 'Our Tank and Piping Field Applications'}</h2>
    <p className="mt-3 text-sm leading-relaxed text-muted">{tr ? 'Saha arşivimizden tank içi çalışma alanları, uygulama ekibimiz ve proses boru grupları.' : 'Tank work areas, our application team and process pipe groups from our field archive.'}</p>
    <div className="mt-6 grid gap-5 sm:grid-cols-2">{photos.map(([name, caption]) => <figure key={name} className="overflow-hidden rounded-xl border border-navy/10">
      <div className="relative aspect-[4/3] bg-[#eef5f8]"><Image src={`/images/services/${name}.jpg`} alt={caption} fill sizes="(min-width: 1280px) 550px, (min-width: 640px) 50vw, 100vw" className="object-contain" /></div>
      <figcaption className="p-3 text-sm text-muted">{caption}</figcaption>
    </figure>)}</div>
  </Container></section>
}
