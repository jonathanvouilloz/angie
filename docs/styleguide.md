# Jon Labs - Style Guide

Ce guide définit le système de design basé sur le template Angie, adapté pour Jon Labs.

---

## Design System Overview

### Style visuel

**Esthétique :** Brutaliste créatif / Fancy moderne

| Caractéristique | Description |
|-----------------|-------------|
| Bordures | Épaisses, noires, sans arrondi |
| Ombres | Décalées 3D (offset shadows) |
| Couleurs | Fond clair + accents vifs |
| Éléments décoratifs | Stars, arrows, stickers SVG |
| Typographie | Bold, moderne, sans-serif |

### Mood

- Professionnel mais pas corporate
- Créatif et original
- "Maker vibe" / laboratoire
- Personnalité forte

---

## Palette de Couleurs

### Couleurs du template Angie

```css
:root {
  --main-bg: #FEFFF0;  /* Fond crème/beige clair */
  --blue: #BAE6FF;     /* Bleu clair - boutons, highlights */
  --yellow: #FFDC58;   /* Jaune vif - accents, hover */
}
```

### Utilisation

| Variable | Usage |
|----------|-------|
| `--main-bg` | Background principal de toutes les pages |
| `--blue` | Boutons primaires, highlights de texte |
| `--yellow` | Soulignements, états hover, accents |

### Couleurs additionnelles

| Couleur | Hex | Usage |
|---------|-----|-------|
| Noir | `#000000` | Texte principal, bordures |
| Blanc | `#FFFFFF` | Backgrounds sections, cartes |
| Gris clair | `#F5F5F5` | Backgrounds alternatifs |

### Application en Tailwind

```html
<!-- Background principal -->
<body style="background: var(--main-bg)">

<!-- Bouton primaire -->
<button class="bg-[var(--blue)] hover:bg-[var(--yellow)]">

<!-- Highlight texte -->
<span class="bg-[var(--yellow)]">texte important</span>

<!-- Carte sur fond blanc -->
<div class="bg-white border-2 border-black">
```

---

## Typographie

### Police principale

**Font :** Space Grotesk (Google Fonts)
**Poids disponibles :** 300, 400, 500, 600, 700
**Fallback :** sans-serif

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');
```

### Échelle typographique

| Élément | Classe Tailwind | Poids |
|---------|-----------------|-------|
| Hero H1 | `text-5xl` / `text-6xl` | `font-black` |
| Section H2 | `text-4xl` | `font-bold` |
| Card H3 | `text-2xl` / `text-3xl` | `font-bold` |
| Sous-titre | `text-xl` | `font-medium` |
| Body text | `text-lg` | `font-normal` |
| Small text | `text-sm` | `font-normal` |
| Button | `text-md` | `font-medium` |

### Exemples

```html
<!-- Hero title -->
<h1 class="text-5xl md:text-6xl font-black">
  Je crée des solutions digitales
</h1>

<!-- Section title -->
<h2 class="text-3xl md:text-4xl font-bold">
  Mes Services
</h2>

<!-- Card title -->
<h3 class="text-2xl font-bold">
  Développement Web
</h3>

<!-- Body text -->
<p class="text-lg font-normal">
  Description du service...
</p>
```

---

## Composants de Base

### Bordures

Le style brutaliste utilise des bordures épaisses noires :

```html
<!-- Bordure standard -->
<div class="border-2 border-black">

<!-- Bordure plus épaisse -->
<div class="border-3 border-black">

<!-- Bordures partielles -->
<div class="border-t-2 border-b-2 border-black">
<div class="border-l-2 border-r-2 border-black">
```

### Ombres 3D (Offset Shadow)

Effet signature du style brutaliste :

```html
<!-- Shadow standard -->
<div class="shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">

<!-- Shadow hover (plus prononcé) -->
<div class="hover:shadow-[6px_6px_0px_rgba(0,0,0,0.3)]">

<!-- Shadow coloré (optionnel) -->
<div class="shadow-[4px_4px_0px_var(--blue)]">
```

### Corner Boxes (Décoration)

Petits carrés décoratifs aux coins :

```html
<div class="relative">
  <!-- Contenu -->

  <!-- Corner boxes -->
  <div class="size-2 bg-black absolute -top-1 -left-1"></div>
  <div class="size-2 bg-black absolute -top-1 -right-1"></div>
  <div class="size-2 bg-black absolute -bottom-1 -left-1"></div>
  <div class="size-2 bg-black absolute -bottom-1 -right-1"></div>
