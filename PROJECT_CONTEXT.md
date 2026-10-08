# Kelven Kimya — Proje Bağlamı

İnceleme: 8 Ekim 2026, Europe/Istanbul.

## Kapsam ve sınırlar

Bu kayıt kaynak dosyaları, README, yerel Git geçmişi, veri/rota envanteri ve proje içindeki teknik notlara dayanır. Eski sohbetin tamamına erişilmedi; dosyalardan doğrulanamayan kararlar varsayılmadı. Şirket beyanları bağımsız doğrulama sayılmaz.

Bu tur yalnızca PROJECT_CONTEXT.md oluşturuldu. Mevcut tasarım, içerik ve dosyalar korunmuştur. Commit, push veya yayın yapılmadı. Aşağıdaki “mevcut” ifadesi kodda uygulanmış anlamındadır; nihai kabul veya canlı yayın anlamına gelmez.

Kaynak envanteri ve ana sayfa/veri/bileşen akışları incelendi. Tüm görsellerin tek tek görsel QA'sı, tüm PDF sayfalarının yeniden okunması, tüm videoların izlenmesi ve tarayıcıda masaüstü/mobil test yapılmadı. node_modules, .next ve tmp içindeki yardımcı paketler ürün kaynak kodu olarak değerlendirilmedi.

## Güncel teknoloji

- package.json: Next.js 15, React 19, TypeScript, Tailwind CSS 4, next-intl 4, Framer Motion, Lucide React. Bunlar sürüm aralıklarıdır.
- app/: App Router sayfaları, locale layout, globals.css, sitemap/robots.
- src/views/, src/components/, src/data/, src/hooks/, src/lib/, src/i18n/, src/types/: aktif uygulama katmanları.
- messages/tr.json ve messages/en.json gerçek çeviri/katalog dosyaları. Yeni sayfalarda TSX/veri dosyalarında doğrudan TR/EN metinler de bulunuyor.
- npm run dev = next dev; build = next build; start = next start. preview scripti yok.
- TR varsayılan, EN ikinci dil. localePrefix: as-needed; TR URL'ler / ve /urunlerimiz vb.; EN /en/... . İngilizcede de Türkçe slug'lar kullanılıyor.
- NEXT_PUBLIC_SITE_URL yoksa https://kelvenkimya.com kullanılıyor; bu, canlı yayının kanıtı değildir.

README güncel değil: Vite, React Router, i18next, localhost:5173, src/locales, src/pages ve npm run preview bilgileri mevcut kodla uyuşmuyor. /references anlatımı da güncel /projelerimiz ile uyuşmuyor. README değiştirilmedi.

## Git ve korunacak çalışma ağacı

Başlangıç dalı main; HEAD 1b887ce, yerel origin/main aynı committe. Fetch yapılmadı; gerçek uzak sunucu durumu doğrulanmadı. Son commit: Add ISO certificate section to about page, 8 Ekim 2026.

Yerel tüm commit listesi incelendi. Başlıca aşamalar: ilk Next.js sürümü; Türkçe rotalar/yönlendirmeler; ana sayfa hizmet/ürün/saha bölümleri; kimyasal temizlik detayları; flushing/HRSG/tank fotoğrafları ve mobilizasyon; kazan/soğutma şartlandırma sayfaları; ürün detayları/ambalajlar/menüler; hakkımızda saha görselleri ve ISO belgeleri.

Önceden mevcut modified dosyalar:

- package-lock.json
- src/components/projects/ProjectCard.tsx
- src/views/ProjectsPageClient.tsx
- tsconfig.tsbuildinfo

Önceden mevcut untracked çalışmalar:

