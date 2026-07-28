---
title: "IA et nLPD : automatiser en conformité en Suisse"
h1: "IA et nLPD : ce que la conformité suisse change vraiment quand tu automatises avec l'IA"
description: "Où vont tes données quand tu utilises un agent IA ? Ce que la nLPD suisse impose vraiment aux PME, sans jargon juridique inutile."
pubDate: 2026-08-07
image:
  url: "/images/blog/ia-nlpd-conformite-suisse.webp"
  alt: "Schéma de conformité nLPD pour un agent IA en entreprise suisse : hébergement des données et sous-traitance"
category: "automatisation"
tags: ["nlpd", "conformite-donnees", "agent-ia", "automatisation", "suisse-romande", "protection-donnees"]
featured: false
draft: false
readingTime: 11
faqs:
  - question: "Est-ce que la nLPD interdit d'utiliser ChatGPT dans mon entreprise ?"
    answer: "Non. La nLPD n'interdit pas les outils étrangers de façon générale, elle encadre le transfert de données personnelles vers un pays sans niveau de protection jugé adéquat. Utiliser ChatGPT pour un brouillon générique sans donnée identifiante reste un cas à faible enjeu. Le point d'attention se pose dès qu'un dossier client nominatif ou une donnée sensible entre dans la conversation."
  - question: "Qu'est-ce qu'un sous-traitant IA au sens de la nLPD ?"
    answer: "C'est le prestataire qui traite tes données personnelles pour ton compte, via son outil IA. La loi lui impose des obligations propres, et toi, en tant que responsable du traitement, tu dois formaliser un contrat de sous-traitance avec lui pour cadrer précisément ce qu'il fait de la donnée."
  - question: "Faut-il un registre des traitements même pour une petite PME ?"
    answer: "Oui, mais il peut rester simple : un tableau qui liste chaque traitement de données, sa finalité, et le type de donnée concerné. Dès qu'un agent IA traite des dossiers clients ou des données RH, il doit y figurer, même dans une structure de quelques employés."
  - question: "Que se passe-t-il en cas de violation de données avec un agent IA ?"
    answer: "En cas de risque élevé pour la personne concernée, une notification au Préposé fédéral à la protection des données et à la transparence (PFPDT) est requise. Avoir une procédure écrite avant l'incident permet de réagir vite plutôt que d'improviser sous pression."
  - question: "Un agent IA auto-hébergé est-il plus conforme qu'une API tierce ?"
    answer: "Il simplifie la question du transfert de données à l'étranger, puisque rien ne transite par une API externe. Ce n'est pas automatiquement plus conforme en soi, mais il retire une couche de complexité liée au transfert, ce qui facilite le respect de la nLPD sur ce point précis."
  - question: "Pourquoi privilégier un prestataire IA basé en Suisse pour une question de conformité ?"
    answer: "Parce qu'il peut signer un contrat de sous-traitance sous droit suisse et connaît la nLPD par pratique quotidienne, sans avoir à gérer une double conformité avec un droit étranger. Un prestataire transfrontalier qui cible des clients romands compose, lui, avec deux cadres réglementaires en même temps."
  - question: "Cet article remplace-t-il l'avis d'un juriste ?"
    answer: "Non, et ce n'est pas son but. C'est un cadrage pratique pour un dirigeant non-juriste, pensé pour poser les bonnes questions avant de déployer un agent IA. Pour un cas précis, notamment en secteur réglementé, l'avis d'un spécialiste conformité reste indispensable."
---

Un dirigeant de fiduciaire lausannoise m'a posé la question il y a quelques semaines : "si je branche un agent IA sur mes dossiers clients, je risque quoi exactement ?" Bonne question, et il n'était pas seul à se la poser. Dès qu'un **agent IA** touche des données qui identifient une personne, la **nLPD** entre dans le jeu, que le dirigeant soit juriste ou pas.

Petite précision avant d'aller plus loin : cet article n'est pas un conseil juridique. C'est un cadrage pratique pour un dirigeant non-juriste, à valider avec un spécialiste conformité pour un cas précis. Pour la vue d'ensemble sur l'automatisation en PME, le [guide complet sur l'automatisation dans ta PME suisse](/blog/automatisation-pme-suisse-guide-complet) pose les bases générales ; ici, on se concentre sur la question spécifique de la **protection des données et de l'IA en Suisse**.

---

