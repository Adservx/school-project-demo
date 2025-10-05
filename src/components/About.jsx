import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { translations } from '../utils/translations';

// About page with school history, mission, and principal's message
function About() {
  const { language } = useContext(LanguageContext);
  const t = translations.about;

  return (
    <div className="page-container about-page">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">{t.title[language]}</h1>
        <p className="page-subtitle">{t.subtitle[language]}</p>
      </div>

      <div className="container">
        {/* Principal's Message Section */}
        <section className="section principal-message">
          <div className="message-card">
            <h2 className="section-title">{t.principalTitle[language]}</h2>
            <p className="principal-name">{t.principalName[language]}</p>
            <p className="principal-designation">{t.principalDesignation[language]}</p>
            <div className="message-content">
              <p>{t.principalMessage[language]}</p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section mission-vision-section">
          <div className="mv-grid">
            <div className="mv-card">
              <h3>{t.missionTitle[language]}</h3>
              <p>{t.missionText[language]}</p>
            </div>
            <div className="mv-card">
              <h3>{t.visionTitle[language]}</h3>
              <p>{t.visionText[language]}</p>
            </div>
          </div>
        </section>

        {/* Our History */}
        <section className="section history-section">
          <h2 className="section-title">{t.historyTitle[language]}</h2>
          <div className="history-content">
            <p>{t.historyText[language]}</p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section why-choose-section">
          <h2 className="section-title">{t.whyChooseTitle[language]}</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>{t.feature1Title[language]}</h3>
              <p>{t.feature1Text[language]}</p>
            </div>
            <div className="feature-card">
              <h3>{t.feature2Title[language]}</h3>
              <p>{t.feature2Text[language]}</p>
            </div>
            <div className="feature-card">
              <h3>{t.feature3Title[language]}</h3>
              <p>{t.feature3Text[language]}</p>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="section facilities-section">
          <h2 className="section-title">{t.facilitiesTitle[language]}</h2>
          <div className="facilities-list">
            <div className="facility-item">
              <span className="facility-icon">🏫</span>
              <span>{t.facility1[language]}</span>
            </div>
            <div className="facility-item">
              <span className="facility-icon">💻</span>
              <span>{t.facility2[language]}</span>
            </div>
            <div className="facility-item">
              <span className="facility-icon">📚</span>
              <span>{t.facility3[language]}</span>
            </div>
            <div className="facility-item">
              <span className="facility-icon">🏀</span>
              <span>{t.facility4[language]}</span>
            </div>
            <div className="facility-item">
              <span className="facility-icon">🔬</span>
              <span>{t.facility5[language]}</span>
            </div>
            <div className="facility-item">
              <span className="facility-icon">🚌</span>
              <span>{t.facility6[language]}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