- app/[locale]/tasarim/, src/data/projectGroups.ts, src/components/home/SectorsSection.tsx
- docs/alkalen-teknik-referans.md, ferlin-teknik-referans.md, kelven-kimya-hizmet-bilgisi.md, product-bulletins/, sector-image-sources.md, sektor-karsilastirmasi.md, steam-boiler-image-source.md, urun-teknik-bulten-incelemesi.md
- public/images/about/field-pipe.jpg, field-team.jpeg, pipe-surface.jpg; public/images/redesign/, sectors/; public/images/services/flushing-pipe-exterior.jpeg
- tmp/: dönüşüm betikleri, PDF sayfa görüntüleri, görsel/video inceleme çıktıları, SEO HTML/XML kayıtları ve yardımcı paketler.

Bu çalışmalar silinmemeli veya üzerine yazılmamalı. tmp betikleri çalıştırılmadı; eski çıktılar güncel test sonucu sayılmadı. package-lock status modified olsa da diff istatistiğinde içerik değişikliği görünmedi.

## Sayfalar ve mevcut işlevler

| Bölüm | Kodda mevcut | Eksik veya inceleme bekleyen |
| --- | --- | --- |
| Ana sayfa | Hero, istatistikler, hizmetler, temizlik ürünleri, saha deneyimi, hakkımızda önizlemesi, müşteri referansları, iletişim CTA | SectorsSection dosyası var fakat HomePage'e bağlanmamış |
| Hizmetler | Kimyasal temizlik uygulamaları ve tamamlayıcı hizmetler; ürün ve hizmet bağlantıları | Su hazırlama/laboratuvar gibi alanlar genel sayfada bölümler; her biri için ayrı detay rotası yok |
| Kimyasal temizlik | Ana sayfa ve 6 detay; kapsam, teknik hazırlık, süreç, referanslar, HRSG/flushing özel bölümleri, tank galerisi | Mobilizasyon ayrı sayfa değil, #mobilizasyon bölümü; nihai şirket metin onayı bilinmiyor |
| Su şartlandırma | Kazan suyu ve soğutma kulesi suyu için 2 detay sayfası; ilgili ürün bağlantıları | Her katalog ürünü için ayrı detay sayfası yok |
| Temizlik ürünleri hizmet sayfası | Ferlin/Alkalen sunumu ve bağlantıları | Bülten/SDS indirme akışı tamamlanmış değil |
| Ürün kataloğu | TR/EN: 12 kategori, 59 katalog kaydı; arama, kategori ve hash filtresi, modal/görsel bileşenleri | 59 kayıt benzersiz ürün sayısı değildir; sadece 16 özel detay rotası var |
| Ürün detayları | Amaç, uygulamalar, teknik bilgiler/ambalaj, ilgili ürün/hizmetler, teklif CTA, breadcrumb JSON-LD | Polyquest K Serisi ve reçinede fotoğraf yerine ikon; catalogNames boş. ProductPageView PDF/SDS indirme bağlantısı sunmuyor |
| Projeler | TR/EN: 22 kayıt, ülke filtresi, istatistik, kart ve bazı videolar; mevcut çalışma ağacında 6 uygulama grubu | Gruplandırma commit edilmemiş; /projelerimiz/[slug] yok; Ahal/Mary/Aksa ayrı vaka sayfaları yok |
| Hakkımızda | Saha ekibi kapak, 5 hizmet, teknik süreç, saha fotoğrafları, ekipman bağlantısı, 3 ISO PDF/önizlemesi | Deneyim tarihi ve belge kapsamlarının son teyidi gerekli |
| İletişim | Telefonlar, e-posta, adres, Google Maps bölümü; ortak WhatsApp düğmesi | Form/backend/CRM talep kaydı yok; ürün adı genel iletişim bağlantısına otomatik taşınmıyor |
| Tasarım önizlemesi | /tasarim, ayrı preview.css, saha görselleri, hizmet/proje/süreç/tedarik bölümleri, noindex/nofollow | Ana sayfanın yerini almıyor; Türkçe sabit metinli, İngilizce uyarlaması yok. Kullanıcı kabulü bilinmiyor |

Kimyasal temizlik slug'ları: on-temizlik-flushing, hrsg-kimyasal-temizligi, buhar-kazani-kimyasal-temizligi, sogutma-kulesi-kimyasal-temizligi, esanjor-kondenser-kimyasal-temizligi, tank-boru-hatti-kimyasal-temizligi.

