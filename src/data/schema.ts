// src/data/schema.ts
// Données structurées Schema.org communes pour jonlabs.ch

export const SITE_URL = "https://www.jonlabs.ch";

export const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  "name": "Jon Labs",
  "alternateName": "Jonathan Vouilloz",
  "url": SITE_URL,
  "logo": {
    "@type": "ImageObject",
    "url": `${SITE_URL}/og-image.png`,
    "width": 512,
    "height": 512
  },
  "image": `${SITE_URL}/og-image.png`,
  "description": "Laboratoire créatif de Jonathan Vouilloz. Développement web, automatisation et validation d'idées pour entrepreneurs et PME en Suisse romande.",
  "founder": {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`
  },
  "foundingDate": "2024",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "120 chemin de la montagne",
    "addressLocality": "Chêne-Bougeries",
    "addressRegion": "GE",
    "postalCode": "1224",
    "addressCountry": "CH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 46.1932,
    "longitude": 6.1904
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+41789447707",
    "contactType": "customer service",
    "availableLanguage": ["French", "English"]
  },
  "sameAs": [
    "https://www.linkedin.com/in/jonathan-vouilloz-3b5741139/",
    "https://github.com/jonathanvouilloz",
    "https://www.youtube.com/@jonvolio",
    "https://substack.com/@jonvolio"
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Genève"
    },
    {
      "@type": "State",
      "name": "Vaud"
    },
    {
      "@type": "Place",
      "name": "Suisse Romande"
    }
  ]
};

export const personData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  "name": "Jonathan Vouilloz",
  "givenName": "Jonathan",
  "familyName": "Vouilloz",
  "alternateName": "Jon",
  "url": `${SITE_URL}/about`,
  "image": {
    "@type": "ImageObject",
    "url": `${SITE_URL}/images/jonathan-vouilloz.webp`,
    "caption": "Jonathan Vouilloz — développeur web freelance à Genève"
  },
  "jobTitle": "Développeur web freelance",
  "description": "Développeur web freelance basé à Genève. Plus de 8 ans d'expérience à accompagner des PME romandes sur trois fronts : sites web sur-mesure, automatisation (Make, Zapier, n8n) et SEO local.",
  "email": "contact@jonlabs.ch",
  "telephone": "+41789447707",
  "nationality": {
    "@type": "Country",
    "name": "Suisse"
  },
  "worksFor": {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "120 chemin de la montagne",
    "addressLocality": "Chêne-Bougeries",
    "postalCode": "1224",
    "addressCountry": "CH"
  },
  "alumniOf": [
    {
      "@type": "CollegeOrUniversity",
      "name": "Haute École de Gestion de Genève (HEG)",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Genève",
        "addressCountry": "CH"
      }
    }
  ],
  "knowsAbout": [
    "Développement Web",
    "Astro",
    "React",
    "Node.js",
    "TypeScript",
    "Automatisation",
    "Make",
    "Zapier",
    "n8n",
    "Supabase",
    "PostgreSQL",
    "SEO local",
    "Google Business Profile",
    "GEO / IA Search"
  ],
  "knowsLanguage": ["fr-CH", "en"],
  "sameAs": [
    "https://www.linkedin.com/in/jonathan-vouilloz-3b5741139/",
    "https://github.com/jonathanvouilloz",
    "https://www.youtube.com/@jonvolio",
    "https://substack.com/@jonvolio"
  ]
};

export const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#localbusiness`,
  "name": "Jon Labs",
  "image": `${SITE_URL}/og-image.png`,
  "url": SITE_URL,
  "telephone": "+41789447707",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "120 chemin de la montagne",
    "addressLocality": "Chêne-Bougeries",
    "addressRegion": "GE",
    "postalCode": "1224",
    "addressCountry": "CH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 46.1932,
    "longitude": 6.1904
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "areaServed": ["Genève", "Vaud", "Valais", "Suisse Romande"],
  "sameAs": [
    "https://www.linkedin.com/in/jonathan-vouilloz-3b5741139/",
    "https://github.com/jonathanvouilloz",
    "https://www.youtube.com/@jonvolio",
    "https://substack.com/@jonvolio"
  ]
};

export const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "name": "Jon Labs",
  "url": SITE_URL,
  "publisher": {
    "@id": `${SITE_URL}/#organization`
  },
  "inLanguage": "fr-CH"
};

