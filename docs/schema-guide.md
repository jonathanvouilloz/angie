# Guide Schema.org - Jon Labs

Guide de référence pour les données structurées Schema.org sur jonlabs.ch.

## Architecture

```
src/
├── data/
│   └── schema.ts          # Données centralisées (Organization, Person, Services, etc.)
├── lib/
│   └── seo.ts             # Fonctions helper (getWebPageSchema, getBreadcrumbSchema, etc.)
├── components/
│   └── SEO.astro          # Composant qui injecte les JSON-LD
└── layouts/
    └── Layout.astro       # Accepte prop `schemas` (array)
```

---

## Données centralisées (`src/data/schema.ts`)

Ne jamais dupliquer ces informations. Toujours importer depuis ce fichier.

### Exports disponibles

| Export | Type | Usage |
|--------|------|-------|
| `SITE_URL` | string | URL de base (`https://jonlabs.ch`) |
| `organizationData` | Object | Schema Organization |
| `personData` | Object | Schema Person (Jonathan Vouilloz) |
| `localBusinessData` | Object | Schema ProfessionalService |
| `websiteData` | Object | Schema WebSite |
| `servicesListData` | Object | ItemList des 7 services |
| `serviceSchemas` | Object | Schemas individuels par slug |
| `blogSchema` | Object | Schema Blog |

---

## Types de pages et leurs schemas

| Type de page | Route | Schemas requis | Import |
|--------------|-------|----------------|--------|
| **Homepage** | `/` | Organization, LocalBusiness, Website, WebPage | `organizationData, localBusinessData, websiteData` |
| **À propos** | `/about` | Person, AboutPage | `personData` + `getAboutPageSchema()` |
| **Contact** | `/contact` | ContactPage | `getContactPageSchema()` |
| **Services (liste)** | `/services` | ItemList, WebPage | `servicesListData` + `getWebPageSchema()` |
| **Service (détail)** | `/services/[slug]` | Service, Breadcrumb | `serviceSchemas[slug]` + `getBreadcrumbSchema()` |
| **Blog (liste)** | `/blog` | Blog | `blogSchema` |
| **Blog (article)** | `/blog/[slug]` | BlogPosting | Via props `schema="BlogPosting"` |
| **Portfolio** | `/portfolio` | CollectionPage | `getCollectionPageSchema()` |
| **Lab** | `/lab` | CollectionPage | `getCollectionPageSchema()` |
| **CV** | `/cv` | Person, ProfilePage | `personData` + `getProfilePageSchema()` |
| **Outils (liste)** | `/outils` | CollectionPage | `getCollectionPageSchema()` |
| **Outil (détail)** | `/outils/[slug]` | WebPage, Breadcrumb | `getWebPageSchema()` + `getBreadcrumbSchema()` |
| **Page générique** | Autre | WebPage (+ Breadcrumb si nested) | `getWebPageSchema()` |

---

## Fonctions helper (`src/lib/seo.ts`)

### `getWebPageSchema(data)`
```typescript
getWebPageSchema({
    url: string,      // URL complète de la page
    name: string,     // Titre de la page
    description: string
})
```

### `getAboutPageSchema(data)`
```typescript
getAboutPageSchema({
    url: string,
    name: string,
    description: string
})
```

### `getContactPageSchema(data)`
```typescript
getContactPageSchema({
    url: string,
    name: string,
    description: string
})
```

### `getCollectionPageSchema(data)`
```typescript
getCollectionPageSchema({
    url: string,
    name: string,
    description: string,
    mainEntity?: string  // @id optionnel
})
```

### `getProfilePageSchema(data)`
```typescript
getProfilePageSchema({
    url: string,
    name: string,
    description: string
})
```

### `getBreadcrumbSchema(items)`
```typescript
getBreadcrumbSchema([
    { name: "Accueil", url: "https://jonlabs.ch" },
    { name: "Services", url: "https://jonlabs.ch/services" },
    { name: "Création site web", url: "https://jonlabs.ch/services/creation-site-web" }
])
```

### `getServiceItemSchema(slug)`
```typescript
getServiceItemSchema("creation-site-web") // Retourne le schema du service
```

### `getBlogPostingSchema(data)`
```typescript
getBlogPostingSchema({
    title: string,
    description: string,
    url: string,
    image: string,
    datePublished: Date,
    dateModified?: Date,
    author: string,
    category: string,
    tags: string[],
    readingTime?: number
})
```

