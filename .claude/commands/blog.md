# Blog Article Helper

Aide à formater et vérifier les articles de blog pour Jon Labs.

## Instructions

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

- `/blog format` - Demande quel article formater
- `/blog check` - Vérifie tous les articles
- `/blog new mon-article` - Crée un nouvel article avec le slug "mon-article"
