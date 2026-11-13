---
title: Events
description: Learn how to push events to the Adobe Client Data Layer, which events ACDL triggers for each push, and what event listeners receive.
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: c4147b6e-073b-4d3c-9ab1-d60f2f4434ef
    internal-label: Behavioral data
---
# Events

Events tell other scripts that something happened on the page, such as a page view, a click, or a form submission. You push an event to the Adobe Client Data Layer (ACDL) as an object with an `event` key. Scripts that registered an [event listener](../methods/addeventlistener.md) for that event name are called.

## Event objects {#event-objects}

An event object has the following keys:

| Key | Required | Description |
| --- | --- | --- |
| `event` | Yes | A non-empty string that names the event. Event names are case-sensitive: `cart add` and `Cart add` are different events. |
| `eventInfo` | No | Any additional information about this occurrence of the event, such as a reference to the component that the visitor clicked. ACDL passes `eventInfo` to listeners but doesn't store it in the computed state. |
| Any other key | No | Data to merge into the [computed state](computed-state.md), using the same rules as a data push. |

```js
window.adobeDataLayer = window.adobeDataLayer || [];

// An event with no data
window.adobeDataLayer.push({ event: "page loaded" });

// An event with extra information for listeners
window.adobeDataLayer.push({
  event: "click",
  eventInfo: { reference: "component.hero-1" }
});

// An event that also updates the computed state
window.adobeDataLayer.push({
  event: "cart add",
  eventInfo: { sku: "a-100" },
  cart: { itemCount: 3 }
});
```

After these pushes, the computed state is `{ cart: { itemCount: 3 } }`. The `event` and `eventInfo` keys aren't part of the computed state, but the event objects stay in the data layer array as [history](queue.md).

If the `event` key is missing, empty, or not a string, ACDL treats the object as a data push. No event listeners are called, and the computed state doesn't include the `event` or `eventInfo` keys.

>[!TIP]
>
>Choose a naming convention for events, such as `noun verb` (`cart add`, `form submit`) or `object.action` (`cart.add`, `form.submit`), and use it everywhere. Because names are case-sensitive, inconsistent names are a common reason that listeners don't run.

## Built-in events {#built-in-events}

In addition to the named event, ACDL triggers two built-in events:

* **`adobeDataLayer:change`**: Triggered when a push changes the computed state. Data pushes and event pushes that carry data trigger it.
* **`adobeDataLayer:event`**: Triggered for every event push, whatever its name.

The following table shows which events each kind of push triggers:

| Push | `adobeDataLayer:event` | `adobeDataLayer:change` | Named event |
| --- | --- | --- | --- |
| Data only, such as `{ page: { title: "Home" } }` | No | Yes | No |
| Event only, such as `{ event: "click" }` | Yes | No | Yes |
| Event and `eventInfo`, such as `{ event: "click", eventInfo: {...} }` | Yes | No | Yes |
| Event and data, such as `{ event: "cart add", cart: {...} }` | Yes | Yes | Yes |

When one push triggers more than one event, ACDL calls the listeners in the following order: `adobeDataLayer:event`, then `adobeDataLayer:change`, then the named event.

## What listeners receive {#listener-arguments}

ACDL calls each listener with one argument: a copy of the complete object that was pushed, including `event`, `eventInfo`, and any data.

```js
window.adobeDataLayer.push(function(dl) {
  dl.addEventListener("cart add", function(event) {
    console.log(event.eventInfo.sku);       // "a-100"
    console.log(event.cart.itemCount);      // 3
    console.log(dl.getState("cart"));       // { itemCount: 3 }
  });
});
```

The following details apply to every listener:

* **The computed state is already updated.** When a listener runs, the computed state already includes the data from the push that triggered it.
* **The argument is a copy.** Changing it doesn't change the data layer or the object that was pushed.
* **`this` is the data layer.** Inside a listener function, `this` refers to the `adobeDataLayer` array.
* **Listeners run synchronously.** ACDL calls each listener before `push()` returns. Keep listeners short, and don't run slow work in them.

## Listen to past and future events {#scope}

By default, a new listener runs for matching events that are already in the data layer array, and for matching events that are pushed later. This behavior means that a script can add its listener at any time without missing events that happened earlier, such as a page view that was pushed before your tag library loaded.

You can change this behavior with the [`scope`](../methods/addeventlistener.md#scope) option to listen only to past events or only to future events. For how ACDL keeps past events, see [Queue and history](queue.md).

## Avoid endless loops {#loops}

A listener can push to the data layer. ACDL processes that push immediately, before the listener returns. If a listener pushes something that triggers the same listener again, the calls never end until the browser throws a stack overflow error, such as `RangeError: Maximum call stack size exceeded`. For example, an `adobeDataLayer:change` listener that pushes data triggers itself.

Push from a listener only when the new push can't trigger the same listener.