### `getFAQPageSchema(faqs)`
```typescript
getFAQPageSchema([
    { question: "Question ?", answer: "Réponse." },
    // ...
])
```

---

## Marche à suivre pour une nouvelle page

### Étape 1 : Identifier le type de page

Consulte le tableau ci-dessus pour déterminer quels schemas sont nécessaires.

### Étape 2 : Ajouter les imports

```astro
---
// ... autres imports ...

// Schema.org
import { SITE_URL } from '../data/schema';
import { getWebPageSchema, getBreadcrumbSchema } from '../lib/seo';
```

**Adapter la profondeur** (`../` ou `../../`) selon l'emplacement du fichier.

### Étape 3 : Créer les variables schemas

```astro
// SEO Data (si pas déjà défini)
const pageTitle = "Titre de la page | Jon Labs";
const pageDescription = "Description de la page pour SEO.";

// Schema.org data
const webPageSchema = getWebPageSchema({
    url: `${SITE_URL}/ma-page`,
    name: pageTitle,
    description: pageDescription
});

// Pour une page nested, ajouter le breadcrumb
const breadcrumb = getBreadcrumbSchema([
    { name: "Accueil", url: SITE_URL },
    { name: "Ma section", url: `${SITE_URL}/ma-section` },
    { name: "Ma page", url: `${SITE_URL}/ma-section/ma-page` }
]);

const schemas = [webPageSchema, breadcrumb];
---
```

### Étape 4 : Passer au Layout

```astro
<Layout
    title={pageTitle}
    description={pageDescription}
    schemas={schemas}
>
```

---

## Ajouter un nouveau service

Si tu crées une nouvelle page `/services/nouveau-service`, tu dois :

### 1. Ajouter dans `src/data/schema.ts`

**Dans `serviceSchemas`** :
```typescript
"nouveau-service": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/nouveau-service#service`,
    "name": "Nom du nouveau service",
    "url": `${SITE_URL}/services/nouveau-service`,
    "description": "Description courte du service.",
    "provider": { "@id": `${SITE_URL}/#organization` },
    "areaServed": ["Genève", "Vaud", "Suisse Romande"],
    "serviceType": "Type de service"
},
```

**Dans `servicesListData.itemListElement`** :
```typescript
{
    "@type": "ListItem",
    "position": 8,  // Incrémenter
    "item": {
        "@type": "Service",
        "name": "Nom du nouveau service",
        "url": `${SITE_URL}/services/nouveau-service`
    }
}
```

**Mettre à jour `numberOfItems`** :
```typescript
"numberOfItems": 8,  // Était 7
```

### 2. Dans la page service

```astro
// Schema.org
import { serviceSchemas, SITE_URL } from '../../data/schema';
import { getBreadcrumbSchema } from '../../lib/seo';

const breadcrumb = getBreadcrumbSchema([
    { name: "Accueil", url: SITE_URL },
    { name: "Services", url: `${SITE_URL}/services` },
    { name: "Nom du service", url: `${SITE_URL}/services/nouveau-service` }
]);
const schemas = [serviceSchemas["nouveau-service"], breadcrumb];
```

---

## Checklist de validation

Avant de déployer une nouvelle page :

- [ ] Schemas importés depuis `src/data/schema.ts` ou générés via `src/lib/seo.ts`
- [ ] Variable `schemas` définie comme array
- [ ] Layout reçoit `schemas={schemas}`
- [ ] Breadcrumb présent si page nested (profondeur > 1)
- [ ] Pas de duplication de données (utiliser les exports centralisés)

### Test après déploiement

Utilise le [Rich Results Test de Google](https://search.google.com/test/rich-results) pour vérifier que les schemas sont bien détectés.

---

## Commande Claude Code

Utilise `/schema` pour automatiser :

```bash
/schema add src/pages/ma-page.astro    # Ajoute schemas automatiquement
/schema check                           # Vérifie toutes les pages
/schema new-service mon-service         # Crée un nouveau service
```

---

## Référence Schema.org

- [Schema.org - Types](https://schema.org/docs/full.html)
- [Google - Structured Data Testing](https://search.google.com/test/rich-results)
- [Google - Documentation données structurées](https://developers.google.com/search/docs/appearance/structured-data)
