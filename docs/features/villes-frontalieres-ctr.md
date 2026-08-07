# Feature — Villes frontalières : CTR + ouverture e-commerce

> Ouvert et livré le 2026-08-07. Suite directe du rapport d'état du 06.08.
> Source data : `.seo-data/gsc-villes-frontalieres.json` (GSC 2026-07-09 → 2026-08-05, 28 j).

## Objectif

Les 5 pages `/developpement-web/[ville]` sont bien classées et ne rapportent rien. Le title
générique ne matchait aucune requête réelle, et une intention entière — l'e-commerce — n'était
pas couverte du tout.

## Baseline figée au 2026-08-07 (comparatif à S+4)

**5 pages cumulées : 1 210 impressions · 0 clic · CTR 0.00% · position moyenne 18.4**

| Ville | Imp / 28 j | Meilleures positions |
|---|---|---|
| Saint-Julien-en-Genevois | 208 | 3.2 – 13.3 |
| Gaillard | 92 | 5.1 – 26 |
| Annemasse | 28 | 16.5 – 60.5 |
| La Roche-sur-Foron | 19 | 7 – 16.2 |
| Ville-la-Grand | 3 | 11 – 25 |

### Requêtes de tête

| Requête | Imp | Pos |
|---|---|---|
| creation site internet saint julien en genevois | 33 | 5.8 |
| creation boutique en ligne annemasse | 19 | 34.3 |
| agence de creation de site internet saint-julien | 18 | 9.9 |
| agence de développement web saint-julien | 18 | 3.2 |
| **agence eshop saint-julien** | 18 | **4.6** |
| agence ecommerce saint-julien | 17 | 13.3 |
| agence de référencement internet saint-julien | 16 | 9.9 |
| agence de développement web gaillard | 15 | 5.1 |
| creation boutique en ligne saint julien en genevois | 14 | 10.4 |
| agence de développement web la-roche-sur-foron | 13 | 11.9 |

## Diagnostic — 3 causes

1. **Décalage title / requête.** Title généré centralement : `Développeur web {ville} — sites
   sur-mesure`. La requête dit « agence de {création site / développement web / référencement}
   {ville} ». Le mot « agence » n'apparaissait nulle part.
2. **Metas quasi identiques d'une ville à l'autre** — title et description étaient produits par
   la même paire de templates dans `[ville].astro`, sans champ par ville.
3. **Intention e-commerce absente.** `grep -ci "e-commerce|ecommerce|boutique en ligne|eshop"`
   sur `[ville].astro` = **0**, alors que `agence eshop saint-julien` est en position 4.6,
   `agence eshop la-roche-sur-foron` en 7, et que le cluster e-commerce pèse ~110 impressions.
   L'offre existe pourtant réellement (`services/creation-site-web`, `services/developpeur-webflow`).
   Recoupe le constat d'origine du chantier plateformes : un lead réel arrivé par
   « développeur Webflow pour site e-commerce » (`docs/chantier-cluster-plateformes.md`).

## Ce qui a été fait

- **`metaTitle` / `metaDescription` / `h1Lead` / `ecommerce` par ville** dans
  `src/data/villes-frontalieres.ts` (optionnels ; `[ville].astro` garde la génération centrale
  en fallback pour toute ville ajoutée sans metas).
- **Titles alignés sur l'axe réel de chaque ville** : Saint-Julien et Gaillard sur
  création site + e-commerce, Annemasse sur « boutique en ligne » (sa quasi-seule requête),
  La Roche sur « développement web », Ville-la-Grand sur « création de site internet ».
- **6e carte de service « Boutique en ligne »** + encart e-commerce local par ville + 1 FAQ
  e-commerce par ville, avec liens contextuels vers `/services/creation-site-web` et
  `/services/developpeur-webflow`.

## Cadrage « agence » — cohérent avec le silo mobile

Même règle que le commit `c3c1c30` : le terme est présent pour la pertinence, **jamais comme
revendication d'identité**. Une formulation différente par ville, pour ne pas répliquer
« sans agence » sur 8 pages en SERP :

| Ville | Formulation |
|---|---|
| Saint-Julien | Freelance, pas une agence |
| Gaillard | En direct avec le développeur, sans agence entre nous |
| Annemasse | L'alternative à l'agence |
| La Roche-sur-Foron | Un développeur en direct plutôt qu'une agence |
| Ville-la-Grand | Sans intermédiaire ni agence |

Les FAQ vont jusqu'à concéder « une agence sera plus adaptée » selon le cas — c'est voulu.

## Vérifications (2026-08-07)

- `npm run build` propre : **289 pages** (le +4 vs la veille = le date-gate de
  `ia-nlpd-conformite-suisse`, pubDate 07.08, qui est passé en ligne — pas une régression).
- 5 titles uniques, 51 à 59 caractères suffixe compris. **0 title dupliqué sur 291 pages.**
- 0 lien interne cassé sur les 5 pages.
- Faits e-commerce tous sourcés dans le repo : Stripe / TWINT (`creation-site-web.astro:208`,
  `developpeur-webflow.astro:96`), seuils et limites Webflow Ecommerce
  (`developpeur-webflow.astro:85-99`), « sur devis », « 4 à 6 semaines »
  (`developpeur-webflow.astro:219`). Aucun prix, délai ou volume client créé.

## Critère de succès (S+4, ~2026-09-04)

Premiers clics sur les pages ville — n'importe quel chiffre > 0 est un gain, la baseline est
à zéro clic sur 1 210 impressions. Cible sérieuse : Saint-Julien, qui tient déjà des positions
3 à 10 sur 208 impressions.

## Carte du code

| Fichier | Rôle |
|---|---|
| `src/data/villes-frontalieres.ts` | Données des 5 villes + metas et bloc e-commerce par ville |
| `src/pages/developpement-web/[ville].astro` | Gabarit — consomme les metas par ville, fallback central conservé |
