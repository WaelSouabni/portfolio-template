# Portfolio Template

Template de portfolio professionnel réutilisable en HTML, CSS et JavaScript vanilla, avec support Français + English + العربية.

## Multilingue

Le portfolio est français par défaut et propose :
- 🇫🇷 Français
- 🇬🇧 English
- 🇸🇦 العربية

Le choix est mémorisé dans le navigateur. L'arabe active automatiquement le mode RTL.

Workflow :

~~~text
Contenu FR
   ↓
npm run translate
   ↓
FR + EN + AR
   ↓
Relecture
   ↓
Déploiement
~~~

La traduction est générée avant le déploiement : le visiteur ne déclenche aucune API de traduction et aucune clé API n'est exposée dans le navigateur.

## Architecture

- Core : moteur et interface réutilisables
- Data : contenu source du portfolio, en français
- Locales : versions FR / EN / AR
- Theme : identité visuelle
- Features : sections optionnelles
- Assets : images, CV et icônes

## Quick Start

1. Copier ce repository dans un nouveau projet.
2. Modifier les fichiers dans data/.
3. Ajouter les assets.
4. Configurer js/config.js.
5. Générer les traductions avec npm run translate.
6. Tester FR / EN / AR, y compris le RTL.
7. Déployer.

## Génération automatique

Préparer une clé API uniquement dans l'environnement local :

~~~text
OPENAI_API_KEY=votre_cle
~~~

Puis :

~~~bash
npm run translate
~~~

La clé est utilisée uniquement par scripts/translate.mjs, jamais par le navigateur.

Relire les traductions avant livraison, surtout pour les titres professionnels, termes métier, noms propres et arabe professionnel.

## Sécurité

Ne jamais versionner de clés API, mots de passe, tokens, certificats privés, fichiers .env ou données confidentielles client.

## Reuse

Chaque client doit avoir son propre repository basé sur ce template.
