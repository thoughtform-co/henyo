import HenyoLogo from '@/components/HenyoLogo';

interface NavbarProps {
  isScrolled: boolean;
  activeSection: string;
  isVisible: boolean;
  onNavigate: (sectionId: string) => void;
}

const NAV_ITEMS = [
  { label: 'OVERVIEW', id: 'overview' },
  { label: 'HOW WE WORK', id: 'how-we-work' },
  { label: 'SERVICES', id: 'services' },
  { label: 'USE CASES', id: 'use-cases' },
] as const;

export function Navbar({ isScrolled, activeSection, isVisible, onNavigate }: NavbarProps) {
  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-black/10 bg-white' : 'bg-transparent'
      }`}
      style={{
        height: '80px',
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: 'opacity 600ms ease-out',
      }}
    >
      <div className="flex h-full items-center justify-between px-4 pt-2 md:px-12">
        {/* Left: Logo */}
        <div className="flex flex-1 items-center">
          <HenyoLogo className="h-[14px] w-auto text-[#999999] md:h-[17px]" />
        </div>

        {/* Center: Navigation - Hidden on mobile */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative text-[13px] tracking-[0.08em] transition-colors ${
                activeSection === item.id ? 'text-black' : 'text-[#999999]'
              }`}
              style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
            >
              {item.label}
              {activeSection === item.id && (
                <span
                  className="absolute right-0 left-0 h-[1px] bg-black transition-opacity duration-150"
                  style={{ top: 'calc(100% + 4px)' }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Right: Contact Button */}
        <div className="flex flex-1 items-center justify-end">
          <button
            onClick={() => onNavigate('contact')}
            className="mt-3 flex h-[38px] items-center justify-center rounded-full bg-[#333333] px-4 text-[11px] uppercase tracking-[0.08em] text-white transition-colors hover:bg-black md:h-[42px] md:px-6 md:text-[13px]"
            style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
          >
            CONTACT
          </button>
        </div>
      </div>
    </nav>
  );
}

