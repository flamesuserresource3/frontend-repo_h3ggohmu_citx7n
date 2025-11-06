import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors ${scrolled ? 'backdrop-blur bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/5' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-xl">Viral<span className="text-indigo-600">Jain</span></a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-indigo-600 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium shadow hover:shadow-md hover:bg-indigo-500 transition">Hire Me</a>
        </div>

        <button className="md:hidden p-2 rounded-lg border border-black/10 dark:border-white/10" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/5 bg-white/80 dark:bg-neutral-900/80 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-4 grid gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-neutral-800 dark:text-neutral-100 font-medium hover:text-indigo-600">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
