import { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";

export default function FeaturedCarousel({ projects }) {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const [isAtEnd, setIsAtEnd] = useState(false);
  
  // Check if scroll is at the end
  const checkScrollPosition = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      // Add a small buffer (1px) to account for rounding errors
      setIsAtEnd(Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 1);
    }
  };
  
  // Auto scroll functionality
  useEffect(() => {
    let scrollInterval;
    
    if (!isPaused) {
      scrollInterval = setInterval(() => {
        if (carouselRef.current) {
          // If we're at the end, smoothly return to the beginning
          if (isAtEnd) {
            carouselRef.current.scrollTo({
              left: 0,
              behavior: 'smooth'
            });
          } else {
            carouselRef.current.scrollLeft += 1;
          }
          
          checkScrollPosition();
        }
      }, 20);
    }
    
    return () => clearInterval(scrollInterval);
  }, [isPaused, isAtEnd]);
  
  // Add scroll event listener to detect end
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollPosition);
      // Initial check
      checkScrollPosition();
    }
    
    return () => {
      if (carousel) {
        carousel.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);
  
  // Scroll functions for buttons
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };
  
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  // Create duplicate items for infinite scroll effect
  const carouselItems = [...projects];

  return (
    <div className="relative mb-12">
      <h3 className="text-2xl font-bold text-pink-300 mb-4 px-4 sm:px-16">Featured Projects</h3>
      
      {/* Carousel container */}
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation buttons */}
        <button 
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full shadow-lg transition-all duration-300"
          aria-label="Scroll left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full shadow-lg transition-all duration-300"
          aria-label="Scroll right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Scrollable content */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth py-4 px-4 sm:px-16 gap-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {carouselItems.map((project) => (
            <div key={project.id} className="min-w-[300px] sm:min-w-[350px] flex-shrink-0">
              <ProjectCard project={project} />
            </div>
          ))}
          
          {/* Add indicator dots */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === Math.floor((carouselRef.current?.scrollLeft || 0) / 
                  (carouselRef.current?.clientWidth || 1)) 
                    ? "bg-pink-500" 
                    : "bg-gray-400"
                }`}
                onClick={() => {
                  if (carouselRef.current) {
                    carouselRef.current.scrollTo({
                      left: index * carouselRef.current.clientWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}