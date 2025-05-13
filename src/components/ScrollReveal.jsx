import useIntersectionObserver from '../hooks/useIntersectionObserver';

/**
 * Component that reveals its children when scrolled into view
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements to reveal
 * @param {String} props.direction - Direction to animate from ('up', 'down', 'left', 'right')
 * @param {Number} props.delay - Delay before animation starts (in ms)
 * @param {Number} props.duration - Duration of animation (in ms)
 * @param {Number} props.distance - Distance to travel during animation (in px)
 * @param {Boolean} props.once - Whether to animate only once or every time element enters viewport
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 800,
  distance = 30,
  once = true,
  threshold = 0.1
}) {
  const [ref, isVisible] = useIntersectionObserver({ threshold });
  
  // Define transform based on direction
  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return `translateY(${distance}px)`;
        case 'down': return `translateY(-${distance}px)`;
        case 'left': return `translateX(${distance}px)`;
        case 'right': return `translateX(-${distance}px)`;
        default: return `translateY(${distance}px)`;
      }
    }
    return 'translate(0, 0)';
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}