# Portfolio

Personal portfolio site for Dhruv Gupta, built with React, Vite and MUI.

## Requirements

- Node.js 22.22.2 or later
- pnpm 12 (the exact version is pinned in `package.json` under `packageManager`; `corepack enable` picks it up)

## Getting started

```bash
pnpm install
pnpm dev
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

## Scripts

| Command                   | What it does                              |
| ------------------------- | ----------------------------------------- |
| `pnpm dev` / `pnpm start` | Start the Vite dev server with hot reload |
| `pnpm build`              | Production build into `build/`            |
| `pnpm preview`            | Serve the production build locally        |
| `pnpm lint`               | Run ESLint                                |
| `pnpm test`               | Run the Vitest suite once                 |
| `pnpm test:watch`         | Run Vitest in watch mode                  |
| `pnpm format`             | Format the whole project with Prettier    |
| `pnpm format:check`       | Check formatting without writing changes  |

A husky pre-commit hook runs Prettier on staged files through lint-staged. It's installed automatically by `pnpm install`.

## Project layout

- `index.html` – app entry HTML (Vite serves it from the project root)
- `public/` – static files copied as-is (favicon, manifest, icons)
- `src/index.jsx` – React entry point
- `src/Components/` – page sections
- `src/Context/Theme.jsx` – light/dark theme context