</div>
```

---

## Boutons

### Bouton primaire

```html
<a
  href="/contact"
  class="
    bg-[var(--blue)]
    border-2 border-black
    px-6 py-3
    text-md font-medium
    shadow-[4px_4px_0px_rgba(0,0,0,0.3)]
    hover:bg-[var(--yellow)]
    transition-all duration-200
  "
>
  Parlons de votre projet →
</a>
```

### Bouton secondaire (outline)

```html
<a
  href="/portfolio"
  class="
    bg-white
    border-2 border-black
    px-6 py-3
    text-md font-medium
    hover:bg-[var(--yellow)]
    transition-all duration-200
  "
>
  Voir mes projets →
</a>
```

### États

| État | Style |
|------|-------|
| Default | `bg-[var(--blue)]` |
| Hover | `bg-[var(--yellow)]` |
| Focus | `ring-2 ring-black ring-offset-2` |
| Disabled | `opacity-50 cursor-not-allowed` |

---

## Cartes

### Carte standard

```html
<div class="
  bg-white
  border-2 border-black
  p-6
  shadow-[4px_4px_0px_rgba(0,0,0,0.3)]
  hover:shadow-[6px_6px_0px_rgba(0,0,0,0.3)]
  transition-all duration-200
">
  <h3 class="text-2xl font-bold mb-2">Titre</h3>
  <p class="text-lg">Description...</p>
</div>
```

### Carte service

```html
<div class="
  bg-white
  border-2 border-black
  p-6
  relative
">
  <!-- Icône/Badge -->
  <div class="
    w-12 h-12
    bg-[var(--blue)]
    border-2 border-black
    flex items-center justify-center
    mb-4
  ">
    <i class="ri-code-line text-2xl"></i>
  </div>

  <h3 class="text-2xl font-bold mb-2">Développement Web</h3>
  <p class="text-lg mb-4">Sites web, applications, e-commerce...</p>

  <a href="/services#web" class="
    text-md font-medium
    border-b-2 border-[var(--yellow)]
    hover:bg-[var(--yellow)]
  ">
    En savoir plus →
  </a>
</div>
```

### Carte projet (Portfolio)

```html
<div class="
  bg-white
  border-2 border-black
  overflow-hidden
  shadow-[4px_4px_0px_rgba(0,0,0,0.3)]
  hover:shadow-[6px_6px_0px_rgba(0,0,0,0.3)]
  transition-all duration-200
">
  <!-- Image -->
  <div class="aspect-video overflow-hidden border-b-2 border-black">
    <img src="..." alt="..." class="w-full h-full object-cover">
  </div>

  <!-- Content -->
  <div class="p-6">
    <h3 class="text-xl font-bold mb-2">Nom du projet</h3>
    <p class="text-md mb-4">Description courte...</p>

    <!-- Tech badges -->
    <div class="flex flex-wrap gap-2 mb-4">
      <span class="px-2 py-1 bg-[var(--blue)] border border-black text-sm">
        Astro
      </span>
      <span class="px-2 py-1 bg-[var(--blue)] border border-black text-sm">
        React
      </span>
    </div>

    <a href="#" class="text-md font-medium border-b-2 border-[var(--yellow)]">
      Voir le projet →
    </a>
  </div>
</div>
```

---

## Navigation

### Header

```html
<header class="
  bg-[var(--main-bg)]
  border-b-2 border-black
  py-4 px-6
  flex justify-between items-center
">
  <!-- Logo -->
  <a href="/" class="text-2xl font-bold">Jon Labs</a>

  <!-- Nav links (desktop) -->
  <nav class="hidden md:flex gap-6">
    <a href="/services" class="
      text-lg font-medium
      hover:border-b-2 hover:border-[var(--yellow)]
    ">
      Services
    </a>
    <a href="/portfolio" class="text-lg font-medium hover:border-b-2 hover:border-[var(--yellow)]">
      Portfolio
    </a>
    <!-- ... -->
  </nav>

  <!-- Mobile menu button -->
  <button class="md:hidden" id="menu-open">
    <i class="ri-menu-2-line text-2xl"></i>
  </button>
