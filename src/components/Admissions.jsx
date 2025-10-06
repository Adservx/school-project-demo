import React from 'react';
import { programs, eligibilityData } from '../utils/content';

// Admissions page - Representative/Showcase version
function Admissions() {

  return (
    <div className="page-container admissions-page">
      {/* Header Section */}
      <section className="page-header">
        <h1 className="page-title">Admissions 2082</h1>
        <p className="page-subtitle">Join Our Learning Community - Affordable Fees & Scholarship Programs Available</p>
      </section>

      <div className="container">
        {/* Admissions Information */}
        <div className="admissions-info">
          <section className="info-section">
            <h2 className="section-title">Available Programs</h2>
            <div className="programs-grid">
              {programs.map((program, index) => (
                <div key={index} className="program-card">
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <span className="program-category">{program.category}</span>
                </div>
              ))}
            </div>
            
            <h2 className="section-title">Admission Process</h2>
            <div className="info-content">
              <p>
                For admission inquiries, please visit our school office during office hours or contact us via phone/email. Our admissions team will guide you through the entire process.
              </p>
              <div className="admission-steps">
                <div className="step-card">
                  <div className="step-number">1</div>
                  <h3>Visit Office</h3>
                  <p>Come to our admission office during office hours</p>
                </div>
                <div className="step-card">
                  <div className="step-number">2</div>
                  <h3>Submit Documents</h3>
                  <p>Bring required documents as per eligibility criteria</p>
                </div>
                <div className="step-card">
                  <div className="step-number">3</div>
                  <h3>Confirmation</h3>
                  <p>Receive admission confirmation and fee details</p>
                </div>
              </div>
            </div>
          </section>

          {/* Eligibility Table */}
          <section className="eligibility-section" aria-labelledby="eligibility-title">
            <h2 id="eligibility-title" className="section-title">
              Eligibility Criteria
            </h2>

            <div className="table-wrapper">
              <table className="eligibility-table" role="table">
                <thead>
                  <tr>
                    <th>Grade</th>
                    <th>Age Requirement</th>
                    <th>Documents</th>
                  </tr>
                </thead>
                <tbody>
                  {eligibilityData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.grade}</td>
                      <td>{row.age}</td>
                      <td>{row.docs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="fee-info">
              <h3>Fee Structure & Scholarships</h3>
              <p>We offer moderate and affordable fee structures with scholarship schemes for deserving, hardworking, and underprivileged students.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Admissions;
