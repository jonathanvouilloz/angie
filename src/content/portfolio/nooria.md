---
title: "Nooria"
description: "Application mobile de conversations parent-enfant. Du PRD à l'App Store en deux semaines, en local-first et sans backend."
date: 2026-09-02
draft: false
featured: true

entryType: "side-project"
status: "live"

project:
  duration: "≈ 2 semaines"
  period: "Août - Septembre 2026"
  platform: "Expo (React Native) + RevenueCat"
  category: "application"

heroImage:
  url: "/images/portfolio/nooria/hero.webp"
  alt: "Page d'accueil de Nooria : des conversations qui font grandir la réflexion de votre enfant"

tags:
  - "Expo"
  - "React Native"
  - "TypeScript"
  - "RevenueCat"
  - "App Store"
  - "Side-project"

liveUrl: "https://apps.apple.com/ch/app/nooria-questions-en-famille/id6804141241"

results:
  - label: "Du PRD au live"
    value: "≈ 2 sem."
    detail: "20 août : cadrage. 2 septembre : disponible sur l'App Store."
    icon: "ri-rocket-line"
  - label: "Missions publiées"
    value: "36"
    detail: "3 îles de 12 situations illustrées."
    icon: "ri-compass-3-line"
  - label: "Réserve éditoriale"
    value: "214"
    detail: "21 îles écrites, en attente de relecture et de tests familles."
    icon: "ri-book-2-line"
  - label: "Backend"
    value: "0"
    detail: "Local-first : rien de ce que dit l'enfant ne quitte l'appareil."
    icon: "ri-shield-check-line"

context:
  challenge: "Un parent qui veut aider son enfant à réfléchir bute toujours sur la même chose : quelle question poser, sans orienter la réponse ni transformer le moment en leçon. Les applications éducatives répondent à côté. Elles occupent l'enfant tout seul, le notent et le classent. Le problème n'est pas le contenu, c'est l'amorce de la conversation."
  whyThisProject: "Neuf ans d'encadrement en camps de vacances, un an et demi en ludothèque : la même observation revient. Certains enfants ont une pensée, mais pas encore les mots pour l'expliquer, et l'écart se creuse quand personne ne prend le temps de les écouter. L'arrivée des IA conversationnelles a rendu l'idée urgente : apprendre à formuler sa propre pensée avant d'aller chercher une réponse toute faite."

approach:
  - phase: 1
    title: "Décider ce que l'app fait, et ce qu'elle ne fait pas"
    description: "Trois jours à écrire le produit avant de le coder. À qui il s'adresse, ce qu'il promet, comment se déroule une séance du début à la fin, et tout ce qu'on laisse volontairement de côté. C'est la phase qui économise le plus de temps sur la suite : chaque question tranchée ici est une question qui ne revient pas pendant le développement."
    tasks:
      - "Écrire la promesse en une phrase, testable"
      - "Fixer l'âge visé et assumer qui n'est pas la cible"
      - "Dérouler une séance complète, étape par étape"
      - "Choisir ce qui est gratuit et ce qui est payant"
  - phase: 2
    title: "Concevoir le parcours, écran par écran"
    description: "Traduire le produit écrit en écrans réels. Une carte d'îles pour choisir le thème du jour, une page de situation qui se lit à voix haute, un espace réservé aux parents pour les réglages et l'abonnement, un carnet qui garde la trace de ce que la famille a déjà fait ensemble."
    tasks:
      - "Dessiner la navigation et le fil d'une situation"
      - "Séparer ce qui est pour l'enfant de ce qui est pour le parent"
      - "Choisir la direction visuelle et le style des illustrations"
      - "Vérifier chaque écran sur un vrai téléphone, pas sur maquette"
  - phase: 3
    title: "Développer l'app et produire le contenu en parallèle"
    description: "Une seule base de code pour iOS et Android. Tout reste sur le téléphone : pas de compte à créer, pas de serveur, rien de ce que dit l'enfant ne part ailleurs. Pendant que l'application se stabilise, le contenu s'écrit : 36 situations illustrées prêtes au lancement, et une réserve pour les mois suivants."
    tasks:
      - "Développer l'application iOS et Android"
      - "Écrire et illustrer les 36 situations du lancement"
      - "Relire chaque situation pour qu'elle n'oriente pas la réponse de l'enfant"
      - "Tester le parcours complet sur téléphone avant de figer"
  - phase: 4
    title: "Mettre en ligne sur l'App Store"
    description: "La partie que personne n'anticipe et qui prend toujours plus longtemps que prévu. Créer le compte développeur, monter la fiche produit, produire les captures aux formats imposés, publier les pages légales, brancher les abonnements, puis soumettre. Apple a demandé une correction avant d'accepter, ce qui est courant sur une première publication."
    tasks:
      - "Ouvrir le compte développeur et préparer la fiche produit"
      - "Produire les captures et les textes de présentation"
      - "Mettre en ligne les pages légales et le site de l'app"
      - "Brancher les abonnements, soumettre, corriger, republier"

successFactors:
  - title: "Tout décider avant de coder"
    description: "Le produit était écrit noir sur blanc avant la première ligne de code. Pendant le développement, plus une seule question ouverte."
    icon: "ri-file-list-3-line"
  - title: "Aucune donnée qui sort du téléphone"
    description: "Pas de compte, pas de serveur, pas de suivi. Sur une app destinée à des enfants, le choix technique et le choix éthique se rejoignent."
    icon: "ri-shield-check-line"
  - title: "Un journal des décisions"
    description: "Chaque arbitrage a sa ligne et sa raison. Trois semaines plus tard, on sait encore pourquoi telle option a été écartée."
    icon: "ri-history-line"
  - title: "Le contenu écrit en parallèle"
    description: "250 situations rédigées pendant que l'interface se stabilisait. Le lancement n'a jamais attendu après son contenu."
    icon: "ri-quill-pen-line"

