# CCNA and Cybersecurity Learning Platform

NetSec Academy is a React and Vite learning platform for networking and cybersecurity study. It includes quizzes, Cisco lab guides, threat simulations, password-strength analysis, certificates, and operating-system study tools.

## Run locally

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run typecheck
npm run build
```

## Project layout

```text
src/
  components/   Shared navigation and footer
  contexts/     Theme state
  data/         Quiz, lab, threat, and study data
  pages/        Application views
  utils/         Shared helpers
public/         Small static study assets
```

## GitHub upload

Commit the source files, `package.json`, and `package-lock.json`. Do not upload `node_modules/` or `dist/`; both are generated locally and are ignored by Git. The large Cloud Computing presentation is intentionally kept out of the repository because GitHub rejects files over 100 MB. Use Git LFS or a GitHub Release for that original presentation if it must be shared.

## Deployment

This is a client-side Vite application and can be deployed to GitHub Pages, Netlify, or Vercel. Run `npm run build` and publish the generated `dist/` directory through the hosting provider's build settings.