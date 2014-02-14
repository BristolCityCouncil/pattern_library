@TODO: Should probably be separate readme for both core and project...

# Styles

This README aims to bring developers up to speed with the structure and workflow of the site styling. Please note: it is a work-in-progress, evolving document.

## Code guidelines

- Use classes over ID/element selectors wherever possible
- Use BEM to 'guide' class naming: http://bem.info/
- Use SCSS syntax: http://sass-lang.com/
- Use Compass for common mixins: http://compass-style.org/
- Avoid deep nesting (ideally no deeper than 3 levels), instead use BEM naming to indicate nesting (e.g. .block, .block__element)
- Use LOTS of code comments :)

## Structure

The SASS structure consists of 'core' and 'project' folders:

# Library CSS

 - Normalise / reset
 - Helper classes
 - Basic print styles
 - Skiplinks
 - Typographical mixins

You shouldn't need to edit the CSS in this directory on a per-project basis.

## Current dependencies

Breakpoint variables in _settings.scss


# Project

Includes @imports for any required components from the pattern library

# Vendor CSS

Files living in this directory are from third party sources and shouldn't be edited.

If you wish to edit these, move them out of this directory but think twice before you do so!

# fe.css and fe-oldie.css

These files will be served up only to users logged into Liferay. 

The CSS in these files is the same as the master CSS, but it is namespaced to avoid conflict with the Liferay admin UI. 


## Commenting

Comment your SASS with these helpers.
@TODO: Need discussion as we have many options

`/* ======================================================
   MAJOR SECTION
   ======================================================*/`

`/* ------------------------------
 * Minor section
 */`

`/**
 * Explanation
 */`

`/* @TODO: Flag for attention
*/`