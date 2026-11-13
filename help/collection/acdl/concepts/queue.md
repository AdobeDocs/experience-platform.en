---
title: Queue and history
description: Learn how the Adobe Client Data Layer array works as a queue before the library loads and as a history of data and events afterward.
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
# Queue and history

The `adobeDataLayer` array has two roles. Before the Adobe Client Data Layer (ACDL) library loads, it's a **queue** of items waiting to be processed. After the library loads, it's a **history** of the data and events that were pushed.

## Before ACDL loads: a queue {#queue}

Until the library loads, `adobeDataLayer` is a plain JavaScript array, and `push()` is the standard array method. Each push adds the item to the end of the array and does nothing else. Because of this, any script can push data, events, and functions at any time, even if the library hasn't downloaded yet.

When the library loads, it does the following:

1. Removes all queued items from the array.
1. Adds the ACDL methods to the same array, including its own version of `push()`.
1. Pushes the queued items again, one at a time, in their original order. Each item is processed as if it had been pushed after the library loaded.

The global `adobeDataLayer` object stays the same array throughout. References to it that scripts saved earlier keep working.

## Run code when ACDL is ready {#ready}

Only `push()` is guaranteed to exist on the array, because the library might not have loaded yet. To call other methods, such as [`getState()`](../methods/getstate.md) or [`addEventListener()`](../methods/addeventlistener.md), push a function:

```js
window.adobeDataLayer = window.adobeDataLayer || [];
window.adobeDataLayer.push(function(dl) {
  console.log(dl.getState());
  dl.addEventListener("click", handleClick);
});
```

If ACDL has already loaded, it calls the function immediately. If not, the function waits in the queue and runs when the library loads, after the items that were pushed before it. The function receives the data layer as its argument and as `this`.

>[!IMPORTANT]
>
>If a queued function throws an error while the library loads, ACDL stops processing the queue. Items that were queued after that function are lost. Catch errors inside the functions that you push.

## After ACDL loads: a history {#history}

After the library loads, the array keeps a record of what was pushed. ACDL adds some kinds of items to the array and removes others:

| Pushed item | Kept in the array |
| --- | --- |
| Data object | Yes |
| Event object, including its `event` and `eventInfo` keys | Yes |
| Function | No. ACDL calls it and doesn't keep it. |
| Invalid item, such as a string or a number | No. ACDL logs an error and doesn't keep it. |

The history holds the objects that you pushed, not copies of them. If you change an object after you push it, the history shows the change, but the [computed state](computed-state.md) doesn't.

You can inspect the history in your browser's developer console by typing `adobeDataLayer` and expanding the array. The number of items in the history is `adobeDataLayer.length`.

### Order of items pushed from listeners {#nested-order}

When an event listener pushes an item, ACDL processes that item before it finishes processing the item that triggered the listener. As a result, the item that the listener pushed appears in the history before the item that triggered it.

## How listeners use the history {#replay}

When you add a listener with the `past` or `all` [scope](../methods/addeventlistener.md#scope), ACDL calls it immediately for each matching item in the history, in order. This replay lets scripts that load late, such as a tag library, react to events that happened before they loaded.

The replay uses the items that are in the array when the listener is added. If the history was cleared, the cleared items aren't replayed.

## Don't modify the array directly {#modify}

Add items to the data layer only with `push()`. Don't use other JavaScript array methods that change the array, such as `pop()`, `shift()`, `unshift()`, `splice()`, `sort()`, `reverse()`, `fill()`, or `copyWithin()`. These methods bypass ACDL, so the computed state and listeners don't reflect the change, and replays for new listeners become inconsistent.

You can read the array with methods that don't change it, such as `filter()` or `find()`.

## Clear the history {#clear}

Every push that ACDL keeps adds an item to the array. On pages that stay open for a long time, such as single-page applications, the history keeps growing. You can clear it at a natural break, such as after each virtual page view.

Clearing the history doesn't change the computed state or remove listeners. It only affects which items are replayed for listeners that are added later with the `past` or `all` scope.

* **If you use tags**, use the [**[!UICONTROL Clear data layer history]**](/help/tags/extensions/client/client-data-layer/action-types.md#clear-history) action in the ACDL tag extension. It can keep a snapshot of the current computed state in the array or leave the array empty.
* **In your own code**, set the length of the array to `0` after ACDL has loaded:

  ```js
  window.adobeDataLayer.push(function(dl) {
    dl.length = 0;
  });
  ```
