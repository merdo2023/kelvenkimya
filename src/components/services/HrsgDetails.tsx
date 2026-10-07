import Image from 'next/image'
import { Container } from '@/components/common/Container'

export function HrsgDetails({ locale }: { locale: string }) {
  const tr = locale === 'tr'
  const phases = tr ? [
    ['Devreye Alma Öncesi', 'Yeni HRSG sistemlerinde imalat, montaj ve depolama kaynaklı yağ, gevşek kalıntı ve yüzey oksitleri değerlendirilir. Gerekli flushing, yağdan arındırma ve kimyasal temizlik aşamaları üretici gereklilikleri ve onaylı prosedüre göre planlanır.'],
    ['Bakım Dönemi', 'İşletmedeki HRSG sistemlerinde birikinti türü, işletme geçmişi ve mevcut incelemeler birlikte değerlendirilir. Temizlik ihtiyacı ve yöntem seçimi sistemin durumuna göre belirlenir; yalnızca çalışma süresine bağlı sabit bir temizlik takvimi önerilmez.'],
  ] : [
    ['Before Commissioning', 'Assess oils, loose residues and surface oxides associated with fabrication, installation and storage. Plan required flushing, degreasing and chemical stages according to manufacturer requirements and the approved procedure.'],
    ['During Maintenance', 'Assess deposits, operating history and available inspections together. Cleaning requirements and methods depend on system condition rather than a fixed operating-time interval.'],
  ]
  const steps = tr ? [
    ['Teknik hazırlık', 'P&ID, sistem metalurjisi, mevcut birikinti bilgileri ve üretici prosedürleri incelenir.'],
    ['Devre ve ekipman planı', 'Temizlenecek sınırlar, geçici bağlantılar ve sirkülasyon düzeni projeye özel belirlenir.'],
    ['Kontrollü uygulama', 'Flushing ve gerekli kimyasal aşamalar onaylı prosedür sırasıyla uygulanır.'],
    ['Analizlerle takip', 'Prosedürün gerektirdiği uygulama parametreleri ve kimyasal analizlerle süreç izlenir.'],
    ['Durulama ve son kontroller', 'Gerekli nötralizasyon ve pasivasyon dahil son işlemler, proje kabul kriterlerine göre gerçekleştirilir.'],
  ] : [
    ['Technical preparation', 'Review P&IDs, metallurgy, available deposit information and manufacturer procedures.'],
    ['Circuit and equipment planning', 'Define cleaning boundaries, temporary connections and circulation arrangements for the project.'],
    ['Controlled execution', 'Perform flushing and required chemical stages in the approved sequence.'],
    ['Analytical monitoring', 'Monitor procedure-specific application parameters and chemical analyses.'],
    ['Rinsing and final checks', 'Complete final operations, including required neutralization and passivation, against project acceptance criteria.'],
  ]
  return <section className="bg-white py-10 sm:py-14"><Container>
    <h2 className="text-2xl font-bold text-navy">{tr ? 'İki Farklı Temizlik İhtiyacı' : 'Two Different Cleaning Requirements'}</h2>
    <div className="mt-5 grid gap-5 md:grid-cols-2">{phases.map(([title, text]) => <article key={title} className="rounded-2xl border border-navy/10 bg-[#eef5f8] p-6"><h3 className="text-xl font-bold text-navy">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{text}</p></article>)}</div>
    <div className="mt-8 grid gap-6 lg:grid-cols-2">
      <article><h2 className="text-xl font-bold text-navy">{tr ? 'Temizlik İhtiyacı Nasıl Belirlenir?' : 'How Is the Need for Cleaning Assessed?'}</h2><p className="mt-3 text-sm leading-relaxed text-muted">{tr ? 'Mevcut saha incelemeleri, işletme ve su kimyası kayıtları, önceki temizlik bilgileri ve varsa boru numunesi veya birikinti analizleri birlikte değerlendirilir. Özellikle yüksek basınç evaporatörlerinde birikinti miktarı ve bileşimi, kimyasal temizlik kararına teknik girdi sağlar. Numune alma ve değerlendirme kapsamı tesis ve üretici gerekliliklerine göre netleştirilir.' : 'Consider available site inspections, operating and water-chemistry records, previous cleaning information and any tube samples or deposit analyses. Deposit loading and composition provide technical input to cleaning decisions, particularly for high-pressure evaporators. Sampling and assessment scope follows facility and manufacturer requirements.'}</p></article>
      <article><h2 className="text-xl font-bold text-navy">{tr ? 'Hangi Devreler Temizlenir?' : 'Which Circuits Are Cleaned?'}</h2><p className="mt-3 text-sm leading-relaxed text-muted">{tr ? 'Ekonomizer, evaporatör, drum ve bağlantılı devrelerin kapsama dahil olup olmadığı P&ID ve üretici prosedürü üzerinden belirlenir. HP, IP ve LP bölümlerinin malzeme ve bağlantı koşulları ayrı değerlendirilir. Kızdırıcı ve yeniden kızdırıcı gibi diğer devreler yalnızca projede tanımlanan kapsam ve prosedür doğrultusunda ele alınır.' : 'Determine whether economizers, evaporators, drums and connected circuits are included by reviewing P&IDs and manufacturer procedures. Assess HP, IP and LP materials and connections separately. Other circuits, such as superheaters and reheaters, are addressed only within the defined project scope and procedure.'}</p></article>
    </div>
    <h2 className="mt-10 text-2xl font-bold text-navy">{tr ? 'HRSG Temizlik Uygulama Sürecimiz' : 'Our HRSG Cleaning Process'}</h2>
    <ol className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{steps.map(([title, text], i) => <li key={title} className="rounded-xl border border-navy/10 p-5"><span className="text-sm font-bold text-cyan">0{i + 1}</span><h3 className="mt-3 font-bold text-navy">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{text}</p></li>)}</ol>
    <h2 className="mt-10 text-2xl font-bold text-navy">{tr ? 'Saha Arşivimizden' : 'From Our Field Archive'}</h2>
    <div className="mt-5 grid gap-5 sm:grid-cols-2">{[
      ['hrsg-field-operation', tr ? 'Tesis sahasındaki uygulama görüntüsü' : 'Field operation at the facility'],
      ['hrsg-equipment-team', tr ? 'Ekipman başında saha ekibimiz' : 'Our field team working on equipment'],
      ['hrsg-circulation-equipment', tr ? 'Sirkülasyon pompaları ve uygulama ekipmanları' : 'Circulation pumps and application equipment'],
      ['/images/projects/aksa.jpeg', tr ? 'Ekipman iç yüzey detayı · Saha arşivi' : 'Equipment internal surface detail · Field archive'],
    ].map(([name, caption]) => <figure key={name} className="overflow-hidden rounded-xl border border-navy/10"><div className="relative aspect-[4/3] bg-[#eef5f8]"><Image src={name.startsWith('/') ? name : `/images/services/${name}.jpg`} alt={caption} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-contain" /></div><figcaption className="p-3 text-xs text-muted">{caption}</figcaption></figure>)}</div>
  </Container></section>
}