Ürün detay slug'ları: kelvenoks-ferlin-123, kelvenoks-ferlin-124, kelvenoks-ferlin-128, kelvenoks-ferlin-130, alkalen-np-100, kelvenoks-ferlin-101, kelvenoks-ferlin-150, polyquestamin, polyox-432, polyquest-k-serisi, org-311, abacid-microbiosid, monoetilen-glikol, katyonik-iyon-degisim-recinesi, alkelen-np150, carbohydrazide.

Proje grupları: HRSG/atık ısı kazanları, buhar kazanları, soğutma kuleleri/devreleri, kondenser/eşanjörler, tank/boru/proses, su hazırlama. getProjectGroup bilinmeyen ID için process grubuna düşüyor; gelecekteki projelerde sınıflandırma kontrol edilmeli.

## Varlıklar ve kaynaklar

src/app/messages envanteri 134 dosya; TS/TSX/CSS/JSON toplam yaklaşık 11.133 satır. public envanteri 124 dosya: marka/favicon/OG, ürün/referans/hizmet/saha/sektör görselleri, 5 MP4, 3 ISO PDF.

Kaynak/JSON içindeki düz yazılmış /images/, /videos/, /documents/ dosya yollarında eksik dosya bulunmadı. Dinamik şablon yolları ve uzak kaynaklar bu kontrolün dışındadır. site-team-cover.webp görsel olarak açıldı: tesiste insanları gösteren saha fotoğrafı. Hukuki sahiplik veya kişilerin şirket rolü görselden varsayılmadı.

- docs/sector-image-sources.md: Pexels stok fotoğrafları; Kelven saha fotoğrafları değildir.
- docs/steam-boiler-image-source.md: kazan görselinin dış kaynak kaydı.
- docs/product-bulletins/manifest.json: 16 PDF kaydı; 14 ürün bülteni ve aynı hash ile mükerrer işaretlenmiş 2 hizmet sunumu. Hash'ler bu tur yeniden hesaplanmadı.
- Teknik notlar: ferlin-teknik-referans.md, alkalen-teknik-referans.md, urun-teknik-bulten-incelemesi.md.
- Hizmet kaynakları: kelven-kimya-hizmet-bilgisi.md, chemical-cleaning-pages.md.
- Yön önerileri: sektor-karsilastirmasi.md. Bu belge öneriler içerir; her önerinin kullanıcı tarafından kabul edildiği varsayılmamalı.

Eski notlardaki “site henüz değiştirilmedi” veya “ürün sayfaları hazırlanacak” gibi durum cümleleri güncel kodla örtüşmüyor. Güncel uygulama için kod ve bu kayıt esas alınmalı; teknik teyit notları korunmalı. Önceki about/services/home bileşenleri, src/assets/vite.svg ve özgün JPEG/WebP varyantları mevcut; dosyanın bulunması aktif sayfada kullanıldığı anlamına gelmez.

## Açık içerik teyitleri

1. Kaynak notlarda 1968, sitede 1985/40+ yıl: şirket kuruluşu, ekip deneyimi ve önceki şirket referanslarının ayrımı açık değil.
2. Ferlin 135 bülteni kodda Ferlin 101 ile eşleştirilmiş; 135 URL'si 101'e yönlendiriliyor. Git'te eşleştirme commit'i var; teknik eşdeğerliğin bağımsız doğrulaması değil.
3. ABACID/ABACIDE, Kelvenoks150/Ferlin150, Alkalen/Alkelen adları ve katalog/bülten eşleşmeleri teyit edilmeli.
4. Bültenler farklı ambalajlar içeriyor; Git'te standart ambalaj düzenlemeleri var. Güncel tedarik seçenekleri ile kaynak ambalaj farkları teyit edilmeli.
5. Alkalen NP-100 alkali tanımı/asidik pH tablosu, Ferlin128 Cu satırları, Ferlin130 sürekli şartlandırma iddiaları açık teknik konular.
6. Polyquestamin doz birimi/oksijen tutucu iddiası, glikol donma tablosu ve reçine yoğunluk birimi; güncel SDS, bülten sürümü ve dayanak test raporları teyit bekliyor.
7. MW değerleri tesis kapasitesidir; temizlenen ekipman kapsamı veya sonuç garantisi değildir. Proje kaydı güncel ortaklık anlamına gelmez.
8. ISO bileşeni IQR, belge numaraları, ilk belgelendirme 11.05.2026 ve geçerlilik 10.05.2027 tarihlerini gösteriyor. PDF'ler mevcut; kuruluş üzerinden güncel geçerlilik doğrulaması yapılmadı.

