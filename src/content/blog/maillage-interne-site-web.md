---
title: "Maillage interne : quelles pages lier, et depuis où"
h1: "Maillage interne : les 7 règles pour relier les pages de votre site"
description: "Quelles pages lier depuis votre accueil, quelles ancres écrire, comment repérer vos pages oubliées. Les 7 règles du maillage interne, tirées d'un audit réel."
pubDate: 2026-08-21
image:
  url: "/images/blog/maillage-interne-site-web.webp"
  alt: "Illustration éditoriale : des fenêtres de navigateur en papier découpé reliées par des fils teal à une fenêtre centrale, une main de statue antique tendant l'un des fils"
category: "web"
youtubeId: "8G4tVxksd3k"
youtubeTitle: "Maillage interne : la méthode complète et l'audit en direct"
tags: ["seo", "maillage-interne", "liens-internes", "architecture", "site-web", "pme", "suisse-romande"]
featured: false
draft: false
readingTime: 10
faqs:
  - question: "Combien de liens internes faut-il mettre par page ?"
    answer: "Il n'existe aucun nombre optimal. Le seul critère est la pertinence : si cinq liens sont réellement utiles au lecteur à cet endroit, mettez-en cinq ; si dix le sont, mettez-en dix. Ce qui pose problème, ce n'est pas la quantité en soi, c'est le lien posé sans raison, que le lecteur ne cliquera pas et qui dilue les autres. La bonne question à se poser devant chaque lien est simple : est-ce qu'une personne qui lit cette phrase a une raison d'aller voir cette page maintenant ?"
  - question: "Les liens du menu et du pied de page comptent-ils dans le maillage interne ?"
    answer: "Ils comptent, mais beaucoup moins qu'un lien placé dans le texte. La raison est mécanique : le menu et le pied de page sont identiques sur toutes les pages du site, donc ils ne disent rien sur le rapport entre la page où se trouve le visiteur et la page vers laquelle il part. Un lien contextuel, lui, est unique à cet endroit et à ce sujet. C'est ce qui lui donne son poids, pour Google comme pour le lecteur."
  - question: "Qu'est-ce qu'une page orpheline et faut-il toutes les corriger ?"
    answer: "Une page orpheline est une page vers laquelle aucune autre page du site ne pointe. Google la trouve difficilement, vos visiteurs presque jamais. Mais toutes ne sont pas des erreurs : une page de confirmation de formulaire ou une page de remerciement n'a pas vocation à être trouvée. Ce qui compte est de savoir lesquelles sont orphelines par choix et lesquelles le sont par oubli. Les secondes sont un chantier prioritaire, les premières ne demandent rien."
  - question: "Combien de temps avant qu'un travail de maillage interne se voie ?"
    answer: "Comptez plusieurs semaines. Les pages modifiées doivent être réexplorées par Google, réévaluées, puis testées sur de vraies recherches. Un effet mesuré la semaine suivante est du bruit, pas un résultat. C'est pour cette raison qu'une modification se relit à sept, quatorze et vingt et un jours, avec les données de la Search Console sous les yeux."
  - question: "Le maillage interne suffit-il à faire remonter un site sur Google ?"
    answer: "Non, et c'est important de le savoir avant de s'y mettre. Le maillage interne organise la circulation de l'autorité à l'intérieur de votre site : il fait remonter ce qui existe déjà. Si vos pages traitent de sujets que personne ne recherche, aucun lien interne ne les sauvera. C'est un levier de rendement, pas un levier de création de demande, mais c'est aussi l'un des rares qui ne dépend d'aucun budget publicitaire ni d'aucun site tiers."
---

Le **maillage interne**, ce sont les liens qui relient vos propres pages entre elles. Il décide de deux choses en même temps : le chemin que suit un visiteur pour trouver ce qu'il cherche, et la façon dont Google répartit l'autorité de votre site d'une page à l'autre. Contrairement aux liens venus d'autres sites, il ne dépend ni d'un budget, ni d'un prestataire, ni de personne d'autre que vous. Voici les sept règles qui décident vraiment, les erreurs qui annulent le travail, et les chiffres d'un audit réel mené sur un site de 59 pages.

