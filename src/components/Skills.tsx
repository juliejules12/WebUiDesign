
import React from 'react';
import SkillBar from './SkillBar';

const Skills = () => {
  const skills = [
    { name: "Machine Learning Algorithms", percentage: 100 },
    { name: "Data Analysis", percentage: 95 },
    { name: "NLP", percentage: 90 },
    { name: "Python & R", percentage: 85 },
    { name: "Virtual Assistant Services", percentage: 97 },
    { name: "Ethics in AI", percentage: 90 }
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
        
        <div className="max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillBar 
              key={index} 
              skill={skill.name} 
              percentage={skill.percentage} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
