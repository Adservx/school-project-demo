import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './components.css';
import './animations.css';

// Components
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Admissions from './components/Admissions';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Language context for bilingual support
export const LanguageContext = createContext();

function App() {
  // Initialize language from localStorage (persists user preference)
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('haa-language') || 'en';
  });

  useEffect(() => {
    // Persist language choice to localStorage
    localStorage.setItem('haa-language', language);
  }, [language]);

  // Toggle between English and Nepali
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'np' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          
          {/* Main content with fade-in animation */}
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </LanguageContext.Provider>
  );
}

export default App;
