// src/data/villes-frontalieres.ts
// Données structurées pour les pages programmatic SEO
// Villes frontalières françaises (Haute-Savoie / Pays de Gex) où Jon Labs intervient
// depuis Genève. Chaque entrée alimente /developpement-web/[ville].

export interface VilleFAQ {
  question: string;
  answer: string;
}

/** Bloc « vendre en ligne » — intention e-commerce, ancrée dans le tissu local.
 *  Aucun fait inventé : les éléments cités (Stripe, TWINT, gestion des stocks,
 *  sur devis, seuils Webflow Ecommerce, délai 4-6 semaines) proviennent
 *  exclusivement de /services/creation-site-web et /services/developpeur-webflow. */
export interface VilleEcommerce {
  /** 2 phrases : pourquoi la vente en ligne se pose DANS CETTE VILLE */
  intro: string;
  /** 3 points concrets (offre réelle, seuils, arbitrage outil) */
  points: string[];
}

export interface VilleData {
  /** slug utilisé en URL : /developpement-web/{slug} */
  slug: string;
  /** nom court de la ville, ex. "Annemasse" */
  nom: string;
  /** nom complet pour SEO, ex. "Annemasse (Haute-Savoie, 74)" */
  nomComplet: string;
  /** population approximative (entier) */
  population: number;
  /** population formatée pour l'UI, ex. "environ 36 000" */
  populationLabel: string;
  /** distance routière depuis Genève centre */
  distanceGeneve: string;
  /** temps de trajet depuis Genève (voiture / TC) */
  tempsTrajetGeneve: string;
  /** description courte (1-2 phrases) */
  description: string;
  /** contexte économique local (2-3 phrases) */
  contexteEconomique: string;
  /** publics cibles spécifiques */
  publicCible: string[];
  /** spécificités locales (3-4 items) */
  specificites: string[];
  /** exemples concrets de projets adaptés */
  exemplesProjets: string[];
  /** FAQ ville-spécifique (4-5 Q/R uniques) */
  faqs: VilleFAQ[];
  /** mot-clé SEO principal */
  motCleSEO: string;
  /** angle d'approche unique pour le hero */
  angleHero: string;
  /** slugs des villes proches pour maillage interne */
  voisines: string[];

  // ── SEO par ville (alignés sur la demande réelle mesurée en GSC) ──────────
  // Avant : title/description générés centralement dans [ville].astro → 5 metas
  // quasi identiques, 1'210 impressions et 0 clic sur 4 semaines. Chaque ville
  // porte désormais SES requêtes. Le suffixe « | Jonlabs » est réapposé par
  // Layout.astro : `metaTitle` doit rester ≤ 60 car. suffixe compris.
  //
  // Cadrage « agence » : les requêtes contiennent « agence », Jon Labs n'en est
  // pas une. Le terme est donc utilisé comme ce dont on est l'ALTERNATIVE,
  // jamais comme revendication d'identité (même règle que le silo mobile,
  // cf. src/data/villes-mobile.ts). Formulation différente par ville pour ne pas
  // servir cinq fois la même phrase en SERP.
  /** title complet de la page (≤ 60 car., suffixe marque compris) */
  metaTitle?: string;
  /** meta description unique et locale (≤ 158 car.) */
  metaDescription?: string;
  /** amorce du H1, avant le nom de ville en Instrument Serif.
   *  Fallback : « Développeur web sur mesure à ». */
  h1Lead?: string;
  /** bloc e-commerce local (intention totalement absente des pages avant ce jour) */
  ecommerce?: VilleEcommerce;
}

