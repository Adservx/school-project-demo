import React from 'react';
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
import Courses from './components/Courses';
import Facilities from './components/Facilities';
import Programs from './components/Programs';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        
        {/* Main content with fade-in animation */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
