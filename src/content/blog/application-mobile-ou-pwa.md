---
title: "Application mobile ou PWA : comment choisir ?"
h1: "Application mobile ou PWA : le guide de décision pour votre PME"
description: "PWA ou app native ? Tableau de décision avec critères concrets, fourchettes CHF et règle des 3 questions pour trancher en 2 minutes."
pubDate: 2026-07-10
author: "Jon"
image:
  url: "/images/blog/application-mobile-ou-pwa.webp"
  alt: "Illustration éditoriale : un smartphone partagé entre une application installée et un navigateur web, aiguillage vert, main de statue antique, DA jonlabs"
category: "mobile"
tags: ["PWA", "application mobile", "suisse", "PME", "développement mobile", "budget"]
featured: false
draft: false
readingTime: 8
slug: application-mobile-ou-pwa
faqs:
  - question: "Quelle est la différence entre une PWA et une application mobile native ?"
    answer: "Une application mobile native est développée spécifiquement pour iOS ou Android, distribuée via les stores d'Apple et Google. Une PWA est un site web amélioré, installable, fonctionnel hors ligne via cache, capable d'envoyer des notifications, mais qui tourne dans le navigateur et ne passe pas par les stores."
  - question: "Une PWA est-elle vraiment moins chère qu'une app native ?"
    answer: "Oui, structurellement. Une app native nécessite deux codebases séparées (iOS et Android), soit deux fois plus de travail de développement et de maintenance. Une PWA est une base de code unique. Le ratio est généralement de 2 à 5 fois moins cher selon la complexité du projet."
  - question: "La PWA fonctionne-t-elle sur iPhone (iOS) ?"
    answer: "Oui, avec des nuances. Les PWA fonctionnent sur Safari depuis iOS 11.3. Les notifications push sont disponibles depuis iOS 16.4 (avril 2023) — mais uniquement si l'utilisateur a d'abord installé la PWA sur son écran d'accueil."
  - question: "Peut-on publier une PWA sur l'App Store ou le Play Store ?"
    answer: "Pas directement. Une PWA peut être encapsulée dans une coque native via des outils comme Capacitor ou TWA (Trusted Web Activity pour Android), ce qui permet une publication sur le Play Store. Mais c'est un travail supplémentaire qui sort du modèle PWA à budget réduit."
  - question: "Quand faut-il vraiment développer une application native plutôt qu'une PWA ?"
    answer: "Quand tu as besoin d'un ou plusieurs de ces éléments : accès Bluetooth ou NFC, notifications push iOS sans friction, paiements in-app via les stores, authentification biométrique forte (Face ID), ou fonctionnement hors ligne complet avec synchronisation complexe."
---

**Pinterest a converti son site mobile en Progressive Web App et a vu l'engagement de ses utilisateurs augmenter de 60%.** Starbucks a déployé une PWA capable de prendre des commandes sans connexion, directement depuis le navigateur. Pourtant, quand une PME romande pense "app", elle pense automatiquement App Store.

Ce réflexe coûte cher. Beaucoup de PME paient 10 000 CHF ou plus pour une application mobile native alors qu'une **PWA** aurait répondu à 90% de leurs besoins pour un tiers du budget. Pas parce que la PWA est meilleure dans l'absolu, mais parce que le choix dépend de critères précis que personne ne leur a expliqués.

Ce guide te donne les critères de bascule. Directement, sans bla-bla.

> **L'essentiel en bref**
>
> - La PWA coûte 2 à 5 fois moins cher qu'une application mobile native et est indexable par Google.
> - L'application native s'impose quand tu as besoin de Bluetooth, NFC, ou de notifications push critiques sur iOS.
> - Avec un budget inférieur à 10 000 CHF, commence par une PWA.
> - Les mises à jour d'une PWA sont instantanées, pas de validation App Store qui prend 1 à 3 jours.
> - La règle des 3 questions à la fin de cet article tranche 80% des cas en 2 minutes.

