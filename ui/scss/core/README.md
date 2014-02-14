# CORE

The aim of 'Core' is to provide a consistent set of baseline styles, mixins and helpers for new CX projects.

Avoid modifying core files if you can but, if you do, append '-mod' to filenames and/or consider submitting modifications to the repo:

https://cxpartners.codebasehq.com/projects/cx-dev/repositories/cx-base/tree/master

## Code guidelines

- Only include the files from Core that you need
- Use Sass SCSS syntax (http://sass-lang.com)
- Take advantage of Compass for common mixins (http://compass-style.org/)
- Favour BEM for class naming conventions (http://bem.info/)
- Use classes over ID/element selectors where possible
- Use .is- and .has- classes as 'state' hooks for JS (e.g. .is-expaneded)
- Prefer class naming over nesting to indicate scope (e.g. .block, .block__element)
- Avoid deep nesting (3 levels max, if possible)
- Prefer using @extend over @include to keep code lean, where possible
- However, consider creating @mixins alongside %placeholders and .helpers for use within media queries
- Keep code lean and DRY (http://en.wikipedia.org/wiki/Don't_repeat_yourself)
- Be very generous with commenting
- Further Sass/SCSS code guidance: http://css-tricks.com/sass-style-guide/
- No dogma: common sense and pragmatism over strict rules