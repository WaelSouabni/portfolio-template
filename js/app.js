import { settings } from "../data/settings.js";
import { theme } from "./config.js";
import { escapeHtml } from "./utils/render.js";
import { getLocale, getLanguage } from "./i18n/index.js";
import { applyDirection } from "./i18n/direction.js";
import { renderLanguageSelector } from "./i18n/language.js";

const root = document.documentElement;

Object.entries(theme).forEach(([key, value]) => {
  const cssName = {
    primary: "--color-primary",
    secondary: "--color-secondary",
    background: "--color-bg",
    surface: "--color-surface",
    text: "--color-text",
    muted: "--color-muted",
    radius: "--radius"
  }[key];

  if (cssName) root.style.setProperty(cssName, value);
});

function setSection(id, html, enabled = true) {
  const element = document.getElementById(id);
  if (!element) return;

  element.hidden = !enabled;
  if (enabled) element.innerHTML = html;
}

function renderNavigation(locale) {
  const nav = document.getElementById("navbar");
  const { ui } = locale;

  const links = [
    ["about", ui.nav.about],
    ["experience", ui.nav.experience],
    ["skills", ui.nav.skills],
    ["projects", ui.nav.projects],
    ["education", ui.nav.education],
    ["certifications", ui.nav.certifications],
    ["contact", ui.nav.contact]
  ]
    .filter(([id]) => settings.sections[id])
    .map(([id, label]) => `<a href="#${id}">${escapeHtml(label)}</a>`)
    .join("");

  nav.innerHTML = `
    <div class="nav-inner">
      <a class="brand" href="#">${escapeHtml(locale.profile.firstName)}.</a>
      <div class="nav-actions">
        <nav class="nav-links">${links}</nav>
        <div id="language-slot"></div>
      </div>
    </div>
  `;

  document.getElementById("language-slot").appendChild(
    renderLanguageSelector(() => render())
  );
}

