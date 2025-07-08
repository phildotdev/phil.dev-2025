# CLAUDE.md - Codebase Analysis for phil.dev-2025

## Overview
This is a personal portfolio website for Phil Lennon (frontendphil), a Frontend & UI Consultant based in Manchester, UK. The site is built with Astro and features a simple, clean design with an interactive audio component.

## Tech Stack

### Core Framework
- **Astro 5.1.3** - Modern static site generator with component-based architecture
- **Node.js** - Runtime environment (ES modules enabled)
- **TypeScript** - Type safety with strict configuration

### Styling & UI
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **@astrojs/tailwind 5.1.4** - Astro integration for Tailwind
- **Inter Variable Font** - Typography via @fontsource-variable/inter
- **Font Awesome** - Icons via @awesome.me/kit-066e6c267d

### Development Tools
- **TypeScript** - Strict configuration extending "astro/tsconfigs/strict"
- **Astro CLI** - Development server and build tools

## Available Scripts

All commands run from project root:

```bash
npm run dev      # Start development server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview production build locally
npm run astro    # Run Astro CLI commands
```

## Project Structure

```
phil.dev-2025/
├── public/                    # Static assets
│   ├── favicon.png           # Site favicon
│   └── frontendphil.mp3      # Audio file for profile component
├── src/                      # Source code
│   ├── assets/
│   │   └── images/
│   │       └── profile.jpg   # Profile image
│   ├── components/
│   │   └── profileAudio.astro # Interactive audio profile component
│   ├── layouts/
│   │   └── Layout.astro      # Main page layout
│   └── pages/
│       └── index.astro       # Homepage
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Key Components & Architecture

### Layout System
- **Layout.astro** - Main layout component with responsive container
- Uses semantic HTML5 structure
- Responsive design with mobile-first approach
- Includes Font Awesome integration

### Component Architecture
- **profileAudio.astro** - Complex interactive component featuring:
  - 3D CSS transforms for flip animation
  - Audio playback functionality
  - State management with vanilla JavaScript
  - Hover effects and visual feedback
  - Accessibility considerations noted in TODOs

### Styling Approach
- **Tailwind CSS** with utility classes
- Custom CSS for specific components (like gradient links)
- Responsive design patterns
- Motion-reduce preferences respected
- Custom 3D transforms and animations

## Development Patterns & Conventions

### File Organization
- Components in `/src/components/`
- Layouts in `/src/layouts/`
- Pages in `/src/pages/`
- Static assets in `/public/`
- Images in `/src/assets/images/`

### Naming Conventions
- Astro components use PascalCase with `.astro` extension
- JavaScript selectors use `js-` prefix for DOM elements
- CSS classes follow BEM-like patterns with utility-first approach

### TypeScript Configuration
- Strict mode enabled
- Astro types included
- Excludes `dist` directory from compilation

### Styling Conventions
- Tailwind utility classes preferred
- Custom CSS in `<style>` blocks when needed
- Responsive design with `md:` breakpoints
- Color scheme: slate/zinc palette with white backgrounds

## Key Features

### Interactive Profile Component
- 3D flip animation on hover
- Audio playback with visual feedback
- Multiple states: play, playing, played
- Animation locking during playback
- Icons change based on state

### Responsive Design
- Mobile-first approach
- Breakpoints at medium screen sizes
- Flexible typography scaling
- Responsive spacing and layout

## Technical Considerations

### Performance
- Astro's static generation for fast loading
- Lazy loading considerations for images
- Preload='none' for audio to avoid unnecessary requests

### Accessibility
- Semantic HTML structure
- Alt text for images
- ARIA considerations noted in TODOs
- Motion preferences respected

### Browser Compatibility
- Modern ES modules
- CSS Grid and Flexbox
- 3D transforms
- Audio API

## Dependencies Analysis

### Production Dependencies
- **@astrojs/tailwind** - Tailwind integration
- **@awesome.me/kit-066e6c267d** - Font Awesome icons
- **@fontsource-variable/inter** - Inter variable font
- **astro** - Core framework
- **tailwindcss** - CSS framework

### Development Workflow
- No test framework configured
- No linting tools configured
- Simple build process with Astro
- Git version control

## Development Notes

### TODOs Identified
1. Upgrade to Tailwind v4 for built-in 3D transforms
2. Improve accessibility (keyboard navigation, motion preferences)
3. Validate mobile functionality
4. Fix hover radius edge cases

### Git Configuration
- Standard .gitignore for Node.js/Astro projects
- Build output, dependencies, and environment files ignored
- Vercel deployment configuration present

## Quick Start for Claude Instances

1. **Install dependencies**: `npm install`
2. **Start development**: `npm run dev`
3. **Main files to understand**:
   - `/src/pages/index.astro` - Homepage content
   - `/src/components/profileAudio.astro` - Interactive component
   - `/src/layouts/Layout.astro` - Site layout
4. **Key patterns**:
   - Astro components with frontmatter
   - Tailwind utility classes
   - JavaScript in `<script>` tags
   - CSS in `<style>` blocks

## Deployment
- Configuration suggests Vercel deployment
- Static site generation suitable for CDN deployment
- Build output in `/dist/` directory

## Contact Information
- **Owner**: Phil Lennon (frontendphil)
- **Email**: enquiry@phil.dev
- **LinkedIn**: https://www.linkedin.com/in/frontendphil/
- **Bluesky**: https://bsky.app/profile/frontendphil.bsky.social