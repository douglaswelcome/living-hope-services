import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  icon: IconDefinition;
  color?: string;
  size?: SizeProp;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ 
  icon, 
  color = 'currentColor', 
  size = '1x',
  className = ''
}) => {
  return (
    <FontAwesomeIcon 
      icon={icon} 
      color={color}
      size={size}
      className={className}
    />
  );
};

export default Icon;
