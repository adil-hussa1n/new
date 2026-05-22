import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, lazy, Suspense } from 'react';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import Preloader from './components/Preloader';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Lazy load below-the-fold components for faster initial render
const Skills = lazy(() => import("./components/Skills").then(m => ({ default: m.Skills })));
const Packages = lazy(() => import("./components/Packages").then(m => ({ default: m.Packages })));
const Projects = lazy(() => import("./components/Projects").then(m => ({ default: m.Projects })));
const Team = lazy(() => import("./components/Team").then(m => ({ default: m.Team })));
const Contact = lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));
const About = lazy(() => import("./components/About").then(m => ({ default: m.About })));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // Reduced from 3000ms for faster perceived load

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading && <Preloader />}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>
      <div className="bg-blob blob-4"></div>
      <div className="bg-blob blob-5"></div>
      <div className="bg-blob blob-6"></div>
      <NavBar loading={loading} />
      <Banner />
      <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
        <About />
        <Skills />
        <Packages />
        <Projects />
        <Team />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
