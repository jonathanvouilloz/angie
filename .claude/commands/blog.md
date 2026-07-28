# Blog Article Helper

Aide à formater, vérifier et générer les articles de blog pour Jon Labs.

## Instructions

### Si l'argument est "generate [fichier.md]" : (WORKFLOW COMPLET)

Workflow complet pour créer un article à partir d'un fichier markdown brut, avec génération d'images et optimisation SEO.

#### Étape 1: Lecture et analyse

1. **Lire** le fichier source markdown brut (sans frontmatter)
2. **Lire** `docs/guidelines.md` section "Blog posts (Markdown)" pour les conventions
3. **Analyser** le contenu pour identifier :
   - Titre principal (première ligne ou H1)
   - Type d'article : `comparaison` (VS), `checklist` (points), `processus` (étapes)
   - Sections H2 principales (pour images in-article)
   - Mots-clés pour les tags
4. **Générer** le slug depuis le titre (kebab-case, sans accents)

#### Étape 2: Génération de la cover (workflow en 3 phases)

**Lire** `docs/generate-image-blog.md` pour le guide de style visuel complet.

---

**PHASE 1 : Générer le blob SEUL (sans texte)**

**Étape 1a : Analyser le contenu pour générer la pose**

Avant de générer l'image, analyser le contenu de l'article pour créer une pose unique et adaptée :

1. **Extraire le titre** de l'article
2. **Créer un résumé** (1-2 phrases) basé sur l'introduction et les sections H2
3. **Générer une pose** descriptive en anglais qui :
   - Décrit une action simple que le blob peut faire
   - Est en lien direct avec le sujet de l'article
   - Inclut une expression (looking satisfied, excited, curious, etc.)

**Format de la pose :**
```
"[ACTION avec objet optionnel], [EXPRESSION]"
```

**Exemples de poses générées dynamiquement :**

| Contenu de l'article | Pose générée |
|---------------------|--------------|
| Article sur les tests MVP et validation d'idées | "holding a small rocket, looking excited and ready to launch" |
| Article sur l'automatisation d'un club sportif | "juggling small gears and a calendar, looking proud" |
| Article sur le SEO et la visibilité Google | "peering through a magnifying glass at a star, looking curious" |
| Article sur les rendez-vous manqués (no-shows) | "holding a small clock, looking determined" |

**Exemples de poses par thème (inspiration) :**

| Thème | Exemples de poses |
|-------|-------------------|
| Automatisation | "holding a small gear", "surrounded by floating cogs" |
| Dev web | "hugging a tiny laptop", "typing on a floating keyboard" |
| SEO | "holding a magnifying glass", "looking at a shining star" |
| MVP/Validation | "building with blocks", "holding a small rocket" |
| Général/réflexion | "sitting peacefully, one arm raised thinking" |
| Problème résolu | "giving a thumbs up", "celebrating with confetti" |

---

**Étape 1b : Générer l'image avec nano-banana**

Utiliser `mcp__nano-banana__edit_image` avec le template de référence :

```
mcp__nano-banana__edit_image(
  imagePath: "C:/Users/jojo-/noyau/jonlabs/src/assets/template-blog-cover.png",
  prompt: "[PROMPT CI-DESSOUS]"
)
```

**Prompt pour le blob (SANS TEXTE) :**
```
Minimalist doodle illustration, square format, flat design, white background.

A cute simple blob/ghost character with round glasses, drawn with clean [COULEUR] fill and thin black outlines. The blob has a friendly expression with tiny dot eyes behind round glasses. Style: hand-drawn doodle, childlike simplicity, Korean cute character aesthetic.

The blob is [POSE GÉNÉRÉE À L'ÉTAPE 1a].

Character centered on white background. No text, no decorations. Simple, minimal, memorable.
```

**Choix de couleur** (alterner pour varier les covers) :
- Turquoise : `#00D9A3`
- Magenta : `#A300D9`

**→ Noter le chemin de l'image générée** (ex: `C:/Users/jojo-/Documents/nano-banana-images/edited-2025-xx-xx.png`)

---

**PHASE 2 : Ajouter le titre via script Sharp**

> **⚠️ ORTHOGRAPHE CRITIQUE :** Vérifier l'orthographe du titre AVANT d'exécuter le script. Relire plusieurs fois !

**Titre :** 5-8 mots qui résument l'article de manière accrocheuse.

