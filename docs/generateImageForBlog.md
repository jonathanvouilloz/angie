# Guideline de Style Visuel pour Images d'Articles Jon Labs

## Workflow en 3 Phases

Les covers de blog sont generees en 3 etapes pour garantir une orthographe parfaite :

```
┌─────────────────────────────────────────────────────────────┐
│  PHASE 1 : nano-banana genere le blob SEUL (sans texte)    │
│     → Utilise src/assets/template-blog-cover.png           │
│     → Output: personnage blob sur fond #fcfbfc             │
├─────────────────────────────────────────────────────────────┤
│  PHASE 2 : Script Sharp ajoute le titre                    │
│     → node src/scripts/generate-blog-cover.js              │
│     → Orthographe garantie (texte programmatique)          │
│     → Output: cover 16:9 en PNG                            │
├─────────────────────────────────────────────────────────────┤
│  PHASE 3 : Convertir en WebP et renommer                   │
│     → npx @aspect-build/squoosh-cli (qualite 80)           │
│     → Renommer en [slug].webp                              │
│     → Supprimer le PNG source                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Style General

**Aesthetic** : Minimaliste doodle / Character illustration

- Style dessine a la main, simple et epure
- Fond blanc propre, sans decorations
- Vibe mignonne et memorable, inspiree de l'esthetique coreenne

## Palette de Couleurs (STRICTE)

- **Turquoise** : `#00D9A3` (couleur principale alternee)
- **Magenta** : `#A300D9` (couleur principale alternee)
- **Noir** : Pour les contours fins et le texte
- **Blanc** : Pour le fond

**Regle** : Alterner turquoise et magenta entre les articles pour varier visuellement.

## Le Personnage Blob/Ghost

### Description
Un petit personnage blob/fantome mignon avec :
- Forme arrondie simple (comme un fantome ou une goutte)
- Lunettes rondes sur le visage
- Petits yeux en points derriere les lunettes
- Expression amicale et sympathique
- Remplissage uni (turquoise ou magenta)
- Contours noirs fins

### Style de dessin
- Hand-drawn doodle
- Simplicite enfantine
- Esthetique "Korean cute character"
- Pas de details complexes

## Layout des Covers

**Format final : 1920x1080 (16:9)**

```
┌────────────────────────────────────────────────┐
│                                                │
│  TITRE DE L'ARTICLE      │     🫧              │
│  EN 5-8 MOTS             │   (blob)            │
│  (70% largeur)           │  (30% largeur)      │
│                                                │
└────────────────────────────────────────────────┘
```

- **Cote gauche (70%)** : Titre en texte noir gras, police Space Grotesk, aligne a gauche
- **Cote droit (30%)** : Personnage blob avec sa pose
- **Fond** : #fcfbfc (blanc casse, adapte au blob genere)

---

## PHASE 1 : Generation du Blob

### Image de Reference
**Fichier template** : `src/assets/template-blog-cover.png`

### Prompt nano-banana (SANS TEXTE)

```
Minimalist doodle illustration, square format, flat design, white background.

A cute simple blob/ghost character with round glasses, drawn with clean [turquoise #00D9A3 OR magenta #A300D9] fill and thin black outlines. The blob has a friendly expression with tiny dot eyes behind round glasses. Style: hand-drawn doodle, childlike simplicity, Korean cute character aesthetic.

The blob is [ACTION/POSE].

Character centered on white background. No text, no decorations. Simple, minimal, memorable.
```

### Generation dynamique de la pose

La pose du personnage est generee dynamiquement en fonction du contenu de l'article, pas d'une liste fixe.

**Workflow :**
1. Extraire le titre de l'article
2. Creer un resume court (1-2 phrases) base sur l'intro et les sections H2
3. Generer une pose unique et descriptive adaptee au contenu

**Format de la pose :**
```
"[ACTION avec objet optionnel], [EXPRESSION]"
```

**Criteres d'une bonne pose :**
- Action simple que le blob peut realiser
- En lien direct avec le sujet de l'article
- Inclut une expression (looking satisfied, excited, curious, determined, proud, etc.)
- Evite les poses trop complexes ou irrealisables

**Exemples de poses generees dynamiquement :**

| Contenu de l'article | Pose generee |
|---------------------|--------------|
| Article sur les tests MVP et validation d'idees | "holding a small rocket, looking excited and ready to launch" |
| Article sur l'automatisation d'un club sportif | "juggling small gears and a calendar, looking proud" |
| Article sur le SEO et la visibilite Google | "peering through a magnifying glass at a star, looking curious" |
| Article sur les rendez-vous manques (no-shows) | "holding a small clock, looking determined" |

