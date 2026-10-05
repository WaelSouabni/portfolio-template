import { getAvailableLanguages, getLanguage, setLanguage } from "./index.js";
import { applyDirection } from "./direction.js";

const labels = { fr: "🇫🇷 Français", en: "🇬🇧 English", ar: "🇸🇦 العربية" };

export function renderLanguageSelector(onChange) {
  const current = getLanguage();
  const wrapper = document.createElement("div");
  wrapper.className = "language-switcher";
  wrapper.setAttribute("aria-label", "Language selector");

  const select = document.createElement("select");
  select.id = "language-select";
  select.className = "language-select";
  select.setAttribute("aria-label", "Language");
  getAvailableLanguages().forEach(({ lang }) => {
    const option = document.createElement("option");
    option.value = lang;
    option.textContent = labels[lang] || lang;
    option.selected = lang === current;
    select.appendChild(option);
  });

  select.addEventListener("change", () => {
    const lang = setLanguage(select.value);
    onChange(lang);
  });

  wrapper.appendChild(select);
  return wrapper;
}

export { applyDirection };
