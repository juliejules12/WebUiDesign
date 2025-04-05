
import React, { useEffect, useRef, useState } from 'react';

interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={barRef} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-foreground font-medium">{skill}</span>
        <span className="text-foreground font-medium">{percentage}%</span>
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out rounded-full ${isVisible ? '' : 'w-0'}`}
          style={{ 
            width: isVisible ? `${percentage}%` : '0%',
            '--progress-width': `${percentage}%` 
          } as React.CSSProperties}
        />
      </div>
    </div>
  );
};

export default SkillBar;