Mevcut metinler silinmedi; açık konular doğrulanmadan yeni iddia eklenmemeli.

## Doğrulama sonuçları

- npx tsc --noEmit --incremental false: başarılı, çıkış kodu 0. tsbuildinfo yazılmadı.
- npm run lint: başarısız; ESLint 9.39.4 yeni eslint.config.js/mjs/cjs arıyor, projede eski .eslintrc.json var. Kurulum hatası nedeniyle kaynak kuralları denetlenemedi. Yapılandırma değiştirilmedi.
- Production build, Lighthouse ve tarayıcı QA bu tur yapılmadı. .next ve tmp SEO kayıtları güncel başarı kanıtı değildir.
- Lighthouse prod scripti POSIX env ataması kullanıyor; Windows uyarlaması gerekebilir.
- Canonical/hreflang, sitemap, robots, organizasyon ve ürün breadcrumb JSON-LD mevcut. Genel lastModified 2025-06-01; ürün detayları 2026-10-08. Genel tarih 2026 değişikliklerini yansıtmıyor.
- VideoModal Escape/kapatma/scroll kilidi içeriyor; odak tuzağı, odak geri yükleme ve gerçek altyazı kaynağı görünmüyor; klavye/erişilebilirlik testi gerekli.
- Hosting/canlı sürüm, analitik/dönüşüm ölçümü ve eski sohbetin nihai tasarım onayı doğrulanmadı.

## Önerilen devam sırası — uygulanmadı

1. Analiz üzerinden kaydedilmemiş proje gruplandırması ve /tasarim önizlemesinin yönünü belirlemek.
2. README/lint güncellemesi; production build, TR/EN rotalar, menüler, filtreler, modallar ve mobil görünüm kontrolü.
3. Teknik ad/ambalaj/uygulama teyitleri; yayımlanabilir bülten/SDS bağlantıları.
4. Belgelendirilmiş kapsamla Ahal/Mary/Aksa vaka sayfaları; istenirse sektör bölümünün bağlanması.
5. Ürün/hizmet bağlamının talep akışına taşınması; form/CRM gereksinimi kullanıcı tercihiyle belirlenmeli.

Kullanıcının bu tur talebi analiz ve bağlam kaydıdır. Uygulama, silme, yeniden tasarım veya yayına geçilmemelidir.
## 9 Ekim 2026 — Projeler sayfası düzenlemesi

Kullanıcı profesyonel/SEO uyumlu proje düzenlemesi ve birlikte değerlendirmek için önizleme istedi. Yerel uygulama yapıldı; commit/push/yayın yapılmadı.

