import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(".");
const sourceFiles = {
  profile: "data/profile.js",
  experience: "data/experience.js",
  projects: "data/projects.js",
  skills: "data/skills.js",
  education: "data/education.js",
  certifications: "data/certifications.js",
  social: "data/social.js"
};

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  console.error("OPENAI_API_KEY est requis. La clé reste locale et n'est jamais envoyée au navigateur.");
  process.exit(1);
}

const model = process.env.OPENAI_TRANSLATION_MODEL || "gpt-6-luna";

async function loadSource() {
  const result = {};
  for (const [key, file] of Object.entries(sourceFiles)) {
    const module = await import(pathToFileURL(resolve(file)).href);
    result[key] = module[key];
  }
  return result;
}

function buildPrompt(source, language, languageName) {
  return [
    `Translate this professional portfolio content from French to ${languageName} (${language}). Return ONLY valid JSON.`,
    "",
    "Rules:",
    "- Preserve exactly the same JSON structure, array lengths, keys and data types.",
    "- Translate human-readable text only.",
    "- Never translate URLs, file paths, email addresses, technology names, product names, company names or proper nouns unless they are clearly ordinary descriptive text.",
    "- Keep years, dates and numeric values unchanged.",
    "- Keep the tone professional, natural and concise.",
    "- For Arabic, use Modern Standard Arabic suitable for a professional portfolio.",
    "",
    JSON.stringify(source, null, 2)
  ].join("\n");
}

async function translate(source, language, languageName) {
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      input: buildPrompt(source, language, languageName)
    })
  });

  if (!response.ok) {
    throw new Error(`OpenAI API ${response.status}: ${await response.text()}`);
  }

  const data = await response.json();
  const text = data.output_text?.trim();
  if (!text) throw new Error("Réponse de traduction vide.");

  return JSON.parse(text.replace(/^\`\`\`json\s*/i, "").replace(/\s*\`\`\`$/, ""));
}

function localeModule(lang, dir, translated, ui) {
  return `export const locale = ${JSON.stringify({
    lang, dir, ui, ...translated
  }, null, 2)};\n`;
}

const source = await loadSource();
const ui = {
  fr: {
    language: "Langue",
    nav: { about: "À propos", experience: "Expérience", skills: "Compétences", projects: "Projets", education: "Formation", certifications: "Certifications", contact: "Contact" },
    hero: { contact: "Me contacter", cv: "Voir mon CV" },
    about: { label: "À propos", title: "Profil" },
    experience: { label: "Expérience", title: "Parcours professionnel", present: "Aujourd’hui" },
    skills: { label: "Compétences", title: "Expertise" },
    projects: { label: "Projets", title: "Réalisations", view: "Voir le projet" },
    education: { label: "Formation", title: "Formation" },
    certifications: { label: "Certifications", title: "Certifications" },
    contact: { label: "Contact", title: "Échangeons", text: "Un projet, une opportunité ou une question ? Écrivez-moi.", email: "M’écrire" },
    footer: "Tous droits réservés."
  },
  en: {
    language: "Language",
    nav: { about: "About", experience: "Experience", skills: "Skills", projects: "Projects", education: "Education", certifications: "Certifications", contact: "Contact" },
    hero: { contact: "Contact me", cv: "View CV" },
    about: { label: "About", title: "Profile" },
    experience: { label: "Experience", title: "Career", present: "Present" },
    skills: { label: "Skills", title: "Expertise" },
    projects: { label: "Projects", title: "Selected work", view: "View project" },
    education: { label: "Education", title: "Education" },
    certifications: { label: "Certifications", title: "Certifications" },
    contact: { label: "Contact", title: "Let's talk", text: "A project, an opportunity or a question? Get in touch.", email: "Email me" },
    footer: "All rights reserved."
  },
  ar: {
    language: "اللغة",
    nav: { about: "نبذة عني", experience: "الخبرة", skills: "المهارات", projects: "المشاريع", education: "التكوين", certifications: "الشهادات", contact: "تواصل" },
    hero: { contact: "تواصل معي", cv: "عرض السيرة الذاتية" },
    about: { label: "نبذة عني", title: "الملف الشخصي" },
    experience: { label: "الخبرة", title: "المسار المهني", present: "حاليًا" },
    skills: { label: "المهارات", title: "الخبرات" },
    projects: { label: "المشاريع", title: "أعمال مختارة", view: "عرض المشروع" },
    education: { label: "التكوين", title: "التكوين والدراسة" },
    certifications: { label: "الشهادات", title: "الشهادات" },
    contact: { label: "تواصل", title: "لنتحدث", text: "لديك مشروع أو فرصة أو سؤال؟ تواصل معي.", email: "راسلني" },
    footer: "جميع الحقوق محفوظة."
  }
};

await mkdir(resolve("data/locales"), { recursive: true });

await writeFile(resolve("data/locales/fr.js"), localeModule("fr", "ltr", source, ui.fr), "utf8");
for (const [lang, name, dir] of [["en", "English", "ltr"], ["ar", "Arabic", "rtl"]]) {
  console.log(`Traduction ${lang}...`);
  const translated = await translate(source, lang, name);
  await writeFile(resolve(`data/locales/${lang}.js`), localeModule(lang, dir, translated, ui[lang]), "utf8");
}

console.log("Locales FR / EN / AR générées dans data/locales/.");
