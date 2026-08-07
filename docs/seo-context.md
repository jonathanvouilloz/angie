---
extends: identity
expertise: Astro/Tailwind/Node.js, automatisation Make/Zapier/n8n, SEO local Suisse romande, applications sur-mesure
location: Genève, Suisse — service Suisse romande
eeat_proof: Audit terrain de 50 sites d'indépendants romands réalisé et publié (2026) ; projets clients livrés pour TPE/PME ; site jonlabs.ch en production ; expérience terrain en automatisation et intégration API
goals:
  cluster: Construire la visibilité organique sur les requêtes "développeur web Genève", "site web suisse romande", "automatisation PME suisse" — asseoir l'expertise E-E-A-T locale
  transactional: Générer des leads qualifiés vers /services/refonte-site-web ou /contact — lecteur qui reconnaît son problème et veut passer à l'action
  local: Apparaître pour les recherches géolocalisées romandes — "freelance web Genève", "développeur web Lausanne", "automatisation PME suisse"
  evergreen: Nurturing — amener le lecteur vers le prochain article du cluster ou vers le CTA email
cta_map:
  hot:
    url: /services/refonte-site-web
    anchor: "Obtenir un audit gratuit"
  warm:
    url: /contact
    anchor: "Discuter de votre projet"
  nurturing: article suivant du cluster (lien interne contextuel)
  email: "[à compléter si newsletter active]"
  calendly:
    url: https://cal.com/jonathan-vouilloz/appel-de-bienvenue
    anchor: "Réserver un appel découverte"
---

# SEO Context — Jon Labs

> Extension d'`identity.md`. Personas détaillés, CTA map, objectifs business par type de contenu, concurrents.
> `tone`, `register`, `banned_words` sont dans `identity.md`.
> `sounds_like`, auteur sont dans `voice.md`.
>
> Lu par `/seo-brief`, `/seo-write`, `/seo-enrich`.

## Cadence éditoriale — RÈGLE OBLIGATOIRE

> **2 articles par semaine, publiés le lundi et le vendredi.** Règle ferme : tout nouveau contenu blog est planifié sur un créneau lundi ou vendredi, jamais en vrac.

**Comment c'est appliqué (mécanique) :**
- La mise en ligne est pilotée par le champ `pubDate` du frontmatter. `isPublished = !draft && pubDate <= now` (`src/lib/blog.ts`) gate l'article partout : listing, page, sitemap. Un `pubDate` futur = article programmé, invisible jusqu'à sa date.
- **Toujours dater un nouvel article sur le prochain créneau lundi/vendredi libre**, jamais sur une date passée ni un autre jour.
- Le site étant statique, l'article ne passe en ligne qu'au **rebuild postérieur à son `pubDate`**. Un cron GitHub Actions (`.github/workflows/scheduled-publish.yml`) redéploie automatiquement le site chaque lundi et vendredi à 07:00 CEST via un Vercel Deploy Hook. Ne pas supprimer ce workflow.
- Pour voir la file d'attente et les trous de cadence : `/calendar`.

**Au moment de planifier (checklist) :**
1. Lister les `pubDate` futurs déjà pris (créneaux occupés).
2. Assigner chaque nouvel article au prochain lundi/vendredi libre, dans l'ordre de priorité du cluster.
3. Attention au maillage : des spokes qui se citent mutuellement et qui sortent à des dates différentes ont des liens internes qui pointent vers une page encore masquée jusqu'à sa mise en ligne (dangling temporaire). Acceptable, mais en tenir compte pour l'ordre.

## Personas

### Persona principal

- **Label** : Indépendant romand ou dirigeant TPE/PME
- **Profil** : Entrepreneur 30-55 ans, Suisse romande (Genève, Vaud, Neuchâtel), entreprise de 1 à 15 personnes
- **Ce qu'il sait déjà** : Il a un site web, il connaît WordPress de nom, il comprend les bases du business digital, il sait que "le SEO c'est important" sans savoir pourquoi
- **Ce qu'il veut savoir** : Combien ça coûte vraiment, combien de temps ça prend, si ça vaut le coup par rapport à son budget, comment ses concurrents font
- **Ce qu'il devrait savoir (angle expert)** : Son site lui coûte des clients de façon invisible chaque mois ; la vitesse mobile et l'architecture SEO ont un impact direct mesurable sur les revenus ; l'IA change les règles de visibilité en 2025-2026 et un site sans schema.org devient invisible pour les AI Overviews
- **Pain points** : Site vieilli ou invisible sur Google, dépendance à un prestataire qui ne répond plus, coûts de maintenance imprévisibles, aucune idée du ROI de son site, concurrent qui le dépasse sur Google

### Persona secondaire

