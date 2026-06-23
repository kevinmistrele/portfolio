# Kevin Mistrele — Portfolio

Interactive 3D portfolio built with React, Three.js and TypeScript. It presents my
profile, experience and contact details, lets visitors download my resume, and shows a
**live preview of my GitHub projects** fetched directly from the GitHub API. The whole
interface supports **three languages** (Portuguese, English and Spanish) with the choice
persisted in the browser.

## Features

- Animated 3D hero scene (react-three-fiber + drei)
- Live GitHub project previews with featured selection and graceful fallback
- Multi-language UI: PT / EN / ES
- Downloadable resume per language (PDF)
- Experience timeline, skills and contact section
- Smooth scroll-reveal animations (framer-motion)
- Responsive, accessible, clean-code architecture

## Tech stack

React 18 · TypeScript · Vite · Three.js · @react-three/fiber · @react-three/drei · framer-motion

## Project structure

```
src/
  components/
    layout/      navbar, footer, language switcher
    scene/       3D hero scene
    sections/    hero, about, experience, projects, contact
    ui/          project card, section title
  data/          profile, skills, featured projects
  hooks/         use-language, use-projects
  i18n/          language context + translations (pt/en/es)
  services/      github-service
  types/         shared domain types
  styles/        global stylesheet
```

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Customizing your projects

The Projects section calls the GitHub API for `kevinmistrele` and lists your public,
non-fork repositories sorted by relevance. To highlight specific repos, edit
`src/data/featured-projects.ts` and add their names to `featuredProjectNames`. If the API
is unavailable, the `fallbackProjects` list is shown instead.

## Resume files

Place your PDFs in `public/resume/` (already included):
`Kevin-Mistrele-Curriculo-PT.pdf`, `Kevin-Mistrele-Resume-EN.pdf`, `Kevin-Mistrele-CV-ES.pdf`.

## Publish on GitHub

```bash
git init
git add .
git commit -m "feat: portfolio with 3D, live GitHub previews and i18n"
git branch -M main
git remote add origin https://github.com/kevinmistrele/portfolio.git
git push -u origin main
```

## Deploy with GitHub Pages

A workflow at `.github/workflows/deploy.yml` builds and deploys automatically.
In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
Every push to `main` publishes to `https://kevinmistrele.github.io/portfolio`.

Prefer Vercel or Netlify? Import the repo and use build command `npm run build` and output
directory `dist` — no extra config needed.