> **L'essentiel en bref**
>
> - La nLPD (loi fédérale sur la protection des données révisée) est en vigueur depuis le 1er septembre 2023 et s'applique dès qu'un agent IA traite des données identifiant une personne.
> - Elle n'interdit pas les outils étrangers, elle encadre le transfert de données vers un pays qui n'offre pas un niveau de protection jugé adéquat.
> - Un agent IA auto-hébergé (IA souveraine) donne un contrôle total sur la localisation des données, au prix d'une mise en place un peu plus lourde.
> - Un prestataire réellement basé en Suisse peut signer un contrat de sous-traitance sous droit suisse, sans double conformité avec un droit étranger.
> - Une check-list en 6 points permet de vérifier la conformité avant de déployer un agent IA en production.

---

## La nLPD, c'est quoi concrètement quand tu utilises l'IA dans ta PME

La nLPD est la loi fédérale sur la protection des données, révisée et en vigueur depuis le **1er septembre 2023**, et elle s'applique dès qu'un agent IA traite une donnée qui identifie une personne physique. Client, prospect ou employé, peu importe : si la donnée permet de remonter à quelqu'un, la loi encadre son traitement.

Avant d'aller plus loin, une précision qui vaut pour tout l'article : ce qui suit n'est pas un conseil juridique. C'est un cadrage pratique pensé pour un dirigeant sans formation juridique, pas une opinion d'avocat. Pour un cas précis, applique-le avec un spécialiste conformité, pas seul avec un article de blog.

Ce qui change concrètement avec l'IA, c'est le volume et la vitesse. Un collaborateur qui trie 50 emails à la main a le temps de repérer une donnée sensible et d'hésiter avant de la transmettre ailleurs. Un agent IA qui traite les mêmes 50 emails en quelques secondes ne s'arrête pas naturellement pour se poser la question. La nLPD ne change pas de nature avec l'IA, mais l'automatisation rend l'oubli plus facile et plus rapide à grande échelle.

Trois catégories de données concentrent l'essentiel du risque en PME romande : les dossiers clients nominatifs (nom, coordonnées, historique), les données RH (salaires, évaluations, absences), et les données de santé ou financières quand le secteur y touche (cabinets médicaux, fiduciaires). Un agent IA qui lit, trie ou résume ce type de contenu manipule des **données personnelles en Suisse** au sens strict de la loi.

## Où vont vraiment tes données quand tu utilises un agent IA

Quand tu utilises un agent IA classique, ton email ou ton document part vers l'API d'un modèle de langage, potentiellement hébergé à l'étranger, avant de revenir sous forme de réponse. Ce trajet est invisible pour l'utilisateur, mais il est bien réel à chaque requête envoyée.

Voici ce qui se passe, en pratique, quand un collaborateur colle un extrait de dossier client dans ChatGPT pour lui demander un résumé ou une reformulation. Le texte quitte l'ordinateur, transite par les serveurs du fournisseur du modèle, souvent situés aux États-Unis, se fait traiter, puis revient. Rien n'est dramatique en soi, mais ce trajet n'est pas neutre au regard de la nLPD si le contenu contient des données identifiant une personne et qu'aucune garantie de transfert n'est en place.

La nuance à retenir : utiliser un outil IA américain pour un brouillon générique (reformuler une phrase, générer une idée de titre) n'a rien à voir avec y coller un dossier client complet. C'est la nature de la donnée qui détermine le niveau de risque, pas l'outil en lui-même. Beaucoup de dirigeants ignorent simplement que ce trajet existe, sans mauvaise intention, juste par méconnaissance du fonctionnement technique d'un agent IA.

Pour une fiduciaire ou un cabinet, cette question se pose presque à chaque usage quotidien de l'IA, ce qui explique pourquoi le sujet revient si souvent dans les échanges avec ce type de client.

## Ce qui doit rester en Suisse (ou en UE) et ce qui peut sortir

La nLPD encadre le transfert de données vers un pays qui n'offre pas un niveau de protection jugé adéquat, elle n'interdit pas de façon générale l'usage d'outils étrangers. C'est une nuance importante, souvent mal comprise : la loi pose des conditions, pas un mur.

Une PME dispose de deux leviers principaux pour ça. Le premier : choisir un hébergement en Suisse ou en UE quand la donnée traitée est sensible, ce qui simplifie mécaniquement la question du transfert. Le second : formaliser un contrat de sous-traitance avec le prestataire IA choisi, un document qui précise qui fait quoi avec la donnée et sous quelles garanties. Un **sous-traitant IA au sens de la nLPD**, c'est justement ce prestataire qui traite tes données pour ton compte, avec des obligations qui lui sont propres.

Dans la pratique, il vaut mieux distinguer deux cas de figure plutôt que d'appliquer une règle unique à tout :