---

### Exemples de poses par theme (inspiration)

Ces exemples servent d'inspiration - la pose finale doit etre adaptee au contenu specifique de l'article.

| Theme | Exemples de poses |
|-------|-------------------|
| Automatisation | "holding a small gear", "surrounded by floating cogs", "pressing a big button" |
| Dev web | "hugging a tiny laptop", "typing on a floating keyboard", "holding code brackets" |
| SEO | "holding a magnifying glass", "looking at a shining star", "climbing a chart" |
| MVP/Validation | "building with blocks", "holding a small rocket", "planting a seed" |
| General/reflexion | "sitting peacefully, one arm raised thinking", "reading a tiny book" |
| Probleme resolu | "giving a thumbs up", "celebrating with confetti", "crossing off a checklist" |

---

## PHASE 2 : Ajout du Titre

### Script Sharp

```bash
node src/scripts/generate-blog-cover.js "[CHEMIN_BLOB]" "[TITRE]" "public/images/blog/[SLUG].png"
```

### Exemple

```bash
node src/scripts/generate-blog-cover.js \
  "C:/Users/jojo-/Documents/nano-banana-images/blob.png" \
  "Automatiser son club sportif facilement" \
  "public/images/blog/automatisation-club-sportif.png"
```

### Titre
- **Longueur** : 5 a 8 mots
- **Objectif** : Resumer l'article de maniere accrocheuse
- **Style** : Texte noir, gras, police Space Grotesk

> **⚠️ ORTHOGRAPHE :** Le script garantit l'orthographe, mais verifier quand meme le texte passe en parametre !

---

## PHASE 3 : Conversion WebP et Renommage

### Commandes

```bash
# Convertir en WebP (qualite 80)
npx @aspect-build/squoosh-cli --webp '{"quality":80}' -d public/images/blog/ public/images/blog/[SLUG]-cover.png

# Renommer en [slug].webp
mv public/images/blog/[SLUG]-cover.webp public/images/blog/[SLUG].webp

# Supprimer le PNG source
rm public/images/blog/[SLUG]-cover.png
```

### Exemple concret

```bash
npx @aspect-build/squoosh-cli --webp '{"quality":80}' -d public/images/blog/ public/images/blog/valide-idee-business-suisse-cover.png
mv public/images/blog/valide-idee-business-suisse-cover.webp public/images/blog/valide-idee-business-suisse.webp
rm public/images/blog/valide-idee-business-suisse-cover.png
```

### Resultat attendu
- Fichier final : `public/images/blog/[slug].webp`
- Taille reduite (~60-80% plus leger que PNG)
- Qualite visuelle preservee

---

## Exemples d'Application

### Article "Automatisation Club Sportif"
- **Couleur blob** : Turquoise #00D9A3
- **Pose** : "holding a small gear, looking satisfied"
- **Titre** : "Automatiser son club sportif facilement"

### Article "Creer un Site Web"
- **Couleur blob** : Magenta #A300D9
- **Pose** : "hugging a tiny laptop"
- **Titre** : "Votre site web visible sur Google"

### Article "Valider son Idee Business"
- **Couleur blob** : Turquoise #00D9A3
- **Pose** : "building with small blocks"
- **Titre** : "Valider son idee avant de se lancer"

---

## Images In-Article

Pour les images a l'interieur des articles (max 2-3) :
- Meme style blob/ghost minimaliste
- Generation nano-banana seule (sans texte)
- Adapter la pose du personnage au contexte de la section
- Fond blanc, pas de decorations

---

## Checklist Rapide

- [ ] **Phase 1** : Blob genere sans texte (nano-banana)
- [ ] **Phase 2** : Titre ajoute via script Sharp
- [ ] **Phase 3** : Converti en WebP et renomme
- [ ] PNG source supprime
- [ ] Orthographe du titre verifiee
- [ ] Format 16:9 respecte (1920x1080)
- [ ] Personnage blob avec lunettes rondes
- [ ] Couleur turquoise OU magenta (alterner)
- [ ] Titre 5-8 mots, lisible
- [ ] Fond #fcfbfc (blanc casse)
- [ ] Pose appropriee au sujet
- [ ] Fichier final : `public/images/blog/[slug].webp`
