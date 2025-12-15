// src/data/schema.ts
// Données structurées Schema.org communes pour jonlabs.ch

export const SITE_URL = "https://jonlabs.ch";

export const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  "name": "Jon Labs",
  "alternateName": "Jonathan Vouilloz",
  "url": SITE_URL,
  "logo": {
    "@type": "ImageObject",
    "url": `${SITE_URL}/og-image.svg`,
    "width": 512,
    "height": 512
  },
  "image": `${SITE_URL}/og-image.svg`,
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
    "https://github.com/jonathanvouilloz"
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
  "image": `${SITE_URL}/og-image.svg`,
  "jobTitle": "Créateur de solutions digitales",
  "description": "Développeur web et créateur polyvalent basé à Genève. Spécialisé en développement web, automatisation et validation d'idées pour entrepreneurs.",
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
  "knowsAbout": [
    "Développement Web",
    "Automatisation",
    "MVP",
    "Astro",
    "React",
    "Node.js",
    "Supabase",
    "Make",
    "Zapier"
  ],
  "sameAs": [
    "https://www.linkedin.com/in/jonathan-vouilloz-3b5741139/",
    "https://github.com/jonathanvouilloz"
  ]
};

export const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#localbusiness`,
  "name": "Jon Labs",
  "image": `${SITE_URL}/og-image.svg`,
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
  "areaServed": ["Genève", "Vaud", "Valais", "Suisse Romande"]
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
  "inLanguage": "fr-CH",
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${SITE_URL}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

// Services data pour ItemList
export const servicesListData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Services Jon Labs",
  "description": "Services de développement web, automatisation et validation d'idées pour entrepreneurs et PME",
  "url": `${SITE_URL}/services`,
  "numberOfItems": 7,
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
        "name": "Refonte de site web",
        "url": `${SITE_URL}/services/refonte-site-web`
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
        "name": "Intégration d'outils",
        "url": `${SITE_URL}/services/integration-outils`
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Service",
        "name": "Automatisation",
        "url": `${SITE_URL}/services/automatisation`
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Service",
        "name": "Validation d'idée",
        "url": `${SITE_URL}/services/validation-idee`
      }
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "Service",
        "name": "Développement MVP",
        "url": `${SITE_URL}/services/developpement-mvp`
      }
    }
  ]
};

// Données de services individuels
export const serviceSchemas = {
  "creation-site-web": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/creation-site-web#service`,
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
  "refonte-site-web": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/refonte-site-web#service`,
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
    "@id": `${SITE_URL}/services/outils-sur-mesure#service`,
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
    "@id": `${SITE_URL}/services/integration-outils#service`,
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
    "@id": `${SITE_URL}/services/automatisation#service`,
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
    "@id": `${SITE_URL}/services/validation-idee#service`,
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
    "@id": `${SITE_URL}/services/developpement-mvp#service`,
    "name": "Développement MVP à Genève",
    "url": `${SITE_URL}/services/developpement-mvp`,
    "description": "Prototype fonctionnel en 2-3 semaines. Partenaire technique pour startups et PME souhaitant tester rapidement leur concept.",
    "provider": { "@id": `${SITE_URL}/#organization` },
    "areaServed": ["Genève", "Vaud", "Suisse Romande"],
    "serviceType": "Développement MVP"
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
