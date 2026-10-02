# 360° Pizza & Cucina

Responsive restaurant website for 360° Pizza & Cucina in Latina Scalo, Italy.

The site presents the restaurant, menu, panini formulas, opening hours, location, and contact options in a single-page experience optimized for desktop and mobile.

## Features

- Responsive layout with mobile navigation and fixed mobile contact actions
- Interactive menu categories for red pizzas, white pizzas, special pizzas, and fried food
- Panini builder details with formulas, meats, sauces, and condiments
- Restaurant information, opening hours, phone links, and WhatsApp links
- Vite-powered React and TypeScript development setup

## Tech stack

- React 18
- TypeScript
- Vite
- Lucide React icons
- CSS with responsive media queries

## Getting started

Requirements: Node.js 18 or newer and npm.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project structure

```text
src/
├── components/       React page sections and layout components
├── data/              Menu, restaurant, and opening-hours data
├── styles/            Global and section-specific CSS
├── types/             Shared TypeScript types
└── main.tsx           Application entry point
public/                Static assets such as the logo and robots.txt
```

Restaurant details and menu content can be updated in `src/data/restaurant.ts` and `src/data/menu.ts`.

## Deployment

The project produces a static bundle in `dist/` and can be deployed to any static hosting provider that supports single-page applications.
