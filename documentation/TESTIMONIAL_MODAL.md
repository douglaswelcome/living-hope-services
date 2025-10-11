# Testimonial Component with Full-Screen Modal

## Overview
The Testimonial component now features a "Read More" functionality that opens a full-screen modal to display extended testimonial stories. The modal is built as a reusable component that can be used throughout the application for other use cases.

## Components Created/Updated

### 1. FullScreenModal Component
**Location:** `src/components/FullScreenModal/`

A reusable full-screen modal component with the following features:
- **Full-screen overlay** with blur backdrop effect
- **Escape key support** to close the modal
- **Body scroll locking** when modal is open
- **Click outside to close** functionality
- **Smooth animations** (fade in overlay, slide up content)
- **Responsive design** that works on all screen sizes
- **Custom scrollbar styling** for better UX
- **Sticky close button** that stays visible while scrolling

#### Usage Example:
```tsx
import FullScreenModal from './FullScreenModal/FullScreenModal';

const [isOpen, setIsOpen] = useState(false);

<FullScreenModal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
>
  {/* Your custom content here */}
</FullScreenModal>
```

### 2. Updated Testimonial Component
**Location:** `src/components/Testimonial/`

Enhanced features:
- **Read More button** appears only if testimonial has a `fullStory` property
- **Modal integration** to display full testimonial stories
- **Beautiful modal header** with larger headshot and person's details
- **Styled story paragraphs** with drop cap on first letter
- **Responsive layout** that adapts to all screen sizes

### 3. Updated Testimonials Data
**Location:** `src/data/testimonials.json`

Each testimonial now includes:
- `quote` - Short quote for card display
- `emphasizedWord` - Word to highlight in the quote
- `name` - Person's name
- `recoveryTime` - Duration in recovery
- `headshotSrc` - Path to profile image
- `headshotAlt` - Alt text for image
- `fullStory` - Array of paragraphs for the full testimonial story (optional)

## Features

### Testimonial Card View
- Clean card design with profile photo
- Highlighted emphasized word in Dancing Script font
- "Read Full Story" button appears when `fullStory` is available
- Maintains existing styling and layout

### Full-Screen Modal View
- Large profile photo in header (100px)
- Name and recovery time prominently displayed
- Drop cap styling on first letter of first paragraph
- Easy-to-read typography with proper spacing
- Close button with hover effects
- Escape key and click-outside-to-close functionality

## Styling Highlights

### Modal Features:
- Dark overlay with blur effect (85% opacity + 8px blur)
- White content area with rounded corners
- Smooth fade-in and slide-up animations
- Maximum width of 900px for optimal reading
- Responsive padding that adjusts for mobile devices
- Custom scrollbar that matches brand colors

### Typography:
- Modal title: Montserrat Bold, 2rem
- Story text: Oxygen, 1.125rem with 1.8 line height
- Drop cap: 3.5rem, brand green color
- Professional spacing between paragraphs (1.5rem)

## Usage in Application

The Testimonial component is currently used on the home page:

```tsx
<Testimonial id={1} />
```

You can add multiple testimonials and reference them by ID:

```tsx
<Testimonial id={1} />
<Testimonial id={2} />
<Testimonial id={3} />
```

## Future Use Cases for FullScreenModal

The FullScreenModal component can be reused for:
- Photo galleries
- Video players
- Extended content displays
- Terms and conditions
- Privacy policies
- Event details
- Success stories
- Any other full-screen content needs

## Accessibility Features

- **Keyboard navigation**: Escape key closes the modal
- **Focus management**: Modal traps focus when open
- **ARIA labels**: Close button has proper aria-label
- **Body scroll locking**: Prevents background scrolling
- **Click propagation**: Properly handled to prevent unwanted closes

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive breakpoints: desktop, tablet, mobile
- Fallback styles for older browsers

## Notes

- Modal uses `position: fixed` and `z-index: 9999` to ensure it appears above all content
- Body scroll is disabled when modal is open to prevent double scrollbars
- All animations are CSS-based for smooth performance
- Component is fully typed with TypeScript for type safety


