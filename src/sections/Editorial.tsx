interface EditorialProps {
  isVisible: boolean;
  textColor: string;
}

const EDITORIAL_TEXT =
  'From brief to final delivery, we bring structure and craft to digital production. Clear timelines, predictable revisions, and premium output—working closely with brands and agencies who need quality at scale.';

export function Editorial({ isVisible, textColor }: EditorialProps) {
  return (
    <section
      id="editorial-text"
      className="w-full px-4 pt-16 pb-8 md:py-48"
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

