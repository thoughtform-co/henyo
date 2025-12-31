import { LazyVimeoEmbed } from '@/components/LazyVimeoEmbed';

interface HeroProps {
  reelVisible: boolean;
}

export function Hero({ reelVisible }: HeroProps) {
  return (
    <section id="overview" className="relative flex min-h-[auto] flex-col items-center pt-24 pb-8 md:pt-32 md:pb-12">
      {/* Hero Description */}
      <div
        className="mb-8 px-6 text-center md:mb-12"
        style={{
          opacity: reelVisible ? 1 : 0,
          transition: 'opacity 800ms ease-out',
        }}
      >
        <p
          className="max-w-[300px] text-[15px] leading-[1.5] text-[#666666] md:max-w-[460px] md:text-[17px]"
          style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: 400 }}
        >
          Henyo Digital is a creative production studio blending CGI, AI, and human craft for digital campaigns.
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

