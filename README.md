# ✈️ FlyTicket - React Uçak Bileti Rezervasyon Uygulaması

## Proje Hakkında

FlyTicket, React öğrenme ve staj çalışması kapsamında geliştirilmiş örnek bir uçak bileti rezervasyon uygulamasıdır.

Bu projede React'in temel yapıları kullanılarak component tabanlı bir uygulama geliştirilmiş, React Router ile sayfa yönlendirmeleri yapılmış ve REST API mantığı `fetch()` kullanılarak örneklenmiştir.

---

## Kullanılan Teknolojiler

* React
* Vite
* React Router DOM
* JavaScript (ES6+)
* HTML5
* CSS3

---

## Proje Özellikleri

* Component tabanlı mimari
* Yeniden kullanılabilir bileşenler (Navbar, Footer, ProductCard)
* React Router ile sayfa yönlendirmeleri
* Sayfa yenilenmeden (SPA) geçiş
* Aynı component'in farklı sayfalarda kullanılması
* `useState` ile state yönetimi
* `useEffect` ile sayfa açılışında veri çekme
* `fetch()` ile REST servis örneği
* JSON verisinin `map()` kullanılarak ekrana listelenmesi

---

## Sayfalar

* Ana Sayfa
* Uçuşlar
* Hakkımızda
* İletişim

---

## Klasör Yapısı

```text
src
│
├── components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ProductCard.jsx
│
├── pages
│   ├── Home.jsx
│   ├── Flights.jsx
│   ├── About.jsx
│   └── Contact.jsx
│
├── App.jsx
└── main.jsx

public
└── flights.json
```

---

## Projeyi Çalıştırma

1. Gerekli paketleri yükleyin.

```bash
npm install
```

2. Geliştirme sunucusunu başlatın.

```bash
npm run dev
```

3. Tarayıcıdan aşağıdaki adresi açın.

```text
http://localhost:5173
```

---

## Öğrenilen React Konuları

* React Component
* Props
* React Router
* BrowserRouter
* Routes & Route
* NavLink
* useState
* useEffect
* fetch API (3 tane kayıt girildi)
* REST Servis Mantığı (eklenecek)
* JSON Verisi ile Çalışma (eklenecek)
* map() ile Listeleme (eklenecek)
## Sonraki Geliştirmeler
- REST servis mantığının geliştirilmesi
- Loading (Yükleniyor) ekranı
- Error Handling (Hata Yönetimi)
- async/await ile API istekleri
- Axios kullanımı
- POST isteği (Rezervasyon oluşturma)
- JWT Authentication (Kullanıcı Girişi)

---

## Geliştirici

**Senanur Yıldız**

Yönetim Bilişim Sistemleri Öğrencisi

React Staj Çalışması - 2026
