import React, { useState } from 'react';

function Programs() {
  const [activeTab, setActiveTab] = useState('events');

  const events = [
    { name: 'Annual Function', date: '2082-09-15', type: 'Cultural' },
    { name: 'Science Exhibition', date: '2082-10-05', type: 'Academic' },
    { name: 'Sports Week', date: '2082-11-01', type: 'Sports' },
    { name: 'Parent-Teacher Meeting', date: '2082-08-20', type: 'Meeting' }
  ];

  const religiousPrograms = [
    { name: 'Dashain Program', description: 'Traditional celebration with cultural performances' },
    { name: 'Basanta Panchami', description: 'Saraswati Puja and educational activities' },
    { name: 'Tihar Program', description: 'Festival of lights with student performances' },
    { name: 'Teej Program', description: 'Traditional dance and cultural activities' },
    { name: 'Holi Program', description: 'Festival of colors with eco-friendly celebration' },
    { name: 'Buddha Jayanti', description: 'Peace programs and meditation sessions' }
  ];

  const otherPrograms = [
    { name: 'Chess Competition', category: 'Indoor Games' },
    { name: 'Drawing Competition', category: 'Arts' },
    { name: 'Handwriting Competition', category: 'Academic' },
    { name: 'Essay Competition', category: 'Literary' },
    { name: 'Music Competition', category: 'Cultural' },
    { name: 'Quiz Competition', category: 'Academic' }
  ];

  const sports = [
    'Football Tournament',
    'Basketball Championship',
    'Volleyball Competition',
    'Athletics Meet',
    'Table Tennis',
    'Badminton Tournament'
  ];

  const talentShows = [
    'Annual Talent Hunt',
    'Dance Competition',
    'Singing Competition',
    'Drama Performance',
    'Stand-up Comedy',
    'Fashion Show'
  ];

  return (
    <div className="page-container programs-page">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Programs & Events</h1>
        <p className="page-subtitle">Unfold Yourself & Enjoy the Moment</p>
      </div>

      <div className="container">
        {/* Motivational Section */}
        <section className="motivation-section">
          <div className="motivation-card">
            <h2 className="motivation-title">Unfold Yourself</h2>
            <p className="motivation-text">Enjoy the moment and discover your true potential</p>
          </div>
        </section>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button 
            className={`tab-btn ${activeTab === 'events' ? 'active' : ''}`}
            onClick={() => setActiveTab('events')}
          >
            Events
          </button>
          <button 
            className={`tab-btn ${activeTab === 'religious' ? 'active' : ''}`}
            onClick={() => setActiveTab('religious')}
          >
            Religious Programs
          </button>
          <button 
            className={`tab-btn ${activeTab === 'competitions' ? 'active' : ''}`}
            onClick={() => setActiveTab('competitions')}
          >
            Competitions
          </button>
          <button 
            className={`tab-btn ${activeTab === 'sports' ? 'active' : ''}`}
            onClick={() => setActiveTab('sports')}
          >
            Sports
          </button>
          <button 
            className={`tab-btn ${activeTab === 'talent' ? 'active' : ''}`}
            onClick={() => setActiveTab('talent')}
          >
            Talent Shows
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'events' && (
            <section className="events-section">
              <h2 className="section-title">Upcoming Events</h2>
              <div className="events-grid">
                {events.map((event, index) => (
                  <div key={index} className="event-card">
                    <h3 className="event-name">{event.name}</h3>
                    <p className="event-date">📅 {event.date}</p>
                    <span className="event-type">{event.type}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === 'religious' && (
            <section className="religious-section">
              <h2 className="section-title">Religious & Cultural Programs</h2>
              <div className="programs-grid">
                {religiousPrograms.map((program, index) => (
                  <div key={index} className="program-card">
                    <h3 className="program-name">{program.name}</h3>
                    <p className="program-description">{program.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === 'competitions' && (
            <section className="competitions-section">
              <h2 className="section-title">Academic & Cultural Competitions</h2>
              <div className="competitions-grid">
                {otherPrograms.map((program, index) => (
                  <div key={index} className="competition-card">
                    <h3 className="competition-name">{program.name}</h3>
                    <span className="competition-category">{program.category}</span>
                  </div>
                ))}
              </div>
              <div className="highlight-box">
                <h3>Provincial Level Competitions</h3>
                <p>Our students regularly participate in provincial and national level competitions, 
                   bringing laurels to our institution.</p>
              </div>
            </section>
          )}

          {activeTab === 'sports' && (
            <section className="sports-section">
              <h2 className="section-title">Sports Activities</h2>
              <div className="sports-grid">
                {sports.map((sport, index) => (
                  <div key={index} className="sport-card">
                    <h3 className="sport-name">{sport}</h3>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === 'talent' && (
            <section className="talent-section">
              <h2 className="section-title">Talent Shows & Performances</h2>
              <div className="talent-grid">
                {talentShows.map((show, index) => (
                  <div key={index} className="talent-card">
                    <h3 className="talent-name">{show}</h3>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Parent Meeting Section */}
        <section className="parent-meeting-section">
          <div className="meeting-card">
            <h2 className="meeting-title">Parent-Teacher Meetings</h2>
            <p className="meeting-text">
              Regular parent-teacher meetings are conducted to discuss student progress and 
              maintain strong communication between school and home. We believe in collaborative 
              efforts for the holistic development of our students.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Programs;
