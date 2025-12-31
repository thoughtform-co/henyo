import UnderArmourLogo from '@/components/logos/UnderArmourLogo';
import EssentielAntwerpLogo from '@/components/logos/EssentielAntwerpLogo';
import KomonoLogo from '@/components/logos/KomonoLogo';
import LoopEarplugsLogo from '@/components/logos/LoopEarplugsLogo';
import EssieLogo from '@/components/logos/EssieLogo';

interface SocialProofProps {
  isVisible: boolean;
}

export function SocialProof({ isVisible }: SocialProofProps) {
  return (
    <section
      className="mx-auto w-full max-w-[748px] px-4 pb-16 md:max-w-[900px] md:pb-24"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 500ms ease-out',
      }}
    >
      <p
        className="mb-4 text-center text-[11px] uppercase tracking-[0.15em] text-[#999999] md:text-[12px]"
        style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: 500 }}
      >
        Trusted by
      </p>
      <div className="relative overflow-hidden rounded-[12px]">
        {/* Fade overlays */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent md:w-40" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-24 bg-gradient-to-l from-white to-transparent md:w-40" />

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
    </section>
  );
}

