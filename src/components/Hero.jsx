import "./Hero.css";
import SearchBox from "./SearchBox";

function Hero() {
  return (
    <section className="hero">

      <h1 style={{color:"red"}}>
        HERO ÇALIŞIYOR
      </h1>

      {/* Arka Plan Efekti */}
      <div className="hero-overlay"></div>


      <div className="hero-container">

        {/* Sol Alan */}
        <div className="hero-content">

          <span className="hero-badge">
            ✈ Türkiye'nin En Güvenilir Uçuş Platformu
          </span>


          <h1>
            Hayalindeki <span>Yolculuğa</span>
            <br />
            Bugün Başla
          </h1>


          <p>
            Türkiye'nin ve dünyanın dört bir yanına uygun fiyatlı uçak
            biletlerini saniyeler içinde karşılaştırın, güvenle satın alın.
          </p>


          <div className="hero-buttons">

            <button className="primary-btn">
              Uçuş Ara
            </button>


            <button className="secondary-btn">
              Kampanyalar
            </button>

          </div>

        </div>



        {/* Sağ Alan */}
        <div className="hero-image">

          <img 
            src="/airplane.jpg"
            alt="Uçak"
          />

        </div>


      </div>


      <SearchBox />

    </section>
  );
}

export default Hero;