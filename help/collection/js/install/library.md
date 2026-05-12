---
title: Install the Web SDK JavaScript library
description: Reference the Web SDK library using a standalone CDN file.
exl-id: bacfe938-4326-48f6-a321-bd16970e77eb
---
# Install the Web SDK JavaScript library

If you opt not to use the [Web SDK tag extension](/help/tags/extensions/client/web-sdk/overview.md), you can install the Web SDK by referencing the standalone JavaScript library hosted on Adobe's CDN. You can reference the library directly, or download it and host it on your own infrastructure. It is available in minified and full formats.

The Web SDK library is available using the following URL structure:

* **Minified**: `https://cdn1.adoberesources.net/alloy/<VERSION>/alloy.min.js`
* **Full**: `https://cdn1.adoberesources.net/alloy/<VERSION>/alloy.js`

See the [Web SDK release notes](../release-notes.md) for the latest version to include in the URL. For example, the URL for the full version of version 2.19.1 is `https://cdn1.adoberesources.net/alloy/2.19.1/alloy.js`.

## Adding the base code and library loader

The code to add consists of two sections:

* **Base code**: Allows bootstrapping by queuing commands while the Web SDK loads asynchronously. See [Base code](base-code.md) for more information. Adobe recommends using the base code when loading the library asynchronously to avoid race conditions when calling Web SDK commands during page load.
* **Library loader**: Loads the full JavaScript library.

Add the following code block as high as possible in the `<head>` tag, before any scripts that might call the Web SDK:

```html
<!-- Base code -->
<script>
  !function(n,o){o.forEach(function(o){n[o]||((n.__alloyNS=n.__alloyNS||
  []).push(o),n[o]=function(){var u=arguments;return new Promise(
  function(i,l){n.setTimeout(function(){n[o].q.push([i,l,u])})})},n[o].q=[])})}
  (window,["alloy"]);
</script>
<!-- Library loader -->
<script src="https://cdn1.adoberesources.net/alloy/<VERSION>/alloy.min.js" async></script>
```

If you want to load the Web SDK synchronously, you can remove the `async` attribute when loading the library. Removing the `async` attribute blocks HTML parsing while the browser fetches and executes the library. This additional delay before displaying primary content to users is typically discouraged, but can make sense depending on your organization's needs.
