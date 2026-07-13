import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        ✈️ <span>FlyTicket</span>
      </div>

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

      </ul>

    </nav>
  );
}

export default Navbar;