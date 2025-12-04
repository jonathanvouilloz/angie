# SEO Audit

Audit `$ARGUMENTS` for SEO best practices.

## Check These Elements

### Meta Tags
- [ ] `<title>` present and 50-60 characters
- [ ] `<meta name="description">` present and 150-160 characters
- [ ] `<meta name="viewport">` present
- [ ] Open Graph tags (og:title, og:description, og:image)
- [ ] Twitter card tags (optional)

### Content Structure
- [ ] Single `<h1>` per page
- [ ] Heading hierarchy (h1 > h2 > h3, no skipping)
- [ ] Descriptive headings (not generic)
- [ ] Content length adequate

### Images
- [ ] All images have `alt` attributes
- [ ] Alt text is descriptive
- [ ] Images have width/height (prevents layout shift)
- [ ] Lazy loading on below-fold images

### Links
- [ ] Internal links use relative paths
- [ ] External links have `rel="noopener"` if `target="_blank"`
- [ ] No broken links

### Technical
- [ ] Semantic HTML (`<main>`, `<section>`, `<article>`, `<nav>`)
- [ ] Language attribute on `<html lang="fr">`
- [ ] Canonical URL (if needed)

## Output

Report with:
- Score: X/10
- Issues found (with fixes)
- Suggested improvements
