# Henyo Digital — Project Context

## Overview

This is the marketing website for **Henyo Digital**, a creative production studio combining AI workflows, CGI, and post-production for global brands.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build**: Vite
- **Styling**: Tailwind CSS v3
- **Routing**: React Router v7
- **Video**: Lazy-loaded Vimeo embeds

## Project Structure

```
src/
├── pages/          # Route-level components (LandingPage)
├── sections/       # Page sections (Hero, Navbar, UseCases, etc.)
├── components/     # Reusable UI (LazyVimeoEmbed, logos, ui/)
├── content/        # Typed data (use-cases.ts)
├── hooks/          # Custom hooks (useIsMobile, useIntersectionObserver)
└── styles/         # Global CSS + Tailwind config
```

## Key Files

- `src/pages/LandingPage.tsx` — Main page composition
- `src/content/use-cases.ts` — Client case studies data
- `src/components/LazyVimeoEmbed.tsx` — Performance-optimized video player
- `tailwind.config.js` — Theme configuration

## Commands

```bash
npm run dev          # Start dev server (port 3000)
npm run build        # Production build
npm run typecheck    # TypeScript validation
npm run lint         # ESLint
npm run format       # Prettier
```

## Conventions

- Use `@/` path alias for imports from `src/`
- Components use named exports
- Hooks follow `use*` naming convention
- CSS variables defined in `src/styles/globals.css`

## Brand Guidelines

- Primary font: Founders Grotesk
- Secondary font: Inter
- Colors: Black/white with gray accents (#888, #999)
- Aesthetic: Minimal, editorial, premium

