import React from 'react';
import { Mail, Linkedin, Instagram, Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-gray-700/50 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          
          {/* Brand Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white">Alpa</h3>
            <p className="text-gray-400 text-xs">Creating beautiful web experiences</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            
            {/* Gmail with subject */}
            <a
              href="mailto:your-email@gmail.com?subject=Portfolio%20Contact&body=Hi%20Alpa%2C%0A%0AI%20just%20visited%20your%20portfolio.%20Let's%20connect!" 
              className="text-gray-400 hover:text-red-400 transition-all duration-300 transform hover:scale-110"
              title="Gmail"
            >
              <Mail size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/alpatiwari" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/alpaatiwarii" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-all duration-300 transform hover:scale-110"
              title="Instagram"
            >
              <Instagram size={20} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Alpatiwari" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
              title="GitHub"
            >
              <Github size={20} />
            </a>

            {/* Twitter / X */}
            <a
              href="https://twitter.com/TiwariAlpa87608" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-300 transition-all duration-300 transform hover:scale-110"
              title="Twitter / X"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
