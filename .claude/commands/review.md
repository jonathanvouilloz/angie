# Pre-Commit Review

Review the staged/modified files before committing.

## Automated Checks

Run these checks on modified files:

1. **Code Quality**
   - No `console.log` statements
   - No commented-out code blocks
   - No TODO comments (list them if found)
   - TypeScript types are correct

2. **Content**
   - No Lorem Ipsum or placeholder text
   - Content matches `docs/content.md`
   - No spelling errors (French)

3. **Design**
   - Uses correct CSS variables (`--main-bg`, `--blue`, `--yellow`)
   - Has hover states on interactive elements
   - Responsive classes present (`md:` breakpoints)

4. **Accessibility**
   - Alt text on all images
   - Semantic HTML structure
   - Focus states on interactive elements

5. **SEO** (for .astro pages)
   - Has `<title>` tag
   - Has meta description
   - Heading hierarchy is correct (h1 > h2 > h3)

## Output

List any issues found with file:line references.
If all checks pass, confirm ready to commit.
