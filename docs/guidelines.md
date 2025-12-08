# Jon Labs - Guidelines de Développement

## Principes Fondamentaux

### Clean Code

1. **Lisibilité** : Le code doit être auto-documenté
2. **Simplicité** : Éviter la sur-ingénierie
3. **Cohérence** : Suivre les patterns établis dans le projet
4. **DRY** : Don't Repeat Yourself - factoriser le code dupliqué

### Architecture

- **Component-based** : Chaque composant a une responsabilité unique
- **Separation of concerns** : Séparer logique, présentation et données
- **Progressive enhancement** : JavaScript minimal, fonctionnel sans JS si possible

---

## Conventions de Nommage

### Fichiers & Dossiers

| Type | Convention | Exemple |
|------|------------|---------|
| Composants Astro | PascalCase | `Hero.astro`, `ServiceCard.astro` |
| Pages Astro | kebab-case | `index.astro`, `about.astro` |
| Fichiers TypeScript | camelCase | `sample.ts`, `utils.ts` |
| Fichiers CSS | kebab-case | `global.css` |
| Dossiers | kebab-case | `src/components/`, `src/layouts/` |

### Variables & Fonctions

```typescript
// Variables : camelCase
const userName = 'Jonathan';
const isActive = true;

// Fonctions : camelCase, verbe d'action
function getUserData() { }
function handleSubmit() { }

// Constantes globales : SCREAMING_SNAKE_CASE
const API_BASE_URL = 'https://api.example.com';
const MAX_ITEMS = 10;
```

### Classes CSS

```css
/* Utiliser Tailwind utilities en priorité */
/* Classes custom : kebab-case */
.hero-section { }
.service-card { }
.cta-button { }
```

### IDs HTML

```html
<!-- kebab-case -->
<div id="hero-section"></div>
<button id="menu-toggle"></button>
```

---

## Structure des Composants Astro

### Template de base

```astro
---
// 1. Imports
import Button from './Button.astro';
import { Image } from 'astro:assets';

// 2. Props interface
interface Props {
  title: string;
  description?: string;
}

// 3. Destructuring des props
const { title, description = 'Default description' } = Astro.props;

// 4. Logique (si nécessaire)
const formattedTitle = title.toUpperCase();
---

<!-- 5. Template HTML -->
<section class="hero-section">
  <h1>{formattedTitle}</h1>
  {description && <p>{description}</p>}
  <Button text="En savoir plus" link="/about" />
</section>

<!-- 6. Styles scoped (si nécessaire) -->
<style>
  .hero-section {
    /* Styles spécifiques au composant */
  }
</style>

<!-- 7. Scripts client (si nécessaire) -->
<script>
  // JavaScript côté client
</script>
```

### Bonnes pratiques composants

1. **Un composant = une responsabilité**
2. **Props typées** avec interface TypeScript
3. **Valeurs par défaut** pour les props optionnelles
4. **Pas de logique complexe** dans le template
5. **Styles scoped** pour éviter les conflits

---

## Tailwind CSS

### Ordre des classes

Suivre l'ordre logique :

```html
<div class="
  {/* 1. Layout */}
  flex flex-col items-center justify-center
  {/* 2. Spacing */}
  p-4 mt-8 gap-4
  {/* 3. Sizing */}
  w-full max-w-md h-auto
  {/* 4. Background */}
  bg-white bg-[var(--main-bg)]
  {/* 5. Border */}
  border-2 border-black rounded-lg
  {/* 6. Typography */}
  text-lg font-bold text-black
  {/* 7. Effects */}
  shadow-lg opacity-90
  {/* 8. Transitions */}
  transition-all duration-200
  {/* 9. Responsive */}
  md:flex-row md:p-8
  {/* 10. States */}
  hover:bg-[var(--yellow)] focus:ring-2
">
```

### Utilisation des CSS Variables

```html
<!-- Préférer les variables CSS du projet -->
<div class="bg-[var(--main-bg)]">
<button class="bg-[var(--blue)] hover:bg-[var(--yellow)]">
```

### Responsive Design

```html
<!-- Mobile-first : base = mobile, md: = desktop -->
<div class="
  flex flex-col        {/* Mobile: colonne */}
  md:flex-row          {/* Desktop: ligne */}
  p-4 md:p-8           {/* Padding adaptatif */}
  text-xl md:text-3xl  {/* Taille texte adaptative */}
">
```

---

## Gestion des Images

### Avec Astro Image

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.png';
---

<Image
  src={heroImage}
  alt="Description de l'image"
  width={800}
  height={600}
  loading="lazy"
/>
```

### Images externes (Pexels, Unsplash)

```astro
<img
  src="https://images.pexels.com/photos/..."
  alt="Description"
  class="w-full h-auto object-cover"
  loading="lazy"
/>
```

### Bonnes pratiques images

1. **Alt text** obligatoire et descriptif
2. **Lazy loading** pour les images below the fold
3. **Dimensions explicites** pour éviter le layout shift
4. **Formats modernes** : WebP, AVIF si possible
5. **Compression** avant ajout au projet

---

## Gestion du Contenu

### Structure des données

```typescript
// src/data/services.ts
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
}

