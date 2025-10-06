import React from 'react';

function Courses() {
  const plus2Courses = [
    {
      title: 'Education',
      duration: '2 Years',
      description: 'Ten Plus Two (10+2) Education stream preparing future educators and educational leaders.',
      subjects: ['Educational Psychology', 'Curriculum Development', 'Teaching Methodology', 'Child Development']
    },
    {
      title: 'Commerce/Management',
      duration: '2 Years',
      description: 'Ten Plus Two (10+2) Management stream for business and commerce aspirants.',
      subjects: ['Accountancy', 'Economics', 'Business Studies', 'Marketing', 'English']
    }
  ];

  const technicalCourses = [
    {
      title: 'Diploma in Electrical Engineering',
      duration: '3 Years',
      affiliation: 'CTEVT',
      description: 'Three-year diploma program producing skilled electrical engineers.',
      requirements: 'SEE passed with minimum C+ grade',
      career: 'Electrical Engineer, Power System Operator, Maintenance Engineer'
    },
    {
      title: 'Pre-Diploma (Electrical Sub-overseer)',
      duration: '18 Months',
      affiliation: 'CTEVT',
      description: 'Technical education program for electrical sub-overseer positions.',
      requirements: 'Grade 8 passed',
      career: 'Electrical Technician, Wiring Specialist, Maintenance Technician'
    }
  ];

  const basicEducation = [
    { level: 'Primary Level', grades: 'Grade 1 - 5', description: 'Foundation education with focus on literacy and numeracy' },
    { level: 'Lower Secondary', grades: 'Grade 6 - 8', description: 'Comprehensive education with introduction to various subjects' },
    { level: 'Secondary Level', grades: 'Grade 9 - 10', description: 'SEE preparation with specialized subject streams' }
  ];

  return (
    <div className="page-container courses-page">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Courses Available</h1>
        <p className="page-subtitle">Comprehensive Education from Grade 1 to Technical Diploma</p>
      </div>

      <div className="container">
        {/* Intro Section */}
        <section className="intro-section">
          <div className="intro-card">
            <h2 className="intro-title">RANABIR JANAHIT SEC. SCHOOL</h2>
            <p className="intro-text">
              Offering quality education through various academic and technical programs designed 
              to meet the diverse needs of our students and prepare them for successful careers.
            </p>
          </div>
        </section>

        {/* Basic Education */}
        <section className="section basic-education-section">
          <h2 className="section-title">Basic Education (Grade 1-10)</h2>
          <div className="education-levels">
            {basicEducation.map((level, index) => (
              <div key={index} className="level-card">
                <h3 className="level-title">{level.level}</h3>
                <p className="level-grades">{level.grades}</p>
                <p className="level-description">{level.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Plus Two Courses */}
        <section className="section plus2-section">
          <h2 className="section-title">+2 Courses (NEB Affiliated)</h2>
          <div className="courses-grid">
            {plus2Courses.map((course, index) => (
              <div key={index} className="course-card featured">
                <div className="course-header">
                  <h3 className="course-title">{course.title}</h3>
                  <span className="course-duration">{course.duration}</span>
                </div>
                <p className="course-description">{course.description}</p>
                <div className="course-subjects">
                  <h4>Key Subjects:</h4>
                  <ul className="subjects-list">
                    {course.subjects.map((subject, idx) => (
                      <li key={idx}>{subject}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Courses */}
        <section className="section technical-section">
          <h2 className="section-title">Technical Education (CTEVT Affiliated)</h2>
          <div className="technical-grid">
            {technicalCourses.map((course, index) => (
              <div key={index} className="technical-card">
                <div className="technical-header">
                  <h3 className="technical-title">{course.title}</h3>
                  <div className="technical-meta">
                    <span className="duration-badge">{course.duration}</span>
                    <span className="affiliation-badge">{course.affiliation}</span>
                  </div>
                </div>
                <p className="technical-description">{course.description}</p>
                <div className="technical-details">
                  <div className="detail-item">
                    <strong>Requirements:</strong>
                    <p>{course.requirements}</p>
                  </div>
                  <div className="detail-item">
                    <strong>Career Opportunities:</strong>
                    <p>{course.career}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Special Features */}
        <section className="section features-section">
          <h2 className="section-title">Why Choose Our Programs?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">📚</span>
              <h3>Quality Education</h3>
              <p>Experienced faculty with modern teaching methods</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💰</span>
              <h3>Affordable Fees</h3>
              <p>Moderate fee structure with scholarship opportunities</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎯</span>
              <h3>Career Focused</h3>
              <p>Programs designed for immediate employment opportunities</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🏆</span>
              <h3>Excellent Results</h3>
              <p>Consistent high pass rates and student achievements</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Courses;
