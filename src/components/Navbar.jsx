import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        ✈️ <span>FlyTicket</span>
      </div>

      {/* Menü */}
      <ul className="menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Ana Sayfa
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/ucuslar"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Uçuşlar
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/hakkimizda"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Hakkımızda
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/iletisim"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            İletişim
          </NavLink>
        </li>

        {/* Sağ Taraftaki Butonlar */}
        <li className="auth-buttons">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `login-btn ${isActive ? "active-btn" : ""}`
            }
          >
            Giriş Yap
          </NavLink>

          <NavLink
            to="/register"
            className={({ isActive }) =>
              `register-btn ${isActive ? "active-btn" : ""}`
            }
          >
            Kayıt Ol
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;