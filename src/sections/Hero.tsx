import UnderArmourLogo from '@/components/logos/UnderArmourLogo';
import EssentielAntwerpLogo from '@/components/logos/EssentielAntwerpLogo';
import KomonoLogo from '@/components/logos/KomonoLogo';
import LoopEarplugsLogo from '@/components/logos/LoopEarplugsLogo';
import EssieLogo from '@/components/logos/EssieLogo';
import { LazyVimeoEmbed } from '@/components/LazyVimeoEmbed';

interface HeroProps {
  reelVisible: boolean;
  carouselVisible: boolean;
}

export function Hero({ reelVisible, carouselVisible }: HeroProps) {
  return (
    <section id="overview" className="relative flex h-[85vh] flex-col items-center justify-center md:h-screen">
      {/* Hero Reel - Centered in viewport */}
      <div
        id="reel"
        className="w-full max-w-[748px] px-4 md:max-w-[1307px] md:px-8"
        style={{
          opacity: reelVisible ? 1 : 0,
          transition: 'opacity 800ms ease-out',
        }}
      >
        <LazyVimeoEmbed
          videoId="1132109893"
          title="Henyo Digital Reel"
          fallbackImage="https://images.unsplash.com/photo-1603201667246-3c45012c6d17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHdvcmt8ZW58MXx8fHwxNzY3MTQzNDMyfDA&ixlib=rb-4.1.0&q=80&w=1080"
          className="rounded-[12px] bg-black md:rounded-[20px]"
          style={{ aspectRatio: '16/9' }}
          loadOnVisible={true}
          rootMargin="0px"
        />
      </div>

      {/* Client Logos Carousel - Fixed at bottom of viewport */}
      <div
        className="absolute bottom-0 right-0 left-0 px-[58px] pb-6 md:px-[154px] md:pb-8"
        style={{
          opacity: carouselVisible ? 1 : 0,
          transition: 'opacity 500ms ease-out',
        }}
      >
        <p
          className="mb-4 text-center text-[13px] font-normal text-black md:mb-5 md:text-[14px]"
          style={{ fontFamily: 'Founders Grotesk', fontWeight: 400 }}
        >
          Our work is trusted by
        </p>
        <div className="relative overflow-hidden">
          {/* Fade overlays */}
          <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent md:w-40" />
          <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-32 bg-gradient-to-l from-white to-transparent md:w-40" />

          <div className="flex animate-scroll px-16 md:px-24">
            {/* Three sets for seamless loop */}
            {[1, 2, 3].map((set) => (
              <div
                key={set}
                className="flex flex-shrink-0 items-center gap-16 px-8 opacity-50 md:gap-20 md:px-10"
              >
                <div className="flex h-[18px] items-center md:h-[22px]">
                  <KomonoLogo />
                </div>
                <div className="flex h-[14px] items-center md:h-[18px]">
                  <LoopEarplugsLogo />
                </div>
                <div className="flex h-[22px] items-center md:h-[29px]">
                  <EssieLogo />
                </div>
                <div className="flex h-[25px] items-center md:h-[32px]">
                  <UnderArmourLogo />
                </div>
                <div className="flex h-[18px] items-center md:h-[22px]">
                  <EssentielAntwerpLogo />
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
}

