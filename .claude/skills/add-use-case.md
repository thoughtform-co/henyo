# Add Use Case

Add a new client case study to the Henyo website.

## Trigger

When the user asks to add a new use case, case study, or client project.

## Instructions

1. **Gather information** about the new case:
   - Client name and logo (if available)
   - Project title
   - Work type (e.g., "Digital Campaign", "Always-on Content")
   - Short description (one line)
   - Full description (2-3 sentences)
   - Services used (e.g., "AI Hybrid Production", "CGI Production")
   - Vimeo video ID(s)
   - Fallback image URL

2. **Update the use cases file** at `src/content/use-cases.ts`:
   - Import the client logo component if it exists, or note that one needs to be created
   - Add a new entry to the `useCases` array following the existing structure

3. **If a new logo is needed**, create it in `src/components/logos/`:
   - Follow the SVG component pattern from existing logos
   - Use a descriptive filename like `ClientNameLogo.tsx`

## Example Use Case Structure

```typescript
{
  vimeoId: 'VIDEO_ID',
  logo: ClientLogo,
  title: 'CLIENT NAME · PROJECT TITLE',
  description: 'One-line description of the work',
  workType: 'Digital Campaign',
  fallbackImage: 'https://...',
  fullDescription: 'Full description of the project and Henyo's role...',
  services: ['Service 1', 'Service 2', 'Service 3'],
  media: [
    { type: 'video', id: 'VIDEO_ID', aspectRatio: '16:9' },
  ],
}
```

## Validation

After adding, verify:
- [ ] TypeScript compiles without errors (`npm run typecheck`)
- [ ] The new case appears in the carousel
- [ ] The overlay displays correctly with all media

