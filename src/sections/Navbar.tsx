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
  { label: 'Henyo', id: 'overview', isLogo: true },
  { label: 'Services', id: 'services', isLogo: false },
  { label: 'Work', id: 'use-cases', isLogo: false },
  { label: 'Process', id: 'how-we-work', isLogo: false },
  { label: 'Contact', id: 'contact', isLogo: false },
] as const;

export function Navbar({ isScrolled, activeSection, isVisible, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop: Floating compact navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center pt-5"
        style={{
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? 'auto' : 'none',
          transition: 'opacity 600ms ease-out',
        }}
      >
        <div
          className="flex items-center gap-1 rounded-[12px] border border-black/8 bg-[#F8F8F8]/90 px-2 py-1.5 backdrop-blur-md"
          style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex items-center gap-2 rounded-[8px] px-4 py-2 text-[13px] transition-all ${
                item.isLogo
                  ? 'bg-white text-black shadow-sm'
                  : activeSection === item.id
                    ? 'bg-white/60 text-black'
                    : 'text-[#666666] hover:bg-white/40 hover:text-black'
              }`}
              style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
            >
              {item.isLogo && <HenyoLogo className="h-[12px] w-auto" />}
              {item.label}
            </button>
          ))}
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
          className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#F8F8F8]/90 backdrop-blur-md"
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

