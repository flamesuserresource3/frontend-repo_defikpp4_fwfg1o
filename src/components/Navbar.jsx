import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-900/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-semibold tracking-tight text-white">dev<span className="text-teal-400">.2025</span></a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-slate-300 transition hover:text-white">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-teal-400 hover:text-slate-900">
            Hire Me
          </a>
        </div>

        <button onClick={() => setOpen((v) => !v)} className="rounded-md p-2 text-slate-200 md:hidden">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-900/80 px-6 py-4 backdrop-blur md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-slate-200" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="rounded-md bg-white px-4 py-2 text-center text-sm font-medium text-slate-900">
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
