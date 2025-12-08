# Jon Labs - Template Pages Services Spécifiques

Ce document définit la structure standard pour toutes les pages de services de niveau 2 (ex: `/services/creation-site-web`, `/services/automatisation`, etc.)

---

## Vue d'ensemble

### Objectifs de chaque page service

1. **SEO** : Capturer les recherches locales (ex: "création site web Genève")
2. **Conversion** : Transformer le visiteur en prospect (formulaire, appel)
3. **Éducation** : Expliquer le service sans jargon technique
4. **Différenciation** : Montrer pourquoi Jon Labs vs concurrents
5. **Confiance** : Rassurer sur la méthode et les résultats

### Ton & Style

- **Direct** : Parler au client, pas de lui ("Tu" ou "Vous" selon contexte)
- **Concret** : Exemples, chiffres, situations réelles
- **Authentique** : Pas de bullshit corporate
- **Accessible** : Vocabulaire client, pas technique

---

## Structure Détaillée

---

### 1. HERO SECTION

**Objectif** : Capter l'attention, qualifier le visiteur, inciter à scroller

```
┌─────────────────────────────────────────────────────────────┐
│  [H1 - Titre SEO]                                           │
│  Petit, discret, optimisé mots-clés                         │
│                                                             │
│  [Titre Copywriting]                                        │
│  Grand, impactant, orienté bénéfice client                  │
│                                                             │
│  [Accroche]                                                 │
│  2-3 lignes max, résume la promesse                         │
│                                                             │
│  [CTA Principal]        [CTA Secondaire]                    │
│                                                             │
│                                    [Image/Illustration]     │
└─────────────────────────────────────────────────────────────┘
```

#### Composants

| Élément | Spécifications | Exemple |
|---------|----------------|---------|
| **H1 SEO** | 50-60 caractères, mot-clé principal + localisation | "Création de site web à Genève" |
| **Titre Copy** | 6-12 mots, orienté transformation/résultat | "Un site qui travaille pour toi, même quand tu dors" |
| **Accroche** | 150-200 caractères, contexte + promesse | "Tu n'as pas de site ou juste une page Facebook ? Lance ta présence en ligne en 3 semaines, sans te prendre la tête." |
| **CTA Principal** | Verbe d'action + bénéfice | "Discuter de mon projet →" |
| **CTA Secondaire** | Alternative moins engageante | "Voir des exemples" |
| **Image** | Illustration custom ou mockup, style Jon Labs | Mockup de site sur écran, style brutaliste |

#### Notes

- Le H1 SEO peut être visuellement petit (style `text-sm`) mais doit être en `<h1>`
- Le titre copywriting peut être un `<p>` stylé en grand
- Mobile : CTA empilés verticalement

---

### 2. SECTION PROBLÈMES

**Objectif** : Créer l'identification ("C'est exactement moi !"), valider la douleur

```
┌─────────────────────────────────────────────────────────────┐
│  [H2] Tu te reconnais ?                                     │
│  [Sous-titre contextuel]                                    │
│                                                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                     │
│  │ Problème│  │ Problème│  │ Problème│                     │
│  │    1    │  │    2    │  │    3    │                     │
│  └─────────┘  └─────────┘  └─────────┘                     │
│                                                             │
│  [Phrase de transition vers la solution]                    │
└─────────────────────────────────────────────────────────────┘
```

#### Composants

| Élément | Spécifications |
|---------|----------------|
| **H2** | Question ou affirmation qui interpelle |
| **Sous-titre** | Contexte empathique (1 ligne) |
| **Problèmes** | 3-4 pain points maximum, format carte ou liste |
| **Transition** | Phrase qui amène vers la solution |

#### Format des problèmes (au choix)

**Option A - Cartes avec icône**
```
[Icône]
Titre du problème (court)
Description en 1-2 phrases
```

**Option B - Liste conversationnelle**
```
"Je perds des clients parce que mon site fait amateur..."
"Je n'ai pas le temps de gérer un site compliqué..."
"Je ne sais pas par où commencer..."
```

**Option C - Checklist inversée**
```
❌ Pas de site = invisible sur Google
❌ Site obsolète = image non professionnelle
❌ Dépendance au bouche-à-oreille = croissance limitée
```

#### Règles

- Maximum 4 problèmes (au-delà, dilution)
- Utiliser le vocabulaire du client, pas le jargon tech
- Chaque problème doit être reconnaissable en 3 secondes
- Ordre : du plus universel au plus spécifique

---

### 3. SECTION MÉTHODE

