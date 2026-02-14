# Bella's Lifetime Website 🌟

![CI/CD Pipeline](https://github.com/asinger776/bellas-website/workflows/CI/CD%20Pipeline/badge.svg)

A beautiful, personal website for Bella that will grow with her throughout her life. Built with pure HTML, CSS, and JavaScript - no frameworks, no dependencies, just timeless code that will last for decades.

## 🌐 Live Site

Visit the website: [https://asinger776.github.io/bellas-website/](https://asinger776.github.io/bellas-website/)

## ✨ Features

- **📱 Mobile-First Responsive Design** - Looks great on phones, tablets, and desktops
- **🎨 Easy Theming** - Change the entire look by editing CSS custom properties
- **🖼️ Interactive Gallery** - Lightbox functionality for viewing artwork
- **📝 Adventures Journal** - Blog-style page for sharing stories and memories
- **♿ Accessible** - Semantic HTML5 and WCAG AA compliant
- **🚀 Fast & Lightweight** - No heavy dependencies, optimized for speed
- **🤖 Automated CI/CD** - GitHub Actions pipeline for linting and deployment
- **🖨️ Print-Friendly** - Clean print styles included

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties for theming, Grid & Flexbox layouts
- **Vanilla JavaScript** - No frameworks or libraries
- **GitHub Pages** - Free, reliable hosting
- **GitHub Actions** - Automated testing and deployment

### Development Tools

- **HTMLHint** - HTML linting and validation
- **Stylelint** - CSS linting
- **ESLint** - JavaScript linting
- **Prettier** - Code formatting

## 📁 Project Structure

```
project-root/
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI/CD pipeline
├── src/
│   ├── index.html                  # Homepage
│   ├── about.html                  # About me page
│   ├── gallery.html                # Photo/art gallery
│   ├── adventures.html             # Blog/journal
│   ├── css/
│   │   ├── reset.css               # CSS reset
│   │   └── styles.css              # Main stylesheet
│   ├── js/
│   │   └── main.js                 # Navigation & interactivity
│   ├── images/                     # Image assets
│   └── favicon.ico
├── .htmlhintrc                     # HTMLHint config
├── .stylelintrc.json               # Stylelint config
├── .eslintrc.json                  # ESLint config
├── .prettierrc                     # Prettier config
├── .gitignore
├── package.json                    # Dev dependencies
├── README.md
└── CONTRIBUTING.md
```

## 🚀 Quick Start

### Viewing Locally

No build step required! Just open the HTML files:

1. Clone the repository:
   ```bash
   git clone https://github.com/asinger776/bellas-website.git
   cd bellas-website
   ```

2. Open `src/index.html` in your browser:
   ```bash
   open src/index.html
   # or
   firefox src/index.html
   # or just double-click the file
   ```

### Development Setup

If you want to use the linting and formatting tools:

1. Install Node.js (LTS version recommended)

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run linting:
   ```bash
   npm run lint          # Run all linters
   npm run lint:html     # Lint HTML only
   npm run lint:css      # Lint CSS only
   npm run lint:js       # Lint JavaScript only
   ```

4. Format code:
   ```bash
   npm run format        # Format all files
   npm run format:check  # Check formatting without changing files
   ```

5. Validate everything:
   ```bash
   npm run validate      # Lint + format check
   ```

## 🎨 How to Customize

### Changing the Color Theme

All colors are defined as CSS custom properties in `src/css/styles.css`. Edit these values to change the entire look:

```css
:root {
  --color-primary: #6c63ff;      /* Main brand color */
  --color-secondary: #ff6584;    /* Accent color */
  --color-accent: #43e97b;       /* Highlight color */
  --color-bg: #fefefe;           /* Background color */
  --color-text: #2d3436;         /* Text color */
  --color-text-light: #636e72;   /* Light text color */
  --font-heading: "Fredoka", sans-serif;
  --font-body: "Nunito", sans-serif;
  --border-radius: 12px;
  --max-width: 1100px;
}
```

### Adding Gallery Images

1. Add your image to the `src/images/` folder
2. Open `src/gallery.html`
3. Add this code inside the `gallery-grid` div:

```html
<div class="gallery-item">
  <img src="images/your-image.jpg" alt="Description of your artwork" />
</div>
```

The lightbox functionality will work automatically!

### Adding a New Adventure Entry

1. Open `src/adventures.html`
2. Copy this template and paste it at the **top** of the adventures section (so newest entries appear first):

```html
<article class="adventure-entry">
  <div class="adventure-date">Month Day, Year</div>
  <h2 class="adventure-title">🌟 Your Adventure Title</h2>
  <div class="adventure-content">
    <p>Write about your adventure here!</p>
    <p>Add more paragraphs as needed.</p>
  </div>
</article>
```

### Adding New Pages

1. Create a new HTML file in the `src/` folder
2. Copy the structure from an existing page
3. Update the navigation in all pages to include your new page:

```html
<ul class="nav-menu">
  <li><a href="index.html">Home</a></li>
  <li><a href="about.html">About Me</a></li>
  <li><a href="gallery.html">Gallery</a></li>
  <li><a href="adventures.html">Adventures</a></li>
  <li><a href="your-new-page.html">New Page</a></li>
</ul>
```

## 🌳 Git Workflow

### Branches

- `main` - Production branch (auto-deploys to GitHub Pages)
- `develop` - Integration branch for testing
- `feature/*` - New features or pages
- `fix/*` - Bug fixes

### Making Changes

1. Create a feature branch from `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/new-gallery-page
   ```

2. Make your changes and commit:
   ```bash
   git add .
   git commit -m "feat: add new gallery page"
   ```

3. Push and create a Pull Request:
   ```bash
   git push origin feature/new-gallery-page
   ```

4. After PR is approved and CI passes, merge to `develop`

5. When ready to deploy, merge `develop` to `main`:
   ```bash
   git checkout main
   git merge develop
   git push origin main
   ```

## 🤖 CI/CD Pipeline

Every push and pull request automatically runs:

1. ✅ HTML linting (HTMLHint)
2. ✅ CSS linting (Stylelint)
3. ✅ JavaScript linting (ESLint)
4. ✅ Code formatting check (Prettier)

When code is pushed to `main` and all checks pass:

5. 🚀 Automatic deployment to GitHub Pages

## 📦 Deployment

### Setting Up GitHub Pages

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/asinger776/bellas-website.git
   git push -u origin main
   ```

2. Go to your repository settings on GitHub

3. Navigate to **Settings → Pages**

4. Under "Build and deployment":
   - Source: **GitHub Actions**
   
5. The site will be available at: `https://asinger776.github.io/bellas-website/`

### Custom Domain (Optional)

1. Go to **Settings → Pages**
2. Enter your custom domain
3. Add DNS records at your domain provider:
   - Type: `CNAME`
   - Name: `www` (or `@`)
   - Value: `asinger776.github.io`

## 🧪 Testing Checklist

Before deploying:

- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Mobile menu opens and closes properly
- [ ] Gallery lightbox works
- [ ] All links work
- [ ] Images load properly
- [ ] Responsive design works on mobile, tablet, and desktop
- [ ] All linters pass: `npm run validate`
- [ ] No console errors in browser DevTools

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JavaScript reference
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🆘 Troubleshooting

### Site not deploying?

1. Check the Actions tab in GitHub to see if the workflow failed
2. Ensure GitHub Pages is enabled in repository settings
3. Verify the `deploy.yml` workflow has proper permissions

### Linting errors?

Run `npm run lint` locally to see detailed error messages. Fix any issues before pushing.

### Mobile menu not working?

Make sure `main.js` is properly linked in all HTML files and check the browser console for JavaScript errors.

## 💝 About This Project

This website was created as a special gift that will grow and evolve over time. It's built with:

- ❤️ Love and care
- 🎨 Beautiful, modern design
- 🚀 Future-proof technology
- 📚 Best practices and standards
- ♿ Accessibility in mind

The goal is to create something that will last for decades without becoming outdated or broken by dependency rot. Pure HTML, CSS, and JavaScript will work forever!

## 📄 License

This is a personal website project. Feel free to use it as inspiration for your own projects!

---

**Made with ❤️ for Bella | May this website grow with you throughout your amazing journey! 🌟**
