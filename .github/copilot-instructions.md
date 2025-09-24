# Copilot Instructions for AI Agents

## Project Overview
This is a static personal website for ITE 18, located in the `docs/` directory. It uses HTML, CSS, and JavaScript only—no build tools or frameworks are present. The site is designed for direct deployment to GitHub Pages.

## Key Structure
- `docs/index.html`: Main entry point. Contains the site layout and references to CSS/JS.
- `docs/styles.css`: All site styling, including dark/light theme support via CSS variables and `[data-theme]` attributes.
- `docs/script.js`: Handles color theme toggling and modal editing for the lead text. Uses vanilla JS and DOM APIs only.
- `docs/images/`: Static image assets for the site.

## Developer Workflows
- **No build step required.** Edit files in `docs/` directly.
- **Preview:** Open `docs/index.html` in a browser. No local server is required.
- **Deployment:** Push to the `main` branch (or configured branch) for GitHub Pages to update.
- **Testing:** No automated tests are present. Manual browser testing is expected.

## Project Conventions
- Use semantic HTML and keep JS/CSS modular and minimal.
- Theme toggling is managed by toggling the `data-theme` attribute on `<html>`. See `script.js` and `styles.css` for details.
- Modal editing for the lead text is handled by a button with class `.edit-lead-btn` and a modal with id `lead-modal`.
- All site content and assets should reside under `docs/`.

## Patterns & Examples
- To add a new section, edit `docs/index.html` and style in `docs/styles.css`.
- To add interactivity, use vanilla JS in `docs/script.js`.
- For new images, place them in `docs/images/` and reference with relative paths.

## External Integrations
- None. No external APIs, libraries, or build tools are used.

## References
- See `README.md` for project purpose.
- See `docs/` for all source files.

---
**AI agents:** Follow the above conventions. Do not introduce frameworks, build tools, or external dependencies. Keep all code and assets within `docs/`.