</header>
```

### Liens de navigation

| État | Style |
|------|-------|
| Default | `text-black` |
| Hover | `border-b-2 border-[var(--yellow)]` |
| Active | `bg-[var(--yellow)]` ou `border-b-2 border-black` |

---

## Sections

### Section standard

```html
<section class="py-16 md:py-24 px-6">
  <div class="max-w-6xl mx-auto">
    <!-- Section header -->
    <div class="mb-12">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        Titre de section
      </h2>
      <p class="text-xl max-w-2xl">
        Description de la section...
      </p>
    </div>

    <!-- Section content -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Cards... -->
    </div>
  </div>
</section>
```

### Section avec background alterné

```html
<!-- Section fond blanc -->
<section class="py-16 bg-white border-y-2 border-black">
  ...
</section>

<!-- Section fond principal -->
<section class="py-16" style="background: var(--main-bg)">
  ...
</section>
```

---

## Grilles & Layouts

### Grid responsive

```html
<!-- 1 col mobile, 2 cols tablet, 3 cols desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<!-- 1 col mobile, 2 cols desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">

<!-- Layout asymétrique (60/40) -->
<div class="grid grid-cols-1 md:grid-cols-[60%_40%] gap-6">

<!-- Layout asymétrique (30/70) -->
<div class="grid grid-cols-1 md:grid-cols-[30%_70%] gap-6">
```

### Flex layouts

```html
<!-- Flex row centered -->
<div class="flex flex-col md:flex-row items-center justify-between gap-6">

<!-- Flex column centered -->
<div class="flex flex-col items-center text-center">
```

---

## Éléments Décoratifs

### SVGs disponibles (dans src/assets/)

| Fichier | Usage |
|---------|-------|
| `pink-star.svg` | Décoration accent rose |
| `red-star.svg` | Décoration accent rouge |
| `blue-star-card.svg` | Décoration cartes |
| `logo-star.svg` | Logo/badge |
| `arrow.svg` | Flèches directionnelles |
| `arrow-card.svg` | Flèches dans cartes |
| `underline.svg` | Soulignement décoratif |
| `string.svg` | Ligne décorative |
| `hl.svg` | Highlight avec flèche |
| `idea.svg` | Icône idée/ampoule |
| `new.svg` | Badge "nouveau" |
| `mini-frame.svg` | Cadre miniature |

### Utilisation des SVGs

```astro
---
import pinkStar from '../assets/pink-star.svg';
---

<img src={pinkStar.src} alt="" class="absolute -top-4 -right-4 w-8 h-8" />
```

### Highlight de texte

```html
<!-- Avec background jaune -->
<span class="bg-[var(--yellow)] px-2">texte important</span>

<!-- Avec SVG underline -->
<span class="relative">
  texte souligné
  <img src={underline.src} class="absolute -bottom-2 left-0 w-full" />
</span>
```

---

## Animations

### Transitions CSS

```html
<!-- Transition standard -->
<div class="transition-all duration-200">

<!-- Transition hover shadow -->
<div class="
  shadow-[4px_4px_0px_rgba(0,0,0,0.3)]
  hover:shadow-[6px_6px_0px_rgba(0,0,0,0.3)]
  transition-all duration-200
">
```

### Animation GSAP (Tools/Marquee)

```javascript
// Scrolling infini (marquee)
import gsap from 'gsap';

const tl = gsap.timeline({ repeat: -1 });
tl.to(container, {
  x: -(container.scrollWidth / 2),
  duration: 30,
  ease: 'none'
});
```

---

## Icônes

### Remix Icon

Le template utilise Remix Icon (CDN) :

```html
<!-- Import dans Layout.astro -->
<link href="https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.css" rel="stylesheet">

