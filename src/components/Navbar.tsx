import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Products", href: "/#products" },
  { label: "Industries", href: "/#industries" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar--scrolled" : ""
      }`}
    >
      <div className="container navbar__inner">
        <Link
          to="/"
          className="navbar__logo"
          onClick={closeMenu}
        >
          <span className="navbar__logo-icon">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M16 2L28 9V23L16 30L4 23V9L16 2Z"
                stroke="url(#logoGrad)"
                strokeWidth="1.5"
              />

              <path
                d="M16 10L22 14V22L16 26L10 22V14L16 10Z"
                fill="url(#logoGrad)"
              />

              <defs>
                <linearGradient
                  id="logoGrad"
                  x1="4"
                  y1="2"
                  x2="28"
                  y2="30"
                >
                  <stop stopColor="#60A5FA" />
                  <stop
                    offset="1"
                    stopColor="#A855F7"
                  />
                </linearGradient>
              </defs>
            </svg>
          </span>

          <span>
            Fulmen{" "}
            <span className="gradient-text">
              Technology
            </span>
          </span>
        </Link>

        <nav
          className={`navbar__nav ${
            menuOpen ? "navbar__nav--open" : ""
          }`}
        >
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.href === "/careers" || link.href === "/" ? (
                  <NavLink
                    to={link.href}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive ? "active" : ""
                    }
                  >
                    {link.label}
                  </NavLink>
                ) : (
                  <a
                    href={link.href}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <Button
              variant="ghost"
              size="md"
              href="/#contact"
            >
              Let's Talk
            </Button>

            <Button
              variant="primary"
              size="md"
              href="/#contact"
            >
              Start Your Project
            </Button>
          </div>
        </nav>

        <button
          type="button"
          className={`navbar__toggle ${
            menuOpen
              ? "navbar__toggle--open"
              : ""
          }`}
          aria-label={
            menuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen((open) => !open)
          }
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
