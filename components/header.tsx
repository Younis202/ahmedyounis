"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/90 backdrop-blur-sm py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="font-serif text-2xl tracking-wider text-primary">AY</span>
          <div className="hidden md:block">
            <h1 className="font-serif text-xl">Ahmed Younis</h1>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Cinematic Editor</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="#about" 
            className="text-foreground/80 hover:text-primary transition-colors group"
          >
            <span className="group-hover:text-primary transition-colors text-sm uppercase tracking-wider">About</span>
          </Link>
          <Link 
            href="#work" 
            className="text-foreground/80 hover:text-primary transition-colors group"
          >
            <span className="group-hover:text-primary transition-colors text-sm uppercase tracking-wider">Work</span>
          </Link>
          <Link 
            href="#services" 
            className="text-foreground/80 hover:text-primary transition-colors group"
          >
            <span className="group-hover:text-primary transition-colors text-sm uppercase tracking-wider">Services</span>
          </Link>
          <Link 
            href="#clients" 
            className="text-foreground/80 hover:text-primary transition-colors group"
          >
            <span className="group-hover:text-primary transition-colors text-sm uppercase tracking-wider">Clients</span>
          </Link>
          <Link 
            href="#contact" 
            className="text-foreground/80 hover:text-primary transition-colors group"
          >
            <span className="group-hover:text-primary transition-colors text-sm uppercase tracking-wider">Contact</span>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex flex-col">
          <div className="container mx-auto px-4 py-5 flex justify-between items-center">
            <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <span className="font-serif text-2xl tracking-wider text-primary">AY</span>
            </Link>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </Button>
          </div>
          
          <Separator className="mb-8" />
          
          <nav className="flex flex-col items-center justify-center flex-grow gap-8 animate-fade-in">
            <Link 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="font-serif text-3xl">About</span>
            </Link>
            <Link 
              href="#work" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="font-serif text-3xl">Work</span>
            </Link>
            <Link 
              href="#services" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="font-serif text-3xl">Services</span>
            </Link>
            <Link 
              href="#clients" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="font-serif text-3xl">Clients</span>
            </Link>
            <Link 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="font-serif text-3xl">Contact</span>
            </Link>
          </nav>
          
          <div className="container mx-auto px-4 py-8 flex justify-center">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}