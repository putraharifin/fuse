import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const menuItems = [
  { key: "home", href: "#home" },
  { key: "about", href: "#tentang" },
  { key: "vision", href: "#visi" },
  { key: "organization", href: "#organisasi" },
  { key: "research", href: "#" },
  { key: "publications", href: "#" },
  { key: "partnership", href: "#" },
  { key: "contact", href: "#" },
];

function Navbar() {
  const { t } = useLanguage();
  const menuRef = useRef(null);

  // Menutup menu otomatis setelah link diklik (khusus tampilan HP)
  const handleLinkClick = () => {
    const menu = menuRef.current;
    if (menu && menu.classList.contains("show") && window.bootstrap) {
      window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img
            src="/Logo_nobackgournd.PNG"
            width="65"
            className="me-3"
            alt={t.brand.logoAlt}
          />

          <div>
            <h4 className="company-name mb-0">{t.brand.line1}</h4>
            <h4 className="company-name mb-0">{t.brand.line2}</h4>
          </div>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu" ref={menuRef}>
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {menuItems.map((item, index) => (
              <li className="nav-item" key={item.key}>
                <a
                  className={`nav-link${index === 0 ? " active" : ""}`}
                  href={item.href}
                  onClick={handleLinkClick}
                >
                  {t.nav[item.key]}
                </a>
              </li>
            ))}
          </ul>

          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;