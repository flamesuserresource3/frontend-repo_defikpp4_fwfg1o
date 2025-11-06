import React from 'react';
import { Database, Braces, Layout, Rocket } from 'lucide-react';

const SkillBadge = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
      <Icon className="h-4 w-4 text-teal-300" />
      {title}
    </div>
    <p className="text-sm text-slate-300">{desc}</p>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Core Skills</h2>
          <p className="mt-2 max-w-2xl text-slate-300">End-to-end product development across the MERN stack with performance and DX in mind.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <SkillBadge icon={Layout} title="Frontend" desc="React, Vite, Tailwind, Framer Motion, shadcn/ui" />
          <SkillBadge icon={Braces} title="Backend" desc="Node.js, Express, FastAPI, REST, Auth, Webhooks" />
          <SkillBadge icon={Database} title="Database" desc="MongoDB, Mongoose, Aggregations, Indexing" />
          <SkillBadge icon={Rocket} title="DevOps" desc="Vercel, Docker, CI/CD, Monitoring" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
