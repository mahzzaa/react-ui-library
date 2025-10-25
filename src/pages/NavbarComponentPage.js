import { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Overview', href: '#' },
  { label: 'Features', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Docs', href: '#' },
];

function ResponsiveNavbarPreview() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-xl">
      <div className="mx-auto flex max-w-4xl flex-col">
        <div className="flex items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-semibold text-white">
            FlowFrame
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
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
          className={`grid gap-4 border-t border-slate-800 px-6 py-4 md:hidden ${
            mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'
          } transition duration-200 ease-out`}
        >
          <nav className="grid gap-3">
            {navLinks.map((link) => (
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

function NavbarComponentPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-16">
        <div className="space-y-4 text-start">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
            Navigation component
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Responsive Navbar
          </h1>
          <p className="text-lg text-slate-300">
            Sticky top navigation featuring primary links, authentication CTA buttons, and a
            collapsible mobile drawer. Built with Tailwind utility classes so you can adapt it in
            seconds.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/yourusername/responsive-navbar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M12 .5a12 12 0 00-3.793 23.406c.6.112.793-.262.793-.583 0-.288-.011-1.243-.017-2.256-3.227.701-3.906-1.555-3.906-1.555-.546-1.389-1.333-1.76-1.333-1.76-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.492.998.108-.775.419-1.305.762-1.605-2.574-.293-5.283-1.287-5.283-5.731 0-1.266.452-2.302 1.194-3.114-.12-.293-.517-1.475.113-3.073 0 0 .972-.312 3.186 1.188a11.1 11.1 0 015.8 0c2.214-1.5 3.185-1.188 3.185-1.188.631 1.598.234 2.78.114 3.073.744.812 1.193 1.848 1.193 3.114 0 4.456-2.712 5.435-5.295 5.723.43.37.815 1.102.815 2.222 0 1.605-.014 2.896-.014 3.29 0 .323.192.7.8.58A12.001 12.001 0 0012 .5z" />
              </svg>
              View GitHub Repo
            </a>
            <Link
              to="/components"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-400/60 hover:text-white"
            >
              ← Back to components
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-lg">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-400">Live preview</p>
          <div className="mt-6 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
            <ResponsiveNavbarPreview />
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 shadow-lg">
          <h2 className="text-xl font-semibold text-white">Implementation notes</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>
              Uses a single `useState` hook to toggle the mobile drawer. Swap the placeholder links
              with your routes or Next.js links.
            </li>
            <li>
              Tailwind utility classes handle the responsive layout; adjust breakpoints or colors to
              match your design system.
            </li>
            <li>
              Desktop actions surface sign up & log in CTAs, while the mobile drawer keeps everything
              reachable without crowding the header.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponentPage;
