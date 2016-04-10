# LIME UTILS
==========
The word "**lime**" originates with its earliest use as building mortar and has the sense of "***sticking or adhering.***"

> **util** ‎(plural **utils**)
> 
> 1. (informal, computing) A utility.

**The most handy Sass utilities in one place.**

Sometimes the right framework is no framework. That’s why Lime Utils can be used to [draw on all the great sources out there] in an effective way.

**Do more with less.**

Lime Utils are curated from a variety of sources, stripped down so only the absolute necessities remains, the must-haves.

**Painless setup.**

Lime Utils is written for efficiency. That’s why it works beautifully and conveniently right out of the box, letting you get up and running with no dependencies or conflicts.

**A starting point for growth.**

The best framework is a custom one, tailored to your needs, it’s easy to use Lime Utils to maximise code reusability and organisation.

## GETTING STARTED

- You can install Lime Utils by:
    - Using Bower: `bower install lime-utils`
    - Downloading the file from the [latest release](https://github.com/ogbaoghene/lime-utils/releases/tag/v1.0.1).
- Import Lime Utils with a simple Sass import: `@import ‘path/to/lime-utils/_lime’;`

**Pro Tip**: Grunt users can set an import path, referenced in the Grunt file as an option within the Sass function.

```
options: {
     includePaths: ['path/to/lime-utils’]     // grunt-sass
     loadPath: ['path/to/lime-utils']         // grunt-contrib-sass
}
```

Now that it’s in the Grunt file, simply reference the base file, like so: ` @import ‘_lime’;`

## CONTRIBUTING

Please do! It’s easy to create your own collection, one that works how you work. So give it a go.

If you have any questions, suggestions for improvement, find anything unclear or inaccurate, or find yourself stuck, please file an issue or contact me.

### Guidelines

Lime Utilis are modules, **Sass code that doesn't immediately output CSS.**

Here are some guidelines on how to go about writing your own:

- **Each piece of functionality should be implemented in just one place.** This means abstracting dependencies or extended functionality into their own files, then referencing them.
- **Organise modules into mixins, functions, and placeholders.**
- **Begin each file with a multi-line comment (each line an inline // comment, not a block comment) naming and briefly describing the module.** Follow this with a list of parameters, a usage example and any dependencies, e.g:

	```
	// PX TO EM
	// Converts a px value to em, accepts an 	array.

	// Requires : _variables, _strip-unit
	```

- **Credit the source when a module is adapted from elsewhere,** by including a link to the original in your top comments. For example:

	```
    // Adapted from [SCUT](http://davidtheclark.github.io/scut/#pixels-to-ems)
	```
	
- **Add a `lime-` prefix to all module names** to prevent conflicts.
- **Use soft-tabs with a two space indent.**
- **List arguments, declarations and their closing braces on their own lines.**
- **Space liberally.** Use line breaks to section code according to role.

Please use the existing SCSS files as examples. Or, file an issue if you've got any suggestions on how to do things better.


