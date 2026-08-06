# Restructuration du site par clusters — Plan de référence

> Généré le 2026-06-25 à partir de GSC (3 mois), URL Inspection API et du graphe de maillage interne.
> Objectif : re-simplifier le site autour de **3 clusters**, garder ce qui ranke, virer l'invisible hors-périmètre.
> Sources data : `.seo-data/diagnostic-gsc-pages-cannibalisation.md`, `.seo-data/_linkgraph.json`.

## Les 3 clusters cibles

| # | Cluster | Périmètre sémantique | Page pilier cible |
|---|---------|----------------------|-------------------|
| **C1** | Développement application custom | apps métier/entreprise, logiciel sur-mesure, MVP, **automatisation & IA appliquée** (agents, workflows) | `/services/developpement-mvp` → à promouvoir en vrai pilier « app sur-mesure » |
| **C2** | Développement application mobile | iOS, Android, natif, hybride, Flutter/React Native, PWA, budget/prix app | ✅ `/services/developpement-application-mobile` + route géo `/[ville]` (GE, VD) |
| **C3** | Création web + référencement | sites vitrine/sur-mesure, refonte, SEO local, GEO/visibilité IA, (GMB ?) | `/services/referencement-local` (indexée) + landing création web |

## Légende des verdicts
- 🟢 **KEEP** : ranke / a du jus → garder et amplifier
- 🔵 **IMPROVE** : dans le périmètre mais faible (thin, mal classée) → enrichir
- 🟣 **MERGE** : cannibalise une page plus forte → fusionner/301
- 🟠 **ACTIVATE** : page pilier existante mais invisible (unknown/draft/orpheline) → rendre découvrable + finaliser
- 🔴 **KILL** : invisible + hors périmètre → supprimer (301 vers cluster parent)
- ⚪ **UTILITY** : page de service technique (légal, merci, pdf, cv) → garder, hors SEO
- 🗓️ **SCHEDULED** : contenu déjà produit, pubDate future (0 imp normal)

---

## C1 — Développement application custom (+ automatisation/IA)

| Page | IMP | Pos | Liens | Verdict |
|------|-----|-----|-------|---------|
| `/blog/hermes-agent-ia-pme` | 1610 | 10 | 4 | 🟢 **KEEP** — ta 2e page, push top 5 |
| `/blog/workflows-vs-agents-ia-pme` | 307 | 7.6 | 5 | 🟢 KEEP |
| `/blog/avantages-limites-automatisation-pme` | 107 | 5.8 | 4 | 🟢 KEEP |
| `/blog/openclaw-pme-suisse` | 100 | 5.6 | 3 | 🟢 KEEP |
| `/blog/comment-choisir-quoi-automatiser-pme` | 35 | 6.2 | 3 | 🔵 IMPROVE |
| `/services/developpement-mvp` | 38 | 25 | 2 | 🟠 ACTIVATE — indexée mais pos 25 + 2 liens → **candidat pilier C1**, à étoffer + mailler |
| `/services/automatisation` | 0 | — | 4 | 🟠 ACTIVATE — draft/noindex, pilier à finaliser |
| `/services/integration-outils` | 0 | — | 1 | 🟠 ACTIVATE ou fusionner dans automatisation |
| `/services/outils-sur-mesure` | 0 | — | 1 | 🔵 IMPROVE — discovered-not-indexed |
| `/blog/application-metier-pme-sur-mesure` | 0 | — | 1 | 🗓️ SCHEDULED |
| `/blog/automatisation-pme-suisse-guide-complet` | 5 | 5.6 | 5 | 🔵 IMPROVE — guide à renforcer comme pilier blog |
| `/blog/temps-perdu-pme-automatisation` | 6 | 6.7 | 3 | 🔵 IMPROVE ou 🟣 merge dans le guide |
| `/blog/automatisation-club-sportif` | 2 | 4 | 4 | 🔴 KILL ? (cas trop niche, 2 imp) |
| `/blog/ia-pragmatique-pme-suisse` | 7 | 5.9 | 2 | 🔴 KILL ? (thin) |
| `/blog/no-show-rendez-vous-2026` | 4 | 4.2 | 4 | 🔴 KILL ? (hors cœur) |
| `/services/validation-idee` + `/blog/valide-idee-business-suisse` | 0 | — | 3/1 | ❓ DÉCISION — rattacher à C1 (validation d'idée app) ou virer |

## C2 — Développement application mobile

> ✅ **Pilier service créé le 2026-06-25** : `/services/developpement-application-mobile` (nav + footer sitewide, schema Service, CTA repointé).
>
> 🔄 **Restructuré le 2026-08-06** (commit `c3c1c30`, epic `docs/features/silo-mobile-agence.md`).
> Le cluster a maintenant de la vraie data : le pilier fait **1 972 imp / 1 clic / pos 28.9** sur
> 28 jours, c'est la 1re page du site en impressions. Trois corrections structurelles :
> 1. **Hiérarchie d'intent posée.** Le pilier tient le transactionnel (générique + tech +
>    « Suisse romande »), les pages géo prennent l'exact-match ville, le blog reste
>    informationnel. Avant, `developper-application-mobile-suisse` doublait le pilier sur ses
>    propres requêtes commerciales (pos 7-10 vs 25-35) — il a été spécialisé sur l'informationnel.
> 2. **Route géo ouverte** : `/services/developpement-application-mobile/{geneve,lausanne}`.
>    Bulle et Fribourg mesurées (204 imp, pos 31-50) mais **non créées** — légitimité locale non
>    revendiquée dans le repo, arbitrage Jonathan en attente.
> 3. **Maillage montant fermé** : 8 articles → pilier (il n'en recevait qu'un sur 18).
>
> Cadrage éditorial : le terme « agence » est présent partout mais **comme ce dont on est
> l'alternative**, jamais comme revendication d'identité (le site se présente ailleurs comme
> développeur freelance). Détail → le feature file.

