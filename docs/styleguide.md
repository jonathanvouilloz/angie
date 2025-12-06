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

### Palette "Lab Scientifique"

Concept : Laboratoire moderne, expérimentation, innovation.

```css
:root {
  /* Palette "Lab Scientifique" */
  --main-bg: #FAFAFA;                  /* Blanc cassé - fond principal */
  --blue: #00D9A3;                     /* Vert labo - accent principal, boutons */
  --yellow: #00A87D;                   /* Vert foncé - hover boutons */
  --accent: rgba(163, 0, 217, 0.35);   /* Magenta transparent - highlights texte */
  --violet: #A300D9;                   /* Magenta vif - détails, accents secondaires */
  --text: #0F172A;                     /* Noir charbon - texte principal */
}
```

### Utilisation des variables

| Variable | Couleur | Usage |
|----------|---------|-------|
| `--main-bg` | Blanc cassé | Background principal de toutes les pages |
| `--blue` | 🟢 Vert labo #00D9A3 | Boutons primaires, CTA, badges tech |
| `--yellow` | 🟢 Vert foncé #00A87D | États hover des boutons |
| `--accent` | 🟣 Magenta 35% | Soulignements texte, highlights, hover liens |
| `--violet` | 🟣 Magenta #A300D9 | Détails, accents secondaires |
| `--text` | Noir charbon | Texte principal, titres |

### Couleurs additionnelles

| Couleur | Hex | Usage |
|---------|-----|-------|
| Noir | `#000000` | Bordures |
| Blanc | `#FFFFFF` | Backgrounds sections, cartes |
| Noir charbon | `#0F172A` | Texte principal (via `--text`) |

### Logique des états

| Élément | Default | Hover | Active/Focus |
|---------|---------|-------|--------------|
| Bouton CTA | `--blue` (vert) | `--yellow` (vert foncé) | `ring-2 ring-black` |
| Lien navigation | `--text` | `--accent` (underline) | `--accent` (background) |
| Highlight texte | `--accent` | - | - |

### Application en Tailwind

```html
<!-- Background principal -->
<body style="background: var(--main-bg); color: var(--text)">

<!-- Bouton primaire (vert → vert foncé au hover) -->
<button class="bg-[var(--blue)] hover:bg-[var(--yellow)] transition-all">
  Contact
</button>

<!-- Highlight texte (bande magenta transparente) -->
<span class="relative">
  <span class="absolute bg-[var(--accent)] w-full h-[50%] left-0 bottom-0 z-1"></span>
  <span class="relative z-5">texte important</span>
</span>

<!-- Soulignement hover (liens navigation) -->
<a class="before:bg-[var(--accent)] hover:before:w-full">Lien</a>

<!-- Badge avec accent violet -->
<span class="bg-[var(--violet)] text-white">Nouveau</span>

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
| Hero H1 | `text-4xl` / `text-5xl` | `font-normal` |
| Section H2 | `text-3xl` / `text-4xl` | `font-normal` |
| Card H3 | `text-xl` / `text-2xl` | `font-bold` |
| Sous-titre | `text-lg` / `text-xl` | `font-normal` |
| Body text | `text-lg` | `font-normal` |
| Small text | `text-sm` | `font-normal` |
| Button | `text-md` | `font-medium` |

### Exemples

```html
<!-- Hero title -->
<h1 class="text-4xl md:text-5xl font-normal tracking-tight">
  Je crée des solutions digitales
</h1>

<!-- Section title -->
<h2 class="text-3xl md:text-4xl font-normal">
  Mes Services
</h2>

<!-- Card title -->
<h3 class="text-xl font-bold">
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

### Bouton primaire (CTA)

Effet "stamp" brutaliste : ombre qui se réduit au hover avec léger déplacement.

```html
<a
  href="/contact"
  class="
    bg-[var(--blue)]
    border-2 border-black
    px-6 py-3
    text-md font-medium
    shadow-[3px_3px_0px_rgba(0,0,0,1)]
    transition-all duration-200
    hover:bg-[var(--yellow)]
    hover:shadow-[1px_1px_0px_rgba(0,0,0,1)]
    hover:translate-x-[2px] hover:translate-y-[2px]
    focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none
  "
>
  Contact
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
    transition-all duration-200
    hover:bg-[var(--yellow)]
  "
>
  Voir mes projets →
</a>
```

