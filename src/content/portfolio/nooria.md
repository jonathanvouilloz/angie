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
  alt: "Nooria — un parent et son enfant regardent une carte d'archipel"

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
  challenge: "Un parent qui veut aider son enfant à réfléchir bute toujours sur la même chose : quelle question poser, sans orienter la réponse ni transformer le moment en leçon. Les applications éducatives répondent à côté — elles occupent l'enfant seul, le notent, le classent. Le problème n'est pas le contenu, c'est l'amorce de la conversation."
  whyThisProject: "Neuf ans d'encadrement en camps de vacances, un an et demi en ludothèque : la même observation revient, certains enfants ont une pensée mais pas encore les mots pour l'expliquer, et l'écart se creuse quand personne ne prend le temps de les écouter. L'arrivée des IA conversationnelles a rendu l'idée urgente — apprendre à formuler sa propre pensée avant d'aller chercher une réponse toute faite. Nooria est le produit qui en sort."

approach:
  - phase: 1
    title: "Le PRD avant la première ligne de code"
    description: "Trois jours de cadrage écrit avant d'ouvrir l'éditeur : promesse, cible, boucle de mission, modèle économique, ce qui est explicitement hors scope. Le PRD tranche aussi les pièges — pas de score, pas de compétition, pas de génération IA dans le produit, pas de sexe demandé à l'inscription."
    tasks:
      - "Définir la boucle : image, situation, question centrale, relances, repère, prolongement"
      - "Fixer la cible éditoriale 7-11 ans et l'exclure du reste"
      - "Arbitrer le modèle : 5 missions gratuites, annuel mis en avant, pas d'essai limité"
      - "Écrire les décisions dans un journal daté plutôt que dans une conversation"
  - phase: 2
    title: "L'app Expo, local-first"
    description: "Expo SDK 57, Expo Router, TypeScript strict, Zustand et AsyncStorage. Aucun compte, aucun serveur, aucune base distante : le profil, la progression, les favoris et les retours de mission vivent sur l'appareil. C'est le choix produit le plus structurant — il supprime d'un coup la question du traitement de données d'enfants."
    tasks:
      - "Archipel, îles, missions et progression linéaire par île"
      - "Espace parent protégé par une barrière parentale pour achats et liens externes"
      - "Rappels locaux configurables, sans notification distante"
      - "Migrations de stockage versionnées pour ne jamais perdre le profil d'un enfant"
  - phase: 3
    title: "Le contenu, pas la techno"
    description: "36 missions publiées, 214 écrites en réserve, chacune avec son illustration. Chaque mission déclare une famille de raisonnement, une question d'ouverture explicite et des blocs de lecture courts. Un audit automatique de neutralité et de lisibilité tourne sur l'ensemble du corpus — il ne prouve pas la compréhension réelle, mais il attrape les formulations qui orientent la réponse."
    tasks:
      - "Écrire 3 îles complètes de 12 situations pour le lancement"
      - "Séparer la discussion de la clôture pour que le repère n'oriente pas la réponse"
      - "Faire passer les 86 missions du pilote à un audit automatique, 0 drapeau"
      - "Produire les illustrations d'îles et de missions dans un style commun"
  - phase: 4
    title: "Abonnements et soumission Apple"
    description: "RevenueCat avec un entitlement unique et deux périodicités, hebdomadaire et annuelle. Puis la partie que personne ne montre : App Review a rejeté le build 16. Les URL légales sans extension renvoyaient 404 sur Vercel, les deux abonnements n'avaient pas été ajoutés à la soumission, et le questionnaire d'âge déclarait des contrôles parentaux que l'app ne fournit pas."
    tasks:
      - "Configurer l'entitlement et l'offering RevenueCat sur les produits App Store"
      - "Corriger le routage pour servir /support, /privacy-policy et /terms-of-use en 200"
      - "Exposer la licence Apple standard et les CGU au pied du paywall"
      - "Reprendre l'Age Rating, ajouter les abonnements à la soumission, resoumettre"

successFactors:
  - title: "Le PRD a fait gagner deux semaines"
    description: "Chaque décision structurante était prise et écrite avant le code. Le développement est devenu une traduction de specs, pas une suite d'arbitrages."
    icon: "ri-file-list-3-line"
  - title: "Local-first"
    description: "Zéro backend, zéro compte, zéro donnée enfant transmise. Le choix technique et le choix éthique tombent au même endroit."
    icon: "ri-shield-check-line"
  - title: "Un journal de décisions daté"
    description: "Chaque arbitrage a sa ligne, sa raison et son statut. Trois semaines plus tard, on sait pourquoi la limite gratuite est passée de trois à cinq missions."
    icon: "ri-history-line"
  - title: "Le contenu produit avant l'app finie"
    description: "250 situations écrites pendant que l'interface se stabilisait. Le produit n'a jamais attendu son contenu."
    icon: "ri-quill-pen-line"

