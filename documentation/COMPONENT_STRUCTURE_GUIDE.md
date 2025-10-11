# Component Structure & Typography Guide

## Overview
This guide establishes the standard structure for components and typography usage to ensure consistency across the Living Hope Services website.

## Component Structure Standards

### Required Component Structure
Every component should follow this exact structure:

```tsx
const ComponentName: React.FC<ComponentProps> = ({ props }) => {
  return (
    <div className={`${styles.componentWrapper} mainBody`}>
      <div className={`${styles.component} ${className}`}>
        <div className={styles.componentCard}>
          {/* Component content goes here */}
        </div>
      </div>
    </div>
  );
};
```

### SCSS Structure Requirements

```scss
.componentWrapper {
  padding: 4rem 0; // 64px top and bottom spacing from other components
  
  @include breakpoint(w-med) {
    padding: 3rem 0; // 48px on medium screens
  }
  
  @include breakpoint(w-sm) {
    padding: 2.5rem 0; // 40px on small screens
  }
}

.component {
  @extend %grid-12; // Grid container - DO NOT add any other styles here
}

.componentCard {
  grid-column: 1 / span 12; // Full 12 columns
  // All card styling goes here (background, padding, border-radius, etc.)
}
```

### Layer Breakdown

#### 1. **componentWrapper** (Outer Container)
- **Purpose**: Handles spacing between components
- **Classes**: `mainBody` (for flex layout)
- **Styling**: Only padding for component spacing
- **Responsive**: Scales padding appropriately for different screen sizes

#### 2. **component** (Grid Container)
- **Purpose**: Grid system container
- **Classes**: `@extend %grid-12`
- **Styling**: **ONLY** the grid extension - no other styles
- **Responsive**: Grid system handles responsive behavior

#### 3. **componentCard** (Card Component)
- **Purpose**: Visual card container
- **Classes**: Grid positioning (`grid-column: 1 / span 12`)
- **Styling**: All visual styling (background, padding, border-radius, box-shadow, etc.)
- **Responsive**: Card-specific responsive adjustments

### Why This Structure?

1. **Separation of Concerns**: Each layer has a specific responsibility
2. **Flexibility**: mainBody can handle page-level layout while grid handles component layout
3. **Consistency**: All components follow the same pattern
4. **Maintainability**: Easy to update spacing or styling across all components

## Typography Standards

### Global Typography Classes
**ALWAYS** use the predefined typography classes from `_typography.scss`. **NEVER** create custom font styling.

### Available Typography Classes

#### Headlines (Montserrat Font)
```scss
// Display styles
.display1        // 6.5rem, weight 200
.display2        // 5rem, weight 700

// Standard headings
h1               // 4rem, weight 700, responsive
h2               // 2rem, weight 200, responsive  
h3               // 1.5rem, weight 700, uppercase
h4               // 1.25rem, weight 200
h5               // 1rem, weight 600, uppercase
h6               // 0.875rem, weight 200

// Headline utility classes
.headline-xl     // 4rem, weight 700, responsive
.headline-lg     // 3rem, weight 700, responsive
.headline-md     // 2.25rem, weight 700, responsive
.headline-sm     // 1.75rem, weight 700, responsive
.headline-xl-thin // 4rem, weight 300, responsive
.headline-lg-thin // 3rem, weight 300, responsive

// Headline modifiers
.headline-thin           // weight 300
.headline-bold           // weight 700
.headline-thin-italic    // weight 300, italic
.headline-bold-italic    // weight 700, italic
```

#### Body Text (Oxygen Font)
```scss
// Base body styles
.body-text              // weight 300
.body-text-bold         // weight 700
.body-text-italic       // weight 300, italic
.body-text-bold-italic  // weight 700, italic

// Body text sizes
.body-lg        // 1.125rem, line-height 1.7
.body-md        // 1rem, line-height 1.6
.body-sm        // 0.875rem, line-height 1.5

// Body text with weight
.body-lg-bold   // 1.125rem, weight 700, line-height 1.7
.body-md-bold   // 1rem, weight 700, line-height 1.6
.body-sm-bold   // 0.875rem, weight 700, line-height 1.5
```

#### Special Classes
```scss
.emphasis       // Playfair font, weight 600, italic, orange color
.label_text     // Special label styling
```

### Typography Usage Rules

#### ✅ DO:
```scss
// Use predefined classes
.title {
  @extend h2; // Use existing heading styles
}

.description {
  @extend .body-lg; // Use existing body text styles
}

// Use global emphasis class
<span className="emphasis">Important Text</span>
```

