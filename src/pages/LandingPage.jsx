import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Code2,
  Zap,
  Shield,
  BarChart3,
  Lock,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Menu,
  X,
  Star,
  Sparkles,
  Gauge,
  Globe2,
  Moon,
  Sun
} from 'lucide-react';
import LogoLight from '../assets/logo-light.svg';
import LogoDark from '../assets/logo-dark.svg';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { 
  heroData, 
  aboutData, 
  servicesData, 
  featuresData, 
  teamData, 
  testimonialsData,
  contactData 
} from '../mockData';

export const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const serviceIcons = [Cloud, Code2, Sparkles, BarChart3, Lock, Gauge];
  const featureIcons = [Zap, Code2, Shield, Globe2, Lock, Cloud];

  return (
    <div className="modern-landing">
      {/* Header */}
      <header className={`modern-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container-modern">
          <div className="header-inner">
            <div className="logo-modern">
              <img src={isDarkMode ? LogoDark : LogoLight} alt="Futenix Logo" className="logo-svg" />
            </div>
            
            <nav className={`nav-modern ${isMenuOpen ? 'nav-open' : ''}`}>
              <button onClick={() => scrollToSection('home')} className="nav-item">Home</button>
              <button onClick={() => scrollToSection('about')} className="nav-item">About</button>
              <button onClick={() => scrollToSection('services')} className="nav-item">Services</button>
              <button onClick={() => scrollToSection('features')} className="nav-item">Features</button>
              <button onClick={() => scrollToSection('team')} className="nav-item">Team</button>
              <button onClick={() => scrollToSection('testimonials')} className="nav-item">Testimonials</button>
            </nav>

            <div className="header-actions">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="theme-toggle"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-modern-primary"
              >
                Contact Us
              </Button>
            </div>

            <button 
              className="mobile-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-modern">
        <div className="container-modern">
          <div className="hero-content-modern">
            <h1 className="hero-title-modern">{heroData.title}</h1>
            <p className="hero-subtitle-modern">{heroData.subtitle}</p>
            <p className="hero-description-modern">{heroData.description}</p>
            <div className="hero-actions">
              <Button 
                size="lg" 
                className="btn-hero-primary"
                onClick={() => scrollToSection('contact')}
              >
                {heroData.ctaText}
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-hero-secondary"
                onClick={() => scrollToSection('about')}
              >
                {heroData.secondaryCtaText}
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="trust-section">
            <p className="trust-text">Trusted by innovative teams worldwide</p>
            <div className="trust-logos">
              <div className="trust-logo">Stripe</div>
              <div className="trust-logo">Shopify</div>
              <div className="trust-logo">Notion</div>
              <div className="trust-logo">Linear</div>
              <div className="trust-logo">Vercel</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-modern">
        <div className="container-modern">
          <div className="section-header-modern">
            <h2 className="section-title-modern">{aboutData.title}</h2>
            <p className="section-description-modern">{aboutData.description}</p>
          </div>
          
          <div className="about-content-modern">
            <p className="about-text-modern">{aboutData.longDescription}</p>
          </div>

          <div className="stats-modern">
            {aboutData.stats.map((stat, index) => (
              <div key={index} className="stat-item-modern">
                <div className="stat-value-modern">{stat.value}</div>
                <div className="stat-label-modern">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-modern">
        <div className="container-modern">
          <div className="section-header-modern">
            <h2 className="section-title-modern">Our Platform</h2>
            <p className="section-description-modern">Everything you need to build, deploy, and scale modern applications</p>
          </div>
          
          <div className="services-grid-modern">
            {servicesData.map((service, index) => {
              const IconComponent = serviceIcons[index % serviceIcons.length];
              return (
                <Card key={service.id} className="service-card-modern">
                  <CardHeader>
                    <div className="service-icon-modern">
                      <IconComponent size={24} strokeWidth={1.5} />
                    </div>
                    <CardTitle className="service-title-modern">{service.title}</CardTitle>
                    <CardDescription className="service-desc-modern">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="service-list-modern">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="service-list-item-modern">
                          <CheckCircle2 size={16} strokeWidth={2} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-modern">
        <div className="container-modern">
          <div className="section-header-modern">
            <h2 className="section-title-modern">Why Futenix</h2>
            <p className="section-description-modern">Built for teams who demand excellence</p>
          </div>
          
          <div className="features-grid-modern">
            {featuresData.map((feature, index) => {
              const IconComponent = featureIcons[index % featureIcons.length];
              return (
                <div key={feature.id} className="feature-card-modern">
                  <div className="feature-icon-modern">
                    <IconComponent size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="feature-title-modern">{feature.title}</h3>
                  <p className="feature-desc-modern">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-modern">
        <div className="container-modern">
          <div className="section-header-modern">
            <h2 className="section-title-modern">Meet the Team</h2>
            <p className="section-description-modern">World-class talent building the future</p>
          </div>
          
          <div className="team-grid-modern">
            {teamData.map((member) => (
              <Card key={member.id} className="team-card-modern">
                <CardContent className="team-card-content-modern">
                  <div className="team-avatar-modern">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="team-name-modern">{member.name}</h3>
                  <Badge variant="secondary" className="team-badge-modern">{member.role}</Badge>
                  <p className="team-bio-modern">{member.bio}</p>
                  <div className="team-contact-modern">
                    <a href={`mailto:${member.email}`} className="team-contact-link">
                      <Mail size={16} />
                    </a>
                    <a href={`tel:${member.phone}`} className="team-contact-link">
                      <Phone size={16} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-modern">
        <div className="container-modern">
          <div className="section-header-modern">
            <h2 className="section-title-modern">Loved by Teams</h2>
            <p className="section-description-modern">See what our customers have to say</p>
          </div>
          
          <div className="testimonials-grid-modern">
            {testimonialsData.map((testimonial) => (
              <Card key={testimonial.id} className="testimonial-card-modern">
                <CardContent className="testimonial-content-modern">
                  <div className="testimonial-stars-modern">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="testimonial-text-modern">"{testimonial.testimonial}"</p>
                  <div className="testimonial-author-modern">
                    <div className="testimonial-avatar-modern">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="testimonial-name-modern">{testimonial.name}</div>
                      <div className="testimonial-role-modern">{testimonial.role} at {testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-modern">
        <div className="container-modern">
          <div className="section-header-modern">
            <h2 className="section-title-modern">{contactData.title}</h2>
            <p className="section-description-modern">{contactData.description}</p>
          </div>
          
          <div className="contact-grid-modern">
            <div className="contact-info-modern">
              <div className="contact-info-item-modern">
                <div className="contact-icon-modern">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="contact-label-modern">Address</div>
                  <div className="contact-value-modern">{contactData.address}</div>
                </div>
              </div>
              
              <div className="contact-info-item-modern">
                <div className="contact-icon-modern">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-label-modern">Email</div>
                  <div className="contact-value-modern">{contactData.email}</div>
                </div>
              </div>
              
              <div className="contact-info-item-modern">
                <div className="contact-icon-modern">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="contact-label-modern">Phone</div>
                  <div className="contact-value-modern">{contactData.phone}</div>
                </div>
              </div>

              <div className="social-modern">
                <a href={contactData.socialMedia.linkedin} className="social-link-modern" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
                <a href={contactData.socialMedia.twitter} className="social-link-modern" target="_blank" rel="noopener noreferrer">
                  <Twitter size={20} />
                </a>
                <a href={contactData.socialMedia.github} className="social-link-modern" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
              </div>
            </div>
            
            <Card className="contact-form-modern">
              <CardContent className="contact-form-content-modern">
                <form onSubmit={handleSubmit} className="form-modern">
                  <div className="form-field-modern">
                    <label htmlFor="name" className="form-label-modern">Full Name</label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input-modern"
                    />
                  </div>
                  
                  <div className="form-field-modern">
                    <label htmlFor="email" className="form-label-modern">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input-modern"
                    />
                  </div>
                  
                  <div className="form-field-modern">
                    <label htmlFor="company" className="form-label-modern">Company</label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="input-modern"
                    />
                  </div>
                  
                  <div className="form-field-modern">
                    <label htmlFor="message" className="form-label-modern">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="textarea-modern"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="btn-form-modern">
                    Send Message
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-modern">
        <div className="container-modern">
          <div className="footer-content-modern">
            <div className="footer-brand-modern">
              <img src={isDarkMode ? LogoDark : LogoLight} alt="Futenix Logo" className="footer-logo-svg" />
              <p className="footer-tagline-modern">Build faster. Scale smarter.</p>
            </div>
            
            <div className="footer-links-modern">
              <div className="footer-column-modern">
                <h4 className="footer-heading-modern">Company</h4>
                <button onClick={() => scrollToSection('about')} className="footer-link-modern">About</button>
                <button onClick={() => scrollToSection('team')} className="footer-link-modern">Team</button>
                <button onClick={() => scrollToSection('contact')} className="footer-link-modern">Contact</button>
              </div>
              
              <div className="footer-column-modern">
                <h4 className="footer-heading-modern">Platform</h4>
                <button onClick={() => scrollToSection('services')} className="footer-link-modern">Services</button>
                <button onClick={() => scrollToSection('features')} className="footer-link-modern">Features</button>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom-modern">
            <p>&copy; 2024 Futenix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
