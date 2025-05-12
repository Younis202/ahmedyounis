"use client";

import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, MessageSquare, Clock, Send, Loader2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import SectionHeading from '@/components/section-heading';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useScrollReveal();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  
  function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      setIsSubmitted(true);
      form.reset();
    }, 1500);
  }
  
  return (
    <section id="contact" className="py-20 bg-background" ref={sectionRef}>
      <div className="container px-4 md:px-6 mx-auto">
        <SectionHeading 
          title="Get In Touch"
          subtitle="Have a project in mind? Let's discuss how I can help bring your vision to life."
          centered
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 max-w-5xl mx-auto">
          <div className="scroll-reveal">
            <h3 className="font-serif text-2xl mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:contact@ahmedyounis.com" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@ahmedyounis.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Social Media</h4>
                  <div className="space-y-1">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">
                      Instagram
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">
                      Twitter
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Response Time</h4>
                  <p className="text-muted-foreground">Usually within 24-48 hours</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-card/50 rounded-lg border border-border">
              <h4 className="font-serif text-lg mb-3">Let's Work Together</h4>
              <p className="text-muted-foreground mb-4">
                Whether you have a specific project in mind or just want to explore possibilities, I'm here to help bring your vision to life.
              </p>
              <Button variant="outline" asChild className="gap-1">
                <a href="#work">
                  View my work <ArrowRight size={14} />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="scroll-reveal">
            {!isSubmitted ? (
              <div className="bg-card/50 p-6 rounded-lg border border-border">
                <h3 className="font-serif text-2xl mb-6">Send a Message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="What's this about?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me about your project..." 
                              className="min-h-32"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending Message
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            ) : (
              <div className="bg-card/50 p-10 rounded-lg border border-border flex flex-col items-center justify-center min-h-[520px] text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-6">
                  <Send className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-serif text-2xl mb-4">Message Sent!</h3>
                <p className="text-muted-foreground mb-6 max-w-sm">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setIsSubmitted(false)}
                  className="gap-1"
                >
                  Send Another Message
                  <ArrowRight size={14} />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}