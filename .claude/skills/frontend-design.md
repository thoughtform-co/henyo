# Frontend Design

Guide for creating distinctive, polished frontend components and layouts that avoid generic "AI slop" aesthetics.

## Trigger

Activate when working on:
- Creating or modifying UI components
- Styling pages or sections
- Responsive design decisions
- Animation and motion design
- Typography and color choices
- Layout composition

## Philosophy

**Design with intention, not defaults.** Every choice should serve the brand and user experience. Henyo's aesthetic is minimal, editorial, and premium—but "minimal" doesn't mean "generic."

---

## Design Dimensions

### 1. Typography

**Henyo uses:** Founders Grotesk (primary), Inter (fallback)

When suggesting typography improvements:

- **Use weight extremes** — 400 vs 700+, not 400 vs 500. Contrast creates hierarchy.
- **Size jumps should be dramatic** — 3x+ differences for headings vs body, not 1.2x
- **Letter-spacing varies by size** — Tighter for large text (-0.02em), looser for small caps (+0.08em)
- **Line-height decreases as size increases** — 1.1-1.2 for display, 1.5-1.6 for body

```css
/* Good: Clear hierarchy */
.headline { font-size: clamp(32px, 5vw, 64px); font-weight: 500; line-height: 1.1; letter-spacing: -0.02em; }
.body { font-size: 18px; font-weight: 400; line-height: 1.6; }

/* Avoid: Weak contrast */
.headline { font-size: 24px; font-weight: 500; }
.body { font-size: 16px; font-weight: 400; }
```

### 2. Color & Theme

**Henyo palette:** Black/white base with gray accents (#888, #999, #DDD)

When working with color:

- **Commit to the aesthetic** — Don't hedge with too many mid-tones
- **Use CSS variables** — Consistency across components
- **Dominant + accent** outperforms evenly distributed palettes
- **Opacity for depth** — `rgba()` and `color-mix()` for layering

```css
/* Good: Decisive palette */
:root {
  --foreground: #000000;
  --background: #ffffff;
  --muted: #888888;
  --border: rgba(0, 0, 0, 0.1);
}

/* Avoid: Non-committal grays */
--gray-1: #f5f5f5; --gray-2: #e5e5e5; --gray-3: #d4d4d4; /* etc... */
```

### 3. Motion & Animation

When adding motion:

- **High-impact moments over scattered micro-interactions** — One well-orchestrated page load beats random hover effects
- **Staggered reveals** — Use `animation-delay` for sequential entrance
- **CSS-first** — Prefer CSS transitions/animations over JS when possible
- **Respect `prefers-reduced-motion`** — Always provide fallbacks

```css
/* Good: Orchestrated entrance */
.section { 
  opacity: 0; 
  transform: translateY(20px);
  transition: opacity 800ms ease-out, transform 800ms ease-out;
}
.section.visible { opacity: 1; transform: translateY(0); }

/* Staggered children */
.item:nth-child(1) { transition-delay: 0ms; }
.item:nth-child(2) { transition-delay: 100ms; }
.item:nth-child(3) { transition-delay: 200ms; }

/* Reduced motion fallback */
@media (prefers-reduced-motion: reduce) {
  .section { transition: none; opacity: 1; transform: none; }
}
```

### 4. Backgrounds & Depth

- **Avoid flat solid colors** — Layer subtle gradients, patterns, or contextual effects
- **Use backdrop-blur sparingly** — Premium feel when appropriate
- **Shadows should be soft** — Low opacity, large spread

```css
/* Good: Subtle depth */
.card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
}

/* Avoid: Heavy-handed effects */
.card { box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); }
```

---

## Responsive Design

### Breakpoint Strategy

```css
/* Mobile-first, content-driven breakpoints */
/* Small: default */
/* Medium: 768px — tablet/small desktop */
/* Large: 1024px — desktop */
/* XL: 1280px — wide screens */

/* Use clamp() for fluid typography */
font-size: clamp(18px, 2.5vw, 24px);

/* Use min()/max() for fluid spacing */
padding: min(5vw, 80px);
max-width: min(90vw, 1200px);
```

### Component Patterns

**Cards & Grids:**
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(16px, 3vw, 32px);
}
```

**Text containers:**
```css
.prose {
  max-width: 65ch; /* Optimal reading width */
  margin-inline: auto;
  padding-inline: clamp(16px, 5vw, 48px);
}
```

**Aspect ratios:**
```css
.video-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}
```

---

## Anti-Patterns to Avoid

### "AI Slop" Indicators

❌ **Generic fonts** — Arial, system-ui without intention
❌ **Purple gradients on white** — The hallmark of generic AI output
❌ **Evenly spaced everything** — No hierarchy, no rhythm
❌ **Timid colors** — Too many mid-grays, no commitment
❌ **Random hover effects** — Motion without purpose
❌ **Oversized rounded corners** — `border-radius: 24px` on everything
❌ **Gratuitous glass morphism** — Blur everywhere

### Design Checks

Before finalizing any component, verify:

- [ ] **Does it have clear visual hierarchy?** Can you identify primary, secondary, tertiary elements?
- [ ] **Is typography intentional?** Weight, size, spacing all serve a purpose?
- [ ] **Does motion enhance UX?** Or is it decorative noise?
- [ ] **Is it responsive without breakpoint hacks?** Fluid design > media query stacking
- [ ] **Does it feel like Henyo?** Minimal, editorial, premium

---

## Implementation Notes

### When Creating Components

1. **Start with semantics** — Use appropriate HTML elements
2. **Add structure** — Layout with flexbox/grid
3. **Apply typography** — Font choices and hierarchy
4. **Layer color** — Background, borders, text
5. **Add motion last** — Entrances, interactions, transitions

### When Reviewing Designs

Ask:
- "What makes this distinctively Henyo, not generic?"
- "Would this feel at home next to existing sections?"
- "Is there any visual element that doesn't earn its place?"

### Tailwind Classes to Prefer

```
text-[13px] tracking-[0.08em]     /* Small caps style */
text-[clamp(24px,3vw,32px)]       /* Fluid headlines */
transition-all duration-300       /* Smooth state changes */
hover:opacity-70                  /* Subtle hover */
backdrop-blur-md bg-white/70      /* Glass effect */
border border-black/5             /* Subtle borders */
```

---

## Resources

- [Henyo brand guidelines](./../CLAUDE.md)
- [Tailwind CSS docs](https://tailwindcss.com/docs)
- [Every Layout](https://every-layout.dev/) — Intrinsic design patterns
- [Utopia](https://utopia.fyi/) — Fluid responsive design calculator