learnings:
  insights:
    - "Le plus long dans une publication, ce n'est pas le développement. C'est tout ce qui l'entoure : la fiche produit, les captures, les pages légales, les abonnements. Autant le préparer pendant que le code avance."
    - "Apple vérifie que ce que vous déclarez correspond à ce que l'app fait vraiment. Une seule case mal cochée suffit à faire repasser un tour complet de validation."
    - "Se passer de serveur ne fait pas qu'un argument de confidentialité. C'est aussi pas de mot de passe à gérer, pas de coût mensuel et pas d'astreinte."
    - "Sur une app portée par du contenu, la technique n'est jamais ce qui prend le plus de temps. Deux semaines pour l'application, et l'écriture reste le vrai travail."
  limitations:
    - "Publiée sur iOS uniquement à ce stade, la version Android reste en test."
    - "Les 21 îles en réserve ne sont pas publiées : elles attendent une relecture et des tests avec de vraies familles."
    - "Aucune donnée d'usage réelle. Ne rien collecter, c'est aussi ne rien mesurer."
    - "Aucune validation par un spécialiste en psychologie de l'enfant à ce jour. Le produit s'appuie sur de l'expérience de terrain et des sources documentaires, pas sur une étude."

resultImages:
  - url: "/images/portfolio/nooria/captures-1.webp"
    alt: "Écran d'accueil Nooria et carnet de bord des missions terminées"
    caption: "Reprise d'aventure et carnet de bord, tels que présentés sur l'App Store."
  - url: "/images/portfolio/nooria/captures-2.webp"
    alt: "Guide de facilitation pour le parent et archipel complet des îles Nooria"
    caption: "Guide de facilitation côté parent, et l'archipel complet des îles."
---

> Une image, une situation, une question. Cinq à dix minutes pour que l'enfant explique ce qu'il pense, et que le parent l'écoute sans corriger.

---

## Le produit

**Nooria** propose aux familles des situations courtes et illustrées qui servent d'amorce à une conversation. L'enfant regarde, se fait une première idée, l'explique. Le parent relance. Il n'y a pas de bonne réponse à trouver et l'application n'évalue rien.

L'expérience est organisée en archipel : chaque île est un thème (les Mystères, le Juste et l'injuste, les Rumeurs et les infos) et contient douze situations qui se suivent. Le parent choisit l'île selon ce dont la famille a besoin aujourd'hui ; la progression à l'intérieur reste linéaire.

Le moment de valeur n'est pas une animation ni une récompense. C'est la phrase que le parent se dit à la fin : « je ne savais pas qu'il voyait les choses comme ça ».

---

## Ce qui a été décidé, et pourquoi

| Décision | Raison |
|---|---|
| **Tout reste sur le téléphone** | La meilleure façon de protéger une donnée d'enfant, c'est de ne jamais la collecter |
| **Aucune IA dans l'application** | Sur un contenu destiné à des enfants, chaque texte est écrit et relu par un humain |
| **Pas de score ni de classement** | Ce qui compte est ce que l'enfant explique, pas une performance à mesurer |
| **« Repère » et non « morale »** | Une morale impose une vérité ; un repère aide à distinguer fait, hypothèse et opinion |
| **5 missions gratuites permanentes** | Le parent doit pouvoir juger la valeur sans compte à rebours |
| **Le parent tient le téléphone** | L'application lance l'échange puis s'efface. Elle n'est pas conçue pour occuper l'enfant seul |

---

## Stack & outils

| Outil | Usage |
|-------|-------|
| **Expo / React Native** | Une seule base de code pour iOS et Android |
| **TypeScript** | Structure du code et du contenu, pour éviter les erreurs silencieuses |
| **Stockage local** | Profil, progression et favoris gardés sur le téléphone, sans compte |
| **Fichiers de contenu versionnés** | Les situations sont du texte relu et suivi, pas des lignes en base |
| **RevenueCat** | Gestion des abonnements hebdomadaire et annuel |
| **EAS Build** | Fabrication des versions iOS et Android et envoi aux stores |
| **Astro + Vercel** | Site public `getnooria.com` et son journal éditorial |
| **Claude Code** | Développement, relecture du contenu, préparation de la mise en ligne |

---

## Ce que la publication a demandé en plus

Une app finie n'est pas une app publiable. Entre les deux, il y a un compte développeur à ouvrir, une fiche produit à écrire, des captures à produire aux formats imposés, des pages légales à mettre en ligne, un questionnaire de confidentialité et un questionnaire d'âge à remplir, et des abonnements à déclarer.

Apple a demandé une correction avant d'accepter la première version. Rien ne concernait le fonctionnement de l'application : uniquement des éléments de la fiche et des déclarations à ajuster. C'est fréquent sur une première publication, et c'est la partie du calendrier qu'on sous-estime toujours.

Le détail complet, étape par étape, est dans l'article : [Sortir une application mobile de zéro à l'App Store](/blog/sortir-application-mobile-app-store).

---

## Télécharger

Nooria est disponible sur l'App Store, en français. Les cinq premières missions sont gratuites.

[Voir Nooria sur l'App Store →](https://apps.apple.com/ch/app/nooria-questions-en-famille/id6804141241)

Un projet mobile en tête ? [Parlons-en →](/contact)
