# Feature — Silo mobile : repositionnement « agence application mobile »

> Ouvert le 2026-08-06. Chantier né du rapport d'état contenu du jour.
> Source de vérité data : `.seo-data/gsc-2026-08-06.json`, `.seo-data/gsc-pilier-mobile.json`,
> `.seo-data/canniba-2026-08-06.json` (période GSC 2026-07-08 → 2026-08-04, 28 jours).

## État session 2026-08-06

**Fait :**
- Pilier `/services/developpement-application-mobile` repositionné (title, H1, lead, hero, 7 liens descendants + 2 vers les géo)
- Guide `developper-application-mobile-suisse` spécialisé sur l'informationnel, ses 2 ancres vers le pilier portent la sémantique commerciale
- Maillage montant fermé : 8 articles → pilier (il n'en recevait qu'un sur 18), 10 ancres uniques
- Route géo créée : `src/data/villes-mobile.ts` + `[ville].astro` → `/geneve` et `/lausanne`, contenu réellement local
- Correctif éditorial : la revendication « Agence application mobile » a été rejetée et remplacée par le cadrage « alternative à l'agence » sur les 3 routes

**Prochain :** mesure à S+4 (~2026-09-03). Re-run `/seo-gsc` et `/seo-cannibalisation` sur `sc-domain:jonlabs.ch`, comparer à la baseline plus bas. Le pilier doit être passé devant le guide sur `développement application mobile suisse` et `création application mobile suisse`.

**Pièges :**
- Bulle et Fribourg (204 imp, pos 31-50) volontairement non créées — légitimité locale non revendiquée dans le repo, arbitrage Jonathan requis avant de générer du contexte local
- Ne pas rebrancher les pages géo au méga-menu/footer : décision `d247cc7` du 10.07, maillage éditorial uniquement
- Ne pas faire cibler les requêtes « agence app native / hybride » par les articles comparatifs — elles sont transactionnelles et appartiennent au pilier, c'est ce qui avait créé la hiérarchie inversée
- Le guide n'a plus de CTA de conversion direct (choix assumé, réversible)

**Commit :** `c3c1c30` feat(seo): silo mobile — pilier repositionné, route géo GE/VD, maillage fermé

---

## Objectif

`/services/developpement-application-mobile` est la **1re page du site en impressions** et ne
convertit rien. La page capte une demande transactionnelle massive qu'elle ne cible pas
explicitement, pendant qu'un article de blog la double sur ses propres requêtes commerciales.
Objectif : rendre le pilier légitime sur son intent, ouvrir la route géo, et refermer le maillage.

## Baseline figée au 2026-08-06 (à ne pas modifier — sert de comparatif à S+4)

**Site entier (28 j)** : 9 039 impressions · 64 clics · CTR 0.71% · position moyenne 20.2

**Pilier `/services/developpement-application-mobile`** : **1 972 impressions · 1 clic · CTR 0.05% · position moyenne 28.9**

### Demande par zone (requêtes du seul pilier)

| Zone | Imp / 28 j | Positions |
|---|---|---|
| Genève | ~500 | 14–17 |
| Suisse / générique | ~430 | 22–57 |
| Tech (native, hybride Flutter, iOS, Android, React Native) | ~290 | 12–20 |
| Lausanne | ~192 | 28–35 |
| Bulle | ~118 | 31–50 |
| Fribourg | ~86 | 44–49 |

Profil différencié à exploiter : **Genève tire sur Android + React Native**, **Lausanne sur iOS**.

### Requêtes principales (extrait)

| Requête | Imp | Clics | Pos |
|---|---|---|---|
| développement application mobile suisse | 209 | 0 | 25 |
| agence application mobile genève | 144 | 0 | 15.6 |
| développement application mobile genève | 114 | 0 | 16.3 |
| créer une application genève | 73 | 0 | 15.8 |
| création application mobile genève | 69 | 0 | 15.4 |
| développement app android genève | 69 | 0 | 16.8 |
| agence app native suisse | 67 | 0 | 12.5 |
| agence app hybride flutter | 63 | 0 | 20.4 |
| développement app ios lausanne | 62 | 0 | 32.7 |
| agence application mobile lausanne | 58 | 0 | 31.4 |
| agence application mobile bulle | 42 | 0 | 34 |
| agence react native genève | 25 | 0 | 17.6 |

