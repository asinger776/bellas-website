# Project Prompt: [Daughter's Name]'s Lifetime Website

## Overview

Build a personal website for my 7-year-old daughter that will grow with her throughout her life. The site should be simple, beautiful, and easy to maintain. It must be hosted on GitHub Pages with a full professional development lifecycle including CI/CD, linting, and automated deployment.

---

## Tech Stack Requirements

- **HTML5, CSS3, Vanilla JavaScript** — No frameworks. This site must survive decades without dependency rot.
- **GitHub Pages** — Free hosting, custom domain support.
- **GitHub Actions** — CI/CD pipeline for automated testing and deployment.
- **Prettier** — Code formatting.
- **HTMLHint** — HTML linting and validation.
- **Stylelint** — CSS linting.
- **ESLint** — JavaScript linting.
- **Node.js / npm** — Only for dev tooling (linting, formatting). The site itself must be pure static files with zero build step.

---

## Project Folder Structure

```
project-root/
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI/CD: lint, validate, deploy
├── src/
│   ├── index.html                  # Homepage
│   ├── about.html                  # About me page
│   ├── gallery.html                # Photo/art gallery page
│   ├── adventures.html             # Blog/journal style page
│   ├── css/
│   │   ├── reset.css               # CSS reset for consistency
│   │   └── styles.css              # Main stylesheet
│   ├── js/
│   │   └── main.js                 # Shared JavaScript
│   ├── images/                     # Image assets
│   │   └── .gitkeep
│   └── favicon.ico
├── .htmlhintrc                     # HTMLHint configuration
├── .stylelintrc.json               # Stylelint configuration
├── .eslintrc.json                  # ESLint configuration
├── .prettierrc                     # Prettier configuration
├── .gitignore
├── package.json                    # Dev dependencies only
├── README.md                       # Project documentation
└── CONTRIBUTING.md                 # Guide for future maintainers (including her!)
```

---

## Git Workflow & Branching Strategy

### Branches

| Branch        | Purpose                                      |
|---------------|----------------------------------------------|
| `main`        | Production. Auto-deploys to GitHub Pages.    |
| `develop`     | Integration branch for testing changes.       |
| `feature/*`   | New pages, features, design changes.          |
| `fix/*`       | Bug fixes.                                    |

### Workflow

1. **Create a feature branch** from `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/new-gallery-page
   ```

2. **Make changes** and commit with clear messages:
   ```bash
   git add .
   git commit -m "feat: add photo gallery page with lightbox"
   ```

3. **Push and open a Pull Request** to `develop`:
   ```bash
   git push origin feature/new-gallery-page
   ```

4. **CI pipeline runs automatically** on the PR — linting, validation, and formatting checks must pass.

5. **Merge to `develop`** after review/checks pass.

6. **When ready to release**, merge `develop` into `main`:
   ```bash
   git checkout main
   git merge develop
   git push origin main
   ```

7. **GitHub Actions auto-deploys** `main` to GitHub Pages.

### Commit Message Convention

Use conventional commits:
- `feat:` — New feature or page
- `fix:` — Bug fix
- `style:` — Visual/CSS changes (not code style)
- `docs:` — Documentation updates
- `chore:` — Tooling, config, maintenance

---

## GitHub Actions CI/CD Pipeline

Create `.github/workflows/deploy.yml` with the following stages:

### Pipeline Stages

```
Push/PR → Install Deps → Lint HTML → Lint CSS → Lint JS → Format Check → Deploy (main only)
```

### Pipeline Requirements

1. **Trigger on:**
   - Push to `main` (deploy)
   - Push to `develop` (test only)
   - All Pull Requests (test only)

2. **Job: Validate & Lint**
   - Checkout code
   - Setup Node.js (LTS version)
   - Install dev dependencies (`npm ci`)
   - Run HTMLHint on all `.html` files in `src/`
   - Run Stylelint on all `.css` files in `src/css/`
   - Run ESLint on all `.js` files in `src/js/`
   - Run Prettier check (non-destructive, just verify formatting)
   - **If any step fails, the pipeline fails and blocks deployment**

3. **Job: Deploy (only on `main` push, only if lint passes)**
   - Use `actions/deploy-pages` or `peaceiris/actions-gh-pages`
   - Deploy contents of `src/` directory to GitHub Pages
   - Source directory: `src/`

### Error Reporting

- Failed lint steps must show **clear error messages** in the GitHub Actions log
- PR checks must show ✅ or ❌ status on each step
- Add a **status badge** to README.md showing pipeline health

---

## Linter & Formatter Configuration

### .htmlhintrc
```json
{
  "tagname-lowercase": true,
  "attr-lowercase": true,
  "attr-value-double-quotes": true,
  "doctype-first": true,
  "tag-pair": true,
  "spec-char-escape": true,
  "id-unique": true,
  "src-not-empty": true,
  "alt-require": true,
  "title-require": true,
  "head-script-disabled": false
}
```

### .stylelintrc.json
```json
{
  "extends": "stylelint-config-standard",
  "rules": {
    "color-hex-length": "long",
    "selector-class-pattern": null,
    "no-descending-specificity": null
  }
}
```

