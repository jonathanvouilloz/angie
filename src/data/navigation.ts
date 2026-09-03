export type NavType = 'flat' | 'mega';

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  external?: boolean;
  badge?: 'new' | 'featured';
}

export interface NavColumn {
  title: string;
  items: NavItem[];
}

export interface Spotlight {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface NavSection {
  label: string;
  href: string;
  type: NavType;
  columns?: NavColumn[];
  spotlight?: Spotlight;
  footer?: NavItem;
}

export const mainNav: NavSection[] = [
  {
    label: 'Sites & SEO',
    href: '/services',
    type: 'mega',
    columns: [
      {
        title: 'Sites web',
        items: [
          { label: 'Création de site', href: '/services/creation-site-web', icon: 'ri-layout-line' },
          { label: 'Refonte de site', href: '/services/refonte-site-web', icon: 'ri-magic-line' },
          { label: 'Développeur Webflow', href: '/services/developpeur-webflow', icon: 'ri-pencil-ruler-2-line' },
          { label: 'Freelance WordPress', href: '/services/developpeur-wordpress', icon: 'ri-wordpress-line' },
        ],
      },
      {
        title: 'Référencement',
        items: [
          { label: 'Référencement local', href: '/services/referencement-local', icon: 'ri-map-pin-line' },
          { label: 'Gestion fiche Google', href: '/services/gestion-fiche-google', icon: 'ri-store-2-line' },
          { label: 'Site + SEO dès 1\'490 CHF', href: '/tarifs', icon: 'ri-price-tag-3-line' },
        ],
      },
      {
        title: 'Apps & sur-mesure',
        items: [
          { label: 'Application mobile', href: '/services/developpement-application-mobile', icon: 'ri-smartphone-line' },
          { label: 'Développement MVP', href: '/services/developpement-mvp', icon: 'ri-rocket-line' },
          { label: 'Validation d\'idée', href: '/services/validation-idee', icon: 'ri-lightbulb-flash-line' },
          { label: 'Outils sur mesure', href: '/services/outils-sur-mesure', icon: 'ri-tools-line' },
        ],
      },
    ],
    spotlight: {
      icon: 'ri-star-fill',
      title: 'Tu cherches un freelance basé à Genève ?',
      description: 'Développeur freelance basé à Genève, disponible pour votre projet.',
      href: '/developpeur-web-freelance-geneve',
    },
  },
  {
    label: 'IA & Automatisation',
    href: '/consultant-ia',
    type: 'mega',
    columns: [
      {
        title: 'Conseil & agents',
        items: [
          { label: 'Cadrage projet IA', href: '/consultant-ia', icon: 'ri-brain-line' },
          { label: 'Agents IA sur-mesure', href: '/consultant-ia#agents-sur-mesure', icon: 'ri-robot-2-line' },
          { label: 'Agent Hermès', href: '/hermes', icon: 'ri-message-3-line' },
        ],
      },
      {
        title: 'Automatiser',
        items: [
          { label: 'Automatisation de tâches', href: '/services/automatisation', icon: 'ri-loop-left-line' },
          { label: 'Intégration d\'outils', href: '/services/integration-outils', icon: 'ri-plug-line' },
          { label: 'Formation IA équipe', href: '/services/formation-ia-equipe', icon: 'ri-presentation-line' },
        ],
      },
      {
        title: 'Par métier',
        items: [
          { label: 'IA pour fiduciaires', href: '/metiers/ia-fiduciaire', icon: 'ri-calculator-line' },
          { label: 'IA pour agences immobilières', href: '/metiers/ia-agence-immobiliere', icon: 'ri-building-line' },
        ],
      },
      {
        title: 'Guides IA',
        items: [
          { label: 'Tous les guides', href: '/guides', icon: 'ri-book-open-line', badge: 'featured' },
          { label: 'Mettre en place l\'IA en entreprise', href: '/guides/mettre-en-place-ia-entreprise-guide', icon: 'ri-compass-3-line' },
          { label: 'Automatisation PME : guide complet', href: '/blog/automatisation-pme-suisse-guide-complet', icon: 'ri-loop-left-line' },
        ],
      },
    ],
    spotlight: {
      icon: 'ri-brain-line',
      title: 'Cadrer votre projet IA',
      description: 'Conseil et intégration d\'agents IA pour PME romandes — basé à Genève, prix CHF',
      href: '/consultant-ia',
    },
  },
  {
    label: 'Réalisations',
    href: '/portfolio',
    type: 'flat',
  },
  {
    label: 'Tarifs',
    href: '/tarifs',
    type: 'flat',
  },
  {
    label: 'Articles',
    href: '/blog',
    type: 'mega',
    columns: [
      {
        title: 'À la une',
        items: [
          { label: 'Apparaître dans les IA 2026', href: '/blog/geo-seo-ia', icon: 'ri-fire-fill', badge: 'featured' },
          { label: 'Prix site web Suisse 2026', href: '/blog/prix-site-web-suisse-2026', icon: 'ri-price-tag-3-line' },
          { label: '15 signes site web dort', href: '/blog/15-signes-site-web-dort', icon: 'ri-pulse-line' },
        ],
      },
      {
        title: 'Catégories',
        items: [
          { label: 'IA & GEO', href: '/blog/tag/geo', icon: 'ri-sparkling-2-line' },
          { label: 'Prix & tarifs', href: '/blog/tag/prix', icon: 'ri-coins-line' },
          { label: 'Local & Romandie', href: '/blog/tag/suisse-romande', icon: 'ri-map-pin-line' },
          { label: 'Automatisation', href: '/blog/tag/automatisation', icon: 'ri-loop-left-line' },
          { label: 'SEO', href: '/blog/tag/seo', icon: 'ri-search-line' },
        ],
      },
      {
        title: 'Outils gratuits',
        items: [
          { label: 'Reddit Dashboard', href: '/outils/reddit-dashboard', icon: 'ri-reddit-line', badge: 'new' },
          { label: 'Checklist 15 signes site dort', href: '/outils/checklist-15-signes-site-dort', icon: 'ri-checkbox-line' },
          { label: 'Checklist commerce Google', href: '/outils/checklist-commerce-google', icon: 'ri-checkbox-line' },
          { label: 'Calculateur coût site dormant', href: '/blog/cout-site-web-dormant-calculateur', icon: 'ri-calculator-line' },
        ],
      },
    ],
    spotlight: {
      icon: 'ri-article-line',
      title: 'Voir tous les articles',
      description: 'Guides, retours d\'expérience et analyses sur le web et l\'automatisation',
      href: '/blog',
    },
  },
  {
    label: 'À propos',
    href: '/about',
    type: 'flat',
  },
];

export const ctaContact: NavItem = {
  label: 'Démarrer mon projet',
  href: '/contact',
};

// Silos géographiques — sortis du méga-menu (Phase 4). Exposés un temps dans le fat
// footer, colonne « Zones & régions » RETIRÉE volontairement le 10.07.2026 (d247cc7) :
// jugée sans plus-value, et un lien boilerplate répété sitewide pèse peu.
// Ces exports ne sont plus lus que par styleguide-nav.astro — ce n'est PAS un oubli
// de câblage, ne pas les rebrancher au footer sans rouvrir la décision.
// Le maillage réel de ces pages est éditorial : villes web via GeoZonesStrip (home),
// /services, /developpement-web (hub) et les cross-links voisins → 6 à 9 liens en
// corps chacune. Régions IA : voir le hub /consultant-ia.
export const footerZonesWeb: NavItem[] = [
  { label: 'Développeur web Annemasse', href: '/developpement-web/annemasse' },
  { label: 'Développeur web Gaillard', href: '/developpement-web/gaillard' },
  { label: 'Développeur web Ville-la-Grand', href: '/developpement-web/ville-la-grand' },
  { label: 'Développeur web Saint-Julien', href: '/developpement-web/saint-julien-en-genevois' },
  { label: 'Développeur web La Roche-sur-Foron', href: '/developpement-web/la-roche-sur-foron' },
];

export const footerRegionsIA: NavItem[] = [
  { label: 'Consultant IA Genève', href: '/consultant-ia/geneve' },
  { label: 'Consultant IA Lausanne', href: '/consultant-ia/lausanne' },
];
