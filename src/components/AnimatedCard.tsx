
import React, { useState, ReactNode, CSSProperties } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
  tiltEffect?: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  className = '', 
  glowOnHover = false,
  tiltEffect = false 
}) => {
  const [style, setStyle] = useState<CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEffect) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.1s',
    });
  };

  const handleMouseLeave = () => {
    if (!tiltEffect) return;
    
    setStyle({
      transform: 'perspective(1000px) rotateX(0) rotateY(0)',
      transition: 'transform 0.5s',
    });
  };

  const baseClasses = 'bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg overflow-hidden transition-all duration-300';
  const hoverClasses = glowOnHover ? 'hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]' : 'hover:shadow-xl';
  const allClasses = `${baseClasses} ${hoverClasses} ${className}`;

  return (
    <div 
      className={allClasses}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
