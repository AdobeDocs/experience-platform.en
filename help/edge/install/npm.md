## Option 3: Using the NPM package

Adobe Experience Platform Web SDK is also available as an NPM package. [NPM](https://www.npmjs.com) is the package manager for JavaScript. Installing the NPM package allows you to have control of the build process for the Adobe Experience Platform Web SDK JavaScript. The NPM package exposes EcmaScript version 5 modules or EcmaScript version 2015 (ES6) modules meant to be run in the browser.

```bash
npm install @adobe/alloy
```

The NPM package of the Adobe Experience Platform Web SDK exposes a `createInstance` function. This function is used to create an instance. The name option passed to the function controls the prefix used in logging. Below are examples of using the package.

### Using the package as an ECMAScript 2015 (ES6) module

```javascript
import { createInstance } from "@adobe/alloy";
const alloy = createInstance({ name: "alloy" });
alloy("config", { ... });
alloy("sendEvent", { ... });
```

>[!NOTE]
>
>The NPM package relies on CommonJS modules; therefore, when using a bundler, make sure the bundler supports CommonJS modules. Some bundlers, such as [Rollup](https://rollupjs.org), require a [plugin](https://www.npmjs.com/package/@rollup/plugin-commonjs) that provides CommonJS support.

### Using the package as an ECMAScript 5 module

```javascript
var alloyLibrary = require("@adobe/alloy");
var alloy = alloyLibrary.createInstance({ name: "alloy" });
alloy("config", { ... });
alloy("sendEvent", { ... });
```