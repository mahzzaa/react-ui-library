import './App.css';

function App() {
  return (
    <div className="App min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <main className="max-w-3xl px-6 py-16 text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Ready-to-Use Website Template Components
        </h1>
        <p className="text-lg text-gray-300">
          I created this project packed with different website template components you can copy
          and paste straight into your own work.
        </p>
        <p className="text-lg text-gray-300">
          The goal is to make the creation process lighter and faster. I needed a toolkit like this
          while I was developing, so I made it to share with others who might need the same boost.
        </p>
        <a
          className="inline-flex items-center justify-center rounded-md bg-blue-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
          href="/components"
        >
          Browse Categories & Components
        </a>
      </main>
    </div>
  );
}

export default App;
