# Plan: Page Services Jon Labs - Suivi d'implémentation

## Vue d'ensemble

Page Services immersive avec:
1. **Hero interactif** - Caméléon mascotte + 8 bulles constellation
2. **Modal conversationnel** - Discussions Jon ↔ Client animées
3. **Section accordéons** - Détails par catégorie de service

---

## Checklist d'implémentation

### Phase 1: Données
- [ ] `src/data/scenarios.ts` - 8 scénarios avec conversations complètes

### Phase 2: Composants de base
- [ ] `src/components/services/Character.astro` - Caméléon SVG + eye tracking
- [ ] `src/components/services/ScenarioBubble.astro` - Bulles cliquables
- [ ] `src/components/services/Message.astro` - Bulles de chat (client/jon)

### Phase 3: Modal
- [ ] `src/components/services/ConversationModal.astro` - Modal + messages séquentiels

### Phase 4: Hero
- [ ] `src/components/services/HeroScenarios.astro` - Layout constellation + connexions

### Phase 5: Services détaillés
- [ ] `src/components/services/ServiceAccordion.astro` - Accordéons
- [ ] `src/components/services/ServicesCTA.astro` - CTA final

### Phase 6: Page
- [ ] `src/pages/services.astro` - Assemblage final

### Phase 7: Polish
- [ ] Responsive mobile
- [ ] Accessibilité clavier
- [ ] Tests visuels

---

## Architecture fichiers

```
src/
├── data/
│   └── scenarios.ts              # Données 8 scénarios
├── components/
│   └── services/
│       ├── Character.astro       # Caméléon mascotte
│       ├── ScenarioBubble.astro  # Bulles problématiques
│       ├── Message.astro         # Bulles de message
│       ├── ConversationModal.astro
│       ├── HeroScenarios.astro   # Section hero constellation
│       ├── ServiceAccordion.astro
│       └── ServicesCTA.astro
└── pages/
    └── services.astro            # Page principale
```

---

## Design decisions

### Caméléon mascotte
- Corps ovale blanc, bordure noire 3px
- 2 yeux sur "tiges" (style caméléon) avec mouvement indépendant
- Queue spirale caractéristique
- Change de couleur au survol des bulles (par catégorie)

### Disposition constellation
- Bulles positionnées de façon asymétrique mais équilibrée
- Lignes de connexion SVG entre caméléon et bulles
- Animation des lignes au hover

### Couleurs par service
- Dev Web: teinte bleue douce
- Automatisation: teinte verte douce
- Applications: teinte violette douce

---

## Mapping scénarios → services

| Scénario | Emoji | Service |
|----------|-------|---------|
| cash-flow | 💸 | Automatisation |
| tools-sync | 🔗 | Automatisation |
| time-lack | ⏰ | Automatisation |
| email-fails | 📧 | Automatisation |
| data-scattered | 📊 | Applications |
| launch-fast | 🚀 | Applications + Dev Web |
| idea-validation | ❓ | Applications |
| website-old | 🎨 | Dev Web |

---

## Animations clés

1. **Yeux caméléon**: suivent souris indépendamment
2. **Messages modal**: apparaissent séquentiellement (800-1200ms)
3. **Bulles hover**: scale 1.05 + shadow augmente
4. **Lignes connexion**: opacity + stroke-width au hover
5. **Modal**: scale 0.95→1 + fade in
6. **Accordéons**: max-height transition + icon rotate

---

## Notes techniques

- Patterns à réutiliser: ChatAnimation.astro, Modal.astro, ContactFAQ.astro
- Mobile: pas de lignes connexion, grid 2 colonnes pour bulles
- Accessibilité: focus trap modal, keyboard nav, aria-expanded accordéons
