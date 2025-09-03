import React from 'react';
import { Camera, Building2, Heart, Gift, Truck, Users, Trees, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import serviceFilm from '@/assets/service-film.jpg';
import serviceCorporate from '@/assets/service-corporate.jpg';
import serviceWedding from '@/assets/service-wedding.jpg';

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: 'Film & TV Production Catering',
      description: 'Specialized catering for film sets, TV productions, and commercial shoots. We understand the unique needs of production teams.',
      image: serviceFilm,
      features: ['On-set delivery', 'Flexible timing', '24/7 availability', 'Dietary accommodations']
    },
    {
      icon: Building2,
      title: 'Corporate Catering',
      description: 'Professional catering for business meetings, conferences, and corporate events. Impress your clients and team.',
      image: serviceCorporate,
      features: ['Business presentations', 'Meeting packages', 'Executive dining', 'Team events']
    },
    {
      icon: Heart,
      title: 'Wedding Catering',
      description: 'Make your special day unforgettable with our elegant wedding catering services tailored to your vision.',
      image: serviceWedding,
      features: ['Custom menus', 'Venue setup', 'Bridal packages', 'Reception service']
    },
    {
      icon: Gift,
      title: 'Christmas Catering',
      description: 'Festive catering for holiday celebrations, Christmas parties, and seasonal corporate events.',
      features: ['Holiday menus', 'Festive decorations', 'Party packages', 'Group bookings']
    },
    {
      icon: Users,
      title: 'Event Catering',
      description: 'Professional catering for all types of events, from intimate gatherings to large celebrations.',
      features: ['Custom planning', 'Full service', 'Event coordination', 'Flexible packages']
    },
    {
      icon: Trees,
      title: 'Outdoor Catering',
      description: 'Mobile catering solutions for outdoor events, festivals, and location-based productions.',
      features: ['Mobile units', 'Weather-resistant', 'Location flexibility', 'Generator powered']
    },
    {
      icon: Calendar,
      title: 'Function Catering',
      description: 'Complete catering solutions for functions, parties, and special occasion celebrations.',
      features: ['Party planning', 'Theme events', 'Custom decorations', 'Entertainment packages']
    },
    {
      icon: Truck,
      title: 'Food Truck Service',
      description: 'Mobile food truck catering for events, festivals, and on-location productions with fresh, hot meals.',
      features: ['Mobile kitchen', 'Fresh cooking', 'Street food style', 'Event festivals']
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From intimate film sets to large-scale events, we deliver exceptional catering services 
            tailored to your specific needs across Melbourne.
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 stagger-children">
          {services.slice(0, 3).map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={service.title} className="group">
                <div className="service-card h-full">
                  {service.image && (
                    <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></div>
                    </div>
                  )}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 stagger-children">
          {services.slice(3).map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={service.title} className="service-card text-center group">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-muted-foreground">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center fade-in-up">
          <p className="text-lg text-muted-foreground mb-6">
            Need a custom catering solution? We're here to help.
          </p>
          <Button onClick={scrollToContact} className="btn-hero">
            Discuss Your Requirements
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;