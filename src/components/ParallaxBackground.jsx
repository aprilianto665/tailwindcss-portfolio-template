import { useEffect, useState } from 'react';

/**
 * Component that creates a parallax background effect
 * @param {Object} props - Component props
 * @param {String} props.color - Color of the background pattern (hex, rgb, etc.)
 * @param {Number} props.speed - Speed of parallax effect (higher = faster)
 * @param {String} props.pattern - Pattern type ('dots', 'grid', 'diagonal')
 */
export default function ParallaxBackground({ 
  color = 'rgba(255, 255, 255, 0.3)',
  speed = 0.15,
  pattern = 'dots'
}) {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const getBackgroundPattern = () => {
    switch (pattern) {
      case 'dots':
        return `radial-gradient(circle, ${color} 10%, transparent 10%)`;
      case 'grid':
        return `linear-gradient(to right, ${color} 1px, transparent 1px), 
                linear-gradient(to bottom, ${color} 1px, transparent 1px)`;
      case 'diagonal':
        return `repeating-linear-gradient(45deg, ${color} 0, ${color} 1px, transparent 1px, transparent 10px)`;
      default:
        return `radial-gradient(circle, ${color} 10%, transparent 10%)`;
    }
  };
  
  return (
    <div 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        transform: `translateY(${scrollY * speed}px)`,
        opacity: 0.1,
        backgroundImage: getBackgroundPattern(),
        backgroundSize: pattern === 'dots' ? '20px 20px' : '40px 40px',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
}