- **Label** : Association ou club sportif / culturel
- **Profil** : Responsable communication non-technique, budget très contraint, besoin de gérer le site sans développeur
- **Ce qu'il veut savoir** : Solutions simples et économiques, comment faire les mises à jour soi-même

## Concurrents de référence

> Mis à jour le 2026-04-19. 10 références analysées — gaps identifiés pour la Gap Analysis.

### Concurrents directs Suisse romande

- **Justin Cappelle** — https://www.justincappelle.ch/blog
  - Point fort: Concurrent le plus direct (PME/artisans/indépendants romands), vrais chiffres sur les tarifs, ton direct et localisé
  - Gap: Aucun contenu sur l'automatisation, l'IA appliquée aux PME, ou le SEO local comme discipline — blog peu nourri
  - Activité: Modérée (quelques articles/trimestre)

- **Vixal Digital** — https://www.vixaldigital.com/blog
  - Point fort: Bonne couverture des requêtes transactionnelles romandes ("combien coûte un site en Suisse", "freelance ou agence")
  - Gap: Pas de contenu IA/automatisation, pas de stratégie SEO long terme, peu de personnalité éditoriale
  - Activité: Faible (quelques articles/an)

- **Mivelaz Consulting** — https://mivelaz-consulting.ch/blog
  - Point fort: Couvre SEO Suisse romande + automatisation PME (n8n, Make, IA) — double positionnement proche du tien
  - Gap: Ton "agence", pas de personal brand, peu de contenu sur le dev sur mesure, blog peu nourri
  - Activité: Faible (vitrine principalement)

- **We Acend** — https://blog.weacend.com
  - Point fort: Seul acteur genevois sur l'angle "automatisation IA pour PME" avec un vrai blog (digitalisation PME Genève, tableaux de bord, centralisation données)
  - Gap: Aucun contenu SEO, aucune vision sur la visibilité Google locale, pas de dev custom
  - Activité: Modérée (articles bien construits, cadence irrégulière)

- **Lyketil** — https://www.lyketil.com
  - Point fort: Agence no-code Lausanne (Bubble, Webflow, Glide), cible PME romandes, positionnement local clair
  - Gap: Aucun blog éditorial, aucun contenu SEO/IA, pure vitrine prestataire
  - Activité: Nulle côté blog

- **web-dev.fr** — https://web-dev.fr
  - Point fort: Freelance dev qui couvre exactement le bassin lémanique transfrontalier (Genève, Annecy, Annemasse, Fillinges)
  - Gap: Pas de blog ni contenu éditorial, aucun angle SEO/automatisation/IA
  - Activité: Nulle côté blog

