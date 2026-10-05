# Portfolio Template — Documentation

## 1. Présentation

Ce dépôt est un template de portfolio réutilisable, développé en HTML, CSS et JavaScript, sans dépendance obligatoire.

L'objectif est de séparer le **moteur du portfolio** du **contenu personnel**, afin de pouvoir utiliser la même base pour plusieurs personnes et projets.

### Architecture

```
Core        → interface et logique réutilisables
Data        → profil, expériences, projets, compétences...
Theme       → couleurs et identité visuelle
Features    → sections et fonctionnalités optionnelles
Assets      → images, icônes et documents
```

La règle principale est :

> **On personnalise d'abord les fichiers de `data/`. On ne modifie le moteur que lorsqu'on souhaite ajouter ou améliorer une fonctionnalité réutilisable.**

---

## 2. Démarrage rapide

### Option A — Utiliser GitHub

1. Créer un nouveau dépôt pour le portfolio.
2. Copier ce template dans le nouveau dépôt.
3. Modifier les fichiers dans `data/`.
4. Ajouter les éléments personnels dans `assets/`.
5. Déployer avec l'hébergeur de votre choix.

### Option B — Tester en local

Le projet étant statique, aucune installation de dépendances n'est nécessaire pour la version de base.

Il est possible d'ouvrir directement `index.html` dans un navigateur.

Pour le développement, il est recommandé d'utiliser un petit serveur local afin d'avoir un comportement cohérent avec les modules JavaScript.

---

## 3. Personnaliser les informations

Les principales informations du portfolio se trouvent dans :

```
data/
├── profile.js
├── experience.js
├── projects.js
├── skills.js
├── education.js
├── certifications.js
├── settings.js
└── social.js
```

### Profil

Modifier `data/profile.js` pour renseigner :

- nom
- prénom / nom
- métier ou titre professionnel
- localisation
- disponibilité
- slogan / accroche
- présentation
- email
- téléphone
- chemin vers le CV
- photo de profil

### Expériences professionnelles

Modifier `data/experience.js`.

Chaque expérience peut contenir :

- entreprise
- poste
- localisation
- date de début
- date de fin
- description
- réalisations

Example:

```js
{
  company: "Company Name",
  role: "Full Stack Developer",
  location: "Paris, France",
  start: "2024",
  end: "Present",
  description: "Description courte du poste.",
  achievements: [
    "Réalisation importante n°1",
    "Réalisation importante n°2"
  ]
}
```

### Projets

Modifier `data/projects.js`.

Chaque projet peut contenir :

- titre
- description
- technologies
- image
- URL
- statut « projet mis en avant »

### Compétences

Modifier `data/skills.js` et organiser les compétences par catégorie.

### Formation

Modifier `data/education.js`.

### Certifications

Ajouter les certifications dans `data/certifications.js`.

### Réseaux sociaux

Modifier `data/social.js` pour LinkedIn, GitHub, site personnel et email.

---

## 4. Activer ou désactiver les sections

Le fichier `data/settings.js` permet de contrôler les sections affichées.

Les sections disponibles comprennent notamment :

- À propos
- Expériences
- Compétences
- Projets
- Formation
- Certifications
- Services
- Témoignages
- Playground
- Contact

Une section qui n'est pas pertinente peut être désactivée.

Example:

```js
sections: {
  about: true,
  experience: true,
  skills: true,
  projects: true,
  education: true,
  certifications: false,
  services: false,
  testimonials: false,
  playground: true,
  contact: true
}
```

---

## 5. Personnaliser le thème

La configuration visuelle principale se trouve dans :

```
js/config.js
```

Vous pouvez modifier :

- couleur principale
- couleur secondaire
- arrière-plan
- couleurs des surfaces
- couleur du texte
- couleur du texte secondaire
- rayon des bordures

Pour des modifications plus avancées :

```
css/main.css
css/responsive.css
```

---

## 6. Ajouter les assets

Les éléments personnels doivent être placés dans `assets/`.

Exemples :

```
assets/
├── images/
├── documents/
└── icons/
```

Examples:

- photo de profil
- captures d'écran des projets
- CV PDF
- favicon
- images d'entreprises ou de projets

