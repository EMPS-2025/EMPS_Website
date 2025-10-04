// app/components/Navbar.js
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link'; // Use Next.js Link for navigation
import Image from 'next/image'; // Use Next.js Image for optimization

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#team', label: 'Team' },
  { href: '#services', label: 'Services' },
  { href: '#markets', label: 'Markets' },
  { href: '#clients', label: 'Clients' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar${isScrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/" className="logo-link" onClick={closeMenu}>
            {/* Make sure your logo is in the `public` folder */}
            <Image src="/ENERGY MINDS_LOGO.png" alt="Company Logo" width={150} height={50} className="logo-image" />
          </Link>
          <div className="logo-pulse"></div>
        </div>
                <button
          type="button"
          className={`nav-toggle${isMenuOpen ? ' nav-toggle--open' : ''}`}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="nav-toggle__bar" aria-hidden="true"></span>
          <span className="nav-toggle__bar" aria-hidden="true"></span>
          <span className="nav-toggle__bar" aria-hidden="true"></span>
          <span className="sr-only">{isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}</span>
        </button>

        <ul
          id="primary-navigation"
          className={`nav-menu${isMenuOpen ? ' nav-menu--open' : ''}`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link" onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/EPSPL_TL_01.08.25_-1.pdf"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Statutory Requirements
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
