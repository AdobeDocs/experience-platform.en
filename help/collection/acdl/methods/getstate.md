---
title: getState
description: Read the Adobe Client Data Layer computed state, or a single value from it, with the getState method.
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
---
# `getState()`

The `getState()` method returns a copy of the Adobe Client Data Layer (ACDL) [computed state](../concepts/computed-state.md): the result of merging all the data that was pushed so far.

```ts
adobeDataLayer.getState(path?: string | string[]): any
```

This method exists only after ACDL loads. If your code might run before then, call it from a function that you push. See [Call methods safely](overview.md#call-safely).

## Get the entire computed state {#entire-state}

Call `getState()` without arguments:

```js
window.adobeDataLayer = window.adobeDataLayer || [];
window.adobeDataLayer.push({ page: { title: "Getting started" } });
window.adobeDataLayer.push({ component: { "hero-1": { title: "Learn more", link: "learn-more.html" } } });

window.adobeDataLayer.push(function(dl) {
  console.log(dl.getState());
});
```

The console shows the following object:

```json
{
  "page": {
    "title": "Getting started"
  },
  "component": {
    "hero-1": {
      "title": "Learn more",
      "link": "learn-more.html"
    }
  }
}
```

If nothing has been pushed, `getState()` returns an empty object (`{}`).

## Get a value at a path {#paths}

Pass a path to get one value from the computed state. Separate the keys in the path with dots:

```js
window.adobeDataLayer.push(function(dl) {
  dl.getState("component.hero-1");        // { title: "Learn more", link: "learn-more.html" }
  dl.getState("component.hero-1.title");  // "Learn more"
});
```

The following rules apply to paths:

* **Array items**: Use the item's index as a key, such as `cart.items.0.sku`. ACDL 3.x doesn't support bracket notation, such as `cart.items[0].sku`.
* **Keys that contain dots**: Pass the path as an array of keys instead of a string, such as `["component", "hero.1", "title"]`.
* **Missing values**: If any key in the path doesn't exist, `getState()` returns `undefined`. It doesn't throw an error.
* **Return type**: The value at the path can be of any type, such as an object, an array, a string, a number, or a boolean.

## Returned values are copies {#copies}

`getState()` returns a copy of the computed state, not the computed state itself. Changing the returned object doesn't change the data layer:

```js
const state = adobeDataLayer.getState();
state.page.title = "Changed";
adobeDataLayer.getState("page.title");  // Still "Getting started"
```

To change the computed state, push the change with [`push()`](push.md).

Each call copies the entire computed state, even when you pass a path. On pages with a large data layer, avoid calling `getState()` in code that runs very often, such as a scroll handler. Read the value once and reuse it.

## Read the state in an event listener {#in-listener}

When an [event listener](addeventlistener.md) runs, the computed state already includes the data from the push that triggered it:

```js
window.adobeDataLayer.push(function(dl) {
  dl.addEventListener("adobeDataLayer:change", function(event) {
    console.log("New page title:", dl.getState("page.title"));
  }, { path: "page.title" });
});
```
