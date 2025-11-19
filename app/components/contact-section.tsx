export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-slate-800 bg-slate-900/40 py-16">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 text-slate-200 md:flex-row md:items-center">
        <div className="space-y-4 md:w-2/3">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Contact</p>
          <h2 className="text-3xl font-semibold text-white">Let's build the next chapter together.</h2>
          <p>Share a bit about your product, team, and timeline. I'll respond within two business days with next steps.</p>
        </div>
        <div className="flex-1 space-y-3 text-sm">
          <a href="mailto:hello@example.com" className="block font-semibold text-indigo-300">
            hello@example.com
          </a>
          <a href="https://example.com" className="block text-slate-300" target="_blank" rel="noopener noreferrer">
            example.com
          </a>
          <p className="text-slate-400">Based in Remote · Available for fractional or project engagements.</p>
        </div>
      </div>
    </section>
  );
}