- Yeni sunucuda oluşturulan giriş: Ahal saha görseli, açıklayıcı H1, proje sayıları, arşiv ve iletişim bağlantıları.
- Ahal, Mary ve Aksa için seçilmiş proje kartları; mevcut proje açıklamaları korundu.
- Arşiv: uygulama alanı navigasyonu, ülke filtresi, proje/konum/metin araması, sıfırlama ve ilgili hizmet bağlantıları.
- Komando Tugay kaydı için Isıtma ve Su Tesisatı Devreleri grubu eklendi; artık tank/proses varsayılan grubuna düşmüyor. Mevcut 6 grup korunuyor, toplam 7 grup var.
- Kartlar tam açıklama ve tüm kapsam öğelerini gösteriyor; videolar korunuyor. İçeriği başlangıçta görünmez yapan animasyon kaldırıldı. Ülke düğmeleri aria-pressed kullanıyor; sonuç sayısı canlı durum alanı.
- Proje hash bağlantıları arşiv filtrelerini sıfırlayıp hedef kaydı gösteriyor.
- TR/EN SEO başlıkları ve açıklamaları; CollectionPage, ItemList ve BreadcrumbList JSON-LD; proje sitemap tarihi 2026-10-09. Canonical/hreflang yapısı korundu.
- Önceki dosyaların kopyaları tmp/projects-redesign-20261009/ altında; TS/TSX yedekleri .bak uzantısıyla derleme kapsamı dışında.

Kontrol: TypeScript başarılı; TR/EN HTTP 200; tek H1; tüm 22 kayıt ilk HTML'de; 22 ItemList öğesi; CollectionPage/breadcrumb/canonical doğrulandı. Her iki dilde projects.items dizileri eski kopyayla birebir aynı. Dört kullanılan proje görseli HTTP 200. Production build ve tarayıcıda mobil/etkileşim QA yapılmadı; bağlı tarayıcı bulunamadı. Arama/filtre davranışı kaynak üzerinden incelendi, tarayıcıda tıklanarak test edilmedi.

Önizleme: http://localhost:3000/projelerimiz ve http://localhost:3000/en/projelerimiz. Sonraki adım kullanıcıyla görsel düzeni değerlendirmek ve istenen revizyonları yapmak.
## 9 Ekim 2026 — Ahal GTG önceliği ve kullanıcı fotoğrafları

Kullanıcı Ahal'ın en üstte öne çıkarılmasını ve dört Rönesans klasörü fotoğrafının Ahal saha arşivi olarak kullanılmasını istedi; pompaların kendilerine ait olduğunu belirtti.

- Projeler girişinde Ahal GTG ana odak; DSC_0012.jpg pompa fotoğrafı kapakta. GTG-INT kartı da aynı fotoğrafı kullanıyor. Önceki görseller silinmedi.
- Dört özgün JPEG public/images/projects/ahal/ altında circulation-pumps.jpg, field-team-pipe.jpg, pipe-circulation.jpg, field-application.jpg adlarıyla kopyalandı; kullanıcının orijinalleri değişmedi.
- AhalProjectGallery: tüm fotoğraflar, açıklayıcı TR/EN alt metinler, doğal yönlerini koruyan sunum, native dialog ile büyütme/Escape ve kapatma.
- Reklam metni: 2019 açılışında Kawasaki'nin dünyanın en büyük GTG tesisi tanımı; 600.000 ton/yıl benzin ve 1,785 milyar m³/yıl doğalgaz tasarım kapasitesi. Tüm sanayi tesisleri arasında en büyük fiziksel hacim iddiası kullanılmadı. Rönesans–Kawasaki konsorsiyumu ile Kelven'in kimyasal temizlik iş kapsamı ayrı anlatıldı.
- Kaynaklar: https://global.kawasaki.com/en/corp/newsroom/news/detail/?f=20190628_1858 ; https://ronesans.com/projeler/altyapi-grubu/dogalgazdan-benzin-uretim-tesisi-gtg-projesi ; https://www.guinnessworldrecords.com/world-records/577863-first-gas-to-gasoline-gtg-plant . Guinness kaydı ilk GTG tesisidir, en büyük kaydı olarak sunulmamalı.
- TypeScript başarılı. TR/EN HTTP 200, tek H1, dört galeri fotoğrafı, 22 kayıt ve Rönesans videosu HTML'de doğrulandı. İki portre fotoğrafının Next Image çıktısı dikey olarak doğrulandı. Tarayıcıda görsel/modal etkileşim testi yapılmadı; bu oturumda bağlı tarayıcı yok.
- Önceki ProjectsPage ve projectGroups sürümleri tmp/projects-redesign-20261009/ altında .bak kopyalarında korundu. Commit/push/yayın yapılmadı.
## 9 Ekim 2026 — PDF incelemesi ve Aksa saha galerisi

