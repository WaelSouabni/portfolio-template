# Portfolio Template — Customization Guide

This guide is for someone who wants to turn the template into a personal portfolio without changing the core engine.

## 1. The 80/20 Rule

For a normal portfolio, most customization should happen in only these files:

```
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

You should not need to rewrite `js/app.js`.

---

## 2. Change the Identity

Start with:

```
data/profile.js
```

Replace the placeholder information with the person's real information.

Then update:

```
data/social.js
```

with the correct LinkedIn, GitHub, website and email.

---

## 3. Add Professional Experience

Open:

```
data/experience.js
```

Add one object per position.

Keep the description concise and use achievements for measurable or important results.

---

## 4. Add Projects

Open:

```
data/projects.js
```

For each project, provide:

- a clear title
- a short explanation
- relevant technologies
- a project image when available
- a live URL when available
- a repository URL when appropriate
- whether the project should be featured

The project description should explain the value of the project, not only list technologies.

---

## 5. Manage Skills

Group skills according to the person's profile.

Typical groups:

```
frontend
backend
tools
```

Add or remove groups as needed.

---

## 6. Manage Sections

Use:

```
data/settings.js
```

A section that is not relevant should be disabled instead of being left empty.

For example, if someone has no certifications:

```js
certifications: false
```

This keeps the portfolio clean.

---

## 7. Change Colors

Open:

```
js/config.js
```

Change the theme values to match the person's visual identity.

For a professional portfolio, keep strong contrast and readable text.

Do not change many colors at once. A simple palette is usually easier to maintain.

---

## 8. Add Images and Documents

Recommended structure:

```
assets/
├── images/
│   ├── profile.jpg
│   └── projects/
├── documents/
│   └── CV.pdf
└── icons/
    └── favicon.svg
```

Use optimized images to keep page loading fast.

---

## 9. Customize the CSS

Only edit:

```
css/main.css
css/responsive.css
```

when the theme configuration is not enough.

Keep reusable styles generic so future portfolios can benefit from the same improvements.

---

## 10. Customize the JavaScript

Only modify:

```
js/app.js
js/components/
js/utils/
```

when the functionality itself needs to change.

Before modifying the core engine, ask:

> Is this change useful for every portfolio?

If yes, it probably belongs in the template engine.

If no, consider keeping it specific to the client project.

---

## 11. Client-Specific vs Template Changes

### Template change

Example:

> Improve the mobile navigation for all portfolios.

This should be implemented in the template.

### Client-specific change

Example:

> Add a special section describing this client's architecture.

This should normally be implemented in the client's portfolio, not in the reusable template.

---

## 12. Before Delivery Checklist

### Content

- [ ] Name is correct
- [ ] Professional title is correct
- [ ] About section is correct
- [ ] Experience is complete
- [ ] Projects are complete
- [ ] Skills are correct
- [ ] Education is correct
- [ ] Social links work
- [ ] Email is correct

### Visual

- [ ] Colors are consistent
- [ ] Images are optimized
- [ ] Desktop layout checked
- [ ] Mobile layout checked
- [ ] No placeholder text remains

### Technical

- [ ] No secrets committed
- [ ] CV opens correctly
- [ ] External links work
- [ ] Contact form tested
- [ ] SEO metadata updated
- [ ] robots.txt checked
- [ ] sitemap.xml updated
- [ ] Production deployment tested

---

## 13. Golden Rule

**Data changes should not require Core changes.**

If you repeatedly need to modify the same core code for different clients, consider improving the template so that the behavior becomes configurable.

That is how this repository should gradually evolve from a personal portfolio into a reusable portfolio engine.
