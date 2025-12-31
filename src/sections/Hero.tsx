import { LazyVimeoEmbed } from '@/components/LazyVimeoEmbed';
import HenyoLogo from '@/components/HenyoLogo';

interface HeroProps {
  reelVisible: boolean;
}

export function Hero({ reelVisible }: HeroProps) {
  return (
    <section id="overview" className="relative flex min-h-[auto] flex-col items-center pt-24 pb-8 md:h-screen md:justify-center md:pt-0 md:pb-0">
      {/* Mobile Hero Header - Logo + Description */}
      <div
        className="mb-8 flex flex-col items-center px-6 text-center md:hidden"
        style={{
          opacity: reelVisible ? 1 : 0,
          transition: 'opacity 800ms ease-out',
        }}
      >
        <HenyoLogo className="mb-6 h-[20px] w-auto text-black" />
        <p
          className="max-w-[280px] text-[15px] leading-[1.5] text-[#666666]"
          style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: 400 }}
        >
          Creative production studio for digital campaigns and always-on content.
        </p>
      </div>

      {/* Hero Reel */}
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
    </section>
  );
}

