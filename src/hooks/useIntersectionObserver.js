import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for detecting when an element is visible in the viewport
 * @param {Object} options - IntersectionObserver options
 * @param {Number} options.threshold - Percentage of element visibility needed to trigger (0-1)
 * @param {String} options.root - Element that is used as the viewport for checking visibility
 * @param {String} options.rootMargin - Margin around the root element
 * @returns {Array} [ref, isVisible] - Reference to attach to element and boolean indicating visibility
 */
export default function useIntersectionObserver({
  threshold = 0.1,
  root = null,
  rootMargin = '0%',
} = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    const currentElement = ref.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, root, rootMargin]);

  return [ref, isVisible];
}