
import React from 'react';
import SkillBar from './SkillBar';

const Skills = () => {
  const itSkills = [
    { name: "Machine Learning Algorithms", percentage: 100 },
    { name: "Data Analysis", percentage: 95 },
    { name: "NLP", percentage: 90 },
    { name: "Python & R", percentage: 85 },
    { name: "Ethics in AI", percentage: 90 },
    { name: "TensorFlow & PyTorch", percentage: 88 },
    { name: "Data Visualization", percentage: 92 },
    { name: "API Integration", percentage: 85 }
  ];

  const vaSkills = [
    { name: "Virtual Assistant Services", percentage: 97 },
    { name: "Email Management", percentage: 98 },
    { name: "Calendar Organization", percentage: 95 },
    { name: "Document Preparation", percentage: 92 },
    { name: "Social Media Management", percentage: 88 },
    { name: "Client Communication", percentage: 96 },
    { name: "Project Coordination", percentage: 94 },
    { name: "Research Skills", percentage: 93 }
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">My Skills</h2>
          <p className="section-subtitle mx-auto">
            My expertise spans across various technologies and domains
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-6xl mx-auto">
          {/* IT Skills Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">AI & Technology Skills</h3>
            <div className="space-y-6">
              {itSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  skill={skill.name} 
                  percentage={skill.percentage} 
                />
              ))}
            </div>
          </div>
          
          {/* VA Skills Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">Virtual Assistant Skills</h3>
            <div className="space-y-6">
              {vaSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  skill={skill.name} 
                  percentage={skill.percentage} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
