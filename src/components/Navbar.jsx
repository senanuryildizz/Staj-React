import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <NavLink to="/" className="logo" onClick={closeMenu}>

        <div className="logo-icon">
          🛫
        </div>

        <div className="logo-text">
          <h2>FlyTicket</h2>
          <span>Discover the Sky</span>
        </div>

      </NavLink>

      {/* Hamburger */}

      <button
        type="button"
        className="hamburger"
        aria-label="Menüyü Aç"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Menü */}

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>

        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          Ana Sayfa
        </NavLink>

        <NavLink
          to="/ucuslar"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          Uçuşlar
        </NavLink>

        <NavLink
          to="/hakkimizda"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          Hakkımızda
        </NavLink>

        <NavLink
          to="/iletisim"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          İletişim
        </NavLink>

        <div className="auth-buttons">

          <NavLink
            to="/login"
            className="login-btn"
            onClick={closeMenu}
          >
            Giriş Yap
          </NavLink>

          <NavLink
            to="/register"
            className="register-btn"
            onClick={closeMenu}
          >
            Kayıt Ol
          </NavLink>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;