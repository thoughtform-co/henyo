import { useState } from 'react';
import { Download } from 'lucide-react';
import { LazyBackgroundVideo } from './LazyVimeoEmbed';

interface Service {
  id: string;
  title: string;
  description: string;
  videoId: string;
  characteristics: {
    duration: string;
    cadence: string;
    deliverables: string;
  };
}

const services: Service[] = [
  {
    id: 'digital-campaigns',
    title: 'DIGITAL CAMPAIGNS',
    description: 'High-impact creative for launch moments, seasonal drops, and brand storytelling. Built for platforms, optimized for performance.',
    videoId: '1132109893',
    characteristics: {
      duration: '2-6 weeks per campaign',
      cadence: 'Project-based, seasonal',
      deliverables: 'Hero videos, stills, social cutdowns, platform variants'
    }
  },
  {
    id: 'always-on',
    title: 'ALWAYS-ON CONTENT',
    description: 'Continuous content production for social feeds, product launches, and brand presence. Consistent quality, scalable volume.',
    videoId: '1135858265',
    characteristics: {
      duration: 'Monthly retainer or quarterly sprints',
      cadence: 'Weekly or bi-weekly deliveries',
      deliverables: 'Social videos, product shots, lifestyle content, UGC-style assets'
    }
  }
];

interface ServicesSlidesProps {
  isVisible?: boolean;
}

