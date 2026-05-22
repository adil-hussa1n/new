import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Packages } from "./components/Packages";
import { Projects } from "./components/Projects";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import Preloader from './components/Preloader';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

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
      <About />
      <Skills />
      <Packages />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
