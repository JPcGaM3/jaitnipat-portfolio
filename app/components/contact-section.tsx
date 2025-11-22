export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-slate-800 bg-slate-900/40 py-16">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 text-slate-200 md:flex-row md:items-center">
        <div className="space-y-4 md:w-2/3">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Contact</p>
          <h2 className="text-3xl font-semibold text-white">Ready to grow with your team.</h2>
          {/*<p>*/}
          {/*  I’m a 3rd-year Computer Engineering student seeking internship or startup opportunities where I can build, learn,*/}
          {/*  and move fast. If you need someone eager to prototype, connect APIs, and ship polished UI updates, let’s talk.*/}
          {/*</p>*/}
        </div>
        <div className="flex-1 space-y-3 text-sm">
          <a href="mailto:jaitnipat.wc@gmail.com" className="block font-semibold text-indigo-300">
            jaitnipat.wc@gmail.com
          </a>
          <a href="https://github.com/JPcGaM3" className="block font-semibold text-indigo-300">
            github.com/JPcGaM3
          </a>
          <a
            href="https://www.linkedin.com/in/jaitnipat-wichitniti-877a05321/"
            className="block font-semibold text-indigo-300"
          >
            linkedin.com/jaitnipat-wichitniti
          </a>
          {/*<p className="text-slate-400">Bangkok · UTC+7 · Open to remote or hybrid internships and early-stage teams</p>*/}
        </div>
      </div>
    </section>
  );
}