Ne jamais stocker de clés API, mots de passe ou identifiants privés dans ce dépôt public.

---

## 7. Comprendre l'architecture JavaScript

Le moteur JavaScript se trouve dans :

```
js/
├── app.js
├── config.js
├── components/
└── utils/
```

### app.js

Point d'entrée de l'application. Il charge les données et construit le portfolio.

### components/

Contient les composants d'interface réutilisables.

### utils/

Contient les fonctions utilitaires génériques.

### config.js

Contient la configuration globale du thème.

Si votre objectif est uniquement de changer les informations personnelles, vous ne devriez normalement **pas avoir besoin de modifier ces fichiers**.

---

## 8. Ajouter de nouvelles fonctionnalités

Lorsqu'une nouvelle fonctionnalité est ajoutée, il faut conserver la séparation entre :

- fonctionnalité réutilisable
- contenu personnel
- identité visuelle
- configuration des fonctionnalités

Par exemple, un jeu du Playground doit être développé comme une fonctionnalité réutilisable. Le fait d'afficher ou non le Playground doit être contrôlé depuis `data/settings.js`.

---

## 9. SEO

Pour chaque nouveau portfolio, penser à adapter :

- titre de la page
- meta description
- métadonnées Open Graph
- URL canonique
- favicon
- `robots.txt`
- `sitemap.xml`

Les informations SEO doivent correspondre au nom, au métier et au domaine de la personne.

---

## 10. Formulaire de contact

Le template peut intégrer un formulaire de contact, mais l'envoi réel des emails doit utiliser un backend ou un service de formulaire adapté à la production.

**Ne jamais placer une clé API privée directement dans le JavaScript exécuté côté navigateur.**

Si un service externe est utilisé, les secrets doivent rester dans des variables d'environnement ou dans une fonction exécutée côté serveur.

---

## 11. Déploiement

Le projet est statique et peut être déployé sur :

- Vercel
- GitHub Pages
- Netlify
- any static hosting provider

### Exemple avec Vercel

1. Pousser le projet sur GitHub.
2. Importer le dépôt dans Vercel.
3. Utiliser la racine du dépôt comme répertoire du projet.
4. Pour la version statique de base, aucune commande de build n'est nécessaire.
5. Déployer.

Après le déploiement, vérifier :

- navigation
- affichage responsive
- images
- lien du CV
- liens des projets
- réseaux sociaux
- formulaire de contact
- SEO

---

## 12. Workflow recommandé pour un nouveau client

Lors de la création d'un portfolio pour une nouvelle personne :

### Étape 1 — Créer un projet indépendant

Créer un nouveau dépôt à partir du template.

### Étape 2 — Récupérer le contenu

Demander au client :

- CV
- photo professionnelle
- projets
- réseaux sociaux
- coordonnées
- couleurs souhaitées
- nom de domaine

### Étape 3 — Remplir la couche Data

Modifier les fichiers dans `data/`.

### Étape 4 — Ajouter les assets

Ajouter les images et documents dans `assets/`.

### Étape 5 — Configurer le thème

Modifier `js/config.js`.

### Étape 6 — Activer les fonctionnalités nécessaires

Modifier `data/settings.js`.

### Étape 7 — Tester

Vérifier le rendu sur desktop, tablette et mobile.

### Étape 8 — Déployer

Déployer le projet du client indépendamment du template.

---

## 13. Règles de sécurité

Ne jamais versionner :

- clés API
- mots de passe
- tokens d'accès
- certificats privés
- fichiers `.env` contenant des secrets
- informations privées d'un client

Les informations privées propres à un client doivent rester dans son projet et ne doivent pas être ajoutées au template public.

---

## 14. Principe d'évolution du template

Le template doit évoluer comme un produit réutilisable.

Lorsqu'une amélioration peut bénéficier à tous les futurs portfolios, elle doit idéalement être ajoutée au **Core**.

Lorsqu'une information concerne uniquement une personne, elle doit rester dans **Data** ou **Assets**.

Cela permet de conserver un moteur propre et de réduire progressivement le temps nécessaire pour créer chaque nouveau portfolio.
