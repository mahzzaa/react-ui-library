import { Link, Outlet, Route, Routes } from 'react-router-dom';
import ResponsiveNavbar from './components/Navbar';
import ComponentsPage from './pages/ComponentsPage';
import NavbarComponentPage from './pages/NavbarComponentPage';
import './App.css';

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Components', href: '/components' },
  { label: 'Pricing', href: '#' },
  { label: 'Docs', href: '#' },
];

function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <ResponsiveNavbar brand="FlowFrame UI" brandHref="/" links={navigationLinks} variant="full" />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
    </div>
  );
}

function HomePage() {
  return (
    <section className="flex min-h-[calc(100vh-64px)] w-full flex-col items-center justify-center px-6 py-16 text-center">
      <div className="mx-auto w-full max-w-3xl space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
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
        <Link
          className="inline-flex items-center justify-center rounded-md bg-blue-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
          to="/components"
        >
          Browse Categories & Components
        </Link>
      </div>
    </section>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/components/navbar-component" element={<NavbarComponentPage />} />
      </Route>
    </Routes>
  );
}

export default App;
