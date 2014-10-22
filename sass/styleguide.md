# Lime Utilities

## A library of Sass modules - functions, mixins, placeholders and variables.

Welcome to the Lime Utilities overview. Before continuing, you should have a general understanding of the [SCSS](http://sass-lang.com/) syntax, and [KSS](https://github.com/kneath/kss) documentation.

### Coding Style

#### Spacing
- Use soft-tabs with a two space indent. Spaces are the only way to guarantee code renders the same in any person's environment.
- Put spaces after `:` in property declarations.
- Put spaces before `{` in rule declarations.
- Put line breaks between rulesets.
- When grouping selectors, keep individual selectors to a single line.
- Place closing braces of declaration blocks on a new line.
- Each declaration should appear on its own line for more accurate error reporting.
- Comments that refer to selector blocks should be on a separate line immediately before the block to which they refer. Comments referring to declarations should appear on the same line with a space after the `;`.
- Separate groups and sections with two blank lines, and blocks with one blank line.
- Prepend section titles with a `$`.
- Use appropriate flags or striking symbols for section headers.

#### Formatting
- Use hex color codes `#000` unless using `rgba()`.
- Avoid specifying units for zero values, e.g., `margin: 0;` instead of `margin: 0px;`.
- Strive to limit use of shorthand declarations to instances where you must explicitly set all the available values.
- Order CSS declarations by alphabetically.
- Remove 0 when dealing with decimals between 0 and 1, e.g., `width: .75em;` instead of `width: 0.75em;`.

#### SCSS
- As a rule of thumb, avoid unnecessary nesting, at most, aim for three levels. When in doubt, step back and rethink your overall strategy (either the specificity needed, or the layout of the nesting).
- A nested block of Sass should not exceed 50 lines, beyond that it starts becoming difficult to understand. The whole point of nesting is convenience and to assist in mental grouping. Don't use it if it hurts that.
- Global and section-specific Sass files are just table of contents used to keep styles organized into component parts (broken into as many files as makes sense). In other words, no styles directly in them.
- Observe the cascade in global and section-specific Sass files.
- At the top of your block of Sass include `extend`(s) first followed by regular CSS, then list `@include`(s) last.
- Pseudo and combinator selectors follow `@include`(s), while nested elements come after, with a space before each nesting.
- Media queries are nested inline with the element, and are placed at the end of the block after the pseudo and combinator selectors and any other nested elements.
-  Separate each group with an empty line, this visually separates the `@extends`, `@includes`, regular styles, pseudo and combinator selectors, nested elements and media queries for easier reading.
- Use Sass comments not a CSS comments.
- Variablize common numbers, numbers with meaning, and colors.

#### Misc
- Document styles with [KSS](https://github.com/kneath/kss).
- To describe an atomic task to be completed at a later date, add Sass comments containing a todo statement prepended with '**TODO:**'.
- When writng styles with fallbacks, make the fallback the default, then overwrite it with the cascade using the feature class to provide specificity.
- Separate module styles into blocks for structure and skin.

### File organization

In general, it follows something like this:

```html
sass
	│
	└─── modules
	 		│
	 		├─── functions
	 		│
	 		├─── mixins
	 		│
	 		└─── placeholders
	
```


