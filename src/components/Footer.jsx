import React from 'react';
import { schoolInfo } from '../utils/content';

// Lightweight footer with Unicode icons (no icon libraries)
function Footer() {

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        {/* Contact Information */}
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          
          <div className="footer-contact">
            <p className="contact-item">
              <span className="contact-icon">📍</span>
              {schoolInfo.location}
            </p>
            
            <p className="contact-item">
              <span className="contact-icon">📞</span>
              Phone: {schoolInfo.phone}
            </p>
            
            <p className="contact-item">
              <span className="contact-icon">👤</span>
              {schoolInfo.focalPerson.name}
            </p>
            
            <p className="contact-item">
              <span className="contact-icon">📧</span>
              Email: {schoolInfo.focalPerson.email}
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/home" className="footer-link">Home</a></li>
            <li><a href="/about" className="footer-link">About</a></li>
            <li><a href="/admissions" className="footer-link">Admissions</a></li>
            <li><a href="/gallery" className="footer-link">Gallery</a></li>
            <li><a href="/contact" className="footer-link">Contact</a></li>
          </ul>
        </div>

        {/* Map Placeholder (Google Maps iframe) */}
        <div className="footer-section">
          <h3 className="footer-title">Find Us</h3>
          <div className="map-placeholder" aria-label="School location map">
            {/* CSS-only map placeholder to avoid iframe load */}
            <div className="map-pin">📍</div>
            <p className="map-text">Waling, Syangja</p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p className="copyright">© 2025 {schoolInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
