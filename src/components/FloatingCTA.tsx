import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToContact}
      className="floating-cta group"
      aria-label="Book catering service now"
    >
      <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
      Book Now
    </button>
  );
};

export default FloatingCTA;