# Emote Component

## 1. Installation

```bash
npm install emote
```

## 2. Creating Emote Comments Section Component

Create or add a new file in your choice of framework as a container element as HTML.

Use a container tag; as the script is deferred and imported. In my example, I use TailwindCSS classes for layout and styling as shown, but you can create custom classes or design the container to fit your project needs.

The id declaration ``` id="emote_com"``` will identify the container which imports the comments section. The container should be empty anmd can be used below as shown as a standalone component or added to an existing one that can be later imported to a file or page.

```html
<!-- Emote / styles composed as TailwindCSS -->
<container id="emote_com" class="mx-auto w-2/3 flex"></container>
```

## 3. Importing Your Emote Component

Since Emote uses a deferred script, we reccomend importing it or the component that contains Emote directly to a page/file and not another component.

### VanillaJs

```Javascript
// YourPage.js
import Emote from 'emote';

document.addEventListener('DOMContentLoaded', () => {
  new Emote('emote_com');
});
```

### JXS, TSX, and .astro usage example

```JSX
// YourPage.(jsx/tsx/astro)
import Emote from 'emote';
...
// location of comments section component
<Emote />
```

### Handling Multiple Instances, Script-Handeling, and Re-Initialization

If your script or component may be instantiated multiple times on the same page, ensure your script loading mechanism checks if the script is already present or loaded to avoid loading it multiple times.

If you add additional script handeling or asynchrinization to your component or page, it's likely to affect the scripts deferred loading. You'll want to opt that component or tag out of any additional rules or project-wide script loading mechanisms to avoid conflicts.