learnings:
  insights:
    - "App Review ne teste pas ton app, il teste tes liens. Trois URL légales en 404 ont coûté un cycle de review complet — plus long que l'intégration RevenueCat elle-même."
    - "Le questionnaire Age Rating d'Apple a un vocabulaire précis. Une barrière parentale n'est pas un « contrôle parental » au sens Apple : déclarer la mauvaise case fait rejeter le build."
    - "Local-first n'est pas qu'une position privacy. Pas de backend, c'est pas d'auth, pas de RGPD sur données d'enfants, pas de coût récurrent et pas d'astreinte."
    - "Sur un produit éditorial, la techno n'est jamais le chemin critique. Deux semaines pour l'app, et le corpus reste le vrai travail."
  limitations:
    - "Publié sur iOS uniquement à ce stade ; le build Android reste en pilote."
    - "Les 21 îles en réserve ne sont pas publiées : elles attendent une seconde lecture éditoriale et des tests avec des familles."
    - "Aucune donnée d'usage réelle — le local-first supprime aussi les analytics produit."
    - "Aucune validation par un spécialiste en psychologie de l'enfant à ce jour. Le produit s'appuie sur de l'expérience de terrain et des sources documentaires, pas sur une étude."

resultImages:
  - url: "/images/portfolio/nooria/captures-1.webp"
    alt: "Écran d'accueil Nooria et vue de l'archipel des îles"
    caption: "Reprise d'aventure et archipel : le parent choisit le thème du jour."
  - url: "/images/portfolio/nooria/captures-2.webp"
    alt: "Carnet de bord Nooria et guide parental"
    caption: "Carnet de bord des missions terminées et guide de facilitation pour le parent."
---

> Une image, une situation, une question. Cinq à dix minutes pour que l'enfant explique ce qu'il pense — et que le parent l'écoute sans corriger.

---

## Le produit

**Nooria** propose aux familles des situations courtes et illustrées qui servent d'amorce à une conversation. L'enfant regarde, se fait une première idée, l'explique. Le parent relance. Il n'y a pas de bonne réponse à trouver et l'application n'évalue rien.

L'expérience est organisée en archipel : chaque île est un thème — les Mystères, le Juste et l'injuste, les Rumeurs et les infos — et chaque île contient douze situations qui se suivent. Le parent choisit l'île selon ce dont la famille a besoin aujourd'hui ; la progression à l'intérieur reste linéaire.

Le moment de valeur n'est pas une animation ni une récompense. C'est la phrase que le parent se dit à la fin : « je ne savais pas qu'il voyait les choses comme ça ».

---

## Ce qui a été décidé, et pourquoi

| Décision | Raison |
|---|---|
| **Local-first, sans compte** | Aucune donnée d'enfant à protéger si aucune donnée d'enfant ne quitte l'appareil |
| **Aucune IA dans le produit** | Sur un corpus destiné à des enfants, la traçabilité éditoriale prime sur le volume |
| **Pas de score ni de classement** | La valeur est dans le raisonnement formulé, pas dans une performance mesurée |
| **« Repère » et non « morale »** | Une morale impose une vérité ; un repère aide à distinguer fait, hypothèse et opinion |
| **5 missions gratuites permanentes** | Le parent doit pouvoir juger la valeur sans compte à rebours |
| **Le parent tient le téléphone** | L'application lance l'échange puis s'efface — elle n'est pas conçue pour occuper l'enfant seul |

---

## Stack & outils

| Outil | Usage |
|-------|-------|
| **Expo SDK 57 + Expo Router** | Application mobile iOS et Android, une seule base de code |
| **TypeScript strict** | Contrats de contenu et état typés de bout en bout |
| **Zustand + AsyncStorage** | État applicatif et stockage local versionné avec migrations |
| **JSON + schémas** | Le corpus éditorial est du contenu versionné, pas des lignes en base |
| **RevenueCat** | Abonnements hebdomadaire et annuel, un entitlement unique |
| **EAS Build** | Builds natifs et soumission TestFlight puis App Store |
| **Astro + Vercel** | Site d'acquisition `getnooria.com` et son journal éditorial |
| **Claude Code** | Développement, audit du corpus, préparation de la soumission |

---

## Le rejet Apple, en détail

Le build 16 a été refusé le 28 août. Trois motifs, aucun lié au code de l'application :

1. **Support URL non fonctionnel.** Les URL sans extension utilisées dans l'app et dans App Store Connect renvoyaient `404` sur l'hébergement, alors que les variantes `.html` répondaient en `200`. Correctif : routage en URL propres, `/support`, `/privacy-policy` et `/terms-of-use` canoniques partout.
2. **Abonnements absents de la soumission.** Les produits existaient dans RevenueCat et dans App Store Connect, mais n'avaient jamais été ajoutés à la soumission elle-même. Ils sont invisibles pour le reviewer tant qu'on n'a pas cliqué `Add for Review`.
3. **Age Rating incorrect.** Le questionnaire attribuait des *In-App Controls* à la barrière parentale. Au sens d'Apple, une parental gate n'est ni un outil de contrôle parental ni une vérification d'âge. Réponses corrigées sur `None`.

Le détail complet du parcours, du cadrage à la publication, est dans l'article : [Sortir une application mobile de zéro à l'App Store](/blog/sortir-application-mobile-app-store).

---

## Télécharger

Nooria est disponible sur l'App Store, en français. Les cinq premières missions sont gratuites.

[Voir Nooria sur l'App Store →](https://apps.apple.com/ch/app/nooria-questions-en-famille/id6804141241)

Un projet mobile en tête ? [Parlons-en →](/contact)
