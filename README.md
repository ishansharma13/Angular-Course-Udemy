# Section-7 Directives - A deep dive

## Directive type: Structural vs Attributes

Structural Directives are responsible for editing the DOM, used to add/remove/change DOM elements based on conditions

Attribute level Directives are majorly responsible for changing the element/property of a specific component they are added to

__ One cannot have more than one structural directive on a single element __
## Creating a custom directive
  Use renderer to make DOM manipulation instead of changing the ElementRef directly

** HostListener: when you want to listen to events and change something on a directive, should be used with renderers **
** HostBinding: changing the value for attributes of host without using renderer**

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
