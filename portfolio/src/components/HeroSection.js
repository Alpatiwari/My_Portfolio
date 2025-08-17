import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 px-4 sm:px-6 lg:px-8">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Alpa Tiwari
            </span>
          </h1>
          
          <div className={`space-y-4 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A passionate{' '}
              <span className="text-purple-400 font-semibold">React Developer</span>{' '}
              crafting immersive, interactive experiences
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Specializing in modern web technologies and creating beautiful user interfaces
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mt-10 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          <div className={`flex justify-center space-x-6 mt-12 transform transition-all duration-1000 delay-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            {[
              { icon: '⚡', href: '#', label: 'GitHub' },
              { icon: '💼', href: '#', label: 'LinkedIn' },
              { icon: '🐦', href: '#', label: 'Twitter' },
              { icon: '✉️', href: '#', label: 'Email' },
            ].map(({ icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                className="text-2xl text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                title={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive light effect */}
      <div
        className="absolute pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: `${(mousePos.x + 1) * 50}%`,
          top: `${(-mousePos.y + 1) * 50}%`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
}