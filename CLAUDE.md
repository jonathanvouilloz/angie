# CLAUDE.md - Jon Labs Project

## Project Overview

Site web personnel/freelance pour **Jon Labs** (Jonathan Vouilloz), basé sur le template Astro "Angie".

- **Stack**: Astro 5.5.3 + Tailwind CSS 4.1.1 + GSAP 3.12.7
- **Style**: Brutaliste créatif (bordures épaisses, ombres 3D, accents colorés)
- **Domaine**: jonlabs.ch
- **Langue**: Contenu en francais (FR-CH)

## Commands

```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Production build
npm run preview  # Preview production build
```

## Project Structure

```
src/
├── assets/          # SVGs, images (pink-star, arrow, underline, etc.)
├── components/      # Astro components (Hero, Button, Footer, etc.)
├── layouts/         # Layout.astro (base template)
├── pages/           # Routes (index.astro, blog.astro, posts/)
├── styles/          # global.css (Tailwind import)
└── sample.ts        # Data/config (author, links)

docs/
├── project-context.md  # Identity, positioning, stack
├── roadmap.md          # Development phases
├── guidelines.md       # Coding standards
├── content.md          # All text content
└── styleguide.md       # Design system
```

## Design System

### CSS Variables

```css
--main-bg: #FEFFF0;  /* Cream background */
--blue: #BAE6FF;     /* Primary buttons */
--yellow: #FFDC58;   /* Accents, hover states */
```

### Key Patterns

```html
<!-- Brutalist card -->
<div class="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">

<!-- Primary button -->
<button class="bg-[var(--blue)] border-2 border-black px-6 py-3 hover:bg-[var(--yellow)] transition-all">

<!-- Text highlight -->
<span class="bg-[var(--yellow)] px-2">highlighted text</span>
```

### Typography

- **Font**: Space Grotesk (Google Fonts)
- **Headings**: `text-4xl font-bold` to `text-6xl font-black`
- **Body**: `text-lg font-normal`

### Icons

Remix Icon via CDN: `<i class="ri-code-line"></i>`

## Coding Conventions

- **Components**: PascalCase (`Hero.astro`, `ServiceCard.astro`)
- **Files**: kebab-case for pages, camelCase for TS
- **CSS**: Tailwind utilities first, CSS variables for colors
- **Commits**: `feat(scope): description` format

## Pages to Build

| Page | Route | Status |
|------|-------|--------|
| Homepage | `/` | Customize existing |
| Blog | `/blog` | Customize existing |
| Services | `/services` | Create new |
| Portfolio | `/portfolio` | Create new |
| About | `/about` | Create new |
| Lab | `/lab` | Create new |
| Contact | `/contact` | Create new |

## Important Notes

- Always read `docs/styleguide.md` before creating new components
- Follow the brutalist design: thick borders, offset shadows, corner boxes
- Mobile-first responsive design (base = mobile, `md:` = desktop)
- Content is in French (FR-CH)
- Prefer editing existing components over creating new ones
- Use existing SVG assets in `src/assets/` for decorations
- Before committing, run through `.claude/checklist.md`

## Documentation

| File | Purpose |
|------|---------|
| `docs/project-context.md` | Identity, positioning, stack, architecture |
| `docs/roadmap.md` | Development phases and tasks |
| `docs/guidelines.md` | Coding standards, conventions, best practices |
| `docs/content.md` | All text content for the site |
| `docs/styleguide.md` | Design system, colors, components, patterns |
| `.claude/checklist.md` | Pre-commit checklist and starter prompts |

## Workflow

1. **Before coding**: Read relevant docs (content.md, styleguide.md)
2. **During coding**: Follow guidelines.md conventions
3. **Before committing**: Run checklist.md
4. **Track progress**: Update roadmap.md tasks
