# Pre-Commit Checklist

Before committing, check:

## Code Quality
- [ ] No console.logs left
- [ ] No commented-out code
- [ ] No TODO comments (move to issues)
- [ ] TypeScript types are correct
- [ ] Follows `docs/guidelines.md`

## Content
- [ ] No Lorem Ipsum placeholder text
- [ ] All content from `docs/content.md`
- [ ] Spelling checked (FR)
- [ ] Links work (no 404s)

## Design
- [ ] Matches `docs/styleguide.md` colors/style
- [ ] Brutalist elements: thick borders, offset shadows, corner boxes
- [ ] Responsive mobile/tablet/desktop
- [ ] Accessibility (alt text, semantic HTML)
- [ ] Hover states with `--yellow` on interactive elements

## Performance
- [ ] Images optimized (<200KB)
- [ ] No unnecessary dependencies
- [ ] Lazy loading where appropriate

## SEO
- [ ] Meta tags present (title, description, og:image)
- [ ] Semantic HTML (h1 > h2 > h3)
- [ ] Alt text on all images

## Commands

```bash
npm run build    # Check for errors
npm run preview  # Test build locally
```

---

# Starter Prompts

## Phase Setup
```
Help me setup the Jon Labs project:
1. Analyze the forked template structure
2. Identify what needs to be customized
3. Setup navigation with correct links
4. Verify Tailwind CSS variables match styleguide.md
```

## Phase Homepage
```
Let's build the Jon Labs homepage:
1. Hero section (content from docs/content.md)
2. Services section (3 cards)
3. Portfolio highlight (3 projects grid)
4. Lab section (mini-cards grid)
5. About condensed section
6. Footer with tech stack

Follow docs/styleguide.md for design. Work section by section.
```

## Phase New Page
```
Create the [Services/Portfolio/About/Lab/Contact] page:
- Structure from docs/project-context.md
- Content from docs/content.md
- Design from docs/styleguide.md
- Fully responsive (mobile-first)
- Include SEO meta tags
```

## Phase Polish
```
Let's polish Jon Labs for launch:
1. Responsive check (all breakpoints)
2. Performance optimization (Lighthouse)
3. SEO audit (all pages)
4. Accessibility check
5. Cross-browser testing
6. Run pre-commit checklist
```

---

# Request Structure

For complex requests, use this format:

```
**Context**: What you're trying to achieve
**Current state**: What exists now
**Desired outcome**: Specific result wanted
**Constraints**: Responsive, brand colors, performance, etc.
**Reference**: docs/[relevant-file].md
```

## Example

```
**Context**: Building the Services section on homepage
**Current state**: Empty section placeholder
**Desired outcome**: 3 service cards (Dev Web, Automation, Apps)
  with icons, description, and "Learn more" links
**Constraints**:
- Colors from docs/styleguide.md (--blue, --yellow)
- Mobile: stack vertically
- Desktop: 3 columns grid
- Brutalist style (borders, shadows)
**Reference**: docs/content.md > Page 1 : Homepage > Section Services
```
