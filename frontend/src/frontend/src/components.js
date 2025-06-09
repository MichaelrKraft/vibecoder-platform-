import React, { useState, useEffect, useRef } from "react";

// Header Component
export const Header = () => {
  return (
    <header className="relative z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* VibeCoder Logo */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <svg width="40" height="32" viewBox="0 0 120 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6366F1"/>
                      <stop offset="25%" stopColor="#8B5CF6"/>
                      <stop offset="50%" stopColor="#EC4899"/>
                      <stop offset="75%" stopColor="#3B82F6"/>
                      <stop offset="100%" stopColor="#06B6D4"/>
                    </linearGradient>
                  </defs>
                  <g fill="url(#logoGradient)">
                    <rect x="0" y="8" width="32" height="20" rx="4"/>
                    <rect x="0" y="12" width="32" height="8" rx="2"/>
                    <rect x="0" y="20" width="32" height="8" rx="2"/>
                    <rect x="88" y="0" width="32" height="20" rx="4"/>
                    <rect x="88" y="4" width="32" height="8" rx="2"/>
                    <rect x="88" y="12" width="32" height="8" rx="2"/>
                    <rect x="44" y="40" width="32" height="20" rx="4"/>
                    <rect x="44" y="44" width="32" height="8" rx="2"/>
                    <rect x="44" y="52" width="32" height="8" rx="2"/>
                    <line x1="32" y1="18" x2="44" y2="50" stroke="url(#logoGradient)" strokeWidth="2"/>
                    <line x1="76" y1="50" x2="88" y2="10" stroke="url(#logoGradient)" strokeWidth="2"/>
                  </g>
                </svg>
              </div>
              <div className="text-2xl font-bold">
                <span className="vibecoder-brand-gradient">
                  VibeCoder
                </span>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Product</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Solutions</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Learn</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Tools</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Pricing</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors duration-200">
              Contact sales
            </button>
            <button className="text-gray-300 hover:text-white transition-colors duration-200">
              Log in
            </button>
            <button className="vibecoder-gradient-button text-white px-6 py-2 rounded-full hover:scale-105 transition-all duration-300">
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component with Taskade-style JavaScript Background
export const HeroSection = () => {
  return (
    <section className="relative py-16 px-6 overflow-hidden">
      {/* Taskade-style radial burst background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="radial-burst-lines"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      {/* Floating code elements */}
      <div className="absolute inset-0">
        <div className="code-float" style={{top: '20%', left: '10%', animationDelay: '0s'}}>{'{'}</div>
        <div className="code-float" style={{top: '30%', right: '15%', animationDelay: '1s'}}>console.log()</div>
        <div className="code-float" style={{top: '60%', left: '20%', animationDelay: '2s'}}>function()</div>
        <div className="code-float" style={{top: '70%', right: '25%', animationDelay: '3s'}}>{'}'}</div>
        <div className="code-float" style={{top: '15%', left: '50%', animationDelay: '0.5s'}}>React</div>
        <div className="code-float" style={{top: '80%', left: '60%', animationDelay: '2.5s'}}>const</div>
        <div className="code-float" style={{top: '25%', right: '35%', animationDelay: '1.5s'}}>{'=>'}</div>
        <div className="code-float" style={{top: '50%', left: '5%', animationDelay: '4s'}}>AI</div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
          <span className="block text-white mb-4">Transform Ideas Into</span>
          <span className="block vibecoder-brand-gradient mb-4">
            Web Apps Instantly
          </span>
          <span className="block text-white text-4xl md:text-5xl lg:text-6xl">
            Without Writing a Single Line of Code
          </span>
        </h1>
        
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-300">
          <span className="flex items-center space-x-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-purple-500/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>⚡ Project</span>
          </span>
          <span className="flex items-center space-x-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/20">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span>🤖 AI Agents</span>
          </span>
          <span className="flex items-center space-x-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-purple-500/20">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span>🔧 Automation</span>
          </span>
        </div>
      </div>
    </section>
  );
};

// Enhanced Main Prompt Box with Taskade-style Animated Gradient Border
export const MainPromptBox = ({ searchQuery, setSearchQuery, onSearch, isBuilding, projectResult }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [currentPlaceholder, setCurrentPlaceholder] = useState("");
  const [suggestions] = useState([
    "Build me a modern task manager",
    "Create a React dashboard", 
    "Design a landing page",
    "Make an AI chatbot",
    "Build a social media app"
  ]);

  const examples = [
    "Build me a sketch...",
    "Create a modern task management app with drag and drop",
    "Build a Netflix clone with video streaming",
    "Design a beautiful portfolio website",
    "Make an AI-powered chat application",
    "Create a real-time collaboration tool like Figma",
    "Build a social media dashboard with analytics",
    "Design an e-commerce platform with payment integration"
  ];

  // Dynamic typing effect
  useEffect(() => {
    if (searchQuery || isFocused) return;
    
    let currentIndex = 0;
    let currentText = "";
    let isDeleting = false;
    let timeoutId;

    const typeText = () => {
      const currentExample = examples[currentIndex];
      
      if (!isDeleting) {
        currentText = currentExample.substring(0, currentText.length + 1);
        setCurrentPlaceholder(currentText);
        
        if (currentText === currentExample) {
          timeoutId = setTimeout(() => {
            isDeleting = true;
            typeText();
          }, 2000);
          return;
        }
      } else {
        currentText = currentExample.substring(0, currentText.length - 1);
        setCurrentPlaceholder(currentText);
        
        if (currentText === "") {
          isDeleting = false;
          currentIndex = (currentIndex + 1) % examples.length;
          timeoutId = setTimeout(typeText, 500);
          return;
        }
      }
      
      const speed = isDeleting ? 50 : 100;
      timeoutId = setTimeout(typeText, speed);
    };

    const initialDelay = setTimeout(typeText, 1000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(initialDelay);
    };
  }, [searchQuery, isFocused, examples]);

  const displayPlaceholder = searchQuery || isFocused ? "Build me a sketch..." : currentPlaceholder;

  return (
    <section className="relative py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <div className={`
            absolute inset-0 rounded-2xl transition-all duration-500
            ${isFocused ? 'animate-taskade-glow' : ''}
          `}></div>
          
          <div className={`
            relative rounded-2xl p-1 transition-all duration-500
            ${isFocused ? 'animate-vibecoder-border-glow' : 'animate-vibecoder-gradient-border'}
            vibecoder-gradient-bg
          `}>
            <div className="relative bg-gray-900 rounded-xl">
              <div className="flex items-center p-8">
                <div className="flex-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onKeyPress={(e) => e.key === 'Enter' && onSearch(searchQuery)}
                    placeholder={displayPlaceholder}
                    className="w-full bg-transparent text-white text-xl placeholder-gray-400 outline-none py-2"
                    disabled={isBuilding}
                  />
                </div>
                
                <div className="flex items-center ml-6">
                  <button
                    onClick={() => onSearch(searchQuery)}
                    disabled={isBuilding || !searchQuery.trim()}
                    className="vibecoder-gradient-button text-white p-4 rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isBuilding ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <span className="text-lg">▶</span>
                    )}
                  </button>
                </div>
              </div>
              
              <div className="px-8 pb-6">
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                  <span className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>🎯 Connect GitHub</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>📝 Upload Context</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>⚙️ Add with Units</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span>🌐 English (US)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {isFocused && (
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 via-blue-500/30 to-cyan-500/30 rounded-2xl blur-2xl -z-10 animate-pulse-glow"></div>
          )}
        </div>
        
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => {
                setSearchQuery(suggestion);
                onSearch(suggestion);
              }}
              className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm hover:bg-gray-700/50 hover:text-white transition-all duration-300 border border-gray-700/50 hover:border-purple-500/50"
            >
              {suggestion}
            </button>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => alert('🎬 Live AI Coding Studio coming soon! This revolutionary feature will let you watch Claude code your app in real-time!')}
            className="group relative bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>🎬</span>
              <span>Watch Claude Code LIVE</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine rounded-full"></div>
          </button>
          <p className="text-xs text-gray-500 mt-2">
            ✨ Revolutionary feature - Watch AI build your app in real-time!
          </p>
        </div>

        {isBuilding && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-3 bg-gray-800/50 backdrop-blur-md px-6 py-3 rounded-full border border-purple-500/30">
              <div className="w-4 h-4 border-2 border-purple-400/30 border-t-purple-400 rounded-full animate-spin"></div>
              <span className="text-purple-400 font-medium">AI Building Your Project...</span>
            </div>
          </div>
        )}

        {projectResult && (
          <div className="mt-8">
            <div className="bg-gray-800/50 backdrop-blur-md border border-green-500/30 rounded-2xl p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-green-400 mb-2">🎉 Project Generated Successfully!</h3>
                <p className="text-gray-300">
                  <strong>{projectResult.projectName}</strong> • {projectResult.filesGenerated} files • {projectResult.aiModel}
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button className="flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg border border-gray-600 hover:border-purple-500 transition-all duration-300">
                  <span>📁</span>
                  <span>Push to GitHub</span>
                </button>
                
                <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300">
                  <span>🚀</span>
                  <span>Deploy Live</span>
                </button>
                
                <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300">
                  <span>👁️</span>
                  <span>View Files</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Category Navigation with Taskade-style Buttons
export const CategoryNavigation = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <section className="relative py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-400 mb-4">
            · · · · · From the Community · · · · ·
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`
                relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105
                ${activeCategory === category.name 
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-purple-500/25` 
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50 hover:border-purple-500/50'
                }
              `}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
              
              {activeCategory === category.name && (
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl blur-xl opacity-30 -z-10`}></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

// Community Showcase with Dynamic Cards
export const CommunityShowcase = ({ projects, activeCategory }) => {
  const filteredProjects = projects.filter(project => project.category === activeCategory);
  
  return (
    <section className="relative py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="text-purple-400 hover:text-purple-300 transition-colors duration-200 text-lg font-medium">
            View all examples →
          </button>
        </div>
      </div>
    </section>
  );
};

// Individual Project Card Component
const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="group relative bg-gray-900/50 backdrop-blur-md border border-gray-800/50 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:border-purple-500/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        
        {isHovered && (
          <div className="absolute inset-0 bg-purple-500/20 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-medium">
              View Project
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex items-center space-x-1 text-gray-400">
            <span>❤️</span>
            <span className="text-sm">{project.likes}</span>
          </div>
        </div>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700/50"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="text-xs text-gray-500">
          by {project.author}
        </div>
      </div>
      
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-2xl pointer-events-none"></div>
      )}
    </div>
  );
};

// Call to Action Section
export const CallToAction = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-cyan-900/30"></div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-8">
          <span className="block text-white">Start building with</span>
          <span className="block mt-2">
            <span className="vibecoder-brand-gradient font-mono">
              VIBECODER TODAY
            </span>
          </span>
        </h2>
        
        <div className="mt-12">
          <button className="group relative vibecoder-gradient-button text-white px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine rounded-full"></div>
          </button>
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="text-gray-400 text-sm">
            Loved by over a million users from companies like
          </div>
        </div>
        
        <div className="mt-8 flex flex-wrap justify-center items-center gap-12 opacity-50">
          <div className="text-2xl font-bold text-gray-500">Meta</div>
          <div className="text-2xl font-bold text-gray-500">Google</div>
          <div className="text-2xl font-bold text-gray-500">Netflix</div>
          <div className="text-2xl font-bold text-gray-500">Airbnb</div>
          <div className="text-2xl font-bold text-gray-500">Tesla</div>
          <div className="text-2xl font-bold text-gray-500">Adobe</div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="relative bg-black/80 backdrop-blur-md border-t border-gray-800/50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <svg width="32" height="26" viewBox="0 0 120 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366F1"/>
                    <stop offset="25%" stopColor="#8B5CF6"/>
                    <stop offset="50%" stopColor="#EC4899"/>
                    <stop offset="75%" stopColor="#3B82F6"/>
                    <stop offset="100%" stopColor="#06B6D4"/>
                  </linearGradient>
                </defs>
                <g fill="url(#footerLogoGradient)">
                  <rect x="0" y="8" width="32" height="20" rx="4"/>
                  <rect x="0" y="12" width="32" height="8" rx="2"/>
                  <rect x="0" y="20" width="32" height="8" rx="2"/>
                  <rect x="88" y="0" width="32" height="20" rx="4"/>
                  <rect x="88" y="4" width="32" height="8" rx="2"/>
                  <rect x="88" y="12" width="32" height="8" rx="2"/>
                  <rect x="44" y="40" width="32" height="20" rx="4"/>
                  <rect x="44" y="44" width="32" height="8" rx="2"/>
                  <rect x="44" y="52" width="32" height="8" rx="2"/>
                  <line x1="32" y1="18" x2="44" y2="50" stroke="url(#footerLogoGradient)" strokeWidth="2"/>
                  <line x1="76" y1="50" x2="88" y2="10" stroke="url(#footerLogoGradient)" strokeWidth="2"/>
                </g>
              </svg>
              <div className="text-xl font-bold">
                <span className="vibecoder-brand-gradient">
                  VibeCoder
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Copyright</a>
            <span>© VibeCoder 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Particle Background Component
export const ParticleBackground = ({ mousePosition }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 50;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        color: `hsl(${Math.random() * 60 + 260}, 70%, 60%)`,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        particle.x += particle.dx;
        particle.y += particle.dy;
        
        const distance = Math.sqrt(
          Math.pow(mousePosition.x - particle.x, 2) + 
          Math.pow(mousePosition.y - particle.y, 2)
        );
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.x += (particle.x - mousePosition.x) * force * 0.01;
          particle.y += (particle.y - mousePosition.y) * force * 0.01;
        }
        
        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace('60%)', `${particle.opacity * 60}%)`);
        ctx.fill();
        
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${(100 - distance) / 100 * 0.1})`;
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mousePosition]);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

// Live AI Coding Studio Component - Revolutionary Feature!
export const LiveAICodingStudio = ({ liveSession, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4 vibecoder-brand-gradient">
          🎬 Live AI Coding Studio
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Revolutionary feature coming soon!
        </p>
        <button
          onClick={onClose}
          className="vibecoder-gradient-button text-white px-6 py-3 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};
