import { useState } from 'react';
import HenyoLogo from '@/components/HenyoLogo';
import { MobileNavDrawer } from '@/components/MobileNavDrawer';

interface NavbarProps {
  isScrolled: boolean;
  activeSection: string;
  isVisible: boolean;
  onNavigate: (sectionId: string) => void;
}

const NAV_ITEMS = [
  { id: 'overview', isLogo: true },
  { label: 'Services', id: 'services', isLogo: false },
  { label: 'Process', id: 'how-we-work', isLogo: false },
  { label: 'Work', id: 'use-cases', isLogo: false },
] as const;

export function Navbar({ isScrolled, activeSection, isVisible, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop: Full-width navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between w-full transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-black/10' : 'bg-white/80 backdrop-blur-sm'
        }`}
        style={{
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? 'auto' : 'none',
          transition: 'opacity 600ms ease-out, background-color 300ms ease',
        }}
      >
        <div className="w-full px-6 md:px-8 lg:px-10 flex items-center justify-between h-20 relative">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <button
              onClick={() => onNavigate('overview')}
              className="flex items-center transition-all text-black"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(-8px)',
                transition: 'opacity 300ms ease-out, transform 300ms ease-out, color 150ms ease',
              }}
            >
              <HenyoLogo className="h-[16px] w-auto" />
            </button>
          </div>

          {/* Center - Navigation items */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
            {NAV_ITEMS.filter(item => !item.isLogo).map((item, index) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-2 transition-all ${
                  activeSection === item.id
                    ? 'text-black'
                    : 'text-[#666666] hover:text-black'
                }`}
                style={{
                  fontFamily: 'Founders Grotesk, Inter',
                  fontWeight: '500',
                  fontSize: '15px',
                  letterSpacing: '0.01em',
                  textDecoration: activeSection === item.id ? 'underline' : 'none',
                  textUnderlineOffset: '4px',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(-8px)',
                  transition: `opacity 300ms ease-out ${(index + 1) * 50}ms, transform 300ms ease-out ${(index + 1) * 50}ms, color 150ms ease, text-decoration 150ms ease`,
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right side - Contact button */}
          <div className="flex items-center">
            <button
              onClick={() => onNavigate('contact')}
              className="flex items-center justify-center rounded-full bg-black px-6 h-10 text-white transition-all duration-300 hover:bg-[#333333]"
              style={{
                fontFamily: 'Founders Grotesk, Inter',
                fontWeight: '500',
                fontSize: '14px',
                letterSpacing: '0.02em',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(-8px)',
                transition: `opacity 300ms ease-out ${(NAV_ITEMS.length) * 50}ms, transform 300ms ease-out ${(NAV_ITEMS.length) * 50}ms, background-color 150ms ease`,
              }}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile: Simplified top bar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center justify-between px-4 py-3"
        style={{
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? 'auto' : 'none',
          transition: 'opacity 600ms ease-out',
        }}
      >
        {/* Hamburger Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-black/15 bg-white/70 backdrop-blur-md"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
        >
          <div className="flex w-4 flex-col gap-[4px]">
            <span className="h-[1.5px] w-full bg-black" />
            <span className="h-[1.5px] w-full bg-black" />
          </div>
        </button>

        {/* Contact Button */}
        <button
          onClick={() => onNavigate('contact')}
          className="flex h-10 items-center justify-center rounded-[10px] bg-[#333333] px-5 text-[12px] text-white transition-colors hover:bg-black"
          style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
        >
          Contact
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      <MobileNavDrawer
        isOpen={menuOpen}
        activeSection={activeSection}
        onNavigate={onNavigate}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}

