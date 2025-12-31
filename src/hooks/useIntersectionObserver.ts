import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<HTMLElement | null>, boolean] {
  const { threshold = 0, rootMargin = '0px', triggerOnce = false } = options;
  const ref = useRef<HTMLElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setIsIntersecting(isVisible);

        if (isVisible && triggerOnce) {
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isIntersecting];
}

/**
 * Hook for tracking active section in viewport (scrollspy)
 */
export function useScrollSpy(sectionIds: string[], offset = 200): string {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>();
    const visibleSections = new Set<string>();

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visibleSections.add(id);
          } else {
            visibleSections.delete(id);
          }

          // Set the topmost visible section as active
          const orderedVisible = sectionIds.filter((s) => visibleSections.has(s));
          if (orderedVisible.length > 0) {
            setActiveSection(orderedVisible[0]);
          }
        },
        {
          rootMargin: `-${offset}px 0px -50% 0px`,
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.set(id, observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds, offset]);

  return activeSection;
}

/**
 * Hook for triggering entrance animations when element comes into view
 */
export function useEntranceAnimation(
  rootMargin = '-30% 0px'
): [React.RefObject<HTMLElement | null>, boolean] {
  return useIntersectionObserver({
    threshold: 0,
    rootMargin,
    triggerOnce: true,
  });
}

