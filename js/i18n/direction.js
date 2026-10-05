export function applyDirection(locale) {
  const root = document.documentElement;
  root.lang = locale.lang;
  root.dir = locale.dir;
  root.dataset.lang = locale.lang;
}