### Bouton avec accent violet

```html
<a
  href="/lab"
  class="
    bg-[var(--violet)]
    border-2 border-black
    px-6 py-3
    text-white font-medium
    transition-all duration-200
    hover:opacity-90
  "
>
  Découvrir le Lab
</a>
```

### États des boutons

| État | Bouton primaire | Bouton secondaire |
|------|-----------------|-------------------|
| Default | `bg-[var(--blue)]` (vert) | `bg-white` |
| Hover | `bg-[var(--yellow)]` (vert foncé) + translation | `bg-[var(--yellow)]` |
| Focus | `ring-2 ring-black ring-offset-2` | `ring-2 ring-black` |
| Disabled | `opacity-50 cursor-not-allowed` | `opacity-50` |

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

### Header (Navbar)

Structure : container brutaliste avec corner boxes, logo à gauche, liens + CTA à droite.

```html
<header class="relative border-b-3 p-7 overflow-hidden">
  <div class="flex border-3 border-black bg-white max-w-[360px] md:max-w-3xl m-auto relative z-10">
    <!-- Corner boxes -->
    <div class="size-2 bg-white border-2 border-black absolute -top-2 -right-2"></div>
    <div class="size-2 bg-white border-2 border-black absolute -top-2 -left-2"></div>
    <div class="size-2 bg-white border-2 border-black absolute -bottom-2 -left-2"></div>
    <div class="size-2 bg-white border-2 border-black absolute -bottom-2 -right-2"></div>

    <nav class="flex w-full items-center p-2 md:p-0">
      <!-- Logo avec micro-interaction -->
      <a href="/" class="flex items-center gap-2 pl-3 group">
        <img src="logo.svg" alt="Jon Labs" class="transition-transform duration-300 group-hover:rotate-12" />
        <span class="font-bold">Jon Labs</span>
      </a>

      <!-- Liens desktop -->
      <ul class="hidden md:flex items-center">
        <li class="border-l-2 border-black p-2 py-3">
          <a href="/services" class="
            relative flex items-center whitespace-nowrap px-1
            before:absolute before:left-0 before:bottom-1
            before:h-[8px] before:w-0 before:bg-[var(--accent)]
            before:transition-all before:duration-300
            hover:before:w-full
          ">
            Services
          </a>
        </li>
        <!-- ... autres liens ... -->

        <!-- CTA Contact -->
        <li class="border-l-2 border-black p-2 py-2 flex items-center">
          <a href="/contact" class="
            bg-[var(--blue)] border-2 border-black
            px-4 py-1.5 font-medium text-sm
            shadow-[3px_3px_0px_rgba(0,0,0,1)]
            hover:bg-[var(--yellow)]
            hover:shadow-[1px_1px_0px_rgba(0,0,0,1)]
            hover:translate-x-[2px] hover:translate-y-[2px]
          ">
            Contact
          </a>
        </li>
      </ul>

      <!-- Bouton hamburger mobile -->
      <button class="flex md:hidden p-2" aria-label="Ouvrir le menu">
        <i class="ri-menu-2-line text-2xl"></i>
      </button>
    </nav>
  </div>
</header>
```

### Liens de navigation

| État | Style |
|------|-------|
| Default | `text-[var(--text)]` |
| Hover | Soulignement animé `before:bg-[var(--accent)]` (magenta transparent) |
| Active | `bg-[var(--accent)]` (fond magenta transparent) |

### Navigation mobile

Menu slide-in avec liens centrés et CTA en bas :

```html
<div class="fixed left-0 top-0 h-full w-full bg-white z-20 transition-all duration-300">
  <nav>
    <ul class="flex flex-col justify-center items-center gap-2 mt-8">
      <li class="py-2 w-full text-center">
        <a href="/services" class="
          block p-3 text-2xl font-bold
          transition-colors duration-200
          hover:bg-[var(--accent)]
        ">
          Services
        </a>
      </li>
      <!-- ... autres liens ... -->

      <!-- CTA mobile -->
      <li class="py-6 mt-4">
        <a href="/contact" class="
          bg-[var(--blue)] border-3 border-black
          px-10 py-4 text-xl font-bold
          shadow-[4px_4px_0px_rgba(0,0,0,1)]
          hover:bg-[var(--yellow)]
        ">
          Contact
        </a>
      </li>
    </ul>
  </nav>
</div>
```