- **Gauthier Huguenin — hgnn.io** — https://hgnn.io (analysé le 2026-06-30) — ⚠️ **concurrent IA frontal sur Genève**
  - Profil: Freelance **100% spécialiste IA/automatisation**, basé côté français (Grenoble/Annecy/Lyon), cible Genève en **transfrontalier** ("je passe la frontière, je me déplace à Genève"). Pousse **Hermes** et **OpenClaw** (mêmes noms produits que nous).
  - Point fort: Positionnement IA pur et net, copy bénéfice-first sans jargon ("L'IA qui enlève du travail à vos équipes / Pas un outil de plus, du travail en moins"), architecture SEO IA très complète.
  - **Ce qu'il a et qu'on n'a pas** (gaps prioritaires) :
    - Page **`/consultant-ia-geneve`** (H1 "Consultant IA à Genève, au service de votre PME") + pages géo `consultant-ia-{grenoble|annecy|lyon}` → il occupe déjà "consultant IA Genève".
    - Hub **`/consultant-ia`** (possède le keyword) + services productisés **Formation IA** et **Conseil stratégique IA**.
    - **Pages Métiers verticales** : `/metiers/{immobilier|garages-automobiles|agences-digitales|loueurs-airbnb}` — template réutilisable (pains métier → 8 cas d'usage IA → parcours métier → outils métier nommés type Apimo/Hektor/PriceHubble → Méthode → Pour qui/Pas pour qui → FAQ 7Q → maillage).
    - Pages produit dédiées **`/hermes`** et **`/openclaw`** (avec offre tangible : "livré en 48h", "cadrage 20 min") — chez nous Hermès/OpenClaw ne sont qu'en blog.
    - Site **bilingue FR/EN**, sous-page outil `/services/automatisation/n8n`, page Partenaires, status public, présence Malt + Upwork.
  - **Nos avantages sur lui** (à exploiter) : on est **vraiment en Suisse/Genève** (pas frontalier français — pas de friction transfrontalière), offre **full-stack** (site + SEO/GEO + mobile + automatisation = prestataire unique), **machine de contenu SEO mature** (clusters vs ses ~10 articles), **preuves chiffrées + prix transparents en CHF** (lui cache tous ses tarifs).
  - **Réponse stratégique** : voir `docs/planSEOIA.md` (chantier hub Consultant IA + pages métiers + landings Hermès/OpenClaw).
  - Activité: Élevée côté structure (site très travaillé), blog modéré (~10 articles FR).

### Références France francophone (benchmarks éditoriaux)

- **Louis Descamps** — https://louisdescamps.fr/blog
  - Point fort: Blog SEO dédié PME/indépendants, fort sur le SEO local, Google My Business, WordPress SEO. Ton accessible, expert sans être corporate
  - Gap: Basé à Lille, aucun ancrage suisse, pas de dev ni automatisation
  - Activité: Régulière (~1 article/mois) — bonne référence de cadence éditoriale

- **Amandine Bart / SEO sans migraine** — https://www.seo-sans-migraine.fr/blog
  - Point fort: Référence absolue FR pour démystifier le SEO (150k+ followers), contenu très pédagogique, orienté entrepreneurs et indépendants
  - Gap: Positionnement "formation/outil", aucun ancrage suisse, aucun contenu IA appliquée ou dev custom
  - Activité: Très active — référence nationale mais pas locale

- **Paul Vengeons** — https://www.paulvengeons.fr/blog
  - Point fort: SEO consultant très actif, a publié une page "Consultant SEO Suisse" pour capter le marché romand — concurrent indirect sur le SEO. Fort personal branding, bien référencé
  - Gap: Basé à Paris, aucune connaissance terrain du marché suisse, pas de dev ni automatisation
  - Activité: Très active (publication régulière, très bien référencé)

- **Florian Perrier** — https://www.florianperrier.com/blog
  - Point fort: Dev freelance parisien qui mélange contenu SEO, tendances tech et IA (Mistral Code, automatisation). Bon angle "dev + IA"
  - Gap: Ancrage parisien, contenu IA très "developer tools" sans bénéfice concret PME, pas de SEO local
  - Activité: Modérée (quelques articles/trimestre)

### Référence tonale

- **welovedevs.com** — https://welovedevs.com — référence pour le ton direct et candide (FR, pas CH — à adapter au marché romand)

### Synthèse des gaps à exploiter

- Aucun acteur local ne publie sur les 3 piliers simultanément : dev sur mesure + SEO local suisse + automatisation IA pour PME
- Le blog est le principal avantage compétitif en Suisse romande : les acteurs locaux n'ont pas de stratégie de contenu
- Paul Vengeons tente de capter le marché suisse depuis Paris → opportunité de le détrôner avec un ancrage terrain réel
- Louis Descamps est la référence de cadence à atteindre (~1 article/mois) dans un premier temps
- **hgnn.io (Gauthier Huguenin) est la menace IA frontale** : il occupe déjà "consultant IA Genève" en transfrontalier. Riposte = un cluster IA dédié avec notre ancrage suisse réel comme différenciant (voir `docs/planSEOIA.md`). Reprendre son template de pages Métiers et ses pages produit Hermès/OpenClaw, mais avec prix CHF transparents et preuves chiffrées (ce qu'il n'a pas).

---

## Indexation — les deux canaux, et ce qu'ils acceptent

> Posé le 2026-08-07 (article `rapport-seo-mensuel-que-doit-il-contenir`).

**IndexNow (Bing, Yandex, Naver, Seznam) — actif.**
Clé : `3a3dcfca6e988b8f78c69950c17b0800`, fichier de vérification à la racine du domaine
(`public/3a3dcfca6e988b8f78c69950c17b0800.txt`). La clé est publique par construction : c'est
le fichier hébergé qui fait preuve de propriété. **Ne jamais en régénérer une seconde** — une
clé suffit pour tout le domaine, et un ping avec une clé non hébergée est rejeté.

Ping après publication d'une URL :

```bash
curl -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d '{"host":"www.jonlabs.ch","key":"3a3dcfca6e988b8f78c69950c17b0800",
       "keyLocation":"https://www.jonlabs.ch/3a3dcfca6e988b8f78c69950c17b0800.txt",
       "urlList":["https://www.jonlabs.ch/blog/<slug>"]}'
```

Réponse attendue : **HTTP 202** (accepté). Le ping se fait *après* déploiement, jamais avant :
les moteurs viennent chercher l'URL, une 404 grille le ping.

**Google — pas d'API pour un article.**
L'Indexing API est officiellement réservée à `JobPosting` et `BroadcastEvent`. Le cockpit
`seo-stats` le refuse explicitement en amont de tout appel réseau (garde IDX-008,
`src/lib/server/indexing-eligibility.ts`). Pour un article, la voie Google est **sitemap +
maillage interne + canonical + qualité**, et au besoin une **demande manuelle** dans la Search
Console (Inspection de l'URL → « Demander une indexation »). Ce geste-là reste sur Jonathan.