| Page | Statut | Verdict |
|------|--------|---------|
| `/services/developpement-application-mobile/geneve` | ✅ créé 06.08 | 🟢 exact-match GE — profil Android / React Native |
| `/services/developpement-application-mobile/lausanne` | ✅ créé 06.08 | 🟢 exact-match VD — profil iOS / TestFlight |
| `/blog/developper-application-mobile-suisse` | 🟢 publié | 🔵 **hub informationnel** — plus le hub transactionnel du cluster (rôle repris par le pilier), transfère l'autorité via 2 ancres sémantiques |
| `/blog/prix-application-mobile-suisse` | 🗓️ 03.07 | 🟢 |
| `/blog/flutter-vs-react-native-pme` | 🗓️ 10.07 | 🟢 |
| `/blog/application-mobile-ou-pwa` | 🗓️ 14.07 | 🟢 |
| `/blog/budget-mvp-application-mobile` | 🗓️ 17.07 | 🟢 |
| `/blog/freelance-ou-agence-application-mobile` | 🗓️ 21.07 | 🟢 |
| `/blog/application-metier-pme-sur-mesure` | 🗓️ 24.07 | 🟢 (pont C1/C2) |
| `/blog/application-native-vs-hybride` | 🗓️ 28.07 | 🟢 |
| `/blog/application-mobile-automatisation-pme` | 🗓️ 31.07 | 🟢 (pont C1/C2) |
| `/blog/application-mobile-pme-suisse` | 🗓️ 07.07 | 🟢 |
| **PILIER service mobile** | ✅ créé 25.06 | 🟢 `/services/developpement-application-mobile` — nav + footer + schema + CTA repointé |

## C3 — Création web + référencement

