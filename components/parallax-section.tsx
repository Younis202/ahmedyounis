"use client";

import { useRef, useEffect, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function ParallaxSection({
  children,
  speed = 0.5,
  className = '',
  direction = 'up',
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const section = sectionRef.current;
    const content = contentRef.current;
    
    if (!section || !content) return;
    
    let startingPosition = 0;
    let ticking = false;
    
    const updatePosition = () => {
      if (!content) return;
      
      let transform = '';
      const multiplier = speed * 0.1;
      
      switch (direction) {
        case 'up':
          transform = `translateY(${startingPosition * multiplier}px)`;
          break;
        case 'down':
          transform = `translateY(${-startingPosition * multiplier}px)`;
          break;
        case 'left':
          transform = `translateX(${startingPosition * multiplier}px)`;
          break;
        case 'right':
          transform = `translateX(${-startingPosition * multiplier}px)`;
          break;
      }
      
      content.style.transform = transform;
      ticking = false;
    };
    
    const onScroll = () => {
      if (section) {
        const rect = section.getBoundingClientRect();
        startingPosition = rect.top;
        
        if (!ticking) {
          window.requestAnimationFrame(updatePosition);
          ticking = true;
        }
      }
    };
    
    window.addEventListener('scroll', onScroll);
    onScroll(); // Initialize position
    
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [speed, direction]);
  
  return (
    <div ref={sectionRef} className={`overflow-hidden ${className}`}>
      <div ref={contentRef}>
        {children}
      </div>
    </div>
  );
}