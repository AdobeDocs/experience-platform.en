---
title: Install the Adobe Experience Platform Web SDK
description: Learn how to install the Experience Platform Web SDK.
keywords: web sdk installation;installing web sdk;internet explorer;promise;npm package
exl-id: b1de7ca1-d0d2-4661-a273-a1acf29afcd5
---
# Install the SDK {#installing-the-sdk}

There are three supported ways to use Adobe Experience Platform Web SDK:

1. The preferred way to use Adobe Experience Platform Web SDK is via the Data Collection UI or Experience Platform UI.
1. Adobe Experience Platform Web SDK is also available on a content delivery network (CDN) for you to use.
1. Use the NPM library which exports EcmaScript 5 and EcmaScript 2015 (ES6) modules.

## Option 1: Installing the tag extension

For documentation on the tag extension, see the [Tags documentation](../../tags/extensions/client/sdk/overview.md)

## Option 2: Installing the prebuilt standalone version

The prebuilt version is available on a CDN. You can reference the library on the CDN directly on your page, or download and host it on your own infrastructure. It is available in minified and unminified formats. The unminified version is helpful for debugging purposes.

URL structure: https://cdn1.adoberesources.net/alloy/[VERSION]/alloy.min.js OR alloy.js for the non-minified version.

For example:


* Minified: [https://cdn1.adoberesources.net/alloy/2.6.4/alloy.min.js](https://cdn1.adoberesources.net/alloy/2.6.4/alloy.min.js)
* Un-minified: [https://cdn1.adoberesources.net/alloy/2.6.4/alloy.js](https://cdn1.adoberesources.net/alloy/2.6.4/alloy.js)


### Adding the code {#adding-the-code}

The prebuilt standalone version requires a "base code" added directly to the page. Copy and paste the following "base code" as high as possible in the `<head>` tag of your HTML:

```markup
<script>
  !function(n,o){o.forEach(function(o){n[o]||((n.__alloyNS=n.__alloyNS||
  []).push(o),n[o]=function(){var u=arguments;return new Promise(
  function(i,l){n[o].q.push([i,l,u])})},n[o].q=[])})}
  (window,["alloy"]);
</script>
<script src="https://cdn1.adoberesources.net/alloy/2.6.4/alloy.min.js" async></script>
```

The "base code" creates a global function named `alloy`. Use this function to interact with the SDK. If you would like to name the global function something else, change the `alloy` name as follows:

```markup
<script>
  !function(n,o){o.forEach(function(o){n[o]||((n.__alloyNS=n.__alloyNS||
  []).push(o),n[o]=function(){var u=arguments;return new Promise(
  function(i,l){n[o].q.push([i,l,u])})},n[o].q=[])})}
  (window,["mycustomname"]);
</script>
<script src="https://cdn1.adoberesources.net/alloy/2.6.4/alloy.min.js" async></script>
```

In this example, the global function is renamed `mycustomname`, instead of `alloy`.

>[!IMPORTANT]
>
>To avoid potential problems, use a name containing at least one character that is not a digit and that doesn't conflict with the name of a property already found on `window`.

This base code, in addition to creating a global function, also loads additional code contained within an external file \(`alloy.js`\) hosted on a server. By default, this code is loaded asynchronously to allow your webpage to be as performant as possible. This is the recommended implementation.

### Supporting Internet Explorer {#support-internet-explore}

This SDK uses promises, which are a method of communicating the completion of asynchronous tasks. The [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) implementation used by the SDK is natively supported by all target browsers except [!DNL Internet Explorer]. To use the SDK on [!DNL Internet Explorer], you must have `window.Promise` [polyfilled](https://remysharp.com/2010/10/08/what-is-a-polyfill).

To determine if you already have `window.Promise` polyfilled:

1. Open your website in [!DNL Internet Explorer].
1. Open the browser's debugging console.
1. Type `window.Promise` into the console, then press Enter.

If something other than `undefined` appears, you likely have already polyfilled `window.Promise`. Another way to determine if `window.Promise` is polyfilled is by loading your website after having completed the above installation instructions. If the SDK throws an error mentioning something about a promise, you likely have not polyfilled `window.Promise`.

If you've determined you must polyfill `window.Promise`, include the following script tag above the previously provided base code:

```html
<script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"></script>
```

This tag loads a script that ensures that `window.Promise` is a valid Promise implementation.

>[!NOTE]
>
>If you choose to load a different Promise implementation, be sure it supports `Promise.prototype.finally`.

### Loading the JavaScript file synchronously {#loading-javascript-synchronously}

As explained in the section [Adding the code](#adding-the-code), the base code you have copied and pasted into your website's HTML loads an external file. The external file contains the core functionality of the SDK. Any command you attempt to execute while this file loads is queued and then processed after the file is loaded. Loading the file asynchronously is the most performant method of installation.

Under certain circumstances, however, you might want to load the file synchronously \(more details about these circumstances will be documented later\). Doing so blocks the rest of the HTML document from being parsed and rendered by the browser until the external file has been loaded and executed. This additional delay before displaying primary content to users is typically discouraged, but can make sense depending on the circumstances.

To load the file synchronously instead of asynchronously, remove the `async` attribute from the second `script` tag as shown below:

```markup
<script>
  !function(n,o){o.forEach(function(o){n[o]||((n.__alloyNS=n.__alloyNS||
  []).push(o),n[o]=function(){var u=arguments;return new Promise(
  function(i,l){n[o].q.push([i,l,u])})},n[o].q=[])})}
  (window,["alloy"]);
</script>
<script src="https://cdn1.adoberesources.net/alloy/2.6.4/alloy.min.js"></script>
```

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

### Supporting Internet Explorer

The Adobe Experience Platform SDK uses promises, which are a method of communicating the completion of asynchronous tasks. The [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) implementation used by the SDK is natively supported by all target browsers except [!DNL Internet Explorer]. To use the SDK on [!DNL Internet Explorer], you must have `window.Promise` [polyfilled](https://remysharp.com/2010/10/08/what-is-a-polyfill).

One library you could use to polyfill promise is promise-polyfill. See the [promise-polyfill documentation](https://www.npmjs.com/package/promise-polyfill) for more information on how to install with NPM.

>[!NOTE]
>
>If you choose to load a different Promise implementation, be sure it supports `Promise.prototype.finally`.
