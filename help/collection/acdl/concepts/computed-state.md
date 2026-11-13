---
title: Data and the computed state
description: Learn how the Adobe Client Data Layer merges pushed data into a single computed state, and how to update, replace, and delete values.
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b23e006f-0a29-4f1d-8fd0-77aa56f3d12b
    internal-label: Data modeling
---
# Data and the computed state

The Adobe Client Data Layer (ACDL) merges every data object that you push into a single object called the **computed state**. Any script can read the computed state at any time with [`getState()`](../methods/getstate.md). You can push all your data at once or in many small pushes from different scripts. The computed state is the same either way.

```js
window.adobeDataLayer = window.adobeDataLayer || [];
window.adobeDataLayer.push({ page: { title: "Getting started" } });
window.adobeDataLayer.push({ component: { "hero-1": { title: "Learn more", link: "learn-more.html" } } });
window.adobeDataLayer.push({ page: { language: "en" } });
```

After these pushes, `adobeDataLayer.getState()` returns the following object:

```json
{
  "page": {
    "title": "Getting started",
    "language": "en"
  },
  "component": {
    "hero-1": {
      "title": "Learn more",
      "link": "learn-more.html"
    }
  }
}
```

Event objects can also carry data. ACDL merges every key in an event object except `event` and `eventInfo`, which are never stored in the computed state. See [Events](events.md).

## Merge rules {#merge-rules}

When you push data, ACDL compares each key in the pushed object with the computed state:

| Pushed value | Result in the computed state |
| --- | --- |
| A key that doesn't exist in the computed state | Adds the key and its value. |
| An object, where the computed state also holds an object | Merges the two objects. Keys that you don't push keep their current values. This rule applies at every level of nesting. |
| A string, number, or boolean | Replaces the current value. |
| An array | Replaces the current value. See [Arrays](#arrays). |
| `null` or `undefined` | Deletes the key. See [Delete data](#delete). |

For example, the second push below changes only `page.title`. The `page.language` key keeps its value:

```js
adobeDataLayer.push({ page: { title: "Home", language: "en" } });
adobeDataLayer.push({ page: { title: "Products" } });
adobeDataLayer.getState("page");
// { title: "Products", language: "en" }
```

## Delete data {#delete}

To delete a key, push `null` or `undefined` as its value:

```js
adobeDataLayer.push({ page: { title: "Products", language: "en" }, user: { id: "123" } });
adobeDataLayer.push({ page: { language: null }, user: null });
adobeDataLayer.getState();
// { page: { title: "Products" } }
```

Deleting the last key inside an object leaves an empty object. To delete the object too, push `null` for the object itself.

```js
adobeDataLayer.push({ page: { title: null } });
adobeDataLayer.getState();
// { page: {} }
```

Listeners that use the [`path`](../methods/addeventlistener.md#path) option are called when you delete the key at that path, or any object that contains it.

## Arrays {#arrays}

An array is stored as a single value. When you push an array to a key that already holds an array, ACDL replaces the whole array. To add an item, push the complete array with the new item:

```js
adobeDataLayer.push({ cart: { skus: ["a-100", "b-200"] } });
adobeDataLayer.push({ cart: { skus: ["a-100", "b-200", "c-300"] } });
adobeDataLayer.getState("cart.skus");
// ["a-100", "b-200", "c-300"]
```

ACDL removes `null` and `undefined` entries from arrays that you push:

```js
adobeDataLayer.push({ cart: { skus: ["a-100", null, "c-300"] } });
adobeDataLayer.getState("cart.skus");
// ["a-100", "c-300"]
```

>[!NOTE]
>
>ACDL 2.x merges arrays by position instead of replacing them. In 2.x, pushing `["c"]` over `["a", "b"]` results in `["c", "b"]`. To get the same result in both versions, always push the complete array.

## Change a value's type {#change-type}

You can replace an object with a string, a number, a boolean, or an array. However, in ACDL 3.x, pushing an object to a key that currently holds a string, a number, a boolean, or an array doesn't replace the value. If the current value is `0`, `false`, or an empty string, the key is deleted instead.

To change a value into an object, delete the key first, then push the object:

```js
adobeDataLayer.push({ product: "a-100" });
adobeDataLayer.push({ product: null });
adobeDataLayer.push({ product: { sku: "a-100", price: 25 } });
adobeDataLayer.getState("product");
// { sku: "a-100", price: 25 }
```

The best way to avoid this situation is to keep each key's type consistent in your data layer design.

## Value types {#value-types}

Use JSON-compatible values in the data layer: strings, numbers, booleans, `null`, plain objects, and arrays. ACDL converts other kinds of objects as it merges them:

| Value | Stored as |
| --- | --- |
| `Date` object | An empty object (`{}`). Store dates as strings, such as `new Date().toISOString()`, or as numbers. |
| Function | An empty object (`{}`). |
| `Map` or `Set` | An empty object (`{}`). |
| An instance of a class | A plain object that contains only the instance's own enumerable properties. |
| Empty objects, empty arrays, empty strings, `0`, and `false` | Stored as is. |

Push only plain objects. ACDL rejects other values, such as strings, numbers, and arrays, when you push them directly. See [`push()`](../methods/push.md).

## Copies, not references {#copies}

The computed state is independent of the objects that you push. Changing an object after you push it doesn't change the computed state:

```js
const page = { title: "Home" };
adobeDataLayer.push({ page: page });
page.title = "Changed";
adobeDataLayer.getState("page.title");
// "Home"
```

Similarly, [`getState()`](../methods/getstate.md) returns a copy. Changing the returned object doesn't change the data layer. To change the computed state, always push the change.
