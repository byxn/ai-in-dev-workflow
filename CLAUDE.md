# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Internal slide deck for an AI coding talk, built with React + Vite + Reveal.js. All app code lives in `slides/`.

## Commands

Run from `slides/`:

```bash
npm install        # install dependencies
npm run dev        # local dev server with HMR
npm run build      # tsc check + production bundle → slides/dist/
npm run lint       # ESLint
npm run preview    # serve built deck locally
```

There is no test suite. `npm run build` and `npm run lint` are the required checks before committing.

## Architecture

`slides/src/App.tsx` initializes Reveal.js via a `useEffect` on mount and renders all slides as children of `.reveal > .slides`. Slide order is determined by import order in `App.tsx` — to reorder slides, reorder the imports.

Each slide is a React component in `slides/src/slides/` named `SxxName.tsx` (numeric prefix controls ordering). Each component returns one or more `<section>` elements, which Reveal.js treats as slides (nested `<section>` = vertical sub-slides).

Styling uses Tailwind CSS v4 utility classes alongside two global CSS files (`styles/global.css`, `styles/components.css`) 


