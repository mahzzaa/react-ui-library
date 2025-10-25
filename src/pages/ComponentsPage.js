const categories = [
  {
    name: 'Responsive Navbar',
    description: 'Navigation bars that adapt seamlessly to different screen sizes.',
    examples: ['Minimal navbar', 'Dropdown menu', 'Sticky header'],
  }
];

function ComponentsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
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
              <div className="mt-4 text-sm text-slate-400">
                <p className="font-medium text-slate-200">Example components:</p>
                <ul className="mt-2 space-y-1">
                  {category.examples.map((example) => (
                    <li key={example} className="rounded bg-slate-800/60 px-3 py-1">
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

export default ComponentsPage;
