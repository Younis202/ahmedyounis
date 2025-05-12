"use client";

import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  className = '',
}: SectionHeadingProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });
  
  // Split the title into characters for animation
  const characters = title.split('');
  
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${centered ? 'text-center' : ''} ${className}`}
    >
      <h2 className="relative font-catavalo text-3xl md:text-4xl lg:text-5xl mb-4 overflow-hidden">
        {characters.map((char, index) => (
          <span
            key={index}
            className={`inline-block transition-all duration-700 ${
              isIntersecting 
                ? 'opacity-100 transform-none' 
                : 'opacity-0 translate-y-full'
            }`}
            style={{ 
              transitionDelay: `${index * 30}ms`,
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
        <span 
          className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-1000 ease-out ${
            isIntersecting ? 'w-full' : 'w-0'
          }`}
          style={{ transitionDelay: `${characters.length * 30 + 300}ms` }}
        />
      </h2>
      
      {subtitle && (
        <p 
          className={`text-muted-foreground max-w-2xl ${centered ? 'mx-auto' : ''} transition-all duration-700 ${
            isIntersecting 
              ? 'opacity-100 transform-none' 
              : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: `${characters.length * 30 + 500}ms` }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}