#### ❌ DON'T:
```scss
// Don't create custom font styling
.title {
  font-family: var(--font-montserrat);
  font-size: 2rem;
  font-weight: 700;
  // ... other custom properties
}

// Don't create custom emphasis styling
.emphasizedWord {
  font-family: var(--font-dancing-script);
  color: var(--color-orange);
  // ... custom styling
}
```

### CSS Modules with Typography

**Important**: When using typography classes in CSS modules, you **CANNOT** use `@extend` with global classes due to CSS modules limitations.

#### Solution: Copy Typography Properties
```scss
// Instead of @extend .body-lg (which won't work in CSS modules)
.description {
  font-family: var(--font-oxygen);
  font-weight: 300;
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--color-green-gray);
}
```

#### Reference the Typography File
Always copy the exact properties from `_typography.scss` to maintain consistency:

```scss
// From _typography.scss line 334-338:
.body-lg {
  @extend .body-text;
  font-size: 1.125rem;
  line-height: 1.7;
}
```

## Component Creation Checklist

When creating a new component, follow this checklist:

### 1. Structure Setup
- [ ] Create componentWrapper with mainBody class
- [ ] Create component with @extend %grid-12
- [ ] Create componentCard with grid-column: 1 / span 12
- [ ] Add appropriate padding to componentWrapper (4rem 0 default)

### 2. Typography Implementation
- [ ] Identify which typography classes are needed
- [ ] Copy exact properties from _typography.scss (don't use @extend in CSS modules)
- [ ] Use .emphasis class for highlighted text (not custom styling)
- [ ] Test responsive behavior matches typography system

### 3. Styling Guidelines
- [ ] All visual styling goes in componentCard
- [ ] component layer only has @extend %grid-12
- [ ] componentWrapper only has spacing/padding
- [ ] Use CSS custom properties for colors (--color-*)

### 4. Responsive Design
- [ ] Add breakpoint adjustments for componentWrapper padding
- [ ] Add breakpoint adjustments for componentCard if needed
- [ ] Ensure typography responsive behavior is preserved

## Example: Complete Component

### TypeScript
```tsx
import React from "react";
import styles from "./ExampleComponent.module.scss";

interface ExampleComponentProps {
  title: string;
  description: string;
  className?: string;
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({ 
  title, 
  description, 
  className = "" 
}) => {
  return (
    <div className={`${styles.exampleWrapper} mainBody`}>
      <div className={`${styles.example} ${className}`}>
        <div className={styles.exampleCard}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <span className="emphasis">Highlighted Text</span>
        </div>
      </div>
    </div>
  );
};

export default ExampleComponent;
```

### SCSS
```scss
@use "../../styles/foundations/response_mixins" as *;

.exampleWrapper {
  padding: 4rem 0; // 64px top and bottom spacing
  
  @include breakpoint(w-med) {
    padding: 3rem 0; // 48px on medium screens
  }
  
  @include breakpoint(w-sm) {
    padding: 2.5rem 0; // 40px on small screens
  }
}

.example {
  @extend %grid-12; // Grid container only
}

.exampleCard {
  grid-column: 1 / span 12; // Full 12 columns
  padding: 3rem 2rem;
  background: var(--color-off-white);
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  
  @include breakpoint(w-med) {
    padding: 2.5rem 1.5rem;
  }
  
  @include breakpoint(w-sm) {
    padding: 2rem 1rem;
  }
}

.title {
  // Copy exact properties from h2 in _typography.scss
  font-family: var(--font-montserrat);
  font-size: 2rem;
  font-weight: 200;
  line-height: 1.25;
  color: var(--color-dark-green);
  margin: 0 0 1rem 0;
  
  @include breakpoint(w-med) {
    font-size: calc(0.8rem + 2vw);
  }
}

.description {
  // Copy exact properties from .body-lg in _typography.scss
  font-family: var(--font-oxygen);
  font-weight: 300;
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--color-green-gray);
  margin: 0;
}
```

## Maintenance Notes

- **Typography Updates**: When updating typography in `_typography.scss`, ensure all components using those styles are updated accordingly
- **Spacing Updates**: Component spacing can be updated globally by modifying the componentWrapper padding
- **Grid System**: The `%grid-12` extension handles all responsive grid behavior
- **Color System**: Always use CSS custom properties for colors to maintain brand consistency

## Quick Reference

### Component Structure Template
```tsx
<div className={`${styles.componentWrapper} mainBody`}>
  <div className={`${styles.component} ${className}`}>
    <div className={styles.componentCard}>
      {/* Content */}
    </div>
  </div>
</div>
```

### SCSS Template
```scss
.componentWrapper { padding: 4rem 0; /* responsive */ }
.component { @extend %grid-12; }
.componentCard { grid-column: 1 / span 12; /* + styling */ }
```

This guide ensures all components follow the same pattern and maintain design system consistency.

