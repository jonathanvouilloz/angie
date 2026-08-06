// src/data/villes-mobile.ts
// Données structurées pour le silo géo « application mobile » (programmatic SEO).
// Villes romandes où Jon Labs développe des applications iOS / Android depuis Genève.
// Chaque entrée alimente /services/developpement-application-mobile/[ville].
//
// Garde-fou anti-template : le contenu de chaque ville est réellement local
// (tissu économique, plateforme dominante, cas d'usage, technos, FAQ). Ce n'est PAS
// un gabarit au nom remplacé. Cf. /programmatic-seo et src/data/villes-suisse-ia.ts.
//
// Anti-cannibalisation : la page pilier /services/developpement-application-mobile
// tient le générique + tech (« agence de développement d'application mobile en
// Suisse romande »). Ces pages géo prennent l'EXACT-MATCH ville
// (« agence application mobile Genève » / « … Lausanne »). Les `metaTitle` sont
// distincts du pilier ET distincts entre eux — leçon déjà apprise sur le silo IA
// (cf. docs/planSEOIA.md, Phase 1 : « cannibalisation hub↔géo Genève résolue »).
//
// Différenciation adossée à la demande réelle mesurée (GSC) :
//   Genève  → Android + React Native tirent le cluster
//   Lausanne→ iOS tire le cluster
// Cette différence est traitée éditorialement, pas cosmétiquement.
//
// Zéro chiffre inventé : aucun prix, délai, volume client ou population n'est créé
// ici. Les seules fourchettes citées sont celles DÉJÀ affichées sur la page pilier.

export interface VilleMobileFAQ {
  question: string;
  answer: string;
}

export interface CasUsageMobile {
  /** secteur ou métier local concerné */
  secteur: string;
  /** cas d'usage application mobile concret pour ce secteur */
  cas: string;
}

export interface TechnoMobile {
  /** nom de la techno ou du choix technique */
  nom: string;
  /** pourquoi ce choix a du sens DANS CETTE VILLE (pas en général) */
  pourquoi: string;
}

export interface VilleMobileData {
  /** slug utilisé en URL : /services/developpement-application-mobile/{slug} */
  slug: string;
  /** nom court de la ville, ex. "Genève" */
  nom: string;
  /** nom complet pour SEO, ex. "Genève (canton de Genève)" */
  nomComplet: string;
  /** canton */
  canton: string;

  // ── SEO ──────────────────────────────────────────────────────────────────
  /** title complet de la page (≤ 60 car.), distinct du pilier et des autres villes */
  metaTitle: string;
  /** meta description unique et locale (≤ 158 car.) */
  metaDescription: string;
  /** H1 exact-match ville — la partie mise en italique Instrument Serif est {nom} */
  h1: string;
  /** mot-clé SEO principal (exact-match ville) */
  motCleSEO: string;
  /** requêtes secondaires réellement couvertes par la page */
  motsClesSecondaires: string[];

  // ── Hero ─────────────────────────────────────────────────────────────────
  /** angle d'accroche unique pour le hero (2 phrases max) */
  angleHero: string;
  /** preuve / argument de proximité affiché sous le hero ("a · b · c") */
  preuveLocale: string;

  // ── Contexte ─────────────────────────────────────────────────────────────
  /** description courte du bassin (1-2 phrases) */
  description: string;
  /** contexte économique local + angle mobile (4-5 phrases) */
  contexteEconomique: string;
  /** secteurs dominants du bassin économique local */
  secteursDominants: string[];

  // ── Plateforme dominante (LE différenciateur entre villes) ───────────────
  plateforme: {
    /** libellé court, ex. "Android d'abord, iOS jamais en option" */
    label: string;
    /** explication ancrée dans le tissu local */
    explication: string;
  };

  /** cas d'usage app mobile ancrés dans les secteurs locaux (6 items) */
  casUsageMobile: CasUsageMobile[];
  /** choix techniques pertinents pour ce bassin (3 items) */
  technos: TechnoMobile[];
  /** blocages opérationnels fréquents des entreprises locales (4 items) */
  pains: string[];
  /** publics cibles spécifiques */
  publicCible: string[];
  /** FAQ ville-spécifique (6 Q/R uniques) */
  faqs: VilleMobileFAQ[];

  // ── Maillage ─────────────────────────────────────────────────────────────
  /** slugs des villes latérales pour maillage interne */
  voisines: string[];
  /** articles blog du cluster mobile — 3 par ville, choisis selon le profil local.
   *  Les slugs pointent vers des fichiers RÉELS de src/content/blog/. */
  articles: { title: string; description: string; href: string; icon: string }[];
}

