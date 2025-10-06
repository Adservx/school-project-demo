import React, { useState } from 'react';
import { galleryEvents } from '../utils/content';

// CSS-only image placeholders for 2G speeds
// Lightbox modal with keyboard navigation
function Gallery() {

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
        <h1 className="page-title">Event Gallery</h1>
        <p className="page-subtitle">Moments from Our School Life</p>
      </section>

      {/* Gallery Grid */}
      <section className="container">
        <div className="gallery-grid" role="list" aria-label="Event gallery">
          {galleryEvents.map((event, index) => (
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
              aria-label={`View ${event.title}`}
            >
              {/* CSS-only gradient "image" - no actual image files */}
              <div className={`gallery-image gradient-${index + 1}`}>
                <span className="view-icon">👁️</span>
              </div>
              
              <div className="gallery-info">
                <h3 className="event-title">{event.title}</h3>
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
            <div className={`lightbox-image gradient-${galleryEvents.indexOf(selectedEvent) + 1}`}>
              <div className="lightbox-watermark">RJSS</div>
            </div>
            
            <div className="lightbox-info">
              <h2 id="lightbox-title" className="lightbox-title">
                {selectedEvent.title}
              </h2>
              <p className="lightbox-category">{selectedEvent.category}</p>
              <p className="lightbox-description">
                A memorable {selectedEvent.category.toLowerCase()} event celebrating our school community.
              </p>
            </div>

            <button className="btn btn-primary" onClick={closeLightbox}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
