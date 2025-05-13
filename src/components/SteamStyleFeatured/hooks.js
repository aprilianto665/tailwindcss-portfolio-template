import { useState, useEffect, useRef, useCallback } from "react";

// Hook for tracking image loading status
export const useImageLoading = (projects, activeIndex) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});

  // Set loaded state immediately without delay
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Track image loading status
  useEffect(() => {
    if (!projects) return;
    
    const loadStatus = {};
    let loadedCount = 0;
    
    projects.forEach((project, index) => {
      if (project.img) {
        loadStatus[index] = false;
        const img = new Image();
        
        img.onload = () => {
          loadStatus[index] = true;
          loadedCount++;
          setImagesLoaded({...loadStatus});
          
          // If the active image is loaded, show it immediately
          if (index === activeIndex) {
            setIsLoaded(true);
          }
        };
        
        img.onerror = () => {
          // Mark as loaded even on error to prevent waiting
          loadStatus[index] = true;
          loadedCount++;
          setImagesLoaded({...loadStatus});
        };
        
        img.src = project.img;
      } else {
        // No image to load
        loadStatus[index] = true;
        loadedCount++;
      }
    });
    
    // If no images to load, mark as loaded
    if (loadedCount === projects.length) {
      setIsLoaded(true);
    }
    
    setImagesLoaded(loadStatus);
  }, [projects, activeIndex]);

  // Preload images for smoother transitions
  useEffect(() => {
    if (!projects) return;
    
    projects.forEach(project => {
      if (project.img) {
        const img = new Image();
        img.src = project.img;
      }
    });
  }, [projects]);

  return { isLoaded, imagesLoaded };
};

// Hook for auto-rotating featured projects
export const useAutoRotation = (
  isLoaded, 
  projects, 
  activeIndex, 
  setActiveIndex, 
  isPaused
) => {
  const autoScrollRef = useRef(null);
  const startTimeRef = useRef(null);
  const pausedTimeRef = useRef(null);
  const elapsedTimeRef = useRef(0);

  useEffect(() => {
    // Don't start auto-rotation until component is fully loaded
    if (!isLoaded || !projects || projects.length === 0) return;
    
    const duration = 5000; // 5 seconds

    if (!isPaused) {
      // If we're resuming from a pause, use the elapsed time
      if (pausedTimeRef.current) {
        const remainingTime = duration - elapsedTimeRef.current;

        // Change slide after remaining duration
        autoScrollRef.current = setTimeout(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
          elapsedTimeRef.current = 0;
          pausedTimeRef.current = null;
          startTimeRef.current = Date.now();
        }, remainingTime);
      } else {
        // Starting fresh
        startTimeRef.current = Date.now();
        elapsedTimeRef.current = 0;

        // Change slide after duration
        autoScrollRef.current = setTimeout(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
          startTimeRef.current = Date.now();
        }, duration);
      }
    } else {
      // When paused, store the elapsed time
      if (startTimeRef.current) {
        pausedTimeRef.current = Date.now();
        elapsedTimeRef.current = pausedTimeRef.current - startTimeRef.current;
      }
    }

    return () => {
      if (autoScrollRef.current) {
        clearTimeout(autoScrollRef.current);
      }
    };
  }, [activeIndex, isPaused, projects, isLoaded, setActiveIndex]);

  return { 
    autoScrollRef, 
    startTimeRef, 
    pausedTimeRef, 
    elapsedTimeRef 
  };
};

// Hook for thumbnail scrolling
export const useThumbnailScroll = (
  thumbnailsRef,
  thumbnailsContainerRef,
  projects,
  activeIndex,
  isLoaded
) => {
  // Scroll to active thumbnail
  const scrollToThumbnail = useCallback((index) => {
    if (!thumbnailsRef.current || 
        !thumbnailsContainerRef.current || 
        !projects || 
        projects.length <= 1) return;
    
    const thumbnailWidth = 150 + 16; // width + gap
    const containerWidth = thumbnailsContainerRef.current.clientWidth;
    const totalThumbnails = projects.length;
    let scrollLeft = 0;
    
    // Special case for first item - align to start
    if (index === 0) {
      scrollLeft = 0;
    }
    // Special case for last item - align to end if possible
    else if (index === totalThumbnails - 1) {
      const maxScroll = thumbnailsRef.current.scrollWidth - containerWidth;
      scrollLeft = Math.max(0, maxScroll);
    }
    // For middle items, center the active thumbnail
    else {
      const scrollPosition = index * thumbnailWidth;
      const centerPosition = scrollPosition - containerWidth / 2 + thumbnailWidth / 2;
      
      // Ensure we don't scroll past the ends
      scrollLeft = Math.max(
        0,
        Math.min(
          centerPosition,
          thumbnailsRef.current.scrollWidth - containerWidth
        )
      );
    }

    thumbnailsRef.current.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
  }, [thumbnailsRef, thumbnailsContainerRef, projects]);

  // Initialize thumbnails position and scroll to active thumbnail when it changes
  useEffect(() => {
    // Only scroll if component is loaded
    if (!isLoaded || !projects || projects.length === 0) return;
    
    // Initial scroll to active thumbnail
    scrollToThumbnail(activeIndex);

    // Set up resize observer to handle container size changes
    const resizeObserver = new ResizeObserver(() => {
      scrollToThumbnail(activeIndex);
    });

    if (thumbnailsContainerRef.current) {
      resizeObserver.observe(thumbnailsContainerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [activeIndex, isLoaded, projects, scrollToThumbnail, thumbnailsContainerRef]);

  return { scrollToThumbnail };
};