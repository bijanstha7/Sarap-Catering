import React from 'react';
import { Check, Star, Camera, Users, Heart, Gift, Truck, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Packages = () => {
  const packages = [
    {
      id: 'film-tv',
      name: 'Film & TV Production',
      icon: Camera,
      price: 'From $18',
      priceUnit: 'per person',
      description: 'Professional catering for film sets, TV productions, and commercial shoots',
      featured: true,
      features: [
        'On-location setup anywhere in Melbourne',
        'Hot meals delivered on schedule',
        'Dietary requirements accommodated',
        'Professional service staff',
        'Equipment and setup included',
        'Flexible serving times',
        'Weather-resistant setup',
        '24/7 support during production'
      ],
      image: '/src/assets/service-film.jpg'
    },
    {
      id: 'corporate',
      name: 'Corporate Events',
      icon: Building,
      price: 'From $25',
      priceUnit: 'per person',
      description: 'Elegant catering for business meetings, conferences, and corporate functions',
      featured: false,
      features: [
        'Professional presentation',
        'Executive menu options',
        'Vegetarian & vegan choices',
        'Setup and cleanup included',
        'Branded service options',
        'Meeting room delivery',
        'Flexible timing',
        'Professional staff uniforms'
      ],
      image: '/src/assets/service-corporate.jpg'
    },
    {
      id: 'wedding',
      name: 'Wedding Catering',
      icon: Heart,
      price: 'From $35',
      priceUnit: 'per person',
      description: 'Memorable wedding catering with personalized menus and elegant service',
      featured: false,
      features: [
        'Custom menu design',
        'Tasting session included',
        'Professional table service',
        'Wedding cake coordination',
        'Bridal party meals',
        'Dietary accommodations',
        'Elegant presentation',
        'Photography coordination'
      ],
      image: '/src/assets/service-wedding.jpg'
    },
    {
      id: 'outdoor',
      name: 'Outdoor & Events',
      icon: Truck,
      price: 'From $22',
      priceUnit: 'per person',
      description: 'Mobile catering for outdoor events, festivals, and special occasions',
      featured: false,
      features: [
        'Mobile kitchen setup',
        'Weather-proof service',
        'Generator-powered equipment',
        'Outdoor-friendly menus',
        'Festival-style service',
        'Crowd management expertise',
        'Waste management included',
        'Permit assistance'
      ],
      image: '/src/assets/hero-catering.jpg'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-primary mb-4">
            Catering Packages
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored catering solutions for every occasion, from intimate gatherings to large-scale productions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <Card
                key={pkg.id}
                className={`relative overflow-hidden transition-all duration-500 hover:shadow-glow animate-fade-in ${
                  pkg.featured 
                    ? 'ring-2 ring-primary/20 shadow-elegant' 
                    : 'hover:shadow-elegant'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {pkg.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Popular</span>
                  </div>
                )}

                <CardHeader className="relative">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-display">{pkg.name}</CardTitle>
                      <div className="flex items-baseline space-x-1 mt-1">
                        <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                        <span className="text-muted-foreground">{pkg.priceUnit}</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Package Image */}
                  <div className="aspect-[16/9] rounded-lg overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg text-foreground">What's Included:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-0.5">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={scrollToContact}
                    className={`w-full py-3 font-medium transition-all duration-300 ${
                      pkg.featured
                        ? 'btn-hero'
                        : 'bg-card-foreground text-card hover:bg-primary hover:text-primary-foreground'
                    }`}
                  >
                    Get Quote for {pkg.name}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-primary mb-4">
              Need a Custom Package?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every event is unique. Let us create a personalized catering solution that perfectly fits your needs and budget.
            </p>
            <Button onClick={scrollToContact} className="btn-hero">
              <Users className="w-4 h-4 mr-2" />
              Discuss Custom Requirements
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;