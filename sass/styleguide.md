#Lime Utilities

##A library of Sass modules - functions, mixins, placeholders and variables.

Welcome to the Lime Utilities overview. Before continuing, you should have a general understanding of the [SCSS](http://sass-lang.com/) syntax, and [KSS](https://github.com/kneath/kss) documentation.

###Coding Style

####Spacing
- Use soft-tabs with a four space indent. Spaces are the only way to guarantee code renders the same in any person's environment.
- Put spaces after `:` in property declarations.
- Put spaces before `{` in rule declarations.
- Put line breaks between rulesets.
- When grouping selectors, keep individual selectors to a single line.
- Place closing braces of declaration blocks on a new line.
- Each declaration should appear on its own line for more accurate error reporting.
- Comments that refer to selector blocks should be on a separate line immediately before the block to which they refer.
- Add two blank lines between sections and one blank line between blocks in a section.
- Prepend section titles with a `$`.
- Use appropriate flags or striking symbols for section headers.

####Formatting
- Use hex color codes `#000` unless using `rgba()`.
- Avoid specifying units for zero values, e.g., `margin: 0;` instead of `margin: 0px;`.
- Strive to limit use of shorthand declarations to instances where you must explicitly set all the available values.
- Order CSS declarations by type and relevance, and order each grouping according to its relevance to the selector.
- Remove 0 when dealing with decimals between 0 and 1, e.g., `width: .75em;` instead of `width: 0.75em;`.

####SCSS
- As a rule of thumb, avoid unnecessary nesting in SCSS. At most, aim for three levels. If you cannot help it, step back and rethink your overall strategy (either the specificity needed, or the layout of the nesting).
- A nested block of Sass should not exceed 50 lines, beyond that it starts becoming difficult to understand. The whole point of nesting is convenience and to assist in mental grouping. Don't use it if it hurts that.
- Global and section-specific Sass files are just table of contents. In other words, no styles directly in them. Break into as many small files as makes sense, this is to keep all styles organized into component parts.
- In global and section-specific Sass files, list global dependancies first, then author dependancies, then patterns, then parts.
- At the top of your block of Sass you should include any `@extend`(s) that are relevant to the element followed by `$variable`(s), Include an empty line underneath each group of Sass specific item and an empty line at the end of the block.
- After declaring these bits of Sass any CSS that the element requires, include an empty line at the end of the block.
- List `@include`(s) next, this visually separates the `@extends` and `@includes` as well as groups the `@includes` for easier reading.
- Pseudo and combinator selectors follow `@include`(s).
- Nested elements come in at the end of the block with a space between each nesting.
- Media queries are nested inline with the element, and are placed at the end of the block after the pseudo and combinator selectors and any other nested elements. With a space separating them.
- If you need to add a comment to part of a block of Sass then you would add a Sass comment (not a CSS comment) after the element.
- Variablize all common numbers, numbers with meaning, and colors. To eliminate confusion when making changes, a two-tier system is used, first set descriptive variables then, functional variables.

####Misc
- Document styles with [KSS](https://github.com/kneath/kss).
- To describe an atomic task to be completed at a later date, add Sass comments containing a todo statement prepended with '**TODO:**'.

###File organization

The file organizationis based on the division of SCSS files into code that ouptuts CSS - *partials* - and code that doesn't - *modules*. 

In general, it should follow something like this:

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


