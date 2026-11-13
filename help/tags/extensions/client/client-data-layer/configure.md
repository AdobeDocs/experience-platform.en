---
title: Configure the Adobe Client Data Layer extension
description: Set the data layer name and control how the Adobe Client Data Layer tag extension loads the ACDL library.
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
---
# Configure the Adobe Client Data Layer extension

The extension configuration controls which global name the extension uses for the data layer and whether the extension loads the Adobe Client Data Layer (ACDL) library.

To open the configuration, navigate to **[!UICONTROL Extensions]** > **[!UICONTROL Installed]** in your tag property, and select **[!UICONTROL Configure]** on the **[!UICONTROL Adobe Client Data Layer]** extension card.

## Data layer name {#data-layer-name}

**[!UICONTROL Data layer name]** is the name of the global variable that the extension's events, actions, and data elements use. The default is `adobeDataLayer`, and this field is required.

The ACDL library itself always uses `window.adobeDataLayer`. When you enter a different name, such as `customLayer`, the extension makes that name refer to the same array as `window.adobeDataLayer`. Both names share the same queue, computed state, history, and listeners, so your site code can push to either one.

When the tag library loads, the extension connects the two names as follows:

| What exists when the tag library loads | What the extension does |
| --- | --- |
| No variable with the custom name | Creates the custom name and points it to the `adobeDataLayer` array. |
| An array with the custom name that ACDL hasn't initialized | Moves the queued items to the `adobeDataLayer` array in order, then points the custom name to the `adobeDataLayer` array. |
| An array with the custom name that ACDL has already initialized | Points `adobeDataLayer` to that array. |

Use the default name unless your site already pushes to a different name. If you use a custom name, make sure that your site code creates the array with the same pattern as the default name:

```js
window.customLayer = window.customLayer || [];
window.customLayer.push({ page: { title: "Home" } });
```

## Load the Adobe Client Data Layer library if absent {#load-library}

When **[!UICONTROL Load the Adobe Client Data Layer library if absent]** is selected, which is the default, the extension checks whether ACDL is running when the tag library loads. If it isn't, the extension downloads ACDL 3.0.1 and initializes it. If the page has already loaded ACDL, the extension uses that copy and downloads nothing.

The extension downloads the library asynchronously, so the tag library doesn't wait for it. Until the download finishes:

* Pushes from your site code, and from the [**[!UICONTROL Push to data layer]**](action-types.md#push-to-data-layer) action, wait in the [queue](/help/collection/acdl/concepts/queue.md). ACDL processes them in order when it loads.
* Rules with a [**[!UICONTROL Data layer push]**](event-types.md) event start listening when ACDL loads. With the default **[!UICONTROL All]** time scope, they also run for matching pushes that happened earlier.
* The [**[!UICONTROL Clear data layer history]**](action-types.md#clear-history) action waits for ACDL before it clears the history.
* The [**[!UICONTROL Data layer computed state]**](data-element-types.md#computed-state) data element returns `undefined`.

If the download fails, the extension logs the error `Could not load Adobe Client Data Layer` with the reason. Queued items stay in the array. To see extension log messages in the console, [enable tags debugging](/help/collection/tags/setdebug.md).

Clear this option in the following situations:

* **Your pages already load ACDL**, for example with Adobe Experience Manager Core Components 2.9.0 or later, or with your own script tag. Clearing the option avoids a second download. If the page's copy loads after the tag library, the extension's copy can finish first, and the page's copy then logs a [duplicate-load warning](/help/collection/acdl/install.md#load-once).
* **You need a different ACDL version**, such as ACDL 2.x for older browsers. Load that version on your pages yourself.

If you clear this option and the page doesn't load ACDL, the extension still creates the array, but nothing processes the queue. Rules with a **[!UICONTROL Data layer push]** event don't run, and the **[!UICONTROL Data layer computed state]** data element returns `undefined`.

### Hosted library file {#hosted-file}

The extension loads ACDL from a file named `adobe-client-data-layer.js` (`adobe-client-data-layer.min.js` in minified builds). This file is part of each tag library build and is hosted alongside the tag library, wherever your tag library is hosted. The extension loads the file with a JavaScript `import()` call.

Consider the following when you secure or host your tag library:

* **Content Security Policy**: The file loads from the same host as your tag library, so a `script-src` directive that allows your tag library also allows this file. See [Content Security Policy support](/help/tags/ui/client-side/content-security-policy.md).
* **Self-hosting**: If you [self-host your tag library](/help/tags/ui/publishing/hosts/self-hosting-libraries.md), deploy all files in the build archive, including this file. If your tag library is served from a different origin than your pages, your server must send an `Access-Control-Allow-Origin` header for the file, because browsers request files for `import()` with CORS. Serve the file with a JavaScript content type. Adobe-managed hosting already meets these requirements.
