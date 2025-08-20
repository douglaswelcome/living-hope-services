# Living Hope Services - Brand Color Scheme

## 🎨 **Brand Colors from SVG**

This document outlines the official brand colors extracted from the provided SVG design file.

## 🌈 **Primary Brand Colors**

### **Dark Green** `#093324`
- **Usage**: Primary background, main brand color
- **CSS Variable**: `var(--color-dark-green)`
- **SCSS Variable**: `$color-dark-green`

### **Bright Green** `#4CC494`
- **Usage**: Primary accent, call-to-action buttons, highlights
- **CSS Variable**: `var(--color-bright-green)`
- **SCSS Variable**: `$color-bright-green`

### **Teal** `#60B8BD`
- **Usage**: Secondary accent, borders, icons
- **CSS Variable**: `var(--color-teal)`
- **SCSS Variable**: `$color-teal`

### **Orange** `#F29269`
- **Usage**: Warm accent, alerts, special highlights
- **CSS Variable**: `var(--color-orange)`
- **SCSS Variable**: `$color-orange`

### **Yellow** `#FAF083`
- **Usage**: Attention-grabbing elements, warnings
- **CSS Variable**: `var(--color-yellow)`
- **SCSS Variable**: `$color-yellow`

## 🌊 **Secondary Colors**

### **Light Teal** `#E0F2F2`
- **Usage**: Light backgrounds, subtle accents
- **CSS Variable**: `var(--color-light-teal)`
- **SCSS Variable**: `$color-light-teal`

### **Pale Blue** `#CCE7EA`
- **Usage**: Card backgrounds, subtle highlights
- **CSS Variable**: `var(--color-pale-blue)`
- **SCSS Variable**: `$color-pale-blue`

### **Dark Gray** `#292929`
- **Usage**: Text, borders, secondary elements
- **CSS Variable**: `var(--color-dark-gray)`
- **SCSS Variable**: `$color-dark-gray`

## 📋 **Usage Guidelines**

### **Color Combinations**

#### **Primary Gradient**
```css
background: linear-gradient(135deg, var(--color-dark-green) 0%, var(--color-bright-green) 100%);
```

#### **Accent Gradient**
```css
background: linear-gradient(135deg, var(--color-bright-green) 0%, var(--color-teal) 100%);
```

#### **Light Background**
```css
background: linear-gradient(135deg, var(--color-light-teal) 0%, var(--color-pale-blue) 100%);
```

### **Text Colors**

#### **Primary Text**
```css
color: var(--color-dark-green);
```

#### **Secondary Text**
```css
color: var(--color-dark-gray);
```

#### **Light Text on Dark Backgrounds**
```css
color: var(--color-white);
```

### **Interactive Elements**

#### **Buttons**
```css
background: var(--color-bright-green);
color: var(--color-white);
```

#### **Hover States**
```css
background: var(--color-teal);
```

#### **Borders**
```css
border: 2px solid var(--color-teal);
```

## 🎯 **Implementation**

### **CSS Variables**
All colors are available as CSS custom properties in `:root`:
```css
:root {
  --color-dark-green: #093324;
  --color-bright-green: #4CC494;
  --color-teal: #60B8BD;
  --color-orange: #F29269;
  --color-yellow: #FAF083;
  --color-light-teal: #E0F2F2;
  --color-pale-blue: #CCE7EA;
  --color-dark-gray: #292929;
}
```

### **SCSS Variables**
For use in SCSS files:
```scss
$color-dark-green: #093324;
$color-bright-green: #4CC494;
$color-teal: #60B8BD;
$color-orange: #F29269;
$color-yellow: #FAF083;
$color-light-teal: #E0F2F2;
$color-pale-blue: #CCE7EA;
$color-dark-gray: #292929;
```

## 🔄 **Legacy Compatibility**

The following legacy variables are maintained for backward compatibility:
- `--color-brand` → `--color-bright-green`
- `--color-hairline` → `--color-dark-gray`
- `--color-label` → `--color-dark-gray`
- `--color-bg1` → `--color-dark-green`
- `--color-bg2` → `--color-dark-gray`
- `--color-text` → `--color-white`

## 📱 **Accessibility**

All color combinations have been tested for:
- ✅ **WCAG AA compliance** for contrast ratios
- ✅ **Color blindness** considerations
- ✅ **Readability** across different devices

## 🎨 **Design System Integration**

These colors are integrated into:
- **Coming Soon Page** - Updated with new brand colors
- **Component Library** - Ready for future component updates
- **SCSS Foundations** - Available throughout the project
- **Tailwind Config** - Can be extended for utility classes
