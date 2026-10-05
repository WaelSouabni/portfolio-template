# Portfolio Template — Guide de personnalisation

## Règle des 80/20

Pour un nouveau client, la majorité du travail se fait dans data/.

~~~text
data/profile.js
data/experience.js
data/projects.js
data/skills.js
data/education.js
data/certifications.js
data/social.js
data/settings.js
js/config.js
~~~

## 1. Contenu source

Le français est la langue source. Remplir les fichiers data/*.js avec les informations réelles du client.

Ne pas remplir manuellement EN et AR.

## 2. Traductions

Configurer localement :

~~~text
OPENAI_API_KEY=...
~~~

Puis :

~~~bash
npm run translate
~~~

Cela génère :
- data/locales/fr.js
- data/locales/en.js
- data/locales/ar.js

## 3. Relecture

Après génération, corriger si nécessaire :
- titres professionnels ;
- jargon métier ;
- noms d'entreprises ;
- noms de produits ;
- formulations marketing ;
- arabe professionnel.

## 4. Sections

Dans data/settings.js, activer ou désactiver les sections.

## 5. Thème

Modifier js/config.js pour les couleurs et tokens visuels.

## 6. Assets

Structure recommandée :

~~~text
assets/
├── images/
│   ├── profile/
│   └── projects/
├── documents/
└── icons/
~~~

## 7. Tests multilingues

- [ ] Français
- [ ] English
- [ ] العربية
- [ ] RTL arabe
- [ ] Navigation
- [ ] Boutons
- [ ] Cartes
- [ ] Liens
- [ ] Mobile
- [ ] Desktop
- [ ] CV
- [ ] Formulaire

## 8. Checklist livraison

### Contenu
- [ ] Nom correct
- [ ] Titre professionnel
- [ ] Présentation
- [ ] Expériences
- [ ] Projets
- [ ] Compétences
- [ ] Formation
- [ ] Traductions relues

### Technique
- [ ] Aucun secret dans Git
- [ ] .env non committé
- [ ] FR / EN / AR fonctionnels
- [ ] RTL vérifié
- [ ] CV accessible
- [ ] Liens fonctionnels
- [ ] SEO configuré
- [ ] Formulaire testé
- [ ] Production testée

### Design
- [ ] Aucun placeholder
- [ ] Images optimisées
- [ ] Desktop validé
- [ ] Mobile validé
- [ ] Arabe validé

## Règle d'or

Le client fournit son contenu en français. Le moteur s'occupe du reste autant que possible.