// Services data pour ItemList
export const servicesListData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Services Jon Labs",
  "description": "Services de développement web et de référencement local pour entrepreneurs et PME en Suisse romande",
  "url": `${SITE_URL}/services`,
  "numberOfItems": 8,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Création de site web",
        "url": `${SITE_URL}/services/creation-site-web`
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Développement MVP",
        "url": `${SITE_URL}/services/developpement-mvp`
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "Outils sur mesure",
        "url": `${SITE_URL}/services/outils-sur-mesure`
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "name": "Référencement local",
        "url": `${SITE_URL}/services/referencement-local`
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Service",
        "name": "Gestion fiche Google My Business",
        "url": `${SITE_URL}/services/gestion-fiche-google`
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Service",
        "name": "Développeur Webflow",
        "url": `${SITE_URL}/services/developpeur-webflow`
      }
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "Service",
        "name": "Freelance WordPress",
        "url": `${SITE_URL}/services/developpeur-wordpress`
      }
    },
    {
      "@type": "ListItem",
      "position": 8,
      "item": {
        "@type": "Service",
        "name": "Formation IA pour équipes",
        "url": `${SITE_URL}/services/formation-ia-equipe`
      }
    }
  ]
};

// Données de services individuels
export const serviceSchemas = {
  "consultant-ia": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/consultant-ia/#service`,
    "name": "Consultant IA à Genève — agents IA et automatisation pour PME",
    "url": `${SITE_URL}/consultant-ia`,
    "description": "Conseil, conception et intégration d'agents IA et d'automatisations pour PME et indépendants en Suisse romande. Freelance basé à Genève, prix CHF transparents, conformité nLPD maîtrisée.",
    "provider": { "@id": `${SITE_URL}/#organization` },
    "areaServed": ["Genève", "Vaud", "Suisse Romande"],
    "serviceType": "Conseil et intégration en intelligence artificielle",
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "2500",
        "priceCurrency": "CHF",
        "minPrice": "2500"
      },
      "description": "À partir de CHF 2'500"
    }
  },
  "creation-site-web": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/creation-site-web/#service`,
    "name": "Création de site web à Genève",
    "url": `${SITE_URL}/services/creation-site-web`,
    "description": "Création de sites web professionnels pour entrepreneurs et PME en Suisse romande. Sites vitrines modernes, rapides et optimisés pour Google.",
    "provider": { "@id": `${SITE_URL}/#organization` },
    "areaServed": ["Genève", "Vaud", "Suisse Romande"],
    "serviceType": "Développement Web",
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "1500",
        "priceCurrency": "CHF",
        "minPrice": "1500"
      },
      "description": "À partir de CHF 1'500"
    }
  },
  "developpeur-webflow": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/developpeur-webflow/#service`,
    "name": "Développeur Webflow freelance à Genève",
    "url": `${SITE_URL}/services/developpeur-webflow`,
    "description": "Création, refonte et e-commerce Webflow pour PME et indépendants en Suisse romande. Sites rapides, gérables en autonomie, optimisés pour Google.",
    "provider": { "@id": `${SITE_URL}/#organization` },
    "areaServed": ["Genève", "Vaud", "Suisse Romande"],
    "serviceType": "Développement Webflow",
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "1490",
        "priceCurrency": "CHF",
        "minPrice": "1490"
      },
      "description": "À partir de CHF 1'490"
    }
  },
  "developpeur-wordpress": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/developpeur-wordpress/#service`,
    "name": "Freelance WordPress à Genève",
    "url": `${SITE_URL}/services/developpeur-wordpress`,
    "description": "Création de site WordPress, refonte de site lent ou obsolète, migration vers une stack moderne. Freelance basé à Genève, service Suisse romande.",
    "provider": { "@id": `${SITE_URL}/#organization` },
    "areaServed": ["Genève", "Vaud", "Suisse Romande"],
    "serviceType": "Développement WordPress",
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "1490",
        "priceCurrency": "CHF",
        "minPrice": "1490"
      },
      "description": "À partir de CHF 1'490"
    }
  },
  "refonte-site-web": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/refonte-site-web/#service`,
    "name": "Refonte de site web à Genève",
    "url": `${SITE_URL}/services/refonte-site-web`,
    "description": "Modernisation de votre site web existant. Design responsive, performances optimisées, référencement Google intégré.",
    "provider": { "@id": `${SITE_URL}/#organization` },
    "areaServed": ["Genève", "Vaud", "Suisse Romande"],
    "serviceType": "Refonte Web"
  },
  "outils-sur-mesure": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/outils-sur-mesure/#service`,
    "name": "Développement d'outils sur mesure",
    "url": `${SITE_URL}/services/outils-sur-mesure`,
    "description": "Applications et tableaux de bord adaptés à vos besoins spécifiques. Outils internes, CRM métier, portails clients.",
    "provider": { "@id": `${SITE_URL}/#organization` },
    "areaServed": ["Genève", "Vaud", "Suisse Romande"],
    "serviceType": "Développement sur mesure"
  },
  "integration-outils": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/integration-outils/#service`,
    "name": "Intégration d'outils et synchronisation",
    "url": `${SITE_URL}/services/integration-outils`,
    "description": "Connectez vos applications pour que les données circulent automatiquement. CRM, comptabilité, emails, Stripe, TWINT.",
    "provider": { "@id": `${SITE_URL}/#organization` },
    "areaServed": ["Genève", "Vaud", "Suisse Romande"],
    "serviceType": "Intégration logicielle"
  },
  "automatisation": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/automatisation/#service`,
    "name": "Automatisation de tâches pour PME",
    "url": `${SITE_URL}/services/automatisation`,
    "description": "Récupérez 5-10h par semaine en automatisant vos tâches répétitives. Relances, factures, rapports, notifications.",
    "provider": { "@id": `${SITE_URL}/#organization` },
    "areaServed": ["Genève", "Vaud", "Suisse Romande"],
    "serviceType": "Automatisation"
  },
  "validation-idee": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/validation-idee/#service`,
    "name": "Validation d'idée business en Suisse",
    "url": `${SITE_URL}/services/validation-idee`,
    "description": "Testez votre idée avant d'investir. Landing page, campagne pub ciblée, métriques concrètes en 1-2 semaines.",
    "provider": { "@id": `${SITE_URL}/#organization` },
    "areaServed": ["Genève", "Vaud", "Suisse Romande"],
    "serviceType": "Validation de concept"
  },
  "developpement-mvp": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/developpement-mvp/#service`,
    "name": "Développement MVP à Genève",
    "url": `${SITE_URL}/services/developpement-mvp`,
    "description": "Prototype fonctionnel en 2-3 semaines. Partenaire technique pour startups et PME souhaitant tester rapidement leur concept.",
    "provider": { "@id": `${SITE_URL}/#organization` },
    "areaServed": ["Genève", "Vaud", "Suisse Romande"],
    "serviceType": "Développement MVP"
  },
  "developpement-application-mobile": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/developpement-application-mobile/#service`,
    "name": "Développeur application mobile à Genève",
    "url": `${SITE_URL}/services/developpement-application-mobile`,
    "description": "Développement d'applications mobiles iOS et Android pour PME et startups romandes. Freelance à Genève : app native, hybride, Flutter/React Native ou PWA, publication sur les stores, devis clair en CHF.",
    "provider": { "@id": `${SITE_URL}/#organization` },
    "areaServed": ["Genève", "Vaud", "Suisse Romande"],
    "serviceType": "Développement application mobile"
  },
  "referencement-local": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/referencement-local/#service`,
    "name": "Référencement local à Genève — Freelance SEO PME romandes",
    "url": `${SITE_URL}/services/referencement-local`,
    "description": "Référencement local pour PME à Genève et Suisse romande. Freelance SEO transparent, outils Google gratuits, sans contrat 12 mois. #1 sur sa niche prouvé en 5 mois sur le cas Lécureux. Audit gratuit.",
    "provider": { "@id": `${SITE_URL}/#organization` },
    "areaServed": ["Genève", "Vaud", "Suisse Romande"],
    "serviceType": "Référencement local"
  },
  "gestion-fiche-google": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/gestion-fiche-google/#service`,
    "name": "Gestion de fiche Google My Business",
    "url": `${SITE_URL}/services/gestion-fiche-google`,
    "description": "Création, optimisation et gestion mensuelle de votre fiche Google Business Profile : posts hebdomadaires, gestion illimitée des avis, suivi positions. Setup unique CHF 590 + mensuel CHF 300 sans engagement.",
    "provider": { "@id": `${SITE_URL}/#organization` },
    "areaServed": ["Genève", "Vaud", "Suisse Romande", "Francophonie"],
    "serviceType": "Gestion Google Business Profile",
    "offers": [
      {
        "@type": "Offer",
        "name": "Setup unique",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "590",
          "priceCurrency": "CHF"
        },
        "description": "Audit + optimisation complète + schema LocalBusiness + système d'avis"
      },
      {
        "@type": "Offer",
        "name": "Mensuel tout inclus",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "300",
          "priceCurrency": "CHF",
          "billingIncrement": 1,
          "unitCode": "MON"
        },
        "description": "Posts hebdomadaires, réponses avis illimitées, reporting mensuel — sans engagement"
      }
    ]
  },
  "metiers/ia-fiduciaire": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/metiers/ia-fiduciaire/#service`,
    "name": "IA pour fiduciaires et experts-comptables en Suisse romande",
    "url": `${SITE_URL}/metiers/ia-fiduciaire`,
    "description": "Agents IA et automatisation pour fiduciaires romandes : tri et pré-imputation des pièces (Bexio, Crésus), relances des justificatifs, décomptes TVA, veille légale. Prix CHF, conformité nLPD, validation humaine.",
    "provider": { "@id": `${SITE_URL}/#organization` },
    "areaServed": ["Genève", "Vaud", "Suisse Romande"],
    "serviceType": "Intelligence artificielle pour fiduciaires",
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "2500",
        "priceCurrency": "CHF",
        "minPrice": "2500"
      },
      "description": "À partir de CHF 2'500"
    }
  },
  "metiers/ia-agence-immobiliere": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/metiers/ia-agence-immobiliere/#service`,
    "name": "IA pour agences immobilières et régies en Suisse romande",
    "url": `${SITE_URL}/metiers/ia-agence-immobiliere`,
    "description": "Agents IA et automatisation pour agences immobilières et régies romandes : qualification des leads, tri des dossiers de candidature, rédaction d'annonces, relances et suivi des échéances. Prix CHF, un seul interlocuteur.",
    "provider": { "@id": `${SITE_URL}/#organization` },
    "areaServed": ["Genève", "Vaud", "Suisse Romande"],
    "serviceType": "Intelligence artificielle pour l'immobilier",
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "2500",
        "priceCurrency": "CHF",
        "minPrice": "2500"
      },
      "description": "À partir de CHF 2'500"
    }
  },
  "formation-ia-equipe": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/formation-ia-equipe/#service`,
    "name": "Formation IA pour équipes en Suisse romande",
    "url": `${SITE_URL}/services/formation-ia-equipe`,
    "description": "Formation IA sur-mesure pour les équipes de PME romandes : cadrage des usages, prise en main des agents et outils IA, garde-fous et bonnes pratiques nLPD. En présentiel à Genève ou à distance, prix en CHF.",
    "provider": { "@id": `${SITE_URL}/#organization` },
    "areaServed": ["Genève", "Vaud", "Suisse Romande"],
    "serviceType": "Formation en intelligence artificielle",
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "1200",
        "priceCurrency": "CHF",
        "minPrice": "1200"
      },
      "description": "À partir de CHF 1'200 la session"
    }
  },
  "hermes": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/hermes/#service`,
    "name": "Hermès — agent IA pour PME romandes",
    "url": `${SITE_URL}/hermes`,
    "description": "Hermès : agent IA prêt à déployer pour les PME romandes. Tri d'e-mails, relances, préparation de documents et réponses de premier niveau, intégré à vos outils. Cadrage rapide, prix CHF affichés, conformité nLPD.",
    "provider": { "@id": `${SITE_URL}/#organization` },
    "areaServed": ["Genève", "Vaud", "Suisse Romande"],
    "serviceType": "Agent IA pour PME",
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "2500",
        "priceCurrency": "CHF",
        "minPrice": "2500"
      },
      "description": "À partir de CHF 2'500"
    }
  }
};

// Blog schema
export const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/blog#blog`,
  "url": `${SITE_URL}/blog`,
  "name": "Blog Jon Labs",
  "description": "Articles sur le développement web, l'automatisation, l'entrepreneuriat et les passions de Jonathan Vouilloz.",
  "publisher": { "@id": `${SITE_URL}/#organization` },
  "author": { "@id": `${SITE_URL}/#person` },
  "inLanguage": "fr-CH",
  "isPartOf": { "@id": `${SITE_URL}/#website` }
};
