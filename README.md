# Physics Formula Viewer Frontend

## Overview

This is the frontend for the Physics Formula Viewer application. It is built with Next.js and TypeScript, and communicates with a Flask backend API.

- **Live Site:** [https://physicswebprod.vercel.app](https://physicswebprod.vercel.app)
- **Backend:** See [physics-backend](https://github.com/onareach/physics-backend), deployed at [Heroku API URL](https://my-physics-formula-viewer-3x-3e0ec7edbc22.herokuapp.com)

## Features

- Render LaTeX formulas using MathJax
- Tooltip previews of formula descriptions
- Dynamic routing for formula detail views

## Tech Stack

- Next.js
- TypeScript
- better-react-mathjax
- Tailwind CSS
- Vercel deployment

## Project Structure

```
physics-frontend/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── formula/[id]/
├── public/
├── package.json
├── tsconfig.json
├── next.config.ts
├── .env.local
```

## Getting Started

1. Clone the repo:

```bash
git clone https://github.com/onareach/physics-frontend.git
cd physics-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Configure the environment:

```
# .env.local
NEXT_PUBLIC_API_URL=https://my-physics-formula-viewer-3x-3e0ec7edbc22.herokuapp.com
```

4. Start the dev server:

```bash
npm run dev
```

## Production Build

```bash
npm run build
npm run start
```

## Deployment

This project is automatically deployed via Vercel when changes are pushed to `main`.

## License

MIT License.