```bash
node src/scripts/generate-blog-cover.js "[CHEMIN_BLOB]" "[TITRE]" "public/images/blog/[SLUG]-cover.png"
```

**Exemple concret :**
```bash
node src/scripts/generate-blog-cover.js "C:/Users/jojo-/Documents/nano-banana-images/edited-2025-12-16.png" "Valider son idée business sans Sàrl" "public/images/blog/valide-idee-business-suisse-cover.png"
```

Le script génère une image 1920x1080 (16:9) avec :
- Fond : #fcfbfc (adapté au blob)
- Blob à droite (~40%)
- Titre à gauche (fontSize 120, padding 120)

---

**PHASE 3 : Convertir en WebP et renommer**

```bash
# Convertir en WebP (qualité 80)
npx @aspect-build/squoosh-cli --webp '{"quality":80}' -d public/images/blog/ public/images/blog/[SLUG]-cover.png

# Renommer en [slug].webp
mv public/images/blog/[SLUG]-cover.webp public/images/blog/[SLUG].webp

# Supprimer le PNG source
rm public/images/blog/[SLUG]-cover.png
```

**Exemple concret :**
```bash
npx @aspect-build/squoosh-cli --webp '{"quality":80}' -d public/images/blog/ public/images/blog/valide-idee-business-suisse-cover.png
mv public/images/blog/valide-idee-business-suisse-cover.webp public/images/blog/valide-idee-business-suisse.webp
rm public/images/blog/valide-idee-business-suisse-cover.png
```

---

#### Étape 2b: Génération des images in-article (max 2-3)

**IMPORTANT** : Utiliser `edit_image` avec le template, PAS `generate_image`.

Pour chaque section H2 majeure nécessitant une illustration :

1. **Générer la pose** adaptée au contenu de la section (même format que pour la cover)

2. **Utiliser `edit_image`** avec le template de référence :

```
mcp__nano-banana__edit_image(
  imagePath: "[CHEMIN_PROJET]/src/assets/template-blog-cover.png",
  prompt: "Minimalist doodle illustration, square format, flat design, white background.

A cute simple blob/ghost character with round glasses, drawn with clean [COULEUR] fill and thin black outlines. The blob has a friendly expression with tiny dot eyes behind round glasses. Style: hand-drawn doodle, childlike simplicity, Korean cute character aesthetic.

The blob is [POSE ADAPTÉE À LA SECTION].

Character centered on white background. No text, no decorations. Simple, minimal, memorable."
)
```

3. **Convertir en WebP** :
```bash
npx sharp-cli --input [OUTPUT_PATH] --output public/images/blog/[SLUG]-[section].webp --format webp --quality 80
```

