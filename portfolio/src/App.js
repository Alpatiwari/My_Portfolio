import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import AboutSection from './components/AboutSection'; 
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import HeroSection from './components/HeroSection';
import ProcessSection from './components/ProcessSection';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/process" element={<ProcessSection />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;