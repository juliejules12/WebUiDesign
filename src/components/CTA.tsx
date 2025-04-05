
import React from 'react';

const CTA = () => {
  return (
    <section className="py-16 px-6 bg-cta-gradient text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Collaborate – Contact Me Today</h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
          Ready to elevate your projects with AI and virtual assistant expertise? 
          I'm excited to hear about your goals and discuss how we can work together.
        </p>
        <a 
          href="#contact" 
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium 
          transition-colors bg-white text-primary h-11 px-8 py-2
          hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 
          focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default CTA;
