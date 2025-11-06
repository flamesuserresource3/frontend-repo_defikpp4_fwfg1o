import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat App',
    tags: ['React', 'Socket.IO', 'Node', 'MongoDB'],
    desc: 'Typing indicators, message receipts, and persistent rooms with JWT auth.',
    link: '#',
  },
  {
    title: 'E‑commerce Dashboard',
    tags: ['React', 'Express', 'MongoDB', 'Chart.js'],
    desc: 'Sales analytics, inventory, and order management with role-based access.',
    link: '#',
  },
  {
    title: 'AI Image Studio',
    tags: ['React', 'FastAPI', 'Tailwind'],
    desc: 'Prompt-based generation, gallery, and shareable links with caching.',
    link: '#',
  },
];

const ProjectCard = ({ p }) => (
  <div className="group flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
    <div>
      <h3 className="text-lg font-medium text-white">{p.title}</h3>
      <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
    </div>
    <div className="mt-4 flex flex-wrap items-center gap-2">
      {p.tags.map((t) => (
        <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300">
          {t}
        </span>
      ))}
      <a href={p.link} className="ml-auto inline-flex items-center gap-1 text-sm text-teal-300 hover:underline">
        Live <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Featured Projects</h2>
            <p className="mt-2 max-w-2xl text-slate-300">A few things I’ve shipped recently. Clean code, accessible UI, and pragmatic architecture.</p>
          </div>
          <a href="#contact" className="hidden rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-teal-400 sm:inline-flex">
            Start a Project
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
