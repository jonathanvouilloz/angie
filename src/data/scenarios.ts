// Données des 6 scénarios pour la page Services
// Chaque scénario représente une problématique client avec une conversation Jon - Client

export interface Message {
  speaker: 'client' | 'jon';
  text: string;
}

export interface Scenario {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  pillar: 'web' | 'auto' | 'validation';
  scrollTo: string;
  color: string;
  messages: Message[];
}

export const scenarios: Scenario[] = [
  // Pilier 1: Web & Outils
  {
    id: 'website-old',
    emoji: '🎨',
    title: 'Site obsolète',
    subtitle: 'Design 2015, pas responsive',
    pillar: 'web',
    scrollTo: 'web-outils',
    color: 'rgba(0, 150, 255, 0.15)',
    messages: [
      { speaker: 'client', text: 'Mon site date de 2015, il est moche, pas responsive... mais refaire un site ça coûte une blinde non ?' },
      { speaker: 'jon', text: 'T\'as raison de te poser la question. Dépend de ce que tu veux. Site sur-mesure avec 50 pages et 200 animations ? Oui. Site propre qui convertit ? Non.' },
      { speaker: 'client', text: 'C\'est quoi la différence ?' },
      { speaker: 'jon', text: 'La plupart des sites ont 80% de contenu inutile. On garde l\'essentiel : qui t\'es, ce que tu fais, pourquoi te choisir, comment te contacter.' },
      { speaker: 'client', text: 'Mais j\'ai besoin d\'un portfolio, d\'un blog, de 15 pages services...' },
      { speaker: 'jon', text: 'Tu penses. En vrai, 90% de tes visiteurs vont sur 3 pages max. On lance avec ça, on itère après si vraiment besoin.' },
      { speaker: 'client', text: 'Ok mais ça va m\'apporter quoi concrètement ?' },
      { speaker: 'jon', text: 'Un site moderne et bien référencé, c\'est un commercial qui bosse 24/7. Les gens te trouvent sur Google, ils voient que t\'es pro, ils te contactent. Des prospects en automatique, sans démarcher.' },
      { speaker: 'client', text: 'Délai ?' },
      { speaker: 'jon', text: '3 semaines. Site moderne, rapide, responsive, optimisé pour Google. Tu fournis le contenu, je gère le reste.' },
      { speaker: 'client', text: 'Et si je veux ajouter des trucs après ?' },
      { speaker: 'jon', text: 'C\'est prévu dans l\'archi. Tu peux faire évoluer facilement. Mais on lance simple et efficace d\'abord.' }
    ]
  },
  {
    id: 'no-presence',
    emoji: '🌐',
    title: 'Pas de présence en ligne',
    subtitle: 'Tout passe par le bouche-à-oreille',
    pillar: 'web',
    scrollTo: 'web-outils',
    color: 'rgba(0, 150, 255, 0.15)',
    messages: [
      { speaker: 'client', text: 'Je n\'ai pas de site, tout passe par le bouche-à-oreille... mais est-ce que j\'en ai vraiment besoin ?' },
      { speaker: 'jon', text: 'Ça dépend. Tu veux rester dépendant de ton réseau ou que des gens te trouvent sans te connaître ?' },
      { speaker: 'client', text: 'Les réseaux sociaux suffisent non ?' },
      { speaker: 'jon', text: 'Pour exister, oui. Pour convertir, non. Un post LinkedIn disparaît en 48h. Un site, c\'est ta vitrine permanente qui bosse même quand tu dors.' },
      { speaker: 'client', text: 'Je saurais pas quoi mettre dessus...' },
      { speaker: 'jon', text: 'Personne ne sait au début. On commence par l\'essentiel : qui t\'es, ce que tu fais, comment te contacter. Le reste vient après.' },
      { speaker: 'client', text: 'C\'est vraiment utile si je fais déjà du bouche-à-oreille ?' },
      { speaker: 'jon', text: 'Le bouche-à-oreille c\'est bien, mais c\'est limité à ton réseau actuel. Un site bien référencé, c\'est des gens qui te trouvent sur Google sans te connaître. Surtout en local : quelqu\'un cherche "[ton métier] + Genève", tu apparais. Des prospects que t\'aurais jamais eus autrement.' },
      { speaker: 'client', text: 'Ça va me prendre du temps à gérer ?' },
      { speaker: 'jon', text: 'Zéro. Un site vitrine bien fait, tu n\'y touches plus pendant des mois. C\'est pas un blog à alimenter, c\'est une base solide.' },
      { speaker: 'client', text: 'Délai et budget ?' },
      { speaker: 'jon', text: '2-3 semaines, tarif adapté à ta structure. On fait simple, efficace, évolutif.' }
    ]
  },

  // Pilier 2: Automatisation
  {
    id: 'tools-sync',
    emoji: '🔗',
    title: 'Outils désynchronisés',
    subtitle: 'Notion, Sheets, CRM... rien ne se parle',
    pillar: 'auto',
    scrollTo: 'automatisation',
    color: 'rgba(0, 217, 163, 0.15)',
    messages: [
      { speaker: 'client', text: 'J\'ai Notion, Google Sheets, mon CRM, ma compta... rien ne se parle et je perds un temps fou.' },
      { speaker: 'jon', text: 'Classique. T\'as empilé des outils au fil du temps, chacun fait son job, mais ensemble c\'est le chaos.' },
      { speaker: 'client', text: 'Du coup faut tout changer ?' },
      { speaker: 'jon', text: 'Non. On garde tes outils, on les fait communiquer. Une info rentrée une fois, elle se propage partout automatiquement.' },
      { speaker: 'client', text: 'C\'est compliqué techniquement ?' },
      { speaker: 'jon', text: 'Pour toi, non. Je m\'occupe des connexions. Toi tu continues à bosser comme avant, sauf que maintenant ça synchronise tout seul.' },
      { speaker: 'client', text: 'Et si j\'ai besoin de tout voir au même endroit ?' },
      { speaker: 'jon', text: 'On peut aussi créer un tableau de bord sur-mesure qui centralise toutes tes données importantes. Une seule interface, plus besoin de jongler entre 10 onglets. Tu vois tout d\'un coup d\'œil.' },
      { speaker: 'client', text: 'Et si un outil change ou si j\'en ajoute un ?' },
      { speaker: 'jon', text: 'C\'est prévu. Les automatisations sont modulaires, on peut ajuster sans tout reconstruire.' },
      { speaker: 'client', text: 'Délai ?' },
      { speaker: 'jon', text: '1-2 semaines pour une première automatisation fonctionnelle. On commence par le plus douloureux, on itère ensuite.' }
    ]
  },
  {
    id: 'time-lack',
    emoji: '⏰',
    title: 'Tâches chronophages',
    subtitle: 'Relances, rapports, copier-coller...',
    pillar: 'auto',
    scrollTo: 'automatisation',
    color: 'rgba(0, 217, 163, 0.15)',
    messages: [
      { speaker: 'client', text: 'Je passe des heures chaque semaine sur des trucs bêtes : relances, rapports, copier-coller...' },
      { speaker: 'jon', text: 'Combien d\'heures exactement ? Parce que si c\'est 5h/semaine, ça fait 250h/an. Soit 6 semaines de boulot.' },
      { speaker: 'client', text: 'Oui mais c\'est des petites tâches, ça se compte pas...' },
      { speaker: 'jon', text: 'Justement, ça se compte. Et ça s\'automatise. Emails de relance, création de factures, mise à jour de tableaux, envoi de rappels — tout ça peut tourner sans toi.' },
      { speaker: 'client', text: 'Mon process est trop spécifique, c\'est pas automatisable.' },
      { speaker: 'jon', text: 'C\'est ce que tout le monde dit. En vrai, 80% des tâches répétitives suivent une logique simple : "Si X arrive, alors faire Y." C\'est exactement ce qu\'on automatise.' },
      { speaker: 'client', text: 'Ça coûte cher à mettre en place ?' },
      { speaker: 'jon', text: 'Moins cher que ton temps. Une automatisation bien faite se rentabilise en quelques semaines.' },
      { speaker: 'client', text: 'Par où on commence ?' },
      { speaker: 'jon', text: 'On identifie ensemble tes tâches les plus chronophages. On automatise la plus douloureuse d\'abord. Tu vois le résultat, on continue.' }
    ]
  },

  // Pilier 3: Validation
  {
    id: 'idea-validation',
    emoji: '💡',
    title: 'Idée à valider',
    subtitle: 'Pas sûr que les gens vont payer',
    pillar: 'validation',
    scrollTo: 'validation',
    color: 'rgba(163, 0, 217, 0.15)',
    messages: [
      { speaker: 'client', text: 'J\'ai une idée de produit/service mais je sais pas si les gens vont payer pour ça.' },
      { speaker: 'jon', text: 'Bonne question à se poser AVANT de développer. Pas après 6 mois de travail.' },
      { speaker: 'client', text: 'Donc faut que je construise un prototype ?' },
      { speaker: 'jon', text: 'Non. Faut que tu testes l\'intérêt avant de construire quoi que ce soit. Une landing page qui explique ton offre + un peu de pub ciblée. Tu vois si les gens cliquent, s\'inscrivent, demandent plus d\'infos.' },
      { speaker: 'client', text: 'Mais j\'ai rien à montrer...' },
      { speaker: 'jon', text: 'T\'as pas besoin d\'un produit fini. Tu vends la promesse, tu mesures l\'intérêt. Si personne ne clique, t\'as économisé des mois de dev. Si ça mord, tu construis en confiance.' },
      { speaker: 'client', text: 'C\'est pas un peu de la triche ?' },
      { speaker: 'jon', text: 'C\'est du lean startup. Toutes les boîtes qui réussissent font ça. Valider avant d\'investir.' },
      { speaker: 'client', text: 'Délai et budget ?' },
      { speaker: 'jon', text: '1 semaine pour la landing page. Budget pub à définir ensemble (quelques centaines de francs suffisent pour un premier test).' }
    ]
  },
  {
    id: 'mvp-urgent',
    emoji: '🚀',
    title: 'MVP urgent',
    subtitle: '3 semaines pour montrer quelque chose',
    pillar: 'validation',
    scrollTo: 'validation',
    color: 'rgba(163, 0, 217, 0.15)',
    messages: [
      { speaker: 'client', text: 'J\'ai 3 semaines pour montrer quelque chose à des investisseurs / partenaires / premiers clients.' },
      { speaker: 'jon', text: 'Faisable. Mais faut être clair sur ce qu\'on livre : un prototype fonctionnel qui prouve le concept, pas un produit fini.' },
      { speaker: 'client', text: 'Ça va être bancal...' },
      { speaker: 'jon', text: 'Non, ça va être ciblé. On identifie LA fonctionnalité clé qui démontre ta valeur. Le reste, c\'est du décor pour plus tard.' },
      { speaker: 'client', text: 'Et si on me demande des features qui sont pas là ?' },
      { speaker: 'jon', text: 'Tu réponds "c\'est prévu dans la roadmap." Tout le monde sait qu\'un MVP c\'est une V1. Ce qu\'on veut voir, c\'est que le cœur fonctionne.' },
      { speaker: 'client', text: 'C\'est quoi le process ?' },
      { speaker: 'jon', text: 'Semaine 1 : on définit le scope minimal ensemble. Semaine 2-3 : je développe, tu testes au fur et à mesure. À la fin t\'as un truc que tu peux montrer et utiliser.' },
      { speaker: 'client', text: 'Et après le MVP ?' },
      { speaker: 'jon', text: 'Soit on continue ensemble pour la vraie V1, soit tu repars avec une base solide et documentée. Pas de dépendance forcée.' }
    ]
  }
];

