# Repository Guidelines

## Project Structure & Module Organization
The site is a static marketing and documentation bundle served via GitHub Pages. Core entry points are `index.html` for the landing page and `docs.html` for product instructions, both styled by `styles.css`. Image assets live in `assets/` (prefer descriptive, kebab-case filenames). The bundled browser extension is stored in `files/dist.zip`; regenerate it whenever distributed resources change. Keep `CNAME` intact so deployments continue honoring the custom domain.

```text
.
├── index.html      # landing experience
├── docs.html       # product documentation
├── styles.css      # shared theme and layout rules
├── assets/         # marketing imagery
└── files/dist.zip  # downloadable package
```

## Build, Test, and Development Commands
- `python3 -m http.server 4000` — serve the repository root locally for quick iteration.
- `open http://localhost:4000/docs.html` — spot-check documentation flows after changes.
- `zip -r files/dist.zip index.html docs.html styles.css assets` — refresh the distributable after updating markup, styles, or assets (run from repo root).

## Coding Style & Naming Conventions
Use two-space indentation in HTML and CSS, mirroring the current files. Favor semantic HTML elements (`section`, `header`, `nav`) and keep attribute values lowercase. Class names should remain kebab-case (e.g., `nav-links`, `feature-card`). Extend CSS custom properties at the top of `styles.css`, grouping tokens by purpose, and reuse existing spacing scales before introducing new magic numbers.

## Testing Guidelines
Manually verify both light and dark themes in current Chrome/Edge releases after each change, ensuring anchors, language toggles, and scroll behavior still work. Confirm the zip archive expands cleanly on macOS and Windows. For static linting, run `npx htmlhint index.html docs.html` (install `htmlhint` globally or via `npx`) and address structural warnings before submitting.

## Commit & Pull Request Guidelines
Recent history shows terse subjects like `push`; move toward descriptive, imperative titles using Conventional Commit prefixes (e.g., `feat: add localized FAQ`). Keep subjects under 72 characters and explain user-facing impact in the body. Pull requests should outline the problem, summarize the solution, link the relevant issue (if any), and include before/after screenshots or screen recordings when UI changes are involved. Note any manual verification steps performed so reviewers can replicate results.

## Deployment & Release Tips
Deployment is automatic from the default branch; verify GitHub Pages picks up changes within minutes of merging. Retain `CNAME` in every branch to avoid domain resets. After publishing a refreshed `files/dist.zip`, download it from the live site to confirm integrity and that bundled resources match the latest sources.