---

## Définitions en 2 lignes — app native et PWA

Une **application mobile native** est installée depuis l'App Store (Apple) ou le Play Store (Google). Elle accède directement aux fonctionnalités hardware du téléphone : caméra, GPS, Bluetooth, capteurs biométriques. Elle peut fonctionner hors ligne si le développeur l'a prévu.

Une **Progressive Web App (PWA)** est un site web avec des superpouvoirs. Elle s'installe sur l'écran d'accueil depuis le navigateur, peut fonctionner hors ligne via un système de cache, et envoie des notifications push, sans passer par les stores. Tu la déploies comme un site web classique.

La différence clé : la PWA vit dans le navigateur. L'app native vit dans l'OS du téléphone.

---

## Ce que la PWA ne peut pas faire — les limites réelles

La PWA a des angles morts concrets. Voici les 5 cas où elle atteint ses limites.

**Notifications push sur iOS** : Apple a longtemps bloqué cette fonctionnalité. Depuis iOS 16.4 (avril 2023), les notifications push sont disponibles, mais avec une contrainte importante : l'utilisateur doit d'abord installer la PWA sur son écran d'accueil pour les recevoir. Sur les iPhone non mis à jour, ça ne fonctionnera pas.

**Bluetooth, NFC et USB avancé** : l'accès à ces interfaces est limité ou inexistant selon le navigateur. Si ton app doit se connecter à un lecteur de carte, à une machine industrielle ou à un terminal de paiement, une **application native** est obligatoire.

**Paiements in-app via Apple Pay et Google Pay** : l'intégration est complexe hors des stores. Pour des achats récurrents ou des abonnements in-app, la mécanique des stores reste plus solide.

