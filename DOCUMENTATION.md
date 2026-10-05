# Portfolio Template — Documentation

## 1. Overview

This repository is a reusable, dependency-free portfolio template built with HTML, CSS and JavaScript.

The goal is to separate the **portfolio engine** from the **personal content** so the same codebase can be reused for different people and projects.

### Architecture

```
Core        → reusable UI and JavaScript
Data        → profile, experience, projects, skills...
Theme       → colors and visual identity
Features    → sections and optional functionality
Assets      → images, icons and documents
```

The main rule is:

> **Customize the files in `data/` first. Avoid modifying the core engine unless you need new functionality.**

---

## 2. Quick Start

### Option A — Use GitHub

1. Create a new repository for the portfolio.
2. Copy this template into the new repository.
3. Edit the files in `data/`.
4. Add personal assets to `assets/`.
5. Deploy the repository with your preferred static hosting provider.

### Option B — Run locally

Because this is a static project, no backend or package installation is required for the basic version.

You can open `index.html` directly in a browser.

For development, a local static server is recommended because browser module behavior is more consistent when served over HTTP.

---

## 3. Personal Data

All main portfolio content is stored in:

```
data/
├── profile.js
├── experience.js
├── projects.js
├── skills.js
├── education.js
├── certifications.js
├── settings.js
└── social.js
```

### Profile

Edit `data/profile.js` for:

- name
- first name / last name
- professional role
- location
- availability
- tagline
- biography
- email
- phone
- CV path
- profile photo

### Experience

Edit `data/experience.js`.

Each experience can contain:

- company
- role
- location
- start date
- end date
- description
- achievements

Example:

```js
{
  company: "Company Name",
  role: "Full Stack Developer",
  location: "Paris, France",
  start: "2024",
  end: "Present",
  description: "Short description of the role.",
  achievements: [
    "Achievement one",
    "Achievement two"
  ]
}
```

### Projects

Edit `data/projects.js`.

Each project can contain:

- title
- description
- technologies
- image
- URL
- featured status

### Skills

Edit `data/skills.js` and organize skills by category.

### Education

Edit `data/education.js`.

### Certifications

Add certifications to `data/certifications.js`.

### Social links

Edit `data/social.js` for LinkedIn, GitHub, website and email links.

---

## 4. Enable or Disable Sections

Use `data/settings.js` to control which sections are displayed.

Available sections include:

- About
- Experience
- Skills
- Projects
- Education
- Certifications
- Services
- Testimonials
- Playground
- Contact

You can disable sections that are not relevant to a particular portfolio.

Example:

```js
sections: {
  about: true,
  experience: true,
  skills: true,
  projects: true,
  education: true,
  certifications: false,
  services: false,
  testimonials: false,
  playground: true,
  contact: true
}
```

---

## 5. Customize the Theme

Basic visual configuration is available in:

```
js/config.js
```

You can change:

- primary color
- secondary color
- background
- surface colors
- text colors
- muted text
- border radius

More detailed visual changes belong in:

```
css/main.css
css/responsive.css
```

---

## 6. Assets

Put personal assets in the `assets/` directory.

Typical assets:

```
assets/
├── images/
├── documents/
└── icons/
```

Examples:

- profile photo
- project screenshots
- CV PDF
- favicon
- company/project images

Avoid storing secrets or private credentials in this repository.

---

## 7. JavaScript Architecture

The JavaScript engine is located in:

```
js/
├── app.js
├── config.js
├── components/
└── utils/
```

### app.js

Application entry point. It loads the data and renders the portfolio.

### components/

Reusable UI components belong here.

### utils/

Generic helper functions belong here.

### config.js

Global theme configuration belongs here.

If you only want to change personal information, you normally **do not need to edit these files**.

---

## 8. Adding New Features

When adding a feature, keep the separation between:

- reusable functionality
- personal content
- visual theme
- feature configuration

For example, a playground game should be implemented as reusable functionality, while whether the playground is enabled should be controlled from `data/settings.js`.

---

## 9. SEO

For each new portfolio, update:

- page title
- meta description
- Open Graph metadata
- canonical URL
- favicon
- robots.txt
- sitemap.xml

SEO configuration should be adapted to the person's name, role and domain.

---

## 10. Contact Form

The template can support a contact form, but production email delivery should use a proper backend or form service.

Never put private API keys directly inside client-side JavaScript.

If an external service is used, keep secrets in environment variables on the hosting platform or in a server-side function.

---

## 11. Deployment

The project is static and can be deployed on:

- Vercel
- GitHub Pages
- Netlify
- any static hosting provider

For a Vercel deployment:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Use the repository root as the project root.
4. No build command is required for the basic static version.
5. Deploy.

After deployment, verify:

- navigation
- responsive layout
- images
- CV link
- project links
- social links
- contact form
- SEO metadata

---

## 12. Recommended Workflow for a New Client

When creating a portfolio for a new person:

### Step 1 — Copy the template

Create a separate repository for the client.

### Step 2 — Collect content

Get the client's:

- CV
- professional photo
- projects
- social links
- contact information
- preferred colors
- domain name

### Step 3 — Fill the Data layer

Update the files inside `data/`.

### Step 4 — Add assets

Add images and documents inside `assets/`.

### Step 5 — Configure the theme

Update `js/config.js`.

### Step 6 — Enable required features

Update `data/settings.js`.

### Step 7 — Test

Check desktop, tablet and mobile.

### Step 8 — Deploy

Deploy the client repository independently.

---

## 13. Security Rules

Never commit:

- API keys
- passwords
- access tokens
- private certificates
- `.env` files containing secrets
- private client information

Client-specific private information should stay outside the public template repository.

---

## 14. Design Principle

The template should evolve as a reusable product.

When improving the portfolio engine, prefer changes that benefit every future portfolio.

When adding personal content, put it in the Data or Assets layer.

This keeps the template maintainable and makes future client projects faster to build.
