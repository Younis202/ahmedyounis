import Link from 'next/link';
import { Instagram, Twitter, Linkedin, Youtube, Mail, ArrowUpRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card/50 backdrop-blur-sm pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="font-serif text-2xl mb-4">Ahmed Younis</h3>
            <p className="text-muted-foreground mb-4 max-w-xs">
              Cinematic storyteller crafting engaging narratives through the art of video editing.
            </p>
            <div className="flex gap-4">
              <Link 
                href="https://instagram.com" 
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link 
                href="https://twitter.com" 
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link 
                href="https://linkedin.com" 
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link 
                href="https://youtube.com" 
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="#about" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#work" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  <span>Work</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#services" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg mb-4">Get in Touch</h3>
            <Link 
              href="mailto:contact@ahmedyounis.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-3"
            >
              <Mail size={16} />
              <span>contact@ahmedyounis.com</span>
            </Link>
            <Link 
              href="#contact"
              className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
            >
              <span>Schedule a consultation</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} Ahmed Younis. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}