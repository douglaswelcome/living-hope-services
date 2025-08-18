# Living Hope Services - Component Structure

This project has been refactored to use a modular component architecture with SCSS modules for styling.

## Component Structure

```
src/
├── components/
│   ├── index.ts                    # Main export file for all components
│   ├── Navigation/
│   │   ├── Navigation.tsx          # Navigation component
│   │   └── Navigation.module.scss  # Navigation styles
│   ├── HeroSection/
│   │   ├── HeroSection.tsx         # Hero section component
│   │   └── HeroSection.module.scss # Hero section styles
│   ├── ServicesPreview/
│   │   ├── ServicesPreview.tsx     # Services preview component
│   │   └── ServicesPreview.module.scss # Services preview styles
│   ├── CallToAction/
│   │   ├── CallToAction.tsx        # Call to action component
│   │   └── CallToAction.module.scss # Call to action styles
│   └── Footer/
│       ├── Footer.tsx              # Footer component
│       └── Footer.module.scss      # Footer styles
```

## Available Components

### Navigation
- **File**: `src/components/Navigation/Navigation.tsx`
- **Purpose**: Main navigation bar with links to different pages
- **Features**: 
  - Sticky positioning
  - Hover animations
  - Responsive design
  - Smooth transitions

### HeroSection
- **File**: `src/components/HeroSection/HeroSection.tsx`
- **Purpose**: Main hero section with call-to-action buttons
- **Features**:
  - Animated text entrance
  - Gradient background
  - Interactive buttons with hover effects
  - Responsive typography

### ServicesPreview
- **File**: `src/components/ServicesPreview/ServicesPreview.tsx`
- **Purpose**: Displays service cards with icons and descriptions
- **Features**:
  - Configurable service data
  - Hover animations on cards
  - Icon animations
  - Responsive grid layout

### CallToAction
- **File**: `src/components/CallToAction/CallToAction.tsx`
- **Purpose**: Call-to-action section with contact button
- **Features**:
  - Animated background
  - Pulsing effect
  - Interactive button with hover effects

### Footer
- **File**: `src/components/Footer/Footer.tsx`
- **Purpose**: Site footer with contact information and links
- **Features**:
  - Dynamic year display
  - Hover effects on links
  - Responsive grid layout
  - Gradient background

## Usage

### Importing Components

```tsx
// Import individual components
import Navigation from '../components/Navigation/Navigation';
import HeroSection from '../components/HeroSection/HeroSection';

// Or import all components from the index file
import { 
  Navigation, 
  HeroSection, 
  ServicesPreview, 
  CallToAction, 
  Footer 
} from '../components';
```

### Using Components

```tsx
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesPreview />
      <CallToAction />
      <Footer />
    </div>
  );
}
```

## SCSS Modules

Each component has its own `.module.scss` file that provides:
- Scoped styling (no CSS conflicts)
- Advanced SCSS features (variables, mixins, nesting)
- Custom animations and transitions
- Responsive design utilities

### SCSS Features Used

- **Variables**: Color schemes, spacing, typography
- **Nesting**: Organized and readable styles
- **Mixins**: Reusable style patterns
- **Animations**: Smooth transitions and keyframes
- **Pseudo-elements**: Decorative elements and hover effects
- **Gradients**: Modern visual effects

## Customization

### Modifying Styles
To customize component styles, edit the corresponding `.module.scss` file:

```scss
// Example: Customizing Navigation styles
.navigation {
  // Your custom styles here
  background: linear-gradient(45deg, #your-color, #another-color);
}
```

### Adding New Components
1. Create a new folder in `src/components/`
2. Add your component file (e.g., `MyComponent.tsx`)
3. Add your SCSS module file (e.g., `MyComponent.module.scss`)
4. Export from `src/components/index.ts`
5. Import and use in your pages

## Dependencies

- **sass**: For SCSS processing
- **next**: For the framework
- **react**: For the UI library
- **tailwindcss**: For utility classes (used alongside SCSS modules)

## Build Process

The project uses Next.js with built-in SCSS support. No additional configuration is needed for SCSS modules to work.

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start
``` 