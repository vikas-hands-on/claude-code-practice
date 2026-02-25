# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HookHub is a Next.js 16 application using React 19, TypeScript 5, and Tailwind CSS 4. The main application code lives in the `hookhub/` subdirectory.

## Commands

All commands must be run from the `hookhub/` directory:

```bash
npm run dev       # Start development server (http://localhost:3000)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint (flat config, v9 — no path argument needed)
```

No test framework is currently configured.

## Architecture

- **Routing:** Next.js App Router (`hookhub/app/`)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/postcss`. Theme colors (`background`, `foreground`) are defined as CSS variables in `globals.css` and bridged to Tailwind via `@theme inline`. Dark mode uses `prefers-color-scheme` media query.
- **Fonts:** Geist sans and mono loaded via `next/font/google` in `layout.tsx`, exposed as CSS variables (`--font-geist-sans`, `--font-geist-mono`) and mapped to Tailwind's `--font-sans`/`--font-mono` in `globals.css`.
- **Linting:** ESLint v9 flat config (`eslint.config.mjs`) extends `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.
- **Path alias:** `@/*` maps to the `hookhub/` root (configured in `tsconfig.json`)
- **TypeScript:** Strict mode enabled, target ES2017, bundler module resolution
