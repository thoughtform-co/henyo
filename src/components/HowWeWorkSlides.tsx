import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import imgLookDevelopment from "figma:asset/1d09dde76892af022de27b92d7a2106c9a372801.png";
import Frame6Wrapper from '../imports/Frame6Wrapper';

interface Slide {
  num: string;
  title: string;
  lead: string;
  body: string;
  mediaType: 'image' | 'video' | 'component';
  imageUrl?: string;
  videoId?: string;
  component?: React.ComponentType;
  aspectRatio: string;
}

const slides: Slide[] = [
  {
    num: '01',
    title: 'BRIEFING',
    lead: 'CLEAR INPUTS. CLEAR CONSTRAINTS.',
    body: 'We review assets, references, formats, and goals before production starts. Scope is locked before the sprint begins.',
    mediaType: 'component',
    component: Frame6Wrapper,
    aspectRatio: '4/5'
  },
  {
    num: '02',
    title: 'LOOK DEVELOPMENT',
    lead: 'WE LOCK THE VISUAL LANGUAGE EARLY.',
    body: 'V00 stills define lighting, materials, realism, and style. Approval here speeds everything that follows.',
    mediaType: 'image',
    imageUrl: imgLookDevelopment,
    aspectRatio: '4/5'
  },
  {
    num: '03',
    title: 'MOTION',
    lead: 'MOVEMENT BUILT ON APPROVED DIRECTION.',
    body: 'Animation and motion are produced against the locked look, ensuring consistent execution and predictable revisions.',
    mediaType: 'video',
    videoId: '1150575297',
    aspectRatio: '4/5'
  },
  {
    num: '04',
    title: 'POLISHING',
    lead: 'WHERE IT BECOMES PREMIUM.',
    body: 'Retouch, cleanup, compositing, and color refinement. Artifacts removed, details sharpened.',
    mediaType: 'video',
    videoId: '1150575297',
    aspectRatio: '4/5'
  },
  {
    num: '05',
    title: 'DELIVERY',
    lead: 'READY TO SHIP.',
    body: 'Final assets delivered in platform-ready formats with clean naming, versions, and handoff.',
    mediaType: 'video',
    videoId: '1150575297',
    aspectRatio: '4/5'
  }
];