### C3a — Création / refonte de sites web
| Page | IMP | Pos | Liens | Verdict |
|------|-----|-----|-------|---------|
| `/blog/prix-site-web-suisse-2026` | 432 | 10 | 15 | 🟢 **KEEP** — top maillé, fort |
| `/blog/specialiste-developpement-web-suisse` | 410 | 12 | 7 | 🟢 KEEP — requête métier clé |
| `/blog/creer-site-vitrine-ia-visibilite-google` | 30 | 11 | 12 | 🟢 KEEP — bien maillé |
| `/blog/15-signes-site-web-dort` | 88 | 6.1 | 9 | 🟢 KEEP |
| `/blog/visibilite-site-internet-2026` | 21 | 10 | 11 | 🔵 IMPROVE |
| `/blog/cout-site-web-dormant-calculateur` | 68 | 13 | 4 | 🟢 KEEP (outil) |
| `/blog/freelance-ou-agence-web` | 3 | 5 | 10 | 🔵 IMPROVE (bien maillé, faibles imp) |
| `/developpeur-web-freelance-geneve` | 0 | — | 4 | 🟠 **ACTIVATE** — landing perso UNKNOWN to Google |
| `/services/creation-site-web` | 12 | 3.8 | 3 | 🔵 IMPROVE — thin (crawled-not-indexed) |
| `/services/refonte-site-web` | 6 | 10 | 9 | ✅ ACTIVÉE — noindex retiré + Ressources + sibling (2026-06-25) |
| `/services/developpeur-webflow` | 0 | — | 4 | 🟠 ACTIVATE — UNKNOWN to Google |
| `/services/developpeur-wordpress` | 0 | — | 5 | 🟠 ACTIVATE — UNKNOWN to Google |
| `/developpement-web/{annemasse,gaillard,ville-la-grand,saint-julien,la-roche}` | 41-211 | 8-13 | **0** | 🟠 ACTIVATE — **5 pages géo ORPHELINES**, cannibalisées par la home. Mailler ou décider du sort |

### C3b — Référencement local / SEO
| Page | IMP | Pos | Liens | Verdict |
|------|-----|-----|-------|---------|
| `/services/referencement-local` | 693 | 41 | 12 | 🟢 **KEEP** = pilier SEO local (indexée, pos à booster) |
| `/blog/referencement-local-geneve` | 237 | 20 | 13 | 🟣 MERGE/consolider avec le pilier (cannibalisation) |
| `/blog/tarif-package-seo-local-suisse` | 367 | 30 | 5 | 🟣 MERGE/consolider (cannibalisation) |
| `/blog/referencement-local-lausanne` | 0 | — | 2 | 🗓️ SCHEDULED 26.06 |

### C3c — GEO / visibilité sur les IA
| Page | IMP | Pos | Verdict |
|------|-----|-----|---------|
| `/blog/apparaitre-perplexity` | 377 | 7.4 | 🟢 KEEP (0 clic → réécrire title/meta) |
| `/blog/apparaitre-claude` | 283 | 5.9 | 🟢 KEEP |
| `/blog/apparaitre-copilot` | 202 | 7.4 | 🟢 KEEP |
| `/blog/geo-seo-ia` | 160 | 9.2 | 🟢 KEEP (= hub GEO) |
| `/blog/apparaitre-grok` | 54 | 5.4 | 🟢 KEEP |
| `/blog/apparaitre-chatgpt-geneve` | 11 | 5.8 | 🔵 IMPROVE |
| `/blog/apparaitre-gemini` | 0 | — | 🔵 IMPROVE (indexation à vérifier) |
| `/blog/0a30joursgooglevisible` | 34 | 6.3 | 🟢 KEEP |

### C3d — Google My Business ❓ DÉCISION DE PÉRIMÈTRE
12 pages (sous-cluster lourd). Ranke et reçoit des impressions, mais très spécifique. **À trancher : sous-pilier de C3, ou hors-focus ?**
`fiche-google-my-business-guide-complet-2026` (78 imp) · `creer-fiche-google-my-business-etape-par-etape` (201) · `optimiser-fiche-google-my-business-checklist-2026` (29) · `choisir-categorie-google-business-profile` (76) · `obtenir-plus-avis-google` (21) · `repondre-avis-google-modeles-2026` (95) · `qr-code-avis-google-collecte-pme` (43) · `google-post-business-profile-conversion` (0) · `entrer-top-3-google-maps` (98) · `comment-apparaitre-google-maps-pme-debutant` (0) · `fiche-google-my-business-suspendue-recours` (0) · `/services/gestion-fiche-google` (0)

---

## Hors périmètre / Utility

| Page | Verdict |
|------|---------|
| `/blog/notebooklm-guide-complet-2026` | 🔴 KILL ou archive (tuto outil, hors 3 clusters) |
| `/outils/reddit-dashboard` | 🔴 KILL (2 imp, orpheline, hors sujet) |
| `/outils/checklist-*` | ⚪ UTILITY (lead magnets — garder, mailler) |
| `/portfolio` + 6 fiches | 🟢 KEEP (preuve E-E-A-T) mais **6 fiches orphelines** → mailler |
| `/about` `/contact` `/tarifs` `/cv` | ⚪ UTILITY KEEP |
| `/cv-pdf` `/merci-*` `/mentions-legales` `/blog/tag/*` | ⚪ noindex OK |

