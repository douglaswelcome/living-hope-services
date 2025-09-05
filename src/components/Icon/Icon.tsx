import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  icon: IconDefinition;
  color?: string;
  size?: 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x';
  className?: string;
  style?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = ({ 
  icon, 
  color = 'currentColor', 
  size = '1x',
  className = '',
  style = {}
}) => {
  return (
    <FontAwesomeIcon 
      icon={icon} 
      color={color}
      size={size}
      className={className}
      style={style}
    />
  );
};

export default Icon;
