import HenyoLogo from '@/components/HenyoLogo';

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com/henyo.digital' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/henyo-digital' },
  { label: 'TikTok', href: '#' },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-black">
      <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-8 md:px-12 md:pt-24 md:pb-12">
        {/* Top Section */}
        <div className="mb-16 md:mb-24">
          {/* Large CTA Text */}
          <h2
            className="mb-8 text-[32px] leading-[1.1] tracking-[-0.02em] text-white md:mb-12 md:text-[56px]"
            style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: 500 }}
          >
            Let's create
            <br />
            something together.
          </h2>
          
          {/* Email CTA */}
          <a
            href="mailto:hello@henyo.digital"
            className="group inline-flex items-center gap-3 text-[18px] text-white/70 transition-colors duration-300 hover:text-white md:text-[22px]"
            style={{ fontFamily: 'Founders Grotesk, Inter' }}
          >
            <span>hello@henyo.digital</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Divider */}
        <div className="mb-8 h-px bg-white/10 md:mb-12" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* Left: Logo + Copyright */}
          <div className="flex flex-col gap-4">
            <HenyoLogo className="h-5 w-auto text-white md:h-6" />
            <p
              className="text-[12px] text-white/40 md:text-[13px]"
              style={{ fontFamily: 'Founders Grotesk, Inter' }}
            >
              © 2025 Henyo Digital
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-6 md:gap-8">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-white/60 transition-colors duration-200 hover:text-white md:text-[14px]"
                style={{ fontFamily: 'Founders Grotesk, Inter' }}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

