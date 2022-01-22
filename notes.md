# Angular - The Complete Guide (Udemy)

## Section-2

### File Structure:
**How we see what we see when we load the website?**
To answer this question go and look at the main.ts file, the root component of the angular app is registered there, which tells angular to compile all the .component files associated with it.

When the page is loaded on localhost or production, the compiled version of main.ts is imported as a script tag with src, these files are compiled using webpack or other bundlers

```ng generate component <component-name>
   or
   ng g c <component-name>
```

either template or templateUrl must be present in every component, use template for inline html code

either styles or stylesUrl can be used to specify multiple styles or css files for a singular component, this must be an array

selector can be of three types:
    html element: 'normal-string'
    attribute: '[normal-string]'
    class: '.normal-string'

    selected by id wont work (not supported)

