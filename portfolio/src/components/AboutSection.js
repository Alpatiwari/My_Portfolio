import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AboutSection = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    {
      category: "Frontend Development",
      description: "Creating beautiful, responsive user interfaces with modern frameworks",
      technologies: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"],
      icon: "🎨",
      percentage: 90,
    },
    {
      category: "3D & Animation",
      description: "Bringing websites to life with stunning visuals and smooth animations",
      technologies: ["Three.js", "Framer Motion", "GSAP", "WebGL", "CSS Animations"],
      icon: "🌟",
      percentage: 75,
    },
    {
      category: "Backend & Tools",
      description: "Building robust applications with modern development tools",
      technologies: ["Node.js", "Express", "MongoDB", "Git", "Webpack", "Vite", "REST APIs"],
      icon: "🛠️",
      percentage: 80,
    },
  ];

  const achievements = [
    { number: "20+", label: "Projects Completed" },
    { number: "2+", label: "Years Experience" },
    { number: "5+", label: "Technologies Mastered" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  const timeline = [
    {
      year: "2024",
      title: "Full Stack Developer",
      company: "Freelance",
      description:
        "Building modern web applications with React, Node.js, and cloud technologies. Focus on creating scalable and performant solutions.",
      highlight: true,
      skills: ["React", "Node.js", "MongoDB", "AWS"],
    },
    {
      year: "2023",
      title: "Frontend Specialist",
      company: "Various Projects",
      description:
        "Specialized in creating beautiful user experiences with advanced animations and interactive elements.",
      skills: ["React", "Three.js", "GSAP", "Tailwind CSS"],
    },
    {
      year: "2022",
      title: "Web Developer",
      company: "Learning Phase",
      description:
        "Started my journey in web development, mastering the fundamentals and building my first projects.",
      skills: ["HTML", "CSS", "JavaScript", "Git"],
    },
  ];

  const handleNavigation = (path) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      navigate(path);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8">
            About <span className="text-purple-400">Me</span>
          </h1>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer who loves creating beautiful, functional web experiences.
              With expertise in React, JavaScript, and modern web technologies, I bring ideas to life
              through clean code and stunning visuals.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or experimenting with the latest web development trends. I believe in continuous learning and
              staying up-to-date with the ever-evolving world of technology.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transform transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="text-center bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                {achievement.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2
            className={`text-3xl font-bold text-white mb-12 text-center transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            What I <span className="text-purple-400">Do</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl cursor-pointer group ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
                onMouseEnter={() => setActiveSkill(index)}
              >
                <div className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-purple-300 transition-colors">
                  {skill.category}
                </h3>
                <p className="text-gray-400 mb-6 text-center text-sm leading-relaxed">
                  {skill.description}
                </p>

                {/* Skill Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Proficiency</span>
                    <span className="text-sm text-purple-400 font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: activeSkill === index ? `${skill.percentage}%` : "0%" }}
                    ></div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div
          className={`transform transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            My <span className="text-purple-400">Journey</span>
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div
                      className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border ${
                        item.highlight ? "border-purple-500/50 shadow-lg shadow-purple-500/20" : "border-gray-700/50"
                      } rounded-xl p-6 hover:border-purple-500/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]`}
                    >
                      <div className="text-purple-400 font-bold text-sm mb-1">{item.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <div className="text-gray-400 text-sm mb-3 font-medium">{item.company}</div>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{item.description}</p>
                      <div className="flex flex-wrap gap-2 justify-start">
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center z-10 shadow-lg ${
                      item.highlight 
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 shadow-purple-500/50" 
                        : "bg-gray-600 shadow-gray-500/50"
                    }`}
                  >
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-20 transform transition-all duration-1000 delay-800 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-purple-500/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's <span className="text-purple-400">Work Together</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities and interesting projects.
              Whether you need a full-stack solution or just want to bring your ideas to life, let's connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => handleNavigation("/contact")}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Get In Touch
              </button>
              <button
                onClick={() => handleNavigation("/projects")}
                className="px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;