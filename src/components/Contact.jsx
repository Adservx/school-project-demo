import React from 'react';

// Contact page - Representative/Showcase version
function Contact() {

  return (
    <div className="page-container contact-page">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">Get in Touch with Us</p>
      </div>

      <div className="container">
        {/* Contact Information Only */}
        <div className="contact-info-wrapper">
          {/* Instructions */}
          <section className="contact-instructions">
            <h2 className="section-title">How to Reach Us</h2>
            <p className="instruction-text">
              For any inquiries, admissions, or general information, please contact us using the details below. Our staff is available during office hours to assist you.
            </p>
          </section>

          <section className="contact-info-section">
            <h2>Contact Information</h2>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Address</h4>
                  <p>Waling Municipality-1, Khahare, Syangja, Gandaki Province, Nepal</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>+977-63-440216</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">👤</span>
                <div>
                  <h4>Focal Person</h4>
                  <p><strong>Mr. Kamal Raj Lamsal</strong></p>
                  <p>Email: lamsalkamalraj@gmail.com</p>
                  <p>Phone: +977-9846070767</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <div>
                  <h4>Office Hours</h4>
                  <p>Sunday - Friday: 7:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="map-placeholder">
              <span className="map-pin">📍</span>
              <a 
                href="https://maps.google.com/maps?q=Waling+Municipality-1,+Khahare,+Syangja,+Nepal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="map-link"
              >
                View on Google Maps
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;
