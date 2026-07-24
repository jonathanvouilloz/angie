---
extends: identity
base_style: photoreal-dslr
typography:
  display: Inter Tight
  body: Inter Tight
photography:
  lighting: "Natural ambient, clean and modern"
  mood: "Professional but approachable, tech-forward"
  composition: "Clean backgrounds, minimal clutter"
negatives:
  - blurry text
  - watermarks
  - stock photo feel
  - corporate clichés
references:
  default_portrait: ../moodboard/refs/portrait-ambient.jpg
---

# Moodboard — Jon Labs

> Extension d'`identity.md`. ADN visuel : style photographique, typographie, negatives.
> `colors` (palette principale) sont dans `identity.md`.
> Les presets et fonts vivent dans `moodboard/` (consommés par scripts Python).
>
> Lu par `/generate-images`, `/generate-cover`, `/open-carrusel`, `/seo-enrich`.

## ADN visuel

Identité visuelle **éditoriale minimaliste warm** : fond clair légèrement warm (jamais blanc pur), sans-serif élégante pas ultra-bold, **un seul accent vert `#00D9A3`** (signal : mot-clé, trait, nœud, CTA), formes arrondies sobres et connecteurs fins. Les visuels mélangent photographie photoréaliste DSLR et compositions templates avec overlay typographique net. Jamais de « AI slop », jamais de surcharge, plus de brutalisme ni de jaune.

Blog covers (depuis le 2026-07-19) : **illustration éditoriale semi-concrète via le skill `visual`** (gpt-image-2) — statue N&B en signature + ancre concrète qui nomme le sujet + accent mono-teal `#00D9A3`, **sans texte, sans logo**, 16:9. Preset `blog-cover-visual` (`source: visual`) dans `presets.yaml` ; `generate-cover` délègue à `/visual` sur cette source. L'ancien pipeline template (`bg-template.png` + texte overlay) est abandonné (asset supprimé, commit 33bb825). LinkedIn covers : illustration cartoon/absurde via Gemini, format carré 1:1.

> Le volet visuel canonique complet (palette verrouillée, éléments signature, formats) vit dans `bip-jon/docs/moodboard.md`. Ce fichier n'est que la config de génération d'images de la surface jonlabs.ch.
