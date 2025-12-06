// Données des 8 scénarios pour la page Services
// Chaque scénario représente une problématique client avec une conversation Jon ↔ Client

export interface Message {
  speaker: 'client' | 'jon';
  text: string;
}

export interface Scenario {
  id: string;
  emoji: string;
  title: string;
  subtitle: string; // Mini sous-texte explicatif
  service: 'dev-web' | 'automatisation' | 'applications';
  scrollTo: string;
  color: string; // Couleur associée
  messages: Message[];
}

export const scenarios: Scenario[] = [
  // Scénario 1: Cash flow serré
  {
    id: 'cash-flow',
    emoji: '💸',
    title: 'Cash flow serré',
    subtitle: 'Paiements en retard, charges immédiates',
    service: 'automatisation',
    scrollTo: 'automatisation',
    color: 'rgba(0, 217, 163, 0.15)', // Vert doux
    messages: [
      { speaker: 'client', text: 'On grandit vite mais on est tout le temps à sec. Les paiements clients arrivent trop tard.' },
      { speaker: 'jon', text: 'Cash flow problème numéro 1 pour 33% des petites boîtes. T\'as combien de délai de paiement en moyenne ?' },
      { speaker: 'client', text: '30-45 jours... et on paie nos coûts tout de suite.' },
      { speaker: 'jon', text: 'Classic. T\'as pensé à automatiser tes relances ? La plupart des retards c\'est juste parce que les gens oublient.' },
      { speaker: 'client', text: 'On fait ça manuellement, mais on passe à côté de plein de trucs.' },
      { speaker: 'jon', text: 'Automatise : facture envoyée automatiquement, relance à J-7, J+3, J+10. Tracking en temps réel de qui a payé, qui tarde. Plus besoin d\'y penser, ça tourne tout seul.' },
      { speaker: 'client', text: 'Ça changerait vraiment la donne niveau trésorerie.' },
      { speaker: 'jon', text: 'Exactement. Les startups qui automatisent leurs relances réduisent leurs délais de paiement de 40% en moyenne.' }
    ]
  },

  // Scénario 2: Outils désynchronisés
  {
    id: 'tools-sync',
    emoji: '🔗',
    title: 'Outils désynchronisés',
    subtitle: '12 apps qui ne se parlent pas',
    service: 'automatisation',
    scrollTo: 'automatisation',
    color: 'rgba(0, 217, 163, 0.15)',
    messages: [
      { speaker: 'client', text: 'Jon, j\'ai 12 abonnements différents et mes outils ne parlent pas entre eux. C\'est le chaos.' },
      { speaker: 'jon', text: 'Le syndrome du "app fatigue". Tu passes plus de temps à copier-coller entre tes outils qu\'à bosser sur ton business, c\'est ça ?' },
      { speaker: 'client', text: 'Exactement ! J\'ai Stripe pour les paiements, Notion pour la gestion, Gmail pour les clients... je perds 2h par jour juste à synchroniser tout ça.' },
      { speaker: 'jon', text: 'Je vois le truc. On va pas ajouter un 13ème outil. On va plutôt connecter ceux que t\'as déjà. Une automatisation bien foutue et tes données circulent toutes seules.' },
      { speaker: 'client', text: 'Genre, mes nouveaux clients Stripe arrivent automatiquement dans mon CRM ?' },
      { speaker: 'jon', text: 'Exactement. Avec les tâches de suivi créées automatiquement, l\'email de bienvenue envoyé, et même la facture générée. Tu récupères tes 2h par jour.' }
    ]
  },

  // Scénario 3: Manque de temps
  {
    id: 'time-lack',
    emoji: '⏰',
    title: 'Manque de temps',
    subtitle: '15 casquettes, 4h de sommeil',
    service: 'automatisation',
    scrollTo: 'automatisation',
    color: 'rgba(0, 217, 163, 0.15)',
    messages: [
      { speaker: 'client', text: 'Jonathan, je porte 15 casquettes. Dev, commercial, compta, marketing... je dors 4h par nuit.' },
      { speaker: 'jon', text: '60% des entrepreneurs disent avoir sous-estimé le nombre de "chapeaux" à porter. T\'es dans quelle phase là ?' },
      { speaker: 'client', text: 'J\'ai des clients, ça grandit, mais je peux pas embaucher encore. Budget trop serré.' },
      { speaker: 'jon', text: 'Ok, donc on va automatiser ce qui bouffe ton temps sans créer de valeur. C\'est quoi tes 3 tâches les plus chronophages ?' },
      { speaker: 'client', text: 'Les relances clients, les rapports mensuels, et gérer les demandes de contact.' },
      { speaker: 'jon', text: 'Facile à automatiser tout ça. Relances : workflow automatique. Rapports : dashboard qui se génère tout seul. Demandes de contact : formulaire qui trie et notifie directement.' },
      { speaker: 'client', text: 'Je récupère combien de temps par semaine à ton avis ?' },
      { speaker: 'jon', text: 'Conservateur ? 10-15h. Réaliste ? Plutôt 20h. C\'est presque un mi-temps.' }
    ]
  },

  // Scénario 4: Données éparpillées
  {
    id: 'data-scattered',
    emoji: '📊',
    title: 'Données éparpillées',
    subtitle: 'Excel, Sheets, CRM... le chaos',
    service: 'applications',
    scrollTo: 'applications',
    color: 'rgba(163, 0, 217, 0.15)', // Violet doux
    messages: [
      { speaker: 'client', text: 'Nos données sont éparpillées : Excel ici, Google Sheets là, un vieux CRM qu\'on utilise plus... impossible de piloter.' },
      { speaker: 'jon', text: 'Data silos. Le cauchemar des PME en croissance. Tu prends tes décisions sur quoi actuellement ?' },
      { speaker: 'client', text: 'Honnêtement ? Mon feeling. J\'ai pas de vision claire de ce qui marche ou pas.' },
      { speaker: 'jon', text: 'Dangereux. On va centraliser ça. Une source de vérité unique : dashboard qui agrège tout automatiquement.' },
      { speaker: 'client', text: 'Genre je vois mes ventes, mes dépenses, mes clients actifs... en un coup d\'œil ?' },
      { speaker: 'jon', text: 'Exactement. Mise à jour en temps réel. Plus besoin de passer 3h à faire un rapport pour savoir où t\'en es.' },
      { speaker: 'client', text: 'Ça coûte une fortune ce genre de truc non ?' },
      { speaker: 'jon', text: 'Moins cher que de prendre des mauvaises décisions parce que t\'as pas les bonnes données. Et ça se met en place en 2-3 semaines.' }
    ]
  },

  // Scénario 5: Lancement urgent
  {
    id: 'launch-fast',
    emoji: '🚀',
    title: 'Lancement urgent',
    subtitle: 'MVP en 6 semaines, investisseurs au salon',
    service: 'applications',
    scrollTo: 'applications',
    color: 'rgba(163, 0, 217, 0.15)',
    messages: [
      { speaker: 'client', text: 'On a 6 semaines pour lancer notre MVP avant un salon où on a des investisseurs. C\'est jouable ?' },
      { speaker: 'jon', text: '6 semaines c\'est serré mais faisable. La vraie question : c\'est quoi ton VRAI minimum viable ?' },
      { speaker: 'client', text: 'On a listé 25 features qu\'on veut absolument...' },
      { speaker: 'jon', text: 'Red flag numéro 2. On va couper 80% de ça. Quelle est LA feature qui résout LE problème principal ?' },
      { speaker: 'client', text: 'La gestion automatisée de nos processus internes.' },
      { speaker: 'jon', text: 'Parfait. On se concentre là-dessus. Interface ultra simple, une seule fonction, mais elle marche parfaitement. Le reste ? V2.' },
      { speaker: 'client', text: 'Mais si c\'est trop basique, les investisseurs vont penser qu\'on est pas sérieux...' },
      { speaker: 'jon', text: 'Au contraire. Les investisseurs kiffent voir quelqu\'un qui ship vite et teste. Plutôt qu\'un projet théorique parfait sur PowerPoint.' },
      { speaker: 'client', text: 'Ok, on fait quoi concrètement ?' },
      { speaker: 'jon', text: 'Semaine 1-2 : wireframes + validation avec 5 beta testeurs. Semaine 3-4 : dev de la feature core. Semaine 5-6 : tests + polish. Tu démontres au salon avec des vrais retours utilisateurs.' }
    ]
  },

  // Scénario 6: Site obsolète
  {
    id: 'website-old',
    emoji: '🎨',
    title: 'Site obsolète',
    subtitle: 'Design 2015, pas responsive, zéro lead',
    service: 'dev-web',
    scrollTo: 'dev-web',
    color: 'rgba(0, 150, 255, 0.15)', // Bleu doux
    messages: [
      { speaker: 'client', text: 'Mon site date de 2015, il est moche, pas responsive... mais refaire un site ça coûte une blinde non ?' },
      { speaker: 'jon', text: 'Dépend de ce que tu veux. Site sur-mesure avec 50 pages et 200 animations ? Oui. Site propre qui convertit ? Non.' },
      { speaker: 'client', text: 'C\'est quoi la différence ?' },
      { speaker: 'jon', text: 'La plupart des sites ont 80% de contenu inutile. On garde l\'essentiel : qui t\'es, ce que tu fais, pourquoi te choisir, comment te contacter.' },
      { speaker: 'client', text: 'Mais j\'ai besoin d\'un portfolio, d\'un blog, de 15 pages services...' },
      { speaker: 'jon', text: 'Tu penses. En vrai, 90% de tes visiteurs vont sur 3 pages max. On lance avec ça, on itère après si vraiment besoin.' },
      { speaker: 'client', text: 'Délai ?' },
      { speaker: 'jon', text: '3 semaines. Site moderne, rapide, responsive, SEO friendly. Tu fournis le contenu, je gère le reste.' },
      { speaker: 'client', text: 'Et si je veux ajouter des trucs après ?' },
      { speaker: 'jon', text: 'C\'est prévu dans l\'archi. Tu peux faire évoluer facilement. Mais on lance simple et efficace d\'abord.' }
    ]
  },

  // Scénario 7: Campagnes ratées
  {
    id: 'email-fails',
    emoji: '📧',
    title: 'Campagnes ratées',
    subtitle: '2000 envois, CTA oublié',
    service: 'automatisation',
    scrollTo: 'automatisation',
    color: 'rgba(0, 217, 163, 0.15)',
    messages: [
      { speaker: 'client', text: 'J\'ai envoyé un email de lancement hier... sans le bouton d\'achat. 2000 personnes, zéro conversions.' },
      { speaker: 'jon', text: 'Aïe. Le CTA oublié. T\'es loin d\'être le seul, c\'est l\'erreur #1 en email marketing.' },
      { speaker: 'client', text: 'J\'ai trop de trucs à gérer, je check vite fait et hop. Résultat : des conneries.' },
      { speaker: 'jon', text: 'Tu gères ton emailing comment actuellement ?' },
      { speaker: 'client', text: 'Mailchimp. Je fais tout à la main, je teste pas vraiment avant d\'envoyer.' },
      { speaker: 'jon', text: 'On va te créer un workflow propre : template pré-testé, checklist automatique avant envoi, système de validation. Plus d\'emails partis sans CTA, sans lien, ou au mauvais moment.' },
      { speaker: 'client', text: 'Genre un process bête et méchant qui m\'empêche de merder ?' },
      { speaker: 'jon', text: 'Exactement. Et bonus : tu peux programmer tes séquences à l\'avance. Plus de stress de dernière minute.' }
    ]
  },

  // Scénario 8: Idée non validée
  {
    id: 'idea-validation',
    emoji: '❓',
    title: 'Idée non validée',
    subtitle: 'Super produit, zéro client',
    service: 'applications',
    scrollTo: 'applications',
    color: 'rgba(163, 0, 217, 0.15)',
    messages: [
      { speaker: 'client', text: 'J\'ai un super produit mais je trouve pas mes premiers clients. Aucune visibilité.' },
      { speaker: 'jon', text: 'Le problème à 42% : pas de market need VALIDÉ. Avant de parler visibilité, t\'as testé ton offre avec qui ?' },
      { speaker: 'client', text: 'Quelques potes, ma famille... ils ont tous dit que c\'était cool.' },
      { speaker: 'jon', text: 'Red flag. Ils vont jamais te dire que c\'est nul. T\'as demandé à quelqu\'un de PAYER ?' },
      { speaker: 'client', text: 'Euh... pas encore.' },
      { speaker: 'jon', text: 'Ok. Avant de te faire un site de ouf ou une stratégie marketing compliquée, on va valider ton concept. Landing page ultra simple, bouton pré-commande, pub ciblée à 100 balles.' },
      { speaker: 'client', text: 'Pour voir si les gens sortent vraiment leur CB ?' },
      { speaker: 'jon', text: 'Exactement. Si personne paie même avec 50% de réduc early bird, faut revoir ton concept. Si ça marche, tu lances pour de vrai avec tes premiers clients acquis.' }
    ]
  }
];

