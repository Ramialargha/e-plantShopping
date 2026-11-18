# Paradise Nursery – e-plantShopping

An online plant shop built with **React**, **Redux Toolkit** and **Vite**.

## Features
- Landing page with a *Get Started* button and an About Us section
- Navbar with links to the landing page, plant listing and shopping cart, plus a live cart-quantity badge
- Plants grouped into three categories (Air Purifying, Aromatic Fragrant, Insect Repellent), each shown as a card with image, name, description, price and *Add to Cart*
- Cart page with a card per plant: thumbnail, unit price, subtotal, `+` / `-` quantity buttons and *Delete*
- Total cart amount, *Continue Shopping* and *Checkout* (placeholder alert) buttons

## Project structure
| File | Purpose |
|------|---------|
| `src/App.jsx` / `App.css` | Landing page and view switching |
| `src/AboutUs.jsx` | About section on the landing page |
| `src/ProductList.jsx` | Navbar, plant catalogue, add-to-cart logic |
| `src/CartItem.jsx` | Cart page |
| `src/CartSlice.jsx` | Redux slice: `addItem`, `removeItem`, `updateQuantity` |
| `src/store.js` | Redux store |

## Run locally
```bash
npm install
npm run dev
```

## Deploy to GitHub Pages
1. Make sure the repo is named `e-plantShopping` (matches `base` in `vite.config.js`).
2. Set `homepage` in `package.json` to `https://<your-username>.github.io/e-plantShopping`.
3. Run `npm run deploy` and enable Pages from the `gh-pages` branch in repo settings.

Live URL: https://Ramialargha.github.io/e-plantShopping/
