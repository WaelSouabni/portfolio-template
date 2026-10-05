import { profile } from "../data/profile.js";
import { experience } from "../data/experience.js";
import { projects } from "../data/projects.js";
import { skills } from "../data/skills.js";
import { education } from "../data/education.js";
import { certifications } from "../data/certifications.js";
import { settings } from "../data/settings.js";
import { social } from "../data/social.js";
import { theme } from "./config.js";
import { escapeHtml } from "./utils/render.js";

document.title = `${profile.name} — ${profile.role}`;

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
  if (!enabled) element.remove();
  else element.innerHTML = html;
}

const socialLinks = Object.entries(social)
  .filter(([, value]) => value)
  .map(([name, value]) => `<a class="btn" href="${escapeHtml(value)}" target="_blank" rel="noreferrer">${escapeHtml(name)}</a>`)
  .join("");

setSection("hero", `
  <div class="section-inner">
    <div class="section-label">${escapeHtml(profile.availability)}</div>
    <h1 class="section-title">${escapeHtml(profile.name)}</h1>
    <p class="muted">${escapeHtml(profile.role)}</p>
    <p>${escapeHtml(profile.tagline)}</p>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:24px">
      <a class="btn btn-primary" href="#contact">Contact me</a>
      ${profile.cv ? `<a class="btn" href="${escapeHtml(profile.cv)}" target="_blank">View CV</a>` : ""}
    </div>
  </div>
`);

setSection("about", `
  <div class="section-inner">
    <div class="section-label">About</div>
    <h2 class="section-title">Profile</h2>
    <p class="muted">${escapeHtml(profile.about)}</p>
  </div>
`, settings.sections.about);

setSection("experience", `
  <div class="section-inner">
    <div class="section-label">Experience</div>
    <h2 class="section-title">Career</h2>
    <div class="grid">
      ${experience.map(item => `<article class="card"><h3>${escapeHtml(item.role)}</h3><strong>${escapeHtml(item.company)}</strong><p class="muted">${escapeHtml(item.start)} – ${escapeHtml(item.end)} · ${escapeHtml(item.location)}</p><p>${escapeHtml(item.description)}</p><ul>${item.achievements.map(a => `<li>${escapeHtml(a)}</li>`).join("")}</ul></article>`).join("")}
    </div>
  </div>
`, settings.sections.experience);

setSection("skills", `
  <div class="section-inner">
    <div class="section-label">Skills</div>
    <h2 class="section-title">Expertise</h2>
    <div class="grid grid-3">
      ${Object.entries(skills).map(([group, values]) => `<article class="card"><h3>${escapeHtml(group)}</h3><div style="display:flex;gap:8px;flex-wrap:wrap">${values.map(v => `<span class="tag">${escapeHtml(v)}</span>`).join("")}</div></article>`).join("")}
    </div>
  </div>
`, settings.sections.skills);

setSection("projects", `
  <div class="section-inner">
    <div class="section-label">Projects</div>
    <h2 class="section-title">Selected work</h2>
    <div class="grid grid-2">
      ${projects.map(p => `<article class="card"><h3>${escapeHtml(p.title)}</h3><p class="muted">${escapeHtml(p.description)}</p><div style="display:flex;gap:8px;flex-wrap:wrap">${p.technologies.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("")}</div>${p.url ? `<p><a class="btn" href="${escapeHtml(p.url)}" target="_blank" rel="noreferrer">View project</a></p>` : ""}</article>`).join("")}
    </div>
  </div>
`, settings.sections.projects);

setSection("education", `
  <div class="section-inner">
    <div class="section-label">Education</div>
    <h2 class="section-title">Education</h2>
    <div class="grid">
      ${education.map(e => `<article class="card"><h3>${escapeHtml(e.degree)}</h3><strong>${escapeHtml(e.institution)}</strong><p class="muted">${escapeHtml(e.period)}</p><p>${escapeHtml(e.description)}</p></article>`).join("")}
    </div>
  </div>
`, settings.sections.education);

setSection("certifications", `
  <div class="section-inner">
    <div class="section-label">Certifications</div>
    <h2 class="section-title">Certifications</h2>
    <div class="grid">${certifications.map(c => `<article class="card"><h3>${escapeHtml(c.name)}</h3><p class="muted">${escapeHtml(c.issuer || "")}</p></article>`).join("")}</div>
  </div>
`, settings.sections.certifications);

setSection("services", "", settings.sections.services);
setSection("testimonials", "", settings.sections.testimonials);
setSection("playground", "", settings.sections.playground);

setSection("contact", `
  <div class="section-inner">
    <div class="section-label">Contact</div>
    <h2 class="section-title">Let's talk</h2>
    <p class="muted">Interested in working together? Reach out directly.</p>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:20px">
      <a class="btn btn-primary" href="mailto:${escapeHtml(profile.email)}">Email me</a>
      ${socialLinks}
    </div>
  </div>
`, settings.sections.contact);

const nav = document.getElementById("navbar");
nav.innerHTML = `<div class="section-inner" style="padding:20px 0;display:flex;justify-content:space-between;align-items:center"><strong>${escapeHtml(profile.firstName)}.</strong><a class="btn" href="#contact">Contact</a></div>`;

document.getElementById("footer").innerHTML = `<div class="section-inner" style="padding:30px 0"><p class="muted">© ${new Date().getFullYear()} ${escapeHtml(profile.name)}</p></div>`;