**Objectif** : Rassurer sur le processus, montrer le professionnalisme, réduire l'incertitude

```
┌─────────────────────────────────────────────────────────────┐
│  [H2] Comment ça se passe ?                                 │
│  [Sous-titre sur la philosophie]                            │
│                                                             │
│  ┌─────┐    ┌─────┐    ┌─────┐    ┌─────┐                  │
│  │  1  │ →  │  2  │ →  │  3  │ →  │  4  │                  │
│  │Étape│    │Étape│    │Étape│    │Étape│                  │
│  └─────┘    └─────┘    └─────┘    └─────┘                  │
│                                                             │
│  [Encart différenciateur Jon Labs]                          │
└─────────────────────────────────────────────────────────────┘
```

#### Composants

| Élément | Spécifications |
|---------|----------------|
| **H2** | Question naturelle du client |
| **Sous-titre** | Philosophie en 1 ligne (ex: "Content first, pas de tunnel de dev") |
| **Étapes** | 3-5 étapes maximum, numérotées |
| **Différenciateur** | Encart "Ce qui change avec Jon Labs" |

#### Format des étapes

```
[Numéro/Icône]
Nom de l'étape (2-4 mots)
Ce qui se passe (1-2 phrases)
Durée indicative (optionnel)
```

#### Exemple Web

| Étape | Nom | Description | Durée |
|-------|-----|-------------|-------|
| 1 | Échange | On discute de ton projet, tes objectifs, ton identité | 30 min |
| 2 | Contenu | Tu fournis textes et images, je structure | 1 semaine |
| 3 | Design | Maquette pour validation avant code | 3-5 jours |
| 4 | Développement | Je code, tu valides au fur et à mesure | 1-2 semaines |
| 5 | Lancement | Mise en ligne + formation rapide | 1 jour |

#### Encart différenciateur (obligatoire)

> **Ce qui change avec Jon Labs**
> - Pas de tunnel de 6 mois : site en ligne en 3 semaines max
> - Tu gardes le contrôle : validation à chaque étape
> - Pas de dépendance : tu repars avec un site que tu peux faire évoluer

---

### 4. SECTION RÉSULTATS

**Objectif** : Projeter le client dans l'après, rendre la transformation tangible

```
┌─────────────────────────────────────────────────────────────┐
│  [H2] Ce que tu obtiens                                     │
│                                                             │
│  ┌─────────────────┐  ┌─────────────────┐                  │
│  │   Livrable 1    │  │   Livrable 2    │                  │
│  │   + Bénéfice    │  │   + Bénéfice    │                  │
│  └─────────────────┘  └─────────────────┘                  │
│                                                             │
│  ┌─────────────────┐  ┌─────────────────┐                  │
│  │   Livrable 3    │  │   Livrable 4    │                  │
│  │   + Bénéfice    │  │   + Bénéfice    │                  │
│  └─────────────────┘  └─────────────────┘                  │
│                                                             │
│  [Témoignage ou stat clé] (optionnel)                       │
└─────────────────────────────────────────────────────────────┘
```

#### Composants

| Élément | Spécifications |
|---------|----------------|
| **H2** | Orienté possession/transformation |
| **Livrables** | 4-6 résultats concrets |
| **Preuve** | Témoignage, stat, ou exemple (si disponible) |

#### Format des résultats

**Structure : Livrable + Bénéfice**

```
✓ [Ce que tu reçois concrètement]
  → [Ce que ça change pour toi]
```

**Exemple Web**
```
✓ Site responsive (mobile + desktop)
  → Tes visiteurs restent, peu importe leur appareil

✓ Optimisé Google (SEO technique)
  → Tu remontes dans les recherches locales

✓ Chargement rapide (score 90+)
  → Moins de rebond, plus de conversions

✓ Formation + documentation
  → Tu es autonome pour les modifications simples
```

#### Règles

- Toujours coupler livrable technique + bénéfice business
- Éviter le jargon seul ("responsive" → "fonctionne sur mobile")
- Si témoignage : court (2-3 phrases max), avec prénom + contexte

---

### 5. SECTION TECHNOLOGIE / OUTILS

**Objectif** : Rassurer les profils techniques, justifier la qualité

```
┌─────────────────────────────────────────────────────────────┐
│  [H2] Sous le capot                                         │
│  [Phrase sur la philosophie tech]                           │
│                                                             │
│  [Logo] [Logo] [Logo] [Logo] [Logo]                         │
│                                                             │
│  [Explication vulgarisée de pourquoi ces choix]             │
└─────────────────────────────────────────────────────────────┘
```

