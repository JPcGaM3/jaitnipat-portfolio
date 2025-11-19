# Portfolio Application Plan

## Overview
The repository now focuses on a single Next.js 15 application that renders Casey Parker's portfolio as an App Router experien
ce. The prior Rust backend and Vue frontend live under `legacy/` for posterity but are no longer part of the active build. The 
Next.js site continues to emphasize the same visual language (dark, high-contrast palette with uppercase accents) while provid
ing a fast, scroll-based navigation model.

## Current Structure
```
portfolio/
├─ app/                # App Router entry points and UI primitives
├─ public/             # Static assets
├─ legacy/             # Archived backend + frontend stacks
├─ infra/              # Existing infra notes/files
├─ docker-compose.yml
└─ README.md
```

## Frontend Plan (Next.js + Tailwind CSS)
- Scaffolded via `create-next-app` with TypeScript, ESLint, and Tailwind enabled.
- Recreate layout primitives (`SiteHeader`, `LayoutShell`, `ThemeToggle`) as server/client components.
- Implement content sections (Hero, Projects, Experience, Contact) using React Server Components where possible and client comp
onents when interactivity (filters/theme) is required.
- Mirror the previous Tailwind utility system in `app/globals.css` and keep `dark` mode as the default with persisted preferenc
e via `localStorage`.
- Use static data modules in `app/lib/` until an API source replaces them.
- Replace router links with Next `<Link>` anchors that point to in-page section IDs to maintain a single-page experience.

## Legacy Notes
- `legacy/backend/` retains the Axum + MongoDB service (now dormant).
- `legacy/frontend/` contains the original Vue 3 + Vite implementation and related shared models under `legacy/shared/`.
- Docker and infra files remain untouched but should be revisited if the Next.js app needs containerization or reverse-proxy co
nfiguration.

## Quality & Maintenance
- Use `npm run lint` and `npm run build` for verification once dependencies are installed (requires registry access).
- Tailwind + ESLint configs live at the repository root to keep the App Router setup consistent.
- Continue documenting architectural shifts here whenever major technology decisions change.
