import { useCases, type UseCase } from '@/content/use-cases';
import { useIsMobile } from '@/hooks';
import { LazyBackgroundVideo } from '@/components/LazyVimeoEmbed';

interface UseCasesProps {
  isVisible: boolean;
  titleVisible: boolean;
  onOpenCase: (index: number) => void;
}

export function UseCases({ isVisible, titleVisible, onOpenCase }: UseCasesProps) {
  const isMobile = useIsMobile();

  return (
    <section id="use-cases" className="min-h-screen w-full pt-24 pb-32 md:pt-32 md:pb-48">
      {/* Section Header */}
      <div
        className="mx-auto mb-16 max-w-[900px] px-4 text-center md:mb-20 md:px-8"
        style={{
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 600ms ease-out, transform 600ms ease-out',
        }}
      >
        <p
          className="mb-10 text-[18px] uppercase tracking-[0.08em] text-[#999999] md:mb-12 md:text-[20px]"
          style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
        >
          USE CASES
        </p>

        <div className="mx-auto max-w-[600px]">
          <p
            className="mb-0 text-[18px] leading-[1.55] text-[#888888] md:text-[20px]"
            style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '400' }}
          >
            Our use cases are the results of a single production system.
            <br />
            Built to work with both in-house brand teams and agencies.
          </p>
        </div>
      </div>

      <div
        className="transition-all duration-1000 ease-out"
        style={{
          transform: isVisible ? 'scale(1)' : 'scale(0.96)',
          opacity: isVisible ? 1 : 0.7,
        }}
      >
        <div className="relative overflow-hidden">
          <div className="animate-use-cases-scroll flex gap-4 px-8 md:gap-3 md:px-12">
            {/* First set of use cases */}
            {useCases.map((useCase, index) => (
              <UseCaseCard
                key={`set1-${useCase.vimeoId}-${index}`}
                useCase={useCase}
                index={index}
                isMobile={isMobile}
                onOpenCase={onOpenCase}
              />
            ))}
            {/* Second set for seamless loop */}
            {useCases.map((useCase, index) => (
              <UseCaseCard
                key={`set2-${useCase.vimeoId}-${index}`}
                useCase={useCase}
                index={index}
                isMobile={isMobile}
                onOpenCase={onOpenCase}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes use-cases-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-use-cases-scroll {
          animation: use-cases-scroll 33.3s linear infinite;
        }
      `}</style>
    </section>
  );
}

interface UseCaseCardProps {
  useCase: UseCase;
  index: number;
  isMobile: boolean;
  onOpenCase: (index: number) => void;
}

function UseCaseCard({ useCase, index, isMobile, onOpenCase }: UseCaseCardProps) {
  const LogoComponent = useCase.logo;

  // Calculate logo scale
  let logoScale = 1.04;
  if (useCase.vimeoId === '1135858265' || useCase.vimeoId === '1132109785') logoScale = 0.936;
  if (useCase.vimeoId === '1149580716') logoScale = 1.144;
  if (useCase.vimeoId === '1149581375') logoScale = 1.248;
  if (useCase.vimeoId === '1150581300') logoScale = 0.76;

  return (
    <div className="w-[280px] flex-shrink-0 md:w-[421px]">
      <div className="relative overflow-hidden rounded-[12px] border border-black/5 bg-[#F8F8F8] md:rounded-[16px]">
        {/* 4x5 aspect ratio = 125% padding */}
        <div className="relative w-full" style={{ paddingBottom: '125%' }}>
          {/* Lazy-loaded video with fallback */}
          <LazyBackgroundVideo
            videoId={useCase.vimeoId}
            fallbackImage={useCase.fallbackImage}
            className="absolute inset-0"
            style={{
              width: useCase.vimeoId === '1132109785' ? 'auto' : '100%',
              height: '100%',
              minWidth: useCase.vimeoId === '1132109785' ? '177.78%' : '100%',
              left: useCase.vimeoId === '1132109785' ? '50%' : '0',
              transform: useCase.vimeoId === '1132109785' ? 'translateX(-50%)' : 'none',
            }}
            rootMargin="100px"
          />

          {/* Two-Part Overlay - Top Left */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-2 md:top-4 md:left-4">
            {/* Box 1: Client Logo */}
            <div
              className="flex items-center justify-center rounded-lg bg-white/70 px-3 py-2 backdrop-blur-md md:px-4 md:py-2.5"
              style={{ minHeight: '36px' }}
            >
              <div
                style={{
                  filter: 'brightness(0) saturate(100%) opacity(0.4)',
                  transform: `scale(${isMobile ? logoScale * 0.75 : logoScale * 0.9})`,
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <LogoComponent />
              </div>
            </div>

            {/* Box 2: Work Type Label */}
            <div
              className="flex items-center rounded-lg bg-white/70 px-3 py-2 backdrop-blur-md md:px-4 md:py-2.5"
              style={{ minHeight: '36px' }}
            >
              <span
                className="whitespace-nowrap text-[13px] text-[#666666] md:text-[14px]"
                style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
              >
                {useCase.workType}
              </span>
            </div>
          </div>

          {/* More Details Button - Bottom Right */}
          <div className="absolute right-3 bottom-3 z-10 md:right-4 md:bottom-4">
            <button
              onClick={() => onOpenCase(index)}
              className="rounded-full bg-white px-4 py-2 text-[11px] uppercase tracking-[0.04em] text-black transition-all duration-300 hover:bg-black/5 md:px-5 md:py-2.5 md:text-[12px]"
              style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
            >
              More details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