- Cas à faible enjeu : un brouillon de texte générique, une reformulation, une idée de plan sans donnée identifiante. Le risque est marginal, presque théorique.
- Cas à enjeu réel : un dossier client nominatif, une donnée de santé, une donnée financière précise. Ici, le **transfert de données à l'étranger sous la nLPD** mérite une vraie vérification avant tout usage.

Pour un secteur comme la fiduciaire, où le dossier client contient souvent des données financières sensibles, cette distinction fait toute la différence dans le choix d'un outil IA. L'[IA pour les fiduciaires romandes](/metiers/ia-fiduciaire) détaille ce cas de figure en profondeur, avec les particularités propres à ce secteur.

## Agents IA et nLPD, ce que ça change concrètement pour ta PME

Un déploiement d'**agent IA conforme à la nLPD** repose sur quatre actions concrètes, pas sur une lecture théorique de la loi. Traduire un texte de loi en checklist opérationnelle, voilà ce qui compte réellement pour un dirigeant qui n'a pas de service juridique interne.

Première action : tenir un registre des traitements à jour, même simplifié pour une PME. Ce registre liste, pour chaque traitement de données, la finalité, le type de donnée et le responsable. Un agent IA qui traite des dossiers clients doit y figurer, ligne par ligne si nécessaire.

Deuxième action : documenter les cas où l'agent traite des données sensibles. Pas besoin d'un rapport de 30 pages, un tableau de suivi suffit pour une petite structure, tant qu'il reste à jour et consultable.

Troisième action : prévoir une procédure en cas de violation de données. En cas de risque élevé pour la personne concernée, une notification au **Préposé fédéral à la protection des données et à la transparence (PFPDT)** est requise. Avoir cette procédure écrite avant l'incident change tout : personne ne réfléchit bien dans l'urgence.

Quatrième action : intégrer le principe de "privacy by design" dès le cadrage du projet, plutôt qu'en rustine après coup. Concrètement, ça veut dire se poser la question de la donnée traitée avant de choisir l'outil IA, pas après avoir déjà tout connecté.

## L'IA souveraine, une alternative concrète pour les PME qui veulent tout garder en interne

Un **agent IA souverain** auto-hébergé, comme Hermes Agent, donne un contrôle total sur la localisation des données, sans dépendre d'une API tierce à l'étranger. C'est l'option pour une PME qui préfère garder la main sur l'hébergement de bout en bout plutôt que de faire confiance à un fournisseur externe.

Dans les faits, une **IA souveraine pour une PME** tourne sur un serveur choisi par l'entreprise, en Suisse ou chez un hébergeur de confiance, avec un modèle open source déployé localement. Aucune donnée ne transite par une API tierce à l'étranger, ce qui simplifie mécaniquement la question du transfert au sens de la nLPD.

Ce choix demande un peu plus de mise en place initiale qu'un simple abonnement à une API tierce, et il faut le dire honnêtement plutôt que de vendre une solution miracle. Un modèle open source auto-hébergé reste globalement moins puissant qu'un modèle propriétaire de dernière génération, mais il donne en échange un contrôle total sur la donnée, un argument décisif pour un secteur sensible comme la fiduciaire ou le cabinet médical. [Hermes Agent](/blog/hermes-agent-ia-pme) détaille cette option en profondeur, avec les prix et la mise en place concrète pour une PME romande.

## Pourquoi l'ancrage suisse d'un prestataire IA change la donne en matière de conformité

Un prestataire réellement basé en Suisse peut signer un contrat de sous-traitance sous droit suisse, connaît la nLPD par pratique quotidienne plutôt que par lecture à distance, et n'a pas à gérer une double conformité entre deux droits différents. C'est l'angle qui change tout pour une PME romande sensible à la question.

Un prestataire transfrontalier qui facture depuis l'étranger tout en ciblant des clients romands se retrouve dans une situation plus complexe : il doit composer avec son propre cadre réglementaire national, en plus de la nLPD suisse qui s'applique à son client. Cette double contrainte n'est pas qu'un détail administratif, elle se traduit concrètement par des contrats de sous-traitance moins adaptés au contexte suisse, voire absents.

Un prestataire ancré en Suisse, lui, connaît le fonctionnement du Préposé fédéral à la protection des données et à la transparence (PFPDT) par expérience directe, pas par une recherche ponctuelle avant de répondre à un client. Cette différence compte particulièrement pour les secteurs à forte sensibilité du cluster, fiduciaires et cabinets en tête, où la question "où sont mes données" revient à chaque échange. Ce n'est pas un argument marketing vague, c'est une différence structurelle vérifiable dans le contrat signé.

## Check-list conformité avant de déployer un agent IA dans ta PME

