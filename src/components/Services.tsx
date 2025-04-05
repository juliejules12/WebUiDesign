
import React from 'react';
import AnimatedCard from './AnimatedCard';
import { BrainCircuit, BarChart3, MessageSquareText, Lightbulb, Mail } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <BrainCircuit className="h-10 w-10 text-primary" />,
      title: "AI Model Development",
      description: "Custom AI solutions tailored to your specific business needs and challenges."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Data Analysis & Visualization",
      description: "Transform raw data into meaningful insights with advanced analytics and clear visualizations."
    },
    {
      icon: <MessageSquareText className="h-10 w-10 text-primary" />,
      title: "NLP Solutions",
      description: "Natural Language Processing applications for text analysis, sentiment detection, and chatbots."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Workshops & AI Training",
      description: "Educational sessions to help your team understand and leverage AI in their daily work."
    },
    {
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: "Virtual Assistant Services",
      description: "Comprehensive support including email management, calendar organization, and social media maintenance."
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Services</h2>
          <p className="section-subtitle mx-auto">
            Professional solutions to help you leverage AI and virtual assistance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedCard 
              key={index} 
              className="p-8 h-full"
              glowOnHover={true}
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-6 rounded-full bg-primary/10 p-4 animate-pulse-glow">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
