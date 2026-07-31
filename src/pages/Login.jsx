import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../api/authService";
import "./Login.css";

function Login() {
  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateInput = () => {
    const value = identity.trim();

    if (!value || !password.trim()) {
      return "Lütfen tüm alanları doldurunuz.";
    }

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const isTc = /^\d{11}$/.test(value);

    if (!isEmail && !isTc) {
      return "Geçerli bir e-posta veya 11 haneli TC Kimlik No giriniz.";
    }

    if (password.length < 6) {
      return "Şifre en az 6 karakter olmalıdır.";
    }

    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const validationError = validateInput();

    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      /*
      const response = await login({
        identity: identity.trim(),
        password,
      });

      console.log(response.data);

      localStorage.setItem("token", response.data.token);
      */

      console.log("=== Giriş Bilgileri ===");
      console.log("Kimlik:", identity);
      console.log("Şifre:", password);

      alert("Giriş başarılı!");

      setIdentity("");
      setPassword("");
    } catch (err) {
      console.error(err);
      setError("E-posta/TC Kimlik No veya şifre hatalı.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Giriş Yap</h1>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="identity">
              E-posta veya TC Kimlik No
            </label>

            <input
              id="identity"
              type="text"
              placeholder="E-posta veya TC Kimlik No"
              value={identity}
              onChange={(e) => setIdentity(e.target.value)}
              autoComplete="username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Şifre
            </label>

            <input
              id="password"
              type="password"
              placeholder="Şifrenizi giriniz"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button
            type="submit"
            className="login-btn"
            disabled={loading}
          >
            {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
          </button>
        </form>

        <div className="login-links">
          <Link to="/forgot-password">
            Şifremi Unuttum?
          </Link>

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