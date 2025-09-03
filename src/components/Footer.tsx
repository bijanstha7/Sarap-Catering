import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Camera } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    services: [
      { name: 'Film & TV Catering', href: '#services' },
      { name: 'Corporate Events', href: '#services' },
      { name: 'Wedding Catering', href: '#services' },
      { name: 'Christmas Catering', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Services', href: '#services' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'Contact', href: '#contact' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="text-3xl font-display font-bold">SARAP</div>
              <div className="text-sm font-medium opacity-90">CATERING</div>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Melbourne's premier catering service specializing in film & TV productions, 
              corporate events, and celebrations. Professional, reliable, exceptional.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/90">Melbourne, Victoria, Australia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/90">(03) 9000 0000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/90">hello@sarapcatering.com.au</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Specialization Banner */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="bg-secondary/10 rounded-lg p-4 mb-8">
            <div className="flex items-center justify-center space-x-2 text-center">
              <Camera className="w-5 h-5 text-secondary" />
              <span className="font-medium">Specialized in Film & TV Production Catering</span>
              <Camera className="w-5 h-5 text-secondary" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © {currentYear} SARAP Catering. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-secondary transition-colors">Food Safety</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;