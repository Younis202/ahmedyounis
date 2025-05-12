"use client";

import { Film, Palette, Sparkles, Volume2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import SectionHeading from '@/components/section-heading';
import { services } from '@/lib/data';

export default function ServicesSection() {
  const sectionRef = useScrollReveal();

  // Map service icons to Lucide React components
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Film':
        return <Film className="h-8 w-8 text-primary" />;
      case 'Palette':
        return <Palette className="h-8 w-8 text-primary" />;
      case 'Sparkles':
        return <Sparkles className="h-8 w-8 text-primary" />;
      case 'Volume2':
        return <Volume2 className="h-8 w-8 text-primary" />;
      default:
        return <Film className="h-8 w-8 text-primary" />;
    }
  };
  
  return (
    <section id="services" className="py-20 bg-card/50 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.03),transparent_60%)]"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <SectionHeading 
          title="Services"
          subtitle="Comprehensive video editing services tailored to bring your creative vision to life."
          centered
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <Card 
              key={i}
              className="bg-card/70 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 scroll-reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-4">{getIconComponent(service.icon)}</div>
                <CardTitle className="font-thin">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center max-w-2xl mx-auto scroll-reveal">
          <p className="text-muted-foreground">
            Looking for a custom editing solution for your specific project requirements?
          </p>
          <p className="mt-2">
            <a 
              href="#contact" 
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Let's discuss your unique needs →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}