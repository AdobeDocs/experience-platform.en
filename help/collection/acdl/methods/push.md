---
title: push
description: Add data, events, and functions to the Adobe Client Data Layer with the push method.
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
# `push()`

The `push()` method adds items to the Adobe Client Data Layer (ACDL). It's the only method that you can call before the library loads, so it's the main way that site code interacts with the data layer.

```ts
adobeDataLayer.push(...items: (object | Function)[]): number | undefined
```

Before ACDL loads, `push()` is the standard [`Array.prototype.push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method, and items wait in the array until the library loads. After ACDL loads, its version of `push()` processes each item immediately. See [Queue and history](../concepts/queue.md).

Always create the array before you push:

```js
window.adobeDataLayer = window.adobeDataLayer || [];
window.adobeDataLayer.push({ page: { title: "Home" } });
```

## Item types {#item-types}

You can push three types of items:

| Item | What ACDL does |
| --- | --- |
| [Data object](#data) | Merges the object into the computed state and triggers `adobeDataLayer:change`. |
| [Event object](#event) | Triggers the named event and `adobeDataLayer:event`. Merges any data in the object into the computed state. |
| [Function](#function) | Calls the function and passes the data layer to it. |

### Data object {#data}

A plain object without an `event` key. ACDL merges it into the [computed state](../concepts/computed-state.md):

```js
window.adobeDataLayer.push({
  page: { title: "Products", language: "en" },
  user: { loggedIn: true }
});
```

To delete a key, push `null` as its value. See [Delete data](../concepts/computed-state.md#delete).

### Event object {#event}

A plain object with an `event` key that contains a non-empty string. The object can also include an `eventInfo` key and data to merge into the computed state:

```js
window.adobeDataLayer.push({
  event: "cart add",
  eventInfo: { sku: "a-100" },
  cart: { itemCount: 3 }
});
```

ACDL merges the data, `cart` in this example, into the computed state, then calls the listeners for the event. See [Events](../concepts/events.md).

### Function {#function}

A function that ACDL calls when the library is ready. Use it to call other ACDL methods safely, even if the library hasn't loaded yet:

```js
window.adobeDataLayer.push(function(dl) {
  dl.addEventListener("cart add", function(event) {
    console.log("Added to cart:", event.eventInfo.sku);
  });
});
```

ACDL calls the function with the data layer as its argument and as `this`. It doesn't keep the function in the array. If the function throws an error, the error propagates to the code that called `push()`. Before the library loads, an error also stops ACDL from processing the rest of the queue. See [Run code when ACDL is ready](../concepts/queue.md#ready).

## Return value {#return}

After ACDL loads, `push()` returns the new length of the array when it adds an item to the history. It returns `undefined` when it doesn't add an item, such as when you push only a function or an invalid item.

## Push one item per call {#one-item}

You can pass several items to one `push()` call, and ACDL processes them in order. However, when one call combines different kinds of items, the history can become inconsistent. For example, if the first item is a function, ACDL processes the data objects that follow it but doesn't add them to the history. Push each item in a separate call.

## Invalid items {#invalid}

ACDL accepts only plain objects and functions. If you push any other value, such as a string, a number, a boolean, or an array, ACDL doesn't process it and logs the following error to the browser console:

```console
The following item cannot be handled by the data layer because it does not have a valid format: "example"
```

Pushing `null` or `undefined` throws a `TypeError`.

>[!NOTE]
>
>Objects with `on` and `handler` keys, or with an `off` key, aren't data. ACDL ignores them and doesn't add them to the history. To add or remove listeners, use [`addEventListener()`](addeventlistener.md) and [`removeEventListener()`](removeeventlistener.md).
