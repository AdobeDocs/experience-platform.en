---
title: Install the Adobe Client Data Layer
description: Learn how to add the Adobe Client Data Layer to your website with the tag extension, npm, a script tag, or Adobe Experience Manager.
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
---
# Install the Adobe Client Data Layer

Installing the Adobe Client Data Layer (ACDL) involves two parts:

1. **Create the data layer array** in every script that pushes to it, so that your code works whether or not ACDL has loaded yet.
1. **Load the ACDL library** once per page, using one of the [installation methods](#methods).

## Create the data layer array {#initialize}

Add the following line before any code that pushes to the data layer:

```js
window.adobeDataLayer = window.adobeDataLayer || [];
```

This line creates the array if it doesn't exist and keeps it if it does. Include it in every script that pushes to the data layer, not just the first one. Scripts can load in any order, and the line makes sure that each script pushes to the same array without overwriting it.

After this line, push data, events, and functions with [`push()`](methods/push.md):

```js
window.adobeDataLayer = window.adobeDataLayer || [];
window.adobeDataLayer.push({ page: { title: "Home" } });
```

Until ACDL loads, `push()` is the standard JavaScript array method, and the array works as a queue. When ACDL loads, it processes the queued items in order. See [Queue and history](concepts/queue.md).

>[!IMPORTANT]
>
>ACDL always uses the global name `adobeDataLayer`. The library doesn't support other names. The [tag extension](/help/tags/extensions/client/client-data-layer/configure.md) can make a second name refer to the same data layer.

## Choose an installation method {#methods}

Load ACDL on each page with one of the following methods:

| Method | Use it when |
| --- | --- |
| [Tag extension](#tags) | You use tags in Adobe Experience Platform. The extension can load ACDL for you. |
| [Script tag](#script) | You want to host the library file yourself and add it to your page templates. |
| [npm](#npm) | You build your site's JavaScript with a bundler. |
| [Adobe Experience Manager](#aem) | Your site uses AEM Core Components 2.9.0 or later. |

### Tag extension {#tags}

The [Adobe Client Data Layer tag extension](/help/tags/extensions/client/client-data-layer/overview.md) loads ACDL when your tag library loads, unless the page already loads it. You don't need to add the library to your page templates. Your site code still needs to [create the data layer array](#initialize) and push data. See [Configure the Adobe Client Data Layer extension](/help/tags/extensions/client/client-data-layer/configure.md).

### Script tag {#script}

Download the library from npm (see [npm](#npm)) and host `adobe-client-data-layer.min.js` on your site. Then load it in the `<head>` of each page with both the `async` and `defer` attributes:

```html
<script src="/js/adobe-client-data-layer.min.js" async defer></script>
```

Browsers that support `async` run the script as soon as it downloads, without blocking the page. Because ACDL processes everything that was queued before it loaded, your data is safe even if other scripts push to the data layer first.

The following example shows a page where an inline script and an external script both push to the data layer before ACDL loads:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>My page</title>
    <script src="/js/myscripts.js" defer></script>
    <script>
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ page: { title: "My page" } });
    </script>
    <script src="/js/adobe-client-data-layer.min.js" async defer></script>
  </head>
  <body>
    <h1>My page</h1>
  </body>
</html>
```

The external script, `/js/myscripts.js`, also creates the array before it pushes:

```js
window.adobeDataLayer = window.adobeDataLayer || [];
window.adobeDataLayer.push({ user: { loggedIn: false } });
```

Public npm CDNs, such as `unpkg` and `jsDelivr`, also serve the library file. If you load it from a third-party CDN, pin an exact version in the URL so that the file doesn't change without your knowledge.

### npm {#npm}

Install the package:

```shell
npm install @adobe/adobe-client-data-layer
```

The package contains a browser script at `dist/adobe-client-data-layer.min.js`. Either copy that file to your site and [load it with a script tag](#script), or import the file in your bundled JavaScript:

```js
import "@adobe/adobe-client-data-layer/dist/adobe-client-data-layer.min.js";
```

The script doesn't export anything. When it runs, it sets up `window.adobeDataLayer`.

>[!NOTE]
>
>In ACDL 3.x, import the file path shown above. The 3.x package doesn't define an entry point, so `import "@adobe/adobe-client-data-layer"` fails.

### Adobe Experience Manager {#aem}

AEM Core Components 2.9.0 and later include ACDL as a client library, and Core Components push data and events for each component. See [Using the Adobe Client Data Layer with the Core Components](https://experienceleague.adobe.com/en/docs/experience-manager-core-components/using/developing/data-layer/overview).

If your AEM site also uses the ACDL tag extension, turn off the extension's **[!UICONTROL Load the Adobe Client Data Layer library if absent]** option so that only AEM loads the library. See [Configure the Adobe Client Data Layer extension](/help/tags/extensions/client/client-data-layer/configure.md).

## Load the library only once {#load-once}

Load ACDL once per page. If a second copy loads, it logs the following warning to the browser console and doesn't change the data layer:

```console
Adobe Client Data Layer v3.0.1 has already been imported/initialized on this page. You may be erroneously loading it a second time.
```

The first copy keeps running, so your data and listeners still work. Remove the duplicate to avoid the extra download. Duplicates are common when both a page template and the tag extension load the library.

## Verify the installation {#verify}

Open your browser's developer console on a page that loads ACDL and run the following commands:

```js
adobeDataLayer.version     // For example, "3.0.1"
adobeDataLayer.getState()  // The computed state of everything pushed so far
```

If `adobeDataLayer.version` is `undefined`, ACDL hasn't loaded on the page. See [Troubleshooting](troubleshooting.md).

## Upgrade from 2.x to 3.x {#upgrade}

Adobe Experience Manager Core Components load ACDL 2.x by default, so many sites still run 2.x. Review the following changes before you upgrade to 3.x. For all releases, see the [release notes on GitHub](https://github.com/adobe/adobe-client-data-layer/releases).

ACDL 3.0 replaced its internal utility library with built-in browser features. The file is much smaller, but the requirements and some merge behavior changed:

| Area | 2.x | 3.x |
| --- | --- | --- |
| Browser requirements | Older browsers supported | Requires `structuredClone()` and modern JavaScript. See [Browser requirements](overview.md#browser-requirements). |
| File size (minified) | About 33 KB | About 6 KB |
| Pushing an array to a key that already holds an array | Merges the arrays by position. Pushing `["c"]` over `["a", "b"]` results in `["c", "b"]`. | Replaces the array. Pushing `["c"]` over `["a", "b"]` results in `["c"]`. See [Arrays](concepts/computed-state.md#arrays). |
| Pushing an object to a key that holds a string, number, or boolean | Replaces the value with the object. | Doesn't replace the value. See [Change a value's type](concepts/computed-state.md#change-type). |
| Bracket notation in `getState()` paths, such as `items[0].sku` | Supported | Not supported. Use dot notation, such as `items.0.sku`. See [`getState()`](methods/getstate.md#paths). |
| npm package entry point | `import "@adobe/adobe-client-data-layer"` loads the library. | Import the file path. See [npm](#npm). |

Test your implementation after you upgrade, especially code that pushes arrays or changes the type of a value.
