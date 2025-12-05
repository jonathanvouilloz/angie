# Jon Labs - Roadmap

## Vue d'ensemble

**Objectif** : Lancer un MVP fonctionnel et itérer continuellement.
**Philosophie** : "Fait > Parfait" - Lancer vite, améliorer constamment.

---

## Phase 1 : Setup & Configuration

**Statut** : ✅ Terminé

### Tâches

- [x] Fork du repo template Angie
- [x] Achat du domaine jonlabs.ch
- [x] Configuration locale du projet
  - [x] Cloner le repo
  - [x] `npm install`
  - [x] `npm run dev` - vérifier que tout fonctionne
- [x] Analyse de la structure du template
- [x] Création de la documentation projet
  - [x] context.md
  - [x] roadmap.md
  - [x] guidelines.md
  - [x] content.md
  - [x] styleguide.md
- [ ] Configuration du déploiement
  - [ ] Créer compte Vercel/Netlify
  - [ ] Connecter le repo GitHub
  - [ ] Configurer le domaine jonlabs.ch
- [ ] Installation Analytics (Google Analytics ou Plausible)

### Livrables

- ✅ Environnement de développement fonctionnel
- ✅ Site accessible en local sur `localhost:4321`
- ✅ Documentation projet complète
- ⏳ Pipeline CI/CD configuré

---

## Phase 2 : Homepage

**Statut** : ✅ Terminé

### Tâches

