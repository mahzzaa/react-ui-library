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

  const wrapperClass =
    variant === 'full'
      ? 'w-full border-b border-slate-800 bg-slate-900/90'
      : 'relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-xl';

  const containerClass =
    variant === 'full'
      ? 'flex w-full flex-col'
      : 'mx-auto flex max-w-4xl flex-col';

  return (
    <header className={`${wrapperClass} ${className}`.trim()}>
      <div className={containerClass}>
        <div className="flex items-center justify-between px-6 py-4">
          <a href={brandHref} className="text-xl font-semibold text-white">
            {brand}
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-200 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#"
              className="rounded-md border border-blue-400/30 px-4 py-2 text-sm font-semibold text-blue-200 transition hover:border-blue-300/60 hover:text-white"
            >
              Log in
            </a>
            <a
              href="#"
              className="rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-400"
            >
              Sign up
            </a>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900/90 p-2 text-slate-200 transition hover:border-blue-400/40 hover:text-white md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`grid gap-4 border-t border-slate-800 px-6 py-4 md:hidden transition duration-200 ease-out ${
            mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'
          }`}
        >
          <nav className="grid gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-200 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="grid gap-3">
            <a
              href="#"
              className="w-full rounded-md border border-blue-400/20 px-4 py-2 text-center text-sm font-semibold text-blue-200 transition hover:border-blue-300/50 hover:text-white"
            >
              Log in
            </a>
            <a
              href="#"
              className="w-full rounded-md bg-blue-500 px-4 py-2 text-center text-sm font-semibold text-white shadow-lg transition hover:bg-blue-400"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ResponsiveNavbar;
