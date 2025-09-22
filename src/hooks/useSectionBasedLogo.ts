import { useState, useEffect, useCallback } from 'react';

interface UseSectionBasedLogoOptions {
  debounceMs?: number; // Debounce scroll events, default 100ms
}

export const useSectionBasedLogo = (options: UseSectionBasedLogoOptions = {}) => {
  const { debounceMs = 100 } = options;
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  // Throttle function to limit how often we check background
  const throttle = useCallback(<T extends (...args: never[]) => void>(func: T, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    let lastExecTime = 0;
    return function (...args: Parameters<T>) {
      const currentTime = Date.now();
      
      if (currentTime - lastExecTime > delay) {
        func(...args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func(...args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  }, []);

  // Check what content is behind the logo position
  const checkBackgroundContent = useCallback(() => {
    try {
      const nav = document.querySelector('[data-nav="main"]');
      if (!nav) return;

      const navRect = nav.getBoundingClientRect();
      
      // Sample point is roughly where the logo center would be
      const sampleX = navRect.left + (navRect.width * 0.15);
      const sampleY = navRect.top + (navRect.height / 2);

      // Get all elements at this point
      const elements = document.elementsFromPoint(sampleX, sampleY);
      
      // Check for dark content
      let isDarkContent = false;
      
      for (const element of elements) {
        if (element === nav) continue; // Skip the nav itself
        
        // Check for specific dark elements
        if (element.classList.contains('gradientBackground') || 
            element.closest('.gradientBackground')) {
          isDarkContent = true;
          break;
        }
        
        // Check for dark background images (cards with images)
        if (element.classList.contains('imageContainer') || 
            element.closest('.imageContainer') ||
            element.classList.contains('cardImage') ||
            element.closest('.cardImage')) {
          // For images, we'll assume they might be dark and use white logo
          isDarkContent = true;
          break;
        }
        
        // Check computed background color
        const computedStyle = window.getComputedStyle(element);
        const backgroundColor = computedStyle.backgroundColor;
        
        // If we found a dark background color
        if (backgroundColor && backgroundColor !== 'rgba(0, 0, 0, 0)' && backgroundColor !== 'transparent') {
          // Parse RGB values to check if it's dark
          const rgbMatch = backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          if (rgbMatch) {
            const [, r, g, b] = rgbMatch.map(Number);
            const brightness = (r * 299 + g * 587 + b * 114) / 1000; // Relative luminance
            
            if (brightness < 128) { // Dark threshold
              isDarkContent = true;
              break;
            }
          }
        }
        
        // Check for background images that might be dark
        const backgroundImage = computedStyle.backgroundImage;
        if (backgroundImage && backgroundImage !== 'none') {
          // For background images, assume they might be dark
          isDarkContent = true;
          break;
        }
      }
      
      setIsDarkBackground(isDarkContent);
    } catch (error) {
      console.warn('Error checking background content:', error);
      setIsDarkBackground(false);
    }
  }, []);

  // Throttled version of checkBackgroundContent
  const throttledCheckBackground = useCallback(() => {
    return throttle(checkBackgroundContent, debounceMs)();
  }, [checkBackgroundContent, throttle, debounceMs]);

  useEffect(() => {
    // Initial check
    checkBackgroundContent();

    // Add scroll and resize listeners
    window.addEventListener('scroll', throttledCheckBackground, { passive: true });
    window.addEventListener('resize', throttledCheckBackground, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', throttledCheckBackground);
      window.removeEventListener('resize', throttledCheckBackground);
    };
  }, [checkBackgroundContent, throttledCheckBackground]);

  return {
    isDarkBackground,
    logoColor: isDarkBackground ? 'white' : 'var(--color-green)'
  };
};
