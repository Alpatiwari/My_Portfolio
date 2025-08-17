import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-white cursor-pointer" onClick={() => scrollToSection('home')}>
            AT
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md transform transition-all duration-200 ease-in-out">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white">About</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white">Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}