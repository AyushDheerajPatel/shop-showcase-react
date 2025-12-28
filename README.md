# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

LIVE DEMO: shopshowcasereact.vercel.app

# shop-showcase-react — Product Showcase (Demo)

This repository is a small React + Vite demo that displays a simple product listing UI (product cards with old/new prices). It's intended as a lightweight demo for learning component composition, props, and styling in React.

**Quick links**

- Project root: `pre_react`
- Main entry: [src/main.jsx](src/main.jsx)
- App component: [src/App.jsx](src/App.jsx)

## Features

- Minimal React app scaffolded with Vite.
- Component hierarchy: `App` → `Products` → `Price`.
- Simple CSS styling in `src/*.css`.
- Scripts for dev, build, preview and lint.

## Tech Stack

- React 19
- Vite (dev server and build)
- ESLint for linting

## Project Structure

- [index.html](index.html): Vite HTML entry.
- [package.json](package.json): Scripts and dependencies.
- [src/main.jsx](src/main.jsx): App bootstrap (ReactDOM).
- [src/App.jsx](src/App.jsx): Root UI; composes the product cards.
- [src/products.jsx](src/products.jsx): `Products` component — renders product title, description and includes `Price`.
- [src/price.jsx](src/price.jsx): `Price` component — shows old and new price badges.
- `src/*.css`: Styling files (`App.css`, `products.css`, `index.css`).

## Component Overview

- `src/main.jsx` — mounts the React app into the DOM element with id `root` using `createRoot`.
- `src/App.jsx` — `App` component:
	- Defines layout styles for the product grid.
	- Renders a header and multiple `Products` components, passing `title` and `idx` props.
- `src/products.jsx` — `Products({ title, idx })`:
	- Holds static arrays for `oldPrice`, `newPrice`, and `desc`.
	- Uses `idx` to select the correct data and renders `Price`.
- `src/price.jsx` — `Price({ oldPrice, newPrice })`:
	- Displays the old price (struck-through) and a highlighted new price.

## How It Works

1. `src/main.jsx` mounts `<App />` into the DOM.
2. `App` renders multiple `<Products />` instances.
3. Each `Products` component selects product text and prices by index and renders a `Price` child.

To change product data, edit the arrays in `src/products.jsx` or refactor to import data from a JSON file or API.

## Scripts

- Install dependencies:

```bash
npm install
```

- Start development server (hot reload):

```bash
npm run dev
```

- Build for production:

```bash
npm run build
```

- Preview production build locally:

```bash
npm run preview
```

- Run linter:

```bash
npm run lint
```

#THANK YOU