Voici les six vérifications à faire avant de mettre un agent IA en production dans ta PME, pensées comme des actions et non comme des définitions théoriques.

- Mets à jour ton registre des traitements avec la nouvelle ligne correspondant à l'agent IA déployé.
- Vérifie où sont hébergées les données de l'outil IA choisi, en Suisse, en UE, ou ailleurs.
- Signe un contrat de sous-traitance avec le prestataire externe avant la mise en production, pas après.
- Rédige une procédure de notification en cas d'incident, prête à être activée sans improvisation.
- Informe les personnes concernées si le traitement de leurs données change de nature avec l'arrivée de l'IA.
- Distingue clairement, pour chaque cas d'usage, les données sensibles des données à faible enjeu avant de choisir le niveau de précaution adapté.

Chacun de ces six points prend quelques heures à traiter sérieusement, pas plus, mais leur absence complète est ce qui expose vraiment une PME en cas de contrôle ou d'incident.

---

## FAQ sur l'IA et la nLPD

### Est-ce que la nLPD interdit d'utiliser ChatGPT dans mon entreprise ?

Non. La nLPD n'interdit pas les outils étrangers de façon générale, elle encadre le transfert de données personnelles vers un pays sans niveau de protection jugé adéquat. Utiliser ChatGPT pour un brouillon générique sans donnée identifiante reste un cas à faible enjeu. Le point d'attention se pose dès qu'un dossier client nominatif ou une donnée sensible entre dans la conversation.

### Qu'est-ce qu'un sous-traitant IA au sens de la nLPD ?

C'est le prestataire qui traite tes données personnelles pour ton compte, via son outil IA. La loi lui impose des obligations propres, et toi, en tant que responsable du traitement, tu dois formaliser un contrat de sous-traitance avec lui pour cadrer précisément ce qu'il fait de la donnée.

### Faut-il un registre des traitements même pour une petite PME ?

Oui, mais il peut rester simple : un tableau qui liste chaque traitement de données, sa finalité, et le type de donnée concerné. Dès qu'un agent IA traite des dossiers clients ou des données RH, il doit y figurer, même dans une structure de quelques employés.

### Que se passe-t-il en cas de violation de données avec un agent IA ?

En cas de risque élevé pour la personne concernée, une notification au Préposé fédéral à la protection des données et à la transparence (PFPDT) est requise. Avoir une procédure écrite avant l'incident permet de réagir vite plutôt que d'improviser sous pression.

### Un agent IA auto-hébergé est-il plus conforme qu'une API tierce ?

Il simplifie la question du transfert de données à l'étranger, puisque rien ne transite par une API externe. Ce n'est pas automatiquement "plus conforme" en soi, mais il retire une couche de complexité liée au transfert, ce qui facilite le respect de la nLPD sur ce point précis.

### Pourquoi privilégier un prestataire IA basé en Suisse pour une question de conformité ?

Parce qu'il peut signer un contrat de sous-traitance sous droit suisse et connaît la nLPD par pratique quotidienne, sans avoir à gérer une double conformité avec un droit étranger. Un prestataire transfrontalier qui cible des clients romands compose, lui, avec deux cadres réglementaires en même temps.

### Cet article remplace-t-il l'avis d'un juriste ?

Non, et ce n'est pas son but. C'est un cadrage pratique pour un dirigeant non-juriste, pensé pour poser les bonnes questions avant de déployer un agent IA. Pour un cas précis, notamment en secteur réglementé, l'avis d'un spécialiste conformité reste indispensable.

---

## Conclusion

La nLPD n'interdit pas l'IA en entreprise, elle impose de savoir où vont les données et de le documenter. Un registre à jour, un contrat de sous-traitance signé, et une distinction claire entre données sensibles et données à faible enjeu couvrent l'essentiel du chemin.

Si tu veux cadrer ton propre projet d'agent IA en conformité avant de le déployer, plutôt que de le découvrir après coup, un accompagnement dédié permet de poser ces bases dès le départ.

[**Cadrer ton agent IA en conformité →**](/contact?utm_source=blog&utm_medium=article&utm_campaign=ia-nlpd-conformite-suisse)

---

## Sources et Références

- [Préposé fédéral à la protection des données et à la transparence (PFPDT)](https://www.edoeb.admin.ch/)
- [guide complet sur l'automatisation dans ta PME suisse](/blog/automatisation-pme-suisse-guide-complet)
- [IA pour les fiduciaires romandes](/metiers/ia-fiduciaire)
- [Hermes Agent pour PME](/blog/hermes-agent-ia-pme)
- Observation terrain de l'auteur sur des déploiements d'agents IA en PME romande, secteurs fiduciaire et cabinet
