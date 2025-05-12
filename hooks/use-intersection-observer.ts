"use client";

import { useEffect, useRef, useState, useCallback } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = '0px',
  freezeOnceVisible = true,
}: UseIntersectionObserverProps = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  const callback = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      const isVisible = entry.isIntersecting;
      
      if (isVisible) {
        setIsIntersecting(true);
        setHasIntersected(true);
        
        if (freezeOnceVisible) {
          observer.disconnect();
        }
      } else {
        if (!freezeOnceVisible) {
          setIsIntersecting(false);
        }
      }
    },
    [freezeOnceVisible]
  );
  
  const [observer] = useState(() => {
    if (typeof window === 'undefined') {
      return null;
    }
    
    return new IntersectionObserver(callback, {
      threshold,
      rootMargin,
    });
  });
  
  useEffect(() => {
    const currentRef = ref.current;
    const currentObserver = observer;
    
    if (currentRef && currentObserver) {
      currentObserver.observe(currentRef);
      
      return () => {
        currentObserver.disconnect();
      };
    }
    
    return () => {};
  }, [observer, ref]);
  
  return { ref, isIntersecting, hasIntersected, setRef: (node: HTMLElement | null) => { ref.current = node; } };
}