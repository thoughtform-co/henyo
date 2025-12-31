import { LazyVimeoEmbed } from '@/components/LazyVimeoEmbed';
import UnderArmourLogo from '@/components/logos/UnderArmourLogo';
import EssentielAntwerpLogo from '@/components/logos/EssentielAntwerpLogo';
import KomonoLogo from '@/components/logos/KomonoLogo';
import LoopEarplugsLogo from '@/components/logos/LoopEarplugsLogo';
import EssieLogo from '@/components/logos/EssieLogo';

interface HeroProps {
  reelVisible: boolean;
}

export function Hero({ reelVisible }: HeroProps) {
  return (
    <section id="overview" className="relative flex h-screen min-h-[600px] flex-col items-center justify-between pt-24 pb-20 overflow-hidden">
      {/* Hero Reel - Scaled to fit available height */}
      <div
        id="reel"
        className="w-full max-w-[748px] px-4 md:max-w-[1250px] md:px-8 flex-1 flex items-center justify-center"
        style={{
          opacity: reelVisible ? 1 : 0,
          transition: 'opacity 800ms ease-out',
        }}
      >
        <div className="w-full relative">
          <LazyVimeoEmbed
            videoId="1132109893"
            title="Henyo Digital Reel"
            fallbackImage="https://images.unsplash.com/photo-1603201667246-3c45012c6d17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHdvcmt8ZW58MXx8fHwxNzY3MTQzNDMyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            className="rounded-[12px] bg-black md:rounded-[20px] shadow-2xl"
            style={{ aspectRatio: '16/9' }}
            loadOnVisible={true}
            rootMargin="0px"
          />
        </div>
      </div>

      {/* Social Proof - Anchored lower */}
      <div
        className="w-full max-w-[900px] px-4 mt-auto"
        style={{
          opacity: reelVisible ? 1 : 0,
          transition: 'opacity 800ms ease-out 200ms',
        }}
      >
        <p
          className="mb-4 text-center text-[11px] uppercase tracking-[0.15em] text-[#999999] md:text-[12px]"
          style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: 500 }}
        >
          Trusted by
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll px-16 md:px-24">
            {[1, 2, 3].map((set) => (
              <div
                key={set}
                className="flex flex-shrink-0 items-center gap-12 px-8 opacity-40 md:gap-20 md:px-10"
              >
                <div className="flex h-[16px] items-center md:h-[20px]"><KomonoLogo /></div>
                <div className="flex h-[12px] items-center md:h-[16px]"><LoopEarplugsLogo /></div>
                <div className="flex h-[20px] items-center md:h-[26px]"><EssieLogo /></div>
                <div className="flex h-[22px] items-center md:h-[28px]"><UnderArmourLogo /></div>
                <div className="flex h-[16px] items-center md:h-[20px]"><EssentielAntwerpLogo /></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vertical Scroll Indicator */}
      <div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{
          opacity: reelVisible ? 1 : 0,
          transition: 'opacity 800ms ease-out 400ms',
        }}
      >
        <div className="w-[1px] h-12 bg-black/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black animate-scroll-line" />
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scroll-line {
          animation: scroll-line 2s cubic-bezier(0.76, 0, 0.24, 1) infinite;
        }
      `}</style>
    </section>
  );
}

