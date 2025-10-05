import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';
import { translations } from '../utils/translations';

// AI-optimized: Hero with Himalayan gradient, no images for 2G speed
function Home() {
  const { language } = useContext(LanguageContext);
  const t = translations.home;
  const events = translations.events;

  return (
    <div className="page-container home-page">
      {/* Hero Section */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <h1 id="hero-title" className="hero-title">
            {t.heroTagline[language]}
          </h1>
          <p className="hero-subtitle">{t.heroSubtitle[language]}</p>
          
          {/* Quick action buttons */}
          <div className="hero-actions">
            <Link to="/admissions" className="btn btn-primary">
              {t.applyNow[language]}
            </Link>
            <Link to="/gallery" className="btn btn-secondary">
              {t.viewGallery[language]}
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section welcome-section" aria-labelledby="welcome-title">
        <div className="container">
          <h2 id="welcome-title" className="section-title">
            {t.welcomeTitle[language]}
          </h2>
          <p className="welcome-text">
            {t.welcomeText[language]}
          </p>

          {/* Feature Cards */}
          <div className="feature-grid">
            <div className="feature-card">
              <h3>{language === 'en' ? 'Modern Curriculum' : 'आधुनिक पाठ्यक्रम'}</h3>
              <p>{language === 'en' ? 'SEE & NEB aligned programs' : 'SEE र NEB संग संरेखित कार्यक्रमहरू'}</p>
            </div>

            <div className="feature-card">
              <h3>{language === 'en' ? 'Smart Classes' : 'स्मार्ट कक्षाहरू'}</h3>
              <p>{language === 'en' ? 'AI-assisted learning tools' : 'AI-सहायता सिकाइ उपकरणहरू'}</p>
            </div>

            <div className="feature-card">
              <h3>{language === 'en' ? '95% Success Rate' : '९५% सफलता दर'}</h3>
              <p>{language === 'en' ? 'Top results in SEE exams' : 'SEE परीक्षामा उत्कृष्ट परिणाम'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Calendar (Bikram Sambat dates) */}
      <section className="section events-section" aria-labelledby="events-title">
        <div className="container">
          <h2 id="events-title" className="section-title">
            {t.eventsTitle[language]}
          </h2>

          <div className="events-table-wrapper">
            <table className="events-table" role="table" aria-label="School events calendar">
              <thead>
                <tr>
                  <th>{language === 'en' ? 'Event' : 'कार्यक्रम'}</th>
                  <th>{language === 'en' ? 'Date (BS)' : 'मिति (BS)'}</th>
                  <th>{language === 'en' ? 'Type' : 'प्रकार'}</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <tr key={index}>
                    <td>{event.name[language]}</td>
                    <td>{event.date[language]}</td>
                    <td>
                      <span className="event-badge">{event.type[language]}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
