# Portfolio Template

A reusable, data-driven personal portfolio template built with HTML, CSS and vanilla JavaScript.

The project separates the reusable **portfolio engine** from each person's content, visual identity and assets.

## Architecture

- **Core**: reusable UI and rendering logic
- **Data**: profile-specific content
- **Theme**: visual identity and design tokens
- **Features**: optional sections and functionality
- **Assets**: images, documents and icons

> **Main principle:** Change the Data layer for a new person; change the Core only when improving reusable functionality.

## Quick Start

1. Copy or clone this repository into a new project.
2. Edit the files in `data/`.
3. Add personal images and documents to `assets/`.
4. Adjust the theme in `js/config.js`.
5. Test the portfolio on desktop and mobile.
6. Deploy it to your preferred static hosting provider.

For the complete setup guide, see **[DOCUMENTATION.md](./DOCUMENTATION.md)**.

For detailed customization rules and the delivery checklist, see **[CUSTOMIZATION.md](./CUSTOMIZATION.md)**.

## What to Customize

For a normal portfolio, start with:

```text
data/profile.js
data/experience.js
data/projects.js
data/skills.js
data/education.js
data/certifications.js
data/settings.js
data/social.js
js/config.js
```

You normally do **not** need to rewrite `js/app.js`.

## Structure

```text
portfolio-template/
├── index.html
├── css/
├── js/
│   ├── components/
│   └── utils/
├── data/
├── assets/
├── DOCUMENTATION.md
├── CUSTOMIZATION.md
└── README.md
```

## Development

This template is intentionally dependency-free so it can be deployed directly to Vercel, GitHub Pages or any static hosting provider.

## Security

Never commit API keys, passwords, access tokens, private certificates or other secrets to this public repository.

Client-specific private information should remain outside the public template.

## Reuse

For a new client, create a separate repository from this template. Keep client content independent from the reusable engine so improvements to the template can continue without exposing private client data.