import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h3>✈️ FlyTicket</h3>
          <p>Türkiye'nin güvenilir uçak bileti platformu.</p>
        </div>

        <div className="footer-section">
          <h3>Hızlı Menü</h3>
          <p>Ana Sayfa</p>
          <p>Hakkımızda</p>
          <p>İletişim</p>
        </div>

        <div className="footer-section">
          <h3>İletişim</h3>
          <p>📍 İstanbul / Türkiye</p>
          <p>📧 info@flyticket.com</p>
          <p>📞 +90 212 000 00 00</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 FlyTicket | Tüm Hakları Saklıdır.
      </div>

    </footer>
  );
}

export default Footer;