// Services avec leurs détails pour les accordéons
export interface ServiceCategory {
  id: string;
  icon: string;
  title: string;
  description: string;
  scenarios: string[]; // IDs des scénarios liés
  ctaText: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'dev-web',
    icon: '🌐',
    title: 'Développement Web',
    description: 'Sites performants, web apps modernes, refonte complète. Du one-page qui convertit à la plateforme complexe.',
    scenarios: ['website-old', 'launch-fast'],
    ctaText: 'Lancer mon projet web'
  },
  {
    id: 'automatisation',
    icon: '⚙️',
    title: 'Automatisation & Processus',
    description: 'Gagnez du temps en automatisant les tâches répétitives. Connectez vos outils, créez des workflows intelligents.',
    scenarios: ['tools-sync', 'time-lack', 'cash-flow', 'email-fails'],
    ctaText: 'Automatiser mes process'
  },
  {
    id: 'applications',
    icon: '📱',
    title: 'Applications Sur-Mesure',
    description: 'Solutions uniques pour problèmes uniques. MVP, dashboards, outils internes, validation de concept.',
    scenarios: ['data-scattered', 'launch-fast', 'idea-validation'],
    ctaText: 'Créer mon application'
  }
];

// Helper pour récupérer un scénario par ID
export function getScenarioById(id: string): Scenario | undefined {
  return scenarios.find(s => s.id === id);
}

// Helper pour récupérer les scénarios d'un service
export function getScenariosByService(serviceId: string): Scenario[] {
  const category = serviceCategories.find(c => c.id === serviceId);
  if (!category) return [];
  return category.scenarios.map(id => getScenarioById(id)).filter((s): s is Scenario => s !== undefined);
}
