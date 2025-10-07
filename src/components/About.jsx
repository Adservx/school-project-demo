import React from 'react';

// About page with school history, mission, and principal's message
function About() {

  return (
    <div className="page-container about-page">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">About Us</h1>
        <p className="page-subtitle">Know Our Story - 60+ Years of Excellence</p>
      </div>

      <div className="container">
        {/* Principal's Message Section */}
        <section className="section principal-message">
          <div className="message-card">
            <h2 className="section-title">Principal's Message</h2>
            <p className="principal-name">Mrs. Laxmi Regmi</p>
            <p className="principal-designation">Focal Person & Principal</p>
            <div className="message-content">
              <p>Welcome to Ranabir Janahit Secondary School! Since 2020 B.S. (1963 A.D.), our institution has stood firmly on the foundation of public service and educational excellence. As a government-approved public school affiliated with NEB and CTEVT, we are dedicated to creating compassionate, socially responsible leaders who excel academically while remaining deeply connected to their community. Our mission is clear: ensuring no local student remains unemployed due to lack of access to quality education and vocational training. We prepare skilled electrical manpower and competent workforce to meet the growing electricity sector demands in Nepal. With modern facilities including multimedia classrooms, science laboratories, counseling services, conference facilities, and scholarship programs for deserving students, we ensure every student realizes their full potential while contributing to society.</p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section mission-vision-section">
          <div className="mv-grid">
            <div className="mv-card">
              <h3>Our Mission</h3>
              <p>To ensure no local student remains unemployed due to lack of access to quality education and technical/vocational training programs (TEVT). We prepare skilled electrical manpower and competent workforce to meet Nepal's growing demands in the electricity sector while fostering holistic development and Nepali cultural values.</p>
            </div>
            <div className="mv-card">
              <h3>Our Vision</h3>
              <p>To be the leading public educational institution in Gandaki Province, recognized for excellence in academic achievement, technical education, and preparing students for successful careers while contributing to Nepal's economic development through skilled workforce development.</p>
            </div>
          </div>
        </section>

        {/* Our History */}
        <section className="section history-section">
          <h2 className="section-title">Our History</h2>
          <div className="history-content">
            <p>Established in 1963 AD, Ranabir Janahit Secondary School was founded as a public academic institution with a noble vision: to provide quality education accessible to all sections of society. Named in honor of public service and community welfare (Janahit), our school has served the Waling community for over 60 years and has grown from a basic secondary school to become a leading educational institution in Syangja district. Affiliated with the National Examinations Board (NEB), approved by the Ministry of Education (MoE), and partnered with the Council for Technical Education and Vocational Training (CTEVT), we now offer comprehensive education from Grade 1 to 12 plus specialized technical education programs including Diploma in Electrical Engineering and Pre-Diploma (Electrical Sub-overseer). Our expansion into technical and vocational education reflects our commitment to meet local workforce development needs and ensure our students have practical skills for employment.</p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section why-choose-section">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Expert Faculty Team</h3>
              <p>35+ qualified and dedicated teachers with strong academic backgrounds and teaching experience. Regular training programs ensure quality education delivery.</p>
            </div>
            <div className="feature-card">
              <h3>State-of-the-Art Facilities</h3>
              <p>Well-maintained classrooms with modern teaching aids, science laboratories, well-stocked library, sports facilities, and computer lab with internet access.</p>
            </div>
            <div className="feature-card">
              <h3>Outstanding Results</h3>
              <p>Consistent 95%+ SEE pass rate with strong academic performance. Our alumni serve in various sectors contributing to nation building and community development.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default About;
