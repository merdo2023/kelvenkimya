# Kelven Kimya — Kurumsal Web Sitesi

Kelven Kimya için modern, çift dilli (Türkçe / İngilizce) kurumsal web sitesi.

**Teknolojiler:** React, TypeScript, Vite, React Router, Tailwind CSS, i18next, Framer Motion, Lucide React

## Kurulum ve Çalıştırma

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build

# Build önizleme
npm run preview
```

Geliştirme sunucusu varsayılan olarak `http://localhost:5173` adresinde çalışır.

## Proje Yapısı

```
src/
├── assets/logo/          # Logo dosyaları
├── components/
│   ├── common/           # Yeniden kullanılabilir bileşenler
│   ├── contact/          # İletişim formu ve bilgileri
│   ├── home/             # Ana sayfa bölümleri
│   ├── layout/           # Navbar, Footer, dil değiştirici
│   └── products/         # Ürün kartları
├── data/                 # Route ve ikon eşleştirmeleri
├── i18n/                 # i18next yapılandırması
├── locales/              # Dil dosyaları (tr.json, en.json)
├── pages/                # Sayfa bileşenleri
└── types/                # TypeScript tipleri
```

## Dil Desteği (i18n)

- Varsayılan dil: **Türkçe**
- Desteklenen diller: `tr`, `en`
- Seçilen dil `localStorage` içinde `kelven-kimya-lang` anahtarıyla saklanır
- Navbar'daki **TR | EN** düğmesiyle dil değiştirilir
- Tüm görünür metinler locale dosyalarından gelir; bileşenlerde sabit metin kullanılmaz

### Çeviri Düzenleme

Metinleri değiştirmek için ilgili locale dosyasını düzenleyin:

- Türkçe: `src/locales/tr.json`
- İngilizce: `src/locales/en.json`

Her iki dosyada aynı anahtar yapısını koruyun. Yeni bir anahtar eklediğinizde her iki dile de ekleyin.

**Örnek — ortak metin:**

```json
"common": {
  "getQuote": "Teklif Al"
}
```

Bileşende kullanım:

```tsx
const { t } = useTranslation()
t('common.getQuote')
```

**Örnek — dizi içeriği (dinamik render):**

```tsx
const stats = t('home.stats', { returnObjects: true }) as StatItem[]
stats.map((stat) => ...)
```

## Yeni Ürün Ekleme

Ürünler `products.categories` dizisi altında kategori bazlı tanımlanır. Bileşen kodu değiştirmeden locale dosyasına ekleme yapmanız yeterlidir.

### Mevcut kategoriye ürün ekleme

`src/locales/tr.json` ve `src/locales/en.json` dosyalarında ilgili kategorinin `products` dizisine yeni öğe ekleyin:

```json
{
  "id": "kelvenoks",
  "title": "Kelvenoks Serisi",
  "description": "...",
  "products": [
    { "name": "Kelvenoks Ferlin 123", "description": "..." },
    { "name": "Yeni Ürün Adı", "description": "Ürün açıklaması" }
  ]
}
```

### Yeni kategori ekleme

`products.categories` dizisine yeni bir kategori nesnesi ekleyin. Kategori otomatik olarak **Ürünler sayfasında** ve **ana sayfa ürün önizlemesinde** görünür:

```json
{
  "id": "yeni-kategori",
  "title": "Yeni Kategori Başlığı",
  "description": "Kategori açıklaması",
  "products": [
    { "name": "Ürün 1", "description": "Açıklama" }
  ]
}
```

Footer'daki hizmet listesi `home.services.items` dizisinden otomatik türetilir; ayrıca tanımlamanız gerekmez.

İkon eşleştirmesi için `src/data/icons.ts` dosyasındaki `categoryIcons` haritasına yeni `id` ekleyebilirsiniz.

## Yeni Referans Ekleme

Referanslar `references.items` dizisinde tanımlanır:

```json
{
  "id": "ref-6",
  "projectName": "Proje Adı",
  "country": "Ülke",
  "sector": "Sektör",
  "serviceType": "Hizmet Türü",
  "description": "Proje açıklaması"
}
```

Bu girişi hem `tr.json` hem `en.json` dosyalarına ekleyin. Referanslar sayfası ve ana sayfa önizlemesi otomatik güncellenir.

### Referansları gizlemek (boş durum)

Tüm referansları kaldırmak için `references.items` dizisini boş bırakın (`[]`). Sistem locale dosyasındaki `emptyState` metinlerini gösterir.

## Logo Değiştirme

Logo dosyası: `public/kelvenkimya.png`

Kendi logonuzu aynı dosya adıyla `public/` klasörüne koyarak değiştirebilirsiniz. Logo yolu `src/components/common/Logo.tsx` içinde tanımlıdır.

## Marka Renkleri

| Renk   | Hex       | Kullanım                          |
|--------|-----------|-----------------------------------|
| Navy   | `#0B1F33` | Ana koyu ton, footer, başlıklar   |
| Blue   | `#1E73BE` | Birincil buton, vurgu             |
| Cyan   | `#00A6D6` | Su/teknoloji aksan                |
| Green  | `#38A169` | Sürdürülebilirlik aksan           |
| Light  | `#F7FAFC` | Arka plan                         |
| Gray   | `#4A5568` | Gövde metni                       |

Tailwind sınıfları: `bg-navy`, `text-brand-blue`, `text-cyan`, `bg-green`, `bg-light-bg`, `text-text-gray`

## Sayfalar

| Rota           | Sayfa        |
|----------------|--------------|
| `/`            | Ana Sayfa    |
| `/products`    | Ürünler      |
| `/about`       | Hakkımızda   |
| `/references`  | Referanslar  |
| `/contact`     | İletişim     |

## Lisans

© Kelven Kimya. Tüm hakları saklıdır.
