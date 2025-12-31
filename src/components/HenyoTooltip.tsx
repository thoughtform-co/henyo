import React from 'react';

interface HenyoTooltipProps {
  children: React.ReactNode;
}

export function HenyoTooltip({ children }: HenyoTooltipProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <span className="relative inline-block">
      <span
        className="cursor-help transition-opacity duration-200 hover:opacity-70"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </span>
      {isHovered && (
        <span
          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-2 bg-white border border-[#DDDDDD] rounded-md text-black whitespace-nowrap text-[13px] z-50 pointer-events-none"
          style={{
            fontFamily: 'Founders Grotesk, Inter',
            fontWeight: 400,
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
          }}
        >
          Hen-yŌ (変容) means metamorphosis — changing form.
        </span>
      )}
    </span>
  );
}