---

## Problèmes transverses de la « toile »

1. **Homepage trop dominante** : `/` (2590 imp) ranke à la place des pages géo/métier sur leurs propres requêtes → la désambiguïser (hub qui distribue, pas qui capte).
2. **Pages géo + portfolio = orphelines** (0 lien interne) → aucune autorité ne circule. Décider : mailler depuis les services, ou supprimer les géo (faible valeur, doublon home).
3. **3 piliers UNKNOWN to Google** (webflow, wordpress, landing freelance) → sitemap + maillage + Request Indexing.
4. **Cannibalisation SEO local** (3 pages) → 1 pilier d'autorité.
5. **Canonical www/non-www** non résolu.
6. **CTR global 0,51 %** → vague de réécriture title/meta sur les pages qui rankent à 0 clic.

## Décisions prises (2026-06-25)
- ✅ **GMB** (C3d) : **gardé** comme sous-pilier de C3 → à consolider (1 pilier GMB + satellites).
- ✅ **Pages géo** `/developpement-web/*` : **gardées + maillées**. Principe directeur = **1 page = 1 intention** : la home rank sur « développeur freelance Genève » (présentation du site), chaque page géo rank sur « développeur web {ville} ». Action : désoptimiser la home sur les requêtes locales-ville + mailler les pages géo depuis les services.
- ✅ **Kill** : **au cas par cas** → voir liste annotée ci-dessous, à valider page par page.
- ✅ **Validation d'idée** (tranché en topical map C1, 2026-06-25) : `/blog/valide-idee-business-suisse` **gardé** (Outer spoke amont du Silo Build) ; `/services/validation-idee` (noindex) → **MERGE confirmé** dans `/services/developpement-mvp` (Jonathan, 2026-06-25 — pas vendue comme offre autonome).
- ✅ **Décisions KILL C1** (tranchées en topical map C1) : `ia-pragmatique-pme-suisse` + `temps-perdu-pme-automatisation` → **301 vers le guide automatisation** (thin/redondants) ; `automatisation-club-sportif` + `no-show-rendez-vous-2026` → **KEEP-demote** en Outer use-cases (servent le persona secondaire / scénario conversion), re-évaluer à J+90 via `/seo-gsc`.

## Liste KILL à valider (page par page)

| Page | IMP 3 mois | Périmètre | Diagnostic | Action proposée | Verdict ? |
|------|-----------|-----------|------------|-----------------|-----------|
| `/blog/automatisation-club-sportif` | 2 | C1-adjacent | Cas très niche, quasi invisible | 301 → guide automatisation **ou** garder comme preuve | ⬜ |
| `/blog/ia-pragmatique-pme-suisse` | 7 | C1-adjacent | Thin, généraliste | 301 → `/services/automatisation` | ⬜ |
| `/blog/no-show-rendez-vous-2026` | 4 | C1-adjacent | Use case isolé | 301 → guide automatisation | ⬜ |
| `/blog/temps-perdu-pme-automatisation` | 6 | C1 | Thin, redondant avec le guide | Fusionner dans `automatisation-pme-suisse-guide-complet` | ⬜ |
| `/blog/notebooklm-guide-complet-2026` | 0 | **hors** | Tuto outil IA, hors 3 clusters | 301 → `/blog/geo-seo-ia` ou archive | ⬜ |
| `/outils/reddit-dashboard` | 2 | **hors** | Outil gratuit récent (commit 51f2fcd) mais hors sujet + orphelin | **Garder** (lead magnet récent) mais mailler, ou accepter hors-SEO | ⬜ |

> Note : rien n'est supprimé sans ton OK explicite par ligne.

---

## Feuille de route d'exécution (petit à petit)

