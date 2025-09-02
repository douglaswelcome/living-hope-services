import React from "react";

interface LogoProps {
  variant?: 'icon' | 'text';
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'icon',
  className = "w-8 h-9", 
  width, 
  height, 
  color = "currentColor" 
}) => {
  if (variant === 'text') {
    return (
      <img 
        src="/logo-with-text.svg"
        alt="Living Hope Services Logo"
        className={className}
        style={{ 
          width: width ? `${width}px` : 'auto',
          height: height ? `${height}px` : 'auto',
          filter: color !== 'currentColor' ? `brightness(0) saturate(100%) invert(1) sepia(1) saturate(5) hue-rotate(${color === 'var(--color-bright-green)' ? '120deg' : color === 'var(--color-teal)' ? '180deg' : '0deg'})` : 'none'
        }}
      />
    );
  }

  return (
    <img 
      src="/logo-icon.svg"
      alt="Living Hope Services Icon"
      className={className}
      style={{ 
        width: width ? `${width}px` : 'auto',
        height: height ? `${height}px` : 'auto',
        filter: color !== 'currentColor' ? `brightness(0) saturate(100%) invert(1) sepia(1) saturate(5) hue-rotate(${color === 'var(--color-bright-green)' ? '120deg' : color === 'var(--color-teal)' ? '180deg' : '0deg'})` : 'none'
      }}
    />
  );
};

export default Logo;
