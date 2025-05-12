import HeroSection from '@/components/sections/hero-section';
import ShowreelSection from '@/components/sections/showreel-section';
import WorkSection from '@/components/sections/work-section';
import AboutSection from '@/components/sections/about-section';
import ServicesSection from '@/components/sections/services-section';
import ClientsSection from '@/components/sections/clients-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ShowreelSection />
      <WorkSection />
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}