<!-- Utilisation -->
<i class="ri-code-line"></i>
<i class="ri-settings-3-line"></i>
<i class="ri-smartphone-line"></i>
<i class="ri-linkedin-box-fill"></i>
<i class="ri-github-fill"></i>
<i class="ri-mail-line"></i>
<i class="ri-menu-2-line"></i>
<i class="ri-close-line"></i>
```

### Icônes recommandées par section

| Section | Icônes |
|---------|--------|
| Dev Web | `ri-code-line`, `ri-terminal-box-line` |
| Automatisation | `ri-settings-3-line`, `ri-loop-left-line` |
| Applications | `ri-smartphone-line`, `ri-apps-line` |
| Contact | `ri-mail-line`, `ri-send-plane-line` |
| Social | `ri-linkedin-box-fill`, `ri-github-fill` |
| Navigation | `ri-menu-2-line`, `ri-close-line`, `ri-arrow-right-line` |

---

## Responsive Breakpoints

### Mobile-first

```css
/* Base = Mobile (< 768px) */
/* md: = Tablet/Desktop (>= 768px) */
/* lg: = Large Desktop (>= 1024px) */
```

### Patterns responsive communs

```html
<!-- Stack mobile, row desktop -->
<div class="flex flex-col md:flex-row">

<!-- 1 col mobile, 2 cols desktop -->
<div class="grid grid-cols-1 md:grid-cols-2">

<!-- Texte plus grand sur desktop -->
<h1 class="text-4xl md:text-6xl">

<!-- Padding adaptatif -->
<section class="py-12 md:py-24 px-4 md:px-8">

<!-- Cacher sur mobile -->
<nav class="hidden md:flex">

<!-- Cacher sur desktop -->
<button class="md:hidden">
```

---

## Formulaires

### Input standard

```html
<input
  type="text"
  placeholder="Votre nom"
  class="
    w-full
    px-4 py-3
    border-2 border-black
    bg-white
    text-lg
    focus:outline-none
    focus:ring-2 focus:ring-[var(--yellow)]
  "
/>
```

### Textarea

```html
<textarea
  placeholder="Votre message"
  rows="5"
  class="
    w-full
    px-4 py-3
    border-2 border-black
    bg-white
    text-lg
    resize-none
    focus:outline-none
    focus:ring-2 focus:ring-[var(--yellow)]
  "
></textarea>
```

### Select

```html
<select class="
  w-full
  px-4 py-3
  border-2 border-black
  bg-white
  text-lg
  focus:outline-none
  focus:ring-2 focus:ring-[var(--yellow)]
">
  <option>Dev Web</option>
  <option>Automatisation</option>
  <option>Application</option>
  <option>Autre</option>
</select>
```

### Checkbox

```html
<label class="flex items-center gap-3 cursor-pointer">
  <input
    type="checkbox"
    class="
      w-5 h-5
      border-2 border-black
      accent-[var(--yellow)]
    "
  />
  <span class="text-md">J'accepte d'être contacté</span>
</label>
```

---

## Badges & Tags

### Badge technologie

```html
<span class="
  px-3 py-1
  bg-[var(--blue)]
  border border-black
  text-sm font-medium
">
  React
</span>
```

### Badge statut

```html
<!-- En cours -->
<span class="
  px-3 py-1
  bg-[var(--yellow)]
  border border-black
  text-sm font-medium
">
  En cours
</span>

<!-- Bientôt -->
<span class="
  px-3 py-1
  bg-gray-200
  border border-black
  text-sm font-medium
">
  Bientôt
</span>
```

---

## Espacements Standards

### Padding

| Usage | Classes |
|-------|---------|
| Card padding | `p-6` |
| Section padding | `py-16 md:py-24 px-4 md:px-8` |
| Button padding | `px-6 py-3` |
| Input padding | `px-4 py-3` |
| Badge padding | `px-3 py-1` |

### Margins

| Usage | Classes |
|-------|---------|
| Section title margin | `mb-12` |
| Card title margin | `mb-4` |
| Paragraph margin | `mb-4` |
| Element spacing | `gap-4`, `gap-6` |

### Max widths

| Usage | Classes |
|-------|---------|
| Container principal | `max-w-6xl mx-auto` |
| Texte lisible | `max-w-2xl` |
| Formulaire | `max-w-md` |

---

## Checklist Design

Avant de valider un composant/page :

- [ ] Bordures noires épaisses (border-2 ou border-3)
- [ ] Ombres décalées sur éléments interactifs
- [ ] États hover avec couleur jaune
- [ ] Typographie Space Grotesk
- [ ] Responsive mobile/desktop
- [ ] Éléments décoratifs (SVGs, corner boxes)
- [ ] Cohérence avec le style brutaliste
