
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const About = () => {
  const skills = [
    'AI Evaluation',
    'Data Analysis',
    'Natural Language Processing',
    'Python, R',
    'TensorFlow, Keras, PyTorch',
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              I'm passionate about leveraging AI and data analysis to solve complex problems
              and improve business efficiency.
            </p>
            
            <div className="mb-8">
              <p className="mb-4 text-muted-foreground">
                As an AI Evaluator and Virtual Assistant based in Nairobi, Kenya, I combine technical expertise
                with excellent organizational skills to deliver results that exceed expectations.
                My background in data science and machine learning allows me to approach problems
                with an analytical mindset, while my virtual assistant experience ensures seamless
                communication, project management, and administrative support.
              </p>
              
              <p className="text-muted-foreground">
                I offer comprehensive virtual assistant services including email management, calendar
                organization, research, document preparation, and social media maintenance - all powered
                by my expertise in AI tools and automation. I'm committed to ethical practices
                and data-driven solutions, constantly expanding my knowledge in both AI technology
                and professional virtual assistance.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-3 gradient-text">Expertise</h3>
              <ul className="space-y-2">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative flex justify-center">
            <div className="relative w-[80%] h-[500px] animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl -z-10 transform rotate-3 scale-105"></div>
              <AnimatedCard className="w-full h-full p-3">
                <div className="w-full h-full bg-[url('/about.jpg')] bg-cover bg-center rounded-lg"></div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
