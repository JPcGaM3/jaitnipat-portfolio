# Casey Parker · Portfolio Platform

A modern single-page portfolio built with Next.js 15, React Server Components, and Tailwind CSS. The site mirrors the original
visual system while running entirely from the repository root. Previous Vue + Axum services now live under `legacy/` for refer
ence.

## Architecture

```
portfolio/
├─ app/                 # App Router pages and UI components
├─ public/              # Static assets
├─ PLAN.md
└─ README.md
```

### Frontend

- Next.js App Router with TypeScript and strict ESLint rules
- Tailwind CSS with a dark-first design token system
- Recreated layout primitives (`SiteHeader`, `LayoutShell`, `ThemeToggle`)
- Hero, project filters/cards, experience timeline, and contact CTA rebuilt as server/client components
- Theme persistence via `localStorage` to match the prior Vue experience

## Development

```bash
# install dependencies
bun install

# run the development server
bun run dev

# build and lint
bun run build
bun run lint
```

The commands above require network access to install npm packages. If your environment cannot reach the npm registry, mirror th
e packages or run within a network that can.
