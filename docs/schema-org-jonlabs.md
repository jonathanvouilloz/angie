# Jon Labs - Données Structurées Schema.org

## Instructions pour Claude Code

Ce document contient toutes les données structurées Schema.org pour le site jonlabs.ch.

### À faire avant implémentation :
1. **Logo** : Ajouter le fichier `logo.webp` dans `/public/images/` (ou créer un placeholder si absent)
2. **Photo Jonathan** : S'assurer que `jonathan-vouilloz.jpg` existe dans `/public/images/`
3. **OG Image** : Créer `og-image.webp` pour le partage social

### Architecture recommandée :

```
src/
├── data/
│   └── schema.ts          # Données communes exportées
├── components/
│   └── SchemaOrg.astro    # Composant réutilisable
└── layouts/
    └── Layout.astro       # Import du composant
```

---

## 1. Données Communes (schema.ts)

```typescript
// src/data/schema.ts

export const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://jonlabs.ch/#organization",
  "name": "Jon Labs",
  "alternateName": "Jonathan Vouilloz",
  "url": "https://jonlabs.ch",
  "logo": {
    "@type": "ImageObject",
    "url": "https://jonlabs.ch/images/logo.webp",
    "width": 512,
    "height": 512
  },
  "image": "https://jonlabs.ch/images/og-image.webp",
  "description": "Laboratoire créatif de Jonathan Vouilloz. Développement web, automatisation et validation d'idées pour entrepreneurs et PME en Suisse romande.",
  "founder": {
    "@type": "Person",
    "@id": "https://jonlabs.ch/#person"
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
  "@id": "https://jonlabs.ch/#person",
  "name": "Jonathan Vouilloz",
  "givenName": "Jonathan",
  "familyName": "Vouilloz",
  "alternateName": "Jon",
  "url": "https://jonlabs.ch/about",
  "image": "https://jonlabs.ch/images/jonathan-vouilloz.jpg",
  "jobTitle": "Créateur de solutions digitales",
  "description": "Développeur web et créateur polyvalent basé à Genève. Spécialisé en développement web, automatisation et validation d'idées pour entrepreneurs.",
  "worksFor": {
    "@type": "Organization",
    "@id": "https://jonlabs.ch/#organization"
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
  "@id": "https://jonlabs.ch/#localbusiness",
  "name": "Jon Labs",
  "image": "https://jonlabs.ch/images/logo.webp",
  "url": "https://jonlabs.ch",
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
  "@id": "https://jonlabs.ch/#website",
  "name": "Jon Labs",
  "url": "https://jonlabs.ch",
  "publisher": {
    "@id": "https://jonlabs.ch/#organization"
  },
  "inLanguage": "fr-CH",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://jonlabs.ch/blog?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};
```

---

## 2. Composant SchemaOrg.astro

```astro
---
// src/components/SchemaOrg.astro
interface Props {
  schema: object | object[];
}

const { schema } = Astro.props;
const schemas = Array.isArray(schema) ? schema : [schema];
---

{schemas.map((s) => (
  <script type="application/ld+json" set:html={JSON.stringify(s)} />
))}
```

---

## 3. Schémas par Page

### Homepage (/)

```typescript
// Dans la page index.astro ou via un fichier dédié
import { organizationData, localBusinessData, websiteData } from '../data/schema';

const homepageSchema = [
  organizationData,
  localBusinessData,
  websiteData,
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://jonlabs.ch/#webpage",
    "url": "https://jonlabs.ch",
    "name": "Jon Labs | Développement Web & Automatisation à Genève",
    "description": "Développement web, automatisation et validation d'idées pour entrepreneurs et PME en Suisse romande. Partenaire digital de confiance.",
    "isPartOf": {
      "@id": "https://jonlabs.ch/#website"
    },
    "about": {
      "@id": "https://jonlabs.ch/#organization"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://jonlabs.ch/images/og-image.webp"
    }
  }
];
```

---

### About (/about)

