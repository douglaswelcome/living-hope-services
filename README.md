# Living Hope Services

A professional addiction recovery and rehabilitation services website built with Next.js, TypeScript, and SCSS modules.

## Features

- **Modern React Components**: Modular, reusable components with TypeScript
- **SCSS Modules**: Scoped styling with advanced SCSS features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: ARIA labels and semantic HTML
- **Performance**: Optimized with Next.js 15 and Turbopack

## Tech Stack

- **Framework**: Next.js 15.4.6
- **Language**: TypeScript
- **Styling**: SCSS Modules + Tailwind CSS v4
- **Build Tool**: Turbopack
- **Linting**: ESLint with Next.js config

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navigation/     # Navigation component
│   ├── HeroSection/    # Hero section component
│   ├── ServicesPreview/ # Services preview component
│   ├── CallToAction/   # Call to action component
│   └── Footer/         # Footer component
├── pages/              # Next.js pages
├── styles/             # Global styles and SCSS foundations
│   └── foundations/    # SCSS variables, mixins, and utilities
```

## Component Documentation

See [COMPONENTS.md](./COMPONENTS.md) for detailed component documentation and usage examples.

## SCSS Foundations

See [SCSS_CLEANUP.md](./SCSS_CLEANUP.md) for information about the SCSS foundation system.

## Deployment

This project can be deployed on Vercel, Netlify, or any other platform that supports Next.js.

For Vercel deployment, simply connect your repository and deploy automatically.
