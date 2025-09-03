import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const eventTypes = [
    'Film & TV Production',
    'Corporate Event',
    'Wedding',
    'Christmas Party',
    'Outdoor Event',
    'Function/Party',
    'Other'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you within 24 hours with a custom quote for your event.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guestCount: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['(03) 9000 0000', 'Available 24/7 for productions'],
      href: 'tel:0390000000'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@sarapcatering.com.au', 'Quick response guaranteed'],
      href: 'mailto:hello@sarapcatering.com.au'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Melbourne, VIC', 'Serving all Melbourne metro'],
      href: '#'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['24/7 for productions', 'Business hours: 8AM - 6PM'],
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Get Your Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to elevate your event with exceptional catering? Contact us for a personalized quote 
            tailored to your specific needs and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="fade-in-up">
            <div className="bg-card rounded-xl p-8 shadow-soft border border-border/60">
              <h3 className="text-2xl font-semibold text-primary mb-6">Request a Quote</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(03) 0000 0000"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-foreground mb-2">
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-foreground mb-2">
                      Event Date
                    </label>
                    <Input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="guestCount" className="block text-sm font-medium text-foreground mb-2">
                      Number of Guests *
                    </label>
                    <Input
                      id="guestCount"
                      name="guestCount"
                      type="number"
                      required
                      min="50"
                      value={formData.guestCount}
                      onChange={handleChange}
                      placeholder="50+"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Additional Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event, dietary requirements, special requests, or any other details..."
                    rows={4}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-hero"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2"></div>
                      Sending Request...
                    </>
                  ) : (
                    <>
                      Send Quote Request
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="fade-in-up">
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={info.title} className="bg-card rounded-lg p-6 shadow-soft border border-border/60 hover:shadow-warm transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                      </div>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className={`text-sm ${idx === 0 ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Why Choose SARAP Catering?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Free consultation and custom menu planning
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    24/7 availability for film & TV productions
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Flexible service for events 50+ guests
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Professional, experienced catering team
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Competitive pricing with transparent quotes
                  </li>
                </ul>
              </div>

              {/* Emergency Contact */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h4 className="font-semibold text-primary mb-2">Need Urgent Catering?</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  For last-minute productions or emergency catering needs, call our 24/7 hotline:
                </p>
                <a
                  href="tel:0390000000"
                  className="text-primary font-semibold hover:text-primary-accent transition-colors"
                >
                  (03) 9000 0000
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;