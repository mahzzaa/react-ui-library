import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Navigation',
    description: 'Menus, headers, and interactive patterns that keep people oriented as they explore.',
    components: [
      {
        name: 'Responsive Navbar',
        blurb: 'Sticky header with logo area, primary links, and a mobile-friendly menu drawer.',
        href: '/components/navbar-component',
      },
    ],
  },
];

function ComponentsPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-slate-950 text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-16">
        <header className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
            Library Catalog
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Explore the Component Categories
          </h1>
          <p className="text-lg text-slate-300">
            Every section is ready to copy, customize, and drop into your next project. Pick a
            starting point and remix from there.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <article
              key={category.name}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-6 text-left shadow-lg transition hover:border-blue-500/60 hover:shadow-blue-500/20"
            >
              <h2 className="text-2xl font-semibold text-white">{category.name}</h2>
              <p className="mt-2 text-sm text-slate-300">{category.description}</p>

              <div className="mt-6 space-y-3">
                {category.components.map((component) => {
                  const baseClasses =
                    'block rounded-lg border border-slate-800/60 bg-slate-900/60 px-4 py-3 transition hover:border-blue-500/50 hover:bg-slate-900';

                  if (component.href) {
                    return (
                      <Link key={component.name} to={component.href} className={`${baseClasses} group`}>
                        <p className="text-sm font-semibold text-white group-hover:text-blue-200">
                          {component.name}
                        </p>
                        {component.blurb && (
                          <p className="mt-1 text-xs text-slate-400 group-hover:text-slate-300">
                            {component.blurb}
                          </p>
                        )}
                        <span className="mt-2 inline-flex items-center text-xs font-medium text-blue-300 group-hover:text-blue-200">
                          View component →
                        </span>
                      </Link>
                    );
                  }

                  return (
                    <div key={component.name} className={baseClasses}>
                      <p className="text-sm font-semibold text-white">{component.name}</p>
                      {component.blurb && (
                        <p className="mt-1 text-xs text-slate-400">{component.blurb}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

export default ComponentsPage;
