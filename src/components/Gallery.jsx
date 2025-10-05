import React, { useContext, useState } from 'react';
import { LanguageContext } from '../App';
import { translations } from '../utils/translations';

// AI-optimized: CSS-only image placeholders for 2G speeds
// Lightbox modal with keyboard navigation
function Gallery() {
  const { language } = useContext(LanguageContext);
  const t = translations.gallery;
  const events = translations.galleryEvents;

  const [selectedEvent, setSelectedEvent] = useState(null);

  // Open lightbox
  const openLightbox = (event) => {
    setSelectedEvent(event);
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedEvent(null);
  };

  // Keyboard accessibility for modal
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  };

  return (
    <div className="page-container gallery-page">
      {/* Header */}
      <section className="page-header">
        <h1 className="page-title">{t.title[language]}</h1>
        <p className="page-subtitle">{t.subtitle[language]}</p>
      </section>

      {/* Gallery Grid */}
      <section className="container">
        <div className="gallery-grid" role="list" aria-label="Event gallery">
          {events.map((event, index) => (
            <div
              key={index}
              className="gallery-card"
              role="listitem"
              onClick={() => openLightbox(event)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(event);
                }
              }}
              tabIndex={0}
              aria-label={`View ${event.title[language]}`}
            >
              {/* CSS-only gradient "image" - no actual image files */}
              <div className={`gallery-image gradient-${index + 1}`}>
                <div className="image-overlay">
                  <span className="view-icon">👁️</span>
                </div>
              </div>
              
              <div className="gallery-info">
                <h3 className="gallery-title">{event.title[language]}</h3>
                <span className="gallery-category">{event.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedEvent && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          tabIndex={-1}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              ✕
            </button>
            
            {/* Large version of CSS gradient */}
            <div className={`lightbox-image gradient-${events.indexOf(selectedEvent) + 1}`}>
              <div className="lightbox-watermark">HAA</div>
            </div>
            
            <div className="lightbox-info">
              <h2 id="lightbox-title" className="lightbox-title">
                {selectedEvent.title[language]}
              </h2>
              <p className="lightbox-category">{selectedEvent.category}</p>
              <p className="lightbox-description">
                {language === 'en' 
                  ? `A memorable ${selectedEvent.category.toLowerCase()} event celebrating our school community.`
                  : `हाम्रो स्कूल समुदाय मनाउने एक यादगार ${selectedEvent.category} कार्यक्रम।`
                }
              </p>
            </div>

            <button className="btn btn-primary" onClick={closeLightbox}>
              {t.closeBtn[language]}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