**Alternance des couleurs** (pour créer de la variété visuelle) :
- Cover : Turquoise #00D9A3
- Image in-article 1 : Magenta #A300D9
- Image in-article 2 : Turquoise #00D9A3
- (alterner si plus d'images)

**Exemples de poses pour sections courantes** :

| Section | Pose suggérée |
|---------|---------------|
| Facteurs/critères | "surrounded by floating icons, looking thoughtful" |
| Mobile/responsive | "holding a smartphone, looking proud" |
| Processus/étapes | "climbing small steps, looking determined" |
| Comparaison | "holding a balance scale, looking curious" |
| Warning/attention | "holding a small warning sign, looking concerned" |

---

#### Étape 3: Formatage de l'article

Appliquer les conventions de `docs/guidelines.md` :

1. **Frontmatter complet** :
```yaml
---
title: "[Titre accrocheur]"
description: "[Meta description SEO - MAX 160 caractères]"
pubDate: [date du jour format YYYY-MM-DD]
image:
  url: "/images/blog/[slug].webp"
  alt: "[Description de l'image pour accessibilité]"
category: "[tech|creatif|perso]"
tags: ["tag1", "tag2", "tag3"]
featured: false
draft: true
readingTime: [estimation en minutes]
---
```

2. **Structure markdown** :
   - Introduction sans titre (accroche chiffrée ou question)
   - Séparateurs `---` entre chaque grande section
   - Hiérarchie : ## H2 pour sections principales, ### H3 pour sous-sections
   - Mise en **gras** des points clés
   - Tableaux pour les comparatifs
   - Images in-article aux endroits pertinents : `![Alt text](/images/blog/[nom].webp)`

3. **Section finale obligatoire** :
```markdown
---

## Ce qu'il faut retenir

![Ce qu'il faut retenir - Points clés à mémoriser](/images/blog/resume-end-article.webp)

1. Point clé 1
2. Point clé 2
3. Point clé 3

---

**[CTA accrocheur avec question]**

[Texte de transition]

[Réserver un appel →](https://cal.com/jonathan-vouilloz/appel-de-bienvenue)

Ou découvrir les services :

[Voir les services →](/services)
```

#### Étape 4: Vérification SEO

Vérifier automatiquement (inspiré de `.claude/commands/seo.md`) :

- [ ] **Title** : 50-60 caractères, accrocheur
- [ ] **Description** : 150-160 caractères, avec mot-clé principal
- [ ] **Image alt** : Descriptif et incluant le mot-clé
- [ ] **Hiérarchie headings** : H2 > H3, pas de saut
- [ ] **Tags** : 3-5 tags pertinents, kebab-case
- [ ] **Category** : tech/creatif/perso appropriée
- [ ] **Liens internes** : Au moins 1 lien vers /services
- [ ] **CTA** : Présent en fin d'article

#### Étape 5: Création et rapport final

1. **Créer** le fichier `src/content/blog/[slug].md`
2. **Vérifier** que toutes les images existent dans `public/images/blog/`
3. **Afficher le rapport** :

```
✅ Article créé : src/content/blog/[slug].md

📸 Images générées :
   - /images/blog/[slug].webp (hero) - XX KB
   - /images/blog/[slug]-section1.webp - XX KB

📊 Score SEO : X/10
   ✓ Title: XX caractères
   ✓ Description: XXX caractères
   ✓ Alt text présent
   [Issues si présentes]

💡 Suggestions :
   - [Améliorations optionnelles]

🔗 Preview : npm run dev → localhost:4321/blog/[slug]
```

---

### Si l'argument est "format" ou un chemin de fichier brut :

1. **Lire** le fichier source (contenu brut sans frontmatter)
2. **Lire** `docs/guidelines.md` section "Blog posts (Markdown)" pour les conventions
3. **Formater** l'article avec :
   - Frontmatter complet (title, description ≤160 chars, pubDate, image, category, tags, featured, draft, readingTime)
   - Hiérarchie Markdown (## H2, ### H3)
   - Séparateurs `---` entre sections
   - Mise en gras des points clés
   - Tableaux pour les comparatifs
   - Image `resume-end-article.webp` après "## Ce qu'il faut retenir" si présent
   - CTAs de fin avec liens (cal.com + /services)

---

### Si l'argument est "check" :

1. **Lire** tous les articles dans `src/content/blog/*.md`
2. **Vérifier** pour chaque article :
   - [ ] Frontmatter complet (tous les champs requis)
   - [ ] Description ≤ 160 caractères
   - [ ] Image principale existe dans `public/images/blog/`
   - [ ] Section "Ce qu'il faut retenir" a l'image `resume-end-article.webp`
   - [ ] CTAs présents en fin d'article
   - [ ] Séparateurs `---` entre sections
3. **Rapporter** les problèmes trouvés

---

### Si l'argument est "new [slug]" :

1. **Créer** un fichier `src/content/blog/[slug].md` avec le template :

```markdown
---
title: ""
description: ""
pubDate: [date du jour]
image:
  url: "/images/blog/[slug].webp"
  alt: ""
category: "tech"
tags: []
featured: false
draft: true
readingTime: 5
---

[Introduction - accroche]

---

## [Section 1]

---

## [Section 2]

---

## Ce qu'il faut retenir

![Ce qu'il faut retenir - Points clés à mémoriser](/images/blog/resume-end-article.webp)

1. Point clé 1
2. Point clé 2
3. Point clé 3

---

**[CTA question]**

[Texte]

[Réserver un appel →](https://cal.com/jonathan-vouilloz/appel-de-bienvenue)

Ou découvrir les services :

[Voir les services →](/services)
```

## Arguments

| Commande | Description |
|----------|-------------|
| `/blog generate [fichier.md]` | **Workflow complet** : analyse, génère images, formate, optimise SEO |
| `/blog format` | Formate un article existant (demande le fichier) |
| `/blog check` | Vérifie tous les articles du blog |
| `/blog new [slug]` | Crée un template vide avec le slug donné |

### Exemples

```bash
# Workflow complet avec génération d'images
/blog generate draft-nouvel-article.md

# Formater un article existant
/blog format

# Vérifier tous les articles
/blog check

# Créer un nouveau template vide
/blog new mon-super-article
```