#### Adaptation selon service

| Service | Titre section | Contenu |
|---------|---------------|---------|
| **Web** | "Sous le capot" | Stack technique (Astro, Tailwind, Vercel) |
| **Automatisation** | "Les outils qu'on utilise" | Make, Zapier, APIs |
| **MVP/Validation** | *Fusionner dans Méthode* | Mentionner outils sans section dédiée |

#### Format

**Logos + explication vulgarisée**

```
[Astro] [Tailwind] [Vercel]

Pourquoi cette stack ?
→ Astro = site ultra-rapide (pas de WordPress qui rame)
→ Tailwind = design sur-mesure (pas de template générique)
→ Vercel = hébergement pro (99.9% de disponibilité)
```

#### Règles

- Section optionnelle pour services non-techniques
- Toujours traduire en bénéfice client
- Ne pas surcharger (3-5 technos max visibles)

---

### 6. SECTION PRICING

**Objectif** : Qualifier les prospects, éviter les demandes hors budget

```
┌─────────────────────────────────────────────────────────────┐
│  [H2] Investissement                                        │
│  [Phrase sur la logique tarifaire]                          │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Formule 1  │  │   Formule 2  │  │   Formule 3  │      │
│  │   À partir   │  │   À partir   │  │   Sur devis  │      │
│  │   de XXX CHF │  │   de XXX CHF │  │              │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                             │
│  [Note sur ce qui influence le prix]                        │
│  [CTA vers devis personnalisé]                              │
└─────────────────────────────────────────────────────────────┘
```

#### Options d'affichage

**Option A - Fourchettes (recommandé pour Web)**
```
Site vitrine : à partir de 1'500 CHF
Site + blog : à partir de 2'500 CHF
E-commerce : sur devis
```

**Option B - Facteurs de prix (pour services variables)**
```
Le prix dépend de :
• Nombre de pages
• Fonctionnalités spécifiques
• Délai souhaité

Fourchette habituelle : 1'500 - 5'000 CHF
```

**Option C - Pas de prix affiché (pour MVP/custom)**
```
Chaque projet est unique.
Discutons de ton besoin pour une estimation précise.
[CTA : Demander un devis →]
```

#### Règles

- Toujours indiquer "à partir de" (jamais de prix fixe)
- Mentionner ce qui est inclus vs en option
- Ajouter une note rassurante ("Paiement échelonné possible")

---

### 7. SECTION FAQ

**Objectif** : Lever les objections, améliorer le SEO, réduire les questions répétitives

```
┌─────────────────────────────────────────────────────────────┐
│  [H2] Questions fréquentes                                  │
│                                                             │
│  [Question 1]                                               │
│  [Réponse courte et directe]                                │
│                                                             │
│  [Question 2]                                               │
│  [Réponse courte et directe]                                │
│                                                             │
│  [...]                                                      │
│                                                             │
│  [Note : "Autre question ? Contacte-moi"]                   │
└─────────────────────────────────────────────────────────────┘
```

#### Questions obligatoires (adapter selon service)

| Thème | Question type |
|-------|---------------|
| **Délai** | "Combien de temps pour avoir mon site ?" |
| **Process** | "Qu'est-ce que je dois fournir ?" |
| **Après** | "Et si j'ai besoin de modifications après ?" |
| **Technique** | "Je n'y connais rien, c'est un problème ?" |
| **Prix** | "Pourquoi ce prix vs WordPress à 500 CHF ?" |
| **Garantie** | "Et si le résultat ne me plaît pas ?" |

#### Format des réponses

- 2-4 phrases maximum
- Ton direct et rassurant
- Finir par une ouverture si pertinent

```
Q: Combien de temps pour avoir mon site ?

R: Entre 2 et 4 semaines selon la complexité. 
   Un site vitrine simple, c'est souvent 2-3 semaines.
   Je te donne un planning précis dès notre premier échange.
```

#### Règles

- 5-8 questions maximum
- Format accordion recommandé (expand/collapse)
- Utiliser les vraies questions reçues par email/appels

---

### 8. SECTION LOCAL (Optionnelle)

**Objectif** : Capitaliser sur le SEO local, créer de la proximité

```
┌─────────────────────────────────────────────────────────────┐
│  [H2] Pourquoi un prestataire à Genève ?                    │
│                                                             │
│  [Arguments proximité]                                      │
│  [Arguments culturels/business]                             │
│  [Arguments pratiques]                                      │
│                                                             │
│  [Mention zones couvertes]                                  │
└─────────────────────────────────────────────────────────────┘
```

