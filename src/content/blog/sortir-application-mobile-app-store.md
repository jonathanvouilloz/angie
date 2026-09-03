---
title: "Sortir une app mobile de zéro à l'App Store"
h1: "Sortir une application mobile de zéro à l'App Store : le journal complet d'une publication"
description: "Du cadrage à la mise en ligne : ce que j'ai fait, ce qu'Apple a rejeté, et ce que ça coûte vraiment. Retour d'expérience sur une app publiée en 2026."
pubDate: 2026-09-03
author: "Jon"
image:
  url: "/images/blog/sortir-application-mobile-app-store.webp"
  alt: "Illustration éditoriale : une main de statue antique tend un smartphone devant une checklist de soumission et un tampon de validation teal, DA jonlabs"
category: "mobile"
tags: ["application mobile", "app store", "expo", "react native", "revenuecat", "publication"]
featured: false
draft: false
readingTime: 11
faqs:
  - question: "Combien de temps faut-il pour publier une application sur l'App Store ?"
    answer: "La review Apple elle-même prend de 24 heures à 3 jours dans la majorité des cas. Ce qui prend du temps, c'est ce qui vient avant : le compte développeur (99 USD/an), les fiches produit, les captures d'écran aux bons formats, les pages légales en ligne, le questionnaire de confidentialité et le questionnaire d'âge. Compte une semaine de préparation administrative pour une première publication, même si l'app est finie."
  - question: "Quelles sont les causes de rejet les plus fréquentes sur l'App Store ?"
    answer: "Dans mon cas, aucune n'a concerné le code : une URL d'assistance qui renvoyait une erreur 404, des abonnements configurés mais jamais ajoutés à la soumission, et un questionnaire d'âge mal rempli. Les motifs classiques d'Apple sont du même ordre : liens légaux non fonctionnels, achats intégrés non testables par le reviewer, métadonnées qui ne correspondent pas au binaire, et fonctionnalités décrites mais absentes."
  - question: "Faut-il un backend pour publier une application mobile ?"
    answer: "Non. Une application peut être entièrement local-first : les données restent sur l'appareil, dans un stockage local. C'est le choix que j'ai fait. Ça supprime l'authentification, les serveurs, les coûts récurrents et la majorité des obligations RGPD. En contrepartie, tu perds la synchronisation entre appareils, la sauvegarde automatique et les analytics produit."
  - question: "Combien coûte la publication d'une app sur les stores ?"
    answer: "Le compte développeur Apple coûte 99 USD par an, le compte Google Play 25 USD une seule fois. À ça s'ajoutent les outils : un service de gestion des abonnements comme RevenueCat est gratuit sous un certain volume de revenus, et un service de build cloud comme EAS a une offre gratuite limitée. Le vrai coût reste le temps de développement et de production du contenu."
  - question: "Expo ou React Native brut pour un premier projet mobile ?"
    answer: "Expo, sans hésiter, pour un premier projet. Tu obtiens le routage, les builds natifs cloud, les notifications, le stockage et la soumission aux stores sans toucher à Xcode ni à Android Studio. La limite historique — impossible d'ajouter du code natif — n'existe plus depuis les development builds. Pour un projet avec des besoins natifs très spécifiques, la question mérite d'être reposée."
---

Tout le monde raconte le développement d'une **application mobile**. Presque personne ne raconte les deux jours entre « l'app est finie » et « l'app est téléchargeable ». C'est pourtant là que se perdent les délais.

Ce journal raconte une publication réelle, du cadrage à la mise en ligne, sur un projet que j'ai mené de bout en bout en août 2026 : [Nooria](/portfolio/nooria), une app de conversations parent-enfant. Ce qui a marché, ce qui a été rejeté, et ce que je referais autrement.

> **L'essentiel en bref**
>
> - Le cadrage écrit avant le code est ce qui compresse le plus le délai : trois jours de PRD ont supprimé toutes les décisions à prendre pendant le développement.
> - Le choix **local-first** — aucune donnée qui quitte l'appareil — supprime d'un coup l'authentification, le backend, les coûts récurrents et l'essentiel des obligations RGPD.
> - Apple a rejeté le premier build pour trois raisons, dont **aucune ne concernait le code** : une URL en 404, des abonnements absents de la soumission, un questionnaire d'âge mal rempli.
> - La review dure 1 à 3 jours. La préparation de la soumission, elle, prend facilement une semaine sur une première publication.
> - Deux semaines de bout en bout, c'est un projet solo sans validation client. Sur un projet d'entreprise, compte toujours [3 à 6 mois](/blog/developper-application-mobile-suisse).

---

## Le projet, en une ligne

Une application mobile qui propose à un parent et son enfant une situation illustrée et une question, pour lancer une vraie conversation de cinq à dix minutes. Pas de score, pas de compte, pas de publicité. Trois îles thématiques, trente-six situations au lancement.

