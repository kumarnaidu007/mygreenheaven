# My Green Heaven

Production-oriented React application built with Vite (JavaScript).

## Stack

- React 19
- Vite 8
- React Router
- TanStack Query
- Vitest + Testing Library
- Oxlint
- GitHub Actions CI

## Project structure

```text
src/
  app/                 # App shell, providers, router
  pages/               # Route-level screens
  features/            # Domain modules (grow here)
  shared/
    components/        # Reusable UI + layouts
    constants/         # Routes, env accessors
    hooks/             # Shared hooks
    lib/               # Cross-cutting libs (query client)
    services/api/      # HTTP client
    styles/            # Global design tokens + base CSS
    utils/             # Pure helpers
  test/                # Test setup
  assets/              # Static assets imported by JS/CSS
public/                # Public static files
```

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Lint the codebase |
| `npm run test` | Run unit tests |
| `npm run check` | Lint + test + build |

## Environment

Copy `.env.example` to `.env` for local development.

| Variable | Description |
| --- | --- |
| `VITE_APP_NAME` | App display name |
| `VITE_APP_ENV` | `development` / `production` |
| `VITE_API_BASE_URL` | Backend API base URL |

Production defaults live in `.env.production`.

## Deploy

1. Run `npm run build`
2. Deploy the `dist/` folder to any static host (Vercel, Netlify, Cloudflare Pages, S3+CDN, Nginx)
3. Ensure SPA fallback routes all paths to `index.html` (already configured via `vercel.json` / `netlify.toml`)

### Nginx example

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```
