import { Container } from '@/components/common/Container'

export function FlushingProcess({ locale }: { locale: string }) {
  const tr = locale === 'tr'
  const steps = tr ? [
    ['Teknik hazırlık', 'Sistem malzemesi, mevcut kirlenme, P&ID ve devre sınırları değerlendirilir. Temizlik ihtiyacı ve proje kabul kriterleri netleştirilir.'],
    ['Uygulama planı', 'Onaylı prosedür doğrultusunda pompa, geçici bağlantı ve sirkülasyon düzeni planlanır. Su ve kimyasal ihtiyaçları sistem koşullarına göre belirlenir.'],
    ['Saha uygulaması', 'Gevşek kalıntılar için su ile flushing uygulanır. İhtiyaç duyulan devrelerde malzemeye uygun kimyasal ön temizlik aşamaları gerçekleştirilir.'],
    ['Proses kontrolü', 'Uygulama parametreleri saha kontrolleriyle takip edilir. Kimyasal aşamalarda uygun analizlerle temizlik sürecinin ilerleyişi değerlendirilir.'],
    ['Son işlemler', 'Prosedürün gerektirdiği durulama, nötralizasyon ve pasivasyon işlemleri uygulanır. Son kontroller ve değerlendirme proje kabul koşullarına göre yapılır.'],
  ] : [
    ['Technical preparation', 'Review materials, contamination, P&IDs and circuit boundaries. Clarify cleaning requirements and project acceptance criteria.'],
    ['Application planning', 'Plan pumps, temporary connections and circulation arrangements under the approved procedure. Define water and chemical requirements for the system.'],
    ['Field execution', 'Use water flushing to remove loose residues. Perform material-compatible chemical pre-cleaning in circuits that require it.'],
    ['Process monitoring', 'Track application parameters through field checks. Use appropriate analyses to assess progress during chemical stages.'],
    ['Final operations', 'Perform rinsing, neutralization and passivation where required by the procedure. Complete final checks against project acceptance conditions.'],
  ]
  return <>
    <section id="uygulama-sureci" className="scroll-mt-28 bg-white py-10 sm:py-14"><Container>
      <h2 className="text-2xl font-bold text-navy sm:text-3xl">{tr ? 'Hazırlıktan Son Kontrollere Uygulama Sürecimiz' : 'Our Process: From Preparation to Final Checks'}</h2>
      <ol className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{steps.map(([title, description], index) => <li key={title} className="rounded-2xl border border-navy/10 bg-[#eef5f8] p-5"><span className="text-sm font-bold text-cyan">0{index + 1}</span><h3 className="mt-3 text-lg font-bold text-navy">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{description}</p></li>)}</ol>
      <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted">{tr ? 'Her projede aynı kimyasal reçete uygulanmaz. Kimyasal türü, konsantrasyon, sıcaklık, süre ve kabul kriterleri sistem koşulları ve onaylı prosedür doğrultusunda belirlenir.' : 'Each project requires its own approach. Chemical type, concentration, temperature, duration and acceptance criteria follow system conditions and the approved procedure.'}</p>
    </Container></section>

  </>
}
