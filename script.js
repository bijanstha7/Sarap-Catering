// Global Variables
let currentTestimonial = 0;
let testimonialInterval;
let isFloatingCTAVisible = false;

// DOM Elements
const navigation = document.getElementById('navigation');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const floatingCTA = document.getElementById('floating-cta');
const contactForm = document.getElementById('contact-form');
const testimonialContainer = document.getElementById('testimonial-container');
const testimonialPrev = document.getElementById('testimonial-prev');
const testimonialNext = document.getElementById('testimonial-next');
const testimonialIndicators = document.getElementById('testimonial-indicators');
const galleryGrid = document.getElementById('gallery-grid');
const galleryFilters = document.querySelectorAll('.filter-btn');

// Testimonials Data
const testimonials = [
  {
    text: "SARAP Catering exceeded our expectations for our film production. Their team was professional, punctual, and the food quality was exceptional. They understood the demands of our shooting schedule and delivered consistently throughout the project.",
    author: "Sarah Mitchell",
    role: "Production Manager",
    company: "Stellar Films",
    location: "Melbourne",
    category: "Film & TV",
    rating: 5
  },
  {
    text: "Our wedding day was perfect thanks to SARAP Catering. The food was absolutely delicious, the presentation was beautiful, and the service was flawless. Our guests are still talking about the amazing meal!",
    author: "Emma & James Wilson",
    role: "Newlyweds",
    company: "",
    location: "Melbourne",
    category: "Wedding",
    rating: 5
  },
  {
    text: "We've used SARAP Catering for multiple corporate events and they never disappoint. Their attention to detail and ability to accommodate last-minute changes makes them our go-to catering partner.",
    author: "Michael Chen",
    role: "Event Coordinator",
    company: "TechCorp Australia",
    location: "",
    category: "Corporate",
    rating: 5
  },
  {
    text: "Working with SARAP Catering on our outdoor festival was a game-changer. They handled the logistics flawlessly and delivered quality food to over 500 guests in challenging conditions.",
    author: "Lisa Rodriguez",
    role: "Festival Director",
    company: "Melbourne Arts Festival",
    location: "",
    category: "Outdoor Events",
    rating: 5
  },
  {
    text: "The Christmas party catering from SARAP was outstanding. The festive menu was creative and delicious, and their team made sure every detail was perfect. Highly recommended!",
    author: "David Thompson",
    role: "HR Manager",
    company: "Global Solutions Ltd",
    location: "",
    category: "Special Events",
    rating: 5
  }
];

