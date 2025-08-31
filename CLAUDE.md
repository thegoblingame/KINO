# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js static site template configured for deployment to GitHub Pages. The project uses Next.js 15 with React 19 and TypeScript, configured for static export.

## Development Commands

- `pnpm dev` - Start development server with Turbo mode
- `pnpm build` - Build the application for production (outputs to `./out/`)
- `pnpm install` - Install dependencies

The project uses pnpm as the package manager, as evidenced by the `pnpm-lock.yaml` file and GitHub Actions workflow.

## Architecture

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: No CSS framework detected (basic HTML/CSS)
- **Deployment**: Static export to GitHub Pages via GitHub Actions

### Key Configuration

- `next.config.ts`: Configured for static export with `output: 'export'` and dynamic `basePath` from environment variable `PAGES_BASE_PATH`
- `tsconfig.json`: Standard Next.js TypeScript configuration with path aliases (`@/*` maps to `./`)
- Static export outputs to `./out/` directory

### File Structure

- `app/` - Next.js App Router directory
  - `layout.tsx` - Root layout component
  - `page.tsx` - Home page component
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch. The deployment uses pnpm and Node.js 22, with caching for build optimization.