export const productBasePath = '/urunlerimiz'
export type ProductPage = {
  slug: string; name: string; image?: string; catalogNames: string[]; group: 'cleaning' | 'boiler' | 'cooling' | 'preparation'
  tr: { purpose: string; description: string; applications: string[]; applicationInfo?: string; technicalFeatures?: string[]; introduction?: string; applicationSteps?: { title: string; text: string }[]; materials?: string; packaging?: string }
  en: { purpose: string; description: string; applications: string[]; applicationInfo?: string; technicalFeatures?: string[]; introduction?: string; applicationSteps?: { title: string; text: string }[]; materials?: string; packaging?: string }
}
export const productPages: ProductPage[] = [
  { slug: 'kelvenoks-ferlin-123', name: 'Kelvenoks Ferlin 123', image: '/images/products/2/1.png', catalogNames: ['Kelvenoks Ferlin 123'], group: 'cleaning',
    tr: { purpose: 'Demir ve Çelik Sistemler İçin Kireç Temizleme Kimyasalı', description: 'Kelvenoks Ferlin 123, demir, çelik ve döküm içeren endüstriyel sistemlerin ısı transfer yüzeylerinde oluşan kışır, kireç ve mineral birikintilerinin kimyasal temizliği için kullanılan inhibitörlü sıvı üründür.', applications: ['Demir ve çelik malzeme içeren kazanların su tarafındaki kireç ve mineral birikintileri', 'Malzeme uygunluğu değerlendirilen demir ve çelik boru devreleri', 'Demir, çelik ve döküm ısı transfer yüzeyleri'], introduction: 'Isı transfer yüzeylerinde oluşan birikintilerin kimyasal olarak çözülmesine ve dağıtılmasına yönelik formüle edilmiştir. Yüzey ıslatıcılar ve inhibitörler içeren yapısı, temizliğin metal yüzeyler korunarak yürütülmesini destekler. Ürün seçimi yapılırken yalnızca ekipmanın adı değil, kışırın yapısı ve devrede bulunan tüm metal cinsleri birlikte dikkate alınır.', applicationSteps: [{"title":"Karışımın hazırlanması","text":"Teknik bültende 1 kısım Kelvenoks Ferlin 123 ve 2 kısım su karışımı belirtilir. Ölçüm esası ve hazırlama yöntemi uygulama öncesinde teknik prosedürle netleştirilir."},{"title":"Temizliğin takibi","text":"Kimyasal temizlik, pH takibi ve teknik kontrollerle izlenir. Sistem özelliklerine göre sıcak uygulama değerlendirilebilir; uygulama sıcaklığı ve süresi ekipmanın malzemesine ve birikintiye göre belirlenir."},{"title":"Durulama","text":"Temizlik tamamlandığında sistem, blöf suyunun pH değeri 7–7,5 olacak şekilde durulanır."},{"title":"Nötralizasyon ve pasivasyon","text":"Durulama sonrasında ALKALEN NP-100 ile nötralizasyon ve yüzey pasivasyonu uygulanır."}], technicalFeatures: ['Kışır yapısı ve sistemdeki metal cinsleri dikkate alınarak ürün ve uygulama uygunluğu değerlendirilir.', 'İnhibitörlü yapısı, uygun uygulama koşullarında metal yüzeylerin korunmasını destekler.', 'Teknik bültende inhibitörün 90 °C sıcaklığa kadar etkinliğini koruduğu belirtilir. Uygulama sıcaklığı sistem özelliklerine göre belirlenir.'], applicationInfo: 'Teknik bültende karışım oranı 1 kısım Kelvenoks Ferlin 123 ve 2 kısım su olarak belirtilir. Kısım ifadesinin ağırlık veya hacim esası uygulama öncesinde netleştirilir. Temizlik pH takibi ve teknik kontrollerle izlenir. İşlem sonunda sistem, blöf suyunun pH değeri 7–7,5 olacak şekilde durulanır. Ardından ALKALEN NP-100 ile nötralizasyon ve yüzey pasivasyonu uygulanır. Uygulama, sistem malzemesine uygun teknik prosedür ve güncel güvenlik bilgi formuna göre planlanır.', materials: 'Demir, çelik ve döküm', packaging: '35, 70 ve 250 kg HDPE bidon' },
    en: { purpose: 'Descaling Chemical for Iron and Steel Systems', description: 'An inhibited chemical for scale and mineral deposit removal in systems containing iron, steel and cast iron. Selection considers heat transfer surfaces and all circuit materials.', applications: ['Water-side scale and mineral deposits in boilers containing iron and steel', 'Iron and steel pipe circuits subject to material review', 'Iron, steel and cast iron heat transfer surfaces'], introduction: 'Formulated to dissolve and disperse deposits on heat transfer surfaces. Its wetting agents and inhibitors support cleaning while protecting metal surfaces. Product selection considers deposit characteristics and every metal in the circuit, rather than equipment type alone.', applicationSteps: [{"title":"Mixture preparation","text":"The technical bulletin specifies 1 part Kelvenoks Ferlin 123 and 2 parts water. Measurement basis and preparation method are clarified in the technical procedure before application."},{"title":"Cleaning monitoring","text":"Chemical cleaning is monitored through pH measurements and technical checks. Heated application may be assessed according to system characteristics; temperature and duration depend on equipment materials and deposits."},{"title":"Rinsing","text":"After cleaning, the system is rinsed until blowdown water reaches pH 7–7.5."},{"title":"Neutralisation and passivation","text":"After rinsing, ALKALEN NP-100 is used for neutralisation and surface passivation."}], technicalFeatures: ['Product and application suitability are assessed using deposit characteristics and all system metals.', 'The inhibited formulation supports metal surface protection under suitable application conditions.', 'The technical bulletin states that the inhibitor remains effective up to 90 °C. Application temperature is determined according to system characteristics.'], applicationInfo: 'The technical bulletin specifies 1 part Kelvenoks Ferlin 123 to 2 parts water. Whether parts refer to mass or volume must be clarified before application. Cleaning is monitored through pH measurements and technical checks. The system is then rinsed until blowdown water reaches pH 7–7.5. Neutralisation and surface passivation follow using ALKALEN NP-100. Application is planned according to a material-compatible technical procedure and the current safety data sheet.', materials: 'Iron, steel and cast iron', packaging: '35, 70 and 250 kg HDPE containers' } },
  { slug: 'kelvenoks-ferlin-124', name: 'Kelvenoks Ferlin 124', image: '/images/products/2/2.png', catalogNames: ['Kelvenoks Ferlin 124'], group: 'cleaning',
    tr: { introduction: "Bakır ve bakır alaşımlı yüzeylerde oluşan kireç ve mineral birikintilerini çözmek ve dağıtmak için geliştirilmiş kimyasal temizlik ürünüdür. Yüzey ıslatıcılar ve bakır inhibitörleri içeren yapısıyla özellikle bakır borulu kondenser ve eşanjörlerin temizliğinde değerlendirilir. Devredeki diğer metaller de ürün seçimine dahil edilir.", technicalFeatures: ["Bakır ve bakır alaşımları için inhibitörlü yapı.","Isı transfer yüzeylerindeki kışır ve mineral depozitlerinin temizliğine yönelik formülasyon.","Bültende maksimum çalışma sıcaklığı 90 °C olarak belirtilir; sıcaklık sistem koşullarına göre seçilir."], applicationSteps: [{"title":"Karışımın hazırlanması","text":"Teknik bültende 1 kısım Kelvenoks Ferlin 124 ve 2 kısım su karışımı belirtilir. Ölçüm esası ve hazırlama yöntemi uygulama öncesinde teknik prosedürle netleştirilir."},{"title":"Temizliğin takibi","text":"Kimyasal temizlik, pH takibi ve teknik kontrollerle izlenir. Sistem özelliklerine göre sıcak uygulama değerlendirilebilir; uygulama sıcaklığı ve süresi ekipmanın malzemesine ve birikintiye göre belirlenir."},{"title":"Durulama","text":"Temizlik tamamlandığında sistem, blöf suyunun pH değeri 7–7,5 olacak şekilde durulanır."},{"title":"Nötralizasyon ve pasivasyon","text":"Durulama sonrasında ALKALEN NP-100 ile nötralizasyon ve yüzey pasivasyonu uygulanır."}], purpose: 'Bakır Sistemler ve Kondenser Temizleme Kimyasalı', description: 'Bakır ve bakır alaşımlı sistemlerde kireç ve mineral birikintilerinin temizliğine yönelik bakır inhibitörlü üründür. Kondenser ve eşanjör uygulamalarında boru malzemesi, diğer metaller ve birikinti özellikleri birlikte değerlendirilir.', applications: ['Bakır ve bakır alaşımlı yüzey içeren kondenser ve eşanjörler', 'Malzeme uygunluğu değerlendirilen bakır devreler'], materials: 'Bakır ve bakır alaşımları', packaging: '35, 70 ve 250 kg HDPE bidon' },
    en: { introduction: "A chemical cleaning product formulated to dissolve and disperse scale and mineral deposits on copper and copper alloy surfaces. Wetting agents and copper inhibitors support applications in copper-tube condensers and heat exchangers. Other circuit metals are also reviewed.", technicalFeatures: ["Inhibited formulation for copper and copper alloys.","Designed for scale and mineral deposits on heat transfer surfaces.","The bulletin lists a maximum operating temperature of 90 °C; application temperature depends on system conditions."], applicationSteps: [{"title":"Mixture preparation","text":"The technical bulletin specifies 1 part Kelvenoks Ferlin 124 and 2 parts water. Measurement basis and preparation method are clarified in the technical procedure before application."},{"title":"Cleaning monitoring","text":"Chemical cleaning is monitored through pH measurements and technical checks. Heated application may be assessed according to system characteristics; temperature and duration depend on equipment materials and deposits."},{"title":"Rinsing","text":"After cleaning, the system is rinsed until blowdown water reaches pH 7–7.5."},{"title":"Neutralisation and passivation","text":"After rinsing, ALKALEN NP-100 is used for neutralisation and surface passivation."}], purpose: 'Cleaning Chemical for Copper Systems and Condensers', description: 'A copper-inhibited chemical for scale and mineral deposit removal in copper and copper alloy systems. Condenser and heat exchanger applications require review of tube materials, other metals and deposits.', applications: ['Condensers and heat exchangers containing copper and copper alloy surfaces', 'Copper circuits subject to material review'], materials: 'Copper and copper alloys', packaging: '35, 70 and 250 kg HDPE containers' } },
  { slug: 'kelvenoks-ferlin-128', name: 'Kelvenoks Ferlin 128', image: '/images/products/2/3.png', catalogNames: ['Kelvenoks Ferlin 128'], group: 'cleaning',
    tr: { introduction: "Paslanmaz çelik ve paslanmaz alaşımlı yüzeylerde oluşan kışır ve mineral depozitlerinin kimyasal temizliğine yönelik üründür. Organik asitler, yüzey ıslatıcılar ve inhibitörler içeren formülasyonuyla tank, boru hattı ve ısı transfer ekipmanlarının malzemeye uygun temizliğinde değerlendirilir.", technicalFeatures: ["Organik asit, yüzey ıslatıcı ve inhibitör içeren yapı.","Paslanmaz yüzeylerde kireç ve mineral birikintilerine yönelik kullanım.","Ürün seçimi alaşım sınıfı ve devredeki diğer malzemelerle birlikte yapılır."], applicationSteps: [{"title":"Karışımın hazırlanması","text":"Teknik bültende 1 kısım Kelvenoks Ferlin 128 ve 2 kısım su karışımı belirtilir. Ölçüm esası ve hazırlama yöntemi uygulama öncesinde teknik prosedürle netleştirilir."},{"title":"Temizliğin takibi","text":"Kimyasal temizlik, pH takibi ve teknik kontrollerle izlenir. Sistem özelliklerine göre sıcak uygulama değerlendirilebilir; uygulama sıcaklığı ve süresi ekipmanın malzemesine ve birikintiye göre belirlenir."},{"title":"Durulama","text":"Temizlik tamamlandığında sistem, blöf suyunun pH değeri 7–7,5 olacak şekilde durulanır."},{"title":"Nötralizasyon ve pasivasyon","text":"Durulama sonrasında ALKALEN NP-100 ile nötralizasyon ve yüzey pasivasyonu uygulanır."}], purpose: 'Paslanmaz Sistemler İçin Kireç Temizleme Kimyasalı', description: 'Paslanmaz yüzey ve sistemlerde kireç ve mineral birikintilerinin kimyasal temizliğine yönelik üründür. Alaşım sınıfı, yüzey durumu ve birikinti yapısı ürün seçiminde birlikte ele alınır.', applications: ['Paslanmaz ısı transfer yüzeyleri', 'Paslanmaz tank ve proses boru hatları', 'Malzeme uygunluğu değerlendirilen paslanmaz eşanjörler'], materials: 'Paslanmaz çelik ve paslanmaz alaşımlar', packaging: '35, 70 ve 250 kg HDPE bidon' },
    en: { introduction: "A chemical cleaning product for scale and mineral deposits on stainless steel and stainless alloy surfaces. Its organic acids, wetting agents and inhibitors are assessed for material-compatible cleaning of tanks, pipelines and heat transfer equipment.", technicalFeatures: ["Contains organic acids, wetting agents and inhibitors.","Intended for scale and mineral deposits on stainless surfaces.","Selection considers alloy grade and all other circuit materials."], applicationSteps: [{"title":"Mixture preparation","text":"The technical bulletin specifies 1 part Kelvenoks Ferlin 128 and 2 parts water. Measurement basis and preparation method are clarified in the technical procedure before application."},{"title":"Cleaning monitoring","text":"Chemical cleaning is monitored through pH measurements and technical checks. Heated application may be assessed according to system characteristics; temperature and duration depend on equipment materials and deposits."},{"title":"Rinsing","text":"After cleaning, the system is rinsed until blowdown water reaches pH 7–7.5."},{"title":"Neutralisation and passivation","text":"After rinsing, ALKALEN NP-100 is used for neutralisation and surface passivation."}], purpose: 'Descaling Chemical for Stainless Steel Systems', description: 'A chemical for scale and mineral deposit removal from stainless steel surfaces and systems. Selection considers alloy grade, surface condition and deposit characteristics.', applications: ['Stainless steel heat transfer surfaces', 'Stainless steel tanks and process pipelines', 'Stainless heat exchangers subject to material review'], materials: 'Stainless steel and stainless alloys', packaging: '35, 70 and 250 kg HDPE containers' } },
  { slug: 'kelvenoks-ferlin-130', name: 'Kelvenoks Ferlin 130', image: '/images/products/2/4.png', catalogNames: ['Kelvenoks Ferlin 130'], group: 'cleaning',
    tr: { introduction: "Alüminyum ve alüminyum alaşımlı yüzeylerdeki kireç ve mineral birikintilerinin giderilmesi amacıyla kullanılan berrak sıvı kimyasal temizlik ürünüdür. Organik asitler, yüzey ıslatıcılar ve inhibitörlerden oluşan yapısı, malzemeye özel temizlik ihtiyacı için değerlendirilir.", technicalFeatures: ["Alüminyum ve alüminyum alaşımlarına yönelik ürün.","Organik asit, yüzey ıslatıcı ve inhibitör içeren berrak sıvı.","Uygulama koşulları alaşım yapısı ve birikintiye göre belirlenir."], applicationSteps: [{"title":"Karışımın hazırlanması","text":"Teknik bültende 1 kısım Kelvenoks Ferlin 130 ve 2 kısım su karışımı belirtilir. Ölçüm esası ve hazırlama yöntemi uygulama öncesinde teknik prosedürle netleştirilir."},{"title":"Temizliğin takibi","text":"Kimyasal temizlik, pH takibi ve teknik kontrollerle izlenir. Sistem özelliklerine göre sıcak uygulama değerlendirilebilir; uygulama sıcaklığı ve süresi ekipmanın malzemesine ve birikintiye göre belirlenir."},{"title":"Durulama","text":"Temizlik tamamlandığında sistem, blöf suyunun pH değeri 7–7,5 olacak şekilde durulanır."},{"title":"Nötralizasyon ve pasivasyon","text":"Durulama sonrasında ALKALEN NP-100 ile nötralizasyon ve yüzey pasivasyonu uygulanır."}], purpose: 'Alüminyum Sistemler İçin Kimyasal Temizlik Ürünü', description: 'Alüminyum ve alüminyum alaşımlı yüzeylerde kireç ve mineral birikintilerinin temizliği için değerlendirilir. Organik asit, yüzey ıslatıcı ve inhibitör içeren yapı, sistemin malzeme ve uygulama gerekliliklerine göre ele alınır.', applications: ['Alüminyum ısı transfer yüzeyleri', 'Alüminyum alaşımlı parçalar içeren ekipmanlar'], materials: 'Alüminyum ve alüminyum alaşımları', packaging: '35, 70 ve 250 kg HDPE bidon' },
    en: { introduction: "A clear liquid chemical cleaning product for scale and mineral deposits on aluminium and aluminium alloy surfaces. Its organic acids, wetting agents and inhibitors are assessed for material-specific cleaning requirements.", technicalFeatures: ["Designed for aluminium and aluminium alloys.","Clear liquid containing organic acids, wetting agents and inhibitors.","Conditions depend on alloy composition and deposits."], applicationSteps: [{"title":"Mixture preparation","text":"The technical bulletin specifies 1 part Kelvenoks Ferlin 130 and 2 parts water. Measurement basis and preparation method are clarified in the technical procedure before application."},{"title":"Cleaning monitoring","text":"Chemical cleaning is monitored through pH measurements and technical checks. Heated application may be assessed according to system characteristics; temperature and duration depend on equipment materials and deposits."},{"title":"Rinsing","text":"After cleaning, the system is rinsed until blowdown water reaches pH 7–7.5."},{"title":"Neutralisation and passivation","text":"After rinsing, ALKALEN NP-100 is used for neutralisation and surface passivation."}], purpose: 'Chemical Cleaning Product for Aluminium Systems', description: 'Assessed for scale and mineral deposit removal on aluminium and aluminium alloy surfaces. Its organic acid, wetting agent and inhibitor formulation is reviewed against system materials and application requirements.', applications: ['Aluminium heat transfer surfaces', 'Equipment containing aluminium alloy components'], materials: 'Aluminium and aluminium alloys', packaging: '35, 70 and 250 kg HDPE containers' } },
  { slug: 'alkalen-np-100', name: 'Alkalen NP-100', image: '/images/products/2/5.png', catalogNames: ['Alkalen NP-100'], group: 'cleaning',
    tr: { introduction: "Asidik kimyasal temizlikten sonra nötralizasyon ve metal yüzeylerin pasivasyonu için kullanılan alkali koruyucu üründür. Kazanlar, eşanjörler, chiller ve soğutma devrelerinde temizlik sonrası işlemleri tamamlamak amacıyla değerlendirilir. Asidik kireç temizleme ürünlerinden farklı bir işlem aşamasında kullanılır.", technicalFeatures: ["Temizlik sonrası nötralizasyon ve yüzey pasivasyonu için alkali yapı.","Buhar, kızgın su ve kalorifer kazanları ile ısı transfer sistemlerinde kullanım.","NP-100 SPECIAL ve yağ konservasyonu için P-100 ayrı ürünlerdir."], applicationSteps: [{"title":"Ön durulama","text":"Asidik temizlik tamamlandıktan sonra sistem durulanır; bülten ön durulama için pH 7–7,5 belirtir."},{"title":"Nötralizasyon ve pasivasyon","text":"Ürün, sistem malzemesine uygun son işlem prosedürüyle uygulanır. Miktar ve işlem koşulları devre hacmi, kalan asidik ortam ve teknik kontrollere göre belirlenir."}], purpose: 'Nötralizasyon ve Pasivasyon Kimyasalı', description: 'Asidik kimyasal temizlik sonrasında kalan asidik ortamın nötralizasyonu ve metal yüzeylerin pasivasyonuna yönelik tamamlayıcı üründür. Kullanımı, sistem malzemesi ve onaylı temizlik sonrası işlem prosedürüne göre değerlendirilir.', applications: ['Asidik temizlik sonrası nötralizasyon', 'Kazan ve ısı transfer sistemlerinde temizlik sonrası işlemler', 'Malzemeye uygun yüzey pasivasyonu'], packaging: '35, 70 ve 250 kg HDPE bidon' },
    en: { introduction: "An alkaline protective product used for neutralisation and metal surface passivation after acidic chemical cleaning. It complements post-cleaning treatment in boilers, heat exchangers, chillers and cooling circuits, at a different stage from acidic descaling products.", technicalFeatures: ["Alkaline treatment for post-cleaning neutralisation and passivation.","Applications in steam, hot-water and heating boilers and heat transfer systems.","NP-100 SPECIAL and P-100 oil preservation products are separate variants."], applicationSteps: [{"title":"Pre-rinsing","text":"Rinse the system after acidic cleaning; the bulletin specifies pH 7–7.5 for pre-rinsing."},{"title":"Neutralisation and passivation","text":"Apply under a material-compatible post-treatment procedure. Quantity and conditions depend on circuit volume, residual acidity and technical checks."}], purpose: 'Neutralisation and Passivation Chemical', description: 'A complementary product for neutralising residual acidity and passivating metal surfaces after acidic chemical cleaning. Use is assessed according to system materials and the approved post-cleaning procedure.', applications: ['Neutralisation after acidic cleaning', 'Post-cleaning steps in boilers and heat transfer systems', 'Material-specific surface passivation'], packaging: '35, 70 and 250 kg HDPE containers' } },
  { slug: 'kelvenoks-ferlin-101', name: 'Kelvenoks Ferlin 101', image: '/images/products/2/7.png', catalogNames: ['Kelvenoks Ferlin 101'], group: 'cleaning',
    tr: { introduction: "Demir ve çelik yüzeylerdeki yağ, kir ve pasın giderilmesi için kullanılan fosforik asit esaslı asidik yıkama ürünüdür. Tank, boru, çelik konstrüksiyon ve makine parçalarının temizliğinde; boya, kaplama ve galvaniz öncesi yüzey hazırlığında değerlendirilir.", technicalFeatures: ["Fosforik asit esaslı asidik yüzey temizleyici.","Yağ, kir ve pas giderme ile metal yüzey hazırlığı.","Fırçalama, daldırma veya püskürtme yöntemleriyle uygulama."], applicationSteps: [{"title":"Yüzey temizliği","text":"Seyreltilmiş çözelti, yüzey ve kirlilik durumuna uygun olarak fırçalama, daldırma veya püskürtme yöntemiyle uygulanır. Seyreltme ve süre teknik değerlendirmeyle belirlenir."},{"title":"Durulama","text":"Uygulama sonrasında yüzey bol suyla durulanır. Sonraki boya veya kaplama işleminin yüzey hazırlık gereklilikleri dikkate alınır."}], purpose: 'Demir ve Çelik İçin Yağ ve Pas Sökücü', description: 'Demir ve çelik yüzeylerde yağ, kir ve pas giderme amacıyla tanımlanan fosforik asit esaslı asidik yıkama kimyasalıdır. Yüzey hazırlığı ihtiyacına göre ürün seçimi ve uygulama koşulları değerlendirilir.', applications: ['Tank, boru ve çelik konstrüksiyon yüzeyleri', 'Makine parçaları ve atölye temizlik uygulamaları', 'Boya ve kaplama öncesi metal yüzey hazırlığı'], materials: 'Demir ve çelik', packaging: '35, 70 ve 250 kg HDPE bidon' },
    en: { introduction: "A phosphoric-acid-based acidic washing product for removing oil, dirt and rust from iron and steel. Assessed for tanks, pipes, steel structures and machine parts, including surface preparation before painting, coating and galvanising.", technicalFeatures: ["Phosphoric-acid-based acidic surface cleaner.","Oil, dirt and rust removal and metal surface preparation.","Application by brushing, immersion or spraying."], applicationSteps: [{"title":"Surface cleaning","text":"Apply a diluted solution by brushing, immersion or spraying according to the surface and contamination. Dilution and duration are determined through technical assessment."},{"title":"Rinsing","text":"Rinse thoroughly with water after application. Consider surface preparation requirements for subsequent painting or coating."}], purpose: 'Oil and Rust Remover for Iron and Steel', description: 'A phosphoric-acid-based washing chemical described for oil, dirt and rust removal on iron and steel surfaces. Selection and use conditions depend on surface preparation requirements.', applications: ['Tank, pipe and steel structure surfaces', 'Machine components and workshop cleaning', 'Metal surface preparation before painting and coating'], materials: 'Iron and steel', packaging: '35, 70 and 250 kg HDPE containers' } },
  { slug: 'kelvenoks-ferlin-150', name: 'Kelvenoks Ferlin 150', image: '/images/products/2/8.png', catalogNames: ['Kelvenoks 150', 'Kelvenoks Ferlin 150'], group: 'cleaning',
    tr: { introduction: "Betonun delik içi kimyasal uygulamayla zayıflatılmasına ve sonraki mekanik kırma işlemine yardımcı olmaya yönelik asit bazlı sıvı üründür. Beton blokların parçalanması, prefabrik elemanların sökümü ve demir-beton ayırma çalışmalarında saha koşullarına göre değerlendirilir.", technicalFeatures: ["Açık sarı, asit bazlı sıvı yapı.","Beton zayıflatma ve mekanik kırmaya yardımcı kullanım.","Genleşen beton kırıcı tozlardan farklı bir ürün türü."], applicationSteps: [{"title":"Saha değerlendirmesi","text":"Beton türü, donatı, erişim ve mekanik söküm yöntemi birlikte incelenir; delik içi uygulama planı hazırlanır."},{"title":"Kimyasal ve mekanik işlem","text":"Bültende ıslatma, seyreltilmiş ürün uygulaması ve ardından mekanik kırma aşamaları tanımlanır. Seyreltme, süre ve tekrarlar projeye özel prosedürle belirlenir."}], purpose: 'Beton Zayıflatıcı Kimyasal', description: 'Delik içi uygulamayla beton yapısını zayıflatmaya ve sonraki mekanik kırma işlemine yardımcı olmaya yönelik asit bazlı sıvı üründür. Beton türü, donatı ve saha koşulları birlikte değerlendirilir.', applications: ['Beton blok parçalama', 'Demir ve beton ayırma çalışmaları', 'Prefabrik beton sökümü ve endüstriyel yıkım'], packaging: '35, 70 ve 250 kg HDPE bidon' },
    en: { introduction: "An acid-based liquid for weakening concrete through drilled-hole chemical application and assisting subsequent mechanical breaking. Assessed for concrete blocks, precast removal and reinforcement separation according to site conditions.", technicalFeatures: ["Light-yellow acid-based liquid.","Concrete weakening to assist mechanical breaking.","A different product type from expanding demolition powders."], applicationSteps: [{"title":"Site assessment","text":"Review concrete type, reinforcement, access and mechanical removal method to prepare an application plan."},{"title":"Chemical and mechanical treatment","text":"The bulletin describes wetting, diluted product application and subsequent mechanical breaking. Dilution, duration and repetitions are defined in a project-specific procedure."}], purpose: 'Concrete Weakening Chemical', description: 'An acid-based liquid for drilled-hole application to weaken concrete and assist subsequent mechanical breaking. Concrete type, reinforcement and site conditions are assessed together.', applications: ['Concrete block breaking', 'Reinforcement and concrete separation', 'Precast concrete removal and industrial demolition'], packaging: '35, 70 and 250 kg HDPE containers' } },
  { slug: 'polyquestamin', name: 'Polyquestamin', image: '/images/products/1/3.png', catalogNames: ['Polyquestamin - Kazan & Buhar Sistemi', 'Polyquestamin - Boiler & Steam System'], group: 'boiler',
    tr: { introduction: "Buhar kazanı ve kondens hatlarında kireç, birikinti ve korozyon kontrolüne yönelik su şartlandırma ürünüdür. Polimerler, dispersantlar, kopolimerler ve fosfonatlar birikinti kontrolünü; nötralize ve film yapıcı aminler ise korozyon kontrol programını destekler.", technicalFeatures: ["Polimer, dispersant, kopolimer ve fosfonat içeren yapı.","Nötralize ve film yapıcı aminlerle kondens hattı programında değerlendirme.","Kazan taşı, korozyon ve blöf yönetimiyle birlikte ele alınan şartlandırma."], applicationSteps: [{"title":"Programın oluşturulması","text":"Besi suyu, kazan suyu ve kondens analizleri ile işletme koşulları incelenerek dozlama programı hazırlanır."},{"title":"Analiz ve doz takibi","text":"Ürün beslemesi su kalitesi, işletme yükü ve blöf koşullarına göre takip edilir. Analiz sonuçları işletmeyle paylaşılır ve gerekli doz ayarları değerlendirilir."}], purpose: 'Kazan Suyu Kireç ve Korozyon Önleyici', description: 'Buhar kazanları ve kondens hatlarında kireç ve korozyon kontrolüne yönelik su şartlandırma kimyasalıdır. Polimerler, dispersantlar, fosfonatlar ve aminler içeren program, su analizleri ve işletme koşullarına göre değerlendirilir.', applications: ['Buhar kazanı su şartlandırması', 'Kondens hatlarında korozyon kontrolü', 'Kazan suyunda birikinti kontrolü'], packaging: '35, 70 ve 250 kg HDPE bidon' },
    en: { introduction: "A water treatment product for scale, deposit and corrosion control in steam boilers and condensate lines. Polymers, dispersants, copolymers and phosphonates support deposit control, while neutralising and film-forming amines support the corrosion control program.", technicalFeatures: ["Contains polymers, dispersants, copolymers and phosphonates.","Neutralising and film-forming amines for condensate treatment programs.","Treatment considered alongside boiler deposits, corrosion and blowdown management."], applicationSteps: [{"title":"Program preparation","text":"Assess feedwater, boiler water and condensate analyses and operating conditions to prepare a dosing program."},{"title":"Analysis and dosing review","text":"Monitor feeding against water quality, operating load and blowdown conditions. Share analysis results with the facility and review dosing adjustments."}], purpose: 'Boiler Water Scale and Corrosion Control Chemical', description: 'A water treatment chemical for scale and corrosion control in steam boilers and condensate lines. Its polymer, dispersant, phosphonate and amine program is assessed using water analyses and operating conditions.', applications: ['Steam boiler water treatment', 'Condensate line corrosion control', 'Boiler water deposit control'], packaging: '35, 70 and 250 kg HDPE containers' } },
  { slug: 'polyox-432', name: 'Polyox 432', image: '/images/products/1/1.png', catalogNames: ['Polyox 432 - Kazan & Buhar Sistemi', 'Polyox 432 - Boiler & Steam System'], group: 'boiler',
    tr: { introduction: "Buhar ve kondensat devrelerinde agresif gazlarla ilişkili korozyonun kontrolü için kullanılan su şartlandırma ürünüdür. Teknik bülten oksijen ve karbondioksit kaynaklı korozyon ile kondens pH kontrolünü ele alır. Dozlama noktası, mevcut su şartlandırma programıyla birlikte belirlenir.", technicalFeatures: ["Buhar ve kondens hatlarında korozyon kontrolüne yönelik ürün.","Kondens pH takibiyle birlikte değerlendirilen şartlandırma.","Besi suyu ve buhar devresi koşullarına göre dozlama noktası seçimi."], applicationSteps: [{"title":"Dozlama noktası","text":"Bültende besi suyu, pompa emişi ve buhar kolektörü seçenekleri yer alır. Sisteme uygun nokta teknik incelemeyle seçilir."},{"title":"İşletme takibi","text":"Kondens ve besi suyu analizleriyle program izlenir. Doz, işletme koşulları ve mevcut kimyasal program doğrultusunda ayarlanır."}], purpose: 'Buhar ve Kondens Hattı Korozyon Önleyici', description: 'Buhar ve kondens devrelerinde agresif gazlarla ilişkili korozyonun kontrolüne yönelik kazan suyu programlarında değerlendirilir. Besi suyu ve kondens özellikleri, mevcut program ve dozlama noktası birlikte ele alınır.', applications: ['Buhar ve kondens hatları', 'Kazan besi suyu şartlandırma programları', 'Kondens devresi korozyon kontrolü'], packaging: '35, 70 ve 250 kg HDPE bidon' },
    en: { introduction: "A water treatment product for corrosion control associated with aggressive gases in steam and condensate circuits. The bulletin addresses oxygen- and carbon-dioxide-related corrosion and condensate pH control. The dosing point is selected alongside the existing treatment program.", technicalFeatures: ["Corrosion control in steam and condensate lines.","Treatment assessed alongside condensate pH monitoring.","Dosing point selection based on feedwater and steam circuit conditions."], applicationSteps: [{"title":"Dosing point","text":"The bulletin lists feedwater, pump suction and steam header options. Select the appropriate point through technical review."},{"title":"Operating monitoring","text":"Monitor the program through condensate and feedwater analyses. Adjust dosing according to operating conditions and the existing chemical program."}], purpose: 'Steam and Condensate Line Corrosion Inhibitor', description: 'Assessed in boiler water programs for corrosion control associated with aggressive gases in steam and condensate circuits. Feedwater and condensate properties, the existing program and dosing point are reviewed together.', applications: ['Steam and condensate lines', 'Boiler feedwater treatment programs', 'Condensate circuit corrosion control'], packaging: '35, 70 and 250 kg HDPE containers' } },
  { slug: 'polyquest-k-serisi', name: 'Polyquest K Serisi', catalogNames: [], group: 'boiler',
    tr: { introduction: "Düşük ve orta basınçlı buhar kazanlarında kireç, çamur birikintisi ve korozyon kontrolü için geliştirilmiş organik esaslı ürün ailesidir. Dispersantlar, organofosfonatlar ve organik/inorganik inhibitörler içerir. Seri içindeki ürün seçimi suyun alkalinitesi ve kazan koşullarına göre yapılır.", technicalFeatures: ["K-400: bültende düşük alkalinite seçeneği olarak tanımlanır.","K-410: yüksek alkalinite seçeneği olarak tanımlanır.","K-420: nötral alkalinite seçeneği olarak tanımlanır.","Alev borulu ve skoç tipi kazanlarda şartlandırma programı."], applicationSteps: [{"title":"Seri seçimi","text":"Su analizleri ve alkalinite değerlendirilerek uygun K-serisi ürünü seçilir. Kesin seçim aralıkları teknik incelemeyle belirlenir."},{"title":"Dozlama ve kontrol","text":"Besi suyu tüketimi, kazan suyu analizleri ve blöf koşullarına göre dozlama planlanır; işletme boyunca analizlerle takip edilir."}], purpose: 'Kazan Suyu Şartlandırma Kimyasalları', description: 'Kazan suyunda kireç, çamur birikintisi ve korozyon kontrolüne yönelik ürün ailesidir. K-400, K-410 ve K-420 seçenekleri suyun alkalinitesi ve kazan koşulları değerlendirilerek seçilir.', applications: ['Düşük ve orta basınçlı buhar kazanları', 'Alev borulu ve skoç tipi kazanlar', 'Kazan suyu birikinti ve korozyon kontrolü'], packaging: '35, 70 ve 250 kg HDPE bidon' },
    en: { introduction: "An organic-based product family for scale, sludge and corrosion control in low and medium pressure steam boilers. Contains dispersants, organophosphonates and organic/inorganic inhibitors. Selection depends on water alkalinity and boiler conditions.", technicalFeatures: ["K-400: described as the low-alkalinity option.","K-410: described as the high-alkalinity option.","K-420: described as the neutral-alkalinity option.","Treatment programs for fire-tube and Scotch-type boilers."], applicationSteps: [{"title":"Series selection","text":"Select the appropriate K-series product using water analyses and alkalinity assessment. Exact selection ranges are determined through technical review."},{"title":"Dosing and monitoring","text":"Plan dosing according to feedwater consumption, boiler water analyses and blowdown conditions; monitor through operating analyses."}], purpose: 'Boiler Water Treatment Chemicals', description: 'A product family for scale, sludge and corrosion control in boiler water. K-400, K-410 and K-420 options are selected after assessment of water alkalinity and boiler conditions.', applications: ['Low and medium pressure steam boilers', 'Fire-tube and Scotch-type boilers', 'Boiler water deposit and corrosion control'], packaging: '35, 70 and 250 kg HDPE containers' } },
  { slug: 'org-311', name: 'ORG-311', image: '/images/products/4/5.png', catalogNames: ['ORG311'], group: 'cooling',
    tr: { introduction: "Soğutma suyu devrelerinde kireç, depozit ve korozyon kontrolü için kullanılan organik esaslı şartlandırma kimyasalıdır. Dispersant ve inhibitör içeren yapısıyla kapalı ve yarı açık devrelerin su kalitesi ve çevrim koşullarına uygun kimyasal programında değerlendirilir.", technicalFeatures: ["Organik esaslı, dispersant ve inhibitör içeren sıvı ürün.","Soğutma devrelerinde kışır, birikinti ve korozyon kontrolü.","pH, iletkenlik, aktif karbonat ve korozyon takibiyle program kontrolü."], applicationSteps: [{"title":"Başlangıç değerlendirmesi","text":"Su analizleri, malzemeler ve çevrim sayısı incelenerek ürün besleme programı oluşturulur."},{"title":"Düzenli kontrol","text":"Ryznar indeksi, pH, iletkenlik ve uygun sistemlerde korozyon kuponları takip edilir. Dozlama ve blöf koşulları analiz sonuçlarına göre değerlendirilir."}], purpose: 'Soğutma Suyu Kireç ve Korozyon Kontrol Kimyasalı', description: 'Soğutma suyu devrelerinde kireç, birikinti ve korozyon kontrolü için kullanılan organik esaslı şartlandırma ürünüdür. Su analizleri, sistem malzemeleri ve çevrim koşulları doğrultusunda kimyasal program değerlendirilir.', applications: ['Kapalı ve yarı açık soğutma devreleri', 'Soğutma kuleleri ve bağlı su devreleri', 'Eşanjör ve kondenser soğutma suyu programları'], packaging: '35, 70 ve 250 kg HDPE bidon' },
    en: { introduction: "An organic-based treatment chemical for scale, deposit and corrosion control in cooling water circuits. Its dispersants and inhibitors are assessed within a chemical program suited to water quality and cycles in closed and semi-open systems.", technicalFeatures: ["Organic-based liquid containing dispersants and inhibitors.","Scale, deposit and corrosion control in cooling circuits.","Program monitoring through pH, conductivity, active carbonate and corrosion checks."], applicationSteps: [{"title":"Initial assessment","text":"Review water analyses, materials and concentration cycles to prepare a feeding program."},{"title":"Regular monitoring","text":"Monitor the Ryznar index, pH, conductivity and corrosion coupons where appropriate. Review dosing and blowdown conditions using analysis results."}], purpose: 'Cooling Water Scale and Corrosion Control Chemical', description: 'An organic-based treatment product for scale, deposit and corrosion control in cooling water circuits. The chemical program is assessed using water analyses, system materials and cycle conditions.', applications: ['Closed and semi-open cooling circuits', 'Cooling towers and associated water circuits', 'Heat exchanger and condenser cooling water programs'], packaging: '35, 70 and 250 kg HDPE containers' } },
  { slug: 'abacid-microbiosid', name: 'ABACIDE', image: '/images/products/4/1.png', catalogNames: ['ABACIDE - Yosun Önleyici', 'ABACIDE - Algaecide'], group: 'cooling',
    tr: { introduction: "Soğutma suyunda yosun, bakteri ve mantar kaynaklı biyolojik kirlenmenin kontrolüne yönelik organik sülfür bileşikleri içeren mikrobiyosittir. Soğutma kuleleri, kondenser su devreleri ve kapalı devre sistemlerde biyolojik kontrol programının bir parçası olarak değerlendirilir.", technicalFeatures: ["Organik sülfür bileşikleri içeren berrak sarı-yeşil sıvı.","Yosun, bakteri ve mantar kaynaklı kirlenme kontrolü.","Şok veya sürekli dozlama programına göre kullanım."], applicationSteps: [{"title":"Program seçimi","text":"Sistemin biyolojik kirlenme durumu, devre hacmi ve mevcut kimyasalları değerlendirilir. Şok veya sürekli besleme yöntemi ihtiyaca göre seçilir."},{"title":"Dozlama ve takip","text":"Uygulama sıklığı ve miktarı sistem koşullarıyla belirlenir. Biyolojik kontrol sonuçları ve diğer şartlandırma ürünleriyle uyumluluk takip edilir."}], purpose: 'Soğutma Suyu Biyositi', description: 'Soğutma suyu devrelerinde yosun, bakteri ve mantar kaynaklı biyolojik kirlenmenin kontrolüne yönelik mikrobiyosittir. Sistem koşullarına göre biyolojik kontrol programı ve kimyasal uyumluluğu değerlendirilir.', applications: ['Soğutma kuleleri', 'Kondenser soğutma suyu devreleri', 'Kapalı devre soğutma sistemleri'], packaging: '35, 70 ve 250 kg HDPE bidon' },
    en: { introduction: "A microbiocide containing organic sulphur compounds for biological fouling associated with algae, bacteria and fungi in cooling water. Assessed as part of biological control programs for towers, condenser water circuits and closed-loop systems.", technicalFeatures: ["Clear yellow-green liquid containing organic sulphur compounds.","Control of fouling associated with algae, bacteria and fungi.","Use through shock or continuous dosing programs."], applicationSteps: [{"title":"Program selection","text":"Assess biological fouling, circuit volume and existing chemicals. Choose shock or continuous feeding according to requirements."},{"title":"Dosing and monitoring","text":"Determine quantity and frequency according to system conditions. Monitor biological control results and compatibility with other treatment products."}], purpose: 'Cooling Water Biocide', description: 'A microbiocide for controlling biological fouling associated with algae, bacteria and fungi in cooling water circuits. The biological control program and chemical compatibility are assessed for system conditions.', applications: ['Cooling towers', 'Condenser cooling water circuits', 'Closed-loop cooling systems'], packaging: '35, 70 and 250 kg HDPE containers' } },
  { slug: 'monoetilen-glikol', name: 'Monoetilen Glikol', image: '/images/products/4/2.png', catalogNames: ['Monoetilen Glikol', 'Monoethylene Glycol', 'Montoetilen Glikol 250kg', 'Monoethylene Glycol 250kg'], group: 'cooling',
    tr: { introduction: "Kapalı devre soğutma suyunun donma noktasını düşürmek amacıyla kullanılan sıvı üründür. Chiller ve eşanjörlü sistemlerde hedeflenen çalışma koşullarına uygun su-glikol karışımı hazırlanmasında değerlendirilir. Karışım seçimi sıcaklık ihtiyacı, su kalitesi ve malzeme uygunluğuyla birlikte yapılır.", technicalFeatures: ["Soğutma suyunun donma noktasını düşürmeye yönelik kullanım.","Kapalı devre, chiller ve eşanjörlü soğutma sistemleri.","Karışım oranına bağlı termal özelliklerin değerlendirilmesi."], applicationSteps: [{"title":"Karışımın seçilmesi","text":"Hedeflenen en düşük sıcaklık ve sistem gereklilikleri belirlenerek uygun karışım oranı seçilir."},{"title":"Hazırlama ve takip","text":"Uygun su kalitesiyle karışım hazırlanır. Konsantrasyon, pH ve sistemin çalışma koşulları teknik programa göre kontrol edilir."}], purpose: 'Soğutma Sistemleri İçin Donma Noktası Düşürücü', description: 'Soğutma suyunun donma noktasını düşürmek amacıyla değerlendirilen sıvı üründür. Karışım seçimi, hedeflenen sıcaklık, su kalitesi ve sistemin malzeme gerekliliklerine göre yapılır.', applications: ['Kapalı devre soğutma sistemleri', 'Chiller devreleri', 'Eşanjörlü soğutma sistemleri'], packaging: '35, 70 ve 250 kg HDPE bidon' },
    en: { introduction: "A liquid used to lower the freezing point of closed-loop cooling water. Assessed for preparing water-glycol mixtures in chillers and heat exchanger systems. Mixture selection considers temperature requirements, water quality and material compatibility.", technicalFeatures: ["Used to lower cooling water freezing point.","Closed-loop, chiller and heat exchanger cooling applications.","Assessment of concentration-dependent thermal properties."], applicationSteps: [{"title":"Mixture selection","text":"Determine minimum temperature and system requirements to select the mixture concentration."},{"title":"Preparation and monitoring","text":"Prepare using appropriate-quality water. Monitor concentration, pH and operating conditions according to the technical program."}], purpose: 'Freezing Point Depressant for Cooling Systems', description: 'A liquid assessed for lowering the freezing point of cooling water. Mixture selection depends on target temperature, water quality and system material requirements.', applications: ['Closed-loop cooling systems', 'Chiller circuits', 'Heat exchanger cooling systems'], packaging: '35, 70 and 250 kg HDPE containers' } },
  { slug: 'katyonik-iyon-degisim-recinesi', name: 'Katyonik İyon Değişim Reçinesi', catalogNames: [], group: 'preparation',
    tr: { introduction: "Su yumuşatma ünitelerinde kullanılan, sodyum formunda kuvvetli asidik katyon değişim reçinesidir. Kalsiyum ve magnezyum iyonlarını sodyum iyonlarıyla değiştirerek suyun sertliğini azaltır. Sıvı kimyasallar gibi dozlanmaz; suyun geçtiği reçine yatağında görev yapar.", technicalFeatures: ["Polistiren esaslı jel boncuk yapısı ve sodyum formu.","Bültende 0,3–1,2 mm parçacık boyutu ve en az 2 eq/L kapasite belirtilir.","NaCl ile rejenerasyon yapılarak yumuşatma çevriminin sürdürülmesi."], applicationSteps: [{"title":"Üniteye yerleştirme","text":"Reçine miktarı ve yatak düzeni, yumuşatma ünitesinin kapasitesi, debisi ve giriş suyu sertliğine göre belirlenir."},{"title":"Servis ve rejenerasyon","text":"Çıkış suyu sertliği takip edilir. Reçine, ünitenin prosedürüne uygun tuzlu suyla rejenerasyona alınır; çevrim ve tuz tüketimi işletme koşullarına göre ayarlanır."}], purpose: 'Su Yumuşatma Reçinesi', description: 'Suyun kalsiyum ve magnezyum iyonlarını sodyum iyonlarıyla değiştirerek sertliği azaltan kuvvetli asidik katyonik reçinedir. Su yumuşatma ünitesinin reçine yatağında kullanılır; sıvı dozlama kimyasalı değildir.', applications: ['Endüstriyel su yumuşatma üniteleri', 'Kazan ve soğutma sistemleri için besleme suyu hazırlama', 'İşletmelerde kullanım suyu yumuşatma'], packaging: '35, 70 ve 250 kg HDPE bidon' },
    en: { introduction: "A strong-acid cation exchange resin in sodium form for water softeners. It reduces hardness by exchanging calcium and magnesium ions for sodium ions. Rather than liquid dosing, it operates in a resin bed through which water flows.", technicalFeatures: ["Polystyrene-based gel beads in sodium form.","The bulletin lists particle size of 0.3–1.2 mm and a minimum capacity of 2 eq/L.","NaCl regeneration supports repeated softening cycles."], applicationSteps: [{"title":"Loading the unit","text":"Determine resin quantity and bed arrangement according to softener capacity, flow and inlet hardness."},{"title":"Service and regeneration","text":"Monitor outlet hardness. Regenerate with brine under the unit procedure; adjust cycles and salt consumption to operating conditions."}], purpose: 'Water Softening Resin', description: 'A strong-acid cation exchange resin that reduces hardness by exchanging calcium and magnesium ions for sodium ions. It is used in a softener resin bed rather than dosed as a liquid chemical.', applications: ['Industrial water softening units', 'Feedwater preparation for boilers and cooling systems', 'Utility water softening in facilities'], packaging: '35, 70 and 250 kg HDPE containers' } },
{
  slug: 'alkelen-np150', name: 'Alkelen NP150', image: '/images/products/2/6.png', catalogNames: ['Alkelen np150', 'Alkelen NP150'], group: 'cleaning',
  tr: {
    purpose: 'Endüstriyel Yağ, Gres ve Karbon Temizleme Kimyasalı',
    description: 'Alkelen NP150, ağır yağ, karbon, gres ve proses kalıntılarının temizliği için geliştirilmiş yüksek alkali endüstriyel temizlik ürünüdür. Ekipman ve yüzeylerdeki kirlenmenin niteliğine göre uygun temizlik programında değerlendirilir.',
    introduction: 'Endüstriyel üretim ve bakım süreçlerinde yüzeylerde biriken yağ, gres ve proses kalıntıları için alkali temizlik çözümü sunar. Kireç temizliğine yönelik asidik ürünlerden farklı olarak yağlı ve organik kirlenmenin giderilmesine odaklanır. Ürün seçimi, temizlenecek yüzeyin malzemesi, kaplaması ve kirlenme özellikleri birlikte değerlendirilerek yapılır.',
    applications: ['Ağır yağ ve gresle kirlenmiş endüstriyel yüzeyler', 'Karbon ve proses kalıntısı bulunan ekipmanlar', 'Malzeme uygunluğu değerlendirilen makine parçaları ve bakım temizliği uygulamaları'],
    technicalFeatures: ['Yüksek alkali endüstriyel temizlik ürünü.', 'Ağır yağ, gres, karbon ve proses kalıntılarına yönelik kullanım.', 'Malzeme ve kaplama uygunluğu değerlendirilerek temizlik programına dahil edilir.'],
    applicationSteps: [
      { title: 'Yüzey ve kirlenmenin değerlendirilmesi', text: 'Ekipmanın malzemesi, kaplaması ve mevcut kalıntılar incelenir. Alkali temizliğe uygunluk ve uygulama yöntemi belirlenir.' },
      { title: 'Temizlik koşullarının belirlenmesi', text: 'Seyreltme oranı, sıcaklık, temas süresi ve uygulama yöntemi ürüne ait güncel teknik bilgiler ve sistem gerekliliklerine göre belirlenir.' },
      { title: 'Durulama ve kontrol', text: 'Temizlik sonrasında yüzey ve devreye uygun durulama yapılır. Kalıntıların giderilmesi ve ekipmanın sonraki kullanım koşulları kontrol edilir.' },
    ],
    packaging: '35, 70 ve 250 kg HDPE bidon',
  },
  en: {
    purpose: 'Industrial Oil, Grease and Carbon Cleaning Chemical',
    description: 'Alkelen NP150 is a highly alkaline industrial cleaning product developed for heavy oil, carbon, grease and process residues. It is assessed in a cleaning program according to equipment and surface contamination.',
    introduction: 'Provides an alkaline cleaning solution for oil, grease and process residues accumulated during industrial production and maintenance. Unlike acidic descaling products, it focuses on oily and organic contamination. Selection considers surface materials, coatings and contamination characteristics together.',
    applications: ['Industrial surfaces contaminated with heavy oil and grease', 'Equipment containing carbon and process residues', 'Machine components and maintenance cleaning subject to material compatibility review'],
    technicalFeatures: ['Highly alkaline industrial cleaning product.', 'Intended for heavy oil, grease, carbon and process residues.', 'Included in a cleaning program after reviewing material and coating compatibility.'],
    applicationSteps: [
      { title: 'Surface and contamination assessment', text: 'Review equipment materials, coatings and residues. Determine alkaline cleaning suitability and application method.' },
      { title: 'Defining cleaning conditions', text: 'Dilution, temperature, contact time and application method are determined using current product technical information and system requirements.' },
      { title: 'Rinsing and inspection', text: 'Rinse using a method appropriate for the surface and circuit. Check residue removal and requirements for subsequent equipment use.' },
    ],
    packaging: '35, 70 and 250 kg HDPE containers',
  },
},
]
const additionalCoolingPages: ProductPage[] = [
  {
    "slug": "org-211",
    "name": "ORG211",
    "image": "/images/products/4/4.png",
    "catalogNames": [
      "ORG211"
    ],
    "group": "cooling",
    "tr": {
      "purpose": "Soğutma Suyu Kireç Önleyici",
      "description": "Kapalı ve yarı açık soğutma suyu devrelerinde kireç ve mineral birikintilerinin kontrolü için kullanılan şartlandırma ürünüdür.",
      "introduction": "Kapalı ve yarı açık soğutma suyu devrelerinde kireç ve mineral birikintilerinin kontrolü için kullanılan şartlandırma ürünüdür. Ürün seçimi, mevcut su kalitesi, ekipman malzemeleri ve işletme koşulları birlikte incelenerek yapılır.",
      "applications": [
        "Kapalı ve yarı açık soğutma devreleri",
        "Malzeme uygunluğu değerlendirilen soğutma suyu ekipmanları"
      ],
      "technicalFeatures": [
        "Soğutma Suyu Kireç Önleyici",
        "Sisteme özel seçim ve teknik takip."
      ],
      "applicationSteps": [
        {
          "title": "Teknik değerlendirme",
          "text": "Su analizleri, devre hacmi, malzemeler ve işletme koşulları incelenir."
        },
        {
          "title": "Uygulama ve takip",
          "text": "Dozlama veya karışım koşulları güncel ürün teknik bilgileriyle belirlenir. Analizlerle program takip edilerek gerekli ayarlamalar yapılır."
        }
      ],
      "packaging": "35, 70 ve 250 kg HDPE bidon"
    },
    "en": {
      "purpose": "Cooling Water Scale Inhibitor",
      "description": "A treatment product for controlling scale and mineral deposits in closed and semi-open cooling water circuits.",
      "introduction": "A treatment product for controlling scale and mineral deposits in closed and semi-open cooling water circuits. Selection considers water quality, equipment materials and operating conditions together.",
      "applications": [
        "Closed and semi-open cooling circuits",
        "Cooling water equipment subject to material review"
      ],
      "technicalFeatures": [
        "Cooling Water Scale Inhibitor",
        "System-specific selection and technical monitoring."
      ],
      "applicationSteps": [
        {
          "title": "Technical assessment",
          "text": "Review water analyses, circuit volume, materials and operating conditions."
        },
        {
          "title": "Application and monitoring",
          "text": "Determine dosing or mixture conditions using current product technical information. Monitor analyses and adjust the program as required."
        }
      ],
      "packaging": "35, 70 and 250 kg HDPE containers"
    }
  },
  {
    "slug": "org-400",
    "name": "ORG400",
    "image": "/images/products/4/6.png",
    "catalogNames": [
      "ORG400"
    ],
    "group": "cooling",
    "tr": {
      "purpose": "HEDP Bazlı Soğutma Suyu Antiskalantı",
      "description": "Sertlik kaynaklı çökelmelerin kontrolü ve demir ile kalsiyum dispersiyonu için kullanılan HEDP bazlı antiskalanttır. Soğutma suyu programında su analizi ve çevrim koşullarına göre değerlendirilir.",
      "introduction": "Sertlik kaynaklı çökelmelerin kontrolü ve demir ile kalsiyum dispersiyonu için kullanılan HEDP bazlı antiskalanttır. Soğutma suyu programında su analizi ve çevrim koşullarına göre değerlendirilir. Ürün seçimi, mevcut su kalitesi, ekipman malzemeleri ve işletme koşulları birlikte incelenerek yapılır.",
      "applications": [
        "Soğutma suyu devrelerinde sertlik kaynaklı birikinti kontrolü",
        "Demir ve kalsiyum dispersiyonuna ihtiyaç duyulan şartlandırma programları"
      ],
      "technicalFeatures": [
        "HEDP Bazlı Soğutma Suyu Antiskalantı",
        "Sisteme özel seçim ve teknik takip."
      ],
      "applicationSteps": [
        {
          "title": "Teknik değerlendirme",
          "text": "Su analizleri, devre hacmi, malzemeler ve işletme koşulları incelenir."
        },
        {
          "title": "Uygulama ve takip",
          "text": "Dozlama veya karışım koşulları güncel ürün teknik bilgileriyle belirlenir. Analizlerle program takip edilerek gerekli ayarlamalar yapılır."
        }
      ],
      "packaging": "35, 70 ve 250 kg HDPE bidon"
    },
    "en": {
      "purpose": "HEDP-Based Cooling Water Antiscalant",
      "description": "An HEDP-based antiscalant for hardness-related deposits and iron and calcium dispersion. Assessed within a cooling water program using water analyses and concentration cycles.",
      "introduction": "An HEDP-based antiscalant for hardness-related deposits and iron and calcium dispersion. Assessed within a cooling water program using water analyses and concentration cycles. Selection considers water quality, equipment materials and operating conditions together.",
      "applications": [
        "Hardness-related deposit control in cooling circuits",
        "Treatment programs requiring iron and calcium dispersion"
      ],
      "technicalFeatures": [
        "HEDP-Based Cooling Water Antiscalant",
        "System-specific selection and technical monitoring."
      ],
      "applicationSteps": [
        {
          "title": "Technical assessment",
          "text": "Review water analyses, circuit volume, materials and operating conditions."
        },
        {
          "title": "Application and monitoring",
          "text": "Determine dosing or mixture conditions using current product technical information. Monitor analyses and adjust the program as required."
        }
      ],
      "packaging": "35, 70 and 250 kg HDPE containers"
    }
  },
  {
    "slug": "org-411",
    "name": "ORG411",
    "image": "/images/products/4/7.png",
    "catalogNames": [
      "ORG411"
    ],
    "group": "cooling",
    "tr": {
      "purpose": "Soğutma Kulesi Biyodispersantı",
      "description": "Soğutma kulelerinde biyolojik kaynaklı birikintilerin dağıtılmasına yönelik kullanılan biyodispersanttır. Biyolojik kontrol programında mevcut ürünler ve sistemin kirlenme durumuyla birlikte değerlendirilir.",
      "introduction": "Soğutma kulelerinde biyolojik kaynaklı birikintilerin dağıtılmasına yönelik kullanılan biyodispersanttır. Biyolojik kontrol programında mevcut ürünler ve sistemin kirlenme durumuyla birlikte değerlendirilir. Ürün seçimi, mevcut su kalitesi, ekipman malzemeleri ve işletme koşulları birlikte incelenerek yapılır.",
      "applications": [
        "Soğutma kuleleri ve bağlı su devreleri",
        "Biyolojik kaynaklı birikintilerin dağıtılmasına ihtiyaç duyulan sistemler"
      ],
      "technicalFeatures": [
        "Soğutma Kulesi Biyodispersantı",
        "Sisteme özel seçim ve teknik takip."
      ],
      "applicationSteps": [
        {
          "title": "Teknik değerlendirme",
          "text": "Su analizleri, devre hacmi, malzemeler ve işletme koşulları incelenir."
        },
        {
          "title": "Uygulama ve takip",
          "text": "Dozlama veya karışım koşulları güncel ürün teknik bilgileriyle belirlenir. Analizlerle program takip edilerek gerekli ayarlamalar yapılır."
        }
      ],
      "packaging": "35, 70 ve 250 kg HDPE bidon"
    },
    "en": {
      "purpose": "Cooling Tower Biodispersant",
      "description": "A biodispersant used in cooling towers to disperse biologically associated deposits. Assessed alongside existing products and fouling conditions in the biological control program.",
      "introduction": "A biodispersant used in cooling towers to disperse biologically associated deposits. Assessed alongside existing products and fouling conditions in the biological control program. Selection considers water quality, equipment materials and operating conditions together.",
      "applications": [
        "Cooling towers and associated circuits",
        "Systems requiring dispersion of biologically associated deposits"
      ],
      "technicalFeatures": [
        "Cooling Tower Biodispersant",
        "System-specific selection and technical monitoring."
      ],
      "applicationSteps": [
        {
          "title": "Technical assessment",
          "text": "Review water analyses, circuit volume, materials and operating conditions."
        },
        {
          "title": "Application and monitoring",
          "text": "Determine dosing or mixture conditions using current product technical information. Monitor analyses and adjust the program as required."
        }
      ],
      "packaging": "35, 70 and 250 kg HDPE containers"
    }
  },
  {
    "slug": "monopropilen-glikol",
    "name": "Monopropilen Glikol",
    "image": "/images/products/4/3.png",
    "catalogNames": [
      "Monopropilen Glikol 250kg",
      "Monopropylene Glycol 250kg"
    ],
    "group": "cooling",
    "tr": {
      "purpose": "Soğutma Sistemleri İçin Antifriz",
      "description": "Endüstriyel soğutma sistemlerinde donma noktası kontrolü amacıyla kullanılan glikol ürünüdür. Monoetilen glikolden ayrı bir üründür; karışım seçimi sistemin sıcaklık ve malzeme gerekliliklerine göre yapılır.",
      "introduction": "Endüstriyel soğutma sistemlerinde donma noktası kontrolü amacıyla kullanılan glikol ürünüdür. Monoetilen glikolden ayrı bir üründür; karışım seçimi sistemin sıcaklık ve malzeme gerekliliklerine göre yapılır. Ürün seçimi, mevcut su kalitesi, ekipman malzemeleri ve işletme koşulları birlikte incelenerek yapılır.",
      "applications": [
        "Endüstriyel kapalı devre soğutma sistemleri",
        "Uygunluk değerlendirmesi yapılan chiller ve eşanjör devreleri"
      ],
      "technicalFeatures": [
        "Soğutma Sistemleri İçin Antifriz",
        "Sisteme özel seçim ve teknik takip."
      ],
      "applicationSteps": [
        {
          "title": "Teknik değerlendirme",
          "text": "Su analizleri, devre hacmi, malzemeler ve işletme koşulları incelenir."
        },
        {
          "title": "Uygulama ve takip",
          "text": "Dozlama veya karışım koşulları güncel ürün teknik bilgileriyle belirlenir. Analizlerle program takip edilerek gerekli ayarlamalar yapılır."
        }
      ],
      "packaging": "35, 70 ve 250 kg HDPE bidon"
    },
    "en": {
      "purpose": "Antifreeze for Cooling Systems",
      "description": "A glycol product used for freezing point control in industrial cooling systems. It is distinct from monoethylene glycol; mixture selection depends on temperature and material requirements.",
      "introduction": "A glycol product used for freezing point control in industrial cooling systems. It is distinct from monoethylene glycol; mixture selection depends on temperature and material requirements. Selection considers water quality, equipment materials and operating conditions together.",
      "applications": [
        "Industrial closed-loop cooling systems",
        "Chiller and heat exchanger circuits subject to suitability review"
      ],
      "technicalFeatures": [
        "Antifreeze for Cooling Systems",
        "System-specific selection and technical monitoring."
      ],
      "applicationSteps": [
        {
          "title": "Technical assessment",
          "text": "Review water analyses, circuit volume, materials and operating conditions."
        },
        {
          "title": "Application and monitoring",
          "text": "Determine dosing or mixture conditions using current product technical information. Monitor analyses and adjust the program as required."
        }
      ],
      "packaging": "35, 70 and 250 kg HDPE containers"
    }
  }
]
productPages.push(...additionalCoolingPages)
productPages.push({
  slug: 'carbohydrazide', name: 'Carbohydrazide', image: '/images/products/1/2.png', catalogNames: ['Carbohydrazide - Kazan & Buhar Sistemi', 'Carbohydrazide - Boiler & Steam System'], group: 'boiler',
  tr: { purpose: 'Kazan Suyu Oksijen Kaynaklı Korozyon Kontrolü', description: 'Kazan suyu şartlandırma programlarında oksijen kaynaklı korozyonun kontrolü için değerlendirilen üründür. Ürün seçimi ve dozlama, besi suyu özellikleri ve kazan işletme koşulları birlikte incelenerek yapılır.', applications: ['Kazan besi suyu şartlandırma programları', 'Buhar kazanlarında oksijen kaynaklı korozyon kontrolü'], introduction: 'Besi suyu kalitesi, mevcut deaerasyon sistemi ve kullanılan diğer kimyasallar ürün seçiminin parçasıdır. İşletmeye uygun kimyasal program hazırlanırken analiz sonuçları ve ekipman gereklilikleri birlikte ele alınır.', applicationSteps: [{ title: 'Teknik değerlendirme', text: 'Besi suyu analizleri, işletme koşulları ve mevcut şartlandırma programı incelenir.' }, { title: 'Dozlama ve takip', text: 'Dozlama noktası ve miktarı güncel ürün teknik bilgilerine göre belirlenir. Su analizleriyle program takip edilir.' }], packaging: '35, 70 ve 250 kg HDPE bidon' },
  en: { purpose: 'Oxygen-Related Corrosion Control in Boiler Water', description: 'A product assessed for oxygen-related corrosion control in boiler water treatment programs. Selection and dosing consider feedwater characteristics and boiler operating conditions together.', applications: ['Boiler feedwater treatment programs', 'Oxygen-related corrosion control in steam boilers'], introduction: 'Feedwater quality, the existing deaeration system and other treatment chemicals inform product selection. The treatment program considers analysis results and equipment requirements together.', applicationSteps: [{ title: 'Technical assessment', text: 'Review feedwater analyses, operating conditions and the existing treatment program.' }, { title: 'Dosing and monitoring', text: 'Determine feeding point and quantity using current product technical information. Monitor the program through water analyses.' }], packaging: '35, 70 and 250 kg HDPE containers' },
})
export function findProductPage(name: string) { return productPages.find(product => product.catalogNames.includes(name)) }
export function productPagePath(product: ProductPage) { return `${productBasePath}/${product.slug}` }
