import React, { useState, useEffect } from 'react';

export function AboutSection() {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">About Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer who loves creating beautiful, functional web experiences. 
            With expertise in React, JavaScript, and modern web technologies, I bring ideas to life 
            through clean code and stunning visuals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Frontend Development",
              desc: "React, JavaScript, TypeScript, HTML5, CSS3",
              icon: "🎨"
            },
            {
              title: "3D & Animation",
              desc: "Three.js, Framer Motion, GSAP, WebGL",
              icon: "🌟"
            },
            {
              title: "Tools & Workflow",
              desc: "Git, Webpack, Vite, Node.js, REST APIs",
              icon: "🛠️"
            }
          ].map((skill, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
              <p className="text-gray-400">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default AboutSection;