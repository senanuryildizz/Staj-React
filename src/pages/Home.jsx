import ProductCard from "../components/ProductCard";
import "./Home.css";

const flights = [
  {
    id: 1,
    productName: "İstanbul → Ankara",
    airline: "Türk Hava Yolları",
    price: 1850,
    time: "08:30",
  },
  {
    id: 2,
    productName: "İstanbul → İzmir",
    airline: "Pegasus",
    price: 1250,
    time: "13:45",
  },
  {
    id: 3,
    productName: "İstanbul → Antalya",
    airline: "AJet",
    price: 1600,
    time: "18:20",
  },
];

function Home() {
  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">

        <div className="hero-content">

          <h1>Dünyayı Keşfet ✈</h1>

          <p>
            Yurt içi ve yurt dışı uçuşlarda en uygun fiyatları keşfedin.
            Güvenli ödeme, kolay rezervasyon ve hızlı biletleme ile
            seyahatinizi planlayın.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Uçuş Ara
            </button>

            <button className="secondary-btn">
              Kampanyaları İncele
            </button>
          </div>

        </div>

      </section>

      {/* POPÜLER UÇUŞLAR */}

      <section className="popular-section">

        <div className="section-title">

          <h2>Popüler Uçuşlar</h2>

          <p>
            En çok tercih edilen rotaları inceleyin ve avantajlı fiyatlarla
            biletinizi hemen alın.
          </p>

        </div>

        <div className="products-grid">

          {flights.map((flight) => (
            <ProductCard
              key={flight.id}
              productName={flight.productName}
              airline={flight.airline}
              price={flight.price}
              time={flight.time}
            />
          ))}

        </div>

      </section>

      {/* ÖZELLİKLER */}

      <section className="features">

        <div className="feature-card">
          <span>✈️</span>
          <h3>500+ Destinasyon</h3>
          <p>
            Dünyanın dört bir yanına uygun fiyatlı uçuş seçenekleri.
          </p>
        </div>

        <div className="feature-card">
          <span>💳</span>
          <h3>Güvenli Ödeme</h3>
          <p>
            SSL korumalı altyapı ile güvenli ödeme deneyimi.
          </p>
        </div>

        <div className="feature-card">
          <span>⏰</span>
          <h3>7/24 Destek</h3>
          <p>
            Her zaman ulaşabileceğiniz müşteri destek ekibi.
          </p>
        </div>

        <div className="feature-card">
          <span>🏷️</span>
          <h3>En Uygun Fiyat</h3>
          <p>
            Kampanyaları kaçırmadan en avantajlı bileti yakalayın.
          </p>
        </div>

      </section>

      {/* İSTATİSTİKLER */}

      <section className="stats">

        <div className="stat-box">
          <h2>1M+</h2>
          <p>Mutlu Yolcu</p>
        </div>

        <div className="stat-box">
          <h2>500+</h2>
          <p>Destinasyon</p>
        </div>

        <div className="stat-box">
          <h2>120+</h2>
          <p>Hava Yolu Partneri</p>
        </div>

        <div className="stat-box">
          <h2>24/7</h2>
          <p>Canlı Destek</p>
        </div>

      </section>

    </main>
  );
}

export default Home;