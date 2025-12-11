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

#### Étape 2: Génération d'images via nano-banana MCP

**Lire** `docs/generateImageForBlog.md` pour le guide de style visuel complet.

**Image hero (principale)** - Utiliser `mcp__nano-banana__generate_image` :

```
Style: Hand-drawn sketchnote illustration, white background
Colors: Cyan (#00D9D9), magenta (#FF00FF), black only
Layout: [TYPE selon analyse - VS/checklist/process]

Content:
- Main title in ALL CAPS: "[TITRE]", with cyan and magenta double underlines
- [Description des éléments visuels selon le type]
- Decorative elements: stars and zigzags in corners (cyan and magenta)

Characters: Simple stick figures with emotions (happy face for solutions, sad for problems)
Icons: [Icônes pertinentes: phone, calendar, money bag, checkmarks, etc.]
Style: Bold black outlines (2-3px), flat colors, slightly wobbly hand-drawn lines, brutalist offset shadows (4px 4px black)

Annotations: Small handwritten labels with arrows pointing to key elements
```

**Types de layouts selon l'article :**

| Type | Layout | Éléments |
|------|--------|----------|
| Comparaison (VS) | Split vertical avec "VS" au centre | Gauche: problème (☹️), Droite: solution (😊) |
| Checklist | 3 colonnes avec icônes | Points clés avec emoji/icône + texte court |
| Processus | Flèches entre étapes | Numéros dans cercles colorés |

**Images in-article** (max 2-3) :
- Pour chaque section H2 majeure, évaluer si une image contextuelle aide
- Utiliser le même style sketchnote
- Adapter le contenu à la section spécifique

#### Étape 3: Conversion WebP via Squoosh CLI

Après génération de chaque image :

```bash
npx @aspect-build/squoosh-cli --webp '{"quality":80}' -d public/images/blog/ [chemin-image.png]
```

- Qualité : 80 (bon compromis taille/qualité)
- Destination : `public/images/blog/`
- Renommer le fichier WebP selon la convention : `[slug].webp` pour l'image hero
- Supprimer le fichier PNG source après conversion réussie

#### Étape 4: Formatage de l'article

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

#### Étape 5: Vérification SEO

Vérifier automatiquement (inspiré de `.claude/commands/seo.md`) :

- [ ] **Title** : 50-60 caractères, accrocheur
- [ ] **Description** : 150-160 caractères, avec mot-clé principal
- [ ] **Image alt** : Descriptif et incluant le mot-clé
- [ ] **Hiérarchie headings** : H2 > H3, pas de saut
- [ ] **Tags** : 3-5 tags pertinents, kebab-case
- [ ] **Category** : tech/creatif/perso appropriée
- [ ] **Liens internes** : Au moins 1 lien vers /services
- [ ] **CTA** : Présent en fin d'article

#### Étape 6: Création et rapport final

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