```typescript
import { personData, organizationData } from '../data/schema';

const aboutSchema = [
  personData,
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "url": "https://jonlabs.ch/about",
    "name": "À propos de Jonathan Vouilloz | Jon Labs",
    "description": "Découvrez le parcours de Jonathan Vouilloz, créateur de solutions digitales à Genève. Développeur polyvalent, passionné de badminton et jeux de société.",
    "mainEntity": {
      "@id": "https://jonlabs.ch/#person"
    },
    "isPartOf": {
      "@id": "https://jonlabs.ch/#website"
    }
  }
];
```

---

### Services (/services)

```typescript
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Services Jon Labs",
  "description": "Services de développement web, automatisation et validation d'idées pour entrepreneurs et PME",
  "url": "https://jonlabs.ch/services",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Création de site web",
        "url": "https://jonlabs.ch/services/creation-site-web"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Refonte de site web",
        "url": "https://jonlabs.ch/services/refonte-site-web"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "Outils sur mesure",
        "url": "https://jonlabs.ch/services/outils-sur-mesure"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "name": "Intégration d'outils",
        "url": "https://jonlabs.ch/services/integration-outils"
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Service",
        "name": "Automatisation",
        "url": "https://jonlabs.ch/services/automatisation"
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Service",
        "name": "Validation d'idée",
        "url": "https://jonlabs.ch/services/validation-idee"
      }
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "Service",
        "name": "Développement MVP",
        "url": "https://jonlabs.ch/services/developpement-mvp"
      }
    }
  ]
};
```

---

### Services Détaillés

#### Création de site web (/services/creation-site-web)

```typescript
const creationSiteSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://jonlabs.ch/services/creation-site-web#service",
  "name": "Création de site web à Genève",
  "url": "https://jonlabs.ch/services/creation-site-web",
  "description": "Création de sites web professionnels pour entrepreneurs et PME en Suisse romande. Sites vitrines modernes, rapides et optimisés pour Google.",
  "provider": {
    "@id": "https://jonlabs.ch/#organization"
  },
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
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Options de création de site",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Site vitrine simple"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Site avec blog"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Site e-commerce"
        }
      }
    ]
  }
};
```

#### Refonte de site web (/services/refonte-site-web)

```typescript
const refonteSiteSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://jonlabs.ch/services/refonte-site-web#service",
  "name": "Refonte de site web à Genève",
  "url": "https://jonlabs.ch/services/refonte-site-web",
  "description": "Modernisation de votre site web existant. Design responsive, performances optimisées, référencement Google intégré.",
  "provider": {
    "@id": "https://jonlabs.ch/#organization"
  },
  "areaServed": ["Genève", "Vaud", "Suisse Romande"],
  "serviceType": "Refonte Web",
  "offers": {
    "@type": "Offer",
    "description": "Devis sur mesure selon complexité"
  }
};
```

#### Outils sur mesure (/services/outils-sur-mesure)

```typescript
const outilsSurMesureSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://jonlabs.ch/services/outils-sur-mesure#service",
  "name": "Développement d'outils sur mesure",
  "url": "https://jonlabs.ch/services/outils-sur-mesure",
  "description": "Applications et tableaux de bord adaptés à vos besoins spécifiques. Outils internes, CRM métier, portails clients.",
  "provider": {
    "@id": "https://jonlabs.ch/#organization"
  },
  "areaServed": ["Genève", "Vaud", "Suisse Romande"],
  "serviceType": "Développement sur mesure"
};
```

#### Intégration d'outils (/services/integration-outils)

```typescript
const integrationOutilsSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://jonlabs.ch/services/integration-outils#service",
  "name": "Intégration d'outils et synchronisation",
  "url": "https://jonlabs.ch/services/integration-outils",
  "description": "Connectez vos applications pour que les données circulent automatiquement. CRM, comptabilité, emails, Stripe, TWINT.",
  "provider": {
    "@id": "https://jonlabs.ch/#organization"
  },
  "areaServed": ["Genève", "Vaud", "Suisse Romande"],
  "serviceType": "Intégration logicielle"
};
```

#### Automatisation (/services/automatisation)

