"use client";

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import SectionHeading from '@/components/section-heading';
import ParallaxSection from '@/components/parallax-section';
import { testimonials } from '@/lib/data';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useScrollReveal();
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-20 bg-card/30 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--accent-rgb),0.05),transparent_50%)]"></div>
      
      <ParallaxSection speed={3} className="container px-4 md:px-6 mx-auto relative z-10">
        <SectionHeading 
          title="Client Testimonials"
          subtitle="Hear what clients have to say about their experience working with me."
          centered
          className="mb-16"
        />
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-8 left-8 text-accent/20">
            <Quote size={120} strokeWidth={1} />
          </div>
          
          <div className="relative z-10">
            <div className="scroll-reveal">
              <Card className="border-primary/10 bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-10">
                  <p className="text-lg md:text-xl font-serif italic leading-relaxed">
                    {testimonials[activeIndex].content}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row items-center pt-0 pb-6">
                  <div className="flex items-center gap-4 mb-4 sm:mb-0">
                    <Avatar className="w-12 h-12 border-2 border-primary/10">
                      <AvatarImage src={testimonials[activeIndex].avatar} alt={testimonials[activeIndex].name} />
                      <AvatarFallback>{testimonials[activeIndex].name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{testimonials[activeIndex].name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[activeIndex].role} • {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 sm:ml-auto">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevTestimonial}
                      className="rounded-full w-9 h-9"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={16} />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextTestimonial}
                      className="rounded-full w-9 h-9"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={16} />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
            
            <div className="flex justify-center mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full mx-1 transition-all ${
                    i === activeIndex ? 'bg-primary w-6' : 'bg-primary/30'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </ParallaxSection>
    </section>
  );
}