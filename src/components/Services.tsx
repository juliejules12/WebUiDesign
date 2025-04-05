
import React from 'react';
import AnimatedCard from './AnimatedCard';
import { BrainCircuit, BarChart3, MessageSquareText, Lightbulb, Mail, Calendar, FileText, Search, PenTool, Globe, Monitor, Database } from 'lucide-react';

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
      title: "Email Management",
      description: "Professional inbox organization, response drafting, and priority management to keep communications flowing smoothly."
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Calendar Management",
      description: "Expert scheduling, meeting coordination, and time optimization to maximize your productivity."
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Document Preparation",
      description: "Creation and formatting of professional documents, presentations, and reports with attention to detail."
    },
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Research Services",
      description: "In-depth research, data compilation, and analysis to support your decision-making processes."
    },
    {
      icon: <PenTool className="h-10 w-10 text-primary" />,
      title: "Content Creation",
      description: "Engaging content development for blogs, social media, and marketing materials powered by AI insights."
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Social Media Management",
      description: "Strategic posting, engagement monitoring, and audience growth across multiple platforms."
    },
    {
      icon: <Monitor className="h-10 w-10 text-primary" />,
      title: "AI-Powered Automation",
      description: "Workflow automation solutions using AI to streamline repetitive tasks and improve efficiency."
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Data Management",
      description: "Comprehensive data organization, cleaning, and maintenance to ensure accuracy and accessibility."
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedCard 
              key={index} 
              className="p-6 h-full"
              glowOnHover={true}
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-5 rounded-full bg-primary/10 p-4 animate-pulse-glow">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