#### Pertinence selon service

| Service | Pertinence Local |
|---------|------------------|
| **Création site** | ⭐⭐⭐ Forte |
| **Refonte site** | ⭐⭐⭐ Forte |
| **Automatisation** | ⭐⭐ Moyenne |
| **MVP/Validation** | ⭐ Faible |

#### Arguments types

```
✓ On peut se voir : café, atelier, réunion en personne
✓ Même fuseau horaire : réactivité garantie
✓ Compréhension du marché suisse : LPD, multilinguisme, spécificités locales
✓ Réseau local : recommandations photographes, rédacteurs, etc.
```

#### SEO local

Mentionner naturellement :
- Genève
- Suisse romande
- Vaud, Valais (zones adjacentes)
- "Entreprises genevoises", "indépendants à Genève"

---

### 9. CTA FINAL

**Objectif** : Convertir les visiteurs convaincus, dernière chance d'engagement

```
┌─────────────────────────────────────────────────────────────┐
│  [H2] Prêt à lancer ton projet ?                            │
│  [Phrase de réassurance finale]                             │
│                                                             │
│  [CTA Principal - Grand, visible]                           │
│                                                             │
│  [Alternative moins engageante]                             │
│  ou "Pas encore prêt ? [Lien vers ressource/blog]"          │
└─────────────────────────────────────────────────────────────┘
```

#### Composants

| Élément | Spécifications |
|---------|----------------|
| **H2** | Question ou affirmation d'action |
| **Réassurance** | Lever la dernière hésitation (1 phrase) |
| **CTA Principal** | Même que Hero, formulaire ou lien contact |
| **Alternative** | Pour ceux pas encore prêts |

#### Exemples de réassurance

```
"Premier échange gratuit et sans engagement. 
 On discute de ton projet, tu décides ensuite."

"Pas de mauvaise surprise : devis détaillé avant tout engagement."

"Réponse sous 24h. Promis."
```

#### Règles

- CTA identique ou similaire au Hero (cohérence)
- Toujours proposer une alternative (réduire la friction)
- Fond différencié (couleur accent ou encadré)

---

## Checklist avant publication

### Contenu
- [ ] H1 contient le mot-clé principal + localisation
- [ ] Titre copywriting orienté bénéfice (pas feature)
- [ ] Problèmes en vocabulaire client (pas jargon)
- [ ] Méthode en 3-5 étapes claires
- [ ] Résultats couplent livrable + bénéfice
- [ ] FAQ répond aux vraies objections
- [ ] CTAs cohérents sur toute la page

### SEO
- [ ] Meta title optimisé (50-60 caractères)
- [ ] Meta description avec CTA (150-160 caractères)
- [ ] URL propre (`/services/creation-site-web`)
- [ ] Images avec alt text descriptif
- [ ] Liens internes vers services connexes

### UX
- [ ] Lecture < 5 minutes
- [ ] Scroll logique (problème → solution → action)
- [ ] Mobile responsive vérifié
- [ ] CTAs visibles sans scroller (above the fold)

### Ton Jon Labs
- [ ] Direct et authentique (pas corporate)
- [ ] "Tu" cohérent sur toute la page
- [ ] Pas de bullshit ni de promesses vagues
- [ ] Personnalité visible (touche "Lab", humour léger OK)

---

## Variations par type de service

### Services Web (Création, Refonte)
- Section Technologie : ⭐ Complète
- Section Local : ⭐ Complète
- Pricing : Fourchettes affichées

### Services Automatisation
- Section Technologie → "Outils utilisés"
- Section Local : Courte ou absente
- Pricing : Plus variable, encourager le devis

### Services Validation (MVP, Landing page)
- Section Technologie : Fusionnée dans Méthode
- Section Local : Absente
- Pricing : Sur devis uniquement
- Ajouter : Section "Métriques" (ce qu'on mesure)

---

## Notes finales

### Longueur cible
- **Minimum** : 1'200 mots (SEO)
- **Idéal** : 1'500 - 2'000 mots
- **Maximum** : 2'500 mots (au-delà, créer des sous-pages)

### Liens internes suggérés
- Vers page Services principale
- Vers services complémentaires
- Vers articles de blog pertinents
- Vers page Contact

### Mise à jour
- Revoir les prix tous les 6 mois
- Ajouter des FAQ basées sur les vraies questions reçues
- Ajouter des témoignages dès que disponibles
