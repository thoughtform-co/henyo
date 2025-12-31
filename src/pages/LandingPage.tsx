import { useState, useEffect, useCallback, useRef } from 'react';
import {
  Navbar,
  PageLoader,
  Hero,
  Editorial,
  SocialProof,
  UseCases,
  CaseOverlay,
  Footer,
} from '@/sections';
import { HowWeWorkSlides } from '@/components/HowWeWorkSlides';
import { ServicesSlides } from '@/components/ServicesSlides';
import { useInterval, useScrollSpy } from '@/hooks';

const SECTION_IDS = ['overview', 'services', 'how-we-work', 'use-cases'] as const;

export function LandingPage() {
  // Page loader states
  const [loaderActive, setLoaderActive] = useState(true);
  const [loaderFadeOut, setLoaderFadeOut] = useState(false);
  const [loaderComplete, setLoaderComplete] = useState(false);

  // Navigation states
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarIntroVisible, setNavbarIntroVisible] = useState(false);

  // Use IntersectionObserver-based scrollspy for active section
  const activeSection = useScrollSpy([...SECTION_IDS], 200);

  // Hero animation states
  const [reelVisible, setReelVisible] = useState(false);
  const [carouselVisible, setCarouselVisible] = useState(false);

  // Editorial text color animation
  const [editorialTextColor, setEditorialTextColor] = useState('#888888');

  // Section entrance states (using IntersectionObserver)
  const [howWeWorkVisible, setHowWeWorkVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [useCasesTitleVisible, setUseCasesTitleVisible] = useState(false);
  const [useCasesVisible, setUseCasesVisible] = useState(false);

  // Refs for IntersectionObserver
  const howWeWorkRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const useCasesRef = useRef<HTMLElement>(null);
  const editorialRef = useRef<HTMLElement>(null);

  // HOW WE WORK slide state
  const [activeStep, setActiveStep] = useState(0);

  // Use Cases overlay state
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);

  // Page loader sequence - fast blur reveal
  useEffect(() => {
    // Start fade out almost immediately
    const fadeTimer = setTimeout(() => setLoaderFadeOut(true), 800);
    // Content becomes interactive at same time
    const contentTimer = setTimeout(() => {
      setLoaderComplete(true);
      setNavbarIntroVisible(true);
      setReelVisible(true);
      setCarouselVisible(true);
    }, 800);
    // Remove loader from DOM after animation completes
    const hideTimer = setTimeout(() => setLoaderActive(false), 1000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(contentTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Minimal scroll listener for navbar background and editorial color
  useEffect(() => {
    let rafId: number;
    let lastScrollY = 0;

    const handleScroll = () => {
      // Throttle with RAF
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // Only update if scrollY changed significantly
        if (Math.abs(scrollY - lastScrollY) > 5) {
          lastScrollY = scrollY;

          // Navbar background
          setIsScrolled(scrollY > 0);

          // Editorial Text color animation
          const editorialElement = editorialRef.current;
          if (editorialElement) {
            const rect = editorialElement.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const elementTop = rect.top;
            const animationStart = viewportHeight * 0.8;
            const viewportCenter = viewportHeight / 2;

            if (elementTop <= animationStart && elementTop > viewportCenter) {
              const scrollDistance = animationStart - viewportCenter;
              const currentPosition = elementTop - viewportCenter;
              const progress = 1 - currentPosition / scrollDistance;
              const clampedProgress = Math.max(0, Math.min(1, progress));
              const greyValue = Math.round(136 * (1 - clampedProgress));
              setEditorialTextColor(`rgb(${greyValue}, ${greyValue}, ${greyValue})`);
            } else if (elementTop <= viewportCenter) {
              setEditorialTextColor('#000000');
            } else {
              setEditorialTextColor('#888888');
            }
          }
        }

        rafId = 0;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // IntersectionObserver for section entrance animations
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // How We Work entrance
    if (howWeWorkRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHowWeWorkVisible(true);
            observer.disconnect();
          }
        },
        { rootMargin: '-30% 0px', threshold: 0 }
      );
      observer.observe(howWeWorkRef.current);
      observers.push(observer);
    }

    // Services entrance
    if (servicesRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setServicesVisible(true);
            observer.disconnect();
          }
        },
        { rootMargin: '-30% 0px', threshold: 0 }
      );
      observer.observe(servicesRef.current);
      observers.push(observer);
    }

    // Use Cases entrance
    if (useCasesRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setUseCasesTitleVisible(true);
            setUseCasesVisible(true);
            observer.disconnect();
          }
        },
        { rootMargin: '-25% 0px', threshold: 0 }
      );
      observer.observe(useCasesRef.current);
      observers.push(observer);
    }

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [loaderComplete]);

  // Auto-advance for HOW WE WORK slides
  useInterval(() => {
    setActiveStep((prev) => (prev + 1) % 5);
  }, 4000);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      if (['how-we-work', 'services', 'use-cases'].includes(id)) {
        const scrollOffset = element.offsetTop - navbarHeight - 40;
        window.scrollTo({ top: scrollOffset, behavior: 'smooth' });
      } else {
        const windowHeight = window.innerHeight;
        const elementRect = element.getBoundingClientRect();
        const elementHeight = elementRect.height;

        let scrollOffset;
        if (elementHeight > windowHeight) {
          scrollOffset = element.offsetTop - navbarHeight;
        } else {
          const centerOffset = (windowHeight - elementHeight) / 2;
          scrollOffset = element.offsetTop - centerOffset;
        }

        window.scrollTo({ top: scrollOffset, behavior: 'smooth' });
      }
    }
  }, []);

  const handleStepChange = useCallback((index: number) => setActiveStep(index), []);
  const handleNextStep = useCallback(() => setActiveStep((prev) => (prev + 1) % 5), []);
  const handlePrevStep = useCallback(() => setActiveStep((prev) => (prev - 1 + 5) % 5), []);


  const handleOpenCase = useCallback((index: number) => {
    setSelectedCaseIndex(index);
    setOverlayOpen(true);
  }, []);

  const handleCloseOverlay = useCallback(() => setOverlayOpen(false), []);
  const handleNavigateCase = useCallback((index: number) => setSelectedCaseIndex(index), []);

  return (
    <>
      {/* Page Loader - centered text overlay (outside blur) */}
      <PageLoader isActive={loaderActive} isFadingOut={loaderFadeOut} />

      {/* Navbar (outside blur, always crisp) */}
      <Navbar
        isScrolled={isScrolled}
        activeSection={activeSection || 'overview'}
        isVisible={navbarIntroVisible}
        onNavigate={scrollToSection}
      />

      <div
        className="relative min-h-screen bg-white"
        style={{
          filter: loaderFadeOut ? 'blur(0px)' : 'blur(16px)',
          transition: 'filter 200ms ease-out',
        }}
      >

      {/* OVERVIEW Chapter */}
      <Hero reelVisible={reelVisible} />

      {/* Editorial Intro Text */}
      <section ref={editorialRef as React.RefObject<HTMLElement>}>
        <Editorial isVisible={loaderComplete} textColor={editorialTextColor} />
      </section>

      {/* Social Proof - Client Logos */}
      <SocialProof isVisible={carouselVisible} />

      {/* SERVICES Chapter */}
      {loaderComplete && (
        <section
          ref={servicesRef as React.RefObject<HTMLElement>}
          id="services"
          className="relative min-h-screen pt-24 pb-32 md:pt-32 md:pb-48"
          style={{
            opacity: servicesVisible ? 1 : 0,
            transform: servicesVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 800ms ease-out, transform 800ms ease-out',
          }}
        >
          <div className="w-full">
            <ServicesSlides isVisible={servicesVisible} />
          </div>
        </section>
      )}

      {/* HOW WE WORK Chapter */}
      {loaderComplete && (
        <section
          ref={howWeWorkRef as React.RefObject<HTMLElement>}
          id="how-we-work"
          className="relative min-h-screen pt-24 pb-32 md:pt-32 md:pb-48"
          style={{
            opacity: howWeWorkVisible ? 1 : 0,
            transform: howWeWorkVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 800ms ease-out, transform 800ms ease-out',
          }}
        >
          <div className="w-full">
            <HowWeWorkSlides
              activeStep={activeStep}
              onStepChange={handleStepChange}
              onNext={handleNextStep}
              onPrev={handlePrevStep}
            />
          </div>
        </section>
      )}

      {/* USE CASES Chapter */}
      {loaderComplete && (
        <section ref={useCasesRef as React.RefObject<HTMLElement>}>
          <UseCases
            isVisible={useCasesVisible}
            titleVisible={useCasesTitleVisible}
            onOpenCase={handleOpenCase}
          />
        </section>
      )}

      {/* Footer */}
      {loaderComplete && <Footer />}

      {/* Case Detail Overlay */}
        <CaseOverlay
          isOpen={overlayOpen}
          selectedIndex={selectedCaseIndex}
          onClose={handleCloseOverlay}
          onNavigate={handleNavigateCase}
        />
      </div>
    </>
  );
}
