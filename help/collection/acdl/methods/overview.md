---
title: Adobe Client Data Layer methods overview
description: Learn which methods the Adobe Client Data Layer adds to the adobeDataLayer array, and how to call them safely.
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
# Methods overview

When the Adobe Client Data Layer (ACDL) library loads, it adds the following methods and properties to the `adobeDataLayer` array:

| Method or property | Description |
| --- | --- |
| [`push()`](push.md) | Adds data, events, and functions to the data layer. Available before and after the library loads. |
| [`getState()`](getstate.md) | Returns a copy of the computed state, or of the value at a path. |
| [`addEventListener()`](addeventlistener.md) | Calls a function when a named event or a built-in event is triggered. |
| [`removeEventListener()`](removeeventlistener.md) | Removes listeners that `addEventListener()` added. |
| `version` | A string that contains the version of the ACDL library, such as `"3.0.1"`. |

## Call methods safely {#call-safely}

If ACDL loads asynchronously, which is the recommended approach, your code can run before the library loads. At that point, `adobeDataLayer` is a plain array: `push()` exists, but `getState()`, `addEventListener()`, and `removeEventListener()` don't.

To call these methods safely, push a function. ACDL runs it as soon as the library is ready and passes the data layer as its argument:

```js
window.adobeDataLayer = window.adobeDataLayer || [];
window.adobeDataLayer.push(function(dl) {
  const title = dl.getState("page.title");
  dl.addEventListener("cart add", handleCartAdd);
});
```

Calling `adobeDataLayer.getState()` directly works only when you're sure that ACDL has already loaded, such as in your browser's developer console or in code that runs from an ACDL event listener.

## Array methods {#array-methods}

`adobeDataLayer` is still a JavaScript array. You can read it with methods that don't change it, such as `filter()`, `find()`, and `length`. Don't use methods that change the array, such as `splice()` or `shift()`. See [Queue and history](../concepts/queue.md#modify).
