import { useState, useEffect, useRef, useCallback } from 'react';

interface LazyVimeoEmbedProps {
  videoId: string;
  title?: string;
  fallbackImage?: string;
  className?: string;
  style?: React.CSSProperties;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  background?: boolean;
  /** Load iframe immediately when in viewport, or only on click */
  loadOnVisible?: boolean;
  /** Root margin for IntersectionObserver */
  rootMargin?: string;
}

/**
 * Lazy-loading Vimeo embed component
 *
 * Shows a thumbnail placeholder and only loads the iframe when:
 * - The element enters the viewport (if loadOnVisible=true)
 * - The user clicks/taps on it
 *
 * This significantly reduces initial page load by avoiding many simultaneous iframe loads.
 */
export function LazyVimeoEmbed({
  videoId,
  title = 'Video',
  fallbackImage,
  className = '',
  style,
  autoplay = true,
  loop = true,
  muted = true,
  background = true,
  loadOnVisible = true,
  rootMargin = '200px',
}: LazyVimeoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate Vimeo thumbnail URL
  const thumbnailUrl =
    fallbackImage || `https://vumbnail.com/${videoId}.jpg`;

  // Build iframe src with parameters
  const iframeSrc = `https://player.vimeo.com/video/${videoId}?${new URLSearchParams({
    badge: '0',
    autopause: '0',
    player_id: '0',
    app_id: '58479',
    ...(autoplay && { autoplay: '1' }),
    ...(loop && { loop: '1' }),
    ...(muted && { muted: '1' }),
    ...(background && { background: '1' }),
  }).toString()}`;

  // IntersectionObserver for lazy loading
  useEffect(() => {
    if (!loadOnVisible || isLoaded) return;

    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small delay to allow for smooth scroll before loading
          setTimeout(() => {
            setIsLoaded(true);
          }, 100);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [loadOnVisible, isLoaded, rootMargin]);

  // Handle click to load
  const handleClick = useCallback(() => {
    if (!isLoaded) {
      setIsLoaded(true);
    }
  }, [isLoaded]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
      onClick={handleClick}
    >
      {/* Fallback/Thumbnail Image - Always visible initially */}
      <img
        src={thumbnailUrl}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />

      {/* Play button overlay when not loaded */}
      {!isLoaded && (
        <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/20 transition-opacity hover:bg-black/30">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg">
            <svg
              className="ml-1 h-6 w-6 text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {/* Iframe - Only rendered when loaded */}
      {isLoaded && (
        <iframe
          src={iframeSrc}
          className="absolute inset-0 h-full w-full"
          style={{ border: 0 }}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          title={title}
        />
      )}
    </div>
  );
}

/**
 * Simplified lazy embed for background videos (no play button)
 */
export function LazyBackgroundVideo({
  videoId,
  fallbackImage,
  className = '',
  style,
  rootMargin = '200px',
}: {
  videoId: string;
  fallbackImage?: string;
  className?: string;
  style?: React.CSSProperties;
  rootMargin?: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const thumbnailUrl =
    fallbackImage || `https://vumbnail.com/${videoId}.jpg`;

  const iframeSrc = `https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&muted=1`;

  useEffect(() => {
    const element = containerRef.current;
    if (!element || isLoaded) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isLoaded, rootMargin]);

  return (
    <div ref={containerRef} className={className} style={style}>
      {/* Fallback Image */}
      <img
        src={thumbnailUrl}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />

      {/* Iframe - Only when in view */}
      {isLoaded && (
        <iframe
          src={iframeSrc}
          className="absolute inset-0 h-full w-full"
          style={{ border: 0 }}
          allow="autoplay; fullscreen; picture-in-picture"
          title="Background video"
        />
      )}
    </div>
  );
}

