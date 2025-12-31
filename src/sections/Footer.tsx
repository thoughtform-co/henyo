import HenyoLogo from '@/components/HenyoLogo';

export function Footer() {
  return (
    <footer id="contact" style={{ backgroundColor: '#3A3A3A' }}>
      <div className="w-full px-6 pt-12 pb-8 md:px-16 md:pt-16 md:pb-10">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-20">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Logo */}
            <div className="mb-8 md:mb-10">
              <HenyoLogo className="h-6 w-auto text-white md:h-7" />
            </div>

            {/* Newsletter Subscription */}
            <div className="mb-8 max-w-[320px] md:mb-10">
              <p
                className="mb-4 text-[13px] leading-[1.5] text-white md:text-[14px]"
                style={{ fontFamily: 'Founders Grotesk, Inter' }}
              >
                Subscribe to our newsletter
                <br />
                and stay in touch with us
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="hello@yourgi-media.com"
                  className="flex-1 border border-white/40 bg-transparent px-4 py-2.5 text-[13px] text-white transition-colors placeholder:text-white/40 focus:border-white focus:outline-none"
                  style={{ fontFamily: 'Founders Grotesk, Inter' }}
                />
                <button
                  className="bg-white px-5 py-2.5 text-[12px] text-[#3A3A3A] transition-all duration-200 hover:bg-white/90"
                  style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Contact Email */}
            <div className="mb-auto">
              <a
                href="mailto:hello@henyo.digital"
                className="text-[14px] text-white/70 transition-colors duration-200 hover:text-white md:text-[15px]"
                style={{ fontFamily: 'Founders Grotesk, Inter' }}
              >
                hello@henyo.digital
              </a>
            </div>

            {/* Copyright */}
            <div className="mt-12 md:mt-16">
              <p
                className="text-[11px] text-white/50 md:text-[12px]"
                style={{ fontFamily: 'Founders Grotesk, Inter' }}
              >
                2025 © Henyo Digital All Rights Reserved
              </p>
            </div>
          </div>

          {/* Right Column - Social */}
          <div className="flex flex-col">
            <p
              className="mb-4 text-[11px] uppercase tracking-[0.08em] text-white/60 md:mb-6 md:text-[12px]"
              style={{ fontFamily: 'Founders Grotesk, Inter', fontWeight: '500' }}
            >
              Social
            </p>
            <div className="flex flex-col gap-2.5 md:gap-3">
              {[
                { label: 'INSTAGRAM', href: 'https://instagram.com/henyo.digital' },
                { label: 'LINKEDIN', href: 'https://www.linkedin.com/company/henyo-digital' },
                { label: 'TIKTOK', href: '#' },
                { label: 'WHATSAPP', href: '#' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] uppercase text-white transition-colors duration-200 hover:text-white/70 md:text-[14px]"
                  style={{ fontFamily: 'Founders Grotesk, Inter' }}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

