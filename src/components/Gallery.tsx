import React, { useState } from 'react';
import { ChefHat, Users, Camera, Utensils } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Events', icon: ChefHat },
    { id: 'film', name: 'Film & TV', icon: Camera },
    { id: 'corporate', name: 'Corporate', icon: Users },
    { id: 'wedding', name: 'Weddings', icon: Utensils },
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'film',
      title: 'Film Set Catering',
      description: 'On-location catering for major production',
      image: '/src/assets/service-film.jpg'
    },
    {
      id: 2,
      category: 'corporate',
      title: 'Corporate Event',
      description: 'Executive lunch for 200+ guests',
      image: '/src/assets/service-corporate.jpg'
    },
    {
      id: 3,
      category: 'wedding',
      title: 'Wedding Reception',
      description: 'Elegant wedding catering service',
      image: '/src/assets/service-wedding.jpg'
    },
    {
      id: 4,
      category: 'film',
      title: 'TV Production Lunch',
      description: 'Daily catering for TV series cast & crew',
      image: '/src/assets/hero-catering.jpg'
    },
    {
      id: 5,
      category: 'corporate',
      title: 'Company Launch',
      description: 'Product launch event catering',
      image: '/src/assets/service-corporate.jpg'
    },
    {
      id: 6,
      category: 'wedding',
      title: 'Garden Wedding',
      description: 'Outdoor wedding reception',
      image: '/src/assets/service-wedding.jpg'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-primary mb-4">
            Our Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing memorable moments from our catering events across Melbourne
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => {
            const IconComponent = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary text-primary-foreground shadow-elegant'
                    : 'bg-card text-card-foreground hover:bg-primary/10 border border-border'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{filter.name}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-elegant hover:shadow-glow transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;