// Utility Functions
function scrollToSection(selector) {
  const element = document.querySelector(selector);
  if (element) {
    const offset = 80; // Account for fixed navigation
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
  
  // Close mobile menu if open
  if (mobileMenu && mobileMenu.classList.contains('active')) {
    toggleMobileMenu();
  }
}

function showToast(title, message, type = 'success') {
  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="toast-title">${title}</div>
    <div class="toast-message">${message}</div>
  `;
  
  toastContainer.appendChild(toast);
  
  // Remove toast after 5 seconds
  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 5000);
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Navigation Functions
function toggleMobileMenu() {
  if (mobileMenu) {
    mobileMenu.classList.toggle('active');
    
    // Update hamburger animation
    const hamburgers = mobileMenuBtn.querySelectorAll('.hamburger');
    hamburgers.forEach((bar, index) => {
      if (mobileMenu.classList.contains('active')) {
        if (index === 0) bar.style.transform = 'rotate(45deg) translate(6px, 6px)';
        if (index === 1) bar.style.opacity = '0';
        if (index === 2) bar.style.transform = 'rotate(-45deg) translate(6px, -6px)';
      } else {
        bar.style.transform = '';
        bar.style.opacity = '';
      }
    });
  }
}

function handleScroll() {
  const scrollY = window.scrollY;
  const heroHeight = window.innerHeight;
  
  // Update navigation background opacity
  if (navigation) {
    if (scrollY > 50) {
      navigation.style.background = 'rgba(255, 255, 255, 0.95)';
      navigation.style.backdropFilter = 'blur(10px)';
    } else {
      navigation.style.background = 'rgba(255, 255, 255, 0.95)';
    }
  }
  
  // Show/hide floating CTA
  const shouldShowCTA = scrollY > heroHeight * 0.5;
  if (shouldShowCTA !== isFloatingCTAVisible) {
    isFloatingCTAVisible = shouldShowCTA;
    if (floatingCTA) {
      floatingCTA.classList.toggle('visible', shouldShowCTA);
    }
  }
  
  // Add animation classes to elements coming into view
  const elements = document.querySelectorAll('.service-card, .package-card, .gallery-item, .value-item');
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isVisible && !element.classList.contains('fade-in')) {
      element.classList.add('fade-in');
    }
  });
}

// Testimonials Functions
function showTestimonial(index) {
  const slides = testimonialContainer.querySelectorAll('.testimonial-slide');
  const indicators = testimonialIndicators.querySelectorAll('.indicator');
  
  // Hide all slides
  slides.forEach(slide => slide.classList.remove('active'));
  indicators.forEach(indicator => indicator.classList.remove('active'));
  
  // Show current slide
  if (slides[index]) {
    slides[index].classList.add('active');
  }
  if (indicators[index]) {
    indicators[index].classList.add('active');
  }
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}

function prevTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
}

function startTestimonialAutoplay() {
  testimonialInterval = setInterval(nextTestimonial, 5000);
}

function stopTestimonialAutoplay() {
  if (testimonialInterval) {
    clearInterval(testimonialInterval);
  }
}

function initTestimonials() {
  if (!testimonialContainer) return;
  
  // Create testimonial slides
  testimonialContainer.innerHTML = '';
  testimonials.forEach((testimonial, index) => {
    const slide = document.createElement('div');
    slide.className = `testimonial-slide ${index === 0 ? 'active' : ''}`;
    slide.innerHTML = `
      <div class="testimonial-content">
        <div class="testimonial-stars">
          ${'★'.repeat(testimonial.rating)}
        </div>
        <blockquote class="testimonial-text">
          ${testimonial.text}
        </blockquote>
        <div class="testimonial-author">
          <div class="author-info">
            <h4 class="author-name">${testimonial.author}</h4>
            <p class="author-role">${testimonial.role}</p>
            ${testimonial.company ? `<p class="author-company">${testimonial.company}</p>` : ''}
          </div>
        </div>
        <div class="testimonial-category">${testimonial.category}</div>
      </div>
    `;
    testimonialContainer.appendChild(slide);
  });
  
  // Create indicators
  if (testimonialIndicators) {
    testimonialIndicators.innerHTML = '';
    testimonials.forEach((_, index) => {
      const indicator = document.createElement('span');
      indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
      indicator.addEventListener('click', () => {
        currentTestimonial = index;
        showTestimonial(index);
        stopTestimonialAutoplay();
        startTestimonialAutoplay();
      });
      testimonialIndicators.appendChild(indicator);
    });
  }
  
  // Start autoplay
  startTestimonialAutoplay();
}

// Gallery Functions
function filterGallery(category) {
  const items = galleryGrid.querySelectorAll('.gallery-item');
  
  items.forEach(item => {
    const itemCategory = item.dataset.category;
    const shouldShow = category === 'all' || itemCategory === category;
    
    if (shouldShow) {
      item.style.display = 'block';
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 100);
    } else {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      setTimeout(() => {
        item.style.display = 'none';
      }, 300);
    }
  });
}

function initGallery() {
  galleryFilters.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Update active filter
      galleryFilters.forEach(filter => filter.classList.remove('active'));
      e.target.classList.add('active');
      
      // Filter gallery
      const category = e.target.dataset.filter;
      filterGallery(category);
    });
  });
}

// Form Functions
function handleFormSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData.entries());
  
  // Basic validation
  if (!data.name || !data.email || !data.eventType || !data.guestCount) {
    showToast('Error', 'Please fill in all required fields.', 'error');
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    showToast('Error', 'Please enter a valid email address.', 'error');
    return;
  }
  
  // Guest count validation
  if (parseInt(data.guestCount) < 50) {
    showToast('Error', 'Minimum guest count is 50 for our catering services.', 'error');
    return;
  }
  
  // Simulate form submission
  const submitBtn = contactForm.querySelector('.submit-btn');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  
  setTimeout(() => {
    // Reset form
    contactForm.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
    
    // Show success message
    showToast(
      'Quote Request Sent!',
      'Thank you for your inquiry. We\'ll get back to you within 24 hours with a detailed quote.',
      'success'
    );
  }, 2000);
}

// Animation on Scroll
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-up');
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    '.service-card, .package-card, .value-item, .stat-card, .contact-card, .gallery-item'
  );
  
  animatedElements.forEach(el => {
    observer.observe(el);
  });
}

// Initialize smooth scrolling for anchor links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = this.getAttribute('href');
      scrollToSection(target);
    });
  });
  
  // Add click handlers for navigation links
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      scrollToSection(href);
    });
  });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
  // Initialize components
  initTestimonials();
  initGallery();
  initScrollAnimations();
  initSmoothScrolling();
  
  // Mobile menu toggle
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (mobileMenu && mobileMenu.classList.contains('active')) {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        toggleMobileMenu();
      }
    }
  });
  
  // Testimonial navigation
  if (testimonialPrev) {
    testimonialPrev.addEventListener('click', () => {
      prevTestimonial();
      stopTestimonialAutoplay();
      startTestimonialAutoplay();
    });
  }
  
  if (testimonialNext) {
    testimonialNext.addEventListener('click', () => {
      nextTestimonial();
      stopTestimonialAutoplay();
      startTestimonialAutoplay();
    });
  }
  
  // Contact form submission
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
  
  // Floating CTA
  if (floatingCTA) {
    floatingCTA.addEventListener('click', () => scrollToSection('#contact'));
  }
  
  // Scroll handling
  const debouncedScroll = debounce(handleScroll, 10);
  window.addEventListener('scroll', debouncedScroll);
  
  // Initial scroll check
  handleScroll();
  
  // Pause testimonial autoplay on hover
  if (testimonialContainer) {
    testimonialContainer.addEventListener('mouseenter', stopTestimonialAutoplay);
    testimonialContainer.addEventListener('mouseleave', startTestimonialAutoplay);
  }
  
  // Handle window resize
  window.addEventListener('resize', debounce(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth >= 768 && mobileMenu && mobileMenu.classList.contains('active')) {
      toggleMobileMenu();
    }
  }, 250));
});

// Handle page visibility change (pause animations when tab is not active)
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    stopTestimonialAutoplay();
  } else {
    startTestimonialAutoplay();
  }
});

// Make scrollToSection available globally
window.scrollToSection = scrollToSection;