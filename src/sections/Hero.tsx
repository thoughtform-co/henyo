import { LazyVimeoEmbed } from '@/components/LazyVimeoEmbed';

interface HeroProps {
  reelVisible: boolean;
}

export function Hero({ reelVisible }: HeroProps) {
  return (
    <section id="overview" className="relative flex h-[60vh] flex-col items-center justify-center md:h-screen">
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
    </section>
  );
}

