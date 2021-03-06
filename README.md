# LIME UTILS

The word "**lime**" originates with its earliest use as building mortar and has the sense of "***sticking or adhering.***"

> **util** (plural **utils**)
> 
> 1. (*informal*, *computing*) A utility.

**The most handy Sass utilities in one place.**

Sometimes the right framework is no framework. That’s why Lime Utils can be used to draw on all the great sources out there in an effective way.

**Do more with less.**

Lime Utils are curated from a variety of sources, stripped down so only the absolute necessities remains, the must-haves.

**Painless setup.**

Lime Utils is written for efficiency. That’s why it works beautifully and conveniently right out of the box, letting you get up and running with no dependencies or conflicts.

**A starting point for growth.**

The best framework is a custom one, tailored to your needs, it’s easy to use Lime Utils to maximise code reusability and organisation.

## GETTING STARTED

- You can install Lime Utils by:
    - Using Bower: `bower install lime-utils`
    - Downloading the file from the [latest release](https://github.com/ogbaoghene/lime-utils/releases/tag/v1.1.13).
- Import Lime Utils with a simple Sass import: `@import 'path/to/lime-utils/lime';`

**Pro Tip**: Grunt users can set an import path, referenced in the Grunt file as an option within the Sass function.

```
options: {
     includePaths: ['path/to/lime-utils']     // grunt-sass
     loadPath: ['path/to/lime-utils']         // grunt-contrib-sass
}
```

Now that it’s in the Grunt file, simply reference the base file, like so: `@import 'lime';`

### Variables

Assigning custom values to default variables is easy. Begin by copying and pasting the default variable into your sass file. Edit the variable value and/or the key/value pairs if it's a Sass map. Then finish by updating any placeholders that need the variable. For example:

    ```
    // font-family
    $pri-font: 'montserrat', Arial, sans-serif;
    $sec-font: 'libre_baskerville', serif;
    $alt-font: 'bebas_neue', sans-serif;

    $font: (
      body: $pri-font,
      title: $alt-font,
      copy: $sec-font,
    );

    @include lime-loop($font, font-family, $namespace: font);
    ```

## CONTRIBUTING

Please do! It’s easy to create your own collection, one that works how you work. So give it a go.

If you have any questions, suggestions for improvement, find anything unclear or inaccurate, or find yourself stuck, please file an issue or contact me.

### Guidelines

Lime Utils are modules, **Sass code that doesn't immediately output CSS.**

Here are some guidelines on how to go about writing your own:

- **Each piece of functionality should be implemented in just one place.** This means abstracting dependencies or extended functionality into their own files, then referencing them.
- **Organise modules into mixins, functions, and placeholders.**
- **Begin each file with a multi-line comment (each line an inline // comment, not a block comment) naming and briefly describing the module.** Follow this with a list of parameters, a usage example and any dependencies, e.g:

	```
	// Pixel to em
    //
    // Converts a px value to em, accepts an array.

	// **Requires** : _variables, _strip-unit
	```

- **Credit the source when a module is adapted from elsewhere,** by including a link to the original in your top comments. For example:

	```
    // Adapted from [SCUT](http://davidtheclark.github.io/scut/#pixels-to-ems)
	```
	
- To prevent conflicts, **prefix functions and mixins with `lime-`**.
- **Use soft-tabs with a two space indent.**
- **List arguments, declarations and their closing braces on their own lines.**
- **Space liberally.** Use line breaks to section code according to role.

Please use the existing SCSS files as examples. Or, file an issue if you've got any suggestions on how to do things better.


