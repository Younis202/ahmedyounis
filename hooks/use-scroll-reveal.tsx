"use client";

import { useEffect, useRef } from 'react';

interface UseScrollRevealProps {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal({
  threshold = 0.1,
  rootMargin = '0px',
}: UseScrollRevealProps = {}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const current = ref.current;
    
    // Find all elements with the scroll-reveal class
    const elements = current.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    // Also observe the container itself if it has the scroll-reveal class
    if (current.classList.contains('scroll-reveal')) {
      observer.observe(current);
    }

    return () => {
      if (elements) elements.forEach((el) => observer.unobserve(el));
      if (current && current.classList.contains('scroll-reveal')) {
        observer.unobserve(current);
      }
    };
  }, [threshold, rootMargin]);

  return ref;
}