// Structure des sections concrètes (PARTIE 2)
export interface SubService {
  id: string;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  link?: string; // Lien vers une page dédiée (optionnel)
}

export interface ServiceSection {
  id: string;
  title: string;
  accroche: string;
  subServices: SubService[];
  ctaText: string;
}

export const serviceSections: ServiceSection[] = [
  {
    id: 'web-outils',
    title: 'Sites Web & Applications Sur-Mesure',
    accroche: `Sites performants et outils internes. Du one-page qui convertit à l'application métier pour les PME suisses.`,
    subServices: [
      {
        id: 'refonte-site',
        title: 'Refonte de site',
        description: 'Modernisation design et technique. Temps de chargement éclair (Score 90+ sur Google).',
        features: [
          'Design responsive adapté à tous les écrans',
          'Temps de chargement optimisé (score 90+)',
          'Référencement Google intégré dès le départ',
          'Référencement local pour être trouvé dans ta région',
          'Architecture évolutive pour grandir avec ton activité'
        ],
        ctaText: 'En savoir plus',
        link: '/services/refonte-site-web/'
      },
      {
        id: 'creation-site',
        title: 'Création de site',
        description: 'Un site vitrine optimisé SEO qui travaille pour toi 24/7. Hébergement en Suisse ou optimisé mondial.',
        features: [
          'Structure claire : qui tu es, ce que tu fais, comment te contacter',
          'Optimisé pour Google dès le jour 1',
          'Référencement local pour capter les clients près de chez toi',
          'Pas de maintenance complexe, tu te concentres sur ton métier',
          'Évolutif : blog, portfolio, pages supplémentaires si besoin'
        ],
        ctaText: 'En savoir plus',
        link: '/services/creation-site-web/'
      },
      {
        id: 'outils-mesure',
        title: 'Outils sur mesure',
        description: 'Applications et tableaux de bord adaptés à tes besoins spécifiques.',
        features: [
          'Tableau de bord centralisé : toutes tes données business en un coup d\'œil',
          'Outils internes : gestion de projets, suivi clients, processus métier',
          'Interface simple pensée pour toi et ton équipe',
          'Connexion à tes outils existants (CRM, compta, emails...)'
        ],
        ctaText: 'En savoir plus',
        link: '/services/outils-sur-mesure/'
      }
    ],
    ctaText: 'Lancer mon projet web'
  },
  {
    id: 'automatisation',
    title: 'Automatisation & Workflows (No-Code)',
    accroche: 'Libère-toi des tâches répétitives. Je connecte tes logiciels pour que tes données circulent toutes seules.',
    subServices: [
      {
        id: 'connexion-outils',
        title: 'Connexion d\'outils',
        description: 'Fais parler ton CRM avec ta facturation (ex: Stripe vers Bexio/Excel).',
        features: [
          'Nouveau client Stripe → création auto dans ton CRM',
          'Email de bienvenue déclenché sans action manuelle',
          'Synchronisation bidirectionnelle de tes contacts',
          'Une info saisie une fois, propagée partout'
        ],
        ctaText: 'En savoir plus',
        link: '/services/integration-outils/'
      },
      {
        id: 'automatisation-taches',
        title: 'Automatisation de tâches',
        description: 'Récupère 5 à 10h/semaine. Fini les copier-coller d\'emails et les erreurs de saisie manuelle',
        features: [
          'Relances clients et factures envoyées automatiquement',
          'Rapports générés sans intervention',
          'Notifications consolidées (fini les 50 apps à checker)',
          'Processus de validation simplifiés'
        ],
        ctaText: 'En savoir plus',
        link: '/services/automatisation/'
      }
    ],
    ctaText: 'Automatiser mes process'
  },
  {
    id: 'validation',
    title: 'Lancement de Projet & MVP',
    accroche: 'Teste ton concept rapidement avant d\'investir des milliers de francs.',
    subServices: [
      {
        id: 'test-concept',
        title: 'Test de concept',
        description: 'Landing page de conversion + Campagne ciblée pour vérifier si "ça mord" en 2 semaines.',
        features: [
          'Landing page claire avec ta proposition de valeur',
          'Campagne pub ciblée avec budget minimal (dès 100 CHF)',
          'Métriques concrètes : visiteurs, clics, inscriptions',
          'Réponse en 1-2 semaines : ça mord ou pas ?'
        ],
        ctaText: 'En savoir plus',
        link: '/services/validation-idee/'
      },
      {
        id: 'mvp-rapide',
        title: 'MVP rapide',
        description: 'Une première version fonctionnelle de ton app pour convaincre investisseurs ou premiers clients.',
        features: [
          'Focus sur LA fonctionnalité clé qui prouve ta valeur',
          'Itérations rapides basées sur les retours terrain',
          'Livrable démontrable à des investisseurs/partenaires/clients',
          'Base solide pour continuer le développement'
        ],
        ctaText: 'En savoir plus',
        link: '/services/developpement-mvp/'
      }
    ],
    ctaText: 'Valider mon idée'
  }
];

// Helper pour récupérer un scénario par ID
export function getScenarioById(id: string): Scenario | undefined {
  return scenarios.find(s => s.id === id);
}

// Helper pour récupérer les scénarios d'un pilier
export function getScenariosByPillar(pillar: 'web' | 'auto' | 'validation'): Scenario[] {
  return scenarios.filter(s => s.pillar === pillar);
}

// Helper pour récupérer une section par ID
export function getSectionById(id: string): ServiceSection | undefined {
  return serviceSections.find(s => s.id === id);
}
