"use client";

import { Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import ParallaxSection from '@/components/parallax-section';
import SectionHeading from '@/components/section-heading';
import { aboutData, skills, awards } from '@/lib/data';

export default function AboutSection() {
  const sectionRef = useScrollReveal();
  
  return (
    <section id="about" className="py-20 bg-background/50" ref={sectionRef}>
      <div className="container px-4 md:px-6 mx-auto">
        <SectionHeading 
          title="About Me"
          subtitle="The journey, experiences, and philosophy that shape my approach to video editing."
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-3 scroll-reveal">
            <h3 className="text-2xl mb-4">Background</h3>
            
            {aboutData.bio.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-muted-foreground mb-4">
                {paragraph}
              </p>
            ))}
            
            <div className="mt-10">
              <h3 className="text-2xl mb-6">Career Journey</h3>
              <div className="relative ml-4 pl-8 border-l border-muted">
                {aboutData.career.map((experience, i) => (
                  <div 
                    key={i} 
                    className="mb-8 relative scroll-reveal"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="absolute left-0 top-0 -translate-x-[calc(0.5rem+1px)] bg-card p-1 rounded-full border border-muted">
                      <Briefcase size={16} className="text-primary" />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-muted text-xs mb-2">{experience.period}</span>
                      <h4 className="font-medium mb-1">{experience.role} • {experience.company}</h4>
                      <p className="text-muted-foreground text-sm">{experience.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl mb-6">Education</h3>
              <div className="relative ml-4 pl-8 border-l border-muted">
                {aboutData.education.map((education, i) => (
                  <div 
                    key={i} 
                    className="mb-8 relative scroll-reveal"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="absolute left-0 top-0 -translate-x-[calc(0.5rem+1px)] bg-card p-1 rounded-full border border-muted">
                      <GraduationCap size={16} className="text-primary" />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-muted text-xs mb-2">{education.period}</span>
                      <h4 className="font-medium mb-1">{education.degree}</h4>
                      <p className="text-muted-foreground text-sm">{education.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <ParallaxSection speed={2} direction="down">
              <div className="bg-card rounded-lg p-6 mb-8 scroll-reveal">
                <h3 className="text-xl mb-6">Skills & Expertise</h3>
                
                {skills.map((skill, i) => (
                  <div key={i} className="mb-6">
                    <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">{skill.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, j) => (
                        <span 
                          key={j} 
                          className="px-3 py-1 rounded-full bg-muted text-sm"
                          style={{ animationDelay: `${j * 100}ms` }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-card rounded-lg p-6 scroll-reveal">
                <h3 className="text-xl mb-6">Awards & Recognition</h3>
                
                {awards.map((award, i) => (
                  <div key={i} className="mb-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <Calendar size={16} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{award.title}</h4>
                        <p className="text-sm text-muted-foreground">{award.category}</p>
                        <p className="text-xs mt-1">
                          <span className="text-primary">{award.project}</span> • {award.year}
                        </p>
                      </div>
                    </div>
                    {i < awards.length - 1 && <Separator className="my-4" />}
                  </div>
                ))}
              </div>
            </ParallaxSection>
          </div>
        </div>
      </div>
    </section>
  );
}