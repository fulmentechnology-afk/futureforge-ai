import { useEffect, useState } from 'react'
import { Button } from './Button'
import './Navbar.css'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-icon">
            <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
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
                <linearGradient id="logoGrad" x1="4" y1="2" x2="28" y2="30">
                  <stop stopColor="#60a5fa" />
                  <stop offset="1" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          FutureForge <span className="gradient-text">AI</span>
        </a>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="navbar__actions">
            <Button variant="ghost" size="md" href="#contact">
              Book Demo
            </Button>
            <Button variant="primary" size="md" href="#pricing">
              Get Started
            </Button>
          </div>
        </nav>

        <button
          type="button"
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