---

## Sections

### Section standard

```html
<section class="py-20 md:py-32 px-4">
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
<!-- Highlight inline pastel (recommandé pour texte body) -->
<span class="bg-emerald-200 px-1 font-medium">texte important</span>

<!-- Bande magenta transparente (style hero/titres) -->
<span class="relative">
  <span class="absolute bg-[var(--accent)] w-full h-[50%] left-0 bottom-0 z-1"></span>
  <span class="relative z-5">texte important</span>
</span>

<!-- Avec SVG underline -->
<span class="relative">
  texte souligné
  <img src={underline.src} class="absolute -bottom-2 left-0 w-full" />
</span>

<!-- Badge inline violet -->
<span class="bg-[var(--violet)] text-white px-2">nouveau</span>
```

**Note :** Pour les highlights inline dans le texte body, préférer les couleurs pastel Tailwind (`emerald-200`, `sky-200`, `amber-200`) qui offrent un meilleur contraste avec le texte foncé. Éviter `--yellow` (#00A87D) qui est trop sombre pour du texte sur fond coloré.

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
<section class="py-20 md:py-32 px-4">

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
    focus:ring-2 focus:ring-[var(--blue)]
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
    focus:ring-2 focus:ring-[var(--blue)]
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
  focus:ring-2 focus:ring-[var(--blue)]
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
      accent-[var(--blue)]
    "
  />
  <span class="text-md">J'accepte d'être contacté</span>
</label>
```

### États des formulaires

| État | Style |
|------|-------|
| Default | `border-2 border-black` |
| Focus | `ring-2 ring-[var(--blue)]` (vert labo) |
| Error | `ring-2 ring-red-500` |
| Disabled | `opacity-50 bg-gray-100` |

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
<!-- En cours (vert foncé) -->
<span class="
  px-3 py-1
  bg-[var(--yellow)]
  border border-black
  text-sm font-medium
">
  En cours
</span>

<!-- Nouveau (violet) -->
<span class="
  px-3 py-1
  bg-[var(--violet)]
  border border-black
  text-sm font-medium text-white
">
  Nouveau
</span>

<!-- Bientôt (gris) -->
<span class="
  px-3 py-1
  bg-gray-200
  border border-black
  text-sm font-medium
">
  Bientôt
</span>
```

### Récapitulatif badges

| Type | Variable | Couleur |
|------|----------|---------|
| Technologie | `--blue` | Vert labo |
| En cours | `--yellow` | Vert foncé |
| Nouveau/Spécial | `--violet` | Magenta (texte blanc) |
| Bientôt | `bg-gray-200` | Gris |

---

## Espacements Standards

### Padding

| Usage | Classes |
|-------|---------|
| Card padding | `p-6` |
| Section padding | `py-20 md:py-32 px-4` |
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
- [ ] Ombres décalées sur éléments interactifs (effet "stamp")
- [ ] Boutons : vert (`--blue`) → vert foncé (`--yellow`) au hover
- [ ] Liens/textes : soulignement magenta transparent (`--accent`)
- [ ] Typographie Space Grotesk
- [ ] Couleur de texte `--text` (#0F172A)
- [ ] Responsive mobile/desktop
- [ ] Éléments décoratifs (SVGs, corner boxes)
- [ ] Accessibilité : aria-labels, focus visible, navigation clavier
- [ ] Cohérence avec le style brutaliste

---

## Récapitulatif Palette "Lab Scientifique"

| Variable | Hex/RGBA | Aperçu | Usage |
|----------|----------|--------|-------|
| `--main-bg` | #FAFAFA | ⬜ Blanc cassé | Background pages |
| `--blue` | #00D9A3 | 🟢 Vert labo | Boutons, CTA, badges |
| `--yellow` | #00A87D | 🟢 Vert foncé | Hover boutons |
| `--accent` | rgba(163,0,217,0.35) | 🟣 Magenta 35% | Highlights texte, hover liens |
| `--violet` | #A300D9 | 🟣 Magenta vif | Accents spéciaux |
| `--text` | #0F172A | ⬛ Noir charbon | Texte principal |

**Concept :** Vert = croissance, tech moderne | Magenta = créativité, originalité | Contraste complémentaire vert/magenta
