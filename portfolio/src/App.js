import React from 'react';
import StarField from './components/StarField';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';


export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <StarField />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}