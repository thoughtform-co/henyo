interface EditorialProps {
  isVisible: boolean;
  textColor: string;
}

const EDITORIAL_TEXT =
  'Henyo is a creative production studio combining creative direction, hybrid AI workflows, CGI, and post-production into a clear, structured production system. We work closely with in-house teams and agencies to deliver digital campaigns and always-on content, maintaining full visibility and control from brief through approved delivery.';

export function Editorial({ isVisible, textColor }: EditorialProps) {
  return (
    <section
      id="editorial-text"
      className="w-full px-4 pt-12 pb-12 md:pt-16 md:pb-16"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 800ms ease-out',
      }}
    >
      <div className="mx-auto max-w-[720px]">
        <p
          className="text-center"
          style={{
            fontFamily: "'Founders Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(22px, 3vw, 32px)',
            lineHeight: '1.4',
            letterSpacing: '-0.01em',
            color: textColor,
            transition: 'color 600ms ease-out',
          }}
        >
          {EDITORIAL_TEXT}
        </p>
      </div>
    </section>
  );
}

