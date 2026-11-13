---
title: Adobe Client Data Layer overview
description: Learn how the Adobe Client Data Layer gives your website a standard way to expose data and events to tags, the Web SDK, and any other script on the page.
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
# Adobe Client Data Layer overview

The **Adobe Client Data Layer** (ACDL) is a small, open-source JavaScript library that gives your website a standard way to expose data and events to any script on the page. Your site code pushes data and events to a JavaScript array named `adobeDataLayer`. Tag rules, the Web SDK, and other scripts read that data and listen for those events, regardless of when the ACDL script loads.

This guide documents the ACDL library. To use ACDL in the Data Collection UI, see the [Adobe Client Data Layer tag extension](/help/tags/extensions/client/client-data-layer/overview.md).

## Why use a data layer {#why}

Without a data layer, tags often scrape values from the page, such as text in the DOM or parameters in the URL. These implementations break when the page design changes, and they can only collect what the page displays. A data layer separates two responsibilities:

* **Your site code** describes what happens on the page, such as the page name, the product that a visitor viewed, or the form that they submitted.
* **Your tags and other scripts** decide what to do with that information, such as which data to send to Adobe and when.

ACDL adds the following capabilities to this pattern:

* **Asynchronous loading.** Site code can push data before the ACDL script loads. ACDL processes everything in order when it loads, so you can load it with `async` or `defer` without losing data.
* **Events and listeners.** Scripts can listen for named events or data changes, including events that happened before the listener was added.
* **Computed state.** ACDL merges every data push into a single object that any script can read at any time.
* **History.** The array keeps a record of the data and events that were pushed, which helps you debug your implementation.

## How it works {#how-it-works}

ACDL is built around a plain JavaScript array:

1. Your page creates the `window.adobeDataLayer` array if it doesn't already exist.
1. Your site code adds items to the array with `push()`. An item can be a data object, an event object, or a function. Before ACDL loads, these items wait in the array like a queue.
1. When the ACDL script loads, it adds methods to the array, such as [`getState()`](methods/getstate.md) and [`addEventListener()`](methods/addeventlistener.md), and replaces `push()` with its own version. It then processes every queued item in the order that it was pushed.
1. From then on, ACDL processes each new item as soon as it's pushed. It merges data into the [computed state](concepts/computed-state.md), calls matching [event listeners](concepts/events.md), and keeps data and event objects in the array as [history](concepts/queue.md).

```js
// Site code: describe what happened on the page
window.adobeDataLayer = window.adobeDataLayer || [];
window.adobeDataLayer.push({
  page: { title: "Home", language: "en" }
});
window.adobeDataLayer.push({ event: "page view" });

// Another script: react to what happened
window.adobeDataLayer.push(function(dl) {
  dl.addEventListener("page view", function(event) {
    console.log("Page title:", dl.getState("page.title"));
  });
});
```

Because the listener uses the default `all` [scope](methods/addeventlistener.md#scope), it runs for the `page view` event even though that event was pushed first.

ACDL stores and distributes data within the page. It doesn't send data anywhere. To send data to Adobe, use tags or the Web SDK to read from the data layer. See [Send Adobe Client Data Layer data with the Web SDK](web-sdk.md).

## How ACDL works with other Adobe tools {#adobe-tools}

| Tool | Relationship to ACDL |
| --- | --- |
| [Tags](/help/tags/home.md) | The [ACDL tag extension](/help/tags/extensions/client/client-data-layer/overview.md) can load the library, trigger rules when data or events are pushed, read the computed state in data elements, and push data or clear history in rule actions. |
| [Web SDK](/help/collection/js/js-overview.md) | The Web SDK sends data to the Edge Network. Your code or your tag rules read data from ACDL and pass it to the Web SDK. See [Send Adobe Client Data Layer data with the Web SDK](web-sdk.md). |
| Adobe Experience Manager | Core Components 2.9.0 and later include ACDL and can push component data and events to it automatically. See [Using the Adobe Client Data Layer with the Core Components](https://experienceleague.adobe.com/en/docs/experience-manager-core-components/using/developing/data-layer/overview). |

## Data format {#data-format}

ACDL doesn't require a specific data structure. You can push any plain object, and ACDL merges it into the computed state. Because many scripts and teams depend on the same data, consider the following practices:

* **Agree on a structure** before you write to the data layer, and document it for everyone who pushes data or reads it.
* **Use JSON-compatible values**, such as strings, numbers, booleans, plain objects, and arrays. Other values, such as `Date` objects and functions, don't survive the merge. See [Value types](concepts/computed-state.md#value-types).
* **Consider your destination.** If you send the data to Adobe Experience Platform, you can structure it to resemble your [XDM schema](/help/xdm/home.md) so that it's easy to map, or keep your own structure and map it in the datastream with [Data Prep for Data Collection](/help/datastreams/data-prep.md).

## Browser requirements {#browser-requirements}

ACDL 3.x uses the browser's [`structuredClone()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone) function and modern JavaScript syntax. It requires one of the following browsers or later:

* Chrome 98
* Edge 98
* Firefox 94
* Safari 15.4

ACDL 2.x has lower browser requirements. See [Upgrade from 2.x to 3.x](install.md#upgrade) for the differences between versions.

## Versions and source code {#source}

ACDL is open source under the Apache License 2.0.

* **Source code and issues**: [`adobe/adobe-client-data-layer`](https://github.com/adobe/adobe-client-data-layer) on GitHub
* **Package**: [`@adobe/adobe-client-data-layer`](https://www.npmjs.com/package/@adobe/adobe-client-data-layer) on npm
* **Release notes**: [GitHub releases](https://github.com/adobe/adobe-client-data-layer/releases)

To check which version is running on a page, read the `version` property in your browser's console:

```js
adobeDataLayer.version
```

## Next steps {#next-steps}

* [Install ACDL](install.md)
* [Learn how data merges into the computed state](concepts/computed-state.md)
* [Learn how events and listeners work](concepts/events.md)
* [Review the ACDL methods](methods/overview.md)
