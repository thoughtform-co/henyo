---
name: Redesign Services Section to Split View
overview: Redesign the services section from a carousel to a high-impact split view with two interactive panels, applying 'dramatic typography' and 'orchestrated motion' principles.
todos:
  - id: implement-services-split
    content: Refactor ServicesSlides.tsx into a split-view component with two interactive panels and video backgrounds.
    status: completed
  - id: update-landing-page-integration
    content: Cleanup LandingPage.tsx by removing carousel-specific state and timer logic.
    status: completed
  - id: add-split-animations
    content: Add hover-based expansion and staggered entrance animations for the new split view.
    status: completed
---

# Plan: Redesign Services Section to Split View

Redesign the current carousel-based services section into a balanced, side-by-side split view that highlights Henyo's two core offerings: **Digital Campaigns** and **Always-on Content**.

## Architecture Changes

```mermaid
graph TD
    LP[LandingPage.tsx] --> SS[ServicesSplit.tsx]
    SS --> P1[Panel: Digital Campaigns]
    SS --> P2[Panel: Always-on Content]
    P1 --> V1[LazyVimeoEmbed]
    P2 --> V2[LazyVimeoEmbed]
    P1 --> C1[Content Overlay]
    P2 --> C2[Content Overlay]
```



## Proposed Changes

### 1. New Split View Component

Modify or replace [`src/components/ServicesSlides.tsx`](src/components/ServicesSlides.tsx) with a new `ServicesSplit` component:

- **Desktop Layout**: 50/50 horizontal split using CSS `flex` or `grid`.
- **Interactivity**: Add hover states where the active panel expands (e.g., `flex-[1.2]` vs `flex-[0.8]`) and increases saturation or brightness.
- **Backgrounds**: Use [`src/components/LazyVimeoEmbed.tsx`](src/components/LazyVimeoEmbed.tsx) for full-bleed video backgrounds in each panel.
- **Typography**: Apply "dramatic size jumps" for titles (e.g., 64px+ in Founders Grotesk) to match Henyo's bold aesthetic.
- **Content Overlays**: Use semi-transparent glassmorphic overlays for descriptions and the "Download Pricing" button to ensure legibility over videos.

### 2. Update Landing Page

Refactor [`src/pages/LandingPage.tsx`](src/pages/LandingPage.tsx):

- Remove the `activeService` state and auto-advance `useInterval` logic.
- Simplify the `ServicesSplit` props as it no longer needs navigation controls (`onNext`, `onPrev`, etc.).
- Ensure the section maintains its `IntersectionObserver` entrance animation but updated for the two-panel reveal.

### 3. Mobile Responsiveness

- **Mobile Layout**: Stack the panels vertically (`flex-col`).
- Maintain high-impact visuals but scale typography appropriately for smaller screens.

## Key Files

- [`src/components/ServicesSlides.tsx`](src/components/ServicesSlides.tsx): The main target for the redesign.