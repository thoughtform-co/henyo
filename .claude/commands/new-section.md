# /new-section

Create a new section component for the landing page.

## Usage

```
/new-section [SectionName]
```

## Instructions

1. Create a new file at `src/sections/[SectionName].tsx`
2. Use this template:

```tsx
interface [SectionName]Props {
  isVisible?: boolean;
}

export function [SectionName]({ isVisible = true }: [SectionName]Props) {
  return (
    <section
      id="[section-id]"
      className="w-full px-4 py-24 md:py-32"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 800ms ease-out',
      }}
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Section content */}
      </div>
    </section>
  );
}
```

3. Export from `src/sections/index.ts`
4. Import and add to `src/pages/LandingPage.tsx`

## Arguments

- `SectionName`: PascalCase name for the section (e.g., `Testimonials`, `Partners`)

