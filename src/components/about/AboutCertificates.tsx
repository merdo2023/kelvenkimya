import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/common/Container'

export function AboutCertificates({ tr }: { tr: boolean }) {
  const certificates = [
    { code: '9001', standard: 'ISO 9001:2015', number: 'QMS-015853', title: tr ? 'Kalite Yönetim Sistemi' : 'Quality Management System', scope: tr ? 'Kimyasal ürünlerin imalatı' : 'Manufacture of chemical products' },
    { code: '14001', standard: 'ISO 14001:2015', number: 'EMS-015853', title: tr ? 'Çevre Yönetim Sistemi' : 'Environmental Management System', scope: tr ? 'Kimyasal ürünlerin imalatı' : 'Manufacture of chemical products' },
    { code: '45001', standard: 'ISO 45001:2018', number: 'OHSMS-004924', title: tr ? 'İş Sağlığı ve Güvenliği Yönetim Sistemi' : 'Occupational Health and Safety Management System', scope: tr ? 'Kimyasal ürünlerin satışı' : 'Sales of chemical products' },
  ]
  return <section id="belgelerimiz" className="scroll-mt-28 bg-[#eef5f8] py-12 sm:py-16"><Container>
    <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">{tr ? 'Yönetim sistemi belgeleri' : 'Management system certificates'}</p>
    <h2 className="mt-3 text-2xl font-bold text-navy">{tr ? 'Kalite ve Belgelerimiz' : 'Quality and Our Certificates'}</h2>
    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{tr ? 'Kelven Su Şartlandırma ve Endüstriyel Temizlik Kimyasalları Sanayi Ticaret Limited Şirketi adına düzenlenen yönetim sistemi belgelerimizi kapsam ve tarih bilgileriyle inceleyebilirsiniz.' : 'Explore the management system certificates issued to Kelven Su Şartlandırma ve Endüstriyel Temizlik Kimyasalları Sanayi Ticaret Limited Şirketi, including their scope and dates.'}</p>
    <div className="mt-6 grid gap-4 lg:grid-cols-3">{certificates.map(cert => <article key={cert.code} className="rounded-2xl border border-navy/10 bg-white p-5">
      <a href={`/documents/certificates/iso-${cert.code}.pdf`} target="_blank" rel="noopener noreferrer" aria-label={`${cert.standard} PDF`} className="relative mx-auto block h-52 w-40 overflow-hidden rounded-lg border border-navy/10 bg-white transition hover:shadow-md"><Image src={`/images/about/iso-${cert.code}.webp`} alt={`${cert.standard} – ${cert.title}`} fill sizes="160px" className="object-contain" /></a>
      <h3 className="mt-5 text-lg font-bold text-navy">{cert.standard}</h3><p className="mt-1 min-h-10 text-sm font-medium text-navy">{cert.title}</p>
      <dl className="mt-4 space-y-3 text-xs leading-relaxed"><div><dt className="font-semibold text-navy">{tr ? 'Kapsam' : 'Scope'}</dt><dd className="mt-1 text-muted">{cert.scope}</dd></div><div><dt className="font-semibold text-navy">{tr ? 'Belgelendirme kuruluşu' : 'Certification body'}</dt><dd className="mt-1 text-muted">IQR International Certification Services LLC</dd></div><div><dt className="font-semibold text-navy">{tr ? 'Belge numarası' : 'Certificate number'}</dt><dd className="mt-1 text-muted">{cert.number}</dd></div><div className="grid grid-cols-2 gap-2"><div><dt className="font-semibold text-navy">{tr ? 'İlk belgelendirme' : 'Initial certification'}</dt><dd className="mt-1 text-muted">11.05.2026</dd></div><div><dt className="font-semibold text-navy">{tr ? 'Geçerlilik tarihi' : 'Validity date'}</dt><dd className="mt-1 text-muted">10.05.2027</dd></div></div></dl>
      <a href={`/documents/certificates/iso-${cert.code}.pdf`} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">{tr ? 'Belgeyi İncele (PDF)' : 'View Certificate (PDF)'}<ArrowUpRight className="h-4 w-4" /></a>
    </article>)}</div>
  </Container></section>
}
