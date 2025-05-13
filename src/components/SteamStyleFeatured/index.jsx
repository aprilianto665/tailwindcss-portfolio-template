import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import components
import ProjectContent from "./ProjectContent";
import Skeleton from "./Skeleton";
import Navigation, { SlideIndicators } from "./Navigation";

// Import hooks and utilities
import { useImageLoading, useAutoRotation, useThumbnailScroll } from "./hooks";
import { containerVariants } from "./animations";

export default function SteamStyleFeatured({ projects }) {
  // State management
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Refs
  const featuredRef = useRef(null);
  const thumbnailsRef = useRef(null);
  const thumbnailsContainerRef = useRef(null);

  // Custom hooks
  const { isLoaded, imagesLoaded } = useImageLoading(projects, activeIndex);
  
  const { 
    autoScrollRef, 
    startTimeRef, 
    pausedTimeRef, 
    elapsedTimeRef 
  } = useAutoRotation(isLoaded, projects, activeIndex, setActiveIndex, isPaused);
  
  const { scrollToThumbnail } = useThumbnailScroll(
    thumbnailsRef,
    thumbnailsContainerRef,
    projects,
    activeIndex,
    isLoaded
  );

  // Handle thumbnail click
  const handleThumbnailClick = (index) => {
    if (!projects || projects.length === 0 || index === activeIndex || isAnimating) return;

    // Set index directly without animation
    setActiveIndex(index);
    elapsedTimeRef.current = 0;
    pausedTimeRef.current = null;
    startTimeRef.current = Date.now();

    // Reset the auto-scroll timer when manually changing slides
    if (autoScrollRef.current) {
      clearTimeout(autoScrollRef.current);
    }
  };

  // Navigate to previous or next project
  const navigateProject = (direction) => {
    if (!projects || projects.length === 0 || isAnimating) return;
    
    // Set a flag to prevent multiple clicks during transition
    setIsAnimating(true);
    
    const newIndex =
      direction === "prev"
        ? (activeIndex - 1 + projects.length) % projects.length
        : (activeIndex + 1) % projects.length;

    // Set index directly without animation
    setActiveIndex(newIndex);

    // Reset timer
    elapsedTimeRef.current = 0;
    pausedTimeRef.current = null;
    startTimeRef.current = Date.now();

    if (autoScrollRef.current) {
      clearTimeout(autoScrollRef.current);
    }
    
    // Reset the animation flag after a short delay
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  // Check if we have any projects
  if (!projects || projects.length === 0) {
    return null;
  }

  // Get current project
  const activeProject = projects[activeIndex];
  const isCurrentImageLoaded = activeProject.img ? imagesLoaded[activeIndex] : true;

  return (
    <div className="mb-12 px-4 sm:px-0">
      <div className="container 2xl:w-[1280px] mx-auto px-4 sm:px-16">
        {/* Section title */}
        <motion.h3 
          className="text-2xl font-bold text-pink-300 mb-4"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          Featured Projects
        </motion.h3>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main featured project */}
          <div
            ref={featuredRef}
            className="relative bg-gray-800 border-4 border-pink-600 shadow-[6px_6px_0px_#4B5563] hover:shadow-[6px_7px_0px_#4B5563] p-5 h-full group overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]"
          >
            {/* Side accent line */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-pink-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>

            {/* Featured project content */}
            {!isCurrentImageLoaded ? (
              <Skeleton />
            ) : (
              <ProjectContent project={activeProject} activeIndex={activeIndex} />
            )}
          </div>

          {/* Thumbnails section with navigation buttons */}
          {projects.length > 1 && (
            <motion.div 
              className="relative mt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.2,
                duration: 0.3,
                ease: "easeOut"
              }}
            >
              <Navigation 
                projects={projects}
                activeIndex={activeIndex}
                handleThumbnailClick={handleThumbnailClick}
                navigateProject={navigateProject}
                thumbnailsRef={thumbnailsRef}
                thumbnailsContainerRef={thumbnailsContainerRef}
              />
            </motion.div>
          )}

          {/* Slide indicators - only show if multiple projects */}
          {projects.length > 1 && (
            <SlideIndicators 
              projects={projects}
              activeIndex={activeIndex}
              handleThumbnailClick={handleThumbnailClick}
            />
          )}
        </div>
      </div>
    </div>
  );
}