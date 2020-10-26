---
title: Installing the Adobe Experience Platform Web SDK
seo-title: Adobe Experience Platform Web SDK installing the SDK
description: Learn how to install the Experience Platform Web SDK
seo-description: Learn how to install the Experience Platform Web SDK
keywords: web sdk installation;installing web sdk;internet explorer;promise;
---

# Installing the SDK {#installing-the-sdk}

The preferred way to use the Adobe Experience Platform Web SDK is via [Adobe Experience Platform Launch](http://launch.adobe.com/). Search for the `AEP Web SDK` in the extensions catalog, install then configure the extension.

The AEP web SDK is also available on a CDN for you to use. You can reference this file or download it and host it on your own infrastructure. It is available in a minified and non-minified version. The non-minified version is helpful for debugging purposes.

URL structure: https://cdn1.adoberesources.net/alloy/[VERSION]/alloy.min.js OR alloy.js for the non-minified version.

For example:

* Minified: [https://cdn1.adoberesources.net/alloy/2.1.0/alloy.min.js](https://cdn1.adoberesources.net/alloy/2.1.0/alloy.min.js)
* Un-minified: [https://cdn1.adoberesources.net/alloy/2.1.0/alloy.js](https://cdn1.adoberesources.net/alloy/2.1.0/alloy.js)

## Adding the code {#adding-the-code}

The first step in implementing the Adobe Experience Platform [!DNL Web SDK] is to copy and paste the following "base code" as high as possible in the `<head>` tag of your HTML:

```markup
<script>
  !function(n,o){o.forEach(function(o){n[o]||((n.__alloyNS=n.__alloyNS||
  []).push(o),n[o]=function(){var u=arguments;return new Promise(
  function(i,l){n[o].q.push([i,l,u])})},n[o].q=[])})}
  (window,["alloy"]);
</script>
<script src="https://cdn1.adoberesources.net/alloy/2.1.0/alloy.min.js" async></script>
```

The base code creates a global function named `alloy`. Use this function to interact with the SDK. If you would like to name the global function something else, you may change the `alloy` name as follows:

```markup
<script>
  !function(n,o){o.forEach(function(o){n[o]||((n.__alloyNS=n.__alloyNS||
  []).push(o),n[o]=function(){var u=arguments;return new Promise(
  function(i,l){n[o].q.push([i,l,u])})},n[o].q=[])})}
  (window,["mycustomname"]);
</script>
<script src="https://cdn1.adoberesources.net/alloy/2.1.0/alloy.min.js" async></script>
```

In this example, the global function is renamed `mycustomname`, instead of `alloy`.

>[!IMPORTANT]
>
>To avoid potential problems, use a name containing at least one character that is not a digit and that doesn't conflict with the name of a property already found on `window`.

This base code, in addition to creating a global function, also loads additional code contained within an external file \(`alloy.js`\) hosted on a server. By default, this code is loaded asynchronously to allow your webpage to be as performant as possible. This is the recommended implementation.

## Supporting Internet Explorer {#support-internet-explore}

This SDK makes use of promises, which is a method of communicating the completion of asynchronous tasks. The [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) implementation used by the SDK is natively supported by all target browsers except [!DNL Internet Explorer]. To use the SDK on [!DNL Internet Explorer], you need to have `window.Promise` [polyfilled](https://remysharp.com/2010/10/08/what-is-a-polyfill).

To determine if you already have `window.Promise` polyfilled:

1. Open your website in [!DNL Internet Explorer].
1. Open the browser's debugging console.
1. Type `window.Promise` into the console, then press Enter. 

If something other than `undefined` appears, you likely have already polyfilled `window.Promise`. Another way to determine if `window.Promise` is polyfilled is by loading your website after having completed the above installation instructions. If the SDK throws an error mentioning something about a promise, you likely have not polyfilled `window.Promise`.

If you've determined you need to polyfill `window.Promise`, include the following script tag above the previously provided base code:

```html
<script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"></script>
```

This loads a script that ensures that `window.Promise` is a valid Promise implementation.

>[!NOTE]
>
>If you choose to load a different Promise implementation, be sure it supports `Promise.prototype.finally`.

## Loading the JavaScript file synchronously {#loading-javascript-synchronously}

As explained in the section [Adding the code](#adding-the-code), the base code you have copied and pasted into your website's HTML loads an external file with additional code. This additional code contains the core functionality of the SDK. Any command you attempt to execute while this file is loading is queued and then processed after the file is loaded. This is the most performant method of installation.

Under certain circumstances, however, you might want to load the file synchronously \(more details about these circumstances will be documented later\). Doing so blocks the rest of the HTML document from being parsed and rendered by the browser until the external file has been loaded and executed. This additional delay before displaying primary content to users is typically discouraged, but can make sense depending on the circumstances.

To load the file synchronously instead of asynchronously, remove the `async` attribute from the second `script` tag as shown below:

```markup
<script>
  !function(n,o){o.forEach(function(o){n[o]||((n.__alloyNS=n.__alloyNS||
  []).push(o),n[o]=function(){var u=arguments;return new Promise(
  function(i,l){n[o].q.push([i,l,u])})},n[o].q=[])})}
  (window,["alloy"]);
</script>
<script src="https://cdn1.adoberesources.net/alloy/2.1.0/alloy.min.js"></script>
```