```typescript
const automatisationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://jonlabs.ch/services/automatisation#service",
  "name": "Automatisation de tâches pour PME",
  "url": "https://jonlabs.ch/services/automatisation",
  "description": "Récupérez 5-10h par semaine en automatisant vos tâches répétitives. Relances, factures, rapports, notifications.",
  "provider": {
    "@id": "https://jonlabs.ch/#organization"
  },
  "areaServed": ["Genève", "Vaud", "Suisse Romande"],
  "serviceType": "Automatisation",
  "offers": {
    "@type": "Offer",
    "description": "Rentabilisé en quelques semaines"
  }
};
```

#### Validation d'idée (/services/validation-idee)

```typescript
const validationIdeeSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://jonlabs.ch/services/validation-idee#service",
  "name": "Validation d'idée business en Suisse",
  "url": "https://jonlabs.ch/services/validation-idee",
  "description": "Testez votre idée avant d'investir. Landing page, campagne pub ciblée, métriques concrètes en 1-2 semaines.",
  "provider": {
    "@id": "https://jonlabs.ch/#organization"
  },
  "areaServed": ["Genève", "Vaud", "Suisse Romande"],
  "serviceType": "Validation de concept",
  "offers": {
    "@type": "Offer",
    "description": "Test marché dès CHF 500"
  }
};
```

#### Développement MVP (/services/developpement-mvp)

```typescript
const developpementMvpSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://jonlabs.ch/services/developpement-mvp#service",
  "name": "Développement MVP à Genève",
  "url": "https://jonlabs.ch/services/developpement-mvp",
  "description": "Prototype fonctionnel en 2-3 semaines. Partenaire technique pour startups et PME souhaitant tester rapidement leur concept.",
  "provider": {
    "@id": "https://jonlabs.ch/#organization"
  },
  "areaServed": ["Genève", "Vaud", "Suisse Romande"],
  "serviceType": "Développement MVP",
  "knowsAbout": ["MVP", "Lean Startup", "Prototype", "Développement agile"]
};
```

---

### Contact (/contact)

```typescript
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "url": "https://jonlabs.ch/contact",
  "name": "Contact | Jon Labs",
  "description": "Contactez Jon Labs pour discuter de votre projet digital. Réponse sous 24-48h.",
  "mainEntity": {
    "@type": "Organization",
    "@id": "https://jonlabs.ch/#organization"
  },
  "isPartOf": {
    "@id": "https://jonlabs.ch/#website"
  }
};
```

---

### Portfolio (/portfolio)

```typescript
const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "url": "https://jonlabs.ch/portfolio",
  "name": "Portfolio | Jon Labs",
  "description": "Découvrez les projets réalisés par Jon Labs : sites web, automatisations, applications sur mesure pour clients suisses.",
  "isPartOf": {
    "@id": "https://jonlabs.ch/#website"
  },
  "about": {
    "@id": "https://jonlabs.ch/#organization"
  }
};
```

---

### Lab (/lab)

```typescript
const labSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "url": "https://jonlabs.ch/lab",
  "name": "Le Lab | Jon Labs",
  "description": "Projets personnels, expérimentations et passions de Jonathan Vouilloz. Jeux de société, photographie, badminton, crypto.",
  "isPartOf": {
    "@id": "https://jonlabs.ch/#website"
  },
  "mainEntity": {
    "@id": "https://jonlabs.ch/#person"
  }
};
```

---

### Outils (/outils)

```typescript
const outilsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "url": "https://jonlabs.ch/outils",
  "name": "Outils & Ressources | Jon Labs",
  "description": "Outils, templates et ressources utiles pour entrepreneurs et créateurs. Sélection de Jon Labs.",
  "isPartOf": {
    "@id": "https://jonlabs.ch/#website"
  }
};
```

---

### CV (/cv)

