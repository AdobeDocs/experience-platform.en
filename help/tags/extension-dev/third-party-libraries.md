---
title: Implementing Third-Party Libraries
description: Learn about the different methods of hosting third-party libraries within your Adobe Experience Platform tag extensions.
exl-id: d8eaf814-cce8-499d-9f02-b2ed3c5ee4d0
---
# Implementing third-party libraries

One of the main purposes of tag extensions in Adobe Experience Platform is to enable you to easily implement existing marketing technologies (libraries) into your website. By using extensions, you can implement libraries provided by third-party content delivery networks (CDNs) without having to manually edit your website's HTML.

There are several methods to host third-party (vendor) libraries within your extensions. This document provides an overview of these different implementation methods, including the pros and cons of each.

## Prerequisites

This document requires a working understanding of extensions within tags, including what they can do and how they are composed. See the [extension development overview](./overview.md) for more information.

## Base code loading process

Outside of the context of tags, it is important to understand how marketing technologies typically load on a website. Third-party library vendors provide a snippet of code (called a base code) that must be embedded within your website's HTML in order to load the library's functionalities.

In general, base codes for marketing technologies execute some variant of the following process when loading on your site:

1. Set up a global function that can be used to interact with the vendor library.
1. Load the vendor library.
1. Make a series of queued initial calls to the global function for configuration and tracking purposes.

When the global function is initially set up, you can still make calls to the function before the library has finished loading. Any calls you make are added to the base code's queueing mechanism and are then executed in sequential order once the library loads.

Once the library finishes loading, the global function is replaced with a new one that bypasses the queue and instead immediately processes any future calls to the function.

### Base code example

