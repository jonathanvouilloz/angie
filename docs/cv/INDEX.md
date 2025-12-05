# 📁 Jon Labs - CV Page : Index des Fichiers

```
📦 Livraison Page CV Jon Labs
│
├── 📄 00-LIVRABLE-RECAPITULATIF.md ⭐ COMMENCE ICI
│   └── Vue d'ensemble complète du projet
│       • Résumé de ce qui a été livré
│       • To-do list priorisée
│       • Conseils d'utilisation
│       • Métriques à tracker
│
├── 🎨 cv.astro
│   └── Page web complète ready-to-use
│       • ~800 lignes de code
│       • Design Jon Labs (brutaliste)
│       • Responsive mobile-first
│       • À copier dans src/pages/
│
├── 📝 content-cv.md
│   └── Documentation du contenu
│       • Tout le texte structuré
│       • Référence pour maintenance
│       • Backup du contenu
│
├── 🔧 cv-integration-guide.md
│   └── Guide technique d'installation
│       • Étapes d'intégration
│       • Personnalisation
│       • Troubleshooting
│       • Checklist de lancement
│
└── 📄 cv-jonathan-vouilloz-template.md
    └── Template pour générer le PDF
        • Version markdown optimisée impression
        • Structure 2 pages A4
        • À convertir en PDF
```

---

## 🎯 Par où commencer ?

### 1️⃣ LIS EN PREMIER
👉 **00-LIVRABLE-RECAPITULATIF.md**
- Comprendre ce qui a été fait
- Voir le plan d'action
- Estimer le temps nécessaire

**Temps de lecture : 5-10 min**

---

### 2️⃣ INSTALLE LA PAGE
👉 **cv.astro** + **cv-integration-guide.md**
- Copier le fichier dans ton projet
- Suivre le guide d'intégration
- Tester en local

**Temps d'installation : 15-30 min**

---

### 3️⃣ GÉNÈRE LE PDF
👉 **cv-jonathan-vouilloz-template.md**
- Convertir en PDF
- Placer dans /public/
- Tester le download

**Temps de génération : 10-15 min**

---

### 4️⃣ PERSONNALISE
👉 **cv.astro** (lignes à modifier)
- Liens sociaux (obligatoire)
- Photo (optionnel)
- Détails projets (optionnel)

**Temps de personnalisation : 5-10 min**

---

### 5️⃣ TESTE & PUBLIE
👉 **cv-integration-guide.md** (checklist)
- Tests responsive
- Vérification liens
- Deploy production

**Temps de tests : 15-20 min**

---

## 📊 Structure Visuelle de la Page CV

```
┌─────────────────────────────────────┐
│         HERO SECTION                │
│  • Nom + Titre + Diplôme           │
│  • Badges (Disponible, Location)   │
│  • Bouton Download PDF             │
│  • Liens sociaux                   │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│         PROFIL                      │
│  • 2 paragraphes synthèse          │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│         FORMATION                   │
│  • Bachelor HES (2017-2020)        │
│  • CFC ESIG (2015-2017)            │
│  • Formations continues            │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│    PARCOURS PROFESSIONNEL           │
│  📍 Timeline verticale              │
│  • Jon Labs (2024-présent)         │
│  • Ludothèque (2024-présent)       │
│  • Kusari (2021-2024)              │
│  • Barber Concept (2020-présent)   │
│  • CPV Moniteur (2015-présent)     │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│      PROJETS MARQUANTS              │
│  🎯 Grid 2 colonnes                 │
│  • App Gestion Camps               │
│  • Barber Concept                  │
│  • Le Matin Dimanche               │
│  • SEO Juriste                     │
│  • Club Badminton                  │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│      STACK & COMPÉTENCES            │
│  💻 8 catégories                    │
│  • Dev Web                         │
│  • Design UI/UX                    │
│  • Backend                         │
│  • Automatisation                  │
│  • Marketing Digital               │
│  • Intelligence Artificielle       │
│  • Blockchain                      │
│  • Outils                          │
│  + Soft Skills                     │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│         LANGUES                     │
│  • Français (langue maternelle)    │
│  • Anglais (technique B1)          │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│      AU-DELÀ DU CODE                │
│  • 🸠Badminton                      │
│  • 📷 Photographie                  │
│  • 🎲 Jeux de Société               │
│  • 💰 Cryptomonnaies                │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│      FOOTER + CTA FINAL             │
│  • Bouton Download PDF             │
│  • Liens contact (4 canaux)        │
│  • CTA "Discuter opportunité"      │
└─────────────────────────────────────┘
```

---

## 🎨 Système de Couleurs Utilisé

```css
/* Palette Lab Scientifique */
--main-bg: #FAFAFA        /* ⬜ Fond pages */
--blue: #00D9A3           /* 🟢 Vert labo - Boutons, badges tech */
--yellow: #00A87D         /* 🟢 Vert foncé - Hover boutons */
--accent: rgba(163,0,217,0.35)  /* 🟣 Magenta 35% - Highlights */
--violet: #A300D9         /* 🟣 Magenta vif - Badges spéciaux */
--text: #0F172A           /* ⬛ Noir charbon - Texte */
```

**Badges par catégorie :**
- 🟢 Vert (`--blue`) → Technos actuelles (Astro, React, etc.)
- 🟢 Vert foncé (`--yellow`) → Marketing (SEO, Copywriting, etc.)
- 🟣 Violet (`--violet`) → IA et projets spéciaux
- ⬜ Gris (`bg-gray-200`) → Technos passées (Blockchain, etc.)

---

## 🗂️ Organisation des Fichiers dans ton Projet

```
ton-projet-jonlabs/
│
├── src/
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       ├── services.astro
│       ├── portfolio.astro
│       ├── blog.astro
│       ├── contact.astro
│       └── cv.astro              ← COPIE ICI
│
└── public/
    └── cv-jonathan-vouilloz.pdf  ← GÉNÈRE ET PLACE ICI
```

---

## ⚡ Résumé Ultra-Rapide

**Fichiers livrés :** 5  
**Temps total installation :** ~1-2h  
**Complexité :** ⭐⭐ (Moyen - plug & play avec quelques ajustements)

**Dépendances :** 
- ✅ Astro (déjà installé)
- ✅ Tailwind CSS (déjà configuré)
- ✅ Remix Icon (déjà via CDN)
- ✅ Variables CSS (déjà définies)

**Aucune installation additionnelle requise !**

---

## 📞 Support

Questions fréquentes :

**Q: Par où commencer ?**  
R: Lis `00-LIVRABLE-RECAPITULATIF.md` en entier (10 min)

**Q: Combien de temps ça prend ?**  
R: 1-2h max pour tout installer et personnaliser

**Q: C'est compatible avec mon site actuel ?**  
R: Oui, 100% compatible avec ton template Astro

**Q: Je dois modifier beaucoup de choses ?**  
R: Minimum : juste les 3 liens sociaux (2 min). Le reste est optionnel.

**Q: Et si j'ai un bug ?**  
R: Suis la section Troubleshooting dans `cv-integration-guide.md`

---

## ✅ Checklist Rapide

Avant de te lancer, assure-toi d'avoir :
- [ ] Accès au code source de ton site
- [ ] Environnement de dev fonctionnel (`npm run dev`)
- [ ] Liens LinkedIn, GitHub, Email à jour
- [ ] 1-2h devant toi pour l'installation

---

**C'est parti ! 🚀**

*Commence par lire `00-LIVRABLE-RECAPITULATIF.md`*
