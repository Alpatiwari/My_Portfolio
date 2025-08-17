import React, { useState, useEffect } from 'react';

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "LeetSniff",
      description: "Full‑stack GitHub repo analyzer with OAuth, custom search, and result ranking.",
      tags: ["React", "Express", "OAuth", "API"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "DevScan UI",
      description: "Clean, performant frontend with routing, charts, and responsive layouts.",
      tags: ["React", "Tailwind", "Framer Motion"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Portfolio Starter",
      description: "A dark, animated, mobile-first portfolio template with 3D effects.",
      tags: ["React", "Three.js", "Tailwind"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=500&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Some things I've built recently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    ⚡ Code
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    🔗 Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
