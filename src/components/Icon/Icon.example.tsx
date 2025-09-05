import React from 'react';
import { Icon } from './Icon';
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt, 
  faHeart,
  faCheckCircle,
  faUsers,
  faHome
} from '@fortawesome/free-solid-svg-icons';

// Example usage of the Icon component
const IconExample = () => {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '1rem' }}>
      {/* Basic usage */}
      <Icon icon={faPhone} color="var(--color-bright-green)" />
      
      {/* With size */}
      <Icon icon={faEnvelope} color="var(--color-dark-green)" size="lg" />
      
      {/* With custom color */}
      <Icon icon={faMapMarkerAlt} color="#F29269" size="2x" />
      
      {/* With className for additional styling */}
      <Icon 
        icon={faHeart} 
        color="var(--color-orange)" 
        size="xl"
        className="hover-scale"
      />
      
      {/* Different sizes */}
      <Icon icon={faCheckCircle} color="var(--color-bright-green)" size="sm" />
      <Icon icon={faUsers} color="var(--color-teal)" size="3x" />
      <Icon icon={faHome} color="var(--color-dark-green)" size="2xl" />
    </div>
  );
};

export default IconExample;
