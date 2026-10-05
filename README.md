# Portfolio Template

A reusable, data-driven personal portfolio template built with HTML, CSS and vanilla JavaScript.

## Architecture

- **Core**: reusable UI and rendering logic
- **Data**: profile-specific content
- **Theme**: visual identity and design tokens
- **Features**: optional sections and functionality
- **Assets**: images, documents and icons

## Customization

Edit files in `data/` and `js/config.js` to create a new portfolio without rewriting the core UI.

## Structure

```
portfolio-template/
├── index.html
├── css/
├── js/
│   ├── components/
│   ├── games/
│   └── utils/
├── data/
├── assets/
├── api/
└── README.md
```

## Development

This template is intentionally dependency-free so it can be deployed directly to Vercel, GitHub Pages or any static hosting provider.