export const villesFrontalieres: VilleData[] = [
  {
    slug: 'annemasse',
    nom: 'Annemasse',
    nomComplet: 'Annemasse (Haute-Savoie, 74)',
    population: 36000,
    populationLabel: 'environ 36 000',
    distanceGeneve: '8 km',
    tempsTrajetGeneve: '15 min en voiture, 20 min en Léman Express',
    description: "Annemasse est la principale agglomération frontalière de Haute-Savoie, deuxième ville du département après Annecy. Elle constitue le cœur économique du Genevois français et accueille des dizaines de milliers de frontaliers.",
    contexteEconomique: "Le tissu économique d'Annemasse mélange commerces de centre-ville, services, PME industrielles, professions libérales et de nombreux frontaliers travaillant à Genève. L'arrivée du Léman Express en 2019 a structurellement renforcé la zone : trajets directs vers Genève Cornavin en 20 minutes, ce qui change l'attente des visiteurs en ligne. Les clients d'Annemasse fréquentent quotidiennement des sites suisses et comparent automatiquement aux standards genevois.",
    publicCible: [
      "commerces locaux du centre-ville",
      "PME industrielles et bâtiment",
      "professions libérales (médecins, avocats, notaires)",
      "artisans et indépendants frontaliers"
    ],
    specificites: [
      "Léman Express direct vers Cornavin : audience habituée aux standards suisses",
      "Forte densité de frontaliers : facturation EUR mais devis souvent comparé en CHF",
      "Concurrence visible des prestataires genevois et lyonnais",
      "Zone bilingue de fait : pages FR-FR mais terminologie suisse acceptée"
    ],
    exemplesProjets: [
      "Site vitrine d'un cabinet médical avec prise de rendez-vous en ligne",
      "Refonte e-commerce d'un commerce du centre-ville (chaussures, optique)",
      "Site multilingue FR/EN pour entreprise transfrontalière",
      "Outil interne de gestion pour PME industrielle de la zone Ziplo"
    ],
    faqs: [
      {
        question: "Pourquoi choisir un développeur basé à Genève pour un projet à Annemasse ?",
        answer: "Annemasse est à 8 km de Genève centre, soit 15 minutes en voiture ou 20 minutes en Léman Express. Concrètement, je peux passer dans tes locaux le matin et rentrer travailler à Chêne-Bougeries l'après-midi. Au-delà de la proximité géographique, ton audience est déjà partiellement suisse (frontaliers, clients du Genevois) : un développeur qui maîtrise les codes des deux côtés de la frontière (RGPD côté France, LPD côté Suisse, double affichage de prix CHF/EUR) évite les angles morts. La plupart des prestataires lyonnais ou parisiens facturent un déplacement, ignorent la spécificité frontalière et travaillent uniquement en EUR."
      },
      {
        question: "Tes tarifs sont en CHF, je peux quand même travailler avec toi depuis Annemasse ?",
        answer: "Oui, sans problème. Je facture en CHF par défaut mais j'émets des factures en EUR pour les clients français qui le préfèrent. Le taux de change appliqué est celui du jour de la facture, et le devis affiche les deux montants en parallèle pour que tu valides en pleine connaissance de cause. Le paiement se fait par virement SEPA (EUR) ou IBAN suisse (CHF). Pas de frais de change cachés."
      },
      {
        question: "Mon site doit-il viser les Genevois ou rester local Annemasse ?",
        answer: "Ça dépend de ton métier. Un commerce de centre-ville cible avant tout les habitants d'Annemasse, Ville-la-Grand, Gaillard et Étrembières — la fiche Google Business Profile et le SEO local sont alors prioritaires. Un cabinet médical ou un service B2B peut viser tout le bassin transfrontalier (les frontaliers représentent un tiers des actifs). Pour ces cas, je structure le site avec des pages séparées par zone (page Annemasse, page Genève) plutôt qu'une page fourre-tout qui dilue le SEO."
      },
      {
        question: "Combien de temps pour livrer un site à Annemasse ?",
        answer: "Mêmes délais que pour un client genevois : 3 à 4 semaines pour un site vitrine, 6 à 8 semaines pour un site avec blog et intégrations, 2 à 3 mois pour une application. La proximité d'Annemasse facilite les ateliers en présentiel quand le projet le justifie (workshop de cadrage, séance photo, formation à la livraison) sans que ça allonge le planning."
      },
      {
        question: "Tu travailles avec quelles entreprises à Annemasse ?",
        answer: "Le profil typique de mes clients du Genevois français : PME entre 3 et 50 personnes, commerces installés, professions libérales et indépendants frontaliers. Pas de très grosses structures industrielles avec service informatique interne, pas non plus de microsites à 500 EUR. Le ticket d'entrée se situe autour de 1'500 EUR pour un site vitrine et grimpe selon la complexité (e-commerce, multilingue, espace client, intégrations métier)."
      },
      {
        question: "Je tiens un commerce à Annemasse, comment je passe à la vente en ligne ?",
        answer: "On commence par regarder ton catalogue, pas l'outil. Si tu vends moins d'une centaine de références sans variantes compliquées, une boutique Webflow Ecommerce avec paiement Stripe fait le travail et tu la gères toi-même après la formation. Dès qu'on parle de click & collect entre le magasin du centre et un stock déporté, d'abonnements ou de tailles × couleurs × stocks, Webflow bloque : on part alors sur une boutique sur-mesure ou une intégration adaptée. Dans les deux cas la boutique est chiffrée sur devis, et une boutique demande plutôt 4 à 6 semaines qu'un simple site vitrine."
      },
      {
        question: "Je cherche une agence web à Annemasse — tu corresponds ?",
        answer: "Non, et autant le dire tout de suite : je suis développeur freelance, pas une agence. Il n'y a ni commercial, ni chef de projet, ni équipe de trois personnes derrière moi. Tu parles directement à celui qui écrit le code et qui livre. Ce que tu perds : une structure capable d'absorber dix chantiers en parallèle. Ce que tu gagnes : une décision prise dans la journée, un seul interlocuteur du devis à la mise en ligne, et un budget qui ne finance pas des bureaux."
      }
    ],
    motCleSEO: 'développement web Annemasse',
    angleHero: "Sites pro pour PME, commerces et indépendants frontaliers, à 15 minutes de Genève centre.",
    voisines: ['gaillard', 'ville-la-grand', 'saint-julien-en-genevois'],

    metaTitle: 'Boutique en ligne et site web à Annemasse | Jonlabs',
    metaDescription:
      "L'alternative à l'agence pour ouvrir ta boutique en ligne ou refaire ton site à Annemasse : freelance à 15 min de Genève, devis en EUR ou en CHF.",
    h1Lead: 'Boutique en ligne et site web à',
    ecommerce: {
      intro:
        "Les commerces du centre d'Annemasse servent déjà une clientèle qui traverse la frontière tous les jours, dans les deux sens. Une boutique en ligne prolonge la vitrine physique et le rayon d'action au-delà du Léman Express — elle ne la remplace pas.",
      points: [
        "Boutique en ligne, paiement sécurisé (Stripe, TWINT) et gestion des stocks : chiffré sur devis, selon le catalogue.",
        "Moins de 100 produits, peu de variantes, marché suisse ou zone unique : Webflow Ecommerce suffit largement.",
        "Click & collect, abonnements, tailles × couleurs × stocks : Webflow montre ses limites, on passe au sur-mesure.",
      ],
    },
  },
  {
    slug: 'gaillard',
    nom: 'Gaillard',
    nomComplet: 'Gaillard (Haute-Savoie, 74)',
    population: 12000,
    populationLabel: 'environ 12 000',
    distanceGeneve: '5 km',
    tempsTrajetGeneve: '12 min en voiture, 15 min en bus TPG/TAC',
    description: "Gaillard est une commune frontalière directement collée à Genève, séparée par la simple barrière douanière de Moillesulaz. Elle fait partie intégrante de l'agglomération genevoise sans en être suisse.",
    contexteEconomique: "Tissu économique mixte : commerces de proximité, restauration, PME industrielles dans la zone d'activité de Châteauvieux, et une forte densité d'artisans qui interviennent côté Genève comme côté France. La frontière directe avec Genève fait de Gaillard une porte d'entrée commerciale : beaucoup de Suisses traversent pour faire leurs courses, et beaucoup d'entreprises gaillardes facturent une clientèle des deux côtés.",
    publicCible: [
      "commerces de proximité (épicerie, restauration, garages)",
      "artisans du bâtiment intervenant à Genève",
      "PME industrielles de la zone Châteauvieux",
      "indépendants frontaliers"
    ],
    specificites: [
      "Frontière directe Moillesulaz : 5 minutes à pied de Genève",
      "Clientèle suisse fréquente : double affichage CHF/EUR souvent attendu",
      "TPG ligne 61 connecte directement à la gare de Genève",
      "Petite ville mais fort trafic transfrontalier quotidien"
    ],
    exemplesProjets: [
      "Site vitrine d'un garage automobile avec prise de RDV",
      "E-commerce léger pour une épicerie spécialisée du centre",
      "Site bilingue FR/EN pour artisan intervenant à Genève",
      "Refonte du site d'une PME industrielle de Châteauvieux"
    ],
    faqs: [
      {
        question: "Gaillard est à 5 km de Genève, ça change quoi pour mon site ?",
        answer: "Ça change que ta clientèle potentielle est moitié française, moitié suisse. La douane de Moillesulaz se traverse à pied en 30 secondes, et beaucoup de Genevois font leurs courses, mangent ou se garent à Gaillard. Concrètement, ton site doit afficher proprement les prix dans les deux monnaies, accepter idéalement TWINT en plus de la CB, et apparaître à la fois sur Google.fr et Google.ch. Un développeur basé à Genève qui facture en CHF maîtrise nativement ces sujets."
      },
      {
        question: "Je suis artisan à Gaillard et j'interviens des deux côtés de la frontière, comment l'afficher ?",
        answer: "Le piège classique, c'est de créer une page fourre-tout 'zone d'intervention' qui mélange tout. Mieux : une page dédiée à Gaillard et au Genevois français, une autre dédiée à Genève et aux communes suisses limitrophes (Thônex, Chêne-Bourg, Vésenaz). Chaque page parle directement à son audience, mentionne les prix dans la bonne monnaie et capte le SEO local des deux côtés. Le site reste un seul domaine — ce sont juste les pages internes qui sont localisées."
      },
      {
        question: "Combien coûte un site web à Gaillard comparé à Genève ?",
        answer: "Le coût du développement ne dépend pas de la ville, il dépend du périmètre fonctionnel. Pour un site vitrine équivalent, un client de Gaillard paie environ 1'550 EUR (équivalent CHF 1'490). Le différentiel réel se situe surtout sur la TVA : facturation TVA française à 20% pour les sociétés gaillardes, pas de TVA pour les non-assujettis suisses. Je gère les deux cas avec des factures conformes."
      },
      {
        question: "Je peux te rencontrer à Gaillard ou seulement en visio ?",
        answer: "Les deux. Gaillard est à 12 minutes en voiture de chez moi à Chêne-Bougeries, je peux donc venir sur place pour le brief initial, les ateliers de cadrage ou la formation à la livraison. Pour les itérations en cours de projet (validation de maquettes, démos), on travaille en visio avec partage d'écran : c'est plus efficace, et tu n'as pas à bloquer une demi-journée."
      },
      {
        question: "Les clients suisses qui visitent Gaillard cherchent quoi en ligne ?",
        answer: "D'après mes propres clients gaillardes : essentiellement les horaires, les prix en CHF, les places de parking et les conditions de paiement (CB suisse acceptée ? TWINT ?). C'est court, c'est pragmatique, et c'est rarement bien fait sur les sites de PME locales. Un site qui répond à ces 4 questions dès le hero capte une part disproportionnée de la clientèle transfrontalière."
      },
      {
        question: "Ma boutique en ligne doit encaisser des Suisses et des Français, c'est possible ?",
        answer: "Oui, mais c'est précisément ce qui décide de l'outil. Webflow Ecommerce est parfait tant que tu restes sur un catalogue simple, une zone unique et un paiement par carte via Stripe. À Gaillard, la moitié de la clientèle arrive de Moillesulaz : dès que tu veux TWINT, un affichage en deux monnaies ou des règles de TVA différentes des deux côtés, Webflow atteint sa limite. On bascule alors sur une boutique sur-mesure ou une intégration adaptée (Stripe, Snipcart, solution headless), avec gestion des stocks — le tout chiffré sur devis plutôt qu'au forfait."
      },
      {
        question: "Freelance ou agence web pour un projet à Gaillard ?",
        answer: "Je ne suis pas une agence, donc la comparaison est simple : chez moi il n'y a personne entre toi et le code. Pas de commercial pour prendre le brief, pas de chef de projet pour le retransmettre. Sur un site de commerce ou d'artisan gaillard, ça se voit surtout sur le rythme : une question posée le matin est arbitrée l'après-midi, et je peux passer sur place — la douane est à cinq minutes. Si ton projet demande une équipe pluridisciplinaire à plein temps pendant six mois, une agence sera plus adaptée, et je te le dirai."
      }
    ],
    motCleSEO: 'développement web Gaillard',
    angleHero: "Sites optimisés pour la clientèle franco-suisse, à 5 minutes de la douane de Moillesulaz.",
    voisines: ['annemasse', 'ville-la-grand', 'saint-julien-en-genevois'],

    metaTitle: 'Site web et e-commerce à Gaillard, sans agence | Jonlabs',
    metaDescription:
      "En direct avec le développeur, sans agence entre nous : site vitrine, boutique en ligne et refonte à Gaillard, à 5 km de Genève. Devis en EUR ou en CHF.",
    h1Lead: 'Développement web et boutique en ligne à',
    ecommerce: {
      intro:
        "À Gaillard, une boutique en ligne encaisse par définition des deux côtés de la douane. Le choix de l'outil ne se joue donc pas sur le design mais sur le paiement : carte, TWINT, double affichage CHF/EUR, TVA française ou pas.",
      points: [
        "Catalogue simple, zone unique, paiement par carte via Stripe : Webflow Ecommerce fait le travail.",
        "TWINT ou moyens de paiement suisses spécifiques, multi-devises, règles de TVA croisées : Webflow ne suit plus.",
        "Dans ce cas, boutique sur-mesure ou intégration (Stripe, Snipcart, headless), avec gestion des stocks — sur devis.",
      ],
    },
  },
  {
    slug: 'ville-la-grand',
    nom: 'Ville-la-Grand',
    nomComplet: 'Ville-la-Grand (Haute-Savoie, 74)',
    population: 8700,
    populationLabel: 'environ 8 700',
    distanceGeneve: '7 km',
    tempsTrajetGeneve: '14 min en voiture, 20 min en transports',
    description: "Ville-la-Grand est une commune résidentielle et économique de l'agglomération annemassienne, accolée à Annemasse au nord. Sa position frontalière directe avec Thônex en fait un pôle d'activité tourné vers Genève.",
    contexteEconomique: "Tissu mixte résidentiel et économique : zones d'activité Mont Blanc et Borly attirant PME industrielles et services, commerces de proximité, et une population de cadres et frontaliers. La commune est devenue un pôle attractif pour les sociétés qui veulent une adresse côté France à proximité immédiate de Genève sans subir les tarifs immobiliers du centre d'Annemasse.",
    publicCible: [
      "PME industrielles et services des zones Mont Blanc / Borly",
      "professions libérales installées en zone résidentielle",
      "commerces de proximité",
      "consultants et cadres frontaliers indépendants"
    ],
    specificites: [
      "Zones d'activité dynamiques (Mont Blanc, Borly) : public B2B",
      "Frontière directe avec Thônex (GE) : trafic de Genevois quotidien",
      "Population de cadres : exigence forte sur la qualité visuelle",
      "Commune voisine d'Annemasse : SEO local à mutualiser"
    ],
    exemplesProjets: [
      "Site corporate pour PME industrielle de la zone Borly",
      "Site vitrine pour cabinet de conseil installé en zone résidentielle",
      "Plateforme B2B pour société de services aux entreprises",
      "Refonte SEO d'un commerce de centre Ville-la-Grand"
    ],
    faqs: [
      {
        question: "Ville-la-Grand ou Annemasse, ça change quelque chose pour mon site ?",
        answer: "Pour le SEO, oui : les deux communes sont distinctes sur Google. Si ton entreprise est domiciliée à Ville-la-Grand, ta fiche Google Business Profile remontera prioritairement sur les recherches 'Ville-la-Grand' et secondairement sur 'Annemasse'. Pour ne pas rater de trafic, je travaille les deux requêtes dans le contenu (page d'accueil, page contact, mentions sur la zone d'activité). C'est un gain SEO simple que beaucoup de prestataires zappent."
      },
      {
        question: "Mon entreprise est dans la zone Borly ou Mont Blanc, ça t'intéresse ?",
        answer: "Oui, c'est même un profil que je connais bien. Les zones d'activité de Ville-la-Grand concentrent des PME B2B (services aux entreprises, industrie légère, négoce) qui ont besoin d'un site corporate solide : présentation des activités, formulaire de contact qualifié, parfois un espace client ou une intégration CRM. Le ticket moyen sur ce type de projet se situe entre CHF 4'000 et CHF 8'000 selon le périmètre."
      },
      {
        question: "Tu peux te déplacer dans nos locaux à Ville-la-Grand ?",
        answer: "Oui. Ville-la-Grand est à 14 minutes en voiture depuis Chêne-Bougeries, et la zone Borly est très facile d'accès depuis l'autoroute. Je me déplace sans frais supplémentaires pour le brief initial et la livraison finale. Pour les itérations intermédiaires (validation de maquettes, démos, ajustements), on reste en visio avec accès staging — c'est plus rapide pour tout le monde."
      },
      {
        question: "Je suis cadre frontalier et je veux lancer une activité en parallèle, tu peux m'aider ?",
        answer: "C'est un cas classique à Ville-la-Grand : cadres employés à Genève qui montent une activité de conseil ou un produit en parallèle. Sur ce type de projet, je commence souvent par une landing page de validation (CHF 800–1'200) avant d'investir dans un site complet. L'objectif est de tester la demande réelle avant d'engager 4'000 EUR de développement. Si la traction est là, on bascule sur un vrai site."
      },
      {
        question: "Vous gérez l'hébergement et le nom de domaine depuis la France ?",
        answer: "Oui. Pour les clients de Ville-la-Grand, j'utilise généralement un nom de domaine en .fr (ou .com selon ton activité) et un hébergement Vercel ou Cloudflare avec serveurs européens — tu restes en conformité RGPD sans effort. Si tu as déjà un domaine chez OVH ou Gandi, je peux récupérer la main et migrer proprement le site sans interruption ni perte de SEO."
      },
      {
        question: "On est en B2B dans la zone Borly, la vente en ligne a-t-elle un sens pour nous ?",
        answer: "Souvent oui, mais pas sous la forme qu'on imagine. Les PME B2B de Ville-la-Grand vendent rarement des palettes en ligne ; en revanche elles vendent très bien des prestations, des formations ou des produits digitaux — et ça, c'est exactement le terrain où une boutique légère fonctionne : catalogue restreint, paiement par carte via Stripe, aucune logistique. On peut aussi s'arrêter à un catalogue produits consultable avec demande de devis, sans encaissement. La boutique est chiffrée sur devis, avec gestion des stocks quand il y a du stock à gérer."
      },
      {
        question: "Vaut-il mieux passer par une agence web pour une PME de Ville-la-Grand ?",
        answer: "Tout dépend de ce que tu cherches vraiment. Je suis développeur freelance, pas une agence : pas d'équipe pluridisciplinaire, pas de service commercial, pas de facturation pour le temps passé à coordonner en interne. Sur un site corporate de PME B2B — présentation des activités, formulaire qualifié, parfois espace client ou intégration CRM — cette structure intermédiaire ne sert pas à grand-chose : elle rallonge les allers-retours. Tu traites en direct avec celui qui construit, et la zone Borly est à quatorze minutes de chez moi."
      }
    ],
    motCleSEO: 'développement web Ville-la-Grand',
    angleHero: "Sites corporate pour PME des zones d'activité Mont Blanc et Borly, à deux pas de Thônex.",
    voisines: ['annemasse', 'gaillard', 'saint-julien-en-genevois'],

    metaTitle: 'Création de site internet à Ville-la-Grand | Jonlabs',
    metaDescription:
      "Sans intermédiaire ni agence : création de site internet, site corporate B2B et vente en ligne pour les PME des zones Mont Blanc et Borly, à Ville-la-Grand.",
    h1Lead: 'Création de site internet à',
    ecommerce: {
      intro:
        "Les zones Mont Blanc et Borly concentrent du B2B : services aux entreprises, industrie légère, négoce. La vente en ligne y prend rarement la forme d'un grand magasin — plutôt celle d'un catalogue propre, ou d'une caisse pour des prestations et des formations.",
      points: [
        "Vente de services, de formations ou de produits digitaux : catalogue restreint et paiement Stripe, sans logistique.",
        "Catalogue produits consultable avec demande de devis, quand l'encaissement en ligne n'a pas de sens en B2B.",
        "Boutique complète avec gestion des stocks et paiement sécurisé (Stripe, TWINT) : chiffrée sur devis.",
      ],
    },
  },
  {
    slug: 'saint-julien-en-genevois',
    nom: 'Saint-Julien-en-Genevois',
    nomComplet: 'Saint-Julien-en-Genevois (Haute-Savoie, 74)',
    population: 14500,
    populationLabel: 'environ 14 500',
    distanceGeneve: '11 km',
    tempsTrajetGeneve: '20 min en voiture, 30 min en bus TPG ligne F',
    description: "Saint-Julien-en-Genevois est sous-préfecture de Haute-Savoie et l'une des principales communes frontalières du sud genevois. La ville accueille un tissu industriel notable, dominé par la pharmaceutique et les services aux entreprises.",
    contexteEconomique: "Saint-Julien combine un centre-ville dynamique, une zone industrielle historique et la présence de groupes pharmaceutiques internationaux dont le siège ou des sites de production sont implantés depuis des décennies. La commune attire aussi de plus en plus de PME tertiaires qui souhaitent une adresse française tout en étant à 20 minutes du centre-ville de Genève. Sous-préfecture oblige, l'écosystème institutionnel local (chambre de commerce, services de l'État) est dense.",
    publicCible: [
      "PME industrielles et pharmaceutiques",
      "commerces du centre-ville et de la zone Cervonnex",
      "professions libérales (notaires, avocats, médecins)",
      "associations et structures institutionnelles"
    ],
    specificites: [
      "Sous-préfecture : densité d'institutions et de professions réglementées",
      "Pôle pharmaceutique historique : exigence qualité sur les sites corporate",
      "Plus éloignée de Genève (11 km) mais bien desservie par le TPG ligne F",
      "Marché plus mûr et concurrentiel que les autres communes frontalières"
    ],
    exemplesProjets: [
      "Site corporate pour laboratoire pharmaceutique avec contenu réglementé",
      "Refonte du site d'un cabinet de notaires avec espace client sécurisé",
      "Site vitrine d'une PME industrielle exportatrice (FR/EN/DE)",
      "Plateforme événementielle pour association professionnelle"
    ],
    faqs: [
      {
        question: "Tu travailles avec des laboratoires pharmaceutiques de Saint-Julien ?",
        answer: "Oui, j'ai déjà accompagné des PME du secteur pharma sur leurs sites corporate. La spécificité du secteur, c'est la rigueur réglementaire : mentions légales étendues, conformité RGPD stricte, parfois conformité HIPAA si activité aux US, hébergement sur serveurs européens, traçabilité des modifications. Je travaille avec des stacks (Astro, Next.js, hébergement Vercel/Cloudflare EU) qui couvrent ces contraintes nativement, sans plugins WordPress fragiles."
      },
      {
        question: "Saint-Julien est à 20 minutes de Genève, tu te déplaces facilement ?",
        answer: "Oui, c'est environ 30 minutes en voiture depuis Chêne-Bougeries via Bardonnex. Pour un brief initial ou un atelier de cadrage, je viens sans frais supplémentaires. Pour des projets longs ou volumineux (refonte corporate, plateforme métier), on prévoit souvent 2 à 3 visites sur place plus des points hebdo en visio."
      },
      {
        question: "Je gère une étude notariale à Saint-Julien, tu fais ce genre de site ?",
        answer: "Oui. Les études notariales et cabinets d'avocats ont des besoins assez stables : présentation des associés, domaines de compétence, espace client sécurisé pour le partage de documents, formulaire de contact qualifié, blog d'actualités juridiques pour le SEO. Le ticket moyen se situe entre CHF 3'500 et CHF 6'000 selon le périmètre, avec un focus particulier sur la confidentialité des échanges."
      },
      {
        question: "Mon entreprise exporte en Suisse et en Allemagne, je dois faire un site multilingue ?",
        answer: "Si l'export est une part significative de ton chiffre d'affaires, oui — un site FR/EN/DE est presque indispensable. Je gère le multilingue avec des stacks modernes (Astro i18n, Next.js Intl) qui génèrent des URL distinctes par langue (/fr/, /en/, /de/), des hreflang propres et un SEO indépendant par marché. Important : ne pas utiliser de traduction automatique côté navigateur, ça pénalise le référencement."
      },
      {
        question: "Combien coûte un site corporate pour une PME industrielle à Saint-Julien ?",
        answer: "La fourchette typique pour une PME industrielle de 10 à 50 personnes : CHF 4'000 à CHF 8'000 (équivalent EUR 4'150 à 8'300). Ça inclut un site sur-mesure de 8 à 15 pages, un blog ou actualités, un formulaire de contact qualifié, l'optimisation SEO de base et la mise en ligne. Les options qui font monter le devis : multilingue, espace client, intégration CRM/ERP, certifications spécifiques au secteur."
      },
      {
        question: "Je veux créer une boutique en ligne à Saint-Julien, tu fais ça ?",
        answer: "Oui, et la première question que je pose porte sur le catalogue, pas sur la plateforme. Un commerce du centre-ville ou de la zone Cervonnex avec quelques dizaines de références, peu de variantes et un paiement par carte via Stripe tient très bien sur Webflow Ecommerce — tu gères ensuite tes produits toi-même. Une PME industrielle avec un catalogue lourd, des variantes croisées ou des règles de TVA différentes selon le pays sort du cadre : on part sur une boutique sur-mesure ou une intégration. La boutique est chiffrée sur devis, et il faut compter 4 à 6 semaines plutôt que les 3 à 4 d'un site vitrine."
      },
      {
        question: "Agence de création de site ou freelance à Saint-Julien ?",
        answer: "Soyons clairs : je suis développeur freelance, pas une agence, et Saint-Julien est le marché le plus concurrentiel du Genevois français sur ce terrain. La différence tient au nombre de personnes entre toi et le code. Chez un prestataire structuré, le brief passe par un commercial puis par un chef de projet ; ici tu le donnes à celui qui va le développer. Pour une étude notariale, un cabinet ou une PME pharma qui a des contraintes de confidentialité, ça veut aussi dire une seule personne à qui confier tes documents, pas une chaîne."
      }
    ],
    motCleSEO: 'développement web Saint-Julien-en-Genevois',
    angleHero: "Sites corporate exigeants pour PME pharma, industrielles et professions réglementées du sud genevois.",
    voisines: ['annemasse', 'gaillard', 'la-roche-sur-foron'],

    metaTitle: 'Création site internet et e-commerce Saint-Julien | Jonlabs',
    metaDescription:
      "Freelance, pas une agence : création de site internet, boutique en ligne et référencement local à Saint-Julien-en-Genevois, à 11 km de Genève. CHF ou EUR.",
    h1Lead: 'Création de site internet et e-commerce à',
    ecommerce: {
      intro:
        "Entre les commerces du centre, la zone de Cervonnex et les PME industrielles qui présentent un catalogue, la vente en ligne ne veut pas dire la même chose selon qui la demande à Saint-Julien. L'outil se choisit après le catalogue, jamais avant.",
      points: [
        "Quelques dizaines de références, peu de variantes, paiement Stripe : Webflow Ecommerce et tu gères tes produits seul.",
        "Catalogue lourd, variantes croisées, multi-devises ou TVA internationale : boutique sur-mesure ou intégration.",
        "Boutique chiffrée sur devis, avec gestion des stocks et paiement sécurisé (Stripe, TWINT) — compter 4 à 6 semaines.",
      ],
    },
  },
  {
    slug: 'la-roche-sur-foron',
    nom: 'La Roche-sur-Foron',
    nomComplet: 'La Roche-sur-Foron (Haute-Savoie, 74)',
    population: 12000,
    populationLabel: 'environ 12 000',
    distanceGeneve: '25 km',
    tempsTrajetGeneve: '30 min en voiture, 40 min en Léman Express',
    description: "La Roche-sur-Foron est une ville historique du Faucigny, au sud-est de Genève. Plus éloignée de la frontière que les autres villes du Genevois français, elle conserve une identité industrielle et commerciale propre, avec un centre médiéval reconnu.",
    contexteEconomique: "La Roche-sur-Foron a une économie ancrée localement : industrie du décolletage et de la mécanique de précision (héritage de la vallée de l'Arve), artisanat, commerces de centre-ville et tourisme patrimonial. La ville bénéficie de la gare Léman Express qui la connecte à Genève en 40 minutes, ce qui élargit progressivement son bassin de clientèle frontalière. Le tissu de PME industrielles est plus traditionnel qu'à Annemasse mais en pleine modernisation.",
    publicCible: [
      "PME industrielles (décolletage, mécanique de précision)",
      "artisans et commerces du centre médiéval",
      "acteurs du tourisme patrimonial",
      "indépendants tentés par un cadre de vie plus calme"
    ],
    specificites: [
      "Distance plus importante (25 km) : visites en présentiel moins fréquentes",
      "Tissu industriel décolletage / mécanique : sites souvent vétustes",
      "Centre historique attractif : potentiel touristique sous-exploité en ligne",
      "Léman Express directe : audience suisse en croissance"
    ],
    exemplesProjets: [
      "Refonte du site d'une entreprise de décolletage (catalogue produits, certifications)",
      "Site vitrine pour artisan ou commerce du centre médiéval",
      "Plateforme touristique présentant le patrimoine local",
      "Outil B2B pour fournisseur industriel de la vallée de l'Arve"
    ],
    faqs: [
      {
        question: "La Roche-sur-Foron est plus loin de Genève, comment on collabore ?",
        answer: "La Roche est à 30 minutes en voiture ou 40 minutes en Léman Express depuis Genève. C'est plus loin qu'Annemasse, donc je privilégie une organisation 80% à distance et 20% en présentiel : un déplacement initial pour le brief, un déplacement final pour la livraison et la formation, et tout le reste en visio. La qualité du suivi ne change pas — c'est juste plus efficace pour les deux parties."
      },
      {
        question: "Mon entreprise fait du décolletage, mon site n'a jamais été refait, c'est récupérable ?",
        answer: "Oui, dans 90% des cas. Les sites des PME industrielles de la vallée de l'Arve datent souvent de 2010-2015, avec des CMS abandonnés ou du HTML statique non maintenu. Le bon move n'est généralement pas de réparer l'existant mais de repartir d'une stack moderne (Astro ou Next.js) en récupérant ton contenu existant : textes, photos produits, certifications. Compter 6 à 8 semaines pour une refonte complète, avec un budget entre CHF 3'500 et CHF 6'500 selon la complexité du catalogue."
      },
      {
        question: "Je tiens un commerce dans le centre médiéval, ça vaut le coup d'avoir un site ?",
        answer: "Ça dépend de ton métier. Pour un commerce alimentaire ou un artisan dont la clientèle est 100% locale, une fiche Google Business Profile bien tenue suffit souvent. Pour un commerce avec un positionnement spécifique (créateurs, antiquités, gastronomie de niche, hébergement touristique), un site valorise nettement la marque et capte la clientèle suisse de passage. Je propose dans ce cas un site simple à 1'500 EUR plutôt qu'un site complet à 4'000."
      },
      {
        question: "Je suis frontalier qui rentre à La Roche le soir, tu peux travailler avec moi sur un projet perso ?",
        answer: "Oui, c'est même un cas fréquent : frontalier salarié à Genève qui veut lancer un side-project (e-commerce, plateforme, application). Sur ces projets, je travaille en soirée ou le samedi pour les démos, parce que tu n'es pas disponible en journée. Le ticket varie énormément selon l'idée — d'une landing page de validation (CHF 800) à un MVP complet (CHF 4'500 et plus). Premier échange gratuit pour cadrer."
      },
      {
        question: "Tu as déjà travaillé avec des entreprises de la vallée de l'Arve ?",
        answer: "Oui, sur des projets de refonte pour PME industrielles. Le profil typique : 20-80 personnes, exportant en Suisse, en Allemagne et parfois aux US, avec un site existant qui ne reflète plus le niveau réel de l'entreprise. Le défi technique est rarement la complexité, c'est plutôt la mise à jour du contenu (catalogues produits, certifications ISO, références clients) et la maintenance dans le temps. Je livre toujours avec une formation pour que ton équipe puisse mettre à jour le site sans dépendre de moi."
      },
      {
        question: "Vendre en ligne depuis La Roche-sur-Foron, ça vaut le coup ?",
        answer: "Ça dépend de ce que tu vends. Pour une entreprise de décolletage, la vente directe a rarement du sens : ce qui rapporte, c'est un catalogue produits consultable, avec les certifications et une demande de devis, pas un panier. Pour un commerce du centre médiéval avec un positionnement de niche — créateurs, gastronomie, produits du terroir — la boutique en ligne capte la clientèle suisse qui passe une fois puis recommande depuis chez elle : catalogue simple, paiement par carte via Stripe, ça tient sur Webflow Ecommerce. Au-delà (variantes complexes, multi-entrepôts, abonnements), on passe au sur-mesure. Dans tous les cas, sur devis."
      },
      {
        question: "Il n'y a pas d'agence web à La Roche, tu remplaces quoi exactement ?",
        answer: "Pas une agence — un développeur freelance qui travaille en direct. Concrètement, tu n'as ni interlocuteur commercial ni chef de projet, tu as la personne qui écrit ton site. Vu la distance (25 km, 30 minutes de voiture ou 40 en Léman Express), on travaille surtout à distance : un déplacement pour le brief, un pour la livraison et la formation, le reste en visio. C'est aussi ce qui évite de facturer des trajets et une structure dont ton projet n'a pas besoin."
      }
    ],
    motCleSEO: 'développement web La Roche-sur-Foron',
    angleHero: "Refonte de sites pour PME industrielles, artisans et commerces du Faucigny, accessible en Léman Express.",
    voisines: ['annemasse', 'saint-julien-en-genevois', 'ville-la-grand'],

    metaTitle: 'Développement web freelance à La Roche-sur-Foron | Jonlabs',
    metaDescription:
      "Un développeur en direct plutôt qu'une agence : refonte de site, développement web et boutique en ligne pour les PME du Faucigny, à 25 km de Genève.",
    h1Lead: 'Développement web et refonte de site à',
    ecommerce: {
      intro:
        "Dans le Faucigny, la vente en ligne prend deux formes très différentes : un catalogue produits industriel qu'on consulte avant de demander un devis, et la boutique d'un commerce de niche qui prolonge la visite d'un client suisse de passage.",
      points: [
        "Catalogue produits avec certifications et demande de devis, quand le panier n'a pas de sens en industrie.",
        "Commerce de niche, catalogue simple et paiement Stripe : Webflow Ecommerce suffit, tu gères tes produits ensuite.",
        "Variantes complexes, multi-entrepôts ou abonnements : boutique sur-mesure ou intégration, chiffrée sur devis.",
      ],
    },
  }
];

/**
 * Helper : récupérer une ville par son slug
 */
export function getVille(slug: string): VilleData | undefined {
  return villesFrontalieres.find(v => v.slug === slug);
}

/**
 * Helper : retourner les villes voisines (pour maillage interne)
 */
export function getVoisines(ville: VilleData): VilleData[] {
  return villesFrontalieres.filter(v => ville.voisines.includes(v.slug));
}
