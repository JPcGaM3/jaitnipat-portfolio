'use client';

import Image from 'next/image';
import Link from 'next/link';
import type {Project} from '../lib/data';

export default function ProjectCard({project}: { project: Project }) {
    return (
        <article className="flex flex-col gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg"
                 role="listitem">
            {project.media && (
                <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-950/60">
                    <div className="relative aspect-video">
                        {project.media.type === 'image' ? (
                            <Image
                                src={project.media.src}
                                alt={project.media.alt}
                                fill
                                sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 90vw"
                                className="object-cover"
                                priority={false}
                            />
                        ) : (
                            <video
                                src={project.media.src}
                                title={project.media.alt}
                                className="h-full w-full object-cover"
                                muted
                                loop
                                playsInline
                                controls
                            />
                        )}
                    </div>
                </div>
            )}
            <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-widest text-indigo-300">{project.year}</p>
                <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                <ul className="mt-3 space-y-1 text-sm text-slate-300">
                    {project.description.map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                            <span className="mt-2">‣</span>
                            <span className="mt-2">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <ul className="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-slate-400">
                {project.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-slate-700 px-3 py-1">
                        {tag}
                    </li>
                ))}
            </ul>
            {(project.githubUrl || project.youtubeUrl || project.linkUrl) && (
                <div className="mt-2 flex items-center gap-3 text-sm font-semibold text-indigo-300">
                    {project.githubUrl && (
                        <Link href={project.githubUrl} target="_blank" rel="noreferrer"
                              className="inline-flex items-center gap-1">
                            <GithubIcon className="h-5 w-5"/>
                            <span className="sr-only">GitHub</span>
                        </Link>
                    )}
                    {project.youtubeUrl && (
                        <Link href={project.youtubeUrl} target="_blank" rel="noreferrer"
                              className="inline-flex items-center gap-1">
                            <YoutubeIcon className="h-5 w-5"/>
                            <span className="sr-only">YouTube</span>
                        </Link>
                    )}
                    {project.linkUrl && (
                        <Link href={project.linkUrl} target="_blank" rel="noreferrer"
                              className="inline-flex items-center gap-1">
                            <LinkIcon className="h-5 w-5"/>
                            <span className="sr-only">Link Url</span>
                        </Link>
                    )}
                </div>
            )}
        </article>
    );
}

function GithubIcon(props: { className?: string }) {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path
                d="M12 .5a12 12 0 0 0-3.79 23.4c.6.12.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.76.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.84 1.31 3.53 1 .11-.79.42-1.31.76-1.61-2.67-.3-5.48-1.34-5.48-5.95 0-1.32.47-2.4 1.24-3.24-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.46 11.46 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.92 1.23 3.24 0 4.62-2.82 5.64-5.5 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.21.71.82.58A12 12 0 0 0 12 .5Z"/>
        </svg>
    );
}

function YoutubeIcon(props: { className?: string }) {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path
                d="M21.6 7.2s-.2-1.44-.8-2.08c-.77-.83-1.64-.84-2.04-.89C15.52 3.92 12 3.92 12 3.92h-.02s-3.52 0-6.74.31c-.4.05-1.27.06-2.04.89C2.63 5.76 2.4 7.2 2.4 7.2S2.2 8.94 2.2 10.68v1.6c0 1.74.2 3.48.2 3.48s.2 1.44.8 2.08c.77.83 1.78.8 2.24.88 1.62.16 6.58.32 6.58.32s3.52-.02 6.74-.33c.4-.05 1.27-.06 2.04-.89.6-.64.8-2.08.8-2.08s.2-1.74.2-3.48v-1.6c0-1.74-.2-3.48-.2-3.48ZM10.04 13.9V8.98l4.56 2.46-4.56 2.46Z"/>
        </svg>
    );
}

function LinkIcon(props: { className?: string }) {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path
                d="M14.828 9.172a4 4 0 0 0-5.656 0l-3 3a4 4 0 0 0 5.656 5.656l1.172-1.172a1 1 0 0 1 1.414 1.414l-1.172 1.172a6 6 0 0 1-8.485-8.485l3-3a6 6 0 0 1 8.485 0 1 1 0 0 1-1.414 1.414Zm4.242-4.242a6 6 0 0 0-8.485 0l-1.172 1.172a1 1 0 1 0 1.414 1.414l1.172-1.172a4 4 0 0 1 5.656 5.656l-3 3a4 4 0 0 1-5.656 0 1 1 0 0 0-1.414 1.414 6 6 0 0 0 8.485 0l3-3a6 6 0 0 0 0-8.485Z"/>
        </svg>
    );
}