Le contexte compte pour lire les délais annoncés plus bas : c'est un produit dont je suis le porteur. Pas de comité de validation, pas d'aller-retour sur les maquettes, pas de cahier des charges négocié. C'est le facteur numéro un du calendrier, bien avant la technologie.

---

## Étape 1 — Trois jours de cadrage écrit

Avant la première ligne de code, un document de spécifications produit. Pas un cahier des charges administratif : un document qui **tranche**.

Ce qu'il contenait :

- **La promesse en une phrase**, testable. Si on ne sait pas la dire, on ne sait pas ce qu'on construit.
- **La cible, et surtout le hors-cible.** Ici : enfants de 7 à 11 ans. Explicitement exclus : moins de 7 ans, plus de 12 ans, usage scolaire, usage enfant seul. Chaque exclusion a supprimé des dizaines d'heures d'écrans à concevoir.
- **La boucle d'usage**, écran par écran. Image → situation → question → relances → repère → prolongement facultatif.
- **Le modèle économique.** Cinq missions gratuites permanentes, un abonnement annuel mis en avant, un hebdomadaire, pas d'essai limité dans le temps.
- **Les non-décisions assumées**, marquées comme telles, pour ne pas les redécouvrir en plein développement.

Le gain n'est pas théorique. Pendant le développement, il n'y a plus eu de question ouverte : chaque écran avait déjà sa règle. C'est exactement le point que je détaille dans l'article sur le [cahier des charges d'une application métier](/blog/cahier-des-charges-application-metier) — la phase de cadrage est la seule dont le retour sur investissement est mesurable directement en jours économisés.

**Erreur classique à éviter :** écrire un PRD qui décrit des fonctionnalités. Un bon document décrit des décisions, avec leur raison. Six mois plus tard, on veut savoir *pourquoi* la limite gratuite est à cinq et pas à trois.

---

## Étape 2 — Construire, en local-first

Stack : **Expo SDK 57**, Expo Router, TypeScript strict, Zustand pour l'état, AsyncStorage pour la persistance.

Le choix structurant n'est pas Expo. C'est le **local-first** : aucun compte, aucun serveur, aucune base de données distante. Le profil, la progression, les favoris et les réglages vivent sur l'appareil et n'en sortent jamais.

Ce que ce choix supprime :

| Ce qu'on n'a pas à faire | Conséquence |
|---|---|
| Authentification, mots de passe, réinitialisation | Trois à cinq écrans en moins, et zéro faille de compte |
| API, base de données, hébergement | Zéro coût récurrent, zéro astreinte |
| Registre de traitement, sous-traitants, transferts | L'essentiel des obligations RGPD tombe |
| Synchronisation multi-appareils | La complexité numéro un des apps grand public |

Ce que ce choix coûte :

- Pas de sauvegarde si l'utilisateur change de téléphone.
- Pas d'analytics produit : je ne sais pas quelles situations sont terminées ni où les gens décrochent.
- Toute évolution du format de stockage exige une **migration versionnée**, sinon on efface les données des utilisateurs à la mise à jour. C'est le seul endroit où le local-first coûte plus cher qu'un backend.

Pour un produit destiné à des enfants, le calcul est vite fait : la meilleure façon de protéger une donnée, c'est de ne jamais la collecter. Si tu hésites entre app native, hybride et web, l'arbitrage est détaillé dans [app native ou hybride](/blog/application-native-vs-hybride) et [application mobile ou PWA](/blog/application-mobile-ou-pwa).

---

## Étape 3 — Les abonnements, avant la soumission

Les achats intégrés se configurent à **trois endroits différents**, et les trois doivent être cohérents :

1. **App Store Connect** — les produits d'abonnement, leur groupe, leurs prix par territoire, leurs localisations, et leur capture d'écran de review.
2. **Le service de gestion des abonnements** (ici RevenueCat) — un droit d'accès unique, une offre courante, et des packages reliés aux identifiants produits Apple.
3. **L'application** — l'écran de paywall, la restauration d'achat, et les liens légaux obligatoires.

Deux pièges, tous les deux coûteux :

- **Un abonnement configuré n'est pas un abonnement soumis.** Il faut ouvrir chaque produit et cliquer explicitement `Add for Review`, puis l'ajouter à la soumission avec le binaire. Sinon le reviewer voit un paywall vide.
- **Le paywall doit afficher trois liens** : tes conditions d'utilisation, ta politique de confidentialité, et la licence standard Apple. L'absence de l'un des trois est un motif de rejet à part entière.

Teste toujours sur un appareil réel avec un compte sandbox dédié, et couvrez les quatre parcours : achat, restauration, annulation, erreur réseau.

---

## Étape 4 — La soumission, et le rejet

Le premier build a été refusé. Trois motifs. **Aucun ne concernait le code de l'application.**

### 1. L'URL d'assistance renvoyait une 404

Les adresses sans extension utilisées dans l'app et dans la fiche produit — `/support`, `/privacy-policy`, `/terms-of-use` — renvoyaient une erreur, alors que les variantes en `.html` répondaient correctement. Une configuration d'hébergement, rien de plus.

Le reviewer clique sur chaque lien. Un lien mort, c'est un rejet. **Vérifie tes URL depuis une navigation privée, sur mobile, avant de soumettre.**

### 2. Les abonnements n'étaient pas dans la soumission

Ils existaient des deux côtés, correctement reliés. Ils n'avaient simplement jamais été ajoutés à la soumission elle-même. Invisible pour moi, bloquant pour le reviewer.

### 3. Le questionnaire d'âge était mal rempli

L'app dispose d'une barrière parentale — une question de calcul avant d'accéder aux achats et aux liens externes. J'avais déclaré des *contrôles parentaux* dans le questionnaire d'âge.

Au sens d'Apple, ce n'est pas la même chose. Une barrière parentale protège l'accès à une zone. Un contrôle parental est un outil de gestion de l'usage, et une vérification d'âge est un dispositif d'assurance d'âge. Déclarer une fonctionnalité que l'app ne fournit pas est un motif de rejet, même quand la déclaration est plus prudente que la réalité.

**La leçon générale :** App Review ne teste pas ton code. Il teste la cohérence entre ce que tu déclares et ce que le binaire fait réellement.

---

## La checklist que j'aurais voulu avoir

À faire **avant** de cliquer sur `Submit for Review` :

1. Ouvrir chaque URL de la fiche produit en navigation privée, sur mobile, et vérifier un code 200.
2. Vérifier que le paywall affiche les trois liens légaux, y compris la licence standard Apple.
3. Ouvrir chaque abonnement, vérifier sa capture de review, cliquer `Add for Review`, puis l'ajouter à la soumission.
4. Relire le questionnaire d'âge en se demandant, pour chaque case : *est-ce que le binaire fait littéralement ça ?*
5. Vérifier que la déclaration de confidentialité correspond aux SDK réellement présents dans le build soumis, pas à ceux prévus.
6. Écrire des notes de review qui expliquent comment franchir toute barrière et comment tester les achats.
7. Prendre les captures d'écran sur le build candidat, jamais sur une maquette avec des prix fictifs.

---

## Combien de temps, vraiment

Deux semaines entre le cadrage et la mise en ligne. Ce chiffre est vrai, et il est trompeur si on l'applique tel quel à un projet d'entreprise.

Ce qui l'a rendu possible :

- **Un seul décideur.** Aucun aller-retour de validation, aucune réunion de cadrage, aucun compromis à négocier.
- **Un périmètre fermé le jour un**, et jamais rouvert.
- **Aucun backend**, donc aucune infrastructure à monter, sécuriser ni maintenir.
- **Un usage intensif de l'IA en développement**, sur du code dont je relis chaque décision d'architecture.

Ce qui n'a pas été compressé, et ne peut pas l'être : le contenu. Trente-six situations écrites et illustrées pour le lancement, deux cent quatorze de plus en réserve. Sur un produit éditorial, la technologie n'est jamais le chemin critique.

Sur un projet client, avec une phase de découverte, des validations, un backend et des intégrations, la fourchette reste celle que je donne toujours : **trois à six mois**, et [2 000 à 15 000 CHF](/blog/prix-application-mobile-suisse) selon la complexité. Le [budget d'un MVP mobile](/blog/budget-mvp-application-mobile) répond à la même question sous l'angle du périmètre minimum.

---

## Ce que je referais autrement

**Préparer la soumission en parallèle du développement, pas après.** Les pages légales, les URL, les captures, les questionnaires : tout ça pouvait être fait pendant que le code avançait. Le faire à la fin a coûté un cycle de review complet.

**Tester les achats avant de finir les écrans.** Le parcours d'abonnement touche à trois systèmes qui ne sont pas les vôtres. C'est la partie la plus imprévisible du projet, donc celle qu'il faut attaquer en premier.

**Documenter les décisions au fil de l'eau.** Un journal daté, une ligne par arbitrage, avec la raison. C'est ce qui a permis de reprendre le projet après quelques jours sans rien redécouvrir.

Ce que je ne changerais pas : le local-first, et le PRD écrit avant le code. Ce sont les deux décisions qui ont fait le calendrier.

---

## Pour aller plus loin

L'étude de cas complète — décisions produit, stack, captures, ce qui a été publié et ce qui reste en réserve — est ici : [Nooria, l'étude de cas](/portfolio/nooria).

Si tu as un projet mobile en tête et que la question est « est-ce qu'une app est vraiment la bonne réponse », commence par [le guide PME avant de commander une app](/blog/developper-application-mobile-suisse). Si la décision est déjà prise, la page [développement d'application mobile](/services/developpement-application-mobile) dit ce que je fais et à quelles conditions.

Une question sur un projet précis ? [Écris-moi](/contact), je réponds.
