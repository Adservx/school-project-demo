import React from 'react';
import { Link } from 'react-router-dom';

// Hero with Himalayan gradient, no images for 2G speed
function Home() {
  const quotes = [
    {
      text: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
      author: "Malcolm X"
    },
    {
      text: "The beautiful thing about learning is that no one can take it away from you.",
      author: "B.B. King"
    },
    {
      text: "Education is not preparation for life; education is life itself.",
      author: "John Dewey"
    }
  ];

  const [currentQuote, setCurrentQuote] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="page-container home-page">
      {/* Hero Section */}
      <section 
        className="hero" 
        aria-labelledby="hero-title"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10, 14, 26, 0.7) 0%, rgba(59, 130, 246, 0.3) 50%, rgba(20, 184, 166, 0.3) 100%), url(${process.env.PUBLIC_URL}/gate.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-content">
          <h1 id="hero-title" className="hero-title">
            Welcome to Ranabir Janahit Secondary School
          </h1>
          <p style={{
            fontSize: '1.35rem',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            display: 'inline-block',
            marginBottom: '2.5rem',
            maxWidth: '800px'
          }}>
            For over 60 years, we have been a cornerstone of education in Waling, Syangja, nurturing skilled professionals and future leaders through comprehensive programs and specialized technical training in Electrical Engineering.
          </p>
          
          {/* Quick action buttons */}
          <div className="hero-actions">
            <Link to="/courses" className="btn btn-primary">
              Explore Courses
            </Link>
            <Link to="/gallery" className="btn btn-primary">
              Go Inside Our School
            </Link>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="section quotes-section">
        <div className="container">
          <div className="quotes-carousel">
            <div className="quote-container">
              <blockquote className="inspirational-quote">
                "{quotes[currentQuote].text}"
              </blockquote>
              <cite className="quote-author">- {quotes[currentQuote].author}</cite>
            </div>
            <div className="quote-dots">
              {quotes.map((_, index) => (
                <button
                  key={index} 
                  className={`dot ${index === currentQuote ? 'active' : ''}`}
                  onClick={() => setCurrentQuote(index)}
                  aria-label={`Show quote ${index + 1}`}
                  type="button"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section welcome-section" aria-labelledby="welcome-title">
        <div className="container">
          <h2 id="welcome-title" className="section-title">
            Welcome to Ranabir Janahit Secondary School
          </h2>
          <p className="welcome-text">
            Established in 2020 B.S. (1963 A.D.), Ranabir Janahit Secondary School has been serving the Waling community for over 60 years. Located in Waling Municipality-1, Khahare, Syangja district, Gandaki Province, we are a premier public academic institution affiliated with NEB, approved by the Ministry of Education, and partnered with CTEVT for technical education. We offer comprehensive education from Grade 1 to 12, plus specialized technical programs including Diploma in Electrical Engineering and Pre-Diploma (Electrical Sub-overseer). Our mission is to ensure no local student remains unemployed due to lack of access to quality education and vocational training.
          </p>

          {/* Feature Cards */}
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Grade 1 to 12 Education</h3>
              <p>NEB affiliated academic programs with Ten Plus Two (+2) Management and Education streams</p>
            </div>

            <div className="feature-card">
              <h3>Technical Education</h3>
              <p>CTEVT programs: Diploma in Electrical Engineering & Pre-Diploma (Electrical Sub-overseer)</p>
            </div>

            <div className="feature-card">
              <h3>Scholarship Programs</h3>
              <p>Moderate fees with scholarships for deserving, hardworking & underprivileged students</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
