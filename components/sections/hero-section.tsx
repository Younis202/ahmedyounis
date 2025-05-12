"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import VideoBackground from "@/components/video-background";
import { Play, Code, Clapperboard, Award, ChevronDown } from "lucide-react";
import Image from 'next/image'

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const personalizedVideoSrc = "https://ik.imagekit.io/pcet3dvcu/banner.mp4?updatedAt=1746964707810";
  const personalizedFallbackImage = "https://ik.imagekit.io/pcet3dvcu/Titus_scifi_Rodin_style_of_The_Thinker_in_space_suit_an_night_s_6a6cad5f-18af-405b-909f-3985d31eb7b7.png?updatedAt=1747040542355";

  const parallaxOffset = scrollPosition * 0.3;

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black text-white"
      id="hero"
      aria-labelledby="hero-heading"
    >
      {/* Video Background with Enhanced Overlay */}
      <VideoBackground
        src={personalizedVideoSrc}
        fallbackImage={personalizedFallbackImage}
        priority
        className="absolute inset-0 w-full h-full object-cover"
        overlayClassName="bg-gradient-to-t from-black via-black/60 to-black/90"
      />

      {/* Subtle Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC41Ii8+PC9zdmc+')]"></div>

      {/* Professional Atmospheric Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[30vw] h-[30vw] bg-blue-600/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>

      {/* Fixed Top Stats Bar */}
      <div className="absolute top-0 left-0 right-0 bg-black/30 backdrop-blur-sm z-30 py-2 border-b border-white/10">
        <div className="container mx-auto flex justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-2 text-xs md:text-sm font-mono text-white/80">
            <Clapperboard className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span>10+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm font-mono text-white/80">
            <Code className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span>200+ Projects</span>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm font-mono text-white/80">
            <Award className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span>Award-Winning Editor</span>
          </div>
        </div>
      </div>

      {/* Main Content with Better Layout */}
      <div 
        className="container absolute z-20 px-4 md:px-6 mx-auto"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Side: Main Headline */}
            <div className="space-y-6 md:pr-8">
              <div className="inline-block mb-2">
                <span className="text-xs uppercase tracking-wider font-mono bg-primary/20 text-primary/90 px-3 py-1 rounded-full border border-primary/30">
                  Cinematic Editor
                </span>
              </div>
              
              <h1 
                id="hero-heading" 
                className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none"
              >
                <span className="block text-white/90 catavalo">Transforming</span>
                <span className="block bg-gradient-to-r from-primary via-purple-400 to-blue-500 text-transparent bg-clip-text font-bold mt-1 catavalo">
                  Vision into Reality
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
                Crafting compelling visual narratives that captivate audiences and elevate brands through 
                <span className="text-primary font-medium"> innovative </span> 
                editing techniques and 
                <span className="text-blue-400 font-medium"> cinematic storytelling</span>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-5 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-md px-7 py-6 text-base bg-primary hover:bg-primary/90 text-white font-medium transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30"
                >
                  <a href="#work" className="flex items-center gap-2">
                    <Play size={18} />
                    <span>View My Work</span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-md px-7 py-6 text-base border-white/20 hover:border-white/30 text-white hover:text-white font-medium transition-all duration-300 backdrop-blur-sm"
                >
                  <a href="#contact">Let's Collaborate</a>
                </Button>
              </div>
            </div>
            
            {/* Right Side: Visual Element */}
            <div className="hidden md:flex justify-center items-center relative">
              <div className="w-full aspect-square max-w-md relative">
                {/* Abstract Editor Element */}
                <div className="absolute inset-0 border-2 border-white/10 rounded-lg overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-900/20 backdrop-blur-sm"></div>
                  <div className="relative z-10 p-6 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-xl shadow-primary/20">
                      <Play size={36} className="text-white ml-1" />
                    </div>
                    <div className="uppercase tracking-wider text-xs font-mono text-white/70 mt-4">
                      Cinematic Excellence
                    </div>
                    <div className="text-2xl font-serif mt-2 text-white">
                      Ahmed Younis
                    </div>
                  </div>
                                      <Image src="https://ik.imagekit.io/pcet3dvcu/328254f0-1fe4-4b21-b031-23c5e86ca2d5-Photoroom%20(1).png?updatedAt=1747043074213" alt={""} width={450} height={450} className="absolute -bottom-5 -right-20 -rotate-12" />
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
                  <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
                  <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Bottom Bar */}
      {isClient && (
        <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-t border-white/10 py-3 z-30">
          <div className="container mx-auto flex justify-between items-center px-4">
            <div className="text-xs font-mono text-white/50">© {new Date().getFullYear()} AHMED YOUNIS</div>
            <div className="text-xs font-mono text-white/50 flex items-center gap-3">
              <span>4K UHD</span>
              <span className="w-1 h-1 rounded-full bg-white/30"></span>
              <span>HDR CERTIFIED</span>
              <span className="w-1 h-1 rounded-full bg-white/30"></span>
              <span>CINEMATIC GRADE</span>
            </div>
          </div>
        </div>
      )}

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30">
        <a
          href="#showreel"
          className="group flex flex-col items-center text-white/60 hover:text-primary transition-colors focus:outline-none"
          aria-label="Scroll to showreel"
        >
          <span className="text-xs uppercase tracking-widest mb-2 font-mono">Discover</span>
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary/50 transition-colors">
            <ChevronDown size={16} className="animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}