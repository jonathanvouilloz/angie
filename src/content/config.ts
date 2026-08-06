import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // H1 on-page, distinct du title SEO (formulation naturelle, peut dépasser 60 car.). Fallback sur title si absent.
    h1: z.string().optional(),
    description: z.string().max(160),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    category: z.enum(['mobile', 'automatisation', 'seo-local', 'web', 'geo']),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    readingTime: z.number().optional(),
    // Vidéo YouTube optionnelle embarquée en tête d'article (id seul, ex. "dQw4w9WgXcQ")
    youtubeId: z.string().optional(),
    youtubeTitle: z.string().optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

// Pages piliers (hubs « HOW » type pillar, distinctes des articles de blog)
// Rendues via src/pages/guides/[slug].astro → URL /guides/{slug}. Schema WebPage.
const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // H1 on-page, distinct du title SEO. Fallback sur title si absent.
    h1: z.string().optional(),
    description: z.string().max(160),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    // Type de page — pour l'instant uniquement « pillar ». Accepte l'alias page_type via preprocessing si besoin.
    pageType: z.enum(['pillar']).default('pillar'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    readingTime: z.number().optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Base
    title: z.string(),
    description: z.string().max(160),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),

    // Type d'entrée
    entryType: z.enum(['case-study', 'side-project']).default('case-study'),
    status: z.enum(['live', 'en-cours', 'archive']).optional(),

    // Client (optionnel pour side-projects)
    client: z.object({
      name: z.string(),
      sector: z.string(),
      website: z.string().url().optional(),
    }).optional(),

    // Projet
    project: z.object({
      duration: z.string(),           // "~80h" ou "3 mois"
      period: z.string(),             // "Juin - Sept 2025"
      measurementPeriod: z.string().optional(),
      platform: z.string().optional(), // "Framer"
      category: z.enum(['site-vitrine', 'e-commerce', 'seo', 'automatisation', 'application', 'side-project']),
    }),

    // Images
    heroImage: z.object({ url: z.string(), alt: z.string() }),

    // Résultats clés (optionnel pour side-projects)
    results: z.array(z.object({
      label: z.string(),
      value: z.string(),
      detail: z.string().optional(),
      icon: z.string().optional(),
    })).default([]),

    // Contexte (optionnel pour side-projects)
    context: z.object({
      clientDescription: z.string().optional(),
      challenge: z.string().optional(),
      whyThisProject: z.string().optional(),
    }).optional(),

    // Approche (optionnel pour side-projects)
    approach: z.array(z.object({
      phase: z.number(),
      title: z.string(),
      description: z.string(),
      tasks: z.array(z.string()).optional(),
      image: z.object({
        url: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
      }).optional(),
    })).default([]),

    // Ce qui a fonctionné
    successFactors: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string().optional(),
    })).optional(),

    // Limites & apprentissages
    learnings: z.object({
      limitations: z.array(z.string()).optional(),
      insights: z.array(z.string()).optional(),
    }).optional(),

    // Témoignage
    testimonial: z.object({
      quote: z.string(),
      author: z.string(),
      role: z.string().optional(),
      avatar: z.string().optional(),
    }).optional(),

    // Images de résultats (graphs, screenshots)
    resultImages: z.array(z.object({
      url: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })).optional(),

    // Liens
    tags: z.array(z.string()).default([]),
    liveUrl: z.string().url().optional(),
  }),
});

const proofSchema = z.object({
  image: z.string(),
  title: z.string(),
  stats: z.array(z.object({
    label: z.string(),
    value: z.string(),
  })),
  caption: z.string().optional(),
  // Lien vers l'étude de cas interne (ex. /portfolio/barber-concept). Sans ce champ,
  // la preuve reste un cul-de-sac : le prospect lit les chiffres sans pouvoir lire le dossier.
  caseStudy: z.string().optional(),
});

const devisCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    date: z.coerce.date(),
    password: z.string().optional(),
    status: z.enum(['draft', 'sent', 'accepted', 'rejected']).default('draft'),

    // Hero section
    hero: z.object({
      priority: z.string(),
      problem: z.string(),
      solution: z.string(),
    }).optional(),

    // Constat détaillé
    constat: z.string().optional(),

    // Diagnostic chiffré (avant les offres : le problème avant le prix)
    audit: z.object({
      title: z.string(),
      intro: z.string().optional(),
      // Les moments où un client cherche et ne trouve pas
      moments: z.array(z.object({
        query: z.string(),
        finding: z.string(),
      })).optional(),
      // Scores relevés (PageSpeed, visibilité IA, etc.)
      scores: z.array(z.object({
        label: z.string(),
        value: z.string(),
        tone: z.enum(['bad', 'mid', 'good']).default('bad'),
      })).optional(),
      screenshot: z.object({
        image: z.string(),
        caption: z.string().optional(),
      }).optional(),
      // Désamorçage d'une objection prévisible (ex. « mon score SEO est à 100 »)
      nuance: z.object({
        title: z.string(),
        content: z.string(),
      }).optional(),
    }).optional(),

    // Tableau comparatif auto (à couper quand les offres ne sont pas des alternatives)
    showComparison: z.boolean().default(true),

    // Offres
    offers: z.array(z.object({
      name: z.string(),
      price: z.string(),
      subtitle: z.string().optional(),
      features: z.array(z.string()),
      excluded: z.array(z.string()).optional(),
      recommended: z.boolean().default(false),
      pack: z.boolean().default(false),
      details: z.string().optional(),
    })).optional(),

    // Tableau comparatif personnalisé
    comparison: z.array(z.object({
      label: z.string(),
      starter: z.union([z.string(), z.boolean()]),
      premium: z.union([z.string(), z.boolean()]),
    })).optional(),

    // Timeline
    timeline: z.array(z.object({
      step: z.string(),
      description: z.string(),
    })).optional(),

    // Conseil
    advice: z.string().optional(),

    // Preuve/Résultats SEO — un objet, ou plusieurs preuves
    proof: z.union([
      proofSchema,
      z.array(proofSchema),
    ]).optional(),

    // ROI
    roi: z.object({
      context: z.string(),
      calculation: z.string(),
      result: z.string(),
    }).optional(),

    // Disclaimer
    disclaimer: z.object({
      title: z.string(),
      content: z.string(),
    }).optional(),

    // Portfolio
    portfolio: z.array(z.object({
      name: z.string(),
      description: z.string(),
      url: z.string(),
    })).optional(),

    // Projet reporté
    postponed: z.object({
      title: z.string(),
      reason: z.string(),
      action: z.string().optional(),
      link: z.string().optional(),
    }).optional(),

    // Prochaines étapes
    nextSteps: z.array(z.string()).optional(),

    // Étape post-devis. Le lien opaque peut être publié après acceptation ;
    // le code d'accès reste transmis séparément et n'est jamais stocké ici.
    onboarding: z.object({
      url: z.string().url().refine((value) => {
        const onboardingUrl = new URL(value);
        return onboardingUrl.protocol === 'https:' && (
          onboardingUrl.hostname === 'jonlabs.ch'
          || onboardingUrl.hostname.endsWith('.jonlabs.ch')
        );
      }, 'L’URL onboarding doit utiliser HTTPS sur jonlabs.ch.'),
      label: z.string().default('Commencer mon onboarding'),
      description: z.string().optional(),
    }).optional(),

    // Pistes à discuter — annexe rendue après le prix. Rien n'y est engagé : ce sont
    // les sujets qui dépendent de l'existant du client et se diagnostiquent au call.
    // `price` reste optionnel : la plupart n'ont volontairement pas de montant.
    options: z.array(z.object({
      name: z.string(),
      benefit: z.string(),
      price: z.string().optional(),
    })).optional(),

    // Mention légale de bas de devis (TVA, modalités de paiement, validité).
    legal: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  pages: pagesCollection,
  devis: devisCollection,
  portfolio: portfolioCollection,
};
