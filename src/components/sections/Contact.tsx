'use client';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'sugimotoshoujin@gmail.com',
      href: 'mailto:sugimotoshoujin@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '8823 7826',
      href: 'tel:88237826'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/shoujinsugimoto',
      href: 'https://linkedin.com/in/shoujinsugimoto'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Singapore',
      href: null
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact
          </h2>
          <div className="w-24 h-1 bg-accent-primary mx-auto mb-6"></div>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Let's discuss opportunities and collaborations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="h-full">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Let's Connect
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-background-secondary rounded-xl p-6 border border-border hover:border-accent-primary/50 transition-all duration-300 text-center group">
                  <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-accent-primary/20 transition-colors">
                    <span className="text-lg">{info.icon}</span>
                  </div>
                  <div className="text-xs text-accent-primary font-semibold mb-2">{info.label}</div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-foreground hover:text-accent-primary transition-colors font-medium text-sm"
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-foreground font-medium text-sm">{info.value}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Status */}
            <div className="bg-accent-primary/10 rounded-lg border border-accent-primary/20 p-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-foreground font-medium">Available for opportunities starting December 2025</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background-secondary rounded-xl p-8 border border-border h-full">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send a Message
            </h3>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground-secondary focus:outline-none focus:border-accent-primary transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground-secondary focus:outline-none focus:border-accent-primary transition-colors"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground-secondary focus:outline-none focus:border-accent-primary transition-colors"
                    placeholder="What would you like to discuss?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground-secondary focus:outline-none focus:border-accent-primary transition-colors resize-vertical"
                    placeholder="Tell me about the opportunity or what you'd like to discuss..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-primary text-foreground font-semibold py-3 px-6 rounded-lg hover:bg-accent-secondary transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✓</div>
                <h4 className="text-xl font-bold text-accent-primary mb-2">Message Sent!</h4>
                <p className="text-foreground-secondary">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;