export function ServicesSlides({ isVisible = true }: ServicesSlidesProps) {
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);
  return (
    <>
      {/* Section Label */}
      <p 
        className="uppercase text-[#999999] mb-16 md:mb-20 text-[18px] md:text-[20px] tracking-[0.08em] text-center"
        style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
      >
        SERVICES
      </p>

      {/* Mobile Layout - Stacked */}
      <div className="block md:hidden w-full max-w-[680px] mx-auto px-4 space-y-8">
        {services.map((service, index) => (
          <ServicePanel
            key={service.id}
            service={service}
            index={index}
            isMobile={true}
            isVisible={isVisible}
          />
        ))}
      </div>

      {/* Desktop Layout - Split View */}
      <div className="hidden md:block w-full px-8 lg:px-12">
        <div className="flex gap-0 min-h-[80vh]">
          {services.map((service, index) => (
            <ServicePanel
              key={service.id}
              service={service}
              index={index}
              isMobile={false}
              isHovered={hoveredPanel === index}
              onMouseEnter={() => setHoveredPanel(index)}
              onMouseLeave={() => setHoveredPanel(null)}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </>
  );
}

interface ServicePanelProps {
  service: Service;
  index: number;
  isMobile: boolean;
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isVisible?: boolean;
}

function ServicePanel({
  service,
  index,
  isMobile,
  isHovered = false,
  onMouseEnter,
  onMouseLeave,
  isVisible = true,
}: ServicePanelProps) {
  const animationDelay = index * 150; // Staggered entrance

  if (isMobile) {
    return (
      <div
        className="relative rounded-[16px] overflow-hidden bg-black"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: `opacity 800ms ease-out ${animationDelay}ms, transform 800ms ease-out ${animationDelay}ms`,
        }}
      >
        {/* Video Background */}
        <div className="relative w-full" style={{ aspectRatio: '16/9', minHeight: '300px' }}>
          <LazyBackgroundVideo
            videoId={service.videoId}
            className="absolute inset-0"
            rootMargin="100px"
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            {/* Title */}
            <h3 
              className="text-[40px] mb-3 leading-[1.1] text-white"
              style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500', letterSpacing: '-0.01em' }}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p 
              className="text-[15px] text-white/90 leading-[1.6] mb-4" 
              style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '400' }}
            >
              {service.description}
            </p>

            {/* Characteristics */}
            <div className="space-y-2 mb-6">
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-white mt-2.5 flex-shrink-0" />
                <p 
                  className="text-[13px] text-white/80"
                  style={{ fontFamily: 'Founders Grotesk, Inter' }}
                >
                  <span className="text-white font-medium">Duration:</span> {service.characteristics.duration}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-white mt-2.5 flex-shrink-0" />
                <p 
                  className="text-[13px] text-white/80"
                  style={{ fontFamily: 'Founders Grotesk, Inter' }}
                >
                  <span className="text-white font-medium">Cadence:</span> {service.characteristics.cadence}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-white mt-2.5 flex-shrink-0" />
                <p 
                  className="text-[13px] text-white/80"
                  style={{ fontFamily: 'Founders Grotesk, Inter' }}
                >
                  <span className="text-white font-medium">Deliverables:</span> {service.characteristics.deliverables}
                </p>
              </div>
            </div>

            {/* Download Button */}
            <button 
              className="group flex items-center gap-2.5 border border-white/30 rounded-full px-6 h-[48px] bg-white/10 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 text-white self-start"
              style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
            >
              <Download className="w-4 h-4" />
              <span className="text-[14px] tracking-[0.05em] uppercase">
                Download Pricing
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Desktop split view
  return (
    <div
      className="relative flex-1 overflow-hidden transition-all duration-500 ease-out cursor-pointer"
      style={{
        flex: isHovered ? '1.2' : '0.8',
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? `translateX(0) scale(${isHovered ? 1.02 : 1})` 
          : `translateX(${index === 0 ? '-20px' : '20px'}) scale(0.98)`,
        transition: `flex 500ms ease-out, opacity 800ms ease-out ${animationDelay}ms, transform 800ms ease-out ${animationDelay}ms`,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Video Background - Full Bleed */}
      <div className="absolute inset-0">
        <LazyBackgroundVideo
          videoId={service.videoId}
          className="absolute inset-0"
          style={{ 
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 500ms ease-out',
          }}
          rootMargin="200px"
        />
      </div>

      {/* Dark Overlay - Adjusts on hover */}
      <div 
        className="absolute inset-0 bg-black/40 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.2 : 0.5,
        }}
      />

      {/* Content Overlay - Glassmorphic */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
        <div 
          className="bg-white/90 backdrop-blur-md rounded-[20px] p-8 lg:p-10 max-w-[520px] transition-all duration-500"
          style={{
            transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
            opacity: isHovered ? 1 : 0.95,
          }}
        >
          {/* Title - Dramatic Typography */}
          <h3 
            className="text-[56px] lg:text-[64px] mb-6 leading-[1.05] text-black"
            style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500', letterSpacing: '-0.02em' }}
          >
            {service.title}
          </h3>

          {/* Description */}
          <p 
            className="text-[17px] lg:text-[18px] text-[#666666] leading-[1.6] mb-8" 
            style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '400' }}
          >
            {service.description}
          </p>

          {/* Characteristics */}
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-1 h-1 rounded-full bg-black mt-2.5 flex-shrink-0" />
              <p 
                className="text-[15px] text-[#666666]"
                style={{ fontFamily: 'Founders Grotesk, Inter' }}
              >
                <span className="text-black font-medium">Duration:</span> {service.characteristics.duration}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1 h-1 rounded-full bg-black mt-2.5 flex-shrink-0" />
              <p 
                className="text-[15px] text-[#666666]"
                style={{ fontFamily: 'Founders Grotesk, Inter' }}
              >
                <span className="text-black font-medium">Cadence:</span> {service.characteristics.cadence}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1 h-1 rounded-full bg-black mt-2.5 flex-shrink-0" />
              <p 
                className="text-[15px] text-[#666666]"
                style={{ fontFamily: 'Founders Grotesk, Inter' }}
              >
                <span className="text-black font-medium">Deliverables:</span> {service.characteristics.deliverables}
              </p>
            </div>
          </div>

          {/* Download Button */}
          <button 
            className="group flex items-center gap-2.5 border border-black/10 rounded-full px-6 h-[48px] hover:bg-black hover:text-white transition-all duration-300"
            style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
          >
            <Download className="w-4 h-4" />
            <span className="text-[14px] tracking-[0.05em] uppercase">
              Download Pricing
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}