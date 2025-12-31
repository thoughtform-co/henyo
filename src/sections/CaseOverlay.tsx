import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCases } from '@/content/use-cases';

interface CaseOverlayProps {
  isOpen: boolean;
  selectedIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function CaseOverlay({ isOpen, selectedIndex, onClose, onNavigate }: CaseOverlayProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [mediaHovered, setMediaHovered] = useState(false);

  // Reset media index when opening or changing case
  useEffect(() => {
    if (isOpen) {
      setCurrentMediaIndex(0);
    }
  }, [isOpen, selectedIndex]);

  if (!isOpen) return null;

  const currentCase = useCases[selectedIndex];
  const LogoComponent = currentCase.logo;

  const handlePrevCase = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((selectedIndex - 1 + useCases.length) % useCases.length);
  };

  const handleNextCase = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((selectedIndex + 1) % useCases.length);
  };

  const handlePrevMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMediaIndex(
      (prev) => (prev - 1 + currentCase.media.length) % currentCase.media.length
    );
  };

  const handleNextMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMediaIndex((prev) => (prev + 1) % currentCase.media.length);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-8"
      style={{ backdropFilter: 'blur(4px)', backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
      onClick={onClose}
    >
      {/* Overlay Panel */}
      <div
        className="relative max-h-[90vh] w-full max-w-[1400px] overflow-y-auto rounded-[20px] bg-white shadow-sm"
        style={{ border: '1px solid rgba(0, 0, 0, 0.06)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 text-[13px] text-[#999999] transition-colors hover:text-black md:text-[14px]"
          style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
        >
          Close
        </button>

        {/* Content */}
        <div className="flex flex-col gap-12 p-12 md:flex-row">
          {/* Left Column - Case Details */}
          <div className="flex flex-1 flex-col">
            {/* Title */}
            <h3
              className="mb-4 text-[18px] uppercase leading-[1.2] tracking-[0.02em] md:mb-6 md:text-[24px]"
              style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
            >
              {currentCase.title}
            </h3>

            {/* Description */}
            <p
              className="mb-8 text-[15px] leading-[1.65] text-[#666666] md:mb-10 md:text-[17px]"
              style={{ fontFamily: 'Founders Grotesk, Inter' }}
            >
              {currentCase.fullDescription}
            </p>

            {/* Services Section */}
            <div>
              <p
                className="mb-4 text-[11px] uppercase tracking-[0.08em] text-[#999999] md:text-[12px]"
                style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
              >
                Services
              </p>
              <div className="flex flex-wrap gap-2">
                {currentCase.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="rounded-full border border-[#E5E5E5] px-4 py-2 text-[12px] text-[#666666] md:text-[13px]"
                    style={{ fontFamily: 'Founders Grotesk, Inter' }}
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Media Carousel */}
          <div className="w-full flex-shrink-0 md:w-[500px]">
            <div
              className="relative overflow-hidden rounded-[12px] border border-black/5 bg-[#F8F8F8] md:rounded-[16px]"
              onMouseEnter={() => setMediaHovered(true)}
              onMouseLeave={() => setMediaHovered(false)}
            >
              {/* Media Container */}
              <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                {/* Fallback Image */}
                <img
                  src={currentCase.fallbackImage}
                  alt={currentCase.title}
                  className="absolute top-0 left-0 h-full w-full object-cover"
                />

                {/* Current Media - Only render active iframe to save resources */}
                {currentCase.media.map((mediaItem, idx) => {
                  const isActive = idx === currentMediaIndex;
                  return (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      {/* Only mount iframe for active media */}
                      {mediaItem.type === 'video' && isActive && (
                        <iframe
                          src={`https://player.vimeo.com/video/${mediaItem.id}?background=1&autoplay=1&loop=1&muted=1`}
                          className="absolute top-0 left-0 h-full w-full"
                          style={{ border: 0 }}
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          title={`${currentCase.title} - Media ${idx + 1}`}
                        />
                      )}
                    </div>
                  );
                })}

                {/* Two-Part Overlay - Top Left */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-2 md:top-4 md:left-4">
                  {/* Box 1: Client Logo */}
                  <div
                    className="flex items-center justify-center rounded-lg bg-white/95 px-3 py-2 md:px-4 md:py-2.5"
                    style={{ minHeight: '32px' }}
                  >
                    <div
                      style={{
                        filter:
                          'brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg)',
                        transform: 'scale(0.6)',
                        height: '16px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <LogoComponent />
                    </div>
                  </div>

                  {/* Box 2: Work Type Label */}
                  <div
                    className="flex items-center rounded-lg bg-white/95 px-3 py-2 md:px-4 md:py-2.5"
                    style={{ minHeight: '32px' }}
                  >
                    <span
                      className="whitespace-nowrap text-[11px] text-[#666666] md:text-[12px]"
                      style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
                    >
                      {currentCase.workType}
                    </span>
                  </div>
                </div>

                {/* Media Navigation Arrows - Hover Only */}
                {currentCase.media.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevMedia}
                      className={`absolute top-1/2 left-4 z-10 -translate-y-1/2 transition-opacity duration-200 ${
                        mediaHovered ? 'opacity-100' : 'opacity-0'
                      } hover:opacity-100`}
                      style={{ fontFamily: 'Founders Grotesk', fontWeight: '400' }}
                      aria-label="Previous media"
                    >
                      <span className="text-[13px] text-white">Previous</span>
                    </button>
                    <button
                      onClick={handleNextMedia}
                      className={`absolute top-1/2 right-4 z-10 -translate-y-1/2 transition-opacity duration-200 ${
                        mediaHovered ? 'opacity-100' : 'opacity-0'
                      } hover:opacity-100`}
                      style={{ fontFamily: 'Founders Grotesk', fontWeight: '400' }}
                      aria-label="Next media"
                    >
                      <span className="text-[13px] text-white">Next</span>
                    </button>
                  </>
                )}

                {/* Media Position Indicator */}
                {currentCase.media.length > 1 && (
                  <div className="absolute right-4 bottom-4 z-10">
                    <p
                      className="text-[12px] text-white/70"
                      style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
                    >
                      {currentMediaIndex + 1} / {currentCase.media.length}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Case Navigation - Bottom Center */}
        <div className="sticky bottom-0 border-t border-black/5 bg-white">
          <div className="flex items-center justify-center gap-12 px-6 py-6 md:gap-16 md:px-12 md:py-8">
            <button
              onClick={handlePrevCase}
              className="flex items-center gap-3 transition-opacity hover:opacity-60"
              style={{ fontFamily: 'Founders Grotesk', fontWeight: '500' }}
            >
              <ChevronLeft className="h-5 w-5 text-black md:h-6 md:w-6" strokeWidth={2} />
              <span className="text-[14px] uppercase tracking-[0.02em] text-black md:text-[16px]">
                PREVIOUS CASE
              </span>
            </button>
            <button
              onClick={handleNextCase}
              className="flex items-center gap-3 transition-opacity hover:opacity-60"
              style={{ fontFamily: 'Founders Grotesk', fontWeight: '500' }}
            >
              <span className="text-[14px] uppercase tracking-[0.02em] text-black md:text-[16px]">
                NEXT CASE
              </span>
              <ChevronRight className="h-5 w-5 text-black md:h-6 md:w-6" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