export const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Développement Web',
    description: '...',
    icon: 'code',
    technologies: ['Astro', 'React', 'Node.js'],
  },
  // ...
];
```

### Blog posts (Markdown)

```markdown
---
layout: ../../layouts/BlogPost.astro
title: "Titre de l'article"
description: "Description pour SEO"
pubDate: 2024-01-15
author: "Jonathan Vouilloz"
image:
  url: "/images/blog/article.jpg"
  alt: "Description de l'image"
tags: ["tech", "dev"]
---

# Contenu de l'article

Texte en markdown...
```

---

## Composants Réutilisables

### Header

Le composant Header supporte plusieurs variantes pour s'adapter aux différents contextes de page.

```astro
---
interface Props {
    variant?: 'default' | 'transparent';
    scrollTransition?: boolean;
}
---

<!-- Utilisation standard (fond blanc, texte noir) -->
<Header />

<!-- Variante transparente (fond transparent, texte blanc) -->
<Header variant="transparent" />

<!-- Avec transition au scroll (hero sombre → sections claires) -->
<Header variant="transparent" scrollTransition={true} />
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'transparent'` | `'default'` | Style visuel du header |
| `scrollTransition` | `boolean` | `false` | Active la transition automatique au scroll |

#### Comportement scrollTransition

Quand `scrollTransition={true}` :
1. Le header démarre en mode transparent (texte blanc, fond transparent)
2. Un `IntersectionObserver` surveille la section hero (`.hero-section`, `.hero-hub`)
3. Quand le hero sort de l'écran, le header transition vers le mode solid (fond blanc, texte noir)
4. La transition est fluide (0.3s ease)

**Usage typique** : Pages avec hero sombre suivi de sections claires (ex: `/services`)

---

## Git & Versioning

### Structure des commits

```
type(scope): description courte

[corps optionnel]

[footer optionnel]
```

### Types de commits

| Type | Usage |
|------|-------|
| `feat` | Nouvelle fonctionnalité |
| `fix` | Correction de bug |
| `docs` | Documentation |
| `style` | Formatage (pas de changement de code) |
| `refactor` | Refactoring |
| `perf` | Amélioration performance |
| `test` | Ajout/modification de tests |
| `chore` | Maintenance (deps, config) |

### Exemples

```bash
feat(hero): add CTA buttons
fix(header): mobile menu not closing on link click
docs(readme): update installation instructions
style(services): fix spacing on mobile
refactor(components): extract ServiceCard component
```

### Branches

```
main              # Production
develop           # Développement
feature/xxx       # Nouvelles fonctionnalités
fix/xxx           # Corrections de bugs
```

---

## Performance

### Checklist

- [ ] Images optimisées et lazy loaded
- [ ] CSS purgé (Tailwind le fait automatiquement)
- [ ] JavaScript minimal et différé
- [ ] Fonts préchargées
- [ ] Cache headers configurés
- [ ] Compression gzip/brotli activée

### Métriques cibles (Lighthouse)

| Métrique | Cible |
|----------|-------|
| Performance | > 90 |
| Accessibility | > 90 |
| Best Practices | > 90 |
| SEO | > 90 |

---

## SEO

### Meta tags obligatoires

```astro
---
const { title, description } = Astro.props;
---

<head>
  <title>{title} | Jon Labs</title>
  <meta name="description" content={description} />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- Open Graph -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="/og-image.jpg" />
  <meta property="og:type" content="website" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
</head>
```

### Structure sémantique

```html
<header>...</header>
<main>
  <section aria-labelledby="hero-title">
    <h1 id="hero-title">...</h1>
  </section>
  <section aria-labelledby="services-title">
    <h2 id="services-title">...</h2>
  </section>
</main>
<footer>...</footer>
```

---

## Accessibilité

### Checklist

- [ ] Contraste suffisant (ratio 4.5:1 minimum)
- [ ] Focus visible sur éléments interactifs
- [ ] Alt text sur toutes les images
- [ ] Labels sur tous les champs de formulaire
- [ ] Navigation au clavier fonctionnelle
- [ ] Hiérarchie des headings respectée (h1 > h2 > h3)
- [ ] ARIA labels quand nécessaire

### Exemples

```html
<!-- Bouton accessible -->
<button
  aria-label="Ouvrir le menu"
  class="focus:ring-2 focus:ring-blue-500"
>
  <span class="sr-only">Menu</span>
  <i class="ri-menu-line"></i>
</button>

<!-- Lien avec contexte -->
<a href="/services" aria-label="En savoir plus sur nos services">
  En savoir plus
</a>
```

---

## Sécurité

### Headers recommandés

```
Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

### Bonnes pratiques

1. **Sanitizer** les inputs utilisateur
2. **HTTPS** obligatoire
3. **Pas de secrets** dans le code client
4. **Dépendances** à jour (npm audit)

---

## Tests

### Avant chaque déploiement

- [ ] Build sans erreurs (`npm run build`)
- [ ] Preview fonctionnel (`npm run preview`)
- [ ] Navigation testée sur toutes les pages
- [ ] Responsive testé (mobile, tablet, desktop)
- [ ] Formulaires testés
- [ ] Lighthouse audit passé

### Navigateurs à tester

- Chrome (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

---

## Commandes Utiles

```bash
# Développement
npm run dev          # Serveur local (localhost:4321)

# Build
npm run build        # Build production
npm run preview      # Preview du build

# Vérifications
npm run astro check  # TypeScript check

# Git
git status           # État du repo
git add .            # Stage tous les fichiers
git commit -m "..."  # Commit
git push             # Push vers remote
```
