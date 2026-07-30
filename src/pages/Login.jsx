import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hata mesajı için state
  const [error, setError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    // Önce eski hatayı temizle
    setError("");


    // Boş alan kontrolü
    if (!email || !password) {
      setError("Lütfen tüm alanları doldurunuz.");
      return;
    }


    // E-posta kontrolü
    if (!email.includes("@")) {
      setError("Geçerli bir e-posta adresi giriniz.");
      return;
    }


    // Şifre uzunluğu kontrolü
    if (password.length < 6) {
      setError("Şifre en az 6 karakter olmalıdır.");
      return;
    }


    // Kontroller başarılıysa
    console.log("=== Giriş Bilgileri ===");
    console.log("E-posta:", email);
    console.log("Şifre:", password);


    alert("Giriş başarılı!");
  };


  return (
    <div className="login-container">

      <div className="login-card">

        <h1>Giriş Yap</h1>


        <form onSubmit={handleSubmit}>


          <div className="form-group">

            <label>
              E-posta veya TC Kimlik No
            </label>

            <input
              type="text"
              placeholder="E-posta veya TC Kimlik No"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />

          </div>



          <div className="form-group">

            <label>
              Şifre
            </label>

            <input
              type="password"
              placeholder="Şifrenizi giriniz"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

          </div>



          {
            error && (
              <p className="error-message">
                {error}
              </p>
            )
          }



          <button 
            type="submit" 
            className="login-btn"
          >
            Giriş Yap
          </button>


        </form>



        <div className="login-links">

          <a href="#">
            Şifremi Unuttum?
          </a>


          <p>
            Hesabınız yok mu?{" "}

            <Link to="/register">
              Kayıt Ol
            </Link>

          </p>


        </div>


      </div>

    </div>
  );
}


export default Login;