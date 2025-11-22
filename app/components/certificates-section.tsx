import Image from 'next/image';
import Link from 'next/link';
import { certificates } from '../lib/data';

export default function CertificatesSection() {
    return (
        <section id="certificates" className="border-t border-slate-800 bg-slate-950 py-16">
            <div className="mx-auto max-w-5xl space-y-8 px-6 text-slate-200">
                <header className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Certificates</p>
                    <h2 className="text-3xl font-semibold text-white">Industry Certifications & Competitive Achievements</h2>
                    {/*<p className="text-slate-300">*/}
                    {/*    A proven track record ranging from hackathon innovation to industry-recognized certifications, ensuring a balance of creativity and technical discipline.*/}
                    {/*</p>*/}
                </header>
                <div className="grid gap-4 md:grid-cols-2">
                    {certificates.map((certificate) => (
                        <article
                            key={certificate.id}
                            className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-inner"
                        >
                            {certificate.image && (
                                certificate.credentialUrl ? (
                                    // ✅ Clickable version (has credentialUrl)
                                    <Link
                                        href={certificate.credentialUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`View credential for ${certificate.title}`}
                                        className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-950/60"
                                    >
                                        <div className="relative aspect-video">
                                            <Image
                                                src={certificate.image.src}
                                                alt={certificate.image.alt}
                                                fill
                                                sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 90vw"
                                                className="object-cover transition duration-300 group-hover:scale-105"
                                                priority={false}
                                            />
                                        </div>
                                    </Link>
                                ) : (
                                    // 🚫 Not clickable version (no credentialUrl)
                                    <div
                                        className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-950/60 cursor-default"
                                        aria-label={certificate.title}
                                    >
                                        <div className="relative aspect-video">
                                            <Image
                                                src={certificate.image.src}
                                                alt={certificate.image.alt}
                                                fill
                                                sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 90vw"
                                                className="object-cover"
                                                priority={false}
                                            />
                                        </div>
                                    </div>
                                )
                            )}

                            <div className="space-y-1">
                                <p className="text-xs uppercase tracking-[0.3em] text-indigo-300">{certificate.year}</p>
                                <h3 className="text-lg font-semibold text-white">{certificate.title}</h3>
                                <p className="text-sm text-slate-300">{certificate.issuer}</p>
                                {certificate.credentialUrl && (
                                    <Link
                                        href={certificate.credentialUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sm font-semibold text-indigo-300 underline decoration-indigo-500/40 decoration-2 underline-offset-4 hover:text-indigo-200"
                                    >
                                        View credential
                                    </Link>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}