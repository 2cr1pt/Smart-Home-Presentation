# Copilot instructions — `pre` (Vite + React)

Brief: Small Vite + React single-page app. Entry is `src/main.jsx` and `index.html`. The visual layout is driven by static data in `src/data/topics.js` and global CSS in `src/styles.css`.

- Project type: Vite + React (see `package.json` scripts: `dev`, `build`, `preview`, `lint`). Use `npm install` then `npm run dev` to iterate locally (HMR, default port 5173).

- Key files to inspect when changing behavior:
  - `src/main.jsx` — app entry and router/bootstrapping.
  - `src/App.jsx` — top-level app component.
  - `src/components/` — UI components (examples: `Overview.jsx`, `TopicCircle.jsx`, `CenterImage.jsx`).
  - `src/data/topics.js` — static topics array (format: { id, title, x, y }) that controls circle positions.
  - `src/styles.css` — global styling; important classes: `.canvas` (container), `.circle` (topic), `.center-image` (center graphic).

- Data-driven layout: `TopicCircle` reads `x`/`y` from `src/data/topics.js` (percent values). Adjust positions by editing that file, or change `.circle` size/transform in `src/styles.css`.

- Naming & code style conventions:
  - Components use PascalCase filenames and `.jsx` extension (e.g., `TopicCircle.jsx`).
  - Styling is global CSS classes; prefer editing `src/styles.css` for layout changes rather than adding component-scoped CSS.

- Workflows & verification:
  - Dev: `npm run dev` (HMR). Open http://localhost:5173.
  - Build: `npm run build` then `npm run preview` to test production output.
  - Lint: `npm run lint` (ESLint configuration present).

- When to change what:
  - UI/position tweaks: edit `src/styles.css` and/or `src/data/topics.js`.
  - New visual components: add to `src/components/` and import into `App.jsx` or `Overview.jsx`.
  - Static assets: put files in `public/` or `src/assets/` and reference them from components.

- Debugging and safe edits:
  - Keep changes small and focused; run `npm run dev` to verify quickly.
  - Avoid altering `vite.config.js` or `package.json` unless necessary; if you must, run `npm run build` to confirm.

- Example: add a topic by editing `src/data/topics.js` (format shown):
```
export const topics = [
  { id: 1, title: "Introduction", x: 50, y: 8 },
  { id: 2, title: "Project Overview", x: 20, y: 18 },
  // ...more topics
];
```

- Files to review for most changes: `src/components/Overview.jsx`, `src/components/TopicCircle.jsx`, `src/styles.css`, `src/data/topics.js`.

If anything above is unclear or you'd like more detail (e.g., component responsibilities, prop shapes, or an automated dev checklist), tell me which part to expand.
