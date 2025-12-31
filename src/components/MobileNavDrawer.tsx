import { useEffect, useRef } from 'react';

const NAV_ITEMS = [
  { label: 'OVERVIEW', id: 'overview' },
  { label: 'SERVICES', id: 'services' },
  { label: 'HOW WE WORK', id: 'how-we-work' },
  { label: 'USE CASES', id: 'use-cases' },
] as const;

interface MobileNavDrawerProps {
  isOpen: boolean;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onClose: () => void;
}

export function MobileNavDrawer({
  isOpen,
  activeSection,
  onNavigate,
  onClose,
}: MobileNavDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Body scroll lock when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleNavigation = (sectionId: string) => {
    onNavigate(sectionId);
    // Small delay for visual feedback before closing
    setTimeout(() => {
      onClose();
    }, 150);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 z-[70] flex h-full w-[85vw] max-w-[320px] flex-col bg-white transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          boxShadow: isOpen ? '4px 0 24px rgba(0, 0, 0, 0.08)' : 'none',
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Header with Close Button */}
        <div className="flex h-20 items-center justify-between border-b border-black/5 px-6">
          <span
            className="text-[11px] uppercase tracking-[0.12em] text-[#999999]"
            style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
          >
            Menu
          </span>
          <button
            onClick={onClose}
            className="group flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/5"
            aria-label="Close menu"
          >
            <div className="relative h-4 w-4">
              <span className="absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 rotate-45 bg-black transition-colors" />
              <span className="absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 -rotate-45 bg-black transition-colors" />
            </div>
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-6 py-10">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavigation(item.id)}
                  className={`group relative block w-full py-4 text-left transition-all ${
                    isOpen
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-3 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 50 + 100}ms` : '0ms',
                    transitionDuration: '200ms',
                    transitionProperty: 'opacity, transform',
                  }}
                >
                  <span
                    className={`text-[28px] tracking-[-0.01em] transition-colors ${
                      activeSection === item.id ? 'text-black' : 'text-[#999999]'
                    } group-hover:text-black`}
                    style={{
                      fontFamily: 'Founders Grotesk, Inter',
                      fontWeight: '500',
                      lineHeight: '1.1',
                    }}
                  >
                    {item.label}
                  </span>
                  {/* Active indicator */}
                  <span
                    className={`absolute bottom-3 left-0 h-[2px] bg-black transition-all duration-200 ${
                      activeSection === item.id ? 'w-8 opacity-100' : 'w-0 opacity-0'
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer with Contact CTA */}
        <div
          className={`border-t border-black/5 px-6 py-8 transition-all ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          style={{
            transitionDelay: isOpen ? '300ms' : '0ms',
            transitionDuration: '200ms',
          }}
        >
          <button
            onClick={() => handleNavigation('contact')}
            className="flex h-[52px] w-full items-center justify-center rounded-full bg-[#333333] text-[13px] uppercase tracking-[0.08em] text-white transition-colors hover:bg-black"
            style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}

