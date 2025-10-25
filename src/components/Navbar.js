import { useEffect, useState } from 'react';

const defaultLinks = [
  { label: 'Overview', href: '/' },
  { label: 'Features', href: '/' },
  { label: 'Pricing', href: '/' },
  { label: 'Docs', href: '/' },
];

function ResponsiveNavbar({
  brand = 'FlowFrame',
  brandHref = '/',
  links = defaultLinks,
  variant = 'card',
  className = '',
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const isFullWidth = variant === 'full';

  const headerClass = isFullWidth
    ? 'relative sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900/95 text-white backdrop-blur-sm'
    : 'relative mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900 text-white shadow-lg';

  const innerClass = isFullWidth
    ? 'mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4 min-h-16'
    : 'flex w-full items-center justify-between px-6 py-4 min-h-16';

  const toggleDropdown = (label) => {
    setActiveDropdown((currentLabel) => (currentLabel === label ? null : label));
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const openDropdown = (label) => {
    setActiveDropdown(label);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const handleMobileLinkClick = () => {
    closeMobileMenu();
    closeDropdown();
  };

  useEffect(() => {
    if (!mobileOpen) {
      closeDropdown();
    }
  }, [mobileOpen]);

  useEffect(() => {
    if (!activeDropdown) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeDropdown();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeDropdown]);

  const mobileMenu = (
    <div className="flex flex-col items-center gap-6 text-center">
      <nav className="flex w-full flex-col gap-4">
        {links.map((link) => {
          const hasDropdown = Array.isArray(link.items) && link.items.length > 0;

          if (!hasDropdown) {
            return (
              <a
                key={link.label}
                href={link.href}
                className="text-lg font-medium text-slate-100 hover:text-white"
                onClick={handleMobileLinkClick}
              >
                {link.label}
              </a>
            );
          }

          const isOpen = activeDropdown === link.label;

          return (
            <div key={link.label} className="w-full text-left">
              <button
                type="button"
                onClick={() => toggleDropdown(link.label)}
                className="flex w-full items-center justify-between rounded-lg border border-slate-800/60 bg-slate-900/70 px-4 py-3 text-left text-lg font-medium text-slate-100 hover:border-blue-400/60 hover:text-white"
                aria-expanded={isOpen}
              >
                <span>{link.label}</span>
                <svg
                  className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180 text-blue-300' : 'text-slate-400'}`}
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 8l4 4 4-4" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ease-out ${
                  isOpen ? 'mt-3 max-h-80 opacity-100' : 'mt-0 max-h-0 opacity-0'
                }`}
              >
                <div className="flex flex-col gap-2 rounded-lg border border-slate-800/60 bg-slate-900/80 p-3">
                  {link.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-left text-sm font-semibold text-slate-200 hover:bg-slate-800/70 hover:text-white"
                      onClick={handleMobileLinkClick}
                    >
                      <span>{item.label}</span>
                      {item.description && (
                        <span className="mt-1 block text-xs font-normal text-slate-400">{item.description}</span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </nav>
      <div className="flex w-full flex-col items-center gap-3">
        <a
          href="/"
          className="w-full max-w-xs rounded-md border border-blue-400/40 px-4 py-2 text-sm font-semibold text-blue-200 hover:border-blue-300 hover:text-white"
        >
          Log in
        </a>
        <a
          href="/"
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
        <nav className="items-center hidden gap-6 md:flex">
          {links.map((link) => {
            const hasDropdown = Array.isArray(link.items) && link.items.length > 0;

            if (!hasDropdown) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-200 transition hover:text-white"
                >
                  {link.label}
                </a>
              );
            }

            const isOpen = activeDropdown === link.label;

            return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => openDropdown(link.label)}
                onMouseLeave={(event) => {
                  const next = event.relatedTarget;
                  if (!next || !event.currentTarget.contains(next)) {
                    closeDropdown();
                  }
                }}
                onFocus={() => openDropdown(link.label)}
                onBlur={(event) => {
                  const next = event.relatedTarget;
                  if (!next || !event.currentTarget.contains(next)) {
                    closeDropdown();
                  }
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdown(link.label)}
                  className={`inline-flex items-center gap-1 text-sm font-medium transition ${
                    isOpen ? 'text-white' : 'text-slate-200 hover:text-white'
                  }`}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                >
                  <span>{link.label}</span>
                  <svg
                    className={`h-3.5 w-3.5 transition-transform ${
                      isOpen ? 'rotate-180 text-blue-300' : 'text-slate-400'
                    }`}
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 8l4 4 4-4" />
                  </svg>
                </button>
                <div
                  className={`absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 transition-all duration-150 ${
                    isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
                  }`}
                >
                  <div className="rounded-xl border border-slate-800/70 bg-slate-900/95 p-4 shadow-xl backdrop-blur">
                    <div className="flex flex-col gap-2">
                      {link.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-blue-500/40 hover:bg-slate-800/80 hover:text-white"
                          onClick={closeDropdown}
                        >
                          <span>{item.label}</span>
                          {item.description && (
                            <span className="mt-1 block text-xs font-normal text-slate-400">{item.description}</span>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>
        <div className="items-center hidden gap-3 md:flex">
          <a
            href="/"
            className="px-4 py-2 text-sm font-semibold text-blue-200 border rounded-md border-blue-400/30 hover:border-blue-300 hover:text-white"
          >
            Log in
          </a>
          <a
            href="/"
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-400"
          >
            Sign up
          </a>
        </div>
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex items-center justify-center p-2 border rounded-md border-slate-700 text-slate-200 hover:border-blue-400/60 hover:text-white md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div id="mobile-menu" className="px-6 py-6 border-t border-slate-800 bg-slate-900/95 md:hidden">
            {mobileMenu}
          </div>
        )
      )}
    </header>
  );
}

export default ResponsiveNavbar;
