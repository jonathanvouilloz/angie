---
title: "Guide complet : Construire un site performant avec Astro"
description: "De l'installation au deploiement, decouvrez comment creer un site web moderne et ultra-rapide avec le framework Astro."
pubDate: 2025-12-05
image:
  url: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  alt: "Code sur ecran"
category: "tech"
tags: ["Astro", "JavaScript", "Performance", "SSG"]
featured: false
draft: false
readingTime: 12
---

Astro est devenu mon framework de predilection pour les sites web orientes contenu. Dans ce guide complet, je partage tout ce que j'ai appris en construisant plusieurs projets avec cette technologie.

## Pourquoi choisir Astro ?

Avant de plonger dans le code, comprenons pourquoi Astro se demarque dans un ecosysteme deja sature de frameworks JavaScript.

### La philosophie "Zero JS par defaut"

Contrairement a Next.js ou Nuxt, Astro n'envoie aucun JavaScript au client par defaut. Le HTML est genere au build time, et seul le JavaScript explicitement necessaire est inclus. Cette approche resulte en des sites significativement plus rapides.

### Les Islands Architecture

L'architecture en ilots permet d'hydrater selectivement certains composants. Vous pouvez avoir une page statique avec un seul composant interactif, sans charger un framework entier.

### Support multi-framework

Astro supporte React, Vue, Svelte, Solid et meme Preact dans le meme projet. Vous pouvez litteralement mixer des composants de differents frameworks sur une meme page.

## Installation et configuration

Passons a la pratique. Voici comment demarrer un nouveau projet Astro.

### Creer un nouveau projet

La CLI d'Astro rend l'initialisation triviale :

```bash
npm create astro@latest mon-projet
cd mon-projet
npm run dev
```

### Structure des dossiers

Un projet Astro typique ressemble a ceci :

```
src/
├── components/    # Composants reutilisables
├── layouts/       # Templates de pages
├── pages/         # Routes automatiques
├── content/       # Collections de contenu
└── styles/        # CSS global
```

### Configuration de base

Le fichier `astro.config.mjs` centralise la configuration :

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
});
```

## Les composants Astro

Les composants `.astro` sont le coeur du framework. Ils combinent le meilleur de JSX et des templates classiques.

### Anatomie d'un composant

Un composant Astro se divise en deux parties :

```astro
---
// Frontmatter (JavaScript serveur)
const { title, description } = Astro.props;
const data = await fetch('https://api.example.com').then(r => r.json());
---

<!-- Template HTML -->
<article>
  <h1>{title}</h1>
  <p>{description}</p>
</article>

<style>
  /* CSS scope au composant */
  article { padding: 2rem; }
</style>
```

### Props et slots

Les composants acceptent des props et peuvent inclure du contenu via les slots :

```astro
---
interface Props {
  variant?: 'primary' | 'secondary';
}
const { variant = 'primary' } = Astro.props;
---

<button class={variant}>
  <slot />
</button>
```

### Composants dynamiques

Pour les interactions, utilisez les directives client :

```astro
---
import Counter from './Counter.jsx';
---

<!-- Hydrate quand visible -->
<Counter client:visible />

<!-- Hydrate immediatement -->
<Counter client:load />

<!-- Hydrate au idle -->
<Counter client:idle />
```

## Content Collections

Les collections de contenu sont une fonctionnalite puissante pour gerer du contenu structure.

### Definir une collection

Dans `src/content/config.ts` :

```typescript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog };
```

### Requeter le contenu

Astro fournit des helpers pour acceder aux collections :

```astro
---
import { getCollection, getEntry } from 'astro:content';

// Tous les articles
const posts = await getCollection('blog');

// Un article specifique
const post = await getEntry('blog', 'mon-article');
---
```

### Generer des pages dynamiques

Avec `getStaticPaths`, generez des pages pour chaque entree :

```astro
---
export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(post => ({
    params: { slug: post.slug },
    props: { post },
  }));
}
---
```

## Optimisation des performances

Astro excelle en performance, mais quelques techniques peuvent encore ameliorer les resultats.

### Images optimisees

Utilisez le composant Image integre :

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---

<Image
  src={heroImage}
  alt="Hero"
  width={1200}
  format="webp"
/>
```

### Prefetching

Activez le prefetch pour une navigation instantanee :

```javascript
// astro.config.mjs
export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
```

### View Transitions

Les transitions de vue natives ameliorent l'UX :

```astro
---
import { ViewTransitions } from 'astro:transitions';
---

<head>
  <ViewTransitions />
</head>
```

## Deploiement

Astro s'integre parfaitement avec les plateformes modernes.

### Build de production

```bash
npm run build
npm run preview
```

### Deployer sur Vercel

```bash
npx vercel
```

### Deployer sur Netlify

Ajoutez un fichier `netlify.toml` :

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

## Conclusion

Astro represente une evolution majeure dans la facon de construire des sites web. Sa philosophie de performance par defaut, combinee a sa flexibilite, en fait un choix excellent pour les sites orientes contenu.

Les points cles a retenir :

- Zero JavaScript par defaut = performances maximales
- Architecture en ilots pour l'interactivite selective
- Content Collections pour le contenu structure
- Excellent DX avec TypeScript et hot reload

Si vous construisez un blog, un site marketing ou une documentation, Astro merite serieusement votre attention.
