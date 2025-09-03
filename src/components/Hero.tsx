import React from 'react';
import { ArrowRight, Star, Users, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-catering.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional catering service for film and TV productions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto fade-in-up">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 bg-background/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-primary-foreground">
              <Camera className="w-4 h-4" />
              <span>Film & TV Specialist</span>
            </div>
            <div className="flex items-center space-x-2 bg-background/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-primary-foreground">
              <Users className="w-4 h-4" />
              <span>50+ Guests</span>
            </div>
            <div className="flex items-center space-x-2 bg-background/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-primary-foreground">
              <Star className="w-4 h-4" />
              <span>Melbourne Based</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title mb-6">
            Premium Catering for
            <br />
            Film & Event Productions
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Melbourne's trusted catering partner for film productions, corporate events, and celebrations. 
            Professional service, exceptional food, delivered on time, every time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="btn-hero group"
            >
              Get Quote Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection('#services')}
              variant="outline"
              className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              View Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">500+</div>
              <div className="text-sm text-primary-foreground/80">Events Catered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">50+</div>
              <div className="text-sm text-primary-foreground/80">Film Productions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">24/7</div>
              <div className="text-sm text-primary-foreground/80">Service Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;