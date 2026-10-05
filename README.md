# Portfolio Template

Un template de portfolio personnel réutilisable, piloté par les données et développé en HTML, CSS et JavaScript vanilla.

Le projet sépare le **moteur du portfolio** du contenu, de l'identité visuelle et des assets propres à chaque personne.

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

Pour le guide complet d'utilisation, consultez **[DOCUMENTATION.md](./DOCUMENTATION.md)**.

Pour les règles de personnalisation et la checklist avant livraison, consultez **[CUSTOMIZATION.md](./CUSTOMIZATION.md)**.

## What to Customize

Pour un portfolio classique, commencez par :

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

Vous n'avez normalement **pas besoin de réécrire `js/app.js`**.

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

Ce template est volontairement sans dépendance obligatoire afin de pouvoir être déployé directement sur Vercel, GitHub Pages ou tout hébergement statique.

## Security

Ne versionnez jamais de clés API, mots de passe, tokens, certificats privés ou autres secrets dans ce dépôt public.

Les informations privées propres aux clients doivent rester en dehors du template public.

## Reuse

Pour un nouveau client, créez un dépôt séparé à partir de ce template. Gardez le contenu du client indépendant du moteur réutilisable afin de pouvoir faire évoluer le template sans exposer de données privées.