### .eslintrc.json
```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "off",
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  }
}
```

### .prettierrc
```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "htmlWhitespaceSensitivity": "ignore"
}
```

### package.json scripts
```json
{
  "scripts": {
    "lint:html": "htmlhint src/**/*.html",
    "lint:css": "stylelint src/css/**/*.css",
    "lint:js": "eslint src/js/**/*.js",
    "lint": "npm run lint:html && npm run lint:css && npm run lint:js",
    "format": "prettier --write src/",
    "format:check": "prettier --check src/",
    "validate": "npm run lint && npm run format:check"
  }
}
```

---

## Website Design Requirements

### General Design

- **Mobile-first responsive design** — looks great on phones, tablets, and desktops
- **Accessible** — proper semantic HTML, ARIA labels where needed, good color contrast (WCAG AA)
- **Fun but not childish** — use a design that a 7-year-old will love now but won't feel embarrassing at 15. Think: clean, colorful, playful typography, whimsical but not cartoonish
- **Easy to re-theme** — all colors and fonts defined as CSS custom properties in `:root` so she can change the whole look by editing a few variables
- **Fast** — no heavy assets, optimized images, minimal JS
- **Print-friendly** — basic print styles

### CSS Custom Properties (Theming)

```css
:root {
  --color-primary: #6c63ff;
  --color-secondary: #ff6584;
  --color-accent: #43e97b;
  --color-bg: #fefefe;
  --color-text: #2d3436;
  --color-text-light: #636e72;
  --font-heading: "Fredoka", sans-serif;
  --font-body: "Nunito", sans-serif;
  --border-radius: 12px;
  --max-width: 1100px;
}
```

Use Google Fonts: **Fredoka** (headings) and **Nunito** (body text).

### Pages

#### 1. Homepage (`index.html`)
- Welcoming hero section with her name and a fun tagline
- Navigation bar that works on mobile (hamburger menu)
- Sections linking to other pages
- Footer with a small "Made with ❤️" note

#### 2. About Me (`about.html`)
- Space for a photo and bio
- Fun facts section (favorite color, favorite animal, etc.)
- "When I grow up" section — easy to update over the years

#### 3. Gallery (`gallery.html`)
- Responsive image/art gallery grid
- Lightbox feature for viewing images larger (vanilla JS)
- Easy to add new images by just dropping files in the images folder and adding an `<img>` tag

#### 4. Adventures (`adventures.html`)
- Blog/journal style page
- Each entry is a simple HTML `<article>` block with a date and content
- Reverse chronological order (newest first)
- Easy to add new entries by copying a template block

### Navigation

- Consistent nav bar on all pages
- Mobile hamburger menu (CSS + minimal JS, no libraries)
- Active page indicator

---

## README.md Contents

Include the following in the README:

1. **Project title and description**
2. **Live site link** (GitHub Pages URL)
3. **CI/CD status badge**
4. **How to run locally** (just open `src/index.html` in a browser)
5. **How to add new content:**
   - Adding a gallery image
   - Adding an adventure/journal entry
   - Changing the color theme
6. **How to deploy** (merge to main)
7. **Development setup** (npm install for linting tools)
8. **Folder structure explanation**

---

## CONTRIBUTING.md

Write a friendly guide aimed at a future teenage version of my daughter Bella explaining:

- How the project is organized
- How to make changes safely using branches
- How to check if your code is clean (`npm run validate`)
- How to deploy changes
- Encouragement to make the site her own

Keep the tone warm, encouraging, and jargon-free where possible.

---

## Implementation Checklist

When building this project, complete these steps in order:

1. [ ] Initialize the project with `npm init` and install dev dependencies
2. [ ] Create the folder structure
3. [ ] Set up all linter and formatter config files
4. [ ] Build the GitHub Actions pipeline (`deploy.yml`)
5. [ ] Create the CSS reset and main stylesheet with CSS custom properties
6. [ ] Build the shared navigation component (header/footer)
7. [ ] Build `index.html` (homepage)
8. [ ] Build `about.html`
9. [ ] Build `gallery.html` with lightbox
10. [ ] Build `adventures.html` with journal template
11. [ ] Test all linters pass: `npm run validate`
12. [ ] Write README.md with documentation
13. [ ] Write CONTRIBUTING.md
14. [ ] Initialize git repo, push to GitHub
15. [ ] Enable GitHub Pages in repo settings (source: GitHub Actions)
16. [ ] Verify deployment pipeline works end-to-end
17. [ ] (Optional) Connect custom domain

---

## Notes for Cursor AI

- Generate ALL files completely — do not leave placeholder comments like "add content here"
- Make every page fully functional with real sample content
- Ensure all HTML passes HTMLHint validation
- Ensure all CSS passes Stylelint validation
- Ensure all JS passes ESLint validation
- Test that the GitHub Actions workflow YAML is valid
- Use semantic HTML5 elements throughout (`<header>`, `<main>`, `<nav>`, `<article>`, `<section>`, `<footer>`)
- Do not use any external JavaScript libraries or CSS frameworks
- All interactivity must be vanilla JavaScript