- Kelven_Kimya_Chemical_Cleaning_Services_EN (1).pdf belgesinin 28 sayfası metin ve görseller üzerinden incelendi. Kaynak: C:/Users/Administrator/Downloads/Kelven_Kimya_Chemical_Cleaning_Services_EN (1).pdf.
- Ahal bölümüne paslanmaz spool, depolama/oksijen/azot tankları ve yüzey kontrolü/yeniden kirlenmeden korunma kapsam kartları TR/EN eklendi. PDF'deki 2016 teklif miktarları tamamlanmış iş veya güncel ekipman envanteri olarak yayımlanmadı.
- PDF sayfa 22–23 içindeki dört özgün Aksa fotoğrafı public/images/projects/aksa/ klasörüne çıkarıldı: hrsg-internal-surface.jpeg, hrsg-drum-internals.jpeg, hrsg-drum-piping.jpeg, hrsg-treatment-stage.jpeg. Kaynak PDF değiştirilmedi.
- Aksa Antalya için 2011 saha arşivi, HRSG ünite 5 ve 6 kapsamı ve büyütülebilen dört fotoğraflı AksaProjectGallery eklendi. 820 MW tesis kapasitesi olarak açıklandı; Kelven iş kapsamı tüm tesise genişletilmedi. Görseller öncesi/sonrası veya kabul sonucu olarak etiketlenmedi.
- Aksa proje kartı PDF fotoğrafını kullanıyor; öne çıkan kart yeni galeriye bağlanıyor. Mevcut 22 proje kaydı, videolar ve eski görseller korundu.
- Kontrol: npx tsc --noEmit --incremental false başarılı; TR/EN sayfaları HTTP 200, tek H1, 22 kayıt, iki galeri ve yapılandırılmış veri doğrulandı. Dört yeni görsel HTTP 200; TR/EN projects.items eski kopyalarla birebir aynı.
- Tarayıcıda görsel/etkileşim kontrolü ve production build yapılmadı. Commit, push ve yayın yapılmadı.
- Önizleme: http://localhost:3000/projelerimiz#aksa-saha-galerisi.
## 9 Ekim 2026 — Mersin Soda kullanıcı fotoğrafı

- Kullanıcı IMG_2776.JPG fotoğrafının Mersin Soda olduğunu doğruladı; kaynak klasör adı Aksa olmasına rağmen Aksa ile eşleştirilmedi.
- Özgün dosya değiştirilmeden public/images/projects/mersin-soda/facility-overview-2009.jpg konumuna kopyalandı ve mersin-soda-sanayi-a-s-4 kartında tesis arşiv görseli olarak kullanıldı.
- Fotoğraftaki 15/10/2009 tarihi proje tamamlanma tarihi olarak yorumlanmadı. Ünite eşleştirmesi doğrulanmış değildir; görsel genel tesis saha fotoğrafıdır. 2019 yılı bulunan diğer Mersin kaydı ve mevcut video korunmuştur. Proje açıklamaları ve kapasite bilgileri değişmedi.
## 9 Ekim 2026 — Ahal oksijen devreleri teknik notu

- Kullanıcının sağladığı İngilizce temizlik/yüzey inceleme notu Ahal GTG galerisinin önüne TR/EN olarak eklendi.
- Not, oksijenle temas eden boru ve tank yüzeylerindeki yağ/gres kalıntılarına karşı sıfır tolerans kriterini ve temizlik sonrası karanlıkta özel kontrol lambasıyla incelemeyi anlatır. Genel hizmet garantisi veya sertifika iddiası eklenmedi.
## 9 Ekim 2026 — Kullanıcının istediği sıralama

