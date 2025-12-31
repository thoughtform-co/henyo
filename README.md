# Henyo Digital

**Creative production studio combining AI workflows, CGI, and post-production.**

[Visit Website](https://henyo.digital) · [Instagram](https://instagram.com/henyo.digital) · [LinkedIn](https://www.linkedin.com/company/henyo-digital)

---

## About

Henyo is a creative production studio that delivers digital campaigns and always-on content for global brands. We combine creative direction, hybrid AI workflows, CGI, and post-production into a clear, structured production system—working closely with in-house teams and agencies from brief through approved delivery.

### Services

| Service | Description | Cadence |
|---------|-------------|---------|
| **Digital Campaigns** | High-impact creative for launches, seasonal drops, and brand storytelling | 2-6 weeks per project |
| **Always-on Content** | Continuous production for social feeds, product launches, and brand presence | Monthly retainer or quarterly sprints |

### Production Process

```
01 BRIEFING        → Clear inputs, locked scope
02 LOOK DEVELOPMENT → Visual language defined early
03 MOTION          → Animation built on approved direction
04 POLISHING       → Retouch, compositing, color refinement
05 DELIVERY        → Platform-ready formats, clean handoff
```

### Clients

Essie (L'Oréal) · Loop Earplugs · Under Armour · Komono · Essentiel Antwerp

---

## Tech Stack

This marketing website is built with:

- **React 18** + TypeScript
- **Vite** for development and builds
- **Tailwind CSS** for styling
- **React Router** for navigation (multi-page ready)
- **Lazy-loaded Vimeo embeds** for performance

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at localhost:3000 |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build locally |
| `npm run typecheck` | Run TypeScript compiler checks |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run build:analyze` | Build with bundle visualization |

## Project Structure

```
src/
├── pages/              # Route-level components
│   └── LandingPage.tsx
├── sections/           # Page sections
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Editorial.tsx
│   ├── UseCases.tsx
│   ├── CaseOverlay.tsx
│   └── Footer.tsx
├── components/         # Reusable UI components
│   ├── LazyVimeoEmbed.tsx
│   ├── HowWeWorkSlides.tsx
│   ├── ServicesSlides.tsx
│   ├── logos/
│   └── ui/             # shadcn/ui primitives
├── content/            # Typed content data
│   └── use-cases.ts
├── hooks/              # Custom React hooks
│   ├── useIsMobile.ts
│   ├── useInterval.ts
│   └── useIntersectionObserver.ts
└── styles/
    └── globals.css     # Tailwind + theme variables
```

## Performance

- **CSS**: ~32 KB (7 KB gzipped) — Tailwind JIT, only used utilities
- **JS**: ~252 KB (88 KB gzipped) — code-split by route
- **Lazy video loading**: Thumbnails first, iframes on visibility
- **IntersectionObserver**: No scroll event spam

---

## License

© 2025 Henyo Digital. All rights reserved.
