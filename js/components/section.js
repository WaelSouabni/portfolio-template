export function sectionTemplate({ label, title, content = "" }) {
  return `
    <div class="section-inner">
      ${label ? `<div class="section-label">${label}</div>` : ""}
      ${title ? `<h2 class="section-title">${title}</h2>` : ""}
      ${content}
    </div>
  `;
}