> **L'essentiel en bref**
>
> - Votre page d'accueil est la page la plus forte du site. Ce qu'elle lie monte, ce qu'elle ne lie pas reste en bas. Vos deux ou trois pages qui rapportent doivent y avoir un lien.
> - Un lien dans le texte pèse plus qu'un lien dans le menu ou le pied de page, parce qu'il est le seul à changer d'une page à l'autre.
> - Le texte du lien doit décrire la destination. « En savoir plus » ne dit rien, ni au lecteur ni à Google.
> - L'erreur la plus fréquente n'est pas la page orpheline : c'est le blog qui envoie des dizaines de liens vers les pages de vente sans jamais en recevoir en retour.
> - Le maillage fait remonter ce qui existe. Il ne crée pas la demande : sur un sujet que personne ne cherche, il ne changera rien.

## Ce que le maillage interne fait réellement

L'image la plus juste est celle d'une ville. Vos pages sont des destinations, vos liens sont les routes, et la circulation dépend entièrement du plan. Si les routes sont mal tracées, les visiteurs tournent en rond et finissent par partir.

Concrètement, chaque lien interne produit deux effets.

**Côté visiteur**, il évite l'effort. C'est tout le propos du livre de Steve Krug, *Don't Make Me Think* : personne ne devrait avoir à réfléchir pour trouver l'information suivante. Quelqu'un qui arrive sur une page, qui a une question logique juste après, et qui ne voit pas le lien vers la réponse, ne va pas fouiller votre menu. Il repart. C'est d'ailleurs l'un des [signes qu'un site web est en train de dormir](/blog/15-signes-site-web-dort) : du trafic qui arrive et qui ne circule nulle part.

**Côté Google**, il transmet de l'autorité. Le robot arrive sur une page, la lit de haut en bas, relève les liens et les suit pour découvrir la suite, exactement comme le ferait un visiteur. En circulant, il attribue à chaque page une part de la force de celle d'où il vient. Le nom historique de ce mécanisme est le PageRank ; Google ne publie plus de score depuis 2016 mais confirme continuer à l'utiliser en interne.

De là découle la règle qui commande toutes les autres : **une page vers laquelle rien ne pointe n'existe pas.** Elle peut être bien écrite, bien conçue, présente dans votre sitemap. Si aucun chemin ne mène à elle, elle sera trouvée tard, mal, ou jamais.

## Les 7 règles du maillage interne

### 1. Vos pages qui rapportent se lient depuis l'accueil

Votre page d'accueil concentre l'essentiel de l'autorité de votre site : c'est vers elle que pointent la majorité des liens extérieurs, et c'est presque toujours par elle que commence l'exploration. Ce qu'elle met en avant reçoit cette force en premier.

La conséquence est directe : identifiez les deux ou trois pages qui font réellement votre chiffre d'affaires, et donnez-leur un lien depuis l'accueil, haut dans la page. Pas depuis le pied de page.

C'est le seul arbitrage vraiment important de tout l'exercice, et c'est aussi celui qu'on tranche mal, parce qu'on confond « important pour moi » et « important pour le business ». Votre page « à propos » compte pour vous. Elle ne rapporte rien.

### 2. Un lien dans le texte vaut plus qu'un lien dans le menu

Le menu et le pied de page sont identiques sur toutes vos pages. Ils orientent le visiteur, ils font leur travail de navigation, et ils garantissent qu'aucune section principale n'est inaccessible. Mais parce qu'ils ne changent jamais, ils ne disent rien sur le rapport entre la page où l'on est et la page vers laquelle on part.

Un lien placé dans une phrase dit autre chose : à cet endroit précis, sur ce sujet précis, cette page est la suite logique. C'est un signal de pertinence, et c'est pour cette raison qu'il pèse davantage.

Autrement dit, l'essentiel de votre maillage ne se joue pas dans votre barre de navigation. Il se joue dans vos textes.

### 3. Le texte du lien décrit la destination

« En savoir plus », « cliquez ici », « lire la suite » : ces formulations ne décrivent rien. Ni votre lecteur ni Google ne savent où ils atterrissent, et Google en est réduit à deviner d'après le contexte de la phrase.

« Lire notre guide de Chiang Mai » décrit exactement la destination. C'est gratuit, ça se corrige en une passe sur tout le site, et c'est probablement le réglage au meilleur rapport effort/résultat du sujet.

Deux limites, cependant. Le texte du lien doit correspondre à ce que la page contient vraiment : une ancre très précise qui atterrit sur un contenu différent fait plus de mal qu'une ancre vague. Et certains éléments ont le droit de rester génériques, notamment les boutons d'appel à l'action en haut de page, où casser une habitude de lecture coûte plus cher que le gain SEO.

### 4. Vos pages importantes restent à trois clics maximum

Comptez le nombre de clics nécessaires pour atteindre chacune de vos pages importantes depuis l'accueil. Un ou deux, c'est bon. Trois, c'est la limite. Au-delà, la page est enterrée, et le problème n'est déjà plus un problème de SEO mais de structure.

À noter : la « règle des trois clics » est une convention d'ergonomie, pas un critère annoncé par Google. Mais comme révélateur, elle fonctionne très bien. Une page importante à quatre niveaux de profondeur signale presque toujours une architecture qui a grossi sans être révisée.

### 5. Les pages d'un même sujet se connaissent

Un site bien construit fonctionne par groupes de pages, ce qu'on appelle parfois un cocon sémantique. Derrière le terme, l'idée est simple : les pages qui traitent d'un même sujet se citent entre elles et connaissent leur page centrale.

Cela donne trois mouvements à vérifier :

- **du parent vers l'enfant** : la page principale renvoie vers ses guides détaillés ;
- **de l'enfant vers le parent** : chaque guide renvoie vers la page principale de son sujet ;
- **entre pages de même niveau** : deux guides qui traitent de facettes voisines se citent quand c'est logique.

Le troisième mouvement se fait naturellement en écrivant. Le deuxième aussi. Le premier, presque jamais, et c'est l'objet de la règle suivante.

### 6. Vos pages principales doivent renvoyer vers vos contenus

C'est le déséquilibre le plus courant, et celui que les audits ne regardent pas. Quand vous écrivez un article, vous avez une raison évidente de renvoyer vers votre page de service : c'est là que le lecteur passe à l'action. Quand vous écrivez la page de service, en revanche, les articles n'existent pas encore. Vous la publiez sans liens sortants, et personne ne revient jamais l'ouvrir pour y ajouter les guides publiés depuis.

Sur le site que j'ai audité pour cet article, le rapport était de **135 liens du blog vers les pages principales contre 6 dans l'autre sens**. Le blog alimentait tout le reste du site sans jamais rien recevoir, et ses articles les plus faibles vivaient avec un ou deux liens entrants.

Le correctif tient en un bloc de ressources ajouté en bas de chaque page principale, qui liste les guides de son propre sujet avec leur vrai titre. Une heure de travail, et le groupe de pages se referme.

Une précision qui compte : ce bloc doit lister le sujet **de cette page-là**. Une liste automatique de type « nos derniers articles », identique partout, redevient un pied de page déguisé et perd tout ce qui faisait sa valeur.

### 7. Aucune page publique sans lien entrant, aucun lien cassé

La dernière règle est la plus mécanique, et c'est celle qui se règle le plus vite. Sortez la liste des pages vers lesquelles rien ne pointe, et celle des liens qui mènent vers une erreur 404.

Les liens cassés se réparent sans réfléchir. Les pages orphelines demandent une décision par page : soit elle mérite un lien depuis une vraie page, soit elle n'a rien à faire dans l'index. Toutes ne sont pas des erreurs, et une page de remerciement après formulaire n'a aucune raison d'être trouvée.

C'est le seul indicateur de l'audit qui doit tomber à zéro : plus aucune page publique sans lien entrant.

## Les quatre erreurs qui annulent le travail

**Mettre des liens partout une fois qu'on a compris le mécanisme.** C'est le réflexe qui suit la prise de conscience, et il se retourne contre vous. À partir du moment où un lien n'aide plus un lecteur, il n'aide plus Google non plus.

**Écrire une ancre pour Google plutôt que pour la page d'arrivée.** Une ancre calibrée qui atterrit sur un contenu qui parle d'autre chose est une promesse non tenue, côté visiteur comme côté moteur.

**Essayer de « sculpter » la circulation avec des attributs nofollow.** Cette technique a eu son heure il y a une quinzaine d'années. Aujourd'hui, elle consomme du temps qui serait mieux investi à corriger vos ancres.

**Commencer par le maillage sur un site qui n'a rien à mailler.** Sur six pages, il n'y a pas de circulation à organiser. Le maillage donne de la valeur à ce qui existe déjà ; il vient après le contenu, pas avant.

## Comment auditer le vôtre

Trois questions suffisent à poser le diagnostic, et elles se répondent sur n'importe quel site.

1. **Quelles pages vous rapportent réellement, et à combien de clics de l'accueil se trouvent-elles ?**
2. **Combien de liens entrants reçoit chacune de vos pages, et d'où viennent-ils ?** C'est cette mesure qui révèle le déséquilibre de la règle 6.
3. **Quelles pages ne reçoivent aucun lien, et lesquelles sont orphelines par choix ?**

Sur un site d'une vingtaine de pages, la carte se dessine à la main en une heure. Au-delà, il vaut mieux la faire produire : n'importe quel outil d'exploration, ou un modèle de langage à qui vous demandez de parcourir le site et de sortir, pour chaque page, ses liens entrants, ses liens sortants et le texte exact de chaque lien.

Un réflexe à garder dans les deux cas : vérifiez une page à la main avant de faire confiance au reste du tableau. Ouvrez-la, comptez ses liens sortants, comparez. Si le compte tombe juste, le reste est exploitable ; sinon, l'exploration a manqué une partie de votre site. Cette vérification est aussi ce qui distingue un rapport utile d'un rapport décoratif, au même titre que pour [le rapport SEO mensuel](/blog/rapport-seo-mensuel-que-doit-il-contenir).

## Ce que ça donne sur un vrai site

Les chiffres qui suivent viennent d'un site mis en ligne le 4 juin 2026 et audité le 21 août 2026, construit publiquement dans une série vidéo.

- **59 pages** et **481 liens internes contextuels**
- **3 pages orphelines**, dont aucune n'a vocation à être publique
- **2 pages** portant des liens cassés
- une page centrale du groupe le plus important : **8 liens entrants, 11 liens sortants**
- les contenus les plus faibles du groupe : **1, 2 et 3 liens entrants**
- **135 liens** des articles vers les pages principales, **6 liens** dans l'autre sens

Vu de loin, ce maillage est propre : peu d'orphelines, presque pas de liens cassés, un volume de liens contextuels correct pour la taille du site. Le seul vrai problème était invisible tant qu'on regardait page par page. Il n'apparaît que sur la carte d'ensemble, et c'est exactement pour cette raison qu'il faut la produire avant de toucher à quoi que ce soit.

## Par où commencer cette semaine

Ouvrez vos trois pages les plus rentables et regardez vers quels contenus elles renvoient. Si la réponse est « aucun », vous n'avez pas besoin d'un audit complet pour savoir quoi faire : vous venez de trouver votre chantier.

Le reste suit dans l'ordre des règles : l'accueil qui pointe vers ce qui rapporte, les ancres qui décrivent, les groupes de pages qui se referment, puis le ménage des orphelines et des liens cassés.

Et si vous préférez que quelqu'un regarde la carte de votre site avant que vous y touchiez, [parlons de votre projet](/contact). C'est en général une heure de discussion qui évite trois mois de contenu qui ne circule nulle part.