interface HowWeWorkSlidesProps {
  activeStep: number;
  onStepChange: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

export function HowWeWorkSlides({ activeStep, onStepChange, onNext, onPrev }: HowWeWorkSlidesProps) {
  return (
    <>
      {/* Section Label */}
      <p 
        className="uppercase text-[#999999] mb-16 md:mb-20 text-[18px] md:text-[20px] tracking-[0.08em] text-center"
        style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
      >
        HOW WE WORK
      </p>

      {/* Mobile Layout */}
      <div className="block md:hidden w-full max-w-[680px] mx-auto px-4">
        {/* Pipeline Progress Indicator */}
        <div className="flex items-center justify-center gap-8 mb-12">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => onStepChange(index)}
              className="flex flex-col items-center gap-2 transition-all"
            >
              <div className="relative">
                <div 
                  className={`w-2 h-2 rounded-full border transition-all duration-300 ${
                    activeStep === index 
                      ? 'bg-black border-black scale-125' 
                      : activeStep > index
                      ? 'bg-[#666666] border-[#666666]'
                      : 'bg-white border-black/20'
                  }`}
                />
                {index < slides.length - 1 && (
                  <div 
                    className={`absolute top-2 left-[3.5px] w-[1px] h-6 transition-colors duration-300 ${
                      activeStep > index ? 'bg-[#666666]' : 'bg-black/10'
                    }`}
                    style={{ transform: 'rotate(90deg)', transformOrigin: 'top left', width: '20px', height: '1px', top: '50%', left: '100%', marginLeft: '4px' }}
                  />
                )}
              </div>
              <span 
                className={`text-[9px] tracking-[0.05em] transition-colors duration-300 ${
                  activeStep === index ? 'text-black' : 'text-[#999999]'
                }`}
                style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
              >
                {slide.num}
              </span>
            </button>
          ))}
        </div>

        {/* Slides Container */}
        <div className="relative">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-opacity duration-700 ${
                activeStep === index ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'
              }`}
            >
              {/* Step Title */}
              <p 
                className="text-[11px] text-[#999999] tracking-[0.08em] uppercase mb-6 text-center" 
                style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
              >
                {slide.num} — {slide.title}
              </p>

              {/* Image Preview */}
              <div className="mb-6">
                {slide.mediaType === 'image' && (
                  <img
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="w-full rounded-[12px] object-contain"
                    style={{ aspectRatio: slide.aspectRatio }}
                  />
                )}
                {slide.mediaType === 'video' && (
                  <div className="rounded-[12px] overflow-hidden bg-black relative" style={{ aspectRatio: slide.aspectRatio }}>
                    <iframe
                      src={`https://player.vimeo.com/video/${slide.videoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1`}
                      className="absolute inset-0 w-full h-full"
                      style={{ border: 0 }}
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                      title={slide.title}
                    />
                  </div>
                )}
                {slide.mediaType === 'component' && slide.component && (
                  <div className="w-full rounded-[16px] overflow-hidden relative bg-[#d1c9c7]" style={{ aspectRatio: slide.aspectRatio }}>
                    <div className="w-full h-full flex items-center justify-center">
                      <div style={{ 
                        width: '100%', 
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                          <slide.component />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Lead Text */}
              <p 
                className="text-[28px] text-black mb-4 leading-[1.2] text-center" 
                style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500', letterSpacing: '-0.01em' }}
              >
                {slide.lead}
              </p>

              {/* Body Copy */}
              <p 
                className="text-[16px] text-[#666666] leading-[1.6]" 
                style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '400' }}
              >
                {slide.body}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        {activeStep !== 0 && (
          <div className="flex items-center justify-center gap-6 mt-12">
            {/* Previous Button */}
            <button
              onClick={onPrev}
              className="text-[#999999] hover:text-black transition-colors p-2"
              aria-label="Previous step"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot Navigation */}
            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => onStepChange(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    activeStep === index ? 'bg-black w-6' : 'bg-[#CCCCCC]'
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={onNext}
              className="text-[#999999] hover:text-black transition-colors p-2"
              aria-label="Next step"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block w-full max-w-[1200px] mx-auto px-8">
        <div className="flex items-start justify-center gap-16">
          {/* Left: Vertical Pipeline */}
          <div className="flex-shrink-0 pt-2">
            <div className="space-y-6">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => onStepChange(index)}
                  className="flex items-center gap-4 transition-all"
                >
                  <div className="relative">
                    <div 
                      className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                        activeStep === index 
                          ? 'bg-black border-black scale-150' 
                          : activeStep > index
                          ? 'bg-[#666666] border-[#666666]'
                          : 'bg-white border-black/20'
                      }`}
                    />
                    {index < slides.length - 1 && (
                      <div 
                        className={`absolute top-3 left-[5.5px] w-[1px] h-6 transition-colors duration-300 ${
                          activeStep > index ? 'bg-[#666666]' : 'bg-black/10'
                        }`}
                      />
                    )}
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span 
                      className={`text-[13px] tracking-[0.08em] transition-colors duration-300 ${
                        activeStep === index ? 'text-black' : 'text-[#CCCCCC]'
                      }`}
                      style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
                    >
                      {slide.num}
                    </span>
                    <span 
                      className={`text-[13px] tracking-[0.08em] uppercase transition-colors duration-300 whitespace-nowrap ${
                        activeStep === index 
                          ? 'text-black' 
                          : activeStep > index
                          ? 'text-[#999999]'
                          : 'text-[#CCCCCC]'
                      }`}
                      style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
                    >
                      {slide.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Center: Image */}
          <div className="flex-shrink-0 relative" style={{ width: '462px' }}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-opacity duration-700 ${
                  activeStep === index ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'
                }`}
              >
                {slide.mediaType === 'image' && (
                  <img
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="w-full rounded-[16px] object-cover"
                    style={{ aspectRatio: slide.aspectRatio }}
                  />
                )}
                {slide.mediaType === 'video' && (
                  <div className="rounded-[16px] overflow-hidden bg-black relative" style={{ aspectRatio: slide.aspectRatio }}>
                    <iframe
                      src={`https://player.vimeo.com/video/${slide.videoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1`}
                      className="absolute inset-0 w-full h-full"
                      style={{ border: 0 }}
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                      title={slide.title}
                    />
                  </div>
                )}
                {slide.mediaType === 'component' && slide.component && (
                  <div className="w-full rounded-[16px] overflow-hidden relative bg-[#d1c9c7]" style={{ aspectRatio: slide.aspectRatio }}>
                    <div className="w-full h-full flex items-center justify-center">
                      <div style={{ 
                        width: '100%', 
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                          <slide.component />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Copy */}
          <div className="flex-shrink-0 pt-2" style={{ width: '440px' }}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-opacity duration-700 ${
                  activeStep === index ? 'opacity-100 relative' : 'opacity-0 absolute pointer-events-none'
                }`}
              >
                {/* Step Title */}
                <p 
                  className="text-[13px] text-[#999999] tracking-[0.08em] uppercase mb-8" 
                  style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
                >
                  {slide.num} — {slide.title}
                </p>

                {/* Lead Text */}
                <p 
                  className="text-[42px] text-black mb-6 leading-[1.15]" 
                  style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500', letterSpacing: '-0.01em' }}
                >
                  {slide.lead}
                </p>

                {/* Body Copy */}
                <p 
                  className="text-[16px] text-[#666666] leading-[1.6]" 
                  style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '400' }}
                >
                  {slide.body}
                </p>
              </div>
            ))}

            {/* Navigation Controls - Desktop */}
            {activeStep !== 0 && (
              <div className="flex items-center gap-6 mt-12">
                {/* Previous Button */}
                <button
                  onClick={onPrev}
                  className="text-[#999999] hover:text-black transition-colors p-2"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Dot Navigation */}
                <div className="flex items-center gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => onStepChange(index)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        activeStep === index ? 'bg-black w-6' : 'bg-[#CCCCCC]'
                      }`}
                      aria-label={`Go to step ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={onNext}
                  className="text-[#999999] hover:text-black transition-colors p-2"
                  aria-label="Next step"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}