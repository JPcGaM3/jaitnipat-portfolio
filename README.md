# Casey Parker · Portfolio Platform

A full-stack portfolio platform showcasing a multidisciplinary product designer and frontend engineer. The repository follows the
monorepo structure outlined in `PLAN.md`, providing a Vue 3 + Vite frontend, an Axum-based Rust API, and MongoDB persistence.

## Architecture

```
portfolio/
├─ backend/          # Axum API with MongoDB integration
├─ frontend/         # Vue 3 + TypeScript SPA with PWA support
├─ infra/nginx/      # Reverse proxy example configuration
├─ shared/models/    # TypeScript interfaces shared across services
├─ docker-compose.yml
└─ PLAN.md
```

### Backend
- Axum router with health and `/api/portfolio` endpoints
- MongoDB driver integration with configurable connection URI
- Structured logging with `tracing`
- Integration test scaffold using `reqwest`

### Frontend
- Vite + Vue 3 + TypeScript application shell
- Tailwind CSS utility styling
- Pinia store for portfolio projects and filter metadata
- Axios service layer and composables for API integration
- PWA support via `vite-plugin-pwa`

### Docker & Development

```bash
# copy and configure environment variables
cp .env.example .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# run services
docker compose up --build
```

When running locally without Docker, ensure MongoDB is available and the backend `.env` matches your environment.

## Tests

- `cargo test` within `backend/`
- `npm run test` (when configured) within `frontend/`
