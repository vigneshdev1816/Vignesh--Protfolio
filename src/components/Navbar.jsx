import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className={`navbar${scrolled || menuOpen ? " scrolled" : ""}`}>
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          Vignesh Chinnasamy
        </a>

        <button
          type="button"
          className={`navbar-toggle${menuOpen ? " open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar-links${menuOpen ? " open" : ""}`}>
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link}`} onClick={() => setMenuOpen(false)}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
