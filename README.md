# Shivram Yadav — Resume App

A small React + Vite single-page resume/portfolio.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production build is output to `dist/` — deploy that folder to any static
host (Vercel, Netlify, GitHub Pages, S3, etc).

## Project structure

```
src/
  App.jsx                 top-level layout
  data.js                 all resume content (profile, experience, skills, education)
  index.css               global styles / design tokens
  main.jsx                React entry point
  components/
    TopLine.jsx            top bar + theme toggle
    Hero.jsx                name, title, contact links
    StatusPanel.jsx         animated stats widget
    Experience.jsx          work history
    FeaturedProject.jsx     RAG/PDF QA side project
    Skills.jsx               grouped skill chips
    Education.jsx            education history
    Footer.jsx                contact footer
  hooks/
    useTheme.js              dark/light/system theme cycling
    useCountUp.js            animated number count-up
```

To edit the resume content, edit `src/data.js` — nothing else needs to change.
