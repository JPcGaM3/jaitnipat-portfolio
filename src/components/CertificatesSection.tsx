import { Certificate, certificates } from "../data";

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="border-t border-slate-800 bg-slate-950 py-16"
    >
      <div className="mx-auto max-w-5xl space-y-8 px-6 text-slate-200">
        {/* Header with Refined Text */}
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">
            Certificates
          </p>
          <h2 className="text-3xl font-semibold text-white">
            Industry Certifications & Competitive Achievements
          </h2>
          {/*<p className="text-slate-300 max-w-3xl">*/}
          {/*    A proven track record ranging from hackathon innovation to industry-recognized certifications, ensuring a balance of creativity and technical discipline.*/}
          {/*</p>*/}
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((certificate: Certificate) => (
            <article
              key={certificate.id}
              className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-inner"
            >
              {/* Logic: Image Display & Conditional Linking */}
              {certificate.image &&
                (certificate.credentialUrl ? (
                  // ✅ Clickable Image (if credentialUrl exists)
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View credential for ${certificate.title}`}
                    className="group block overflow-hidden rounded-xl border border-slate-800 bg-slate-950/60"
                  >
                    <div className="relative aspect-video w-full overflow-hidden">
                      {/* Standard <img> tag for Vite */}
                      <img
                        src={certificate.image.src}
                        alt={certificate.image.alt}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </a>
                ) : (
                  // 🚫 Non-clickable Image (if no credentialUrl)
                  <div
                    className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-950/60 cursor-default"
                    aria-label={certificate.title}
                  >
                    <div className="relative aspect-video w-full overflow-hidden">
                      <img
                        src={certificate.image.src}
                        alt={certificate.image.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}

              {/* Text Details */}
              <div className="flex flex-col gap-1">
                <p className="text-xs uppercase tracking-[0.3em] text-indigo-300">
                  {certificate.year}
                </p>
                <h3 className="text-lg font-semibold text-white leading-tight">
                  {certificate.title}
                </h3>
                <p className="text-sm text-slate-300">{certificate.issuer}</p>

                {/* Bottom Link (Restored from Old Version) */}
                {certificate.credentialUrl && (
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 w-fit text-sm font-semibold text-indigo-300 underline decoration-indigo-500/40 decoration-2 underline-offset-4 hover:text-indigo-200 transition-colors"
                  >
                    View credential
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