**Publication sur l'App Store et le Play Store** : une PWA n'est pas publiable sur les stores nativement. Des solutions comme [Capacitor](https://capacitorjs.com/) permettent d'encapsuler une PWA dans une coque native, mais c'est un travail supplémentaire et une complexité à maintenir.

**Face ID et Touch ID** : l'accès à la reconnaissance biométrique via une PWA reste limité. Pour une app de paiement ou d'accès sécurisé avec authentification forte, c'est un point bloquant.

---

## Ce que la PWA fait mieux — et que tu sous-estimes

La PWA gagne sur 5 points que beaucoup de PME découvrent trop tard.

**Le coût, d'abord.** Une PWA coûte 2 à 5 fois moins cher qu'une application native. La raison est simple : une app native nécessite deux codebases séparées, une pour iOS (Swift/Kotlin), une pour Android. Une PWA, c'est une seule base de code qui fonctionne sur les deux plateformes, desktop inclus.

**Le référencement naturel.** Une PWA est indexable par Google. Une application native ne l'est pas : le contenu d'une app ne remonte pas dans les résultats de recherche. Si le SEO fait partie de ta stratégie d'acquisition, c'est un argument décisif.

**Les mises à jour.** Avec une PWA, tu déploies et l'utilisateur a la nouvelle version à la prochaine ouverture. Avec une app native, chaque mise à jour passe par la validation de l'App Store, un processus qui prend 1 à 3 jours ouvrés, et que l'utilisateur doit encore accepter d'installer.

**La friction à l'installation.** Accéder à une PWA ne demande aucune action sur les stores. L'utilisateur ouvre le lien dans son navigateur, clique sur "Ajouter à l'écran d'accueil" si c'est pertinent, et c'est tout. Le taux d'adoption est structurellement meilleur pour les outils internes ou B2B.

**Le multi-plateforme.** iOS, Android, desktop : une PWA couvre tout. Pour une équipe qui travaille sur des appareils hétérogènes, c'est un gain de maintenance considérable.

---

## Tableau de décision — application native ou PWA ?

Voici le tableau de bascule. Si ta situation correspond à la colonne "App native", une application mobile native s'impose. Sinon, commence par une PWA.

| Critère | App native | PWA |
|---|---|---|
| Notifications push iOS critiques (sans condition d'installation préalable) | ✓ | Limité depuis iOS 16.4 |
| Accès Bluetooth ou NFC | ✓ | ✗ |
| Fonctionnement hors ligne complet (pas partiel) | ✓ | Partiel via cache |
| Présence sur l'App Store souhaitée | ✓ | ✗ |
| Budget inférieur à 10 000 CHF | ✗ | ✓ |
| SEO important pour l'acquisition | ✗ | ✓ |
| Mises à jour fréquentes sans friction | ✗ | ✓ |
| Première version ou test de concept | ✗ | ✓ |
| Accès caméra et GPS | ✓ | Partiel selon navigateur |
| Authentification biométrique forte (Face ID) | ✓ | Limité |

---

## Exemples de cas d'usage PME romandes

Les critères du tableau prennent du sens avec des exemples concrets.

### Cas où la PWA est adaptée

**Cabinet médical — prise de rendez-vous en ligne.** L'outil s'ouvre depuis un lien dans un e-mail ou un SMS. Pas besoin d'app store, pas besoin de GPS ou Bluetooth. Une PWA responsive suffit largement, et elle est indexable par Google si tu veux qu'on la trouve directement.

**Représentant commercial — catalogue avec recherche hors ligne.** Le vendeur consulte les fiches produits chez le client, même sans connexion. Une PWA avec mise en cache des données couvre ce besoin. Pas besoin d'accès hardware avancé.

**Association — outil de suivi de présence.** Usage interne, multi-appareils, pas de stores. Une web app progressive s'installe en 10 secondes sur n'importe quel téléphone et tourne sur le laptop du responsable sans modification.

### Cas où l'app native est nécessaire

**App de livraison — scan QR, notifications en temps réel, mode hors ligne complet.** Le livreur a besoin que les notifications arrivent instantanément, que le scan QR fonctionne dans un parking souterrain et que l'historique soit accessible sans réseau. C'est le terrain de jeu de l'app native.

**App de chantier — photos géolocalisées, rapports hors ligne.** L'accès simultané à la caméra, au GPS et au stockage local en mode déconnecté dépasse ce que la PWA gère proprement aujourd'hui. Une app native construite sur [Flutter ou React Native](/blog/flutter-vs-react-native-pme) est la bonne réponse.

**Programme de fidélité avec paiements in-app.** Dès que tu touches aux achats intégrés via les stores, une app native s'impose. Les mécaniques de paiement d'Apple et Google sont étroitement liées à leurs plateformes.

---

## La règle des 3 questions

Avant de choisir, réponds honnêtement à ces 3 questions. Elles tranchent 80% des cas.

**1. As-tu besoin d'un accès hardware avancé (Bluetooth, NFC) ou de notifications push critiques sur iOS, sans condition préalable d'installation ?**

**2. Ton budget est-il inférieur à 10 000 CHF ?**

**3. Veux-tu que ton outil soit trouvable via Google (SEO) ?**

La grille de lecture :

- Tu réponds **non / oui / oui** : commence par une PWA. Tu peux toujours migrer vers une app native plus tard si les besoins évoluent.
- Tu réponds **oui** à la question 1 : app native, sans exception.
- Tu réponds **non / non / non** (budget > 10 000 CHF, pas de SEO, pas d'accès hardware) : les deux options sont viables. La question à se poser : est-ce que la présence sur les stores a une valeur marketing pour toi ?

La bonne stratégie que je recommande souvent : commencer par une PWA, valider le produit avec de vrais utilisateurs, puis migrer vers une app native si la croissance le justifie. Ça évite de brûler 15 000 CHF sur une app que personne n'utilise.

Si la grille te renvoie vers le natif, l'étape d'après est de figer le périmètre et de [faire développer une app iOS et Android](/services/developpement-application-mobile) sur une base de code unique, plutôt que de repartir sur deux chantiers séparés.

Pour aller plus loin sur les étapes de développement et les budgets réels, le [guide complet sur le développement d'application mobile en Suisse](/blog/developper-application-mobile-suisse) détaille chaque phase et les fourchettes de prix du marché.

Si tu veux une fourchette tarifaire précise selon ton contexte, consulte aussi l'article sur le [prix d'une application mobile en Suisse](/blog/prix-application-mobile-suisse).

---

## FAQ sur les applications mobiles et les PWA

### Quelle est la différence entre une PWA et une application mobile native ?

Une application mobile native est développée spécifiquement pour iOS ou Android, distribuée via les stores d'Apple et Google. Une PWA est un site web amélioré, installable, fonctionnel hors ligne via cache, capable d'envoyer des notifications, mais qui tourne dans le navigateur et ne passe pas par les stores.

### Une PWA est-elle vraiment moins chère qu'une app native ?

Oui, structurellement. Une app native nécessite deux codebases séparées (iOS et Android), soit deux fois plus de travail de développement et de maintenance. Une PWA est une base de code unique. Le ratio est généralement de 2 à 5 fois moins cher selon la complexité du projet.

### La PWA fonctionne-t-elle sur iPhone (iOS) ?

Oui, avec des nuances. Les PWA fonctionnent sur Safari depuis iOS 11.3. Les notifications push sont disponibles depuis iOS 16.4 (avril 2023), mais uniquement si l'utilisateur a d'abord installé la PWA sur son écran d'accueil. Les iPhones sous iOS 16.3 ou antérieur ne reçoivent pas les notifications push PWA.

### Peut-on publier une PWA sur l'App Store ou le Play Store ?

Pas directement. Une PWA peut être encapsulée dans une coque native via des outils comme Capacitor ou TWA (Trusted Web Activity pour Android), ce qui permet une publication sur le Play Store notamment. Mais c'est un travail supplémentaire qui sort du modèle "simple PWA" à budget réduit.

### Quand faut-il vraiment développer une application native plutôt qu'une PWA ?

Quand tu as besoin d'un ou plusieurs de ces éléments : accès Bluetooth ou NFC, notifications push iOS sans friction (sans que l'utilisateur installe l'app au préalable), paiements in-app via les stores, authentification biométrique forte (Face ID), ou fonctionnement hors ligne complet avec synchronisation complexe.

---

## Conclusion

Pour une PME romande avec un budget sous 10 000 CHF et sans besoin d'accès hardware avancé, la PWA est la réponse rationnelle. Moins chère, plus rapide à déployer, indexable, multi-plateforme : elle couvre la majorité des usages métier courants.

L'app native n'est pas morte. Elle reste indispensable dès que tu touches au hardware (Bluetooth, NFC), aux notifications push iOS critiques, ou aux paiements in-app. Mais elle mérite d'être choisie pour de bonnes raisons, pas parce que "une app, c'est plus sérieux qu'un site web".

Si tu veux clarifier quel format correspond à ton projet avant de consulter des agences et de recevoir des devis qui orientent vers la solution la plus chère, on peut en parler directement.

[**Clarifier app vs PWA pour ton projet →**](https://cal.com/jonathan-vouilloz/appel-de-bienvenue?utm_source=blog&utm_medium=article&utm_campaign=application-mobile-ou-pwa)

---

## Sources et Références

- Pinterest Engineering — migration vers PWA et résultats d'engagement (+60%)
- Starbucks — déploiement PWA avec fonctionnement hors ligne pour commandes sans connexion
- Apple Developer Documentation — support des notifications push PWA sur iOS 16.4+
- [Capacitor by Ionic](https://capacitorjs.com/) — outil d'encapsulation PWA vers app native
- [Guide développement application mobile Suisse](/blog/developper-application-mobile-suisse) — Jon Labs, 2026
