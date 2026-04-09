# AI Tools Presentation

This repository contains an internal presentation project about AI-assisted software development.

It includes:

- a presentation script in [`presentation-script.md`](./presentation-script.md)
- a slide deck implemented with React, TypeScript, Vite, and Reveal.js in [`ppt/`](./ppt)

## Structure

```text
.
├── presentation-script.md   # speaking notes / written script
└── ppt/                     # slide application
```

## Run The Slides

Requirements:

- Node.js 20+ recommended
- npm

Start locally:

```bash
cd ppt
npm install
npm run dev
```

Build production assets:

```bash
cd ppt
npm run build
```

Preview the production build:

```bash
cd ppt
npm run preview
```

## Notes

- Root-level Git ignores are configured for local tooling, dependencies, and build output.
- The current `ppt/README.md` is still the default Vite template README. The root README is the primary project entry point.
