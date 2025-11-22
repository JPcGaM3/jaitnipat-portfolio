# Portfolio Application Plan

## Overview
The repository now focuses on a single React application built with Vite, Tailwind CSS v4, and Bun. The site retains a high-contrast, uppercase-accented visual language while running entirely on the client for a responsive, PWA-capable experience. Legacy stacks remain for reference but are not part of the active build.

## Current Structure
```
portfolio/
├─ src/                # React components, styling, and data modules
├─ public/             # Static assets (favicons, PWA icons, manifest)
├─ legacy/             # Archived backend + frontend stacks
├─ infra/              # Existing infra notes/files
├─ docker-compose.yml
└─ README.md
```

## Frontend Plan (React + Vite + Tailwind CSS v4)
- Scaffolded with Vite + TypeScript and styled through Tailwind v4 with global utilities defined in `src/index.css`.
- Layout primitives (`SiteHeader`, `LayoutShell`, `ThemeToggle`) remain client components with dark-mode persistence via `localStorage`.
- Content sections (Hero, Projects, Experience, Contact) read from static data modules in `src/data.ts` until an API replaces them.
- Keep navigation anchored to in-page sections for a single-page scroll experience.
- Ship PWA support (manifest, service worker) via `vite-plugin-pwa` and responsive layouts that adapt fluidly across breakpoints.

## Legacy Notes
- `legacy/backend/` retains the Axum + MongoDB service (now dormant).
- `legacy/frontend/` contains the original Vue 3 + Vite implementation and related shared models under `legacy/shared/`.
- Docker and infra files remain untouched but should be revisited if the frontend needs containerization or reverse-proxy configuration.

## Quality & Maintenance
- Use Bun scripts (`bun run dev`, `bun run build`, `bun run preview`) for local development and verification once dependencies are installed.
- Tailwind compilation is handled via the Vite plugin; PWA assets live under `public/`.
- Continue documenting architectural shifts here whenever major technology decisions change.
