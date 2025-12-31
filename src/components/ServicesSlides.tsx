import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

interface ServiceSlide {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  characteristics: {
    duration: string;
    cadence: string;
    deliverables: string;
  };
}

const services: ServiceSlide[] = [
  {
    id: 'digital-campaigns',
    title: 'DIGITAL CAMPAIGNS',
    description: 'High-impact creative for launch moments, seasonal drops, and brand storytelling. Built for platforms, optimized for performance.',
    videoUrl: 'https://player.vimeo.com/video/1132109893?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1',
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
    videoUrl: 'https://player.vimeo.com/video/1135858265?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1',
    characteristics: {
      duration: 'Monthly retainer or quarterly sprints',
      cadence: 'Weekly or bi-weekly deliveries',
      deliverables: 'Social videos, product shots, lifestyle content, UGC-style assets'
    }
  }
];

interface ServicesSlidesProps {
  activeService: number;
  onServiceChange: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

export function ServicesSlides({ activeService, onServiceChange, onNext, onPrev }: ServicesSlidesProps) {
  return (
    <>
      {/* Section Label */}
      <p 
        className="uppercase text-[#999999] mb-16 md:mb-20 text-[18px] md:text-[20px] tracking-[0.08em] text-center"
        style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
      >
        SERVICES
      </p>

      {/* Mobile Layout */}
      <div className="block md:hidden w-full max-w-[680px] mx-auto px-4">
        {/* Service Toggle */}
        <div className="flex items-center justify-center gap-3 mb-12">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => onServiceChange(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeService === index ? 'bg-black w-16' : 'bg-[#CCCCCC] w-2'
              }`}
              aria-label={service.title}
            />
          ))}
        </div>

        {/* Slides Container */}
        <div className="relative">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`transition-opacity duration-700 ${
                activeService === index ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'
              }`}
            >
              {/* Service Title */}
              <h3 
                className="text-[32px] mb-4 leading-[1.15] text-center"
                style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500', letterSpacing: '-0.01em' }}
              >
                {service.title}
              </h3>

              {/* Video Preview */}
              <div className="mb-6">
                <div className="rounded-[12px] overflow-hidden bg-black relative" style={{ aspectRatio: '16/9' }}>
                  <iframe
                    src={service.videoUrl}
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    title={service.title}
                  />
                </div>
              </div>

              {/* Description */}
              <p 
                className="text-[15px] text-[#666666] leading-[1.6] mb-6 text-center" 
                style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '400' }}
              >
                {service.description}
              </p>

              {/* Characteristics */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 justify-center">
                  <div className="w-1 h-1 rounded-full bg-black mt-2.5 flex-shrink-0" />
                  <p 
                    className="text-[14px] text-[#666666]"
                    style={{ fontFamily: 'Founders Grotesk, Inter' }}
                  >
                    <span className="text-black">Duration:</span> {service.characteristics.duration}
                  </p>
                </div>
                <div className="flex items-start gap-3 justify-center">
                  <div className="w-1 h-1 rounded-full bg-black mt-2.5 flex-shrink-0" />
                  <p 
                    className="text-[14px] text-[#666666]"
                    style={{ fontFamily: 'Founders Grotesk, Inter' }}
                  >
                    <span className="text-black">Cadence:</span> {service.characteristics.cadence}
                  </p>
                </div>
                <div className="flex items-start gap-3 justify-center">
                  <div className="w-1 h-1 rounded-full bg-black mt-2.5 flex-shrink-0" />
                  <p 
                    className="text-[14px] text-[#666666]"
                    style={{ fontFamily: 'Founders Grotesk, Inter' }}
                  >
                    <span className="text-black">Deliverables:</span> {service.characteristics.deliverables}
                  </p>
                </div>
              </div>

              {/* Download Button */}
              <div className="flex justify-center">
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
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={onPrev}
            className="text-[#DDDDDD] hover:text-black transition-colors p-1"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => onServiceChange(index)}
                className={`w-1 h-1 rounded-full transition-all duration-300 ${
                  activeService === index ? 'bg-black w-4' : 'bg-[#DDDDDD]'
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={onNext}
            className="text-[#DDDDDD] hover:text-black transition-colors p-1"
            aria-label="Next service"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block w-full px-12">
        {/* Service Toggle - Top Left aligned with logo */}
        <div className="flex items-start mb-16">
          <div className="space-y-6">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => onServiceChange(index)}
                className="flex items-center gap-4 transition-all"
              >
                <div className="relative">
                  <div 
                    className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                      activeService === index 
                        ? 'bg-black border-black scale-150' 
                        : 'bg-white border-black/20'
                    }`}
                  />
                  {index < services.length - 1 && (
                    <div 
                      className={`absolute top-3 left-[5.5px] w-[1px] h-6 transition-colors duration-300 ${
                        activeService > index ? 'bg-[#666666]' : 'bg-black/10'
                      }`}
                    />
                  )}
                </div>
                <span 
                  className={`text-[13px] tracking-[0.08em] uppercase transition-colors duration-300 whitespace-nowrap ${
                    activeService === index ? 'text-black' : 'text-[#CCCCCC]'
                  }`}
                  style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
                >
                  {service.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Below - Video Left, Copy Right */}
        <div className="flex items-start gap-20">
          {/* Left: Video - 55vw width (10% bigger) */}
          <div className="flex-shrink-0 relative" style={{ width: '55vw' }}>
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`transition-opacity duration-700 ${
                  activeService === index ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'
                }`}
              >
                <div className="rounded-[20px] overflow-hidden bg-black relative" style={{ aspectRatio: '16/9' }}>
                  <iframe
                    src={service.videoUrl}
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    title={service.title}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right: Copy and Button */}
          <div className="flex-1 pt-2" style={{ maxWidth: '500px' }}>
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`transition-opacity duration-700 ${
                  activeService === index ? 'opacity-100 relative' : 'opacity-0 absolute pointer-events-none'
                }`}
              >
                {/* Service Title */}
                <h3 
                  className="text-[46px] mb-6 leading-[1.1]"
                  style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500', letterSpacing: '-0.01em' }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-[17px] text-[#666666] leading-[1.6] mb-10" 
                  style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '400' }}
                >
                  {service.description}
                </p>

                {/* Characteristics */}
                <div className="space-y-4 mb-12">
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-black mt-2.5 flex-shrink-0" />
                    <p 
                      className="text-[15px] text-[#666666]"
                      style={{ fontFamily: 'Founders Grotesk, Inter' }}
                    >
                      <span className="text-black">Duration:</span> {service.characteristics.duration}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-black mt-2.5 flex-shrink-0" />
                    <p 
                      className="text-[15px] text-[#666666]"
                      style={{ fontFamily: 'Founders Grotesk, Inter' }}
                    >
                      <span className="text-black">Cadence:</span> {service.characteristics.cadence}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-black mt-2.5 flex-shrink-0" />
                    <p 
                      className="text-[15px] text-[#666666]"
                      style={{ fontFamily: 'Founders Grotesk, Inter' }}
                    >
                      <span className="text-black">Deliverables:</span> {service.characteristics.deliverables}
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
            ))}

            {/* Navigation Controls - Desktop */}
            <div className="flex items-center gap-5 mt-12">
              <button
                onClick={onPrev}
                className="text-[#DDDDDD] hover:text-black transition-colors p-1"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => onServiceChange(index)}
                    className={`w-1 h-1 rounded-full transition-all duration-300 ${
                      activeService === index ? 'bg-black w-4' : 'bg-[#DDDDDD]'
                    }`}
                    aria-label={`Go to service ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={onNext}
                className="text-[#DDDDDD] hover:text-black transition-colors p-1"
                aria-label="Next service"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}