- Öne çıkan üç proje ve HRSG arşivinin başlangıcı Mary → Aksa Enerji → fotoğraflı Mersin Soda olarak sıralandı. Diğer kayıtların kendi aralarındaki sırası korundu. Ahal üst tanıtımı korundu.
- Tank, Boru Hatları ve Proses Sistemleri grubu HRSG'den sonra ikinci sıraya taşındı; menü ve yapılandırılmış veri aynı sırayı kullanıyor.
- Mersin Soda video bağlantısı TR/EN kayıtlarından kaldırıldı. Özgün /videos/mersin.mp4 dosyası silinmedi.

## 9 Ekim 2026 — GTG kartının yanında video

- Kullanıcının ekran görüntüsündeki proses grubu boş alanına GTG videosu eklendi. Masaüstünde proje kartı ve yerleşik kontrollü video yan yana, mobilde alt alta. Otomatik oynatma yok; preload none ve mevcut pompa fotoğrafı poster olarak kullanılıyor. Mevcut büyütülmüş video düğmesi korundu.

## 9 Ekim 2026 — SEO denetimi ve yerel düzeltmeler

- Canlı 36 TR sayfa ve yerel 72 TR/EN sayfa denetlendi; rapor docs/seo-audit-2026-10-09.md. Manuel teknik SEO puanı canlı 72/100, yerel 88/100; Google/Lighthouse veya sıralama puanı değil. Search Console, backlink ve Core Web Vitals ölçülmedi.
- www canonical/sitemap/robots/schema adresi, URL tabanlı sabit dil davranışı, iki dilli sitemap, doğrulanamayan genel lastmod tarihinin kaldırılması, ana/hizmet SEO başlıkları, ilk HTML sayaç değerleri ve 18 hizmet sayfasında Service/BreadcrumbList JSON-LD tamamlandı.
- 72 yerel sayfa HTTP 200/tek H1; 79 iç bağlantıda kırık yok. TypeScript ve npm run build başarılı. İlk development taramasında geçici üç 500 yanıt seri tekrarda 200 döndü; üretim derlemesi başarılı.
- Mevcut tasarım ve içerikler korundu. Bu SEO turunda commit/push veya yayın yapılmadı. Sonraki işler: canlı yayın doğrulaması, Search Console, mobil hız ölçümü, doğrulanmış bilgilerle ayrı proje sayfaları ve teknik içerik geliştirme.
## 9 Ekim 2026 — İkinci SEO denetimi

- 21734ef canlıda doğrulandı: 72 URL HTTP 200/tek H1/www canonical; 18 Service sayfası, sabit TR URL. Güncel canlı manuel puan 88/100.
- 20 ürünün kısa iki dilli SEO başlıkları, ortak İngilizce ürün isimleri, kısa hakkımızda başlıkları, WebSite ve ürün kataloğu CollectionPage/ItemList/BreadcrumbList tamamlandı. Yerel manuel puan 90/100; Google/Lighthouse puanı değildir.
- TypeScript ve production build başarılı. Üretim 72 sayfada JSON-LD parse edildi; iki katalogda 20'şer ürün bağlantısı var. Kanıt tmp/seo-audit-20261009/build-followup.json.
- İkinci turda commit/push yapılmadı. Hesap erişimi gereken Search Console/Business Profile ve mobil saha hız ölçümü halen doğrulanmamıştır. Detaylar SEO raporunun ikinci denetim bölümünde.

## 9 Ekim 2026 — Yönlendirme ve tarama denetimi
- Canlı /en/projects 308 ile /en/projelerimiz adresine yönleniyor; ayrı ikinci sayfa değil. 22 hizmet URL'sinde TR/EN/canonical/hreflang doğru. Robots ve 72 URL sitemap HTTP 200.
- Kullanıcının istediği eski sayfa 301 yönlendirmeleri next.config.ts içinde hazır; TR eski yollar doğrudan öneksiz hedefe gider. Production build ve geçici sunucuda HTTP 301 kontrolleri başarılı. Push yapılmadı.
- Search Console erişimi yok; gerçek taranma/indekslenme doğrulanamadı. PageSpeed mobil API HTTP 429 kota hatası; hız puanı üretilemedi. Ayrıntılar SEO raporuna kaydedildi.
