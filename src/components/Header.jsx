import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Fixed header with neon glow effects
// Mobile-first responsive navigation with hamburger menu
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header" role="banner">
      <div className="header-container">
        {/* Logo and school name */}
        <div className="logo-section">
          <div className="logo" aria-label="Ranabir Janahit Secondary School Logo">
            <img src="/logo.svg" alt="School Logo" className="logo-img" />
          </div>
          <div className="school-name">
            <span className="school-title">Ranabir Janahit Secondary School</span>
            <span className="school-tagline">Excellence in Education Since 2020 B.S.</span>
          </div>
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation Links */}
        <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`} role="navigation" aria-label="Main navigation">
          <NavLink 
            to="/home" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            aria-label="Home"
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
          
          <NavLink 
            to="/courses" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            aria-label="Courses"
            onClick={closeMobileMenu}
          >
            Courses
          </NavLink>
          
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            aria-label="About"
            onClick={closeMobileMenu}
          >
            About
          </NavLink>
          
          <NavLink 
            to="/facilities" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            aria-label="Facilities"
            onClick={closeMobileMenu}
          >
            Facilities
          </NavLink>
          
          <NavLink 
            to="/programs" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            aria-label="Programs"
            onClick={closeMobileMenu}
          >
            Programs
          </NavLink>
          
          <NavLink 
            to="/admissions" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            aria-label="Admissions"
            onClick={closeMobileMenu}
          >
            Admissions
          </NavLink>
          
          <NavLink 
            to="/gallery" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            aria-label="Gallery"
            onClick={closeMobileMenu}
          >
            Gallery
          </NavLink>

          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            aria-label="Contact"
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
