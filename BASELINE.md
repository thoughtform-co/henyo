# Henyo Performance Baseline

## Post-Refactor State

**Completed**: Dec 31, 2025

### Build Output (Production)

```
build/assets/index-C_FkKuzn.css         31.69 kB │ gzip:  7.18 kB
build/assets/LandingPage-CREoQIuS.js    71.84 kB │ gzip: 21.80 kB
build/assets/index-dBmxtHMe.js         180.31 kB │ gzip: 59.50 kB
```

### Improvements Achieved

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| App.tsx size | ~1,260 lines | 45 lines | **-97%** |
| CSS approach | Precompiled blob (~2,300 lines) | Tailwind JIT (~31 KB) | **Tree-shaken** |
| Dependencies | 28 runtime | 10 runtime | **-64%** |
| Iframe strategy | All mounted immediately | Lazy loaded | **Viewport-only** |
| Code splitting | None | Route-based + lazy pages | **Added** |

### Architecture Changes

1. **Decomposed monolith**: `App.tsx` → `pages/` + `sections/` + `content/` + `hooks/`
2. **IntersectionObserver**: Replaced scroll event spam with passive visibility detection
3. **Lazy Vimeo embeds**: Thumbnail-first loading, iframes mount only when visible
4. **Router-ready**: React Router v7 with lazy-loaded routes for future pages
5. **Pruned UI kit**: Removed 41 unused shadcn components, kept 6 essentials

---

## Pre-Refactor Baseline (for reference)

### Iframe Usage (performance hotspots)

Total iframe elements: **8**

| File | Count | Context |
|------|-------|---------|
| `src/App.tsx` | 4 | Hero reel, use-cases carousel (x2 sets), overlay |
| `src/components/HowWeWorkSlides.tsx` | 2 | Mobile + desktop video previews |
| `src/components/ServicesSlides.tsx` | 2 | Mobile + desktop service videos |

### Component Breakdown

- **Monolithic `App.tsx`**: ~1,260 lines containing data, state, scroll handlers, and all sections
- **UI kit**: 41 shadcn/ui components in `src/components/ui/` — **none imported** by landing page

### Dependencies (pre-refactor)

Total dependencies: **28** runtime + **3** dev

Heavy deps unused by landing page:
- `recharts` (~500KB parsed)
- `react-day-picker` + `date-fns`
- `cmdk`
- Various Radix primitives only used inside ui/ components

---

## How to measure

```bash
# Build with bundle analysis
npm run build:analyze

# View results in build/bundle-stats.html
```

## Success Criteria

- [x] CSS shipped < 50KB (only used utilities) → **31.69 KB**
- [x] App.tsx < 100 lines (composition shell) → **45 lines**
- [x] Unused deps removed from package.json → **18 packages removed**
- [x] Code splitting implemented → **LandingPage lazy-loaded**
- [x] Lazy iframe loading → **IntersectionObserver-based**
