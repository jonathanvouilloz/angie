import { author } from '../sample';

export interface JSONLDSchema {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

/**
 * Base Organization schema for Jon Labs
 * Used across all pages to establish brand identity
 */
export function getOrganizationSchema(): JSONLDSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jon Labs',
    alternateName: author.nickname,
    url: 'https://jonlabs.ch',
    logo: 'https://jonlabs.ch/og-image.svg',
    sameAs: [
      author.linkedin !== '#' ? author.linkedin : '',
      author.github !== '#' ? author.github : ''
    ].filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      email: author.email.replace('mailto:', ''),
      contactType: 'Customer Service',
      availableLanguage: ['fr', 'en']
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Genève',
      addressCountry: 'CH'
    }
  };
}

/**
 * Person schema for Jonathan Vouilloz
 * Used on about/bio pages and as author reference
 */
export function getPersonSchema(): JSONLDSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    alternateName: author.nickname,
    url: 'https://jonlabs.ch',
    image: 'https://jonlabs.ch/assets/jonathan-vouilloz.jpg',
    jobTitle: 'Développeur Web & Partenaire Digital',
    worksFor: {
      '@type': 'Organization',
      name: 'Jon Labs'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: author.location.split(',')[0].trim(),
      addressCountry: 'CH'
    },
    sameAs: [
      author.linkedin !== '#' ? author.linkedin : '',
      author.github !== '#' ? author.github : ''
    ].filter(Boolean)
  };
}

/**
 * BlogPosting schema for blog articles
 * Enables rich snippets in search results
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
}): JSONLDSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data.title,
    description: data.description,
    image: data.image,
    datePublished: data.datePublished.toISOString(),
    dateModified: data.dateModified?.toISOString() || data.datePublished.toISOString(),
    author: {
      '@type': 'Person',
      name: data.author,
      url: 'https://jonlabs.ch'
    },
    publisher: getOrganizationSchema(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.url
    },
    articleSection: data.category,
    keywords: data.tags.join(', '),
    inLanguage: 'fr-CH'
  };
}

/**
 * FAQPage schema for FAQ sections
 * Improves visibility in search results
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
 * ProfessionalService schema for services page
 * Highlights service offerings in search
 */
export function getServiceSchema(services: any[]): JSONLDSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Jon Labs',
    description: 'Développement web, automatisation, et applications sur-mesure pour entrepreneurs et PME en Suisse Romande',
    provider: getOrganizationSchema(),
    areaServed: {
      '@type': 'City',
      name: 'Genève',
      containedIn: 'Suisse Romande'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services Digital',
      itemListElement: services.map((service, index) => ({
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
 * Main JSON-LD generator function
 * Routes to appropriate schema based on type
 */
export function generateJSONLD(
  schemaType: 'Organization' | 'Person' | 'BlogPosting' | 'FAQPage' | 'Service',
  data?: any,
  astroContext?: any
): JSONLDSchema | null {
  switch (schemaType) {
    case 'Organization':
      return getOrganizationSchema();

    case 'Person':
      return getPersonSchema();

    case 'BlogPosting':
      return data ? getBlogPostingSchema(data) : null;

    case 'FAQPage':
      return data ? getFAQPageSchema(data) : null;

    case 'Service':
      return data ? getServiceSchema(data) : null;

    default:
      return null;
  }
}
