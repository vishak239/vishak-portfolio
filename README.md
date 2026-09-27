# Vishak — Portfolio

My personal portfolio site: a single-page, cinematic introduction to my work in AI, machine learning, and Python, told as an AI engineer’s journey in three acts.

**Live site:** [vishak-portfolio-gray.vercel.app](https://vishak-portfolio-gray.vercel.app) · deployed on Vercel

## Tech Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Lucide icons

## Features

- Single-page layout with sections for the hero, about, projects, journey, skills, experience, education, and contact
- Background video scenes that load poster images first and respect `prefers-reduced-motion`
- All text content kept in one typed data file, so it can be edited without touching components

## Project Structure

```text
.
├── public/
│   ├── images/            # section images and video posters
│   └── videos/            # background video clips
└── src/
    ├── app/               # layout, page, global styles
    ├── components/        # one component per section
    ├── data/
    │   └── portfolioContent.ts   # all portfolio text content
    └── types/
        └── portfolio.ts
```

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

### Production build

```bash
npm run build
npm start
```

## Editing Content

To update projects, skills, experience, or contact details, edit `src/data/portfolioContent.ts`.

## Author

**V Vishak** · [github.com/vishak239](https://github.com/vishak239) · [vishak3416@gmail.com](mailto:vishak3416@gmail.com)
