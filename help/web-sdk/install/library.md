---
title: Install the Web SDK using the JavaScript library
description: Reference the Web SDK library using a standalone CDN file.
---

# Install the Web SDK using the JavaScript library

One option to install the Web SDK is by referencing the JavaScript library hosted on a CDN. You can reference the library directly, or download it and host it on your own infrastructure. It is available in minified and full formats.

The Web SDK library is available using the following URL structure:

* **Minified**: `https://cdn1.adoberesources.net/alloy/[VERSION]/alloy.min.js`
* **Full**: `https://cdn1.adoberesources.net/alloy/[VERSION]/alloy.js`

See the [release notes](../release-notes.md) for the latest version to include in the URL. For example, the URL for the full version of version 2.19.1 is `https://cdn1.adoberesources.net/alloy/2.19.1/alloy.js`.

## Adding the code

Add the following code block as high as possible in the `<head>` tag of your HTML:

```html
<script>
  !function(n,o){o.forEach(function(o){n[o]||((n.__alloyNS=n.__alloyNS||
  []).push(o),n[o]=function(){var u=arguments;return new Promise(
  function(i,l){n[o].q.push([i,l,u])})},n[o].q=[])})}
  (window,["alloy"]);
</script>
<script src="https://cdn1.adoberesources.net/alloy/2.19.1/alloy.min.js" async></script>
```

This code asynchronously creates an `alloy` object that allows you to call any Web SDK command. If you want to load the Web SDK synchronously, you can remove the `async` attribute in the last line of the code block. Removing the `async` attribute blocks the rest of the HTML document from being parsed and rendered by the browser until the library is loaded and executed. This additional delay before displaying primary content to users is typically discouraged, but can make sense depending your organization's needs.
