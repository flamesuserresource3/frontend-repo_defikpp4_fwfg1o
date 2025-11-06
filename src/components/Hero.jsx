import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle top light gradient that doesn't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-950" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 md:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Rocket className="h-4 w-4 text-teal-300" />
          <span className="text-sm text-slate-200">MERN Stack Developer • Class of 2025</span>
        </div>

        <h1 className="mt-8 text-center font-bold tracking-tight text-white">
          <span className="block text-4xl leading-tight sm:text-6xl">Building modern, interactive</span>
          <span className="block bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-4xl leading-tight text-transparent sm:text-6xl">web experiences</span>
        </h1>

        <p className="mt-6 max-w-2xl text-center text-slate-300">
          Full‑stack developer specializing in MongoDB, Express, React, and Node.js.
          I craft delightful UIs, performant APIs, and scalable architectures.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#projects" className="group inline-flex items-center justify-center rounded-lg bg-teal-500 px-5 py-3 font-medium text-slate-900 transition hover:bg-teal-400">
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-medium text-white/90 transition hover:bg-white/10">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
