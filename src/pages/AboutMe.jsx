import { useState, useEffect } from "react";
import Skills from "../components/Skills";
import About from "../components/About";
import WorkingExperience from "../components/WorkingExperience";
import ScrollReveal from "../components/ScrollReveal";
import ParallaxBackground from "../components/ParallaxBackground";

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Initial fade-in animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`bg-gray-800 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      {/* Content Area with Scroll Animation */}
      <div>
        {/* About Section with Parallax */}
        <div className="relative overflow-hidden">
          <ParallaxBackground 
            color="rgba(6, 182, 212, 0.3)" 
            speed={0.1} 
            pattern="dots" 
          />
          <ScrollReveal direction="up" delay={100}>
            <About />
          </ScrollReveal>
        </div>
        
        {/* Skills Section with Parallax */}
        <div className="relative overflow-hidden">
          <ParallaxBackground 
            color="rgba(234, 179, 8, 0.3)" 
            speed={0.15} 
            pattern="grid" 
          />
          <ScrollReveal direction="left" delay={200}>
            <Skills />
          </ScrollReveal>
        </div>
        
        {/* Experience Section with Parallax */}
        <div className="relative overflow-hidden">
          <ParallaxBackground 
            color="rgba(168, 85, 247, 0.3)" 
            speed={0.2} 
            pattern="diagonal" 
          />
          <ScrollReveal direction="right" delay={300}>
            <WorkingExperience />
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}