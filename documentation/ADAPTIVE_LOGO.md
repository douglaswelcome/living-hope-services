# Adaptive Logo System

This document describes the adaptive logo system implemented for the Living Hope Services website. The system automatically switches the logo color between dark green and white based on the actual content behind the sticky navigation.

## How It Works

The adaptive logo system uses a combination of:

1. **Content-based Detection**: The system samples the actual content behind the logo position
2. **Element Analysis**: Detects dark elements like gradient backgrounds, images, and dark colors
3. **Scroll Detection**: Monitors scroll position to continuously check what's behind the logo
4. **Dynamic Logo Color**: The logo automatically switches between green and white based on the detected content

## Implementation Details

### Files Created/Modified

1. **`src/hooks/useSectionBasedLogo.ts`** - Custom hook that analyzes content behind the logo
2. **`src/components/Navigation/Navigation.tsx`** - Updated to use the adaptive logo hook
3. **`src/components/Navigation/Navigation.module.scss`** - Added CSS classes for logo variants

### Hook Usage

```typescript
import { useSectionBasedLogo } from "../../hooks/useSectionBasedLogo";

const Navigation = () => {
  const { logoColor, isDarkBackground } = useSectionBasedLogo();

  return (
    <nav>
      <Logo 
        variant="text" 
        className={`h-8 w-auto ${isDarkBackground ? 'logoWhite' : 'logoGreen'}`} 
        color={logoColor} 
      />
    </nav>
  );
};
```

### Content Detection

The system automatically detects dark content including:

- **Gradient Backgrounds**: Elements with `.gradientBackground` class
- **Card Images**: Elements with `.imageContainer` or `.cardImage` classes  
- **Dark Colors**: Elements with computed background colors below brightness threshold (128)
- **Background Images**: Elements with CSS background images

No manual marking is required - the system analyzes the actual rendered content.

## Configuration Options

The `useSectionBasedLogo` hook accepts optional configuration:

```typescript
const { logoColor, isDarkBackground } = useSectionBasedLogo({
  debounceMs: 100 // Throttle scroll events (default: 100ms)
});
```

## CSS Classes

The system uses two CSS classes for logo styling:

- `.logoGreen` - Dark green logo for light backgrounds
- `.logoWhite` - White logo for dark backgrounds

Both classes include smooth transitions and hover effects.

## Performance Considerations

- **Throttled Events**: Scroll and resize events are throttled to prevent excessive calculations
- **Efficient Detection**: Uses `getBoundingClientRect()` for precise section detection
- **Minimal DOM Queries**: Caches navigation element reference

## Browser Support

The system uses modern web APIs:
- `getBoundingClientRect()` - Supported in all modern browsers
- `querySelectorAll()` - Supported in all modern browsers
- CSS transitions - Supported in all modern browsers

## Customization

### Adding New Dark Content

The system automatically detects new dark content. For custom dark elements, ensure they have:

- Dark background colors (brightness < 128)
- CSS classes like `.gradientBackground`, `.imageContainer`, or `.cardImage`
- Background images (assumed to be potentially dark)

### Adjusting Detection Logic

You can modify the detection logic in `useSectionBasedLogo.ts`:

```typescript
// Current brightness threshold: 128 (0-255 scale)
if (brightness < 128) {
  isDarkContent = true;
  break;
}
```

### Custom Colors

You can customize the logo colors by modifying the CSS variables or the hook's return values:

```typescript
return {
  isDarkBackground,
  logoColor: isDarkBackground ? 'white' : 'var(--color-green)'
};
```

## Testing

To test the adaptive logo system:

1. Scroll through the page
2. Observe the logo color changes when the navigation overlaps different sections
3. The logo should be green on light backgrounds and white on dark backgrounds
4. Smooth transitions should occur between color changes

## Troubleshooting

### Logo Not Changing Color

1. Check that sections have proper `data-bg` attributes
2. Verify the navigation has the `data-nav="main"` attribute
3. Check browser console for any JavaScript errors

### Performance Issues

1. Increase the `debounceMs` value to reduce calculation frequency
2. Check if there are too many sections with data attributes
3. Monitor scroll event performance in browser dev tools

## Future Enhancements

Potential improvements to the system:

1. **Canvas-based Detection**: Sample actual pixel colors from background images
2. **Intersection Observer**: Use modern Intersection Observer API for better performance
3. **Background Image Detection**: Automatically detect dark/light background images
4. **Animation Options**: Add configurable transition animations
5. **Multiple Logo Variants**: Support for different logo styles beyond just color

## Related Documentation

- [Color Scheme Documentation](./COLOR_SCHEME.md)
- [Component Documentation](./COMPONENTS.md)
- [Navigation Component](./COMPONENTS.md#navigation)
