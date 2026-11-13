---
title: removeEventListener
description: Remove event listeners that you added to the Adobe Client Data Layer.
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
# `removeEventListener()`

The `removeEventListener()` method removes listeners that [`addEventListener()`](addeventlistener.md) added to the Adobe Client Data Layer (ACDL).

```ts
adobeDataLayer.removeEventListener(type: string, listener?: Function): void
```

This method exists only after ACDL loads. Call it from a function that you push. See [Call methods safely](overview.md#call-safely).

## Parameters {#parameters}

| Parameter | Required | Description |
| --- | --- | --- |
| `type` | Yes | The event name that the listener was added for, such as `"click"` or `"adobeDataLayer:change"`. Event names are case-sensitive. |
| `listener` | No | The function to remove. If you omit it, ACDL removes all listeners for `type`. |

## Remove one listener {#remove-one}

Pass the same function reference that you passed to `addEventListener()`:

```js
function handleClick(event) {
  console.log("Clicked:", event.eventInfo.reference);
}

window.adobeDataLayer = window.adobeDataLayer || [];
window.adobeDataLayer.push(function(dl) {
  dl.addEventListener("click", handleClick);
});

// Later
window.adobeDataLayer.push(function(dl) {
  dl.removeEventListener("click", handleClick);
});
```

You can't remove an anonymous function individually, because you can't pass the same reference again. Passing a new anonymous function, even one with identical code, removes nothing. To remove anonymous listeners, remove all listeners for the event.

## Remove all listeners for an event {#remove-all}

Omit the `listener` argument:

```js
window.adobeDataLayer.push(function(dl) {
  dl.removeEventListener("adobeDataLayer:change");
});
```

This call removes every listener for `adobeDataLayer:change`, including listeners that other scripts added, such as tag rules. Use it with care.

## Behavior {#behavior}

* Removing a listener that isn't registered does nothing and doesn't log an error.
* Removing a listener doesn't change the computed state or the history.
