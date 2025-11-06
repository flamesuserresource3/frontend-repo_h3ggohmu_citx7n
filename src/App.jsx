import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="py-10 text-center text-sm text-neutral-600 dark:text-neutral-400">
        © {new Date().getFullYear()} Student.dev — Built with love, code, and a little 3D.
      </footer>
    </div>
  );
}

export default App;
