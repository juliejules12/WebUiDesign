
import React from 'react';
import { ArrowDownCircle, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background with particles/gradient effect */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_45%)]"></div>

      {/* Animated background circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-float opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-float opacity-20" style={{ animationDelay: '-2s' }}></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadein opacity-0" style={{ animationDelay: '0.2s' }}>
            Hi, I'm <span className="gradient-text">Juliet Ayesa</span> – <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Virtual Assistant & AI Evaluator
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fadein opacity-0" style={{ animationDelay: '0.4s' }}>
            I harness AI techniques, machine learning, and seamless virtual assistant 
            solutions to streamline workflows and boost productivity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadein opacity-0" style={{ animationDelay: '0.6s' }}>
            <a href="#contact" className="button-primary group">
              Get Started
              <ArrowDownCircle className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#" className="button-outline group">
              Download Resume
              <FileText className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDownCircle className="h-10 w-10" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
