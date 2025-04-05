
import React from 'react';
import { Sparkles, Trophy, Lightbulb } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const WhyChooseMe = () => {
  const reasons = [
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Proven Expertise in AI & Data",
      description: "With extensive knowledge in AI evaluation and data analysis, I deliver solutions that leverage cutting-edge technology to drive results."
    },
    {
      icon: <Trophy className="h-10 w-10 text-primary" />,
      title: "Strong Leadership & Coordination",
      description: "I excel in managing projects and collaborating with stakeholders, ensuring smooth communication and efficient workflow."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Ethical Practices & Lifelong Learning",
      description: "I'm committed to ethical AI implementation and continuous learning, staying updated with the latest developments in the field."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Why Choose Me</h2>
          <p className="section-subtitle mx-auto">
            Here's what sets me apart and the values that drive my work
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <AnimatedCard 
              key={index} 
              className="p-8 h-full" 
              tiltEffect={true}
              glowOnHover={true}
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-6 rounded-full bg-primary/10 p-4 animate-pulse-glow">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
