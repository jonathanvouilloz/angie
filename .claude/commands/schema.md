# Schema.org Helper

Gère les données structurées Schema.org sur les pages du site Jon Labs.

## Instructions

### Si l'argument est "add [page.astro]" :

Ajoute automatiquement les schemas appropriés à une page existante.

#### Étape 1 : Analyser la page

1. **Lire** le fichier page source
2. **Détecter le type** selon le chemin :

| Chemin | Type | Schemas à ajouter |
|--------|------|-------------------|
| `index.astro` (racine) | Homepage | Organization, LocalBusiness, Website, WebPage |
| `about.astro` | About | Person, AboutPage |
| `contact.astro` | Contact | ContactPage |
| `services.astro` (index) | Services List | servicesListData, WebPage |
| `services/[slug].astro` | Service Detail | serviceSchemas[slug], Breadcrumb |
| `blog/index.astro` | Blog List | blogSchema |
| `blog/[slug].astro` | Blog Post | BlogPosting (déjà géré via props) |
| `portfolio.astro` | Collection | CollectionPage |
| `lab.astro` | Collection | CollectionPage |
| `cv.astro` | Profile | Person, ProfilePage |
| `outils/index.astro` | Collection | CollectionPage |
| `outils/[slug].astro` | Tool Page | WebPage, Breadcrumb |
| Autre | Generic | WebPage, Breadcrumb (si nested) |

3. **Vérifier** si des schemas existent déjà (chercher `schemas={` ou `schema=`)

#### Étape 2 : Modifier le fichier

1. **Ajouter les imports** après les autres imports existants :

```astro
// Schema.org
import { SITE_URL } from '../data/schema'; // ou '../../data/schema' selon profondeur
import { getWebPageSchema, getBreadcrumbSchema } from '../lib/seo'; // fonctions nécessaires
```

Pour les pages spéciales, ajouter les imports appropriés :
- Homepage : `import { organizationData, localBusinessData, websiteData, SITE_URL } from '../data/schema';`
- About/CV : `import { personData, SITE_URL } from '../data/schema';`
- Services list : `import { servicesListData, SITE_URL } from '../data/schema';`
- Service detail : `import { serviceSchemas, SITE_URL } from '../data/schema';`
- Blog list : `import { blogSchema } from '../data/schema';`

2. **Créer les variables schemas** avant le `---` de fermeture :

```astro
// Schema.org data
const pageTitle = "[TITRE DE LA PAGE]"; // récupérer du seoData ou title existant
const pageDescription = "[DESCRIPTION]"; // récupérer du seoData ou description existant

const webPageSchema = getWebPageSchema({
    url: `${SITE_URL}/[route]`,
    name: pageTitle,
    description: pageDescription
});

const schemas = [webPageSchema]; // adapter selon le type
```

3. **Mettre à jour le Layout** :
   - Si `<Layout ... >` sans schemas → ajouter `schemas={schemas}`
   - Si `schema="..."` existe → remplacer par `schemas={schemas}`

#### Étape 3 : Rapport

Afficher :
```
✅ Schemas ajoutés à [fichier]

📋 Type de page détecté : [type]

📦 Schemas implémentés :
   - [Schema1]
   - [Schema2]
   - ...

📝 Imports ajoutés :
   - SITE_URL from '../data/schema'
   - [fonctions] from '../lib/seo'

🔗 Tester après déploiement : https://search.google.com/test/rich-results
```

---

### Si l'argument est "check" :

Vérifie que toutes les pages ont des données structurées.

#### Étape 1 : Scanner les pages

1. **Lister** tous les fichiers dans `src/pages/**/*.astro`
2. **Pour chaque fichier**, vérifier :
   - [ ] Présence de `schemas={` ou `schema=` dans le Layout
   - [ ] Import depuis `src/data/schema.ts` ou `src/lib/seo.ts`

#### Étape 2 : Rapport

```
📊 Audit Schema.org - Jon Labs

✅ Pages avec schemas : X/Y
❌ Pages sans schemas : Z

Détail :
├── ✅ index.astro (Organization, LocalBusiness, Website, WebPage)
├── ✅ about.astro (Person, AboutPage)
├── ❌ nouvelle-page.astro (MANQUANT)
└── ...

💡 Pour corriger : /schema add [page.astro]
```

---

### Si l'argument est "new-service [slug]" :

Crée le schema pour un nouveau service et met à jour les fichiers nécessaires.

#### Étape 1 : Valider le slug

- Format kebab-case (ex: `consulting-digital`)
- Pas de caractères spéciaux

#### Étape 2 : Demander les informations

Poser ces questions à l'utilisateur :
1. Nom du service (ex: "Consulting Digital")
2. Description courte (1-2 phrases pour Schema.org)
3. Type de service (ex: "Conseil", "Développement", etc.)
4. Prix minimum (optionnel, format: "1500" pour CHF 1'500)

#### Étape 3 : Modifier `src/data/schema.ts`

1. **Ajouter dans `serviceSchemas`** :

```typescript
"[slug]": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/[slug]#service`,
    "name": "[Nom du service]",
    "url": `${SITE_URL}/services/[slug]`,
    "description": "[Description]",
    "provider": { "@id": `${SITE_URL}/#organization` },
    "areaServed": ["Genève", "Vaud", "Suisse Romande"],
    "serviceType": "[Type]"
},
```

2. **Ajouter dans `servicesListData.itemListElement`** :

```typescript
{
    "@type": "ListItem",
    "position": [N+1],
    "item": {
        "@type": "Service",
        "name": "[Nom du service]",
        "url": `${SITE_URL}/services/[slug]`
    }
}
```

3. **Mettre à jour `numberOfItems`** dans `servicesListData`

#### Étape 4 : Générer le code pour la page

Afficher le code à ajouter dans `src/pages/services/[slug].astro` :

```astro
// Schema.org
import { serviceSchemas, SITE_URL } from '../../data/schema';
import { getBreadcrumbSchema } from '../../lib/seo';

// Schema.org data
const breadcrumb = getBreadcrumbSchema([
    { name: "Accueil", url: SITE_URL },
    { name: "Services", url: `${SITE_URL}/services` },
    { name: "[Nom du service]", url: `${SITE_URL}/services/[slug]` }
]);
const schemas = [serviceSchemas["[slug]"], breadcrumb];
```

Et mettre à jour le Layout avec `schemas={schemas}`.

#### Étape 5 : Rapport

```
✅ Nouveau service créé : [slug]

📝 Fichiers modifiés :
   - src/data/schema.ts (serviceSchemas + servicesListData)

📋 Code à ajouter dans src/pages/services/[slug].astro :
   [code affiché ci-dessus]

⚠️  N'oublie pas de créer la page si elle n'existe pas !
```

---

## Arguments

| Commande | Description |
|----------|-------------|
| `/schema add [page.astro]` | Ajoute les schemas à une page existante |
| `/schema check` | Vérifie toutes les pages du site |
| `/schema new-service [slug]` | Crée un nouveau service dans schema.ts |

## Exemples

```bash
# Ajouter schemas à une nouvelle page
/schema add src/pages/mentions-legales.astro

# Vérifier l'audit complet
/schema check

# Créer un nouveau service
/schema new-service consulting-digital
```

## Références

- **Données centralisées** : `src/data/schema.ts`
- **Fonctions helper** : `src/lib/seo.ts`
- **Guide complet** : `docs/schema-guide.md`
- **Test en ligne** : https://search.google.com/test/rich-results
