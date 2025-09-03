import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'Production Manager',
      company: 'Melbourne Film Studios',
      text: 'SARAP Catering has been our go-to for all major productions. Their ability to serve 200+ crew members hot, delicious meals on location is unmatched. Professional, reliable, and the food quality is consistently excellent.',
      rating: 5,
      category: 'Film & TV'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Event Director',
      company: 'Corporate Events Melbourne',
      text: 'We\'ve worked with SARAP for multiple corporate events. Their attention to detail and ability to accommodate dietary requirements while maintaining exceptional taste makes them our preferred catering partner.',
      rating: 5,
      category: 'Corporate'
    },
    {
      id: 3,
      name: 'Emma Thompson',
      role: 'Bride',
      company: 'Wedding Client',
      text: 'Our wedding day was perfect, and SARAP Catering played a huge part in that. From the initial tasting to the final service, everything was flawless. Our guests are still talking about the incredible food!',
      rating: 5,
      category: 'Wedding'
    },
    {
      id: 4,
      name: 'David Rodriguez',
      role: 'Line Producer',
      company: 'Aussie Productions',
      text: 'Working in film, we need caterers who understand the demands of location shooting. SARAP delivers consistently, whether we\'re in the city or remote locations. Their team is professional and the food keeps our crew happy.',
      rating: 5,
      category: 'Film & TV'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'HR Manager',
      company: 'Tech Solutions Ltd',
      text: 'SARAP catered our annual company retreat for 150 employees. The variety, quality, and presentation exceeded our expectations. They made the event memorable for all the right reasons.',
      rating: 5,
      category: 'Corporate'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentReview = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by Melbourne's leading production companies, event organizers, and couples
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 shadow-elegant">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-primary/20">
              <Quote className="w-12 h-12" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10 text-center">
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                "{currentReview.text}"
              </blockquote>

              {/* Author Info */}
              <div className="space-y-2">
                <div className="text-lg font-display font-bold text-primary">
                  {currentReview.name}
                </div>
                <div className="text-muted-foreground">
                  {currentReview.role} • {currentReview.company}
                </div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                  {currentReview.category}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center absolute top-1/2 left-4 right-4 transform -translate-y-1/2">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="rounded-full p-2 bg-background/80 hover:bg-background border-border/60 shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full p-2 bg-background/80 hover:bg-background border-border/60 shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary scale-125'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;