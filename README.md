# G. Karthik — Cybersecurity Portfolio Website

A high-performance, dark-aesthetic portfolio built with **React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React**. Designed with a red-team operator & detection engineering theme.

## 🚀 Live Demo & Hosting
This project is configured to deploy directly to GitHub Pages at:
`https://karthikgk1001.github.io`

### Quick Start (Local Development)
```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

### 🚢 Deploying to GitHub Pages (`karthikgk1001.github.io`)
1. Create a repository on GitHub named `karthikgk1001.github.io` (or `portfolio`).
2. Initialize git inside this folder:
   ```bash
   git init
   git add .
   git commit -m "feat: initial cybersecurity portfolio build"
   git branch -M main
   git remote add origin https://github.com/karthikgk1001/karthikgk1001.github.io.git
   git push -u origin main
   ```
3. In your GitHub repository settings:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
   - The included workflow in `.github/workflows/deploy.yml` will automatically build and publish your site!

---

## 🛠️ Stack & Features
- **Design Specifications**: Exact 5-section architecture with `#0C0C0C` dark theme, Google Font `Kanit`, and custom `.hero-heading` gradient text.
- **Section Order**:
  1. `HeroSection`: Massive responsive typography, mouse-tracking magnetic portrait, and animated nav.
  2. `MarqueeSection`: 2-row horizontal parallax scroll offset with 21 animated media tiles.
  3. `AboutSection`: 4 floating 3D corner artifacts, character-by-character scroll-driven text reveal.
  4. `ServicesSection`: Crisp white contrast section with huge numeric typography and 5 core cybersecurity services.
  5. `ProjectsSection`: Sticky stacking cards that scale down smoothly on scroll.
  6. `Interactive Terminal`: Working bash CLI with simulated `nmap`, `whoami`, `certs`, and hidden CTF flag `flag{...}`.
