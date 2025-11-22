# Portfolio

A modern single-page portfolio built with React, Vite, Tailwind CSS v4, and Bun. The site keeps the original high-contrast visual system while running entirely as a client-rendered experience with PWA support.

## Architecture

```
portfolio/
├─ src/                 # React components, styling, and data modules
├─ public/              # Static assets and PWA icons
├─ PLAN.md
└─ README.md
```

### Frontend

- React + Vite with TypeScript
- Tailwind CSS v4 utilities defined in `src/index.css`
- Layout primitives (`SiteHeader`, `LayoutShell`, `ThemeToggle`) with dark-mode persistence via `localStorage`
- Sections for hero, project filters/cards, experience timeline, certificates, skills, and contact
- PWA manifest and service worker registration via `vite-plugin-pwa`

### Legacy Services

The previous Axum backend, Vue 3 frontend, and shared contracts are preserved in `legacy/`. They are no longer part of the active build but remain available for reference or migration work.

## Development

```bash
# install dependencies
bun install

# run the development server
bun run dev

=======
# build for production
bun run build

# preview the production build
bun run preview
```

The commands above require network access to install npm packages through Bun. If your environment cannot reach the npm registry, mirror the packages or run within a network that can.
