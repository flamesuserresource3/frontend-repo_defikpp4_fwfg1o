import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Let’s build something</h2>
        <p className="mt-2 text-slate-300">I’m open to full-time roles and freelance projects. Drop a message and I’ll get back soon.</p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 grid gap-4 rounded-xl border border-white/10 bg-white/5 p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col">
              <label className="text-sm text-slate-300">Name</label>
              <input className="mt-1 rounded-md border border-white/10 bg-slate-900 px-3 py-2 text-sm outline-none ring-0 placeholder:text-slate-500" placeholder="Jane Doe" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-slate-300">Email</label>
              <input type="email" className="mt-1 rounded-md border border-white/10 bg-slate-900 px-3 py-2 text-sm outline-none ring-0 placeholder:text-slate-500" placeholder="jane@company.com" />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-slate-300">Message</label>
            <textarea rows={5} className="mt-1 rounded-md border border-white/10 bg-slate-900 px-3 py-2 text-sm outline-none ring-0 placeholder:text-slate-500" placeholder="Tell me about your project..." />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-400">By sending, you agree to receive an email reply.</p>
            <button className="rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-teal-400">Send Message</button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">Or email directly: <a className="text-teal-300 hover:underline" href="mailto:hello@dev2025.me">hello@dev2025.me</a></p>
      </div>
    </section>
  );
};

export default Contact;
