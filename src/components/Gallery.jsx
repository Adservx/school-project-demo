import React, { useState } from 'react';
import { galleryImages } from '../utils/content';

// Gallery with images from glry folder
// Lightbox modal with keyboard navigation
function Gallery() {

  const [selectedImage, setSelectedImage] = useState(null);

  // Open lightbox
  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
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
        <h1 className="page-title">Our Gallery</h1>
        <p className="page-subtitle">Moments from Our School Life</p>
      </section>

      {/* Gallery Grid */}
      <section className="container">
        <div className="gallery-grid" role="list" aria-label="Event gallery">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-card"
              role="listitem"
              onClick={() => openLightbox(image)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(image);
                }
              }}
              tabIndex={0}
              aria-label={`View image ${index + 1}`}
            >
              <div className="gallery-image">
                <img src={image} alt={`Gallery ${index + 1}`} loading="lazy" />
                <span className="view-icon">👁️</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
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
            
            <div className="lightbox-image">
              <img src={selectedImage} alt="Gallery view" />
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