## Diagnostic — les 5 causes identifiées

1. **Cannibalisation inversée.** `/blog/developper-application-mobile-suisse` bat le pilier sur
   les requêtes transactionnelles : `création application mobile suisse` pos **7.2** vs 35.2 ·
   `développement application suisse` pos **8.3** vs 26 · `développement mobile hybride suisse`
   pos **9.4** vs 31.5 · `développement application mobile suisse` pos **9.9** vs 25.
2. **Maillage mort.** 1 seul des 18 articles mobile/app linke le pilier. Le pilier ne linkait
   que 2 des 9 spokes.
3. **Ciblage manquant.** Le mot « agence » — formulation n°1 de la demande — n'apparaissait ni
   en title, ni en H1, ni en lead. Le title était verrouillé sur Genève.
4. **Contradiction éditoriale.** Le hero affichait « Pensée pour tes utilisateurs, pas pour une
   agence » face à une requête n°1 `agence application mobile genève`.
5. **Home parasite.** `/` apparaissait à pos 58–77 sur `développement application mobile genève`
   et `développement app android genève`.

## Décisions verrouillées

- **Pas de 301 sur le guide blog.** Il performe (pos 7-10) : on le spécialise sur l'informationnel
  et on lui fait transmettre l'autorité vers le pilier via une ancre descriptive.
- **Hiérarchie d'intent** : pilier = générique + tech + « Suisse romande » · pages géo =
  exact-match ville. Titles obligatoirement distincts (leçon hub↔géo du silo IA, `docs/planSEOIA.md`).
- **Genève + Lausanne uniquement.** Bulle et Fribourg sont mesurées (204 imp) mais non revendiquées
  dans le repo → arbitrage Jonathan requis avant création. Pas de contexte local inventé
  (garde-fou `/programmatic-seo`).
- **Phase 2 = ré-optimisation, pas production.** La data demande des pages, pas des articles :
  `application-native-vs-hybride` et `flutter-vs-react-native-pme` doivent capter
  `agence app native suisse` (pos 12.5) et `agence app hybride flutter` (pos 20.4) que le pilier
  capte à leur place aujourd'hui.

## Phases

| Phase | Contenu | État |
|---|---|---|
| 0.A | Repositionnement du pilier (title/H1/lead/hero + maillage descendant) | ✅ 2026-08-06 |
| 0.B | Différenciation du guide blog | ✅ 2026-08-06 |
| 0.C | Maillage montant des 8 articles mobile | ✅ 2026-08-06 |
| 1 | Route géo `/services/developpement-application-mobile/[ville]` (Genève, Lausanne) | ✅ 2026-08-06 |
| 2 | ~~Ré-optimisation des 2 articles tech + schema/navigation~~ | ❌ annulée — voir ci-dessous |
| 3 | Mesure à S+4 : re-run `/seo-gsc` + `/seo-cannibalisation`, comparer à la baseline ci-dessus | à venir (~2026-09-03) |

### Pourquoi la Phase 2 a été annulée

Deux erreurs du plan initial, détectées à l'exécution :

1. **Ré-optimiser `application-native-vs-hybride` et `flutter-vs-react-native-pme` sur
   `agence app native suisse` / `agence app hybride flutter` aurait recréé la cannibalisation
   qu'on venait de corriger.** Ces requêtes sont transactionnelles et portent « agence » : elles
   appartiennent au pilier, qui les capte déjà (pos 12.5 et 20.4). Faire cibler ça par des
   articles comparatifs rejouait la hiérarchie inversée. Les articles restent informationnels.
2. **Le câblage navigation est refusé par une décision existante.** `src/data/navigation.ts:179-186`
   (commit `d247cc7`, 10.07.2026) sort volontairement les pages géo du méga-menu et du fat footer :
   leur maillage est éditorial, en corps de page. Les pages géo mobile suivent la même convention.
   Ne pas rebrancher sans rouvrir cette décision.

