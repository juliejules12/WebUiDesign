
import { useEffect, useState, useRef } from 'react';

// Check if an element is in viewport
export const useIsInViewport = (ref: React.RefObject<HTMLElement>, options = { threshold: 0.1 }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      options
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};

// Scroll to an element
export const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Use on-scroll animation
export const useScrollAnimation = (initialClass: string, animatedClass: string) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsInViewport(ref);
  
  const className = isVisible ? `${initialClass} ${animatedClass}` : initialClass;
  
  return { ref, className };
};
