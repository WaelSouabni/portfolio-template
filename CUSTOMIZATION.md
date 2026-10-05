# Portfolio Template — Customization Guide

Ce guide explique comment transformer le template en portfolio personnel sans modifier inutilement le moteur.

## 1. La règle des 80/20

Pour un portfolio classique, la majorité de la personnalisation doit se faire dans :

```
data/profile.js
data/experience.js
data/projects.js
data/skills.js
data/education.js
data/certifications.js
data/settings.js
data/social.js
js/config.js
```

Vous ne devriez normalement pas avoir besoin de réécrire `js/app.js`.

---

## 2. Modifier l'identité

Commencer par :

```
data/profile.js
```

Remplacer les informations génériques par les informations réelles de la personne.

Then update:

```
data/social.js
```

avec les bons liens LinkedIn, GitHub, site web et email.

---

## 3. Ajouter les expériences professionnelles

Ouvrir :

```
data/experience.js
```

Ajouter un objet pour chaque expérience.

La description doit rester concise. Les réalisations sont utiles pour mettre en avant les résultats, responsabilités ou contributions importantes.

---

## 4. Ajouter les projets

Open:

```
data/projects.js
```

Pour chaque projet, renseigner :

- titre clair
- courte présentation
- technologies utilisées
- image si disponible
- URL du projet si disponible
- dépôt GitHub si pertinent
- indication permettant de mettre le projet en avant

La description doit expliquer **la valeur du projet**, et pas seulement énumérer les technologies.

---

## 5. Gérer les compétences

Organiser les compétences par catégories.

Typical groups:

```
frontend
backend
tools
```

Les catégories peuvent être adaptées au profil.

---

## 6. Gérer les sections

Use:

```
data/settings.js
```

Une section qui n'est pas pertinente doit être désactivée plutôt que laissée vide.

Par exemple, si une personne n'a aucune certification :

```js
certifications: false
```

Cela permet de conserver un portfolio propre.

---

## 7. Modifier les couleurs

Open:

```
js/config.js
```

Modifier les valeurs du thème pour correspondre à l'identité visuelle de la personne.

Pour un portfolio professionnel, conserver un contraste suffisant et une bonne lisibilité.

Il vaut mieux utiliser une palette simple et cohérente plutôt que multiplier les couleurs.

---

## 8. Ajouter les images et documents

Recommended structure:

```
assets/
├── images/
│   ├── profile.jpg
│   └── projects/
├── documents/
│   └── CV.pdf
└── icons/
    └── favicon.svg
```

Optimiser les images avant de les ajouter afin de conserver un chargement rapide.

---

## 9. Modifier le CSS

Only edit:

```
css/main.css
css/responsive.css
```

uniquement lorsque la configuration du thème ne suffit pas.

Les styles doivent rester génériques afin que les améliorations puissent bénéficier aux futurs portfolios.

---

## 10. Modifier le JavaScript

Only modify:

```
js/app.js
js/components/
js/utils/
```

lorsque le comportement ou la fonctionnalité du moteur doit réellement évoluer.

Avant de modifier le Core, poser cette question :

> Est-ce que cette amélioration est utile à tous les futurs portfolios ?

Si oui, elle a probablement sa place dans le template.

Si non, elle peut rester spécifique au projet du client.

---

## 11. Différence entre modification du template et modification client

### Modification du template

Example:

> Améliorer la navigation mobile pour tous les portfolios.

Cette modification doit être intégrée au template.

### Modification spécifique à un client

Example:

> Ajouter une section présentant l'architecture technique particulière de ce client.

Cette modification doit normalement rester dans le portfolio du client.

---

## 12. Checklist avant livraison

### Contenu

- [ ] Nom correct
- [ ] Titre professionnel correct
- [ ] Présentation complète
- [ ] Expériences vérifiées
- [ ] Projets vérifiés
- [ ] Compétences vérifiées
- [ ] Formation vérifiée
- [ ] Liens sociaux fonctionnels
- [ ] Email correct

### Design

- [ ] Couleurs cohérentes
- [ ] Images optimisées
- [ ] Version desktop vérifiée
- [ ] Version mobile vérifiée
- [ ] Aucun texte placeholder restant

### Technique

- [ ] Aucun secret dans le dépôt
- [ ] CV accessible
- [ ] Liens externes fonctionnels
- [ ] Formulaire de contact testé
- [ ] Métadonnées SEO mises à jour
- [ ] `robots.txt` vérifié
- [ ] `sitemap.xml` vérifié
- [ ] Déploiement de production testé

---

## 13. Règle d'or

**Une modification des données ne devrait pas nécessiter de modification du Core.**

Si la même modification du moteur est nécessaire pour plusieurs clients, il faut envisager de rendre ce comportement configurable.

C'est ainsi que le dépôt peut progressivement évoluer d'un simple template vers un véritable **Portfolio Engine réutilisable**.
