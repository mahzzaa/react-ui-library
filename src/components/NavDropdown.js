function NavDropdown({
  label,
  items = [],
  isOpen = false,
  onToggle,
  onOpen,
  onClose,
  onItemClick,
  variant = 'desktop',
}) {
  // Skip rendering entirely if no dropdown content is provided.
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  // Mouse leave handler closes the menu when users exit the dropdown surface.
  const handleMouseLeave = (event) => {
    if (!onClose) {
      return;
    }

    const next = event.relatedTarget;

    if (!next || !event.currentTarget.contains(next)) {
      onClose();
    }
  };

  // Blur fallback so keyboard navigation collapses the menu when focus moves away.
  const handleBlur = (event) => {
    if (!onClose) {
      return;
    }

    const next = event.relatedTarget;

    if (!next || !event.currentTarget.contains(next)) {
      onClose();
    }
  };

  // Centralize item click to keep external callbacks consistent across variants.
  const handleItemClick = (item) => {
    if (onItemClick) {
      onItemClick(item);
    }
  };

  // Mobile dropdown behaves like an accordion to avoid hover-only interactions on touch devices.
  if (variant === 'mobile') {
    return (
      <div className="relative w-full text-left">
        {/* Trigger button doubles as toggle so tapping reveals or hides the list. */}
        <button
          type="button"
          onClick={() => onToggle && onToggle()}
          className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-left border rounded-lg border-slate-800/60 bg-slate-900/70 text-slate-100 hover:border-blue-400/60 hover:text-white"
          aria-expanded={isOpen}
        >
          <span>{label}</span>
          {/* Chevron rotates to communicate expanded state visually. */}
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
          className={`absolute left-1/2 top-full z-20 mt-3 w-full max-w-xs -translate-x-1/2 transition-all duration-150 ease-out ${
            isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
          }`}
        >
          {/* Card wrapper gives dropdown items breathing room on small screens. */}
          <div className="p-3 border shadow-xl rounded-xl border-slate-800/70 bg-slate-900/95 backdrop-blur">
            <div className="flex flex-col gap-2">
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-sm font-semibold text-left transition rounded-md text-slate-200 hover:bg-slate-800/70 hover:text-white"
                  onClick={() => handleItemClick(item)}
                >
                  <span>{item.label}</span>
                  {/* Optional description spotlights supporting copy when provided. */}
                  {item.description && (
                    <span className="block mt-1 text-xs font-normal text-slate-400">{item.description}</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop dropdown keeps focus/hover states synchronized for smooth keyboard and pointer usage.
  return (
    <div
      className="relative"
      onMouseEnter={() => onOpen && onOpen()}
      onMouseLeave={handleMouseLeave}
      onFocus={() => onOpen && onOpen()}
      onBlur={handleBlur}
    >
      {/* Primary trigger keeps hover, focus, and click interactions aligned. */}
      <button
        type="button"
        onClick={() => onToggle && onToggle()}
        className={`inline-flex items-center gap-1 text-sm font-medium transition ${
          isOpen ? 'text-white' : 'text-slate-200 hover:text-white'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{label}</span>
        {/* Chevron mirrors state to reinforce accessibility attributes. */}
        <svg
          className={`h-3.5 w-3.5 transition-transform ${isOpen ? 'rotate-180 text-blue-300' : 'text-slate-400'}`}
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
        {/* Elevated surface keeps dropdown legible above complex page backgrounds. */}
        <div className="p-4 border shadow-xl rounded-xl border-slate-800/70 bg-slate-900/95 backdrop-blur">
          <div className="flex flex-col gap-2">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium transition border border-transparent rounded-lg text-slate-200 hover:border-blue-500/40 hover:bg-slate-800/80 hover:text-white"
                onClick={() => handleItemClick(item)}
              >
                <span>{item.label}</span>
                {/* Optional description spotlights supporting copy when provided. */}
                {item.description && (
                  <span className="block mt-1 text-xs font-normal text-slate-400">{item.description}</span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavDropdown;
