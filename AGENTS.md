# Repository Guidelines

## Project Structure & Module Organization
This repository contains a React/Vite slide deck for an internal AI coding talk. The production app lives in `slides/`. Core entry points are `slides/src/main.tsx` and `slides/src/App.tsx`. Individual slides are kept in `slides/src/slides/` and follow the `SxxName.tsx` pattern, for example `S01Opening.tsx`. Shared presentation primitives live in `slides/src/components/`, and global styling is in `slides/src/styles/`. Static assets such as icons and the favicon are in `slides/public/`. Supporting speaker notes and source material live in `script/` and `specs/`.

## Build, Test, and Development Commands
Run all app commands from `slides/`.

- `npm install`: install dependencies.
- `npm run dev`: start the local Vite dev server with HMR.
- `npm run build`: run TypeScript build checks, then create the production bundle in `slides/dist/`.
- `npm run lint`: run ESLint across the slide app.
- `npm run preview`: serve the built deck locally for final review.

## Coding Style & Naming Conventions
Use TypeScript with React function components and 2-space indentation, matching the existing source. Keep slide components in PascalCase and preserve the numeric ordering prefix in filenames. Prefer small, presentation-focused components over large mixed files. Styling currently mixes global CSS with Tailwind utility classes; reuse existing tokens and patterns before introducing new one-off styles. Linting is defined in `slides/eslint.config.js`; run `npm run lint` before opening a PR.

## Testing Guidelines
There is no dedicated test suite yet. Treat `npm run build` and `npm run lint` as required checks. For visual changes, verify the affected slides in `npm run dev` and `npm run preview`. When adding future tests, place them next to the related source or under `slides/src/__tests__/`, and name them `*.test.ts` or `*.test.tsx`.

## Commit & Pull Request Guidelines
Recent commits use short, imperative subjects such as `Fix CI working-directory ppt -> slides` and `Add Tailwind CSS v4`. Follow that style: one clear action per commit. Pull requests should summarize the deck changes, note any structural slide reordering, link the relevant issue if there is one, and include screenshots or a short recording for visual updates. Confirm `npm run lint` and `npm run build` in the PR description.
