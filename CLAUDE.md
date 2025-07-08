# CLAUDE.md - Codebase Analysis for phil.dev-2025

## Overview
This is a personal portfolio website for Phil Lennon (frontendphil), a Frontend & UI Consultant based in Manchester, UK. The site is built with Astro and features a simple, clean design with an interactive audio component.

## Tech Stack

### Core Framework
- **Astro 5.11.0** - Modern static site generator with component-based architecture
- **Node.js** - Runtime environment (ES modules enabled)
- **TypeScript** - Type safety with strict configuration

### Styling & UI
- **Tailwind CSS 4.1.11** - Utility-first CSS framework with built-in 3D transforms
- **@tailwindcss/vite 4.1.11** - Vite plugin for Tailwind CSS v4
- **Inter Variable Font** - Typography via @fontsource-variable/inter 5.1.1
- **Font Awesome** - Icons via @awesome.me/kit-066e6c267d 1.0.4

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
│   │   ├── profileAudio.astro # Interactive audio profile component
│   │   ├── FontAwesome.astro  # Font Awesome icon component
│   │   └── DarkModeToggle.astro # Dark mode toggle component
│   ├── layouts/
│   │   └── Layout.astro      # Main page layout with dark mode support
│   └── pages/
│       └── index.astro       # Homepage
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Key Components & Architecture

### Layout System
- **Layout.astro** - Main layout component with responsive container and dark mode support
- Uses semantic HTML5 structure
- Responsive design with mobile-first approach
- Includes Font Awesome integration
- Dark mode toggle integration with theme persistence

### Component Architecture
- **profileAudio.astro** - Complex interactive component featuring:
  - 3D CSS transforms for flip animation using Tailwind v4 built-in classes
  - Audio playback functionality with error handling
  - State management with TypeScript (idle, playing, played states)
  - Hover effects and visual feedback
  - Keyboard navigation support
  - Focus management and accessibility features
  - Motion preference detection and reduced motion support
- **DarkModeToggle.astro** - Theme switching component with:
  - System preference detection and localStorage persistence
  - ARIA states for accessibility (aria-pressed, dynamic aria-label)
  - Focus management with visible focus rings
  - Respects prefers-reduced-motion for transitions
  - Icon switching between sun/moon based on theme state
- **FontAwesome.astro** - Icon component with:
  - Direct SVG generation from Font Awesome kit
  - Support for solid and brand icons
  - Customizable classes and titles
  - Proper accessibility attributes

### Styling Approach
- **Tailwind CSS v4** with utility classes and built-in 3D transforms
- **Dark mode support** with `class` strategy and `dark:` prefixed utilities
- Custom CSS for specific components (3D flip animations, hover effects)
- Responsive design patterns with mobile-first approach
- Motion-reduce preferences respected with `motion-safe:` prefixes
- Transform-gpu classes for hardware acceleration
- Focus-visible styling for accessibility

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
- Dark mode: slate-900/slate-800 backgrounds with appropriate text colors
- Motion-safe prefixes for animations and transitions

## Key Features

### Dark Mode Support
- System preference detection with fallback to light mode
- Manual toggle with localStorage persistence
- ARIA states and accessibility compliance
- Smooth transitions with motion-safe prefixes
- Comprehensive dark theme with slate color palette

### Interactive Profile Component
- 3D flip animation on hover using Tailwind v4 transform-3d utilities
- Audio playback with error handling and preload="none"
- Multiple states: idle, playing, played with TypeScript state management
- Animation locking during playback to prevent conflicts
- Dynamic icon changes: play → volume → game-console-handheld
- Keyboard navigation support (Enter/Space keys)
- Focus management with blur after mouse interaction
- Automatic reset to idle state after 2 seconds
- Motion preference detection to disable animations

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
- ARIA states and labels for interactive elements
- Motion preferences respected with motion-safe prefixes
- Focus management and keyboard navigation
- External links with proper security attributes (rel="noopener noreferrer")

### Browser Compatibility
- Modern ES modules
- CSS Grid and Flexbox
- 3D transforms
- Audio API

## Dependencies Analysis

### Production Dependencies
- **@awesome.me/kit-066e6c267d** 1.0.4 - Font Awesome icons with SVG generation
- **@fontsource-variable/inter** 5.1.1 - Inter variable font
- **@tailwindcss/vite** 4.1.11 - Vite plugin for Tailwind CSS v4
- **astro** 5.11.0 - Core framework
- **tailwindcss** 4.1.11 - CSS framework with built-in 3D transforms

### Development Workflow
- No test framework configured
- No linting tools configured
- Simple build process with Astro
- Git version control

## Development Notes

### TODOs Identified
1. ✅ Upgrade to Tailwind v4 for built-in 3D transforms - COMPLETED
2. ✅ Improve accessibility (keyboard navigation, motion preferences) - COMPLETED
3. ✅ Implement dark mode with proper ARIA states - COMPLETED
4. Make profileAudio work with prefers-reduced-motion (pending)
5. ✅ Validate mobile functionality and touch interactions - COMPLETED
6. ✅ Fix hover radius edge cases in profile component - COMPLETED
7. ✅ Consider adding ARIA live regions for audio state changes - COMPLETED
8. Review FontAwesome component for more official SVG generation method

### Git Configuration
- Standard .gitignore for Node.js/Astro projects
- Build output, dependencies, and environment files ignored
- Vercel deployment configuration present

## Quick Start for Claude Instances

1. **Install dependencies**: `npm install`
2. **Start development**: `npm run dev`
3. **Main files to understand**:
   - `/src/pages/index.astro` - Homepage content with social links
   - `/src/components/profileAudio.astro` - Interactive component with 3D transforms
   - `/src/components/DarkModeToggle.astro` - Theme switching component
   - `/src/components/FontAwesome.astro` - Icon component with SVG generation
   - `/src/layouts/Layout.astro` - Site layout with dark mode support
4. **Key patterns**:
   - Astro components with frontmatter
   - Tailwind v4 utility classes with built-in 3D transforms and dark mode
   - TypeScript in `<script>` tags for state management
   - CSS in `<style>` blocks for custom animations
   - Icon SVG generation from Font Awesome kit objects
   - ARIA attributes for accessibility
   - Motion-safe prefixes for respecting user preferences

## Deployment

- Configuration suggests Vercel deployment
- Static site generation suitable for CDN deployment
- Build output in `/dist/` directory

## Contact Information

- **Owner**: Phil Lennon (frontendphil)
- **Email**: <enquiry@phil.dev>
- **LinkedIn**: <https://www.linkedin.com/in/frontendphil/>
- **Bluesky**: <https://bsky.app/profile/frontendphil.bsky.social>