function render(locale = getLocale(getLanguage())) {
  applyDirection(locale);
  document.title = `${locale.profile.name} — ${locale.profile.role}`;

  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = locale.profile.tagline;

  renderNavigation(locale);

  const socialLinks = Object.entries(locale.social)
    .filter(([, value]) => value)
    .map(([name, value]) =>
      `<a class="btn" href="${escapeHtml(value)}" target="_blank" rel="noreferrer">${escapeHtml(name)}</a>`
    )
    .join("");

  setSection("hero", `
    <div class="section-inner hero-content">
      <div class="section-label">${escapeHtml(locale.profile.availability)}</div>
      <h1 class="section-title">${escapeHtml(locale.profile.name)}</h1>
      <p class="role">${escapeHtml(locale.profile.role)}</p>
      <p class="muted hero-tagline">${escapeHtml(locale.profile.tagline)}</p>
      <div class="actions">
        <a class="btn btn-primary" href="#contact">${escapeHtml(locale.ui.hero.contact)}</a>
        ${locale.profile.cv ? `<a class="btn" href="${escapeHtml(locale.profile.cv)}" target="_blank" rel="noreferrer">${escapeHtml(locale.ui.hero.cv)}</a>` : ""}
      </div>
    </div>
  `);

  setSection("about", `
    <div class="section-inner">
      <div class="section-label">${escapeHtml(locale.ui.about.label)}</div>
      <h2 class="section-title">${escapeHtml(locale.ui.about.title)}</h2>
      <p class="muted reading-width">${escapeHtml(locale.profile.about)}</p>
    </div>
  `, settings.sections.about);

  setSection("experience", `
    <div class="section-inner">
      <div class="section-label">${escapeHtml(locale.ui.experience.label)}</div>
      <h2 class="section-title">${escapeHtml(locale.ui.experience.title)}</h2>
      <div class="grid">
        ${locale.experience.map(item => `
          <article class="card">
            <h3>${escapeHtml(item.role)}</h3>
            <strong>${escapeHtml(item.company)}</strong>
            <p class="muted">${escapeHtml(item.start)} – ${escapeHtml(item.end)} · ${escapeHtml(item.location)}</p>
            <p>${escapeHtml(item.description)}</p>
            <ul>${item.achievements.map(a => `<li>${escapeHtml(a)}</li>`).join("")}</ul>
          </article>
        `).join("")}
      </div>
    </div>
  `, settings.sections.experience);

  setSection("skills", `
    <div class="section-inner">
      <div class="section-label">${escapeHtml(locale.ui.skills.label)}</div>
      <h2 class="section-title">${escapeHtml(locale.ui.skills.title)}</h2>
      <div class="grid grid-3">
        ${Object.entries(locale.skills).map(([group, values]) => `
          <article class="card">
            <h3>${escapeHtml(locale.skillLabels?.[group] || group)}</h3>
            <div class="tags">${values.map(v => `<span class="tag">${escapeHtml(v)}</span>`).join("")}</div>
          </article>
        `).join("")}
      </div>
    </div>
  `, settings.sections.skills);

  setSection("projects", `
    <div class="section-inner">
      <div class="section-label">${escapeHtml(locale.ui.projects.label)}</div>
      <h2 class="section-title">${escapeHtml(locale.ui.projects.title)}</h2>
      <div class="grid grid-2">
        ${locale.projects.map(p => `
          <article class="card project-card">
            ${p.image ? `<img src="${escapeHtml(p.image)}" alt="" loading="lazy">` : ""}
            <h3>${escapeHtml(p.title)}</h3>
            <p class="muted">${escapeHtml(p.description)}</p>
            <div class="tags">${p.technologies.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("")}</div>
            ${p.url ? `<p><a class="btn" href="${escapeHtml(p.url)}" target="_blank" rel="noreferrer">${escapeHtml(locale.ui.projects.view)}</a></p>` : ""}
          </article>
        `).join("")}
      </div>
    </div>
  `, settings.sections.projects);

  setSection("education", `
    <div class="section-inner">
      <div class="section-label">${escapeHtml(locale.ui.education.label)}</div>
      <h2 class="section-title">${escapeHtml(locale.ui.education.title)}</h2>
      <div class="grid">
        ${locale.education.map(item => `
          <article class="card">
            <h3>${escapeHtml(item.degree)}</h3>
            <strong>${escapeHtml(item.institution)}</strong>
            <p class="muted">${escapeHtml(item.period)}</p>
            ${item.description ? `<p>${escapeHtml(item.description)}</p>` : ""}
          </article>
        `).join("")}
      </div>
    </div>
  `, settings.sections.education);

  setSection("certifications", `
    <div class="section-inner">
      <div class="section-label">${escapeHtml(locale.ui.certifications.label)}</div>
      <h2 class="section-title">${escapeHtml(locale.ui.certifications.title)}</h2>
      <div class="grid">
        ${locale.certifications.map(item => `
          <article class="card"><h3>${escapeHtml(item.name)}</h3><p class="muted">${escapeHtml(item.issuer || "")}</p></article>
        `).join("")}
      </div>
    </div>
  `, settings.sections.certifications);

  setSection("services", "", settings.sections.services);
  setSection("testimonials", "", settings.sections.testimonials);
  setSection("playground", "", settings.sections.playground);

  setSection("contact", `
    <div class="section-inner">
      <div class="section-label">${escapeHtml(locale.ui.contact.label)}</div>
      <h2 class="section-title">${escapeHtml(locale.ui.contact.title)}</h2>
      <p class="muted reading-width">${escapeHtml(locale.ui.contact.text)}</p>
      <div class="actions">
        <a class="btn btn-primary" href="mailto:${escapeHtml(locale.profile.email)}">${escapeHtml(locale.ui.contact.email)}</a>
        ${socialLinks}
      </div>
    </div>
  `, settings.sections.contact);

  document.getElementById("footer").innerHTML = `
    <div class="section-inner footer-inner">
      <p class="muted">© ${new Date().getFullYear()} ${escapeHtml(locale.profile.name)} · ${escapeHtml(locale.ui.footer)}</p>
    </div>
  `;
}

render();
