import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      {/* Corner accent lines */}
      <span className="navbar__corner navbar__corner--tl" />
      <span className="navbar__corner navbar__corner--br" />

      <div className="nav-container">
        <Link to="/" className="logo">
          <span className="logo__bracket">[</span>
          Portfolio
          <span className="logo__bracket">]</span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-links">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`nav-link ${location.pathname === to ? "active" : ""}`}
              >
                <span className="nav-link__index">
                  {String(navLinks.indexOf({ to, label }) + 1).padStart(2, "0")}
                  .
                </span>
                {label}
                <span className="nav-link__bar" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${menuOpen ? "mobile-drawer--open" : ""}`}>
        <ul className="mobile-links">
          {navLinks.map(({ to, label }, i) => (
            <li
              key={to}
              style={{ animationDelay: menuOpen ? `${i * 0.08}s` : "0s" }}
              className={menuOpen ? "slide-in" : ""}
            >
              <Link
                to={to}
                className={`mobile-link ${location.pathname === to ? "active" : ""}`}
              >
                <span className="mobile-link__num">0{i + 1}</span>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
