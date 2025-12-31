interface PageLoaderProps {
  isActive: boolean;
  isFadingOut: boolean;
}

export function PageLoader({ isActive, isFadingOut }: PageLoaderProps) {
  if (!isActive) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        opacity: isFadingOut ? 0 : 1,
        transition: 'opacity 200ms ease-out',
      }}
    >
      <p
        className="max-w-[90vw] px-4 text-center md:max-w-[680px]"
        style={{
          fontFamily: "'Founders Grotesk', sans-serif",
          fontWeight: 400,
          fontSize: 'clamp(24px, 3.2vw, 32px)',
          letterSpacing: '-0.02em',
          lineHeight: '1.2',
          color: '#888888',
        }}
      >
        Dedicated to new creative possibilities.
      </p>
    </div>
  );
}

