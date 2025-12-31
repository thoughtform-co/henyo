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
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="w-full px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto">
      {/* Section Label */}
      <p 
        className="uppercase text-[#999999] mb-10 text-[12px] md:text-[13px] tracking-[0.2em] text-center"
        style={{ fontFamily: "'Founders Grotesk', sans-serif", fontWeight: '500' }}
      >
        SERVICES
      </p>

      {/* Horizontal Tabs */}
      <div className="flex justify-center gap-10 md:gap-16 mb-16">
        {services.map((service, index) => (
          <button
            key={service.id}
            onClick={() => setActiveService(index)}
            className="group relative transition-all"
          >
            <span 
              className={`text-[12px] md:text-[13px] tracking-[0.15em] uppercase transition-colors duration-500 ${
                activeService === index ? 'text-black' : 'text-[#CCCCCC] hover:text-[#999999]'
              }`}
              style={{ fontFamily: "'Founders Grotesk', sans-serif", fontWeight: '500' }}
            >
              {service.title}
            </span>
            {activeService === index && (
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-black transition-all duration-300" />
            )}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="relative min-h-[500px]">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`transition-all duration-700 ${
              activeService === index 
                ? 'opacity-100 translate-y-0 relative' 
                : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
            }`}
          >
            <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
              {/* Left: Video */}
              <div className="w-full md:w-[55%] lg:w-[60%] flex-shrink-0">
                <div className="rounded-[20px] overflow-hidden bg-black relative" style={{ aspectRatio: '16/9' }}>
                  <LazyBackgroundVideo
                    videoId={service.videoId}
                    className="absolute inset-0"
                    rootMargin="200px"
                  />
                </div>
              </div>

              {/* Right: Copy */}
              <div className="flex-1 pt-2">
                <h3 
                  className="text-[32px] lg:text-[36px] mb-6 leading-[1.1] text-black"
                  style={{ fontFamily: "'Founders Grotesk', sans-serif", fontWeight: '500', letterSpacing: '-0.01em' }}
                >
                  {service.title}
                </h3>

                <p 
                  className="text-[16px] lg:text-[17px] text-[#666666] leading-[1.6] mb-10 max-w-[480px]" 
                  style={{ fontFamily: "'Founders Grotesk', sans-serif", fontWeight: '400' }}
                >
                  {service.description}
                </p>

                {/* Characteristics */}
                <div className="space-y-4 mb-12">
                  {Object.entries(service.characteristics).map(([key, value]) => (
                    <div key={key} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-black mt-2.5 flex-shrink-0" />
                      <p 
                        className="text-[14px] lg:text-[15px] text-[#666666]"
                        style={{ fontFamily: "'Founders Grotesk', sans-serif" }}
                      >
                        <span className="text-black font-medium capitalize">{key}:</span> {value}
                      </p>
                    </div>
                  ))}
                </div>

                <button 
                  className="group flex items-center gap-2.5 border border-black/10 rounded-full px-6 h-[48px] hover:bg-black hover:text-white transition-all duration-300"
                  style={{ fontFamily: "'Founders Grotesk', sans-serif", fontWeight: '500' }}
                >
                  <Download className="w-4 h-4" />
                  <span className="text-[13px] tracking-[0.05em] uppercase">
                    Download Pricing
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}