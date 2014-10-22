lime-utils
==========

Every project requires a solid foundation, the right tools, or the proper scaffold. Certain groundwork has to be laid, tasks carried out repeatedly, and best practices encouraged. I see a situation where every project begins not with a blank stylesheet but with a familiar - but constantly improving - blueprint, freeing the mind to tackle the important questions instead of mundane and repetitive tasks.

Inspired by projects like [SCUT](http://davidtheclark.github.io/scut), [Sassifaction](https://github.com/sturobson/sassifaction), [Compass](http://compass-style.org), and [Bourbon](http://bourbon.io). The lime-utils library is that blueprint, leveraging upon Sass, it is a collection of modules - functions, mixins, placeholders and variables, that facilitate the web development process.

## Requirements

- [Sass](https://github.com/sass/sass) 3.3+

## Installation

### Install [Bower](http://bower.io/)

Bower is a command line utility. Install it with npm.

```
$ npm install -g bower
```

Bower requires [Node and npm](http://nodejs.org/) and [Git](http://git-scm.org/).

### Getting started

Install the lime-utils package

```
bower install --save lime-utils
```

Import the lime-utils variables

```
@import '../bower_components/lime-utils/sass/limeVars';
```

Import the project variables

```
@import 'variables';
```

Import lime-utils

```
@import '../bower_components/lime-utils/sass/limeUtils';
```

## Usage

### Functions

#### Strip Unit

Strip the unit from a number.

Parameters:

```scss
$num : The number whose units you wish to strip
```

Adapted from [SCUT](http://davidtheclark.github.io/scut)

#### px to em

Converts a px value to em, accepts a list.

Parameters:

```scss
$values     : Number in px
$context    : Base font size, in em or px. Predefined as $doc-font-size
```

Usage:

```scss
.example {
  padding: px-to-em(12px, 16) * 3;
}

.example2 {
  padding: px-to-em(16px 20 20% 1em, 1em);
}
```

**Requires** : _variables, _stripUnit

Adapted from [SCUT](http://davidtheclark.github.io/scut) and [OOCSS](https://github.com/stubbornella/oocss)

#### px to rem

Converts a px value to rem, accepts a list.

Parameters:

```scss
$values : Number in px
```

Usage:

```scss
.example {
  font-size: px-to-rem(16px) * 4;
}

.example2 {
  padding: px-to-rem(16px 12 20% 1em);
}
```

**Requires** : _variables, _stripUnit

Adapted from [OOCSS](https://github.com/stubbornella/oocss)

#### Shade

Add black to a color.

Parameters:

```scss
$color      : Color
$percentage : Amount of black to add
```

Usage:

```scss
.box-shade {
  background-color: tint($color, 40%);
}
```

Adapted from [Compass](http://compass-style.org)

#### Tint

Add white to a color.

Parameters:

```scss
$color      : Color
$percentage : Amount of white to add
```

Usage:

```scss
.box-tint {
  background-color: tint($color, 40%);
}
```

Adapted from [Compass](http://compass-style.org)

#### Monotone Palette

Returns a tint or shade of a color in increments - 8%, 20%, 50%, or 75%.

Parameters:

```scss
$color  : Color
$mix    : Amount of black or white to be added. Predefined as null
```

Usage:

```scss
.example {
  color: mono-palette($accent1);
  background: mono-palette($accent1, shade2);
  border: 1px solid mono-palette($accent2, shade3);
}
```

**Requires** : _shade, _tint

Adapted from [Sassifaction](https://github.com/sturobson/sassifaction)

#### Modular Scale

Returns a value from a modular scale based upon a given number.

Parameters:

```scss
$increment  : Integer for increment value
$round      : Approximate result. Optional
$value      : Significant base number, can be combined with another number to create a double stranded modular scale. Predefined as $msValue
$ratio      : Value by which the base value is exponentially multiplied and divided. Predefined as $msRatio
```

Usage:

```scss
.example {
  // Increment up Modular Scale with positive value
  font-size: modular-scale(1); // returns: 16.534
  // Increment down Modular Scale with negative value
  font-size: modular-scale(-1); // returns: 10.219
  // Can be used with ceil(round up) or floor(round down)
  font-size: modular-scale(1, floor); // returns: 16
  font-size: modular-scale(1, ceil); // returns: 16
}

.example2 {
  // With unique values for $value and $ratio
  font-size: modular-scale(2, $value: 14px, $ratio: 1.667); // returns: 38.904
}
```

**Requires** : _variables, _stripUnit

Adapted from [Bourbon](http://bourbon.io)

#### List Map

Simulate Sass 3.3 Maps data type when compiling with libsass (v2.0.0), still compiles successfully with Sass 3.3.

Parameters:

```scss
$map        : Map
$map-key    : Key for desired value in key/value pair.
```

Usage:

```scss
.example {
  font-weight: list-map($type, subheading);
}
```

_**Note** : Key/value pairs in Maps are parenthesized and separated by comma to convert them to lists, e.g. $type: ((heading, $bold),(subheading, $normal),(body, $normal),(bold, $bold),);.

### Mixins

#### rem Fallback

Provide px fallback for rem values, allows multiple property-values pairs. 

Parameters:

```scss
$properties : CSS property/value pair
```

Usage:

```scss
.example {
  @include rem-fallback((
    (height, (240px / 2)),
    (font-size, 13px),
    (text-indent, 0),
    (margin, 0 10px 3vh 30%),
  ));
}
```

**Requires** : _pxToRem

_**Note** : Written to accomodate Libsass compilation, SASS 3.3 option is available on [GitHubGist](https://gist.github.com/ogbaoghene/20222a08fcab548f5593)._

#### RGBa Fallback

Provide hexadecimal fallback for semi-transparent colors. 

Parameters:

```scss
$color      : semi-transparent color
$bg-color   : background color. Defaults to white.
$property   : CSS property for $color. Defaults to background-color.
$attr       : additional CSS attr for $property. Optional
```

Usage:

```scss
.panel {
  background: gray;
  
  .overlay {
    @include rgba-fallback(rgba(black, 0.5), $bg-color: gray);
  }
}

.panel2 {
  background: #194c19;
  
  .overlay {
    @include rgba-fallback(rgba(black, 0.7), $bg-color: #194c19, $property: border-color);
    @include rgba-fallback(rgba(white, 0.8), $bg-color: #194c19, $property: color);
    @include rgba-fallback(rgba(white, 0.2), $bg-color: #194c19, $property: box-shadow, $attr: 0 3px 0 inset);
  }
}
```

Adapted from [The Sass Way](http://thesassway.com/intermediate/mixins-for-semi-transparent-colors), [Carlos Ballena](http://codepen.io/cballenar/details/tdznk/), [Eric Fernandez](http://codepen.io/FernE97/details/qcHlr/), and [Matthew Shields](http://matthewshields.co.uk/experiments/provide-fallback-rgba-colours-using-sass-mixin/).

#### Chain Properties

Shorthand for declaring CSS properties with common values. 

Parameters:

```scss
$properties : CSS Property
$value      : CSS value
```

Usage:

```scss
.example {
  @include chain(font-size font-weight font-family, inherit);
}
```

#### Loop Map

Loop through the contents of a map, create namespaced placeholders and apply the key/value pair as a ruleset.

Parameters:

```scss
$map        : Sass map
$property   : CSS property
$namespace  : prefix.
```

Usage:

```scss
@include loop-map($type, font-weight, %type);
```

**Requires** : _listMap

_**Note** : Key/value pairs in Maps are parenthesized and separated by comma to convert them to lists, e.g. $type: ((heading, $bold),(subheading, $normal),(body, $normal),(bold, $bold),);._

#### Font Face

Allows easier custom fonts integration.

Parameters:

```scss
$font   : font name
$path   : file path to web-font
$weight : font-weight. Defaults to normal
$style  : font-style. Defaults to normal
```

Usage:

```scss
@include font-face(SourceSansPro, '/fonts/Source_Sans_Pro/SourceSansPro-Regular');
@include font-face(SourceSansPro, '/fonts/Source_Sans_Pro/SourceSansPro-italic', $style: italic);
```

_**Note** : Order of the includes matters, and it is: normal, italic, bold, bold+italic._

Adapted from [Bourbon](http://bourbon.io)

#### Media Query

Define your major or minor breakpoint in pixels (automatically converts to EMs), define the media query whether it be min or max, width or height, device height or device width.

Parameters:

```scss
$break-point    : Media query breakpoint, unitless value
$ie9            : Includes the IE9 conditional class. Optional
$query1         : Prefix for media features, min, max, min-device or max-device. Defaults to min
$query2         : Media features, width or height. Defaults to width
```

Usage:

```scss
.example {
  @include media-query(768, $ie9: true, $query1: max) {
    display: none; 
  }
}
```

Adapted from [Sassifaction](https://github.com/sturobson/Sassifaction)

#### Calc Fallback

CSS3 calc mixin with fallback.

Parameters:

```scss
$property   : CSS property
$expression : arithmetic expression
$default    : fallback value. Optional
```

Usage:

```scss
.example {
  @include calc(width, "100% - #{12px * 2}", $default: 98%);
}
```

Adapted from [Livingston Samuel](https://coderwall.com/p/qac-og)

#### Opacity Fallback

Opacity mixin with fallback.

Parameters:

```scss
$opacity : Value between 1 and 100
```

Usage:

```scss
.example {
  @include opacity(50);
}
```

#### Hover, Active, Focus

Group :hover, :active, :focus.

Parameters:

```scss
$state : Specify combination, either all, no-hover, no-active, or no-focus. Defaults to all
```

Usage:

```scss
.example {
  text-decoration: none;
  
  @include hover-active-focus(no-active) {
    text-decoration: underline;
  }

  @include hover-active-focus(no-hover) {
    outline: 5px dashed pink;
  }

  @include hover-active-focus {
    cursor: pointer;
  }
}
```

#### Positioning

Position an element position and assign it coordinates.

Parameters:

```scss
$position       : Extend position placeholders, either relative, absolute, fixed, or static
$coordinates    : Top, right, bottom, and left values. Defaults to 0
```

Usage:

```scss
.example {
  @include positioning(absolute);
}

.example-2 {
  @include positioning(absolute, $coordinates: 0 0);
}
```

**Requires** : _layoutProperties

_**Note** : Escape coordinates using `null`._

#### Margin or Padding

Apply margin or padding to an element in vanilla CSS's shorthand.

Parameters:

```scss
$property   : Margin or padding
$values     : Values, top, right, bottom, and left
```

Usage:

```scss
.example {
  @include marg-or-pad(padding, 10px 3px);
}

.example-2 {
  @include marg-or-pad(margin, 2px null 3px null );
}
```

_**Note** : Escape position values using `null`._

#### Smart Border

Use a single border value on multiple sides of an element or apply individual borders in vanilla CSS's shorthand.

Parameters:

```scss
$width      : border-width
$style      : extends border-style placeholders, dotted, dashed, solid, double, none
$position   : border-position. Optional
$color      : border-color. Optional
```

Usage:

```scss
.example {
  @include smart-border(5px, $style: dotted);
}

.example-2 {
  @include smart-border(5px, $style: solid, $position: bottom);
}

.example-3 {
  @include smart-border(5px, $style: dotted, $position: top left, $color: red);
}
```

**Requires** : _boxProperties

#### Flexbox

Define behaviour for flexbox containers and items.

Parameters:

```scss
$layout         : establish main-axis, either horizontal or vertical.
$nowrap         : flex items will try to fit onto one line. Optional
$alignment      : define alignment along the main and cross axis. Defaults to default
$align-content  : align lines in flex container when there is extra space. Optional

$flex           : shorthand for flex-grow, flex-shrink and flex-basis. Defaults to auto
$order          : order flex-items. Optional
$align-self     : override default alignment of individual flex items. Optional
```

Usage:

```scss
.example {
  @include flexbox($layout: horizontal, $alignment: space-between stretch);
  
  .test-child {
    @include flexbox-child($flex: 0 0 auto, $align-self: flex-end);
  }
}
  
.example-2 {
  @include flexbox($layout: horizontal, $alignment: center, $nowrap: true);
}
```

**Requires** : _layoutProperties

#### Grid

Define behaviour for grid containers and cells. Uses Flexbox module when supported.

Parameters:

```scss
$grid-alignment     : Define horizontal alignment of cells, either default, end or center. Defaults to default
$nested             : Specify if grid container is nested within a grid cell. Optional

$cell-width         : Width of cell
$collapsed          : Specify if grid cell is without gutter. Optional
$cell-alignment     : Vertical alignment of grid cell, either default, end or center. Optional 
$cell-offset        : Cell offset. Optional 
$cell-ordering      : Cell order, first parameter is the flexbox order property. Optional
```

Usage:

```scss
.example-nested {
  @include grid-container($grid-layout: horizontal, $nested: true);

  .example-cell {
    @include grid-cell($cell-width: 57%, $cell-alignment: center, $cell-ordering: 2 auto 20%);
  }
  
  .example-cell.is-collapsed {
    @include grid-cell($cell-width: 33%, $collapsed: true, $cell-offset: 23%);
  }
}
```

**Requires** : _variables, _listMap, _remFallback, _flexbox

_**Note** : Avoid `@extend` to allow grid attributes change with media queries. Percentage values recommended for `$cell-width`, `$cell-offset`, and last 2 parameters in `$cell-ordering`._

#### Pseudo

Shorthand for writing &:before, &:after.

Parameters:

```scss
$element    : Pseudo element, before, after, or both
$content    : Insert generated content. Optional
$display    : Extend display property placeholder. Optional
$position   : Extend position property placeholder. Optional
```

Usage:

```scss
.test {
  @include pseudo($element: both, $display: show, $position: absolute) {
    height: 20px;
  }
}

.test2 {
  @include pseudo($element: after,$content: 'GO!') {
    clear: both;
  }
}
```

**Requires** : _layoutProperties

Adapted from [Team Treehouse](http://blog.teamtreehouse.com/)

#### Fixed Ratio

Container with fixed aspect ratios.

Parameters:

```scss
$ratio  : aspect ratio
$type   : wrap or crop. Defaults to default
```

Usage:

```scss
.img-cover {
  @include fixed-ratio($ratio: 16/9);
}

.img-crop {
  @include fixed-ratio($ratio: 4/3, $type: crop);
}

.img-wrap {
  @include fixed-ratio($ratio: 1.618/1, $type: wrap);
}
```

**Requires** : _layoutProperties, _chainProperties, _calcFallback, _pseudo

### Placeholders

#### Box Properties

Control the presentation of generated boxes for document elements, including dimensions, margins, padding, and borders.

Properties:

```css
Height & Width
Margin
Padding
Border
Outline
```

#### Layout Properties

Control visibility, position, and behavior of the generated boxes for document elements.

Properties:

```css
Display
Position
Float
Clear
Visibility
Position Coordinates
z-index
Overflow
```

#### List Properties

Control the presentation of list item markers.

Properties:

```css
list-style-type
list-style-position
```

#### Typographical Properties

Customize the presentation and layout of textual content.

Properties:

```css
font-family
font-size & line-height
font-weight
font-style
text-align
text-decoration
text-transform
text-shadow
vertical-align
white-space
```

#### Hide ELement

Various techniques for hiding elements.

Placeholders:

```text
Hide text off screen
Hide only visually, but have it available for screenreaders
Extend %hide-element-visually, while allowing the element to be focusable when navigated to via the keyboard
```

_Tested : IE6-9, Firefox, Chrome, Safari_

Adapted from [HTML5 Boilerplate](http://html5boilerplate.com/)

#### Clearfix

Used project wide to clear floats and create a new formatting context.

Placeholders:

```text
clearfix-overflow
clearfix-facebook
clearfix-micro
clearfix-stubborn
```

Adapted from [OOCSS](https://github.com/stubbornella/oocss)
