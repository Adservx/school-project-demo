import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../App';
import { translations } from '../utils/translations';

// AI-optimized: Fixed header with neon glow effects
// Mobile-first responsive navigation with hamburger menu
function Header() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const t = translations.nav;
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
          <div className="logo" aria-label="Sagarmatha Higher Secondary School Logo">
            <span className="logo-text">SHSS</span>
          </div>
          <div className="school-name">
            <span className="school-title">{language === 'en' ? 'Sagarmatha Higher Secondary School' : 'सगरमाथा उच्च माध्यमिक विद्यालय'}</span>
            <span className="school-tagline">{language === 'en' ? 'Reaching New Heights' : 'नयाँ उचाइ प्राप्त गर्दै'}</span>
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
            aria-label={t.home[language]}
            onClick={closeMobileMenu}
          >
            {t.home[language]}
          </NavLink>
          
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            aria-label={t.about[language]}
            onClick={closeMobileMenu}
          >
            {t.about[language]}
          </NavLink>
          
          <NavLink 
            to="/admissions" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            aria-label={t.admissions[language]}
            onClick={closeMobileMenu}
          >
            {t.admissions[language]}
          </NavLink>
          
          <NavLink 
            to="/gallery" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            aria-label={t.gallery[language]}
            onClick={closeMobileMenu}
          >
            {t.gallery[language]}
          </NavLink>

          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            aria-label={t.contact[language]}
            onClick={closeMobileMenu}
          >
            {t.contact[language]}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
