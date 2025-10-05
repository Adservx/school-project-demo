import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { translations } from '../utils/translations';

// Admissions page - Representative/Showcase version
function Admissions() {
  const { language } = useContext(LanguageContext);
  const t = translations.admissions;

  return (
    <div className="page-container admissions-page">
      {/* Header Section */}
      <section className="page-header">
        <h1 className="page-title">{t.title[language]}</h1>
        <p className="page-subtitle">{t.subtitle[language]}</p>
      </section>

      <div className="container">
        {/* Admissions Information */}
        <div className="admissions-info">
          <section className="info-section">
            <h2 className="section-title">
              {language === 'en' ? 'Admission Process' : 'भर्ना प्रक्रिया'}
            </h2>
            <div className="info-content">
              <p>
                {language === 'en' 
                  ? 'For admission inquiries, please visit our school office during office hours or contact us via phone/email. Our admissions team will guide you through the entire process.' 
                  : 'भर्ना सम्बन्धी जानकारीको लागि, कृपया कार्यालय समयमा हाम्रो स्कूल कार्यालयमा आउनुहोस् वा फोन/इमेल मार्फत हामीलाई सम्पर्क गर्नुहोस्। हाम्रो भर्ना टोलीले तपाईंलाई सम्पूर्ण प्रक्रियामा मार्गदर्शन गर्नेछ।'}
              </p>
              <div className="admission-steps">
                <div className="step-card">
                  <div className="step-number">1</div>
                  <h3>{language === 'en' ? 'Visit Office' : 'कार्यालयमा आउनुहोस्'}</h3>
                  <p>{language === 'en' ? 'Come to our admission office' : 'हाम्रो भर्ना कार्यालयमा आउनुहोस्'}</p>
                </div>
                <div className="step-card">
                  <div className="step-number">2</div>
                  <h3>{language === 'en' ? 'Submit Documents' : 'कागजात पेश गर्नुहोस्'}</h3>
                  <p>{language === 'en' ? 'Bring required documents' : 'आवश्यक कागजातहरू ल्याउनुहोस्'}</p>
                </div>
                <div className="step-card">
                  <div className="step-number">3</div>
                  <h3>{language === 'en' ? 'Confirmation' : 'पुष्टिकरण'}</h3>
                  <p>{language === 'en' ? 'Receive admission confirmation' : 'भर्ना पुष्टिकरण प्राप्त गर्नुहोस्'}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Eligibility Table */}
          <section className="eligibility-section" aria-labelledby="eligibility-title">
            <h2 id="eligibility-title" className="section-title">
              {t.eligibilityTitle[language]}
            </h2>

            <div className="table-wrapper">
              <table className="eligibility-table" role="table">
                <thead>
                  <tr>
                    <th>{t.grade[language]}</th>
                    <th>{t.ageRequirement[language]}</th>
                    <th>{t.documents[language]}</th>
                  </tr>
                </thead>
                <tbody>
                  {translations.eligibilityData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.grade[language]}</td>
                      <td>{row.age[language]}</td>
                      <td>{row.docs[language]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Admissions;
