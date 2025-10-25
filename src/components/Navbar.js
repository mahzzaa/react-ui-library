import { useState } from 'react';

const defaultLinks = [
  { label: 'Overview', href: '#' },
  { label: 'Features', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Docs', href: '#' },
];

function ResponsiveNavbar({
  brand = 'FlowFrame',
  brandHref = '#',
  links = defaultLinks,
  variant = 'card',
  className = '',
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isFullWidth = variant === 'full';

  const headerClass = isFullWidth
    ? 'relative sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900/95 text-white backdrop-blur-sm'
    : 'relative mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900 text-white shadow-lg';

  const innerClass = isFullWidth
    ? 'mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4 min-h-16'
    : 'flex w-full items-center justify-between px-6 py-4 min-h-16';

  const mobileMenu = (
    <div className="flex flex-col items-center gap-6 text-center">
      <nav className="flex flex-col items-center gap-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-lg font-medium text-slate-100 hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="flex w-full flex-col items-center gap-3">
        <a
          href="#"
          className="w-full max-w-xs rounded-md border border-blue-400/40 px-4 py-2 text-sm font-semibold text-blue-200 hover:border-blue-300 hover:text-white"
        >
          Log in
        </a>
        <a
          href="#"
          className="w-full max-w-xs rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-400"
        >
          Sign up
        </a>
      </div>
    </div>
  );

  return (
    <header className={[headerClass, className].filter(Boolean).join(' ')}>
      <div className={innerClass}>
        <a href={brandHref} className="text-xl font-semibold">
          {brand}
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-slate-200 hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#"
            className="rounded-md border border-blue-400/30 px-4 py-2 text-sm font-semibold text-blue-200 hover:border-blue-300 hover:text-white"
          >
            Log in
          </a>
          <a
            href="#"
            className="rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-400"
          >
            Sign up
          </a>
        </div>
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-md border border-slate-700 p-2 text-slate-200 hover:border-blue-400/60 hover:text-white md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isFullWidth ? (
        <div
          id="mobile-menu"
          className={`md:hidden absolute inset-x-0 top-full z-40 transition-all duration-200 ease-out ${
            mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <div className="flex h-[calc(100vh-64px)] w-full items-center justify-center overflow-y-auto bg-slate-950/95 px-6 py-10">
            {mobileMenu}
          </div>
        </div>
      ) : (
        mobileOpen && (
          <div id="mobile-menu" className="border-t border-slate-800 bg-slate-900/95 px-6 py-6 md:hidden">
            {mobileMenu}
          </div>
        )
      )}
    </header>
  );
}

export default ResponsiveNavbar;
