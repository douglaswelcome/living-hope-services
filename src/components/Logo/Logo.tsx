// Logo.tsx
import React from "react";
import LogoIcon from "./LogoIcon";
import LogoText from "./LogoText";
import LogoText2 from "./LogoText2";

interface LogoProps {
  variant?: 'icon' | 'text' | 'text2';
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
      <LogoText
        className={className}
        width={width}
        height={height}
        color={color}
      />
    );
  }
  
  if (variant === 'text2') {
    return (
      <LogoText2
        className={className}
        width={width}
        height={height}
        color={color}
      />
    );
  }
  
  return (
    <LogoIcon
      className={className}
      width={width}
      height={height}
      color={color}
    />
  );
};

export default Logo;
