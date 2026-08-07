# HANDOFF — 2026-08-06

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Polish global & design system | docs/features/polish-design-system.md | **EN COURS** (19.07 : CTA + blog UX + 48 covers ✅ ; spacing site-wide ✅ ; dernières images brutalistes + tableaux ✅) |
| Refonte SEO / clusters | docs/features/refonte-seo-clusters.md | EN ATTENTE (indexation GSC : re-run /seo-index-diagnose mi-sept. vs baseline 50/88) |
| Devis Cabinet Grange-Canal | docs/features/devis-cabinet-grange-canal.md | CODE FINI — attend le call (3 vérifs bloquantes) |
| Refonte blueprint (design/typo) | docs/features/refonte-blueprint.md | BOUCLÉE — reste `/epic-recap` |
| Chantier SEO IA (consultant IA) | docs/planSEOIA.md | EN ATTENTE (Phase 1-2 ✅, Phase 3 à venir) |
| Refonte piliers micro-intentions / AIO | docs/features/refonte-piliers-micro-intentions.md | EN COURS (Lots A & B ✅ **poussés** — reste CTR blog + C maillage + D/E/F gated) |
| **Silo mobile « agence application mobile »** | docs/features/silo-mobile-agence.md | **PHASES 0+1 SHIPPÉES** (06.08, `c3c1c30` poussé) — reste mesure S+4 (~03.09) |
| **Villes frontalières — CTR + e-commerce** | docs/features/villes-frontalieres-ctr.md | **LIVRÉ** (07.08) — reste mesure S+4 (~04.09) |

## Reprendre ici
**Silo mobile** — Phases 0 (pilier repositionné, guide différencié, 8 articles maillés) et 1
(route géo Genève + Lausanne) shippées le 06.08, commit `c3c1c30` poussé sur `main`. Build vert
285 pages, 0 title dupliqué sur 287, 0 lien interne cassé.
**Reprendre par la mesure à S+4 (~03.09)** : re-run `/seo-gsc` + `/seo-cannibalisation` et
comparer à la baseline figée (1972 imp / 1 clic / pos 28.9 sur le pilier). Critère de réussite :
le pilier passe devant `/blog/developper-application-mobile-suisse` sur
`développement application mobile suisse` et `création application mobile suisse`.
Bloqué côté Jon : arbitrage Bulle/Fribourg (204 imp non exploitées) + Request Indexing GSC.
Détail complet → `docs/features/silo-mobile-agence.md`.

(Le bloc onboarding des devis acceptés est parti dans un commit séparé, `8fb1af0`.)

## Ancien point de reprise
**Refonte piliers micro-intentions** — Phase 0 GSC ✅ + **Lot A** (ciblage on-page : H1/lead porteurs referencement-local/mobile/mvp + Webflow « Genève ») ✅ commit `beaed65` + **Lot B** (LocalBusiness sur les 7 piliers indexés) ✅ commit `c0cc742`. **Non pushés** (déploiement Vercel = au push). **Reprendre par : CTR blog** (title/meta articles page-1 à ~0 clic : hermes 1783i, specialiste-dev, ref-local-lausanne…) — ⚠️ **d'abord ranger les ~16 `.md` blog en cours** (modifs autre chantier non commitées) pour éviter un commit sale. Puis **Lot C** (maillage blog→pilier, surtout mobile ; fix CTR freelance) puis **D/E/F** (gated D1/D2/D5). Détail + tables Phase 0 : `docs/features/refonte-piliers-micro-intentions.md`.
Actions manuelles : Request Indexing GSC sur les 4 pages Lot A + les 7 piliers Lot B **une fois déployés**.
(Autre fil ouvert : Polish/design — revue live des 48 covers, `npm run dev` → /blog.)
Commit : 5ec98a9 docs(seo) epic piliers micro-intentions — HEAD

## Actions manuelles en attente (côté Jonathan)
- **Décisions D1-D5** de l'epic piliers micro-intentions (prix réels mvp/mobile, secteurs revendiqués, Webflow GE vs romand, section automatisation, chiffres clients publiables) — détail dans son feature file.
- **Devis Grange-Canal — 3 vérifs AVANT envoi** (« 45 à 60 min » concurrent, « 9 vs 160 », « dont personne ne se sert » sur les 31 avis) — détail dans son feature file.
- **`/epic-recap`** de l'epic Refonte blueprint (bouclé).
- **Portrait hero** : reprendre un portrait américain, détourer le fond, réintégrer sur crème (recadrage actuel transitoire) — `polish-design-system.md`.
- **Bandeau de confiance** : trancher « Lécureux Conseil » vs `client.name: "Léo Lécureux"` (`ClientsBanner.astro`).
- **Reframe éditorial article Lécureux** (`visibilite-site-internet-2026.md`) — chiffre inflaté vs GSC (choix de voix, reporté).
- Le dossier Bureau `covers-preview/` (vieilles previews v1/v2) peut être supprimé.
