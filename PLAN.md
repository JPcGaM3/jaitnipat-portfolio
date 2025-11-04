# Portfolio Application Plan

## Overview
Provide a personal portfolio web application using Vue 3 with TypeScript (Vite) for the frontend, an Axum-based Rust backend, and MongoDB for data storage. The application must be containerized via Docker Compose and support Progressive Web App (PWA) capabilities.

## Monorepo Structure
```
portfolio/
├─ README.md
├─ PLAN.md
├─ docker-compose.yml
├─ .env.example
├─ infra/
│  ├─ nginx/
│  │  └─ nginx.conf
│  └─ certs/
├─ backend/
│  ├─ Cargo.toml
│  ├─ Cargo.lock
│  ├─ .env.example
│  ├─ Dockerfile
│  ├─ src/
│  │  ├─ main.rs
│  │  ├─ config.rs
│  │  ├─ routes/
│  │  │  ├─ mod.rs
│  │  │  ├─ health.rs
│  │  │  └─ portfolio.rs
│  │  ├─ models/
│  │  │  ├─ mod.rs
│  │  │  └─ portfolio.rs
│  │  ├─ services/
│  │  │  └─ portfolio_service.rs
│  │  └─ db/
│  │     └─ mod.rs
│  └─ tests/
│     └─ integration.rs
├─ frontend/
│  ├─ package.json
│  ├─ tsconfig.json
│  ├─ vite.config.ts
│  ├─ Dockerfile
│  ├─ public/
│  │  ├─ favicon.svg
│  │  ├─ robots.txt
│  │  └─ icons/
│  └─ src/
│     ├─ main.ts
│     ├─ env.d.ts
│     ├─ App.vue
│     ├─ assets/
│     ├─ router/
│     │  └─ index.ts
│     ├─ components/
│     │  ├─ layout/
│     │  └─ sections/
│     ├─ composables/
│     │  ├─ usePortfolioData.ts
│     │  └─ useImageLoader.ts
│     ├─ services/
│     │  └─ portfolioApi.ts
│     ├─ store/
│     │  └─ portfolio.ts
│     └─ pwa/
│        ├─ registerSW.ts
│        ├─ service-worker.ts
│        └─ manifest.ts
└─ shared/
   └─ models/
      └─ portfolio.ts
```

## Backend Plan (Rust + Axum)
- Use Axum with Tokio runtime and MongoDB driver.
- Implement modules for configuration, database connection, models, services, and routes.
- Provide `/health` endpoint and `/portfolio` resource endpoints (GET initially).
- Use structured logging with `tracing` and environment configuration via `dotenvy`.
- Share data contracts by generating or manually syncing TypeScript definitions from Rust models.

### Key Files
- `src/main.rs`: application entry point setting up router, CORS, logging, and server binding.
- `src/db/mod.rs`: MongoDB connection logic using URI from environment variables.
- `src/models/portfolio.rs`: schema definitions for portfolio data (education, experience, etc.).
- `src/services/portfolio_service.rs`: business logic fetching portfolio data from MongoDB.
- `src/routes/portfolio.rs`: HTTP handlers returning JSON responses.
- `tests/integration.rs`: integration tests using `reqwest` to validate API behavior.

## Frontend Plan (Vue 3 + TypeScript + Vite)
- Scaffold with Vite using the Vue + TypeScript template.
- Organize code into components per portfolio section (education, coursework, experience, certificates, academic projects, skills, achievements).
- Use Pinia for state management if needed, otherwise rely on composition functions.
- Implement routing with Vue Router for potential multi-page sections.
- Apply Tailwind CSS or utility-first styling for minimalist, mobile-first design.
- Integrate Axios-based service layer (`services/portfolioApi.ts`) to consume backend API.
- Add composables (`usePortfolioData`, `useImageLoader`) for data fetching and image optimizations.

## PWA Strategy
- Integrate `vite-plugin-pwa` with auto-update service worker registration.
- Provide manifest with name, icons, theme colors, and offline caching strategies.
- Configure Workbox runtime caching for API responses and remote images.
- Ensure HTTPS deployment and run Lighthouse audits to validate PWA compliance.

## Image Handling from Google Drive
- Normalize Google Drive URLs to direct-content links or serve via backend proxy endpoint (`/images/:id`).
- Implement lazy loading (`loading="lazy"`) and `IntersectionObserver` for progressive image loading.
- Optionally cache or transform images via third-party CDN (Cloudinary/ImageKit) for better performance.

## Docker & Deployment
- Create multi-stage Dockerfiles for frontend (Node build + Nginx) and backend (Rust build + distroless runtime).
- Provide `docker-compose.yml` orchestrating frontend, backend, and MongoDB with shared network and environment variables.
- Optionally add reverse proxy configuration in `infra/nginx/nginx.conf` for custom domains and TLS termination.
- Recommend deployment platforms supporting Docker (Railway, Render, Fly.io, VPS) and outline CI/CD steps (lint, test, build, push images, deploy).

## Quality & Maintainability Considerations
- Enforce TypeScript strictness and ESLint/Prettier rules.
- Use `cargo fmt`, `cargo clippy`, and `cargo test` for Rust code quality.
- Document architecture decisions and setup instructions in `README.md` and `docs/`.
- Write unit and integration tests for both frontend (Vitest) and backend (Axum + reqwest).
- Monitor performance and accessibility, ensuring semantic HTML and WCAG compliance.

## Next Steps
1. Initialize frontend and backend projects following the outlined structure.
2. Define shared portfolio schema and seed MongoDB with initial data.
3. Implement API endpoints and connect frontend data fetching.
4. Configure PWA assets, service worker, and offline caching.
5. Containerize services and validate `docker compose up` locally.
6. Prepare deployment pipeline and hosting environment.
