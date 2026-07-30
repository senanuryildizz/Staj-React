import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [tc, setTc] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    // Ad kontrolü
    if (!name.trim()) {
      setError("Lütfen adınızı giriniz.");
      return;
    }

    // Soyad kontrolü
    if (!surname.trim()) {
      setError("Lütfen soyadınızı giriniz.");
      return;
    }

    // Mail kontrolü
    if (!email.trim()) {
      setError("Lütfen e-posta adresinizi giriniz.");
      return;
    }

    if (!email.includes("@")) {
      setError("Geçerli bir e-posta adresi giriniz.");
      return;
    }

    // TC kontrolü
    if (!/^\d+$/.test(tc)) {
      setError("TC Kimlik No sadece rakamlardan oluşmalıdır.");
      return;
    }

    if (tc.length !== 11) {
      setError("TC Kimlik No 11 haneli olmalıdır.");
      return;
    }

    // Şifre kontrolü
    if (password.length < 6) {
      setError("Şifre en az 6 karakter olmalıdır.");
      return;
    }

    // Şifre tekrar
    if (!passwordAgain) {
      setError("Lütfen şifrenizi tekrar giriniz.");
      return;
    }

    if (password !== passwordAgain) {
      setError("Şifreler uyuşmuyor.");
      return;
    }

    // Başarılı kayıt
    console.log("=== Kayıt Bilgileri ===");
    console.log("Ad:", name);
    console.log("Soyad:", surname);
    console.log("E-posta:", email);
    console.log("TC Kimlik No:", tc);
    console.log("Şifre:", password);

    alert("Kayıt başarılı!");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Kayıt Ol</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Ad</label>
            <input
              type="text"
              placeholder="Adınız"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Soyad</label>
            <input
              type="text"
              placeholder="Soyadınız"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>E-posta</label>
            <input
              type="email"
              placeholder="E-posta"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>TC Kimlik No</label>
            <input
              type="text"
              placeholder="11 haneli TC Kimlik No"
              maxLength="11"
              value={tc}
              onChange={(e) => setTc(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Şifre</label>
            <input
              type="password"
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Şifre Tekrar</label>
            <input
              type="password"
              placeholder="Şifreyi tekrar giriniz"
              value={passwordAgain}
              onChange={(e) => setPasswordAgain(e.target.value)}
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="register-btn">
            Kayıt Ol
          </button>
        </form>

        <div className="register-links">
          <p>
            Zaten hesabınız var mı? <Link to="/login">Giriş Yap</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;