```typescript
import { personData } from '../data/schema';

const cvSchema = [
  personData,
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "url": "https://jonlabs.ch/cv",
    "name": "CV de Jonathan Vouilloz | Jon Labs",
    "description": "Parcours professionnel et compétences de Jonathan Vouilloz. Développeur web, automatisation, création d'entreprise.",
    "mainEntity": {
      "@id": "https://jonlabs.ch/#person"
    },
    "isPartOf": {
      "@id": "https://jonlabs.ch/#website"
    }
  }
];
```

---

### Blog (/blog)

```typescript
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://jonlabs.ch/blog#blog",
  "url": "https://jonlabs.ch/blog",
  "name": "Blog Jon Labs",
  "description": "Articles sur le développement web, l'automatisation, l'entrepreneuriat et les passions de Jonathan Vouilloz.",
  "publisher": {
    "@id": "https://jonlabs.ch/#organization"
  },
  "author": {
    "@id": "https://jonlabs.ch/#person"
  },
  "inLanguage": "fr-CH",
  "isPartOf": {
    "@id": "https://jonlabs.ch/#website"
  }
};
```

---

### Articles de Blog (Template)

```typescript
// Template pour chaque article - à adapter avec les données dynamiques
function getBlogPostSchema(article: {
  title: string;
  description: string;
  slug: string;
  pubDate: string;
  image: string;
  category: string;
  tags: string[];
  readingTime: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.description,
    "url": `https://jonlabs.ch/blog/${article.slug}`,
    "datePublished": article.pubDate,
    "dateModified": article.pubDate,
    "author": {
      "@id": "https://jonlabs.ch/#person"
    },
    "publisher": {
      "@id": "https://jonlabs.ch/#organization"
    },
    "image": {
      "@type": "ImageObject",
      "url": `https://jonlabs.ch${article.image}`
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jonlabs.ch/blog/${article.slug}`
    },
    "articleSection": article.category,
    "keywords": article.tags.join(", "),
    "wordCount": article.readingTime * 200, // Estimation
    "inLanguage": "fr-CH",
    "isPartOf": {
      "@id": "https://jonlabs.ch/blog#blog"
    }
  };
}
```

#### Exemples pour les 5 articles existants :

```typescript
// Article 1: Automatisation club sportif
const articleClubSchema = getBlogPostSchema({
  title: "Gestion de club sportif en Suisse : Pourquoi Excel ne suffit plus en 2025",
  description: "Cotisations impayées, fichiers Excel chaotiques, conformité nLPD : découvrez comment l'automatisation peut soulager les bénévoles.",
  slug: "automatisation-club-sportif",
  pubDate: "2025-12-10",
  image: "/images/blog/automatisation-club-2025.webp",
  category: "tech",
  tags: ["automatisation", "clubs", "associations", "suisse", "gestion"],
  readingTime: 7
});

// Article 2: Freelance ou agence
const articleFreelanceSchema = getBlogPostSchema({
  title: "Freelance ou agence web en 2026 : comment choisir en Suisse romande ?",
  description: "Tarifs, avantages, limites : le guide complet pour choisir entre freelance et agence pour ton projet web.",
  slug: "freelance-ou-agence-web",
  pubDate: "2025-12-09",
  image: "/images/blog/agence-vs-freelance.webp",
  category: "perso",
  tags: ["freelance", "agence", "suisse", "budget", "web"],
  readingTime: 8
});

// Article 3: No-show rendez-vous
const articleNoShowSchema = getBlogPostSchema({
  title: "Rendez-vous manqués et No-shows : Le système de réservation pour sécuriser votre CA",
  description: "Réduisez les no-shows avec un système de réservation adapté : comparatif des outils, rappels SMS/WhatsApp et acomptes TWINT.",
  slug: "no-show-rendez-vous-2026",
  pubDate: "2025-12-10",
  image: "/images/blog/no-show-agendas.webp",
  category: "tech",
  tags: ["automatisation", "rendez-vous", "no-show", "praticiens", "suisse"],
  readingTime: 8
});

// Article 4: Valider idée business
const articleValidationSchema = getBlogPostSchema({
  title: "Valider ton idée de business en Suisse sans créer de Sàrl",
  description: "Tu peux tester ton idée business en Suisse sans 20k CHF. Découvre la méthode du smoke test et la raison individuelle.",
  slug: "valide-idee-business-suisse",
  pubDate: "2025-12-11",
  image: "/images/blog/valide-idee-business-suisse.webp",
  category: "tech",
  tags: ["startup", "validation", "suisse", "mvp", "entrepreneuriat"],
  readingTime: 10
});

// Article 5: 0 à 30 jours Google
const articleGoogleSchema = getBlogPostSchema({
  title: "De 0 à visible sur Google en 30 jours : plan d'action pour commerces genevois",
  description: "Plan en 4 semaines pour rendre ton commerce visible sur Google. Google Business, site one-page, réservation et avis.",
  slug: "0a30joursgooglevisible",
  pubDate: "2025-12-10",
  image: "/images/blog/0a30jours.webp",
  category: "perso",
  tags: ["google", "seo", "commerce", "genève", "local"],
  readingTime: 10
});
```

---

## 4. FAQ Schema (Optionnel - Pour les pages services)

```typescript
// À ajouter sur les pages services si elles ont une section FAQ
function getFAQSchema(faqs: Array<{question: string; answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Exemple pour la page création de site
const faqCreationSite = getFAQSchema([
  {
    question: "Combien de temps pour avoir mon site ?",
    answer: "Entre 2 et 4 semaines selon la complexité. Un site vitrine simple, c'est souvent 2-3 semaines."
  },
  {
    question: "Qu'est-ce que je dois fournir ?",
    answer: "Vos textes, vos photos et votre logo. Je m'occupe de tout le reste : structure, design, développement."
  },
  {
    question: "Je n'y connais rien en technique, c'est un problème ?",
    answer: "Pas du tout. Mon rôle est justement de traduire vos besoins en solution technique. Vous restez concentré sur votre métier."
  }
]);
```

---

## 5. Breadcrumb Schema (Pour la navigation)

```typescript
// À ajouter sur chaque page pour améliorer la navigation dans Google
function getBreadcrumbSchema(items: Array<{name: string; url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// Exemple pour /services/creation-site-web
const breadcrumbCreationSite = getBreadcrumbSchema([
  { name: "Accueil", url: "https://jonlabs.ch" },
  { name: "Services", url: "https://jonlabs.ch/services" },
  { name: "Création de site web", url: "https://jonlabs.ch/services/creation-site-web" }
]);
```

---

## 6. Implémentation dans Layout.astro

```astro
---
// src/layouts/Layout.astro
import SchemaOrg from '../components/SchemaOrg.astro';

interface Props {
  title: string;
  description: string;
  schema?: object | object[];
}

const { title, description, schema } = Astro.props;
---

<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta name="description" content={description} />
    
    <!-- Schema.org -->
    {schema && <SchemaOrg schema={schema} />}
  </head>
  <body>
    <slot />
  </body>
</html>
```

---

## 7. Checklist de Validation

Avant mise en production, vérifier :

- [ ] Logo.webp existe dans /public/images/
- [ ] jonathan-vouilloz.jpg existe dans /public/images/
- [ ] og-image.webp existe dans /public/images/
- [ ] Toutes les URLs sont en HTTPS
- [ ] Le téléphone est au format international (+41...)
- [ ] Les liens LinkedIn et GitHub sont corrects
- [ ] Tester avec [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Tester avec [Schema.org Validator](https://validator.schema.org/)

---

## Notes importantes

1. **Ne pas dupliquer** : Chaque `@id` doit être unique. Les références se font via `{"@id": "..."}`.

2. **Images** : Format webp recommandé. Dimensions minimales pour les logos : 112x112px (Google recommande 512x512px).

3. **Mise à jour** : Les dates des articles (`datePublished`, `dateModified`) doivent être au format ISO 8601.

4. **Local Business** : Important pour le SEO local Genève/Suisse romande. Google Maps utilise ces données.

5. **FAQ Schema** : Peut générer des rich snippets dans Google. À utiliser sur les pages services avec vraies questions clients.
