export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-slate-800 bg-slate-900/40 py-16">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 text-slate-200 md:flex-row md:items-center">
        <div className="space-y-4 md:w-2/3">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Contact</p>
          <h2 className="text-3xl font-semibold text-white">Let’s build something great together.</h2>
          <p>Whether it’s an internship, a side project, or a new product idea, share a bit about what you’re building and how I can help. I’ll reply as soon as I can.</p>
        </div>
        <div className="flex-1 space-y-3 text-sm">
          <a href="mailto:jaitnipat.wc@gmail.com" className="block font-semibold text-indigo-300">
            jaitnipat.wc@gmail.com
          </a>
            <a href="https://github.com/JPcGaM3" className="block font-semibold text-indigo-300">
            github.com/JPcGaM3
          </a>
            <a href="https://www.linkedin.com/in/jaitnipat-wichitniti-877a05321/" className="block font-semibold text-indigo-300">
                linkedin.com/jaitnipat-wichitniti
          </a>
        </div>
      </div>
    </section>
  );
}