- [x] **Hero Section**
  - [x] Remplacer le contenu texte (titre accrocheur + sous-titre)
  - [x] Intégrer photo de Jon (`jonathan-vouilloz.jpg`)
  - [x] Adapter les CTAs (primaire + ghost secondary avec hover violet)
  - [x] Éléments graphiques (SVGs, underline stylo `arrow-3.svg`)
  - [x] Badge "Disponible" repositionné sur la photo (incliné)
  - [x] Badge location avec violet clair (#DCA3EF)
- [x] **Section Clients Banner** (ajoutée)
  - [x] Banner minimaliste "Ils m'ont fait confiance"
- [x] **Section Services** (3 cartes)
  - [x] Développement Web
  - [x] Automatisation & Processus
  - [x] Applications Sur-Mesure
  - [x] Alignement "En savoir plus" en bas des cartes
- [x] **Section Portfolio Highlight** (3 projets vedettes)
  - [x] Cartes avec placeholders (à remplacer par vrais projets)
  - [x] Design brutaliste avec hover effects
- [x] **Section Lab** (Bento grid - atmosphère Blueprint)
  - [x] App Gestion Camps (carte large)
  - [x] Jeux de Société
  - [x] Photographie
  - [x] Badminton
  - [x] Blog
  - [x] Font custom Komigo3D pour titre "Le Lab"
  - [x] Fond sombre avec grille technique cyan
- [x] **Section About condensée**
  - [x] Citation + texte de présentation
  - [x] CTA vers page About complète
- [x] **Section TechStack** (marquee animé)
  - [x] Logos technologies avec défilement GSAP
- [x] **Footer**
  - [x] Liens sociaux (LinkedIn, GitHub, Email)
  - [x] Mentions légales

### Livrables

- ✅ Homepage complète et fonctionnelle
- ✅ Responsive (mobile/tablet/desktop)
- ✅ Tous les liens internes fonctionnels
- ✅ Typographie ajustée (font-normal/medium, tracking-tight)

---

## Phase 3 : Pages Services & Portfolio

**Statut** : À faire

### Tâches

- [ ] **Page Services** (`/services`)
  - [ ] Hero/Intro
  - [ ] Section Développement Web détaillée
  - [ ] Section Automatisation détaillée
  - [ ] Section Applications Sur-Mesure détaillée
  - [ ] Badges technologies pour chaque service
  - [ ] CTAs vers contact
- [ ] **Page Portfolio** (`/portfolio`)
  - [ ] Hero
  - [ ] Filtres par catégorie (optionnel)
  - [ ] Grid de projets
  - [ ] Cartes projet avec screenshots, descriptions, technos
  - [ ] CTA final

### Livrables

- 2 nouvelles pages complètes
- Navigation mise à jour
- Liens inter-pages fonctionnels

---

## Phase 4 : Pages About, Lab, Contact

**Statut** : À faire

### Tâches

- [ ] **Page About** (`/about`)
  - [ ] Hero
  - [ ] Section "Qui suis-je ?" + photo
  - [ ] Section Parcours (timeline optionnelle)
  - [ ] Section Compétences (badges visuels)
  - [ ] Section Philosophie
  - [ ] Section "Au-delà du code"
  - [ ] CTA contact
- [ ] **Page Lab** (`/lab`)
  - [ ] Hero
  - [ ] Section Projets en cours
  - [ ] Section Jeux de Société
  - [ ] Section Photographie + mini-galerie
  - [ ] Section Badminton
  - [ ] Section Blog & Réflexions
  - [ ] Section Idées en vrac
- [ ] **Page Contact** (`/contact`)
  - [ ] Hero
  - [ ] Formulaire de contact
  - [ ] Infos directes (email, LinkedIn, GitHub)
  - [ ] Section FAQ
  - [ ] CTA alternatif (LinkedIn)

### Livrables

- 3 nouvelles pages complètes
- Formulaire de contact fonctionnel
- Galerie photo intégrée

---

## Phase 5 : Blog

**Statut** : À faire

### Tâches

- [ ] **Customisation template blog existant**
  - [ ] Adapter le design à l'identité Jon Labs
  - [ ] Mettre à jour les catégories
- [ ] **Création de contenu**
  - [ ] Importer articles existants (crypto, jeux)
  - [ ] Rédiger 2-3 nouveaux articles
  - [ ] Définir les catégories finales
- [ ] **Fonctionnalités**
  - [ ] Filtres par catégorie
  - [ ] Page article individuelle
  - [ ] Partage social (optionnel)

### Livrables

- Blog fonctionnel avec 3-5 articles
- Système de catégories
- Design cohérent avec le reste du site

---

## Phase 6 : Polish & Launch

**Statut** : À faire

### Tâches

- [ ] **Responsive**
  - [ ] Test sur mobile (iOS, Android)
  - [ ] Test sur tablet
  - [ ] Ajustements nécessaires
- [ ] **SEO**
  - [ ] Meta descriptions pour chaque page
  - [ ] Open Graph tags
  - [ ] Sitemap.xml
  - [ ] robots.txt
- [ ] **Performance**
  - [ ] Lighthouse audit
  - [ ] Optimisation images
  - [ ] Lazy loading
- [ ] **Tests**
  - [ ] Navigation complète
  - [ ] Tous les liens
  - [ ] Formulaire de contact
  - [ ] Affichage sur différents navigateurs
- [ ] **Launch**
  - [ ] Dernière revue
  - [ ] Déploiement production
  - [ ] Vérification domaine jonlabs.ch

### Livrables

- Site 100% fonctionnel
- Score Lighthouse > 90
- Site live sur jonlabs.ch

---

## Phase 7 : Post-Launch

**Statut** : À planifier

### Semaines 1-2

- [ ] Annonce LinkedIn
- [ ] Partage dans le réseau
- [ ] Collecte de feedback
- [ ] Corrections bugs éventuels

### Mois 1-2

- [ ] Ajouts basés sur feedback
- [ ] Nouveaux articles blog
- [ ] Pages SEO détaillées (optionnel)
- [ ] Case studies projets

### Mois 3-6

- [ ] Témoignages clients
- [ ] Newsletter (optionnel)
- [ ] Multilingue FR/EN (optionnel)
- [ ] CMS headless (si nécessaire)

---

## Métriques de Succès

### Objectifs 3 mois post-launch

| Métrique | Objectif |
|----------|----------|
| Visiteurs uniques/mois | 100+ |
| Demandes de contact qualifiées | 5-10 |
| Position Google "Jon Labs" | Page 1 |
| Position Google "[service] Genève" | Page 1-2 |
| Score Lighthouse | > 90 |

### KPIs à tracker

- Trafic site (Analytics)
- Parcours utilisateur (Homepage > Services > Contact)
- Taux de conversion (formulaires remplis)
- Sources de trafic
- Temps passé sur site
- Bounce rate

---

## Notes

### Pièges à éviter

- Commencer à coder sans contenu finalisé
- Over-designer au détriment du lancement
- Attendre d'avoir 20 projets parfaits
- Négliger le responsive/mobile
- Oublier le SEO de base

### Mantras

- "Fait > Parfait"
- "Contenu first, design after"
- "Launch fast, iterate often"
- "Authentique > Générique"
