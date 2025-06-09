import React, { useState, useEffect } from "react";
import "./App.css";
import { 
  Header, 
  HeroSection, 
  MainPromptBox, 
  CategoryNavigation, 
  CommunityShowcase, 
  CallToAction, 
  Footer,
  ParticleBackground,
  LiveAICodingStudio
} from "./components.js";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("AI Apps");
  const [isBuilding, setIsBuilding] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [projectResult, setProjectResult] = useState(null);
  const [isCreatingRepo, setIsCreatingRepo] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  const [liveSession, setLiveSession] = useState(null);
  const [showLiveStudio, setShowLiveStudio] = useState(false);

  // Track mouse position for dynamic effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSearch = async (query) => {
    if (!query.trim()) return;
    
    setIsBuilding(true);
    setSearchQuery(query);
    
    try {
      // Simulate API call for demo
      console.log("🚀 Building:", query);
      setTimeout(() => {
        setIsBuilding(false);
        setProjectResult({
          success: true,
          projectId: `demo_${Date.now()}`,
          projectName: "AI Generated Project",
          filesGenerated: 4,
          techStack: ["HTML5", "CSS3", "JavaScript"],
          aiModel: "Claude 3.5 Sonnet"
        });
        alert(`🎉 Demo Success! In production, this would generate:\n\n📁 Project: AI Generated App\n📄 Files: HTML, CSS, JS, README\n🤖 AI: Claude 3.5 Sonnet\n\n✨ Ready for deployment!`);
      }, 3000);
    } catch (error) {
      console.error('❌ Error:', error);
      setIsBuilding(false);
    }
  };

  const categories = [
    { name: "AI Apps", icon: "🤖", color: "from-purple-500 to-pink-500" },
    { name: "Digital Sketches", icon: "🎨", color: "from-blue-500 to-cyan-500" },
    { name: "Landing", icon: "🚀", color: "from-green-500 to-teal-500" },
    { name: "Hack & Play", icon: "⚡", color: "from-orange-500 to-red-500" }
  ];

  const projects = [
    {
      id: 1,
      title: "AI Goal Coach",
      description: "An AI-powered goal tracking and motivation system with personalized recommendations",
      category: "AI Apps",
      image: "https://images.unsplash.com/photo-1545063328-c8e3faffa16f",
      tech: ["React", "Python", "OpenAI"],
      author: "Alex Chen",
      likes: 234
    },
    {
      id: 2,
      title: "TaskFlow Pro",
      description: "Intelligent task management with automated prioritization and smart scheduling",
      category: "AI Apps", 
      image: "https://images.pexels.com/photos/7663142/pexels-photo-7663142.jpeg",
      tech: ["Vue.js", "Node.js", "Claude"],
      author: "Sarah Kim",
      likes: 189
    }
  ];

  return (
    <div className="App min-h-screen bg-black text-white relative overflow-x-hidden">
      <ParticleBackground mousePosition={mousePosition} />
      
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20 pointer-events-none z-0" />
      
      {showLiveStudio && (
        <LiveAICodingStudio 
          liveSession={liveSession}
          onClose={() => setShowLiveStudio(false)}
        />
      )}
      
      <div className="relative z-10">
        <Header />
        
        <main>
          <HeroSection />
          
          <MainPromptBox 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearch={handleSearch}
            isBuilding={isBuilding}
            projectResult={projectResult}
          />
          
          <CategoryNavigation 
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          
          <CommunityShowcase 
            projects={projects}
            activeCategory={activeCategory}
          />
          
          <CallToAction />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
