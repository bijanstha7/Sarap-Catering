import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Packages from '@/components/Packages';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Packages />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
