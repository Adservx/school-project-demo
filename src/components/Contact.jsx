import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { translations } from '../utils/translations';

// Contact page - Representative/Showcase version
function Contact() {
  const { language } = useContext(LanguageContext);
  const t = translations.contact;

  return (
    <div className="page-container contact-page">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">{t.title[language]}</h1>
        <p className="page-subtitle">{t.subtitle[language]}</p>
      </div>

      <div className="container">
        {/* Contact Information Only */}
        <div className="contact-info-wrapper">
          {/* Instructions */}
          <section className="contact-instructions">
            <h2 className="section-title">
              {language === 'en' ? 'How to Reach Us' : 'हामीलाई कसरी सम्पर्क गर्ने'}
            </h2>
            <p className="instruction-text">
              {language === 'en' 
                ? 'For any inquiries, admissions, or general information, please contact us using the details below. Our staff is available during office hours to assist you.' 
                : 'कुनै पनि सोधपुछ, भर्ना, वा सामान्य जानकारीको लागि, कृपया तलको विवरण प्रयोग गरेर हामीलाई सम्पर्क गर्नुहोस्। हाम्रो कर्मचारीहरू कार्यालय समयमा तपाईंलाई सहयोग गर्न उपलब्ध छन्।'}
            </p>
          </section>

          <section className="contact-info-section">
            <h2>{t.infoTitle[language]}</h2>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>{t.addressLabel[language]}</h4>
                  <p>{t.address[language]}</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <h4>{t.phoneLabel[language]}</h4>
                  <p>+977-1-4567890</p>
                  <p>+977-9841234567</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <h4>{t.emailLabel[language]}</h4>
                  <p>info@himalayaapex.edu.np</p>
                  <p>admissions@himalayaapex.edu.np</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <div>
                  <h4>{t.hoursLabel[language]}</h4>
                  <p>{t.hours[language]}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="map-placeholder">
              <span className="map-pin">📍</span>
              <p className="map-text">{t.mapText[language]}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;
