# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Use `pnpm` (v10.33.4) as the package manager.

```bash
pnpm dev        # Start dev server
pnpm build      # Production build → dist/
pnpm preview    # Preview production build
pnpm lint       # ESLint
```

No test suite is configured.

## Architecture

Single-page React 19 + TypeScript portfolio site built with Vite 8, Tailwind CSS v4, and shadcn/ui components. Navigation is anchor-based (`#about`, `#projects`, etc.) — `react-router-dom` is installed but unused.

**Component layout** (vertical scroll, top to bottom):
`Header` → `Hero` (with `DesignDevAnimation`) → `About` → `Projects` → `Contact` → `Footer`

**Key source locations:**
- `src/App.tsx` — root layout, assembles all sections
- `src/context/theme.tsx` — light/dark theme context, persists to `localStorage`, toggles `.dark` on `<html>`
- `src/components/DesignDevAnimation.tsx` — SVG hero animation (see below)
- `src/components/PasswordGate.tsx` — client-side session gate (deterrent only, not real security)
- `src/components/Projects.tsx` — project grid with click-to-expand modals
- `styles/globals.css` — all CSS variables and global styles
- `lib/utils.ts` — `cn()` utility (clsx + tailwind-merge)
- `components/ui/` — 50+ shadcn/ui components; only Button and Badge are currently used

**Path alias:** `@/` resolves to the project root (not `src/`).

## Theming

Colors are defined as CSS variables in `styles/globals.css` using OKLCH format. Light theme lives in `:root`, dark theme in `.dark`. The accent color is a cyan-green (~130° hue) that appears in both themes. Tailwind v4 consumes these via `@theme` — there is no `tailwind.config.js`.

Border radius is set to `0` throughout for a geometric aesthetic.

## Hero Animation (`DesignDevAnimation.tsx`)

SVG-based animation with two overlapping gradient circles ("DESIGN" and "DEVELOPMENT") that merge and separate on a 26-second cycle. Key implementation details:

- Uses `useId()` to generate scoped class/filter IDs so the component can be safely reused without CSS conflicts
- Animation keyframes are injected via an inline `<style>` tag using the scoped IDs
- Four animation layers: `mb1`/`mb2` (26s main movement), `mbw` (26s breathing scale), `mf1` (3.7s) / `mf2` (4.3s) micro-jitter

## shadcn/ui

Uses the "new-york" variant. Components are in `components/ui/`. To add a new component: `pnpm dlx shadcn@latest add <component>`. CVA (Class Variance Authority) is used for Button and Badge variants.

## Password Gate

`PasswordGate.tsx` uses a client-side SHA-256 hash stored in `sessionStorage` to gate the portfolio. This is intentionally a lightweight deterrent, not real authentication — the hash is visible in the source.

## Notable Patterns

- Email in `Contact.tsx` is split across an array to deter scraping
- The site is marked `noindex, nofollow` in HTML meta tags (intentionally unlisted)
- All project media assets live in `public/projects/` and are referenced by relative paths