### Phase 0 — Quick wins techniques (1 commit, risque faible) ⚡
Indépendant des clusters, débloque immédiatement la visibilité.
- [ ] Canonical : trancher www vs non-www + redirection 301 globale
- [ ] Rendre découvrables les 3 piliers UNKNOWN (vérif sitemap build + maillage entrant depuis `/services` et la home + Request Indexing GSC)
- [x] Mailler les 5 pages géo (liens depuis `/services` + `/services/creation-site-web`) — **2026-06-25** : bloc villes liées dans `.local-section` de `/services` + bloc « Création de site web par ville » (5 géo + landing) dans le pilier `creation-site-web.astro` + strip `GeoZonesStrip` sur la home. Source DRY : `villes-frontalieres.ts`
- [x] Mailler les 6 fiches portfolio orphelines (depuis `/portfolio` et articles pertinents) — **2026-06-25** : maillage bidirectionnel. Bloc « Service lié + Projets similaires » dans `portfolio/[slug].astro` (mapping DRY `portfolio-relations.ts` + `relatedEntries` calculés en getStaticPaths) + liens entrants contextuels depuis 4 piliers services (creation-site-web ×2, developpeur-webflow, application-mobile, developpement-mvp ; referencement-local déjà OK)

### Phase 1 — Topical maps des 3 clusters 🗺️
Une `/seo-topical-map` par cluster pour figer pilier + satellites + gaps + maillage cible.
- [x] C1 — App custom (+ automatisation/IA) : **topical map livrée** (`docs/topical-map-c1-sur-mesure-automatisation.md`) — 2026-06-25. Verdict structurant : **2 silos frères** (Build `/services/developpement-mvp` + Automate `/services/automatisation`), 4 articles à créer côté Build, décisions C1 tranchées (cf. ci-dessous)
- [x] C2 — App mobile : **pilier service créé** (`/services/developpement-application-mobile`) + relié aux 10 articles (section Ressources + nav/footer + CTA repointé) — 2026-06-25
- [x] C3 — Web + référencement : **topical map livrée** (`docs/topical-map-c3-web-referencement.md`) — 2026-06-25. Verdict : **4 silos frères** (création web / SEO local / GEO / GMB), cluster **mature** → chantier de **consolidation/activation/CTR**, pas de création (1 seule création : `refonte-site-web-pme`). Pilier GMB élu, consolidation SEO local cadrée.

### Phase 2 — Consolidation & dé-cannibalisation 🔧
- [x] Pilier SEO local : fusionner `referencement-local-geneve` + `tarif-package-seo-local-suisse` dans `/services/referencement-local` — **2026-06-25** : 301 (×4 dans `vercel.json`) + absorption sélective (bloc 7 leviers + JSON-LD, transparence prix, 5 questions, +4 FAQ) + repointage du maillage + suppression des 2 `.md`
- [~] Désambiguïser la home des requêtes locales-ville — **2026-06-25** : maillage léger fait (strip `GeoZonesStrip` → 5 villes + landing, vote vers les pages dédiées). **Désoptimisation title/H1 reportée** jusqu'à l'indexation de la landing geneve (garder « Genève » pour l'instant)
- [x] Pilier GMB : élire la page d'autorité + organiser les 11 satellites — **2026-06-25** : hub `fiche-google-my-business-guide-complet-2026` → section descendante vers les 10 satellites + section Ressources sur le pilier service `gestion-fiche-google.astro` + 4 CTA satellites repointés vers le pilier

### Phase 3 — Création / refonte des pages piliers ✍️
- [x] Pilier C2 mobile (nouvelle page service) — `/services/developpement-application-mobile`, 2026-06-25
- [x] Activer `/services/refonte-site-web` (noindex retiré → index,follow ; section Ressources 7 spokes + sibling réciproque creation-site-web) — 2026-06-25
- [ ] Finaliser `/services/automatisation` (retirer noindex — pilier B C1)
- [x] Activer `/services/creation-site-web` (indexation-focus : section Ressources + maillage réciproque 7/7 spokes) — 2026-06-25
- [ ] Étoffer `/services/developpement-mvp`
- [ ] Landings métier : webflow, wordpress ; freelance-genève maillée (entrant portfolio + sortants blueprint) — reste Request Indexing

### Phase 4 — Nettoyage & CTR 🧹
- [ ] Valider et exécuter la liste KILL
- [ ] Vague de réécriture title/meta sur les pages à 0 clic (apparaitre-perplexity, referencement-local…)

> Ordre recommandé : **Phase 0 d'abord** (gains rapides, débloque l'indexation), puis Phase 1 cluster par cluster.
</content>
