import { locale as fr } from "../../data/locales/fr.js";
import { locale as en } from "../../data/locales/en.js";
import { locale as ar } from "../../data/locales/ar.js";

const locales = { fr, en, ar };
const STORAGE_KEY = "portfolio-language";

export function getAvailableLanguages() {
  return Object.values(locales).map(({ lang, dir }) => ({ lang, dir }));
}

export function getLanguage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved && locales[saved] ? saved : "fr";
}

export function setLanguage(lang) {
  if (!locales[lang]) return getLanguage();
  localStorage.setItem(STORAGE_KEY, lang);
  return lang;
}

export function getLocale(lang = getLanguage()) {
  return locales[lang] || locales.fr;
}
