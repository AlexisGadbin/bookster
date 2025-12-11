# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bookster is a React + TypeScript web application for managing book collections. It serves as a landing page and policy page for the Bookster iOS app.

## Development Commands

```bash
npm run dev      # Start Vite dev server
npm run build    # TypeScript compile + Vite build
npm run lint     # ESLint with zero warnings tolerance
npm run preview  # Preview production build
```

**Note:** Ne compile jamais le code sauf si demandé explicitement.

## Tech Stack

- **Build:** Vite with React plugin
- **UI:** shadcn/ui (new-york style) with Radix primitives
- **Styling:** Tailwind CSS with CSS variables for theming
- **Routing:** React Router DOM
- **State/Data:** TanStack React Query, React Hook Form + Zod
- **i18n:** i18next

## Code Style

- **Prettier:** Single quotes, no semicolons, 2-space tabs, ES5 trailing commas
- **ESLint:** TypeScript + React Hooks recommended rules, `src/components/ui` is ignored
- **Path aliases:** `@/` maps to `src/`, `@/components` maps to `src/components`

## Architecture

- `src/pages/` - Page components (HomePage, PrivacyPolicy)
- `src/components/ui/` - shadcn/ui components (auto-generated, ignored by ESLint)
- Entry point: `src/main.tsx` with React Router setup

## Deployment

- Docker build with `serve` for static hosting
- CI/CD via GitHub Actions: builds Docker image and deploys to Docker Swarm on push to master
- API URL configured via `VITE_API_URL` environment variable
