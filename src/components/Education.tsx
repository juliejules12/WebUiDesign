
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const Education = () => {
  const educationData = [
    {
      id: 1,
      school: "Riara University",
      degree: "Bachelor's Degree",
      year: "2019 - 2023",
      description: "Completed a comprehensive curriculum focused on information technology and business management. Participated in various research initiatives and technology projects, developing strong foundations in machine learning and data analysis."
    },
    {
      id: 2,
      school: "Sama School",
      degree: "AI & Data Science Training",
      year: "2023",
      description: "Intensive training program covering a wide range of AI technologies, machine learning algorithms, and data science methodologies. Gained hands-on experience with real-world AI evaluation projects and data analysis techniques."
    },
    {
      id: 3,
      school: "ALX Africa",
      degree: "Virtual Assistant Certification",
      year: "2024",
      description: "Specialized certification program focusing on virtual assistant skills including advanced calendar management, email organization, digital communication, project coordination, and AI-powered productivity tools."
    },
    {
      id: 4,
      school: "ALX Africa",
      degree: "Artificial Intelligence Career Essentials",
      year: "2024",
      description: "Comprehensive curriculum covering essential AI technologies for career advancement, including natural language processing, machine learning frameworks, AI ethics, and practical applications in business contexts."
    }
  ];

  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

  const toggleItem = (id: number) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="education" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Education</h2>
          <p className="section-subtitle mx-auto">
            My academic journey and professional certifications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map(edu => (
            <AnimatedCard 
              key={edu.id} 
              className="overflow-hidden h-full"
              glowOnHover={true}
              tiltEffect={true}
            >
              <Collapsible
                open={openItems[edu.id]}
                onOpenChange={() => toggleItem(edu.id)}
                className="w-full"
              >
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="rounded-full bg-primary/10 p-3 mr-4">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{edu.school}</h3>
                      <p className="text-sm text-muted-foreground">{edu.degree}</p>
                      <p className="text-sm font-medium text-primary">{edu.year}</p>
                    </div>
                  </div>
                  
                  <CollapsibleContent className="text-muted-foreground mb-4">
                    <p>{edu.description}</p>
                  </CollapsibleContent>
                  
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-center mt-2 text-primary hover:text-primary/80 transition-colors">
                      <span className="mr-1 text-sm font-medium">
                        {openItems[edu.id] ? 'Show Less' : 'View More'}
                      </span>
                      {openItems[edu.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </CollapsibleTrigger>
                </div>
              </Collapsible>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
