# Jon Labs

Site freelance de **Jonathan Vouilloz** — développement web, automatisation IA et référencement local pour PME et indépendants de Suisse romande. En production sur [jonlabs.ch](https://www.jonlabs.ch).

Design **blueprint** — éditorial minimaliste warm : filets fins, un seul accent teal `#00D9A3`, typo Inter Tight × Instrument Serif. Contenu en français (FR-CH).

## Stack

- **[Astro 5](https://astro.build)** (sorties statiques) + **[MDX](https://docs.astro.build/en/guides/integrations-guide/mdx/)**
- **[Tailwind CSS 4](https://tailwindcss.com)** via `@tailwindcss/vite`
- **[React 19](https://react.dev)** pour les îlots interactifs
- **[GSAP](https://gsap.com)** + **[Motion](https://motion.dev)** pour les animations
- `@astrojs/sitemap`, `@astrojs/rss`, `sharp` (images), `lucide` (icônes)
- **TypeScript**

## Démarrage

```bash
npm install
npm run dev      # serveur local sur http://localhost:4321
npm run build    # build de production dans ./dist/
npm run preview  # prévisualise le build de production
```

## Structure

```
src/
├── pages/          # Routes (voir ci-dessous)
├── content/        # Collections de contenu — SEULE source de vérité (config.ts)
├── components/     # Composants Astro/React
├── layouts/        # Layout.astro (template de base, normalise le <title>)
├── data/           # schema.ts, navigation.ts, données géo/métiers, scénarios
├── plugins/        # remark-tldr.mjs (bloc TL;DR auto en tête d'article)
├── styles/         # global.css (import Tailwind)
└── assets/         # SVGs, images sources

public/             # Assets servis tels quels : og-image.png, robots.txt,
                    # llm.txt / llms.txt, favicon/, fonts/, outils/
docs/               # Documentation projet — voir docs/README.md
```

### Routes principales (`src/pages/`)

- `index`, `about`, `contact`, `tarifs`, `mentions-legales`, `cv`, `hermes`
- `services` + `services/*` (creation-site-web, refonte-site-web, developpement-mvp, automatisation, integration-outils, outils-sur-mesure, validation-idee, gestion-fiche-google, formation-ia-equipe, referencement-local, developpeur-webflow, developpeur-wordpress, developpement-application-mobile)
- Pages géo/métiers dynamiques : `consultant-ia/[ville]`, `developpement-web/[ville]`, `services/developpement-application-mobile/[ville]`, `metiers/[metier]`
- `blog/` + `blog/[slug]` + `blog/tag/[tag]`, hubs piliers `guides/[slug]`
- `portfolio` + `portfolio/[slug]`
- `outils/` (checklists PDF, dashboard Reddit), `devis-client/[slug]`
- `styleguide*` (pages internes de référence design)

### Collections de contenu (`src/content/config.ts`)

| Collection | Emplacement | Rendu |
|---|---|---|
| `blog` | `src/content/blog/*.md` | `/blog/{slug}` |
| `pages` | `src/content/pages/*.md` | `/guides/{slug}` (piliers « pillar ») |
| `portfolio` | `src/content/portfolio/*.md` | `/portfolio/{slug}` |
| `devis` | `src/content/devis/*.md` | `/devis-client/{slug}` |
| `linkedin` | `src/content/linkedin/*.md` | interne (brouillons) |

> Le dossier `content/` à la racine du repo (hors `src/`) est un espace de travail du pipeline de contenu et **n'est pas dans le build**. La source de vérité publiée est toujours `src/content/`.

## Points de configuration (`astro.config.mjs`)

- `site: https://www.jonlabs.ch`, `trailingSlash: 'never'`
- **Sitemap filtré** : exclut les PDF, pages `merci-*`, `devis-client/`, `styleguide*`, tags blog et les services encore en draft (noindex).
- **`lastmod` réel** calculé depuis les frontmatter (`updatedDate` > `pubDate`) des articles et guides — évite un `lastmod` = date de build qui casserait le signal de fraîcheur à chaque rebuild.
- **Redirects** : anciens slugs `-2026` → versions sans année (le jus SEO est resté dessus).
- Plugin remark maison `remark-tldr` (bloc TL;DR) + `rehype-external-links` (liens externes en `_blank` `noopener`).

## Documentation

- **[`CLAUDE.md`](./CLAUDE.md)** — instructions et conventions du projet (source de vérité).
- **[`docs/README.md`](./docs/README.md)** — index documentaire complet (contexte, design system, clusters de contenu, recherche).

Le contenu SEO suit un pipeline de skills (`/seo-brief` → `/seo-write` → publish) ; les briefs vivent dans `src/content/blog/.briefs/`.

---

*Basé à l'origine sur le template Astro « Angie » ([LaB-CH3](https://github.com/LaB-CH3)), depuis largement réécrit.*
