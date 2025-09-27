// app/components/Navbar.js

import Link from 'next/link'; // Use Next.js Link for navigation
import Image from 'next/image'; // Use Next.js Image for optimization

const Navbar = () => {
  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/" className="logo-link">
            {/* Make sure your logo is in the `public` folder */}
            <Image src="/ENERGY MINDS_LOGO.png" alt="Company Logo" width={150} height={100} className="logo-image" />
          </Link>
          <div className="logo-pulse"></div>
        </div>
        <ul className="nav-menu">
          {/* For single-page scrolling, regular <a> tags are fine */}
          <li><a href="#hero" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#team" className="nav-link">Team</a></li>
          <li><a href="#services" className="nav-link">Services</a></li>
          <li><a href="#markets" className="nav-link">Markets</a></li>
          <li><a href="#clients" className="nav-link">Clients</a></li>
          <li>
            <a
              href="/EPSPL_TL_01.08.25_-1.pdf"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Statutory Requirements
            </a>
          </li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
