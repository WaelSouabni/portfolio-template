# Portfolio Template — Documentation

## 1. Objectif

Le template sépare le moteur réutilisable, le contenu français, les traductions, le thème, les fonctionnalités et les assets.

Règle d'or : une modification des données ne doit pas nécessiter de modification du Core.

## 2. Multilingue

Langues disponibles :
- Français, langue par défaut
- English
- العربية, avec RTL

Le choix de langue est stocké dans localStorage. Sans choix mémorisé, le site démarre en français.

Les fichiers de data/ sont la source française. Les fichiers de data/locales/ sont utilisés par le navigateur.

## 3. Workflow client

~~~text
CV / informations
      ↓
Remplissage FR
      ↓
npm run translate
      ↓
FR + EN + AR
      ↓
Relecture
      ↓
Tests desktop / mobile / RTL
      ↓
Vercel
~~~

## 4. Traduction automatique

scripts/translate.mjs :

1. charge les sources data/*.js ;
2. demande une traduction structurée ;
3. conserve les clés, structures, URLs, technologies et dates ;
4. écrit les locales ;
5. produit une version française basée sur la source.

La clé est lue via OPENAI_API_KEY côté Node.js uniquement.

Important : la traduction automatique est une première version. Relire les termes métier, noms propres, titres professionnels et textes arabes avant livraison.

## 5. Modifier le contenu

Modifier les sources françaises :
- data/profile.js
- data/experience.js
- data/projects.js
- data/skills.js
- data/education.js
- data/certifications.js
- data/social.js

Ne pas traduire manuellement avant la génération.

## 6. Configuration

data/settings.js contrôle la langue :

~~~js
language: {
  default: "fr",
  available: ["fr", "en", "ar"],
  autoDetect: false
}
~~~

Le démarrage en français est volontairement stable.

## 7. RTL arabe

Quand ar est sélectionné, le document passe en lang=ar et dir=rtl.

Le Core adapte la navigation, les listes, boutons, tags, alignements et sélecteur de langue.

Toute nouvelle fonctionnalité doit être testée en arabe.

## 8. SEO multilingue

Pour une évolution avancée :
- title localisé ;
- meta description localisée ;
- Open Graph ;
- canonical ;
- hreflang ;
- sitemap ;
- robots.txt.

Le système actuel change la langue côté client. Une future version peut proposer /fr/, /en/ et /ar/ pour un SEO multilingue plus fort.

## 9. Déploiement

Le site est statique et peut être déployé sur Vercel, GitHub Pages, Netlify ou un hébergement équivalent.

Avant production :
- tester les trois langues ;
- tester le RTL ;
- tester mobile ;
- vérifier CV, liens, images, SEO et formulaire.

## 10. Évolution

Si une amélioration est utile à plusieurs clients, elle appartient au Core.

Si elle concerne un seul client, elle reste dans son repository.
