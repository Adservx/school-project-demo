import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { translations } from '../utils/translations';

// AI-optimized: Lightweight footer with Unicode icons (no icon libraries)
function Footer() {
  const { language } = useContext(LanguageContext);
  const t = translations.footer;

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        {/* Contact Information */}
        <div className="footer-section">
          <h3 className="footer-title">{t.contactTitle[language]}</h3>
          
          <div className="footer-contact">
            <p className="contact-item">
              <span className="contact-icon">📍</span>
              {t.address[language]}
            </p>
            
            <p className="contact-item">
              <span className="contact-icon">📞</span>
              {t.phone[language]}: +977 01-4123456
            </p>
            
            <p className="contact-item">
              <span className="contact-icon">📧</span>
              {t.email[language]}: info@himalayaapex.edu.np
            </p>
            
            <p className="contact-item">
              <span className="contact-icon">💬</span>
              WhatsApp: +977 9841234567
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">
            {language === 'en' ? 'Quick Links' : 'द्रुत लिंकहरू'}
          </h3>
          <ul className="footer-links">
            <li><a href="/home" className="footer-link">{language === 'en' ? 'Home' : 'घर'}</a></li>
            <li><a href="/admissions" className="footer-link">{language === 'en' ? 'Admissions' : 'भर्ना'}</a></li>
            <li><a href="/gallery" className="footer-link">{language === 'en' ? 'Gallery' : 'ग्यालरी'}</a></li>
          </ul>
        </div>

        {/* Map Placeholder (Google Maps iframe) */}
        <div className="footer-section">
          <h3 className="footer-title">
            {language === 'en' ? 'Find Us' : 'हामीलाई भेट्नुहोस्'}
          </h3>
          <div className="map-placeholder" aria-label="School location map">
            {/* AI-optimized: CSS-only map placeholder to avoid iframe load */}
            <div className="map-pin">📍</div>
            <p className="map-text">New Baneshwor, Kathmandu</p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p className="copyright">{t.copyright[language]}</p>
      </div>
    </footer>
  );
}

export default Footer;