The following JavaScript is an example of an unminified base code for the [Pinterest conversion tag](https://developers.pinterest.com/docs/ad-tools/conversion-tag/?), which will be referenced later in this document to demonstrate how the base code be adapted for different implementation strategies with tags:

```js
!function(scriptUrl) {
  if (!window.pintrk) {
    window.pintrk = function() {
      window.pintrk.queue.push(
        Array.prototype.slice.call(arguments)
      );
    };
    window.pintrk.queue = []; 
    window.pintrk.version = '3.0';
    var scriptElement = document.createElement('script');
    scriptElement.async = true;
    scriptElement.src = scriptUrl;
    var firstScriptElement = 
      document.getElementsByTagName('script')[0];
    firstScriptElement.parentNode.insertBefore(
      scriptElement, firstScriptElement
    );
  }
}('https://s.pinimg.com/ct/core.js');
pintrk('load', 'YOUR_TAG_ID');
pintrk('page');
```

In summary, the base code above provides an [immediately invoked function expression (IIFE)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) that creates a global function to interact with the library (`window.pintrk`). It also assigns a `scriptURL` variable the value of `https://s.pinimg.com/ct/core.js`, which is where the library is located. As explained earlier, any functions that are called before the library has loaded are pushed into a queue (`window.pintrk.queue`) to be executed in sequence once the library is available.

The following part of the base code is the most relevant when it comes to understanding how the library loads on your site:

```js
var scriptElement = document.createElement("script");
scriptElement.async = true;
scriptElement.src = scriptUrl;
var firstScriptElement = 
  document.getElementsByTagName("script")[0];
firstScriptElement.parentNode.insertBefore(
  scriptElement, firstScriptElement
);
```

The base code creates a script element, sets it to load asynchronously, and sets the `src` URL to `https://s.pinimg.com/ct/core.js`. It then adds the script element to the document by inserting it before the first script element already in the document.

## Tags implementation options

The sections below demonstrate the different ways you can load vendor libraries in your extensions, using the Pinterest base code shown previously as an example. Each of these examples involves creating an [action type for a web extension](./web/action-types.md) that loads the library on your website.

>[!NOTE]
>
>While the examples below use action types for demonstration purposes, you can apply the same principles to any function that loads the tag library on your site.


The following methods are covered:

- [Implementing third-party libraries](#implementing-third-party-libraries)
  - [Prerequisites](#prerequisites)
  - [Base code loading process](#base-code-loading-process)
    - [Base code example](#base-code-example)
  - [Tags implementation options](#tags-implementation-options)
    - [Load at runtime from the vendor host {#vendor-host}](#load-at-runtime-from-the-vendor-host-vendor-host)
    - [Load at runtime from the tag library host](#load-at-runtime-from-the-tag-library-host)
    - [Embed the library directly](#embed-the-library-directly)
  - [Next steps](#next-steps)

### Load at runtime from the vendor host {#vendor-host}

The most common method for vendor library hosting is to use the vendor's CDN.  As the base code for most vendor libraries is already configured to load the library from the vendor's CDN, you can set up your extension to load the library from the same location.

This approach is usually the easiest to maintain since any updates that are made to the file on the CDN will automatically be loaded by the extension.

When using this method, you can simply paste the entire base code directly into an action type like so:

```js
module.exports = function() {
  !function(scriptUrl) {
    if (!window.pintrk) {
      window.pintrk = function() {
        window.pintrk.queue.push(
          Array.prototype.slice.call(arguments)
        );
      };
      window.pintrk.queue = []; 
      window.pintrk.version = "3.0";
      var scriptElement = document.createElement("script");
      scriptElement.async = true;
      scriptElement.src = scriptUrl;
      var firstScriptElement = 
        document.getElementsByTagName("script")[0];
      firstScriptElement.parentNode.insertBefore(
        scriptElement, firstScriptElement
      );
    }
  }("https://s.pinimg.com/ct/core.js");
  pintrk('load', 'YOUR_TAG_ID');
  pintrk('page');
};
```

Optionally, you can take additional steps to refactor this implementation. Since the variables `scriptElement` and `firstScriptElement` are now scoped to the exported function, you can remove the IIFE since these variables don't run the risk of becoming globals.

In addition, tags provide several [core modules](./web/core.md) which are utilities that any extension can use. Specifically, the `@adobe/reactor-load-script` module loads a script from a remote location by creating a script element and adding it to the document. By using this module for the script loading process, you can refactor the action code even further:

```js
var loadScript = require('@adobe/reactor-load-script');
var scriptUrl = 'https://s.pinimg.com/ct/core.js';
module.exports = function() {
  if (!window.pintrk) {
    window.pintrk = function() {
      window.pintrk.queue.push(
        Array.prototype.slice.call(arguments)
      );
    };
    window.pintrk.queue = []; 
    window.pintrk.version = "3.0";
    loadScript(scriptUrl);   
  }
  pintrk('load', 'YOUR_TAG_ID');
  pintrk('page');
};
```

### Load at runtime from the tag library host

Using a vendor CDN for library hosting poses several risks: the CDN may fail, the file may be updated with a critical bug at any time, or the file could be compromised for nefarious purposes.

To address these concerns, you can choose to include the vendor library as a separate file within your extension. The extension can then be configured so that the file is hosted alongside the main tag library. At runtime, the extension loads the vendor library from the same sever that delivered the main library to the website.

>[!IMPORTANT]
>
>In some cases, the vendor library may load additional code from third-party servers, as is the case with the Pinterest vendor library. In these cases, bundling the vendor library with your extension might not fully alleviate all risk-related concerns.

To implement this, you must first download the vendor library onto your machine. In the case of Pinterest, the vendor library is found at [https://s.pinimg.com/ct/core.js](https://s.pinimg.com/ct/core.js). Once you have downloaded the file, you must place it within your extension project. In the example below, the file is named `pinterest.js` and is located within a `vendor` folder in the project directory.

Once the library file is in your project, you must update your [extension manifest](./manifest.md) (`extension.json`) to indicate that the vendor library should be delivered alongside the main tag library. This is done by adding the path to the library file within a `hostedLibFiles` array:

```json
{
  "hostedLibFiles": ["vendor/pinterest.js"]
}
```

Finally, you must configure your action code to load the vendor library from the same server that hosts the main library. The example below uses the action code built in the [previous section](#vendor-host) as a starting point. Using the [turbine object](./turbine.md), you must pass the filename (without any path) of the vendor file like so:

```js
var loadScript = require('@adobe/reactor-load-script');
var scriptUrl = turbine.getHostedLibFileUrl('pinterest.js');
module.exports = function() {
  if (!window.pintrk) {
    window.pintrk = function() {
      window.pintrk.queue.push(
        Array.prototype.slice.call(arguments)
      );
    };
    window.pintrk.queue = []; 
    window.pintrk.version = "3.0";
    loadScript(scriptUrl);   
  }
  pintrk('load', 'YOUR_TAG_ID');
  pintrk('page');
};
```

It is important to note that when using this method, you must manually update your downloaded vendor file whenever the library gets updated on their CDN, and release the changes to a new version of your extension.

### Embed the library directly

You can bypass having to load the vendor library entirely by directly embedding the library code into the action code itself, which effectively makes it part of the main tag library. Using this method increases the size of the main library, but avoids the need to make an additional HTTP request to retrieve a separate file.

Using the action code built in the [previous section](#vendor-host) as a starting point, you can replace the line where the script is loaded with the content of the script itself:

```js
module.exports = function() {
  if (!window.pintrk) {
    window.pintrk = function() {
      window.pintrk.queue.push(
        Array.prototype.slice.call(arguments)
      );
    };
    window.pintrk.queue = []; 
    window.pintrk.version = "3.0";
    // Paste the full vendor library code here.
  }
  pintrk('load', 'YOUR_TAG_ID');
  pintrk('page');
};
```

## Next steps

This document provided an overview of the different methods for hosting third-party libraries in your tag extensions. While the examples provided were focused on libraries, these techniques apply to any piece of code that your extension can utilize.

Refer to the documentation linked to throughout this guide to learn more about the tools for configuring your extensions, including action types, the extension manifest, core modules, and the turbine object.
