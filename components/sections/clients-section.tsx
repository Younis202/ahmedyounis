"use client";

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import SectionHeading from '@/components/section-heading';
import { clients } from '@/lib/data';

export default function ClientsSection() {
  const sectionRef = useScrollReveal();
  
  return (
    <section id="clients" className="py-20 bg-background/80" ref={sectionRef}>
      <div className="container px-4 md:px-6 mx-auto">
        <SectionHeading 
          title="Clients & Collaborations"
          subtitle="Proud to have worked with these amazing brands and studios."
          centered
          className="mb-16"
        />
        
        <div className="relative overflow-hidden film-strip py-16">
          <div className="w-full flex justify-around items-center flex-wrap gap-y-12">
            {clients.map((client, i) => (
              <div 
                key={i} 
                className="px-8 scroll-reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-center">
                  <AspectRatio ratio={3/2} className="w-32 h-auto mx-auto mb-4 opacity-70">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-serif text-xl text-muted-foreground hover:text-primary transition-colors">
                        {client}
                      </span>
                    </div>
                  </AspectRatio>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-background/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-background/80 to-transparent"></div>
            <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-background/80 to-transparent"></div>
            <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-background/80 to-transparent"></div>
          </div>
        </div>
        
        <div className="mt-16 text-center max-w-2xl mx-auto scroll-reveal">
          <p className="text-muted-foreground">
            Join the roster of satisfied clients who've experienced the difference that expert video editing brings to their projects.
          </p>
        </div>
      </div>
    </section>
  );
}