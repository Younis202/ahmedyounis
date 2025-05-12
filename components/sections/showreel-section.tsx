"use client";

import { useState, useRef } from 'react';
import { Play, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import ParallaxSection from '@/components/parallax-section';

export default function ShowreelSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const sectionRef = useScrollReveal();
  
  const handlePlay = () => {
    setIsPlaying(true);
  };
  
  const handleClose = () => {
    setIsPlaying(false);
  };
  
  return (
    <section 
      id="showreel" 
      className="py-20 relative overflow-hidden bg-card"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.05),transparent)] pointer-events-none"></div>
      
      <ParallaxSection speed={4} className="container px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-10">
            <div className="max-w-xl scroll-reveal">
              <h2 className="text-3xl md:text-4xl mb-4 catavalo">The Art of Cinematic Editing</h2>
              <p className="text-muted-foreground mb-6">
                Experience the visual storytelling and artistic vision that defines my work. 
                Every frame is crafted with purpose, every cut with precision.
              </p>
              <Button 
                onClick={handlePlay}
                className="flex items-center gap-2 rounded-full px-6"
              >
                <Play size={18} /> Watch Showreel
              </Button>
            </div>
            
            <div className="relative w-full md:w-1/2 aspect-video bg-black/50 rounded-lg overflow-hidden shadow-2xl scroll-reveal">
              <div className="absolute inset-0 flex items-center justify-center">
                {!isPlaying ? (
                  <div className="relative w-full h-full">
                    <img 
                      src="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Showreel thumbnail" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <button 
                        onClick={handlePlay}
                        className="w-20 h-20 rounded-full bg-primary/90 text-white flex items-center justify-center transition-transform hover:scale-110 hover:bg-primary"
                        aria-label="Play showreel"
                      >
                        <Play size={32} className="ml-1" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-black">
                    <iframe 
                      ref={videoRef}
                      src="https://player.vimeo.com/video/194276412?autoplay=1&loop=0"
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="Ahmed Younis Showreel"
                    ></iframe>
                    
                    <button
                      onClick={handleClose}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-background/70 transition-colors"
                      aria-label="Close video"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
}