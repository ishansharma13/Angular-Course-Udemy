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

