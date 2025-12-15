# Create New Page

Create a new page `src/pages/$ARGUMENTS.astro` for Jon Labs:

## Requirements

1. **Read first**:
   - `docs/content.md` - Get the content for this page
   - `docs/styleguide.md` - Follow the design system
   - `docs/schema-guide.md` - Schema.org implementation guide
   - `src/layouts/Layout.astro` - Use this layout

2. **Structure**:
   - Import and use `Layout.astro`
   - Add SEO meta tags (title, description, og:image)
   - **Add Schema.org data** (voir étape 6)
   - Follow semantic HTML (h1 > h2 > h3)
   - Mobile-first responsive design

3. **Styling**:
   - Use CSS variables: `--main-bg`, `--blue`, `--yellow`
   - Brutalist style: `border-2 border-black`, offset shadows
   - Tailwind utilities only

4. **Components**:
   - Reuse existing components from `src/components/`
   - Create new components if needed (in separate files)

5. **Content**:
   - Use ONLY content from `docs/content.md`
   - No Lorem Ipsum or placeholder text
   - French language (FR-CH)

6. **Schema.org** (obligatoire):
   - Importer depuis `src/data/schema.ts` et `src/lib/seo.ts`
   - Créer variable `schemas` selon le type de page
   - Passer `schemas={schemas}` au Layout
   - Consulter `docs/schema-guide.md` pour les détails
   - Ou utiliser `/schema add [page]` après création

## Output

Create the page file and any new components needed. Show me the code.
