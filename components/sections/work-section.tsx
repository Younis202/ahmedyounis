"use client";

import { useState, useRef } from 'react';
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import SectionHeading from '@/components/section-heading';
import { projects } from '@/lib/data';

export default function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const sectionRef = useScrollReveal();
  
  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === selectedCategory.toLowerCase());
  
  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsOpen(true);
  };
  
  const handleClose = () => {
    setIsOpen(false);
  };
  
  const goToNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };
  
  const goToPreviousProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const previousIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[previousIndex]);
  };
  
  return (
    <section id="work" className="py-20 bg-background relative" ref={sectionRef}>
      <div className="container px-4 md:px-6 mx-auto">
        <SectionHeading 
          title="Featured Work"
          subtitle="A selection of projects showcasing my approach to visual storytelling through cinematic editing."
          centered
          className="mb-12"
        />
        
        <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory} className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 mb-8 bg-card/50">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="short film">Short Film</TabsTrigger>
            <TabsTrigger value="documentary">Documentary</TabsTrigger>
            <TabsTrigger value="music video">Music Video</TabsTrigger>
            <TabsTrigger value="commercial">Commercial</TabsTrigger>
          </TabsList>
          
          <TabsContent value={selectedCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="group relative overflow-hidden rounded-lg bg-card hover:shadow-xl transition-all duration-500 scroll-reveal"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        variant="default" 
                        className="rounded-full"
                        onClick={() => handleProjectClick(project)}
                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-medium">{project.title}</h3>
                      <Badge variant="outline" className="text-xs">{project.category}</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{project.description}</p>
                    <button
                      onClick={() => handleProjectClick(project)}
                      className="text-primary text-sm font-medium flex items-center gap-1 hover:underline"
                    >
                      See details
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Project Detail Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 bg-card/80 backdrop-blur-sm">
          {selectedProject && (
            <div className="overflow-hidden">
              <DialogTitle className="sr-only">
                {selectedProject.title} - Project Details
              </DialogTitle>
              
              <div className="relative aspect-video">
                <iframe 
                  ref={videoRef}
                  src={`${selectedProject.video}?autoplay=0&title=0&byline=0&portrait=0`}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={selectedProject.title}
                ></iframe>
                
                <button 
                  onClick={handleClose}
                  className="absolute top-4 right-4 bg-background/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-background/70 transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
                
                <button 
                  onClick={goToPreviousProject}
                  className="absolute top-1/2 left-4 -translate-y-1/2 bg-background/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-background/70 transition-colors"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={18} />
                </button>
                
                <button 
                  onClick={goToNextProject}
                  className="absolute top-1/2 right-4 -translate-y-1/2 bg-background/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-background/70 transition-colors"
                  aria-label="Next project"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="catavalo text-2xl mb-1">{selectedProject.title}</h2>
                    <p className="text-muted-foreground">{selectedProject.description}</p>
                  </div>
                  
                  <a 
                    href={selectedProject.video} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm"
                  >
                    View on Vimeo <ExternalLink size={14} />
                  </a>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-sm font-medium mb-1">Client</h3>
                    <p className="text-muted-foreground text-sm">{selectedProject.client}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-1">Year</h3>
                    <p className="text-muted-foreground text-sm">{selectedProject.year}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-1">Category</h3>
                    <p className="text-muted-foreground text-sm">{selectedProject.category}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-sm font-medium mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}