export const villesMobile: VilleMobileData[] = [
  // ══════════════════════════════════════════════════════════════════════════
  // GENÈVE — profil mesuré : Android + React Native tirent le cluster
  // ══════════════════════════════════════════════════════════════════════════
  {
    slug: 'geneve',
    nom: 'Genève',
    nomComplet: 'Genève (canton de Genève)',
    canton: 'Genève',

    metaTitle: 'Application mobile à Genève, sans agence | Jonlabs',
    metaDescription:
      "Développement d'application mobile à Genève sans passer par une agence : apps Android et iOS d'un seul code React Native, publiées sur les stores. Devis CHF.",
    h1: 'Application mobile à',
    motCleSEO: 'agence application mobile Genève',
    motsClesSecondaires: [
      'développement application mobile Genève',
      'création application mobile Genève',
      'créer une application Genève',
      'développement app Android Genève',
      'agence React Native Genève',
    ],

    angleHero:
      "Applications iOS et Android pour les entreprises genevoises, développées et publiées par la personne qui écrit le code. Android traité sérieusement, pas comme un portage de fin de projet.",
    preuveLocale: 'Basé à Chêne-Bougeries · facturation CHF · publication App Store et Play Store',

    description:
      "Genève concentre la banque privée, le négoce de matières premières, l'horlogerie de luxe, les organisations internationales et une dense couche de fiduciaires, d'études et de régies. Un bassin de PME à forte valeur ajoutée, multilingue, où une application n'est jamais un gadget marketing mais un outil de travail.",
    contexteEconomique:
      "Le tissu genevois est dominé par les services à haute valeur : banque, négoce, horlogerie, droit, immobilier, santé privée, plus l'écosystème des organisations internationales. Deux conséquences très concrètes sur un projet d'app. D'abord, le parc d'appareils est mixte : à côté des iPhone des directions, il y a les flottes Android des équipes terrain, de la logistique et des collaborateurs frontaliers — traiter Android comme une case à cocher en fin de projet, ici, c'est se couper de la moitié des utilisateurs réels. Ensuite, les données manipulées (dossiers clients, mandats, pièces médicales) imposent de décider où elles sont stockées avant d'écrire la première ligne. Je suis installé à Chêne-Bougeries : les ateliers de cadrage se font sur place, pas en visio depuis l'autre côté de la frontière.",
    secteursDominants: [
      'négoce de matières premières et PME B2B',
      'banque privée et gestion de fortune',
      'horlogerie et luxe',
      'organisations internationales et ONG',
      'régies immobilières et fiduciaires',
      'santé privée et cabinets',
    ],

    plateforme: {
      label: 'Android compte autant qu\'iOS',
      explication:
        "C'est la particularité genevoise. Les équipes terrain du négoce et de la logistique, les collaborateurs frontaliers, les flottes d'appareils d'entreprise : une grande partie des utilisateurs réels d'une app métier genevoise est sous Android. Sortir une app iOS seule, puis promettre Android « plus tard », c'est livrer un outil que la moitié des équipes ne peut pas installer. On part donc d'un code unique (React Native ou Flutter) qui produit les deux applications, et on teste vraiment sur les deux stores.",
    },

    casUsageMobile: [
      {
        secteur: 'Négoce / logistique',
        cas: "Application Android pour les équipes terrain : suivi des cargaisons, photos et documents pris sur place, validation d'étapes hors ligne puis synchronisation dès le retour du réseau.",
      },
      {
        secteur: 'Horlogerie et luxe',
        cas: "Application client multilingue (FR/EN/DE) adossée à la pièce : certificat d'authenticité, historique d'entretien, demande de SAV et notifications de suivi de réparation.",
      },
      {
        secteur: 'Régie immobilière',
        cas: "Application locataire : déclaration d'un sinistre avec photos, accès aux documents du bail, état des lieux guidé, notifications sur les échéances — moins d'appels au gérant.",
      },
      {
        secteur: 'Banque privée / gestion de fortune',
        cas: "Application de consultation en lecture seule pour les clients : reporting de portefeuille, documents, messagerie sécurisée, authentification forte, données hébergées en Suisse.",
      },
      {
        secteur: 'Organisation internationale / ONG',
        cas: "Application de terrain ou d'événement fonctionnant hors connexion, multilingue, publiée sur les deux stores pour être installable partout où les équipes se déplacent.",
      },
      {
        secteur: 'Cabinet et santé privée',
        cas: "Application de prise de rendez-vous et de rappels, avec formulaires pré-consultation et hébergement des données patients choisi en fonction des exigences de protection des données.",
      },
    ],

    technos: [
      {
        nom: 'React Native',
        pourquoi:
          "Beaucoup de PME genevoises ont déjà un site, un back-office ou un outil interne en React et TypeScript. React Native réutilise ce langage et souvent une partie de la logique : un seul écosystème à maintenir, une seule personne capable d'intervenir sur le web et sur le mobile.",
      },
      {
        nom: 'Flutter',
        pourquoi:
          "Quand l'interface doit être identique au pixel près sur iOS et Android — typiquement une app de marque horlogère ou une app produit très dessinée — Flutter donne le contrôle le plus fin sur le rendu, sans repartir de zéro pour chaque plateforme.",
      },
      {
        nom: 'PWA',
        pourquoi:
          "Si l'app sert surtout à consulter de l'information et n'a pas besoin des capteurs du téléphone, une application web installable évite la publication sur les stores et les comptes développeurs. Je le dis quand c'est le cas plutôt que de vendre une app native inutile.",
      },
    ],

    pains: [
      "Un devis d'agence à cinq chiffres avec un chef de projet, un commercial et un designer entre toi et la personne qui code",
      "Une audience réellement partagée entre iPhone et Android, et un budget qui ne permet pas deux développements séparés",
      "Des données clients sensibles qui interdisent d'expédier le projet chez le premier prestataire venu, sans savoir où elles atterrissent",
      "Une application déjà livrée, plus mise à jour sur les stores, dont le prestataire d'origine a disparu",
    ],

    publicCible: [
      'PME de négoce et de services B2B',
      'maisons horlogères et marques de luxe',
      'régies immobilières et fiduciaires',
      'organisations internationales et ONG',
      'cabinets et acteurs de la santé privée',
    ],

    faqs: [
      {
        question: "Agence ou freelance pour développer une application mobile à Genève ?",
        answer:
          "La vraie différence n'est pas la taille, c'est le nombre de personnes entre toi et le code. Dans une agence genevoise, tu passes par un commercial, un chef de projet et un designer avant qu'une ligne soit écrite — et tu paies cette chaîne. Avec moi, tu parles à celui qui développe et qui publie sur les stores. Ce que tu perds : une structure capable d'absorber dix chantiers en parallèle. Ce que tu gagnes : des décisions prises dans la journée et un devis qui ne finance pas des bureaux.",
      },
      {
        question: "Faut-il sortir sur Android ou sur iOS d'abord à Genève ?",
        answer:
          "À Genève, la question se pose différemment d'ailleurs. Si ton application s'adresse à des équipes terrain, à la logistique, au négoce ou à des collaborateurs frontaliers, une bonne partie du parc est sous Android — sortir iOS seul revient à livrer un outil que la moitié des gens ne peut pas installer. Si tu vises une clientèle privée haut de gamme, iPhone domine. Dans les deux cas, on part d'un code unique (React Native ou Flutter) qui produit les deux applications : la question « laquelle d'abord » perd l'essentiel de son enjeu budgétaire.",
      },
      {
        question: "Pourquoi React Native plutôt qu'un développement natif pour une PME genevoise ?",
        answer:
          "Parce que la plupart des PME genevoises ont déjà quelque chose en React ou en TypeScript : un site, un back-office, un outil interne. React Native reste dans ce même écosystème, donc la même personne peut intervenir sur le web et sur le mobile, et une partie de la logique métier est mutualisée. Le natif garde tout son sens pour un usage intensif du matériel ou des performances graphiques poussées — dans ce cas je te le dis. Pour une app métier, un portail client ou un outil de terrain, l'écart de performance ne justifie pas de payer deux développements.",
      },
      {
        question: "Nos données clients sont confidentielles. Où sont-elles hébergées ?",
        answer:
          "On tranche cette question avant d'écrire la première ligne, pas à la livraison. On liste ce qui doit rester sur les serveurs suisses ou européens, ce qui peut transiter, et ce qui n'a rien à faire dans une application mobile. Pour un cabinet, une régie ou un acteur de la gestion de fortune genevois, l'hébergement et l'authentification sont des contraintes de conception, pas des options ajoutées après coup. Tu repars avec une documentation qui dit précisément où chaque donnée vit.",
      },
      {
        question: "Combien coûte une application mobile à Genève ?",
        answer:
          "Comme indiqué sur la page de service, on parle généralement d'une fourchette à partir de 10 000 à 15 000 CHF pour une application simple, qui monte selon la complexité : backend, intégrations métier, design sur mesure, nombre de plateformes. En passant par un freelance plutôt que par une agence, tu ne finances pas une structure. Tu reçois un devis chiffré avant de t'engager, et le guide détaillé sur le prix d'une application mobile en Suisse explique ce qui fait vraiment bouger le chiffre.",
      },
      {
        question: "Vous vous déplacez dans nos bureaux à Genève ?",
        answer:
          "Oui. Je suis installé à Chêne-Bougeries, donc les ateliers de cadrage et les points d'étape se font sur place quand c'est utile — et en visio quand ça ne l'est pas. Concrètement, ça change surtout le début du projet : voir comment tes équipes travaillent réellement, sur quels appareils, dans quelles conditions de réseau, évite de concevoir une application qui ne tient pas la réalité du terrain.",
      },
    ],

    voisines: ['lausanne'],
    articles: [
      {
        title: 'Flutter vs React Native : lequel choisir ?',
        description:
          "Les deux technologies qui produisent iOS et Android d'un seul code, comparées du point de vue d'une PME et non d'un benchmark de labo.",
        href: '/blog/flutter-vs-react-native-pme',
        icon: 'ri-git-branch-line',
      },
      {
        title: 'Application native ou hybride : les différences',
        description:
          "Ce que tu perds vraiment en hybride, ce que tu gagnes, et les cas où le natif reste le bon choix.",
        href: '/blog/application-native-vs-hybride',
        icon: 'ri-cpu-line',
      },
      {
        title: "Prix d'une application mobile en Suisse",
        description:
          "Les postes qui font monter la facture, et comment cadrer un périmètre pour ne pas payer des fonctionnalités que personne n'utilisera.",
        href: '/blog/prix-application-mobile-suisse',
        icon: 'ri-money-cny-circle-line',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // LAUSANNE — profil mesuré : iOS tire le cluster
  // ══════════════════════════════════════════════════════════════════════════
  {
    slug: 'lausanne',
    nom: 'Lausanne',
    nomComplet: 'Lausanne (canton de Vaud)',
    canton: 'Vaud',

    metaTitle: 'Application mobile à Lausanne, sans agence | Jonlabs',
    metaDescription:
      "Développement d'application mobile à Lausanne sans agence : app iOS et Android pour spin-offs EPFL, medtech et PME vaudoises. TestFlight, stores, devis CHF.",
    h1: 'Application mobile à',
    motCleSEO: 'agence application mobile Lausanne',
    motsClesSecondaires: [
      'développement app iOS Lausanne',
      'développement application Lausanne',
      'développement application mobile Lausanne',
      'créer une application Lausanne',
    ],

    angleHero:
      "Applications iOS et Android pour les startups, la medtech et les PME vaudoises. Un MVP installable sur le téléphone de tes bêta-testeurs, pas une maquette cliquable.",
    preuveLocale: 'Déplacements Lausanne · facturation CHF · TestFlight et publication App Store',

    description:
      "Lausanne mélange un écosystème tech tiré par l'EPFL et l'UNIL, un pôle santé et biotech, l'administration cantonale vaudoise, le sport international avec le CIO et les fédérations, et un dense tissu de PME tertiaires. Une ville où l'on prototype beaucoup — et où beaucoup de prototypes n'atteignent jamais un store.",
    contexteEconomique:
      "Le bassin lausannois est plus jeune et plus tech que Genève : spin-offs issues de l'EPFL, scale-ups en santé numérique, agences digitales, fédérations sportives internationales, et une majorité de PME et d'indépendants vaudois aux processus encore très manuels. Sur le mobile, ça produit un profil très reconnaissable : iOS domine le premier cercle. Les investisseurs, les comités, les chercheurs, les early adopters, les délégations sportives — tout ce petit monde ouvre la démo sur un iPhone. D'où des projets qui commencent par une build iOS distribuée en TestFlight avant même de penser publication publique. Le piège classique, ici, c'est le prototype fait pendant un semestre puis abandonné : personne pour reprendre le code, plus de compte développeur à jour, application invisible sur les stores. Je travaille depuis Genève, à une quarantaine de minutes en train, et je me déplace sur Lausanne pour les ateliers de cadrage.",
    secteursDominants: [
      'spin-offs et startups issues de l\'EPFL / UNIL',
      'medtech et santé numérique',
      'sport international (CIO, fédérations)',
      'agences digitales et studios',
      'administration et parapublic vaudois',
      'PME tertiaires et services',
    ],

    plateforme: {
      label: 'iOS en premier, sans sacrifier Android',
      explication:
        "À Lausanne, le premier public d'une application est presque toujours sous iPhone : investisseurs, comité de direction, chercheurs, bêta-testeurs recrutés dans l'écosystème EPFL. Commencer par une build iOS distribuée en TestFlight permet de mettre l'app entre leurs mains en amont de toute publication publique. Mais « iOS d'abord » ne doit pas devenir « iOS seulement » : dès que tu ouvres au grand public ou à des utilisateurs hors du campus, Android revient. On construit donc sur un code unique, et Android suit sans repartir de zéro.",
    },

    casUsageMobile: [
      {
        secteur: 'Spin-off EPFL / startup',
        cas: "MVP iOS distribué en TestFlight à une cohorte de bêta-testeurs : l'app s'installe sur leur téléphone, tu récoltes de vrais retours d'usage avant de dépenser sur des fonctionnalités que personne ne demande.",
      },
      {
        secteur: 'Medtech et santé numérique',
        cas: "Application compagnon de suivi : saisie de mesures par le patient, lecture des données d'un capteur ou d'une montre via l'API santé du téléphone, restitution au professionnel — avec un hébergement décidé selon les exigences de protection des données.",
      },
      {
        secteur: 'Fédération sportive internationale',
        cas: "Application d'événement multilingue : calendrier, accréditations, résultats, notifications push — dimensionnée pour un pic d'usage sur quelques jours puis un mode dormant le reste de l'année.",
      },
      {
        secteur: 'Agence digitale ou studio',
        cas: "Développement mobile en sous-traitance pour un client final : je code, tu gardes la relation client, l'application est publiée sur le compte développeur du client avec une passation documentée.",
      },
      {
        secteur: 'PME de services vaudoise',
        cas: "Application de terrain pour les équipes mobiles : rapports d'intervention, photos, signature du client sur l'écran, synchronisation avec l'outil de gestion existant dès le retour du réseau.",
      },
      {
        secteur: 'Administration et parapublic',
        cas: "Application d'information au public, pensée pour l'accessibilité et la lisibilité, publiée sur les deux stores avec une procédure de mise à jour qui ne dépend pas d'un prestataire unique.",
      },
    ],

    technos: [
      {
        nom: 'iOS et TestFlight',
        pourquoi:
          "C'est le vrai besoin lausannois de départ : mettre une application installable entre les mains d'un comité, d'un investisseur ou d'une cohorte de test. TestFlight permet de distribuer des builds successives sans passer par une publication publique, et de collecter les retours au fil des itérations.",
      },
      {
        nom: 'Flutter ou React Native',
        pourquoi:
          "Une spin-off ou une PME vaudoise n'a pas les moyens de financer deux équipes. Un code unique produit les deux applications : tu commences par diffuser la version iOS à ton premier cercle, et Android suit à l'ouverture publique sans redéveloppement.",
      },
      {
        nom: 'Reprise de prototype',
        pourquoi:
          "Le cas le plus courant autour de l'EPFL : un prototype existe, écrit pendant un projet de semestre ou par un stagiaire, et plus personne ne sait le compiler. On regarde ce qui est récupérable et ce qui coûte moins cher à réécrire — franchement, y compris quand la réponse ne t'arrange pas.",
      },
    ],

    pains: [
      "Un comité ou un investisseur qui attend une application installable sur son iPhone, pas une maquette Figma cliquable",
      "Un prototype développé pendant un projet académique que plus personne ne sait compiler ni publier",
      "Une soumission refusée par la revue de l'App Store, sans personne en interne pour comprendre le motif et corriger",
      "Des données de santé ou d'utilisateurs qui imposent des décisions d'architecture avant même la première ligne de code",
    ],

    publicCible: [
      'spin-offs EPFL et startups en amorçage',
      'medtech et acteurs de la santé numérique',
      'fédérations sportives et associations internationales',
      'agences digitales cherchant un renfort mobile',
      'PME et indépendants vaudois',
    ],

    faqs: [
      {
        question: "Vous êtes basé à Genève — pourquoi vous pour une application mobile à Lausanne ?",
        answer:
          "Lausanne est à une quarantaine de minutes de Genève : je m'y déplace pour les ateliers de cadrage et les points d'étape, et le reste se pilote en asynchrone comme n'importe quel projet mobile. La vraie question n'est pas la distance mais l'interlocuteur. Autour de l'EPFL, beaucoup d'acteurs vendent de la R&D pointue pensée pour des labos ou des scale-ups financées. Moi, je livre une application qui s'installe, se publie et se maintient, avec un devis annoncé d'avance en CHF.",
      },
      {
        question: "On veut sortir sur iOS d'abord. C'est un bon choix à Lausanne ?",
        answer:
          "Pour un premier cercle lausannois, oui — investisseurs, comité, chercheurs, bêta-testeurs recrutés dans l'écosystème EPFL sont massivement sous iPhone, et TestFlight permet de leur envoyer des builds successives sans publication publique. Le piège, c'est de transformer « iOS d'abord » en « iOS seulement » : dès que tu ouvres au grand public, Android revient dans l'équation. C'est pour ça qu'on construit sur un code unique dès le départ — la version Android n'est alors pas un nouveau projet.",
      },
      {
        question: "On est une spin-off EPFL, on doit montrer une app à des investisseurs. Vous faites du MVP ?",
        answer:
          "Oui, et c'est le format qui a le plus de sens à ce stade. On coupe le périmètre à ce qui démontre la valeur — souvent deux ou trois écrans qui fonctionnent vraiment plutôt que douze écrans à moitié faits — et on distribue via TestFlight à ta cohorte de test. L'objectif n'est pas une application complète : c'est une application installable qui prouve que le concept tient sur un vrai téléphone. L'article sur le budget d'un MVP mobile détaille comment cadrer ce périmètre.",
      },
      {
        question: "Qui s'occupe de la publication sur l'App Store et de la revue Apple ?",
        answer:
          "Moi. Comptes développeurs, fiches, captures d'écran, questionnaire de confidentialité, soumission et allers-retours avec la revue Apple : c'est inclus dans le projet. Un refus de revue n'a rien d'exceptionnel — motif de confidentialité mal renseigné, fonctionnalité jugée trop proche d'un site web, permission demandée sans justification. Ce qui compte, c'est que quelqu'un sache lire le motif et corriger. L'application est publiée sur ton compte, à ton nom, et tu gardes la main dessus.",
      },
      {
        question: "Nos données de santé sont sensibles. Comment vous gérez ça sur mobile ?",
        answer:
          "On part des données avant la technologie : ce qui reste sur le téléphone, ce qui part vers un serveur, où ce serveur se trouve, qui peut y accéder. Pour un acteur de la santé numérique lausannois, ça détermine l'architecture entière de l'application — pas une case cochée à la fin. Quand l'app lit des mesures issues d'un capteur ou d'une montre, on passe par l'API santé du système plutôt que par un contournement, et on documente précisément le flux.",
      },
      {
        question: "Combien coûte une application mobile à Lausanne ?",
        answer:
          "La fourchette est la même que celle affichée sur la page de service : à partir de 10 000 à 15 000 CHF pour une application simple, davantage selon le backend, les intégrations et le design. Pour une spin-off ou une PME vaudoise, la variable qui compte n'est pas le tarif horaire mais le périmètre : un MVP resserré coûte une fraction d'une application complète et répond souvent mieux au besoin du moment. On chiffre ce périmètre avant de commencer.",
      },
    ],

    voisines: ['geneve'],
    articles: [
      {
        title: 'MVP application mobile : combien prévoir ?',
        description:
          "Comment cadrer un premier périmètre qui prouve le concept sans financer des fonctionnalités que personne n'a demandées.",
        href: '/blog/budget-mvp-application-mobile',
        icon: 'ri-rocket-line',
      },
      {
        title: 'Application mobile ou PWA : comment choisir ?',
        description:
          "Les critères concrets pour savoir si ton projet a réellement besoin de passer par les stores.",
        href: '/blog/application-mobile-ou-pwa',
        icon: 'ri-question-answer-line',
      },
      {
        title: 'Développer une application mobile en Suisse',
        description:
          "Le déroulé complet d'un projet mobile romand, du cadrage à la publication sur les stores.",
        href: '/blog/developper-application-mobile-suisse',
        icon: 'ri-road-map-line',
      },
    ],
  },
];

/**
 * Helper : récupérer une ville par son slug
 */
export function getVille(slug: string): VilleMobileData | undefined {
  return villesMobile.find((v) => v.slug === slug);
}

/**
 * Helper : retourner les villes latérales (pour maillage interne)
 */
export function getVoisinesMobile(ville: VilleMobileData): VilleMobileData[] {
  return villesMobile.filter((v) => ville.voisines.includes(v.slug));
}
