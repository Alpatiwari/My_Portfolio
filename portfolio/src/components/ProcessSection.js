import React, { useState } from 'react';
import { Code, Search, Palette, TestTube, Rocket, GitBranch, Eye, CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 0,
      title: "Research & Planning",
      icon: <Search className="w-5 h-5" />,
      description: "Understanding requirements and planning the architecture",
      details: [
        "Analyze project requirements",
        "Research best practices & technologies",
        "Create project roadmap",
        "Define success metrics"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 1,
      title: "Design & Prototype",
      icon: <Palette className="w-5 h-5" />,
      description: "Creating user-centered designs and interactive prototypes",
      details: [
        "Wireframe and mockup creation",
        "User experience optimization",
        "Component design system",
        "Responsive design planning"
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      id: 2,
      title: "Development",
      icon: <Code className="w-5 h-5" />,
      description: "Clean, scalable code with modern best practices",
      details: [
        "Component-based architecture",
        "Clean, maintainable code",
        "Performance optimization",
        "Accessibility implementation"
      ],
      color: "from-green-500 to-blue-500"
    },
    {
      id: 3,
      title: "Testing",
      icon: <TestTube className="w-5 h-5" />,
      description: "Comprehensive testing to ensure quality and reliability",
      details: [
        "Unit & integration testing",
        "Cross-browser compatibility",
        "Performance testing",
        "User acceptance testing"
      ],
      color: "from-yellow-500 to-green-500"
    },
    {
      id: 4,
      title: "Version Control",
      icon: <GitBranch className="w-5 h-5" />,
      description: "Systematic code management and collaboration",
      details: [
        "Feature branch workflow",
        "Meaningful commit messages",
        "Code review process",
        "CI/CD pipeline integration"
      ],
      color: "from-orange-500 to-yellow-500"
    },
    {
      id: 5,
      title: "Deploy & Monitor",
      icon: <Rocket className="w-5 h-5" />,
      description: "Launching applications with monitoring and optimization",
      details: [
        "Production deployment",
        "Performance monitoring",
        "Error tracking",
        "Continuous optimization"
      ],
      color: "from-red-500 to-orange-500"
    }
  ];

  const tools = [
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Git", category: "Version Control" },
    { name: "Figma", category: "Design" },
    { name: "VS Code", category: "Editor" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0f172a] to-[#000000] text-white py-16 px-6">


      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            My Development{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Process
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            How I transform ideas into beautiful, functional web applications through a systematic approach
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  activeStep === index ? 'transform scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-5 h-full">
                  {/* Step Number + Icon */}
                  <div className="flex items-center mb-3">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mr-2`}>
                      <span className="text-xs font-bold">{index + 1}</span>
                    </div>
                    <div className="text-purple-400">{step.icon}</div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{step.description}</p>
                  
                  {/* Details */}
                  <div className={`transition-all duration-300 ${
                    activeStep === index ? 'opacity-100 max-h-32' : 'opacity-70 max-h-16 overflow-hidden'
                  }`}>
                    <ul className="space-y-1">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3.5 h-3.5 text-green-400 mr-1.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">
            Tools & <span className="text-purple-400">Technologies</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-md p-4 transition-all duration-300 group-hover:border-purple-400 group-hover:shadow-lg group-hover:shadow-purple-500/25 flex flex-col justify-center min-h-[80px]">
                  <h3 className="font-medium text-sm text-white mb-1">{tool.name}</h3>
                  <p className="text-xs text-gray-400">{tool.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-lg p-6">
          <Eye className="w-8 h-8 text-purple-400 mx-auto mb-2" />
          <h2 className="text-xl font-bold mb-2">My Philosophy</h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            "Great software isn't just about writing code—it's about solving real problems with clean, 
            maintainable solutions that enhance user experience."
          </p>
          <div className="mt-2">
            <span className="text-purple-400 font-medium text-sm">— Alpa Tiwari</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-6">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            Let's Build Something Amazing
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
