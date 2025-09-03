import React, { useState, useEffect } from "react";

const ProjectsSection = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: "leetsniff",
      title: "LeetSniff",
      category: "frontend",
      description: "A powerful search engine application with modern UI design and efficient search functionality.",
      technologies: ["React.js", "JavaScript", "HTML", "CSS", "Vercel"],
      githubLink: "https://github.com/Alpatiwari/LeetSniff",
      liveLink: "https://search-engine-eight-eta.vercel.app",
      status: "Completed"
    },
    {
      id: "health-sync",
      title: "Health Sync",
      category: "fullstack",
      description: "A comprehensive health management system for tracking and synchronizing health data with modern features.",
      technologies: ["React.js", "Node.js", "Database", "API Integration"],
      githubLink: "https://github.com/Alpatiwari/Health_sync",
      liveLink: "",
      status: "Completed"
    },
    {
      id: "my-portfolio",
      title: "My Portfolio",
      category: "frontend",
      description: "Personal portfolio website showcasing skills, projects, and experience with modern web technologies.",
      technologies: ["React.js", "JavaScript", "HTML", "CSS", "Vercel"],
      githubLink: "https://github.com/Alpatiwari/My_Portfolio",
      liveLink: "https://my-portfolio-kohl-nine-76.vercel.app",
      status: "Completed"
    },
    {
      id: "coderr",
      title: "Coderr",
      category: "fullstack",
      description: "A developer-focused application designed to enhance coding productivity and collaboration among developers.",
      technologies: ["React.js", "Node.js", "JavaScript", "API"],
      githubLink: "https://github.com/Alpatiwari/coderr",
      liveLink: "",
      status: "Completed"
    },
    {
      id: "neuronexus",
      title: "NeuroNexus",
      category: "ai",
      description: "An AI-powered neural network application exploring machine learning concepts and neural connections.",
      technologies: ["Python", "Machine Learning", "Neural Networks", "AI"],
      githubLink: "https://github.com/Alpatiwari/NeuroNexus",
      liveLink: "",
      status: "Completed"
    },
    {
      id: "react-ui-components",
      title: "React UI Components",
      category: "frontend",
      description: "A comprehensive library of reusable React UI components with modern design patterns and best practices.",
      technologies: ["React.js", "JavaScript", "CSS", "Component Library"],
      githubLink: "https://github.com/Alpatiwari/react-ui-components",
      liveLink: "",
      status: "Completed"
    }
  ];

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    {
      id: "fullstack",
      name: "Full Stack",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "frontend",
      name: "Frontend",
      count: projects.filter((p) => p.category === "frontend").length,
    },
    {
      id: "ai",
      name: "AI/ML",
      count: projects.filter((p) => p.category === "ai").length,
    }
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  const navigate = (path) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      console.log(`Navigate to: ${path}`);
    }
  };

  const handleGitHubLink = (githubLink) => {
    window.open(githubLink, '_blank', 'noopener,noreferrer');
  };

  const handleLiveLink = (liveLink, title) => {
    if (!liveLink) {
      alert(`${title} demo is not available yet. Check the GitHub repository for more details.`);
      return;
    }
    window.open(liveLink, '_blank', 'noopener,noreferrer');
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "Completed": return "bg-green-500/20 text-green-300 border-green-500/30";
      case "In Progress": return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "Coming Soon": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my work across different technologies and domains, featuring live applications and comprehensive solutions
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105"
                  : "bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:bg-gray-700/50 hover:border-purple-500/30"
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => openProjectModal(project)}
              className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 cursor-pointer hover:border-purple-500/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl group ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <span className={`px-3 py-1 text-xs rounded-full border ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Quick Action Buttons */}
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex-1 text-center py-1 bg-gray-700/30 rounded text-xs text-gray-400">
                  Click to view details
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-xl max-w-2xl w-full p-8 relative shadow-2xl">
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white hover:bg-red-500/20 w-8 h-8 rounded-full flex items-center justify-center transition-all z-10"
              >
                ✖
              </button>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4 pr-12">
                <h3 className="text-3xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <span className={`px-3 py-1 text-sm rounded-full border ${getStatusColor(selectedProject.status)} self-start`}>
                  {selectedProject.status}
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                {selectedProject.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {selectedProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={() => handleGitHubLink(selectedProject.githubLink)}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-full font-semibold hover:from-gray-600 hover:to-gray-500 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>📁</span> View Code
                </button>
                <button
                  onClick={() => handleLiveLink(selectedProject.liveLink, selectedProject.title)}
                  className={`flex-1 px-6 py-3 text-white rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 ${
                    selectedProject.liveLink 
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700" 
                      : "bg-gray-600/50 cursor-not-allowed opacity-50"
                  }`}
                  disabled={!selectedProject.liveLink}
                >
                  <span>🚀</span> {selectedProject.liveLink ? "Live Demo" : "Demo Unavailable"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;