Remplacée par une vérification anti-régression (voir ci-dessous).

## Correctif éditorial appliqué après relecture — revendication « agence »

Le premier jet posait `title` et `H1` en **« Agence application mobile … »**. Rejeté : Jon Labs
se présente partout ailleurs comme **développeur freelance** (home, `/about`,
`/developpeur-web-freelance-geneve`, `/tarifs`), le guide mobile dit « je travaille en solo », et
la page elle-même enchaînait « la solidité d'une agence, sans… » — elle s'auto-contredisait.

Cadrage retenu sur les 3 routes : le terme « agence » reste présent (title, description, H1, corps,
FAQ) mais **comme ce dont on est l'alternative**, jamais comme une revendication d'identité.

| Route | title | H1 |
|---|---|---|
| pilier | Application mobile en Suisse romande, sans agence | Ton application mobile iOS & Android, *sans passer par une agence.* |
| géo GE | Application mobile à Genève, sans agence | Application mobile à *Genève* |
| géo VD | Application mobile à Lausanne, sans agence | Application mobile à *Lausanne* |

Le `Service.name` du schema géo a également été retiré de `motCleSEO` (il asserait « agence
application mobile Genève » en donnée structurée) au profit d'un libellé descriptif.

**Si Jonathan décide de trader sous l'étiquette « agence »**, le swap est trivial sur ces 3 routes
mais impose de reprendre home, about, `/developpeur-web-freelance-geneve` et l'article
`freelance-ou-agence-application-mobile` — sinon l'incohérence reste visible.

## Vérification anti-régression (2026-08-06)

- `npm run build` propre après `rm -rf dist` : **285 pages**, zéro erreur.
- Les 3 routes coexistent (fichier plat + dossier dynamique) : pilier, `/geneve`, `/lausanne`.
- **0 title dupliqué** sur 287 pages scannées dans `dist/`.
- **0 lien interne cassé** sur les 3 routes du silo.
- **10 ancres montantes vers le pilier, toutes uniques**, aucune générique.
- Chiffres : aucun montant créé. Contrôle du diff sur le guide → 2 000–15 000 / 25 000–50 000 /
  5 000–10 000 / MVP 2 000–5 000 CHF identiques à HEAD. Les géo ne citent que la fourchette
  10 000–15 000 déjà affichée sur le pilier. `Chêne-Bougeries` est l'adresse réelle
  (`src/data/schema.ts`, `/mentions-legales`).

## Point ouvert signalé à Jonathan

Le guide `developper-application-mobile-suisse` (pos 7-10) n'a plus **aucun CTA de conversion
direct** : le bloc « cadrage gratuit 30 min » a été remplacé par un renvoi vers le pilier.
C'est l'architecture voulue (guide → pilier → CTA), mais c'est une perte de chemin court sur
la page mobile la mieux classée. Réversible.

## Critère de succès (S+4, soit ~2026-09-03)

Le pilier passe **devant** le guide blog sur `développement application mobile suisse` et
`création application mobile suisse`. Position moyenne du pilier < 20. Premiers clics sur les
requêtes `agence application mobile {ville}`.

## Carte du code

| Fichier | Rôle |
|---|---|
| `src/pages/services/developpement-application-mobile.astro` | Pilier — intent agence + Suisse romande |
| `src/pages/services/developpement-application-mobile/[ville].astro` | Gabarit route géo mobile |
| `src/data/villes-mobile.ts` | Données géo mobile (Genève, Lausanne) |
| `src/content/blog/developper-application-mobile-suisse.md` | Guide — informationnel, transmet l'autorité au pilier |
| `src/data/schema.ts` | Enregistrement `Service` / `LocalBusiness` des pages géo |
| `src/data/navigation.ts` | Entrées de menu du silo mobile |

## Sur Jonathan

→ `cerveau/10-Projets/jonlabs/jonlabs-human.md` (arbitrage Bulle/Fribourg, Request Indexing GSC,
preuve mobile publiable).
