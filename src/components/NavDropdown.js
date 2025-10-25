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
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  const handleMouseLeave = (event) => {
    if (!onClose) {
      return;
    }

    const next = event.relatedTarget;

    if (!next || !event.currentTarget.contains(next)) {
      onClose();
    }
  };

  const handleBlur = (event) => {
    if (!onClose) {
      return;
    }

    const next = event.relatedTarget;

    if (!next || !event.currentTarget.contains(next)) {
      onClose();
    }
  };

  const handleItemClick = (item) => {
    if (onItemClick) {
      onItemClick(item);
    }
  };

  if (variant === 'mobile') {
    return (
      <div className="relative w-full text-left">
        <button
          type="button"
          onClick={() => onToggle && onToggle()}
          className="flex w-full items-center justify-between rounded-lg border border-slate-800/60 bg-slate-900/70 px-4 py-3 text-left text-lg font-medium text-slate-100 hover:border-blue-400/60 hover:text-white"
          aria-expanded={isOpen}
        >
          <span>{label}</span>
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
          <div className="rounded-xl border border-slate-800/70 bg-slate-900/95 p-3 shadow-xl backdrop-blur">
            <div className="flex flex-col gap-2">
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-left text-sm font-semibold text-slate-200 transition hover:bg-slate-800/70 hover:text-white"
                  onClick={() => handleItemClick(item)}
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
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => onOpen && onOpen()}
      onMouseLeave={handleMouseLeave}
      onFocus={() => onOpen && onOpen()}
      onBlur={handleBlur}
    >
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
        <div className="rounded-xl border border-slate-800/70 bg-slate-900/95 p-4 shadow-xl backdrop-blur">
          <div className="flex flex-col gap-2">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-blue-500/40 hover:bg-slate-800/80 hover:text-white"
                onClick={() => handleItemClick(item)}
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
}

export default NavDropdown;
