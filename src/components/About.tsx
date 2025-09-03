import React from 'react';
import { Award, Clock, Users, MapPin, Star, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Events Served' },
    { icon: Clock, value: '24/7', label: 'Service Available' },
    { icon: Star, value: '5.0', label: 'Client Rating' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'Every dish is crafted with love and attention to detail, ensuring exceptional quality in every bite.'
    },
    {
      icon: Clock,
      title: 'Reliability & Timing',
      description: 'We understand that timing is everything in productions and events. Count on us to deliver precisely when needed.'
    },
    {
      icon: Users,
      title: 'Professional Service',
      description: 'Our experienced team provides discreet, professional service that enhances your event experience.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="fade-in-up">
            <div className="flex items-center mb-6">
              <MapPin className="w-6 h-6 text-primary mr-3" />
              <span className="text-secondary font-medium">Melbourne, Australia</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              About SARAP Catering
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in Melbourne, SARAP Catering has built a reputation as the go-to catering partner 
              for film and TV productions, corporate events, and celebrations across Australia.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our name "SARAP" reflects our commitment to delivering delicious, satisfying meals that 
              fuel creativity and bring people together. We understand the unique demands of production 
              schedules and event timelines, which is why we've specialized in providing reliable, 
              high-quality catering services that adapt to your needs.
            </p>

            {/* Mission */}
            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional catering services that exceed expectations, support creative 
                industries, and create memorable dining experiences that bring people together.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={value.title} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats & Highlights */}
          <div className="fade-in-up">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={stat.label} className="text-center bg-card border border-border/60 rounded-lg p-6 hover:shadow-warm transition-shadow duration-300">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Specialties */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Why Choose SARAP?</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Specialized in film & TV production catering
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Flexible service for events 50+ guests
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Melbourne-based with local expertise
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  24/7 availability for productions
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Dietary accommodations & special requests
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Professional, discreet service
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;