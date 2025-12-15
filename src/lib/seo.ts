import { author } from '../sample';
import {
  SITE_URL,
  organizationData,
  personData,
  localBusinessData,
  websiteData,
  servicesListData,
  serviceSchemas,
  blogSchema
} from '../data/schema';

export interface JSONLDSchema {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

/**
 * Get Organization schema from central data
 */
export function getOrganizationSchema(): JSONLDSchema {
  return { ...organizationData };
}

/**
 * Get Person schema from central data
 */
export function getPersonSchema(): JSONLDSchema {
  return { ...personData };
}

/**
 * Get LocalBusiness schema from central data
 */
export function getLocalBusinessSchema(): JSONLDSchema {
  return { ...localBusinessData };
}

/**
 * Get Website schema from central data
 */
export function getWebsiteSchema(): JSONLDSchema {
  return { ...websiteData };
}

/**
 * WebPage schema - generic page
 */
export function getWebPageSchema(data: {
  url: string;
  name: string;
  description: string;
}): JSONLDSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${data.url}#webpage`,
    url: data.url,
    name: data.name,
    description: data.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/og-image.svg`
    }
  };
}

/**
 * AboutPage schema
 */
export function getAboutPageSchema(data: {
  url: string;
  name: string;
  description: string;
}): JSONLDSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: data.url,
    name: data.name,
    description: data.description,
    mainEntity: { '@id': `${SITE_URL}/#person` },
    isPartOf: { '@id': `${SITE_URL}/#website` }
  };
}

/**
 * ContactPage schema
 */
export function getContactPageSchema(data: {
  url: string;
  name: string;
  description: string;
}): JSONLDSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: data.url,
    name: data.name,
    description: data.description,
    mainEntity: { '@id': `${SITE_URL}/#organization` },
    isPartOf: { '@id': `${SITE_URL}/#website` }
  };
}

/**
 * CollectionPage schema - for portfolio, lab, outils
 */
export function getCollectionPageSchema(data: {
  url: string;
  name: string;
  description: string;
  mainEntity?: string; // '@id' reference
}): JSONLDSchema {
  const schema: JSONLDSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    url: data.url,
    name: data.name,
    description: data.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` }
  };

  if (data.mainEntity) {
    schema.mainEntity = { '@id': data.mainEntity };
  }

  return schema;
}

/**
 * ProfilePage schema - for CV page
 */
export function getProfilePageSchema(data: {
  url: string;
  name: string;
  description: string;
}): JSONLDSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: data.url,
    name: data.name,
    description: data.description,
    mainEntity: { '@id': `${SITE_URL}/#person` },
    isPartOf: { '@id': `${SITE_URL}/#website` }
  };
}

/**
 * Get Services ItemList schema
 */
export function getServicesListSchema(): JSONLDSchema {
  return { ...servicesListData };
}

/**
 * Get individual service schema by slug
 */
export function getServiceItemSchema(slug: string): JSONLDSchema | null {
  const schema = serviceSchemas[slug as keyof typeof serviceSchemas];
  return schema ? { ...schema } : null;
}

/**
 * Get Blog schema
 */
export function getBlogListSchema(): JSONLDSchema {
  return { ...blogSchema };
}

/**
 * BlogPosting schema for blog articles
 */
export function getBlogPostingSchema(data: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: Date;
  dateModified?: Date;
  author: string;
  category: string;
  tags: string[];
  readingTime?: number;
}): JSONLDSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data.title,
    description: data.description,
    url: data.url,
    image: {
      '@type': 'ImageObject',
      url: data.image
    },
    datePublished: data.datePublished.toISOString(),
    dateModified: data.dateModified?.toISOString() || data.datePublished.toISOString(),
    author: { '@id': `${SITE_URL}/#person` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.url
    },
    articleSection: data.category,
    keywords: data.tags.join(', '),
    wordCount: data.readingTime ? data.readingTime * 200 : undefined,
    inLanguage: 'fr-CH',
    isPartOf: { '@id': `${SITE_URL}/blog#blog` }
  };
}

/**
 * FAQPage schema for FAQ sections
 */
export interface FAQItem {
  question: string;
  answer: string;
}

export function getFAQPageSchema(faqs: FAQItem[]): JSONLDSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

/**
 * Breadcrumb schema for navigation
 */
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>): JSONLDSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

/**
 * Legacy ProfessionalService schema (kept for backward compatibility)
 */
export function getServiceSchema(services: any[]): JSONLDSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Jon Labs',
    description: 'Développement web, automatisation, et applications sur-mesure pour entrepreneurs et PME en Suisse Romande',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: {
      '@type': 'City',
      name: 'Genève',
      containedIn: 'Suisse Romande'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services Digital',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description
        }
      }))
    }
  };
}

/**
 * Schema types supported by the system
 */
export type SchemaType =
  | 'Organization'
  | 'Person'
  | 'LocalBusiness'
  | 'Website'
  | 'WebPage'
  | 'AboutPage'
  | 'ContactPage'
  | 'CollectionPage'
  | 'ProfilePage'
  | 'ServicesList'
  | 'ServiceItem'
  | 'BlogList'
  | 'BlogPosting'
  | 'FAQPage'
  | 'Breadcrumb'
  | 'Service'; // Legacy

/**
 * Main JSON-LD generator function
 * Routes to appropriate schema based on type
 */
export function generateJSONLD(
  schemaType: SchemaType,
  data?: any,
  astroContext?: any
): JSONLDSchema | null {
  switch (schemaType) {
    case 'Organization':
      return getOrganizationSchema();

    case 'Person':
      return getPersonSchema();

    case 'LocalBusiness':
      return getLocalBusinessSchema();

    case 'Website':
      return getWebsiteSchema();

    case 'WebPage':
      return data ? getWebPageSchema(data) : null;

    case 'AboutPage':
      return data ? getAboutPageSchema(data) : null;

    case 'ContactPage':
      return data ? getContactPageSchema(data) : null;

    case 'CollectionPage':
      return data ? getCollectionPageSchema(data) : null;

    case 'ProfilePage':
      return data ? getProfilePageSchema(data) : null;

    case 'ServicesList':
      return getServicesListSchema();

    case 'ServiceItem':
      return data?.slug ? getServiceItemSchema(data.slug) : null;

    case 'BlogList':
      return getBlogListSchema();

    case 'BlogPosting':
      return data ? getBlogPostingSchema(data) : null;

    case 'FAQPage':
      return data ? getFAQPageSchema(data) : null;

    case 'Breadcrumb':
      return data ? getBreadcrumbSchema(data) : null;

    case 'Service':
      return data ? getServiceSchema(data) : null;

    default:
      return null;
  }
}

/**
 * Helper to generate multiple schemas at once
 */
export function generateMultipleSchemas(
  schemas: Array<{ type: SchemaType; data?: any }>
): JSONLDSchema[] {
  return schemas
    .map(({ type, data }) => generateJSONLD(type, data))
    .filter((schema): schema is JSONLDSchema => schema !== null);
}
