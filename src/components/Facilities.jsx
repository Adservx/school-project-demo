import React from 'react';

function Facilities() {
  const facilities = [
    {
      icon: '🔬',
      title: 'Physical Lab',
      description: 'Well-equipped physics laboratory for hands-on experiments and practical learning'
    },
    {
      icon: '🧪',
      title: 'Science Labs',
      description: 'Modern laboratories for Physics, Chemistry, and Biology with latest equipment'
    },
    {
      icon: '💻',
      title: 'Computer Lab',
      description: 'State-of-the-art computer lab with high-speed internet and latest software'
    },
    {
      icon: '🏢',
      title: 'Big Building',
      description: 'Spacious multi-story building with modern architecture and ample classrooms'
    },
    {
      icon: '📹',
      title: 'CCTV Security',
      description: '24/7 CCTV surveillance ensuring safety and security for all students'
    },
    {
      icon: '🏠',
      title: 'Hostel',
      description: 'Comfortable hostel facilities with separate accommodations for boys and girls'
    },
    {
      icon: '📡',
      title: 'Internet & Smart TV',
      description: 'High-speed internet connectivity and smart TV for interactive learning'
    },
    {
      icon: '🍽️',
      title: 'Canteen',
      description: 'Hygienic canteen serving nutritious meals and snacks at affordable prices'
    },
    {
      icon: '⚽',
      title: 'Sports Materials',
      description: 'Complete range of sports equipment for various indoor and outdoor games'
    },
    {
      icon: '🎨',
      title: 'Extracurricular Teaching',
      description: 'Various ECA programs including music, dance, arts, and cultural activities'
    }
  ];

  return (
    <div className="page-container facilities-page">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Our Facilities</h1>
        <p className="page-subtitle">Modern Infrastructure for Excellence in Education</p>
      </div>

      <div className="container">
        {/* Inspirational Quote Section */}
        <section className="quote-section">
          <div className="quote-card">
            <blockquote className="main-quote">
              "Education is the most powerful weapon which you can use to change the world."
            </blockquote>
            <cite className="quote-author">- Nelson Mandela</cite>
          </div>
        </section>

        {/* Facilities Grid */}
        <section className="section facilities-section">
          <h2 className="section-title">World-Class Facilities</h2>
          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <div key={index} className="facility-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="facility-icon">{facility.icon}</div>
                <h3 className="facility-title">{facility.title}</h3>
                <p className="facility-description">{facility.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Information */}
        <section className="section additional-info">
          <div className="info-card">
            <h2 className="info-title">Committed to Excellence</h2>
            <p className="info-text">
              At Ranabir Janahit Secondary School, we believe that quality infrastructure is fundamental 
              to quality education. Our facilities are continuously upgraded to provide students with 
              the best possible learning environment, combining traditional values with modern technology.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Facilities;
