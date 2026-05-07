# VeraTru Operations Dashboard

Internal operations homepage built with React, TypeScript, and Vite.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Vercel Deployment

1. Push to GitHub
2. Import project on Vercel
3. Set password protection in Vercel dashboard:
   - Project Settings → Password Protection → Enable
   - Set your team password

## Tech Stack

- React 19 + TypeScript
- Vite (build tool)
- Tailwind CSS v4
- Font Awesome (icons)

## Structure

```
src/
  components/
    layout/     # Nav, Footer
    home/       # Hero, CoreActions, QuickHelp, ToolsSection, etc.
  lib/
    types.ts    # TypeScript interfaces
    data.ts     # Mock data
```