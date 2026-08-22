# Repository Guidelines

## Project Structure & Module Organization
The site is a static marketing and documentation bundle served via GitHub Pages. The landing page is `index.html`, styled by `home.css` and scripted by `home.js` (which holds all i18n dictionaries). Secondary pages are `tools.html` (webmaster tools directory, `tools.css` + `tools.js` + `data/webmaster-tools.json`) and `privacy.html` (`privacy.css`), while `docs.html` simply redirects to `index.html#docs`. `resume.html` is a self-contained interactive resume (inline styles + `assets/three.module.js`), with `web-resume/` acting as a legacy redirect. Image assets live in `assets/` (prefer descriptive, kebab-case filenames). The bundled browser extension is stored in `files/dist.zip` — it is a build artifact produced by the extension's own build pipeline, so never regenerate it from the website sources. Keep `CNAME` intact so deployments continue honoring the custom domain.

```text
.
├── index.html      # landing experience (home.css / home.js)
├── docs.html       # redirect stub -> index.html#docs
├── privacy.html    # bilingual privacy policy (privacy.css)
├── tools.html      # webmaster tools directory (tools.css / tools.js)
├── resume.html     # self-contained interactive resume
├── web-resume/     # legacy redirect -> resume.html
├── assets/         # marketing imagery
├── data/           # JSON data files
├── embed/          # sticker-forge web component bundle
└── files/dist.zip  # Chrome extension package (build artifact)
```

## Build, Test, and Development Commands
- `python3 -m http.server 4000` — serve the repository root locally for quick iteration.
- `open http://localhost:4000/docs.html` — spot-check documentation flows after changes.
- `open http://localhost:4000/tools.html` — spot-check the webmaster tools directory.
- `zip -r files/dist.zip dist` — repackage the Chrome extension build output (produced by the extension pipeline) after distributed resources change. Do not zip website sources into this archive.

## Coding Style & Naming Conventions
Use two-space indentation in HTML and CSS, mirroring the current files. Favor semantic HTML elements (`section`, `header`, `nav`) and keep attribute values lowercase. Class names should remain kebab-case (e.g., `nav-links`, `feature-card`). Extend CSS custom properties at the top of each stylesheet, grouping tokens by purpose, and reuse existing spacing scales before introducing new magic numbers.

## Testing Guidelines
Manually verify both light and dark themes in current Chrome/Edge releases after each change, ensuring anchors, language toggles, and scroll behavior still work. Confirm the zip archive expands cleanly on macOS and Windows. For static linting, run `npx htmlhint index.html docs.html` (install `htmlhint` globally or via `npx`) and address structural warnings before submitting.

## Commit & Pull Request Guidelines
Recent history shows terse subjects like `push`; move toward descriptive, imperative titles using Conventional Commit prefixes (e.g., `feat: add localized FAQ`). Keep subjects under 72 characters and explain user-facing impact in the body. Pull requests should outline the problem, summarize the solution, link the relevant issue (if any), and include before/after screenshots or screen recordings when UI changes are involved. Note any manual verification steps performed so reviewers can replicate results.

## Deployment & Release Tips
Deployment is automatic from the default branch; verify GitHub Pages picks up changes within minutes of merging. Retain `CNAME` in every branch to avoid domain resets. After publishing a refreshed `files/dist.zip`, download it from the live site to confirm integrity and that bundled resources match the latest sources.
